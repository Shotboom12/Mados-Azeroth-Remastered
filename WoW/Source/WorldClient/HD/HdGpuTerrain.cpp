// Claude voie B, B3 (23 nov 2026): the terrain's groups. See HdGpuTerrain.h.
#include "WoW/Source/WorldClient/HD/HdGpuTerrain.h"

#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxBuf.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/wxl/src/vulkan/GpuSceneData.hpp"
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/Model2/M2Light.h"
#include "Engine/Source/Model2/M2Scene.h"
#include "Engine/Source/Services/Texture.h"
#include "WoW/Source/WorldClient/HD/HdLights.h"
#include "WoW/Source/WorldClient/HD/HdTerrain.h"
#include "WoW/Source/WorldClient/Map.h"
#include "WoW/Source/WorldClient/MapChunk.h"
#include "WoW/Source/WorldClient/MapRenderChunk.h"
#include "WoW/Source/WorldClient/World.h"

#include <cstring>
#include <vector>
#include <xmmintrin.h>

// vulkan/GpuFixed.cpp (wxl)
struct HdGpuFixedCpuSpan
{
    void*    palette = nullptr;
    void*    args = nullptr;
    uint32_t firstInstance = 0;
    uint32_t commands = 0;
    uint32_t rows = 0;
    uint32_t slot = 0;
    uint32_t argsOffset = 0;
};
bool HdGpuFixedDevCpuAlloc(uint32_t rows, uint32_t copies, uint32_t commands, HdGpuFixedCpuSpan& span);
void HdGpuFixedDevDisarm();
bool HdGpuTerrainDevReady();
bool HdGpuTerrainDevFrame();
bool HdGpuTerrainDevTexture(void* device, void* tex, float& place, bool& cube);
bool HdGpuTerrainDevGeometry(const void* vertexBuf, const void* indexBuf, uint32_t start, uint32_t& firstIndex, int32_t& vertexOffset);
bool HdGpuTerrainDevArm(const HdGpuFixedCpuSpan& span, uint32_t first, uint32_t count, const HD::GpuTerrainData::Draw* draw);

namespace
{
    namespace data = HD::GpuTerrainData;

    constexpr uint32_t kGroups = 4;      // open at once
    constexpr uint32_t kMemories = 8;    // lists the record thread may still read
    constexpr uint32_t kLampRows = data::kRows - data::kRowLamps;

    CVar* s_cvar = nullptr;

    // MapRenderChunk.cpp s_texAnimRate
    const float kAnimRate[8] = { 64.0f, 48.0f, 32.0f, 16.0f, 8.0f, 4.0f, 2.0f, 1.0f };

    struct Group
    {
        int32_t     lights = 0;
        int32_t     flags = 0;             // m_renderFlags & 5
        const void* cube = nullptr;        // the reflective lists' first layer
        std::vector<CMapRenderChunk*> chunks;
        std::vector<data::Chunk>      made;
    };

    struct Memory
    {
        std::vector<data::Chunk> chunks;   // in the commands' order; reserved, never moved while read
        std::vector<data::Draw>  draws;
    };

    Memory            s_memory[kMemories];
    uint32_t          s_at = 0;
    Group             s_group[kGroups];
    uint32_t          s_open = 0;
    HdGpuFixedCpuSpan s_span;
    uint32_t          s_copies = 0, s_used = 0, s_commands = 0;

    const std::vector<CMapRenderChunk*>* s_ahead = nullptr;   // the pass's chunks, in order
    size_t            s_next = 0;

    void Ask(const void* p) { _mm_prefetch(static_cast<const char*>(p), _MM_HINT_T0); }

    // The memory of the chunks to come, in three steps (what a step reads, an earlier one asked for).
    void Ahead(const CMapRenderChunk* chunk)
    {
        const std::vector<CMapRenderChunk*>& list = *s_ahead;
        while (s_next < list.size() && list[s_next] != chunk) s_next++;
        const size_t at = s_next;
        if (at + 18 < list.size())
        {
            const char* c = reinterpret_cast<const char*>(list[at + 18]);
            for (size_t line = 0; line < sizeof(CMapRenderChunk); line += 64) Ask(c + line);
        }
        if (at + 12 < list.size())
        {
            const CMapRenderChunk* c = list[at + 12];
            if (c->m_chunkBuf) Ask(c->m_chunkBuf);
            if (c->m_terrainBlendTexture)
            {
                Ask(&c->m_terrainBlendTexture->m_flags);
                Ask(&c->m_terrainBlendTexture->m_atlas);
            }
        }
        if (at + 7 < list.size())
        {
            const CMapRenderChunk* c = list[at + 7];
            if (c->m_chunkBuf)
            {
                Ask(c->m_chunkBuf->m_vertexBuf);
                Ask(c->m_chunkBuf->m_indexBuf);
            }
            if (c->m_terrainBlendTexture && c->m_terrainBlendTexture->m_gxTex)
            {
                const char* t = reinterpret_cast<const char*>(c->m_terrainBlendTexture->m_gxTex);
                Ask(t);
                Ask(t + 64);
                Ask(t + 128);
            }
        }
        if (at + 3 < list.size())
        {
            const CMapRenderChunk* c = list[at + 3];
            if (c->m_terrainBlendTexture && c->m_terrainBlendTexture->m_gxTex)
                if (const void* image = c->m_terrainBlendTexture->m_gxTex->m_apiSpecificData2)
                    for (size_t line = 0; line < 192; line += 64) Ask(static_cast<const char*>(image) + line);
        }
    }

    void Ordinary(CMapRenderChunk* chunk)
    {
        chunk->RenderSetup(1);
        chunk->RenderSinglePassVertexPixelShader();
    }

    void Draw(Group& group)
    {
        const uint32_t n = static_cast<uint32_t>(group.chunks.size());
        Memory& mem = s_memory[s_at];
        const size_t first = mem.chunks.size();
        uint32_t* args = static_cast<uint32_t*>(s_span.args) + 5u * s_commands;
        for (const data::Chunk& c : group.made)
        {
            mem.chunks.push_back(c);
            args[0] = c.indexCount;
            args[1] = 1u;
            args[2] = c.firstIndex;
            args[3] = static_cast<uint32_t>(c.vertexOffset);
            args[4] = c.instance;
            args += 5;
        }
        data::Draw draw;
        draw.chunks = mem.chunks.data() + first;
        draw.count = n;
        draw.lighting = (group.flags & 1) != 0;
        mem.draws.push_back(draw);

        CMapRenderChunk* last = group.chunks.back();
        last->RenderSetup(1);
        if (HdGpuTerrainDevArm(s_span, s_commands, n, &mem.draws.back()))
        {
            last->RenderSinglePassVertexPixelShader();
            HdGpuFixedDevDisarm();
        }
        else
        {
            for (CMapRenderChunk* chunk : group.chunks) Ordinary(chunk);
        }
        s_commands += n;
        group.chunks.clear();
        group.made.clear();
    }
}

int HD::GpuTerrain::Mode()
{
    if (!s_cvar)
        s_cvar = CVar::Register("hdGpuTerrain", "HD: the terrain chunks drawn by the GPU in groups (voie B, B3): 0 = the original, 1 = voie B", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    return s_cvar ? s_cvar->m_intValue : 0;
}

bool HD::GpuTerrain::Begin(const std::vector<CMapRenderChunk*>& list)
{
    const uint32_t chunks = static_cast<uint32_t>(list.size());
    s_ahead = &list;
    s_next = 0;
    s_open = 0;
    s_used = s_commands = 0;
    if (chunks < 2 || !World::s_m2Scene || !HdGpuTerrainDevReady() || !HdGpuTerrainDevFrame()) return false;
    // + 3: a replay reads a whole palette (3600 bytes) from a chunk's rows.
    if (!HdGpuFixedDevCpuAlloc(data::kRows, chunks + 3u, chunks, s_span)) return false;
    s_copies = chunks;
    s_at = (s_at + 1u) % kMemories;
    Memory& mem = s_memory[s_at];
    mem.chunks.clear();
    mem.draws.clear();
    mem.chunks.reserve(chunks);
    mem.draws.reserve(chunks);
    return true;
}

bool HD::GpuTerrain::Add(CMapRenderChunk* chunk, int32_t layers)
{
    Ahead(chunk);
    if (!chunk->m_chunkBuf || chunk->m_batch.m_primType != GxPrim_Triangles || !chunk->m_batch.m_count || chunk->m_layersCount != layers
        || layers < 1 || layers > 4 || s_used >= s_copies)
        return false;

    chunk->m_lastUpdateTime = 0.0f;   // RenderSetup(1)
    chunk->AllocLayerTextures();

    // The textures (RenderSinglePassVertexPixelShader).
    float place[8] = {};
    const void* cube = nullptr;
    for (int32_t i = 0; i < layers; i++)
    {
        CGxTex* gxTex = TextureGetGxTex(chunk->m_layers[i].m_texture, 0, nullptr);
        if (!gxTex) return false;
        GxTexSetWrap(gxTex, GxTex_Wrap, GxTex_Wrap);
        bool isCube = false;
        if (!HdGpuTerrainDevTexture(g_theGxDevicePtr, gxTex, place[i], isCube)) return false;
        if (i == 0 && (chunk->m_renderFlags & 1)) cube = gxTex;   // that slot may be a cube: the draw's own set holds it
        else if (isCube) return false;
    }
    CGxTex* blend = chunk->m_terrainBlendTexture ? TextureGetGxTex(chunk->m_terrainBlendTexture, 1, nullptr) : nullptr;
    bool blendCube = false;
    if (!blend || !HdGpuTerrainDevTexture(g_theGxDevicePtr, blend, place[layers], blendCube) || blendCube) return false;

    data::Chunk made = {};
    made.indexCount = chunk->m_batch.m_count;
    if (!HdGpuTerrainDevGeometry(chunk->m_chunkBuf->m_vertexBuf, chunk->m_chunkBuf->m_indexBuf, chunk->m_batch.m_start, made.firstIndex, made.vertexOffset))
        return false;

    // The constants (SetVertexShader), rows 0 .. 19.
    const CMapRenderChunk::SVertexShaderConstants& consts = CMapRenderChunk::s_vertexShaderConsts;
    float rows[data::kRows][4];
    std::memcpy(rows[0], consts.m_texOffset, 4 * 16);
    std::memcpy(rows[4], consts.m_texScale, 6 * 16);
    for (int32_t i = 0; i < layers; i++)
    {
        const CMapRenderChunkLayer& layer = chunk->m_layers[i];
        if (!(layer.m_flags & 0x40)) continue;
        C4Vector dir = World::texVect[layer.m_flags & 7];
        float moveScale = 1.0f / CMapChunk::s_geoToTex / kAnimRate[(layer.m_flags >> 3) & 7];
        rows[i][0] = -(dir.x * moveScale * 0.125f);
        rows[i][1] = -(dir.y * moveScale * 0.125f);
    }
    for (int32_t i = 1; i <= layers; i++)
    {
        rows[4 + i][0] = -CMapChunk::s_geoToTex;
        rows[4 + i][1] = -CMapChunk::s_geoToTex;
        rows[4 + i][2] = 0.0f;
        rows[4 + i][3] = 0.0f;
    }
    float* alpha = rows[4 + layers + 1];
    alpha[0] = -CMapChunk::s_geoToTex * 0.125f;
    alpha[1] = -CMapChunk::s_geoToTex * 0.125f;
    alpha[2] = 0.0f;
    alpha[3] = 0.0f;
    if (chunk->m_unkFlags & 0x1) alpha[0] = CMapChunk::s_geoToTex * -0.0625f;
    else if (chunk->m_unkFlags & 0x2) alpha[1] = CMapChunk::s_geoToTex * -0.0625f;
    rows[10][0] = chunk->m_vec1.x;
    rows[10][1] = chunk->m_vec1.y;
    rows[10][2] = chunk->m_vec1.z;
    rows[10][3] = 0.0f;

    CM2Lighting lighting(chunk->m_sphere);
    World::s_m2Scene->SelectLights(&lighting);
    C3Vector position(0.0f, 0.0f, 0.0f);
    int32_t pointLights = 0;
    for (uint32_t i = 0; i < 3; i++)
    {
        CMapRenderChunk::SVertexShaderConstants::SPointLight light;
        if (lighting.GetPointLight(i, position, light.m_color, light.m_attenuation))
        {
            light.m_position = position - CWorldScene::s_activeWorldView;
            light.m_positionW = 1.0f;
            light.m_colorW = consts.m_pointLights[i].m_colorW;
            light.m_attenuationW = consts.m_pointLights[i].m_attenuationW;
            pointLights = 1;
        }
        else
        {
            light.m_position = C3Vector(0.0f, 0.0f, 0.0f);
            light.m_positionW = 0.0f;
            light.m_color = C3Vector(0.0f, 0.0f, 0.0f);
            light.m_colorW = 0.0f;
            light.m_attenuation = C3Vector(1.0f, 0.0f, 0.0f);
            light.m_attenuationW = 0.0f;
        }
        static_assert(sizeof light == 48, "a point light's three registers");
        std::memcpy(rows[11 + 3 * i], &light, sizeof light);
    }

    uint32_t count = data::kRowLighting;   // rows 0 .. 19
    float* const out = static_cast<float*>(s_span.palette) + size_t(s_used) * data::kRows * 4u;
    std::memcpy(out, rows, count * 16u);
    if (chunk->m_renderFlags & 1)
    {
        float* lit = rows[data::kRowLighting];
        for (int32_t i = 0; i < 4; i++) lit[i] = 1.0f;
        for (int32_t i = 0; i < layers; i++)
            if (chunk->m_layers[i].m_flags & 0x80) lit[i] = 0.0f;
        std::memcpy(out + 4u * data::kRowLighting, lit, 16u);
    }
    std::memcpy(out + 4u * data::kRowTextures, place, sizeof place);

    float lamps[4 * (1 + 4 * HD::kLightsMax)];
    static_assert(1 + 4 * HD::kLightsMax <= static_cast<int32_t>(kLampRows), "the lamps' rows");
    const int32_t lampRows = HD::TerrainChunkPixelRows(chunk->m_sphere, World::s_m2Scene, CWorldScene::s_activeWorldView, chunk->m_mapChunks, lamps, made.lampSlots);
    std::memcpy(out + 4u * data::kRowLamps, lamps, size_t(lampRows) * 16u);

    made.rows = out;
    made.instance = s_span.firstInstance + s_used;
    s_used++;

    const int32_t flags = chunk->m_renderFlags & 5;
    Group* group = nullptr;
    for (uint32_t g = 0; g < s_open && !group; g++)
        if (s_group[g].lights == pointLights && s_group[g].flags == flags && s_group[g].cube == cube) group = &s_group[g];
    if (!group)
    {
        if (s_open == kGroups) Flush();
        group = &s_group[s_open++];
        group->lights = pointLights;
        group->flags = flags;
        group->cube = cube;
    }
    group->chunks.push_back(chunk);
    group->made.push_back(made);
    return true;
}

void HD::GpuTerrain::Flush()
{
    for (uint32_t g = 0; g < s_open; g++) Draw(s_group[g]);
    s_open = 0;
}
