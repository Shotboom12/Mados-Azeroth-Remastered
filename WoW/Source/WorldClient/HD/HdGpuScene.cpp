// Claude voie B, B2 (23 nov 2026): the registry of the fixed doodads of the main scene, its frame. See HdGpuScene.h.
#include "WoW/Source/WorldClient/HD/HdGpuScene.h"

#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanModelLights.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/lamp/HdLampHooks.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/wxl/src/vulkan/GpuSceneData.hpp"
#include "Engine/Source/Model2/HdGpuSceneHooks.h"
#include "Engine/Source/Model2/M2Cache.h"
#include "Engine/Source/Model2/M2Data.h"
#include "Engine/Source/Model2/M2Light.h"
#include "Engine/Source/Model2/M2Model.h"
#include "Engine/Source/Model2/M2Scene.h"
#include "Engine/Source/Model2/M2Shared.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#include "Engine/Source/Tempest/CAaBox.h"
#include "Engine/Source/Tempest/CAaSphere.h"
#include "WoW/Source/WorldClient/HD/HdGpuFixed.h"
#include "WoW/Source/WorldClient/MapDoodadDef.h"
#include "WoW/Source/WorldClient/World.h"

#include <xmmintrin.h>
#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <string>
#include <unordered_map>
#include <vector>

#ifdef WOWDECOMP_FSR
namespace HD::Fsr::Rigid { bool Active(); }
#endif

// vulkan/GpuFixed.cpp (wxl)
bool HdGpuFixedDevReady();
bool HdGpuFixedDevUploadMeshes();
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
bool HdGpuSceneDevReady();
/// The group's commands [first, first + count) of the span (phase 0), or of the phase-2 copies (phase 1).
bool HdGpuSceneDevArm(const HdGpuFixedCpuSpan& span, uint32_t first, uint32_t count, const HD::GpuSceneData::Draw* draw, uint32_t phase);
/// Mode 2: the frame's phase 1 choice (before the draws) and its phase 2 (after them).
struct HdGpuSceneObject { float x, y, z, radius; uint32_t vis; uint32_t pad[3]; };
bool HdGpuSceneDevPhase1(const HdGpuFixedCpuSpan& span, const HdGpuSceneObject* objects, uint32_t copies, uint32_t visSlots,
                         const float proj[16]);
bool HdGpuSceneDevPhase2();

namespace
{
    namespace data = HD::GpuSceneData;

    constexpr uint32_t kMaxItems = 16;
    constexpr uint32_t kRefused = 0xC000;   // unused_016E: kRefused | (frame / 8, 14 bits); below: index + 1; 0: never asked
    constexpr uint32_t kRetry = 30;         // refusals are asked again about 240 frames later

    CVar* s_cvar = nullptr;

    struct Item
    {
        uint32_t  cmd;
        uint32_t  combos;          // of the section's bones, into m_boneCombos
        uint16_t  bones;
        uint16_t  unlit;           // the material takes no local light
        uint16_t  batch;
        uint16_t  textures;        // of the two below, how many are checked
        uint16_t  combo[2];
        CTexture* texture[2];
    };

    struct Reg
    {
        CMapDoodadDef*   doodad = nullptr;
        CM2Model*        model = nullptr;
        const CM2Shared* shared = nullptr;
        C44Matrix        world;
        float            scaleLight = 0.0f;     // m_diffuseLightScale
        float            tint[6] = {};
        float            frobRoot = 0.0f;       // sqrt of the 3x3's squared norm (a rotation leaves it)
        float            radiusOld = 0.0f;
        float            sphere[4] = {};        // world: the doodad's own sphere (Hi-Z)
        uint8_t          cellX[4] = {}, cellY[4] = {}, cellsX = 0, cellsY = 0;   // of the lamp grid (CM2Scene::SelectLights), widened
        uint32_t         mesh = 0;
        uint32_t         cls = 0;
        uint32_t         items = 0;
        Item             item[kMaxItems];
        uint32_t         stamp = 0;             // the frame it was taken in
        uint32_t         litStamp = 0, lit = 0; // the frame it has local lights in, and which (s_lights)
        bool             animated = false;      // more than bone 0 as it is (billboards, moving bones): CM2Model::AnimateMT
        bool             live = false;
    };

    struct Cmd
    {
        uint32_t group = 0;
        uint32_t indexCount = 0, firstIndex = 0;
        int32_t  vertexOffset = 0;
        float    reach = -1.0f;
        // this frame
        uint32_t stamp = 0, count = 0, base = 0, fill = 0;
    };

    /// One copy with a command of its own: local lights (the 12 rows before its bones') or several bones.
    struct Wide
    {
        uint32_t reg, item;
        uint32_t at;       // its bones' rows, past the plain copies, in 48 bytes
        bool     rows;     // it writes them (the items of a doodad share theirs)
    };

    /// A group's copies of one frame with the same number of local lights: one element, one indirect draw.
    struct Use
    {
        uint32_t stamp = 0, rep = 0, repItem = 0, first = 0;
        std::vector<uint32_t> active;   // the commands of plain copies (no light)
        std::vector<Wide>     wide;
    };

    struct Group
    {
        uint32_t    blend = 0;
        const void* effect = nullptr;
        const void* texture = nullptr;
        uint32_t    cls = 0;
        Use         use[5];
    };

    struct Class
    {
        float        scale = 1.0f;
        uint32_t     stamp[5] = {};
        CM2Lighting* lighting[5] = {};   // by the number of local lights
    };

    /// One set of local lights of the frame.
    struct LightSet
    {
        uint32_t  count;
        CM2Light* light[4];
    };

    struct ActiveUse { uint32_t group, lights; };

    std::vector<Reg>      s_reg;
    std::vector<uint32_t> s_free;
    uint32_t              s_live = 0;
    std::vector<Cmd>      s_cmd;
    std::vector<Group>    s_group;
    std::vector<Class>    s_class;
    std::unordered_map<std::string, uint32_t> s_groupOf;
    std::unordered_map<std::string, uint32_t> s_cmdOf;
    uint32_t              s_generation = 0;
    uint32_t              s_frame = 1;

    std::vector<uint32_t> s_taken;        // this frame's, until OnAnimate
    std::vector<uint32_t> s_chosen;       // OnAnimate's, until the draw
    std::vector<ActiveUse> s_activeUses;
    std::vector<LightSet>  s_lights;      // this frame's
    std::vector<data::Lights> s_lightRows;
    std::unordered_map<uint64_t, uint32_t> s_lightsOf;
    uint32_t              s_copies = 0, s_commands = 0, s_wide = 0, s_wideUnits = 0;
    bool                  s_busy = false, s_ready = false, s_second = false;

    std::vector<M2Element> s_elements;
    std::vector<uint32_t>  s_indices;
    HdGpuFixedCpuSpan      s_span;
    uint32_t               s_phase = 0;

    /// What the device keeps a pointer to while the frame's commands are recorded and replayed.
    struct FrameMemory
    {
        std::vector<data::Cmd>  cmds;
        std::vector<data::Copy> copies;
        std::vector<data::Draw> draws;
        std::vector<data::Draw> draws2;
    } s_memory[4];
    uint32_t s_memoryAt = 0;

    // the log (Logs\preuve-scene.txt)
    uint64_t s_refusedCount[40] = {}, s_asked = 0, s_registered = 0, s_changed = 0, s_frames = 0, s_takenTotal = 0,
             s_lateLit = 0, s_copiesTotal = 0, s_groupsTotal = 0, s_commandsTotal = 0, s_drawFailed = 0,
             s_litTotal = 0, s_animatedTotal = 0, s_wideTotal = 0, s_lightSets = 0;

    uint16_t& Mark(CMapDoodadDef* d) { return *reinterpret_cast<uint16_t*>(d->unused_016E); }

    void Unregister(uint32_t i)
    {
        Reg& r = s_reg[i];
        if (!r.live) return;
        r.live = false;
        if (r.doodad) Mark(r.doodad) = 0;
        r.doodad = nullptr;
        r.model = nullptr;
        HD::GpuFixed::SceneMeshRef(r.mesh, -1);
        s_free.push_back(i);
        --s_live;
    }

    void ClearAll()
    {
        for (Reg& r : s_reg)
            if (r.live && r.doodad) Mark(r.doodad) = 0;
        if (s_generation == HD::GpuFixed::MeshGeneration())
            for (Reg& r : s_reg)
                if (r.live) HD::GpuFixed::SceneMeshRef(r.mesh, -1);
        s_reg.clear();
        s_free.clear();
        s_live = 0;
        s_cmd.clear();
        s_group.clear();
        for (Class& c : s_class)
            for (CM2Lighting* l : c.lighting) delete l;
        s_class.clear();
        s_groupOf.clear();
        s_cmdOf.clear();
        s_taken.clear();
        s_chosen.clear();
        s_activeUses.clear();
        s_ready = false;
    }

    /// CM2SceneRender.cpp HdSectionReach: the farthest of the section's vertices from the origin, bind pose.
    float SectionReach(const CM2Shared* shared, const M2SkinSection& sec)
    {
        const M2Data* d = shared->m_data;
        const M2SkinProfile* skin = shared->m_skinData;
        const uint32_t start = sec.m_vertexStart, count = sec.m_vertexCount;
        if (!count || start + count > skin->m_vertices.m_count) return -1.0f;
        float r2 = 0.0f;
        for (uint32_t j = start; j < start + count; ++j)
        {
            const uint32_t v = skin->m_vertices[j];
            if (v >= d->m_vertices.m_count) return -1.0f;
            const C3Vector& p = d->m_vertices[v].m_position;
            const float q = p.x * p.x + p.y * p.y + p.z * p.z;
            if (!std::isfinite(q)) return -1.0f;
            r2 = q > r2 ? q : r2;
        }
        return std::sqrt(r2);
    }

    /// The lamp grid's cells of a centre within `m` of `c` (CM2Scene::SelectLights with radius 0, its wrap included).
    uint8_t Cells(float c, uint8_t out[4])
    {
        const float m = 0.02f;
        const int lo = static_cast<int>(std::floor((c - m) * 0.05f - 0.5f));
        const int hi = static_cast<int>(std::floor((c + m) * 0.05f + 0.5f));
        uint8_t n = 0;
        for (int v = lo; v <= hi && n < 4; ++v) out[n++] = static_cast<uint8_t>(v & 63);
        return n;
    }

    /// What can change from one frame to the next. False: the original path (and out of the registry).
    bool Same(const CMapDoodadDef* d, const Reg& r)
    {
        const CM2Model* m = d->m_model;
        if (m != r.model || !m || m->m_shared != r.shared || m->m_scene != World::s_m2Scene) return false;
        if ((m->m_fFlags & 0x6003) != 3 || m->m_optGeo || m->m_attachParent || m->m_attachList || m->m_drawCallback
            || m->m_baseAlpha != 1.0f)
            return false;
        if ((d->m_flags & 0x8002) || !(d->m_staticFlags & 0x80) || d->m_diffuseLightScale != r.scaleLight) return false;
        if (m->m_lightingCallback != &CMapStaticEntity::ModelLightingCallback || m->m_lightingArg != static_cast<const void*>(static_cast<const CMapStaticEntity*>(d)))
            return false;
        if (std::memcmp(&m->m_diffuseTintR, r.tint, sizeof r.tint) != 0) return false;
        if (std::memcmp(&m->m_worldTransform, &r.world, sizeof r.world) != 0) return false;
        if (!r.animated && (m->m_bones[0].m_proceduralTransform || (m->m_bones[0].m_flags & (0x280 | 0x78)))) return false;
        for (uint32_t i = 0; i < r.items; ++i)
            for (uint32_t t = 0; t < r.item[i].textures; ++t)
                if (m->m_textures[r.item[i].combo[t]] != r.item[i].texture[t]) return false;
        return true;
    }

    template <class T> void Append(std::string& s, const T& v) { s.append(reinterpret_cast<const char*>(&v), sizeof v); }

    int s_why = 0;

    uint32_t ClassFor(float scale)
    {
        for (uint32_t i = 0; i < s_class.size(); ++i)
            if (std::memcmp(&s_class[i].scale, &scale, sizeof scale) == 0) return i;
        s_class.emplace_back();
        s_class.back().scale = scale;
        for (CM2Lighting*& l : s_class.back().lighting) l = new CM2Lighting();
        return static_cast<uint32_t>(s_class.size() - 1);
    }

    /// The doodad's model, its batches and their state. False: s_why.
    bool Describe(CMapDoodadDef* d, Reg& r)
    {
        auto no = [](int why) { s_why = why; return false; };
        CM2Model* m = d->m_model;
        if (!m || !(d->m_flags & 0x80) || !m->m_scene || m->m_scene != World::s_m2Scene) return no(1);
        if (d->m_flags & 0x8002) return no(2);
        // Claude B2: in or above a liquid is the same (CM2Scene::Animate: the plane only moves and clips transparent batches).
        if (!(d->m_staticFlags & 0x80)) return no(4);
        const CM2Shared* sh = m->m_shared;
        if (!sh || !sh->m_data || !sh->m_skinData || !sh->m_skinSections || !sh->m_effects || !sh->m_cache) return no(5);
        if ((m->m_fFlags & 0x6003) != 3) return no(6);
        if (m->m_optGeo || m->m_attachParent || m->m_attachList) return no(7);
        if (m->m_drawCallback || m->m_modelCallList || m->m_sequenceCallback) return no(9);
        if (m->m_baseAlpha != 1.0f || m->m_uint90 != 1) return no(10);
        if (!m->m_bones || !m->m_boneMatrices || !m->m_skinSections || !m->m_textures) return no(11);
        if (!((sh->m_cache->m_flags & 8) || (sh->m_data->m_bones.m_count == 1 && (sh->m_cache->m_flags & 0x40)))) return no(12);
        if (m->m_lightingCallback != &CMapStaticEntity::ModelLightingCallback || m->m_lightingArg != static_cast<const void*>(static_cast<const CMapStaticEntity*>(d)))
            return no(13);
        const M2Data* data = sh->m_data;
        if (data->m_lights.m_count || data->m_particles.m_count || data->m_ribbons.m_count || data->m_events.m_count) return no(14);
        if (!data->m_bones.m_count) return no(15);
        const M2CompBone& bone0 = data->m_bones[0];
        if (bone0.m_parentIndex != 0xFFFF) return no(16);
        r.animated = sh->m_billboardBoneCount || ((bone0.m_flags | m->m_bones[0].m_flags) & (0x280 | 0x78)) || m->m_bones[0].m_proceduralTransform;
        // The colours AnimateMT gave (diffuse 1, emissive 0 from the scene): constant while the tints are.
        if (m->m_diffuseColor.x != m->m_diffuseTintR || m->m_diffuseColor.y != m->m_diffuseTintG || m->m_diffuseColor.z != m->m_diffuseTintB
            || m->m_emissiveColor.x != m->m_emissiveTintR || m->m_emissiveColor.y != m->m_emissiveTintG || m->m_emissiveColor.z != m->m_emissiveTintB)
            return no(17);
        HD::GpuFixed::MeshPlace place;
        if (!HD::GpuFixed::SceneMesh(sh, place)) return no(18);

        auto moving = [m](const M2TrackBase& t) {
            const uint32_t n = t.m_sequenceTimes.m_count;
            return n > 1 || (n == 1 && t.m_sequenceTimes[0].m_count > m->m_uint90);
        };
        r.doodad = d;
        r.model = m;
        r.shared = sh;
        r.world = m->m_worldTransform;
        r.scaleLight = d->m_diffuseLightScale;
        std::memcpy(r.tint, &m->m_diffuseTintR, sizeof r.tint);
        r.mesh = place.id;
        r.cls = ClassFor(r.scaleLight);
        const C44Matrix& w = r.world;
        const float f2 = w.a0 * w.a0 + w.a1 * w.a1 + w.a2 * w.a2 + w.b0 * w.b0 + w.b1 * w.b1 + w.b2 * w.b2 + w.c0 * w.c0 + w.c1 * w.c1 + w.c2 * w.c2;
        if (!std::isfinite(f2) || !std::isfinite(w.d0) || !std::isfinite(w.d1) || !std::isfinite(w.d2)) return no(19);
        r.frobRoot = std::sqrt(f2);
        const float scale = std::sqrt(f2 / 3.0f);
        r.radiusOld = 30.0f * (scale > 1.0f ? scale : 1.0f);
        r.sphere[0] = d->m_sphere.c.x; r.sphere[1] = d->m_sphere.c.y; r.sphere[2] = d->m_sphere.c.z; r.sphere[3] = d->m_sphere.r;
        r.cellsX = Cells(w.d0, r.cellX);
        r.cellsY = Cells(w.d1, r.cellY);
        r.items = 0;

        const M2SkinProfile* skin = sh->m_skinData;
        uint32_t sections[kMaxItems];
        for (uint32_t i = 0; i < skin->m_batches.m_count; ++i)
        {
            const M2Batch& b = skin->m_batches[i];
            if (!m->m_skinSections[b.m_skinSectionIndex] || b.m_shader == 0x8000) continue;
            if (b.m_flags & 4) return no(20);
            if (b.m_materialLayer) return no(21);
            float alpha = 1.0f;   // m_alpha: baseAlpha 1, fadeAlpha 1
            bool varies = false;
            if (b.m_colorIndex < data->m_colors.m_count)
            {
                if (moving(data->m_colors[b.m_colorIndex].m_alpha) || moving(data->m_colors[b.m_colorIndex].m_color)) varies = true;
                alpha *= m->m_colors[b.m_colorIndex].m_alphaTrack.m_currentValue;
            }
            if (b.m_textureCount)
            {
                const uint16_t wi = data->m_textureWeightCombos[b.m_textureWeightComboIndex];
                if (moving(data->m_textureWeights[wi].m_weight)) varies = true;
                alpha *= m->m_textureWeights[wi].m_currentValue;
            }
            if (varies) return no(22);
            if (alpha < 0.000099999997f) continue;
            const M2Material& mat = data->m_materials[b.m_materialIndex];
            if (mat.m_blendMode > 1 || alpha < 0.99998999f) return no(23);
            CShaderEffect* effect = sh->m_effects[i];
            if (!effect) continue;
            const M2SkinSection& sec = sh->m_skinSections[b.m_skinSectionIndex];
            if (sec.m_boneCount < 1 || sec.m_boneCount > 75 || sec.m_boneInfluences < 1
                || uint32_t(sec.m_boneComboIndex) + sec.m_boneCount > data->m_boneCombos.m_count)
                return no(24);
            for (uint32_t k = 0; k < sec.m_boneCount; ++k)
            {
                const uint16_t bone = data->m_boneCombos[sec.m_boneComboIndex + k];
                if (bone >= data->m_bones.m_count) return no(24);
                if (bone) r.animated = true;   // its bones' own matrices
            }
            if (sec.m_boneCount != 1) r.animated = true;
            if (r.items == kMaxItems) return no(25);
            for (uint32_t k = 0; k < r.items; ++k)
                if (sections[k] == b.m_skinSectionIndex) return no(26);   // two layers of the same triangles: their order matters
            if (b.m_textureCount > 2 || b.m_skinSectionIndex >= place.sections || !sec.m_indexCount) return no(27);

            Item it = {};
            it.batch = static_cast<uint16_t>(i);
            it.bones = sec.m_boneCount;
            it.combos = sec.m_boneComboIndex;
            it.unlit = mat.m_flags & 1 ? 1 : 0;   // CM2Scene::ComputeElementShaders: no local light
            // The group: everything the state of the draw is made of (CM2SceneRender::SetupLighting / Material / Textures).
            std::string key;
            Append(key, effect);
            Append(key, r.cls);
            Append(key, mat.m_flags);
            Append(key, mat.m_blendMode);
            Append(key, b.m_shader);
            Append(key, b.m_textureCount);
            Append(key, sec.m_boneInfluences);
            Append(key, alpha);
            C3Vector diffuse = m->m_diffuseColor;
            if (b.m_colorIndex < data->m_colors.m_count)
            {
                const C3Vector& c = m->m_colors[b.m_colorIndex].m_colorTrack.m_currentValue;
                diffuse.x *= c.x; diffuse.y *= c.y; diffuse.z *= c.z;
            }
            Append(key, diffuse);
            Append(key, m->m_emissiveColor);
            CTexture* first = nullptr;
            for (uint32_t t = 0; t < b.m_textureCount; ++t)
            {
                const uint32_t combo = data->m_textureCombos[t + b.m_textureComboIndex];
                CTexture* tex = nullptr;
                uint32_t wrap = 0;
                if (combo < data->m_textures.m_count)
                {
                    tex = m->m_textures[combo];
                    wrap = data->m_textures[combo].m_flags & 3u;
                    it.combo[it.textures] = static_cast<uint16_t>(combo);
                    it.texture[it.textures] = tex;
                    ++it.textures;
                }
                if (!t) first = tex;
                Append(key, tex);
                Append(key, wrap);
                const uint32_t tr = data->m_textureTransformCombos[t + b.m_textureTransformComboIndex];
                const bool has = tr < data->m_textureTransforms.m_count;
                Append(key, has);
                if (has)
                {
                    const M2TextureTransform& tt = data->m_textureTransforms[tr];
                    if (moving(tt.m_translation) || moving(tt.m_rotation) || moving(tt.m_scaling)) return no(28);
                    Append(key, m->m_textureMatrices[tr]);
                }
            }
            auto g = s_groupOf.find(key);
            uint32_t group;
            if (g != s_groupOf.end()) group = g->second;
            else
            {
                group = static_cast<uint32_t>(s_group.size());
                Group ng;
                ng.blend = mat.m_blendMode;
                ng.effect = effect;
                ng.texture = first;
                ng.cls = r.cls;
                s_group.push_back(std::move(ng));
                s_groupOf.emplace(std::move(key), group);
            }
            std::string ck;
            Append(ck, group);
            Append(ck, place.id);
            Append(ck, b.m_skinSectionIndex);
            auto c = s_cmdOf.find(ck);
            if (c != s_cmdOf.end()) it.cmd = c->second;
            else
            {
                it.cmd = static_cast<uint32_t>(s_cmd.size());
                Cmd nc;
                nc.group = group;
                nc.indexCount = sec.m_indexCount;
                nc.firstIndex = place.indexBase + place.sectionFirst[b.m_skinSectionIndex];
                nc.vertexOffset = place.vertexBase;
                nc.reach = SectionReach(sh, sec);
                s_cmd.push_back(nc);
                s_cmdOf.emplace(std::move(ck), it.cmd);
            }
            sections[r.items] = b.m_skinSectionIndex;
            r.item[r.items++] = it;
        }
        if (!r.items) return no(29);
        return true;
    }

    /// The registry's index of the doodad, registered now if it can be. UINT32_MAX: the original path.
    uint32_t Find(CMapDoodadDef* d)
    {
        uint16_t& mark = Mark(d);
        if (mark && mark < kRefused)
        {
            const uint32_t i = mark - 1u;
            if (i < s_reg.size() && s_reg[i].live && s_reg[i].doodad == d)
            {
                if (Same(d, s_reg[i])) return i;
                ++s_changed;
                Unregister(i);
                return UINT32_MAX;   // the original path this frame; asked again at the next
            }
            mark = 0;
        }
        const uint32_t now = (s_frame >> 3) & 0x3FFFu;
        if (mark >= kRefused && ((now - (mark & 0x3FFFu)) & 0x3FFFu) < kRetry) return UINT32_MAX;
        ++s_asked;
        Reg r;
        s_why = 0;
        if (!Describe(d, r))
        {
            ++s_refusedCount[s_why < 0 || s_why > 39 ? 0 : s_why];
            mark = static_cast<uint16_t>(kRefused | now);
            return UINT32_MAX;
        }
        uint32_t i;
        if (!s_free.empty()) { i = s_free.back(); s_free.pop_back(); }
        else
        {
            if (s_reg.size() >= kRefused - 2u) return UINT32_MAX;
            i = static_cast<uint32_t>(s_reg.size());
            s_reg.emplace_back();
        }
        r.live = true;
        s_reg[i] = r;
        HD::GpuFixed::SceneMeshRef(r.mesh, 1);
        mark = static_cast<uint16_t>(i + 1u);
        ++s_live;
        ++s_registered;
        return i;
    }

    void Log()
    {
        if (FILE* f = std::fopen("Logs\\preuve-scene.txt", "a"))
        {
            const double n = s_frames ? double(s_frames) : 1.0;
            std::fprintf(f, "voie B2 scene (mode %d) : %u inscrits, %u groupes connus, %u commandes connues ; par image : %.1f objets pris, "
                         "%.1f rendus au processeur, %.1f copies, %.1f commandes, %.1f dessins, %.1f eclaires (%.1f jeux de lampes), "
                         "%.1f animes, %.1f copies larges ; %llu demandes, %llu inscriptions, "
                         "%llu changes, %llu dessins rates ; raisons :",
                         HD::GpuScene::Mode(), s_live, unsigned(s_group.size()), unsigned(s_cmd.size()), s_takenTotal / n, s_lateLit / n,
                         s_copiesTotal / n, s_commandsTotal / n, s_groupsTotal / n, s_litTotal / n, s_lightSets / n, s_animatedTotal / n,
                         s_wideTotal / n, static_cast<unsigned long long>(s_asked),
                         static_cast<unsigned long long>(s_registered), static_cast<unsigned long long>(s_changed),
                         static_cast<unsigned long long>(s_drawFailed));
            for (int k = 0; k < 40; ++k) if (s_refusedCount[k]) std::fprintf(f, " %d=%llu", k, static_cast<unsigned long long>(s_refusedCount[k]));
            std::fprintf(f, "\n");
            std::fclose(f);
        }
        s_frames = s_takenTotal = s_lateLit = s_copiesTotal = s_groupsTotal = s_commandsTotal = 0;
        s_litTotal = s_lightSets = s_animatedTotal = s_wideTotal = 0;
    }

    /// CM2Model's bones as CM2Scene::Animate would leave them this frame (the model does nothing else).
    void AnimateBones(CM2Model* m, CM2Scene* scene)
    {
        if (m->m_fFlags & 0x1000) m->AnimateMTSimple(&scene->m_view, C3Vector(1.0f, 1.0f, 1.0f), C3Vector(0.0f, 0.0f, 0.0f), 1.0f, 1.0f);
        else m->AnimateMT(&scene->m_view, C3Vector(1.0f, 1.0f, 1.0f), C3Vector(0.0f, 0.0f, 0.0f), 1.0f, 1.0f);
    }

    /// The local lights CM2Model::SetupLighting would select: the frame's set + 1, 0: none, -1: not only point lights.
    int LightsFor(const Reg& r, CM2Scene* scene)
    {
        const C3Vector at = C3Vector(r.world.d0, r.world.d1, r.world.d2) * scene->m_view;   // m_matrixF4's translation
        CAaSphere sphere;
        sphere.r = 0.0f;
        sphere.c = at * scene->m_viewInv;
        static CM2Lighting l;
        l.Initialize(scene, sphere);
        scene->SelectLights(&l);
        if (l.m_sunAmbient.x != 0.0f || l.m_sunAmbient.y != 0.0f || l.m_sunAmbient.z != 0.0f || l.m_vector48.x != 0.0f || l.m_vector48.y != 0.0f
            || l.m_vector48.z != 0.0f || l.m_sunSpecular.x != 0.0f || l.m_sunSpecular.y != 0.0f || l.m_sunSpecular.z != 0.0f)
            return -1;
        if (!l.m_lightCount) return 0;
        uint64_t h = 1469598103934665603ull ^ l.m_lightCount;
        for (uint32_t i = 0; i < l.m_lightCount; ++i) h = (h ^ reinterpret_cast<uintptr_t>(l.m_lights[i])) * 1099511628211ull;
        LightSet set = {};
        set.count = l.m_lightCount;
        for (uint32_t i = 0; i < set.count; ++i) set.light[i] = l.m_lights[i];
        for (;; ++h)
        {
            auto f = s_lightsOf.find(h);
            if (f == s_lightsOf.end()) break;
            if (std::memcmp(&s_lights[f->second], &set, sizeof set) == 0) return static_cast<int>(f->second) + 1;
        }
        l.CameraSpace();   // the lights' m_viewPos
        LocalLights block;
        for (uint32_t i = 0; i < 4; ++i)   // the unused slots: finite, and no light (colour 0)
        {
            block.m_position[i].x = block.m_position[i].y = block.m_position[i].z = 0.0f; block.m_position[i].w = 1.0f;
            block.m_constantAttenuation[i] = 1.0f;
            block.m_linearAttenuation[i] = block.m_quadraticAttenuation[i] = 0.0f;
        }
        CShaderEffect::ComputeLocalLights(&block, set.count, set.light, nullptr);
        HD::VulkanModelLights::InspectAndFilter(block, set.count);
        static_assert(sizeof(LocalLights) == 11 * 16, "c17 .. c27");
        data::Lights rows = {};
        std::memcpy(rows.row, &block, sizeof block);
        s_lights.push_back(set);
        s_lightRows.push_back(rows);
        s_lightsOf.emplace(h, static_cast<uint32_t>(s_lights.size() - 1));
        return static_cast<int>(s_lights.size());
    }

    /// Record.cpp's TransformScale / ModelBound (own bones) / ExactModelBound, on the rows as they are written.
    void Bounds(const float* rows, uint32_t bones, float reach, data::Copy& out)
    {
        float lo[3] = { 3.0e38f, 3.0e38f, 3.0e38f }, hi[3] = { -3.0e38f, -3.0e38f, -3.0e38f };
        float loOld[3] = { 3.0e38f, 3.0e38f, 3.0e38f }, hiOld[3] = { -3.0e38f, -3.0e38f, -3.0e38f };
        float frob = 0.0f, scale = 0.0f;
        bool  exact = reach >= 0.0f, any = false;
        for (uint32_t b = 0; b < bones; ++b)
        {
            const float* r0 = rows + 12 * b;
            const float* r1 = r0 + 4;
            const float* r2 = r0 + 8;
            const float s0 = r0[0] * r0[0] + r0[1] * r0[1] + r0[2] * r0[2];
            const float s1 = r1[0] * r1[0] + r1[1] * r1[1] + r1[2] * r1[2];
            const float s2 = r2[0] * r2[0] + r2[1] * r2[1] + r2[2] * r2[2];
            const float t[3] = { r0[3], r1[3], r2[3] };
            const float f2 = s0 + s1 + s2;
            if (!std::isfinite(f2) || !std::isfinite(t[0]) || !std::isfinite(t[1]) || !std::isfinite(t[2])) { exact = false; continue; }
            frob = f2 > frob ? f2 : frob;
            const float det = r0[0] * (r1[1] * r2[2] - r1[2] * r2[1]) - r0[1] * (r1[0] * r2[2] - r1[2] * r2[0])
                              + r0[2] * (r1[0] * r2[1] - r1[1] * r2[0]);
            const float big = s0 > s1 ? (s0 > s2 ? s0 : s2) : (s1 > s2 ? s1 : s2);
            const bool real = big > 4e-4f && big < 2500.0f && std::fabs(det) > 1e-6f;
            for (int k = 0; k < 3; ++k)
            {
                lo[k] = t[k] < lo[k] ? t[k] : lo[k];
                hi[k] = t[k] > hi[k] ? t[k] : hi[k];
                if (!real) continue;
                loOld[k] = t[k] < loOld[k] ? t[k] : loOld[k];
                hiOld[k] = t[k] > hiOld[k] ? t[k] : hiOld[k];
            }
            if (!real) continue;
            any = true;
            const float s = std::sqrt(big);
            scale = s > scale ? s : scale;
        }
        const auto centre = [](const float* a, const float* b, float* c) {
            float h2 = 0.0f;
            for (int k = 0; k < 3; ++k) { c[k] = 0.5f * (a[k] + b[k]); const float h = 0.5f * (b[k] - a[k]); h2 += h * h; }
            return std::sqrt(h2);
        };
        out.bound[0] = out.bound[1] = out.bound[2] = out.boundOld[0] = out.boundOld[1] = out.boundOld[2] = 0.0f;
        out.bound[3] = out.boundOld[3] = -1.0f;
        if (exact)
        {
            const float radius = centre(lo, hi, out.bound) + reach * std::sqrt(frob) + 0.05f;
            if (radius < 250.0f) out.bound[3] = radius;
        }
        if (any)
        {
            const float radius = centre(loOld, hiOld, out.boundOld) + 30.0f * (scale > 1.0f ? scale : 1.0f);
            if (radius < 250.0f) out.boundOld[3] = radius;
        }
    }

    /// FSR's object motion is on: a moving bone needs the original draw's own motion (FsrRigid / Skin).
    bool MotionVectors()
    {
#ifdef WOWDECOMP_FSR
        return HD::Fsr::Rigid::Active();
#else
        return false;
#endif
    }

    void RowsOf(const C44Matrix& m, float* r)
    {
        const float row[12] = { m.a0, m.b0, m.c0, m.d0, m.a1, m.b1, m.c1, m.d1, m.a2, m.b2, m.c2, m.d2 };
        std::memcpy(r, row, sizeof row);
    }

    /// What AddDoodadDefModelToModelScene does for the doodad (full alpha, no parent).
    void GiveBack(CM2Model* m, CM2Scene* scene)
    {
        m->SetAnimating(1);
        m->m_fFlags |= 0x8 | 0x10000;
        m->m_fadeAlpha = 1.0f;
        if (m->m_fFlags & 0x1000) m->AnimateMTSimple(&scene->m_view, C3Vector(1.0f, 1.0f, 1.0f), C3Vector(0.0f, 0.0f, 0.0f), 1.0f, 1.0f);
        else m->AnimateMT(&scene->m_view, C3Vector(1.0f, 1.0f, 1.0f), C3Vector(0.0f, 0.0f, 0.0f), 1.0f, 1.0f);
        m->AnimateST();
    }

    bool NearLamp(const Reg& r, CM2Light* const* grid)
    {
        for (uint32_t y = 0; y < r.cellsY; ++y)
            for (uint32_t x = 0; x < r.cellsX; ++x)
                if (grid[r.cellX[x] + 64u * r.cellY[y]]) return true;
        return false;
    }
}

namespace HD::GpuScene
{
    int Mode()
    {
        if (!s_cvar)
            s_cvar = CVar::Register("hdGpuScene",
                "HD (Claude voie B, B2) : 1 = la carte graphique dessine les objets fixes du decor de la scene (defaut) ; 2 = avec le tri par la "
                "profondeur en deux temps ; 0 = l'original ; 3 = les objets pris ne sont pas dessines (plafond du gain, mesure seulement)",
                1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        const int v = s_cvar->m_intValue;
        return v < 0 || v > 3 || HD::GpuFixed::Mode() == 0 ? 0 : v;
    }

    bool FrameBusy() { return s_busy; }

    void Ahead(CMapDoodadDef* doodad)
    {
        const uint16_t mark = Mark(doodad);
        const uint32_t i = mark - 1u;
        if (!mark || mark >= kRefused || i >= s_reg.size()) return;
        const char* r = reinterpret_cast<const char*>(&s_reg[i]);
        for (size_t k = 0; k < offsetof(Reg, sphere); k += 64) _mm_prefetch(r + k, _MM_HINT_T0);
        _mm_prefetch(r + offsetof(Reg, items), _MM_HINT_T0);
        _mm_prefetch(r + offsetof(Reg, stamp), _MM_HINT_T0);
        const CM2Model* m = doodad->m_model;
        if (!m) return;
        _mm_prefetch(reinterpret_cast<const char*>(&m->m_shared), _MM_HINT_T0);
        _mm_prefetch(reinterpret_cast<const char*>(&m->m_attachList), _MM_HINT_T0);
        _mm_prefetch(reinterpret_cast<const char*>(&m->m_worldTransform), _MM_HINT_T0);
        _mm_prefetch(reinterpret_cast<const char*>(&m->m_worldTransform.d3), _MM_HINT_T0);
        _mm_prefetch(reinterpret_cast<const char*>(&m->m_fadeAlpha), _MM_HINT_T0);
        _mm_prefetch(reinterpret_cast<const char*>(&m->m_drawCallback), _MM_HINT_T0);
        _mm_prefetch(reinterpret_cast<const char*>(&m->m_lightingCallback), _MM_HINT_T0);
    }

    bool Take(CMapDoodadDef* doodad)
    {
        if (!Mode()) return false;
        if (!World::s_m2Scene || !HdGpuFixedDevReady() || !HdGpuSceneDevReady()) return false;
        if (s_generation != HD::GpuFixed::MeshGeneration())
        {
            ClearAll();
            s_generation = HD::GpuFixed::MeshGeneration();
        }
        const uint32_t i = Find(doodad);
        if (i == UINT32_MAX) return false;
        Reg& r = s_reg[i];
        if (r.stamp != s_frame)
        {
            // Already animated this frame by the original path (added before it was registered): not twice.
            if (r.model->m_animatePrev) return false;
            r.stamp = s_frame;
            r.model->m_fadeAlpha = 1.0f;
            s_taken.push_back(i);
        }
        return true;
    }

    void LateLit(CM2Scene* scene)
    {
        if (s_taken.empty() || scene != World::s_m2Scene) return;
        const bool all = scene->m_lightList != nullptr
                      || s_generation != HD::GpuFixed::MeshGeneration();
        // The lamp experiments read each draw's own lamps: the lit doodads to the original path.
        const bool unlit = !HD::Lamp::Native::Enabled() && !HD::Lamp::Native::ProducerEnabled();
        const bool motion = MotionVectors();
        s_lights.clear();
        s_lightRows.clear();
        s_lightsOf.clear();
        size_t kept = 0;
        for (size_t k = 0; k < s_taken.size(); ++k)
        {
            Reg& r = s_reg[s_taken[k]];
            if (!r.live) continue;
            int lights = 0;
            if (!all && scene->m_lightGrid && NearLamp(r, scene->m_lightGrid)) lights = unlit ? LightsFor(r, scene) : -1;
            if (all || lights < 0 || (r.animated && motion))
            {
                ++s_lateLit;
                GiveBack(r.model, scene);
                continue;
            }
            if (lights) { r.litStamp = s_frame; r.lit = static_cast<uint32_t>(lights - 1); ++s_litTotal; }
            if (r.animated) { AnimateBones(r.model, scene); ++s_animatedTotal; }
            s_taken[kept++] = s_taken[k];
        }
        s_lightSets += s_lights.size();
        s_taken.resize(kept);
    }

    void OnAnimate(CM2Scene* scene)
    {
        if (scene != World::s_m2Scene) return;
        s_chosen.clear();
        s_activeUses.clear();
        s_ready = false;
        s_busy = false;
        s_second = false;
        s_copies = s_commands = s_wide = s_wideUnits = 0;
        const int mode = Mode();
        if (!mode && s_live) ClearAll();
        if (!s_taken.empty())
        {
            s_chosen.swap(s_taken);
            s_takenTotal += s_chosen.size();
            const auto useOf = [](uint32_t group, uint32_t lights, uint32_t rep, uint32_t item) -> Use& {
                Use& u = s_group[group].use[lights];
                if (u.stamp != s_frame)
                {
                    u.stamp = s_frame;
                    u.rep = rep;
                    u.repItem = item;
                    u.active.clear();
                    u.wide.clear();
                    s_activeUses.push_back({ group, lights });
                }
                return u;
            };
            for (uint32_t i : s_chosen)
            {
                Reg& r = s_reg[i];
                if (!r.live) continue;
                const bool lit = r.litStamp == s_frame;
                uint32_t at[kMaxItems];
                bool     litOf[kMaxItems];
                for (uint32_t k = 0; k < r.items; ++k)
                {
                    const Item& it = r.item[k];
                    Cmd& c = s_cmd[it.cmd];
                    litOf[k] = lit && !it.unlit;
                    if (litOf[k] || r.animated)
                    {
                        Use& u = useOf(c.group, litOf[k] ? s_lights[r.lit].count : 0u, i, k);
                        Wide w = { i, k, 0u, true };
                        for (uint32_t j = 0; j < k && w.rows; ++j)
                            if (r.item[j].bones == it.bones && r.item[j].combos == it.combos && litOf[j] == litOf[k])
                            {
                                w.at = at[j];
                                w.rows = false;
                            }
                        if (w.rows)
                        {
                            w.at = s_wideUnits + (litOf[k] ? 4u : 0u);
                            s_wideUnits = w.at + it.bones;
                        }
                        at[k] = w.at;
                        u.wide.push_back(w);
                        ++s_wide;
                        continue;
                    }
                    if (c.stamp != s_frame)
                    {
                        c.stamp = s_frame;
                        c.count = 0;
                        useOf(c.group, 0u, i, k).active.push_back(it.cmd);
                        ++s_commands;
                    }
                    ++c.count;
                    ++s_copies;
                }
            }
            // The lighting classes: the model's own calls (CM2Model::SetupLighting) on the first doodad of each.
            for (const ActiveUse& au : s_activeUses)
            {
                Class& cl = s_class[s_group[au.group].cls];
                const Reg& r = s_reg[s_group[au.group].use[au.lights].rep];
                if (cl.stamp[0] != s_frame)
                {
                    cl.stamp[0] = s_frame;
                    CM2Lighting* l = cl.lighting[0];
                    CAaSphere sphere;
                    sphere.r = 0.0f;
                    sphere.c = C3Vector(r.world.d0, r.world.d1, r.world.d2);
                    l->Initialize(scene, sphere);
                    CMapStaticEntity::ModelLightingCallback(r.model, l, r.model->m_lightingArg);
                    HD::Lamp::Native::Repair(l);
                    l->SetupSunlight();
                    l->CameraSpace();
                }
                if (au.lights && cl.stamp[au.lights] != s_frame)
                {
                    // The same with `lights` local lights: they choose the shaders (the copies' own are in the palette).
                    cl.stamp[au.lights] = s_frame;
                    CM2Lighting* l = cl.lighting[au.lights];
                    *l = *cl.lighting[0];
                    const LightSet& set = s_lights[r.lit];
                    l->m_lightCount = set.count;
                    for (uint32_t i = 0; i < 4; ++i) l->m_lights[i] = set.light[i];
                }
            }
            std::sort(s_activeUses.begin(), s_activeUses.end(), [](const ActiveUse& a, const ActiveUse& b) {
                const Group &x = s_group[a.group], &y = s_group[b.group];
                if (x.blend != y.blend) return x.blend < y.blend;
                if (x.effect != y.effect) return std::less<const void*>()(x.effect, y.effect);
                if (x.texture != y.texture) return std::less<const void*>()(x.texture, y.texture);
                return a.group != b.group ? a.group < b.group : a.lights < b.lights;
            });
            s_ready = s_copies + s_wide != 0 && mode < 3;
            s_busy = s_ready;
        }
        s_copiesTotal += s_copies + s_wide;
        s_wideTotal += s_wide;
        s_commandsTotal += s_commands + s_wide;
        s_groupsTotal += s_activeUses.size();
        if (mode && ++s_frames >= 600) Log();
        ++s_frame;
        if (!s_frame) s_frame = 1;
    }

    bool Elements(CM2Scene* scene, uint32_t phase, M2Element*& elements, uint32_t*& indices, uint32_t& count)
    {
        if (scene != World::s_m2Scene) return false;
        if (phase == 1)
        {
            if (!s_second) return false;
            s_second = false;
            if (!HdGpuSceneDevPhase2()) return false;
            s_phase = 1;
            elements = s_elements.data();
            indices = s_indices.data();
            count = static_cast<uint32_t>(s_indices.size());
            return true;
        }
        if (!s_ready) return false;
        s_ready = false;
        s_busy = false;
        s_phase = 0;
        if (s_generation != HD::GpuFixed::MeshGeneration()) { ++s_drawFailed; return false; }
        const uint32_t frame = s_frame - 1 ? s_frame - 1 : 0xFFFFFFFFu;

        // 75 copies past the last: the replays bind 3600 bytes (the palette's whole range) at a copy's rows.
        if (!HdGpuFixedDevUploadMeshes() || !HdGpuFixedDevCpuAlloc(3, s_copies + s_wideUnits + 75, s_commands + s_wide, s_span))
        {
            ++s_drawFailed;
            return false;
        }
        FrameMemory& mem = s_memory[s_memoryAt++ & 3u];
        mem.cmds.clear();
        mem.copies.resize(s_copies + s_wide);
        mem.draws.clear();
        static std::vector<uint32_t> s_args;
        s_args.resize(size_t(5) * (s_commands + s_wide));
        uint32_t at = 0, cmdAt = 0, copyAt = s_copies;
        mem.cmds.reserve(s_commands + s_wide);
        mem.draws.reserve(s_activeUses.size());
        s_elements.resize(s_activeUses.size());
        s_indices.resize(s_activeUses.size());
        float* rows = static_cast<float*>(s_span.palette);
        uint32_t el = 0;
        for (const ActiveUse& au : s_activeUses)
        {
            Group& g = s_group[au.group];
            Use& u = g.use[au.lights];
            u.first = cmdAt;
            for (uint32_t ci : u.active)
            {
                Cmd& c = s_cmd[ci];
                c.base = at;
                c.fill = at;
                uint32_t* a = &s_args[size_t(5) * cmdAt++];
                a[0] = c.indexCount;
                a[1] = c.count;
                a[2] = c.firstIndex;
                a[3] = static_cast<uint32_t>(c.vertexOffset);
                a[4] = s_span.firstInstance + at;
                mem.cmds.push_back({ c.indexCount, c.firstIndex, c.vertexOffset, at, c.count });
                at += c.count;
            }
            for (const Wide& w : u.wide)
            {
                const Reg& r = s_reg[w.reg];
                const Item& it = r.item[w.item];
                const Cmd& c = s_cmd[it.cmd];
                const uint32_t unit = s_copies + w.at;
                uint32_t* a = &s_args[size_t(5) * cmdAt++];
                a[0] = c.indexCount;
                a[1] = 1;
                a[2] = c.firstIndex;
                a[3] = static_cast<uint32_t>(c.vertexOffset);
                a[4] = s_span.firstInstance + unit;
                mem.cmds.push_back({ c.indexCount, c.firstIndex, c.vertexOffset, copyAt, 1u });
                // The rows are made here (the palette is write-combined memory: never read back).
                float bones[75 * 12];
                if (r.animated)
                {
                    const uint16_t* combos = &r.shared->m_data->m_boneCombos[it.combos];
                    for (uint32_t b = 0; b < it.bones; ++b) RowsOf(r.model->m_boneMatrices[combos[b]], bones + 12 * b);
                }
                else
                    RowsOf(r.world * scene->m_view, bones);
                if (w.rows)
                {
                    float* to = rows + size_t(12) * unit;
                    std::memcpy(to, bones, size_t(it.bones) * 48u);
                    if (au.lights) std::memcpy(to - 48, s_lightRows[r.lit].row, sizeof s_lightRows[r.lit].row);
                }
                data::Copy& cp = mem.copies[copyAt++];
                Bounds(bones, it.bones, c.reach, cp);
                cp.at = unit;
            }
            data::Draw d;
            d.cmds = mem.cmds.data() + u.first;
            d.cmdCount = cmdAt - u.first;
            d.copies = mem.copies.data();
            d.lit = au.lights;
            d.rowsAt = s_span.firstInstance * 48u;
            mem.draws.push_back(d);

            const Reg& r = s_reg[u.rep];
            CM2Shared* shared = const_cast<CM2Shared*>(r.shared);
            M2Element& e = s_elements[el];
            std::memset(&e, 0, sizeof e);
            e.m_type = 2;
            e.m_model = r.model;
            e.m_flags = kElement;
            e.m_alpha = 1.0f;
            e.m_index = static_cast<int32_t>(el);
            e.m_count = 1;
            e.m_batch = &shared->m_skinData->m_batches[r.item[u.repItem].batch];
            e.m_skinSection = &shared->m_skinSections[e.m_batch->m_skinSectionIndex];
            e.m_effect = shared->m_effects[r.item[u.repItem].batch];
            // The shaders the model's own element would take, with the class's lighting.
            CM2Lighting* kept = r.model->m_currentLighting;
            r.model->m_currentLighting = s_class[g.cls].lighting[au.lights];
            CM2Scene::ComputeElementShaders(&e);
            r.model->m_currentLighting = kept;
            s_indices[el] = el;
            ++el;
        }
        std::memcpy(s_span.args, s_args.data(), s_args.size() * sizeof(uint32_t));

        const bool hiz = Mode() == 2;
        static std::vector<HdGpuSceneObject> s_objects;
        if (hiz) s_objects.resize(s_copies);
        for (uint32_t i : s_chosen)
        {
            Reg& r = s_reg[i];
            if (r.animated) continue;
            const bool lit = r.litStamp == frame;
            // (A doodad freed since OnAnimate: Forget stops the whole frame's draw.)
            const C44Matrix bone = r.world * scene->m_view;   // AnimateMT: m_matrixF4, bone 0 as it is
            float row[12];
            RowsOf(bone, row);
            float centre[3] = {};
            if (hiz)
            {
                const C3Vector c = C3Vector(r.sphere[0], r.sphere[1], r.sphere[2]) * scene->m_view;
                centre[0] = c.x; centre[1] = c.y; centre[2] = c.z;
            }
            for (uint32_t k = 0; k < r.items; ++k)
            {
                if (lit && !r.item[k].unlit) continue;
                Cmd& c = s_cmd[r.item[k].cmd];
                if (c.stamp != frame || c.fill >= c.base + c.count) continue;
                const uint32_t to = c.fill++;
                std::memcpy(rows + size_t(12) * to, row, sizeof row);
                data::Copy& cp = mem.copies[to];
                const float radius = c.reach >= 0.0f ? c.reach * r.frobRoot + 0.05f : -1.0f;
                cp.bound[0] = cp.boundOld[0] = bone.d0;
                cp.bound[1] = cp.boundOld[1] = bone.d1;
                cp.bound[2] = cp.boundOld[2] = bone.d2;
                cp.bound[3] = radius < 250.0f ? radius : -1.0f;
                cp.boundOld[3] = r.radiusOld < 250.0f ? r.radiusOld : -1.0f;
                cp.at = to;
                if (hiz)
                {
                    HdGpuSceneObject& o = s_objects[to];
                    o = { centre[0], centre[1], centre[2], r.sphere[3], i, { 0, 0, 0 } };
                }
            }
        }
        if (hiz && s_copies)
        {
            const C44Matrix& p = g_theGxDevicePtr->m_projNative;
            s_second = HdGpuSceneDevPhase1(s_span, s_objects.data(), s_copies, static_cast<uint32_t>(s_reg.size()), &p.a0);
            if (s_second)
            {
                mem.draws2 = mem.draws;
                for (data::Draw& d : mem.draws2) d.replay = 0;
            }
        }
        elements = s_elements.data();
        indices = s_indices.data();
        count = el;
        return true;
    }

    bool Ordre1()
    {
        static CVar* s_ordre = nullptr;
        if (!s_ordre)
            s_ordre = CVar::Register("hdOrdre1",
                "HD (Claude ORDRE1) : 1 = le sol est dessine apres les objets et les batiments, les ombres pleines "
                "sans calcul de pixel (image identique) ; 0 = l'ordre d'origine",
                1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        return s_ordre->m_intValue != 0;
    }

    bool Early(CM2Scene* scene) { return s_ready && scene == World::s_m2Scene && Mode() == 1; }

    CM2Lighting* Lighting(const M2Element* element)
    {
        const ActiveUse& au = s_activeUses[static_cast<uint32_t>(element->m_index)];
        return s_class[s_group[au.group].cls].lighting[au.lights];
    }

    bool Arm(const M2Element* element)
    {
        FrameMemory& mem = s_memory[(s_memoryAt - 1u) & 3u];
        const uint32_t n = static_cast<uint32_t>(element->m_index);
        const std::vector<data::Draw>& draws = s_phase ? mem.draws2 : mem.draws;
        if (n >= draws.size()) return false;
        const ActiveUse& au = s_activeUses[n];
        const Use& u = s_group[au.group].use[au.lights];
        if (!HdGpuSceneDevArm(s_span, u.first, draws[n].cmdCount, &draws[n], s_second || s_phase ? s_phase + 1u : 0u))
        {
            ++s_drawFailed;
            return false;
        }
        return true;
    }

    void Disarm() { HdGpuFixedDevDisarm(); }

    void Forget(CMapDoodadDef* doodad)
    {
        if (!doodad) return;
        uint16_t& mark = Mark(doodad);
        if (!mark) return;
        if (mark < kRefused)
        {
            const uint32_t i = mark - 1u;
            if (i < s_reg.size() && s_reg[i].live && s_reg[i].doodad == doodad)
            {
                s_taken.erase(std::remove(s_taken.begin(), s_taken.end(), i), s_taken.end());
                if (s_busy) s_ready = s_ready && std::find(s_chosen.begin(), s_chosen.end(), i) == s_chosen.end();
                Unregister(i);
            }
        }
        mark = 0;
    }
}
