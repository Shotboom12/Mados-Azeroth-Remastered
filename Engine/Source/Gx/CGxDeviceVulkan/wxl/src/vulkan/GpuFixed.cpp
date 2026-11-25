// Claude voie B (23 nov 2026): the GPU side of the fixed sun-shadow casters. See GpuFixed.hpp.
#include "vulkan/GpuFixed.hpp"

#include "native/Present.hpp"
#include "vulkan/Context.hpp"
#include "vulkan/DeviceCaps.hpp"
#include "vulkan/Loader.hpp"
#include "vulkan/Manifest.hpp"
#include "vulkan/Memory.hpp"
#include "vulkan/Pipelines.hpp"
#include "draw/Cmd.hpp"
#include "common/ModulePath.hpp"
#include "wxl/Script.hpp"

#include "vulkan/GpuFixedCull.spv.h"
#include "vulkan/GpuFixedAnim.spv.h"
#include "draw/Proxy.hpp"
#include "native/Slots.hpp"
#include "wxl/game/Binding.hpp"
#include "wxl/offsets/engine/Gx.hpp"
#include "wxl/offsets/engine/GxDevice.hpp"

namespace wxlvk::native::render { bool AnyDrawFilter(); }
#ifdef WOWDECOMP_FSR
namespace HD::Fsr::Rigid { bool Active(); }
#endif

#include <windows.h>

#include <cstdio>
#include <cstring>
#include <vector>

namespace
{
    namespace context = wxlvk::vk::context;
    namespace memory  = wxlvk::vk::memory;
    namespace present = wxlvk::native::present;

    constexpr uint32_t kBindings = 11;
    constexpr VkDeviceSize kHeadBytes = VkDeviceSize(wxlvk::vk::manifest::kBoneRows) * 16u;     // Claude B2: a stream's first 225 rows (SceneHead)
    constexpr VkDeviceSize kReplayRange = VkDeviceSize(wxlvk::vk::manifest::kBoneRows) * 16u;   // Claude B2: a palette (Internal.hpp kBoneRange)

    struct Buf
    {
        memory::Buffer b;
        VkDeviceSize   cap = 0;
    };

    struct PendingMesh
    {
        std::vector<uint8_t>  vertices;
        std::vector<uint16_t> indices;
        VkDeviceSize vertexAt = 0;   // bytes into the vertex buffer
        VkDeviceSize indexAt  = 0;
    };

    struct DeadSet
    {
        VkDescriptorSet set;
        uint64_t        serial;
    };

    struct G
    {
        bool tried = false, ok = false;
        VkDescriptorSetLayout layout = VK_NULL_HANDLE;
        VkPipelineLayout      pipeLayout = VK_NULL_HANDLE;
        VkPipeline            pipeline = VK_NULL_HANDLE;
        VkPipeline            animPipeline = VK_NULL_HANDLE;   // Claude B4: the animated doodads' bones, before it
        VkDescriptorPool      pool = VK_NULL_HANDLE;
        VkDescriptorSet       set = VK_NULL_HANDLE;       // the compute set for the buffers below
        VkDescriptorSet       paletteSet = VK_NULL_HANDLE;
        VkBuffer              setFor[kBindings] = {};
        VkBuffer              paletteFor = VK_NULL_HANDLE;
        std::vector<DeadSet>  dead;

        // 0 frame, 1 objects, 2 entries, 3 commands, 4 links, 5 bits, 6 args, 7 palette, 8 chosen, 9 animated models, 10 bones
        Buf bufs[kBindings];
        Buf vertices, indices, readback;
        VkDeviceSize vertexUsed = 0, indexUsed = 0;
        std::vector<PendingMesh> meshes;

        std::vector<uint8_t> tables[4];   // objects, entries, commands, links (pending upload)
        std::vector<uint8_t> anim;        // Claude B4: binding 9 (pending upload with them)
        uint32_t animObjects = 0, boneRows = 0, paletteRows = 0;
        bool     tablesDirty = false;
        uint32_t objects = 0, entries = 0, commands = 0, links = 0;

        uint64_t frameSerial = 0;   // the frame the last dispatch was recorded in (draws allowed in it)
        uint64_t readbackSerial = 0, readbackTag = 0;
        uint32_t readbackWords = 0;
        bool     readbackPending = false;

        uint64_t uploads = 0, uploadBytes = 0, dispatches = 0, growths = 0;

        // The CPU-chosen casters' stream memory: a ring of buffers, one taken per frame (its serial), reused once that
        // frame completed. Each has its palette set (offset 0: a copy's rows are found through firstInstance).
        struct Stream
        {
            memory::Buffer  b;
            VkDeviceSize    cap = 0, used = 0;
            uint64_t        serial = 0;
            VkDescriptorSet set = VK_NULL_HANDLE;
            VkDescriptorSet replay = VK_NULL_HANDLE;   // Claude B2: the same buffer, a palette's 3600 bytes
            uint64_t        headSerial = 0;            // Claude B2: SceneHead
            float           head[12][4] = {};
        };
        std::vector<Stream> streams;
        int32_t  stream = -1;   // the open frame's
        uint64_t streamSerial = 0;
    } g;

    thread_local wxlvk::vk::gpufixed::Armed t_armed;

    const wxlvk::vk::loader::Device& D() { return *context::Get()->dapi; }
    VkDevice Dev() { return context::Get()->device; }

    void Barrier(VkCommandBuffer cmd, VkPipelineStageFlags src, VkAccessFlags srcAccess, VkPipelineStageFlags dst,
                 VkAccessFlags dstAccess)
    {
        VkMemoryBarrier m = {};
        m.sType         = VK_STRUCTURE_TYPE_MEMORY_BARRIER;
        m.srcAccessMask = srcAccess;
        m.dstAccessMask = dstAccess;
        D().CmdPipelineBarrier(cmd, src, dst, 0, 1, &m, 0, nullptr, 0, nullptr);
    }

    bool Init()
    {
        if (g.tried) return g.ok;
        g.tried = true;
        const context::Handles* h = context::Get();
        if (!h || !h->dapi || !h->dapi->CmdDrawIndexedIndirect || !h->dapi->CmdDispatch) return false;
        const uint32_t need = wxlvk::vk::kCapMultiDrawIndirect | wxlvk::vk::kCapIndirectFirstInstance;
        if ((context::Caps().enabled & need) != need)
        {
            wxl::ScriptMgr::Log(WXL_LOG_INFO, "vulkan: voie B: multiDrawIndirect / drawIndirectFirstInstance not enabled; off");
            return false;
        }
        const VkDescriptorSetLayout bones = wxlvk::vk::pipelines::BonesLayout();
        if (bones == VK_NULL_HANDLE) return false;

        VkDescriptorSetLayoutBinding b[kBindings] = {};
        for (uint32_t i = 0; i < kBindings; ++i)
        {
            b[i].binding         = i;
            b[i].descriptorType  = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER;
            b[i].descriptorCount = 1;
            b[i].stageFlags      = VK_SHADER_STAGE_COMPUTE_BIT;
        }
        VkDescriptorSetLayoutCreateInfo li = {};
        li.sType        = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO;
        li.bindingCount = kBindings;
        li.pBindings    = b;
        if (D().CreateDescriptorSetLayout(Dev(), &li, nullptr, &g.layout) != VK_SUCCESS) return false;
        VkPipelineLayoutCreateInfo pl = {};
        pl.sType          = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
        pl.setLayoutCount = 1;
        pl.pSetLayouts    = &g.layout;
        if (D().CreatePipelineLayout(Dev(), &pl, nullptr, &g.pipeLayout) != VK_SUCCESS) return false;
        for (int pass = 0; pass < 2; ++pass)
        {
            VkShaderModuleCreateInfo sm = {};
            sm.sType    = VK_STRUCTURE_TYPE_SHADER_MODULE_CREATE_INFO;
            sm.codeSize = pass ? sizeof kGpuFixedAnimSpv : sizeof kGpuFixedCullSpv;
            sm.pCode    = pass ? kGpuFixedAnimSpv : kGpuFixedCullSpv;
            VkShaderModule module = VK_NULL_HANDLE;
            if (D().CreateShaderModule(Dev(), &sm, nullptr, &module) != VK_SUCCESS) return false;
            VkComputePipelineCreateInfo cp = {};
            cp.sType        = VK_STRUCTURE_TYPE_COMPUTE_PIPELINE_CREATE_INFO;
            cp.stage.sType  = VK_STRUCTURE_TYPE_PIPELINE_SHADER_STAGE_CREATE_INFO;
            cp.stage.stage  = VK_SHADER_STAGE_COMPUTE_BIT;
            cp.stage.module = module;
            cp.stage.pName  = "main";
            cp.layout       = g.pipeLayout;
            const VkResult r = D().CreateComputePipelines(Dev(), wxlvk::vk::pipelines::PipelineCache(), 1, &cp, nullptr,
                                                          pass ? &g.animPipeline : &g.pipeline);
            D().DestroyShaderModule(Dev(), module, nullptr);
            if (r != VK_SUCCESS) return false;
        }

        VkDescriptorPoolSize sizes[2] = {};
        sizes[0].type            = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER;
        sizes[0].descriptorCount = kBindings * 32;
        sizes[1].type            = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER_DYNAMIC;
        sizes[1].descriptorCount = 32;
        VkDescriptorPoolCreateInfo pi = {};
        pi.sType         = VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO;
        pi.flags         = VK_DESCRIPTOR_POOL_CREATE_FREE_DESCRIPTOR_SET_BIT;
        pi.maxSets       = 64;
        pi.poolSizeCount = 2;
        pi.pPoolSizes    = sizes;
        if (D().CreateDescriptorPool(Dev(), &pi, nullptr, &g.pool) != VK_SUCCESS) return false;
        g.ok = true;
        wxl::ScriptMgr::Log(WXL_LOG_INFO, "vulkan: voie B: compute choice of the fixed sun-shadow casters ready");
        return true;
    }

    void FreeDeadSets()
    {
        const uint64_t done = present::Completed();
        for (size_t i = 0; i < g.dead.size();)
        {
            if (g.dead[i].serial <= done)
            {
                D().FreeDescriptorSets(Dev(), g.pool, 1, &g.dead[i].set);
                g.dead[i] = g.dead.back();
                g.dead.pop_back();
            }
            else ++i;
        }
    }

    /// A buffer at least `bytes` long; a smaller one is retired (after this frame) and replaced. `keep`: the old
    /// contents are copied over in `cmd` (the shared vertex / index buffers).
    bool Ensure(Buf& buf, VkDeviceSize bytes, VkBufferUsageFlags usage, memory::Where where, VkCommandBuffer cmd,
                VkDeviceSize keep)
    {
        if (buf.b.handle != VK_NULL_HANDLE && buf.cap >= bytes) return true;
        VkDeviceSize cap = buf.cap ? buf.cap : 64 * 1024;
        while (cap < bytes) cap *= 2;
        memory::Buffer nb;
        if (!memory::CreateBuffer(cap, usage | VK_BUFFER_USAGE_TRANSFER_DST_BIT | VK_BUFFER_USAGE_TRANSFER_SRC_BIT, where, nb))
        {
            wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: voie B: no memory for a %llu KiB buffer", static_cast<unsigned long long>(cap / 1024));
            return false;
        }
        if (buf.b.handle != VK_NULL_HANDLE)
        {
            if (keep && cmd)
            {
                VkBufferCopy c = {};
                c.size = keep;
                D().CmdCopyBuffer(cmd, buf.b.handle, nb.handle, 1, &c);
            }
            present::RetireBuffer(buf.b, present::Serial());
            ++g.growths;
        }
        buf.b   = nb;
        buf.cap = cap;
        return true;
    }

    bool StageCopy(VkCommandBuffer cmd, const void* data, VkDeviceSize bytes, VkBuffer dst, VkDeviceSize at)
    {
        if (!bytes) return true;
        // In spans of at most 4 MiB: the staging ring's spans are the slot's own memory.
        const uint8_t* p = static_cast<const uint8_t*>(data);
        while (bytes)
        {
            const VkDeviceSize n = bytes > (4u << 20) ? (4u << 20) : bytes;
            VkBuffer src = VK_NULL_HANDLE;
            VkDeviceSize off = 0;
            void* mapped = nullptr;
            if (!present::Stage(n, src, off, mapped) || !mapped) return false;
            std::memcpy(mapped, p, static_cast<size_t>(n));
            VkBufferCopy c = {};
            c.srcOffset = off;
            c.dstOffset = at;
            c.size      = n;
            D().CmdCopyBuffer(cmd, src, dst, 1, &c);
            p += n;
            at += n;
            bytes -= n;
            ++g.uploads;
            g.uploadBytes += n;
        }
        return true;
    }

    /// The compute set (and the palette set) for the current buffers: a new one whenever a handle changed, the old one
    /// freed once the frames that bound it completed (FreeDeadSets).
    bool Sets()
    {
        bool same = g.set != VK_NULL_HANDLE;
        for (uint32_t i = 0; i < kBindings && same; ++i) same = g.setFor[i] == g.bufs[i].b.handle;
        if (!same)
        {
            if (g.set != VK_NULL_HANDLE) g.dead.push_back({ g.set, present::Serial() });
            VkDescriptorSetAllocateInfo ai = {};
            ai.sType              = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
            ai.descriptorPool     = g.pool;
            ai.descriptorSetCount = 1;
            ai.pSetLayouts        = &g.layout;
            g.set = VK_NULL_HANDLE;
            if (D().AllocateDescriptorSets(Dev(), &ai, &g.set) != VK_SUCCESS) return false;
            VkDescriptorBufferInfo info[kBindings] = {};
            VkWriteDescriptorSet   w[kBindings]    = {};
            for (uint32_t i = 0; i < kBindings; ++i)
            {
                info[i].buffer          = g.bufs[i].b.handle;
                info[i].offset          = 0;
                info[i].range           = VK_WHOLE_SIZE;
                w[i].sType              = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
                w[i].dstSet             = g.set;
                w[i].dstBinding         = i;
                w[i].descriptorCount    = 1;
                w[i].descriptorType     = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER;
                w[i].pBufferInfo        = &info[i];
                g.setFor[i]             = g.bufs[i].b.handle;
            }
            D().UpdateDescriptorSets(Dev(), kBindings, w, 0, nullptr);
        }
        if (g.paletteFor != g.bufs[7].b.handle)
        {
            if (g.paletteSet != VK_NULL_HANDLE) g.dead.push_back({ g.paletteSet, present::Serial() });
            const VkDescriptorSetLayout bones = wxlvk::vk::pipelines::BonesLayout();
            VkDescriptorSetAllocateInfo ai = {};
            ai.sType              = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
            ai.descriptorPool     = g.pool;
            ai.descriptorSetCount = 1;
            ai.pSetLayouts        = &bones;
            g.paletteSet = VK_NULL_HANDLE;
            if (D().AllocateDescriptorSets(Dev(), &ai, &g.paletteSet) != VK_SUCCESS) return false;
            VkDescriptorBufferInfo info = {};
            info.buffer = g.bufs[7].b.handle;
            info.offset = 0;
            info.range  = VK_WHOLE_SIZE;
            VkWriteDescriptorSet w = {};
            w.sType           = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
            w.dstSet          = g.paletteSet;
            w.dstBinding      = 0;
            w.descriptorCount = 1;
            w.descriptorType  = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER_DYNAMIC;
            w.pBufferInfo     = &info;
            D().UpdateDescriptorSets(Dev(), 1, &w, 0, nullptr);
            g.paletteFor = g.bufs[7].b.handle;
        }
        return true;
    }

    /// The palette set of a buffer (the pipelines' bone layout: one dynamic storage buffer).
    VkDescriptorSet PaletteSetFor(VkBuffer buffer, VkDeviceSize range = VK_WHOLE_SIZE)
    {
        const VkDescriptorSetLayout bones = wxlvk::vk::pipelines::BonesLayout();
        VkDescriptorSetAllocateInfo ai = {};
        ai.sType              = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
        ai.descriptorPool     = g.pool;
        ai.descriptorSetCount = 1;
        ai.pSetLayouts        = &bones;
        VkDescriptorSet set = VK_NULL_HANDLE;
        if (D().AllocateDescriptorSets(Dev(), &ai, &set) != VK_SUCCESS) return VK_NULL_HANDLE;
        VkDescriptorBufferInfo info = {};
        info.buffer = buffer;
        info.offset = 0;
        info.range  = range;
        VkWriteDescriptorSet w = {};
        w.sType           = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
        w.dstSet          = set;
        w.dstBinding      = 0;
        w.descriptorCount = 1;
        w.descriptorType  = VK_DESCRIPTOR_TYPE_STORAGE_BUFFER_DYNAMIC;
        w.pBufferInfo     = &info;
        D().UpdateDescriptorSets(Dev(), 1, &w, 0, nullptr);
        return set;
    }

    /// This frame's stream buffer with room for `bytes` more (a free one of the ring, grown when too small).
    G::Stream* StreamFor(VkDeviceSize bytes)
    {
        bytes += kHeadBytes;
        FreeDeadSets();
        const uint64_t serial = present::Serial();
        if (g.stream >= 0 && g.streamSerial == serial)
        {
            G::Stream& s = g.streams[static_cast<size_t>(g.stream)];
            if (s.used + bytes <= s.cap) return &s;
        }
        // A buffer no frame in flight still reads.
        const uint64_t done = present::Completed();
        int32_t pick = -1;
        for (size_t i = 0; i < g.streams.size(); ++i)
        {
            const G::Stream& s = g.streams[i];
            if (static_cast<int32_t>(i) == g.stream && g.streamSerial == serial) continue;   // full, this frame's
            if (s.serial <= done && s.serial != serial) { pick = static_cast<int32_t>(i); if (s.cap >= bytes) break; }
        }
        if (pick < 0)
        {
            if (g.streams.size() >= 16) return nullptr;
            g.streams.emplace_back();
            pick = static_cast<int32_t>(g.streams.size() - 1);
        }
        G::Stream& s = g.streams[static_cast<size_t>(pick)];
        if (s.cap < bytes)
        {
            VkDeviceSize cap = s.cap ? s.cap : (1u << 20);
            while (cap < bytes) cap *= 2;
            memory::Buffer nb;
            if (!memory::CreateBuffer(cap, VK_BUFFER_USAGE_STORAGE_BUFFER_BIT | VK_BUFFER_USAGE_INDIRECT_BUFFER_BIT,
                                      memory::Where::Stream, nb) || !nb.block.mapped)
                return nullptr;
            if (s.b.handle != VK_NULL_HANDLE)
            {
                present::RetireBuffer(s.b, s.serial);
                if (s.set != VK_NULL_HANDLE) g.dead.push_back({ s.set, s.serial });
                if (s.replay != VK_NULL_HANDLE) g.dead.push_back({ s.replay, s.serial });
                ++g.growths;
            }
            s.b = nb;
            s.cap = cap;
            s.set = PaletteSetFor(nb.handle);
            if (s.set == VK_NULL_HANDLE) return nullptr;
            s.replay = PaletteSetFor(nb.handle, kReplayRange);
            if (s.replay == VK_NULL_HANDLE) return nullptr;
        }
        s.used = kHeadBytes;
        s.headSerial = 0;
        s.serial = serial;
        g.stream = pick;
        g.streamSerial = serial;
        return &s;
    }
}

namespace wxlvk::vk::gpufixed
{
    const Armed* Current() { return t_armed.on ? &t_armed : nullptr; }

    void SceneHead(const void* shadowRows)
    {
        if (t_armed.stream >= g.streams.size()) return;
        G::Stream& s = g.streams[t_armed.stream];
        if (s.headSerial == s.serial)
        {
            if (std::memcmp(s.head, shadowRows, sizeof s.head) == 0) return;
            static bool said = false;
            if (!said)
            {
                said = true;
                wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: voie B2: the shadow matrices changed inside a frame's scene draws (logged once)");
            }
        }
        std::memcpy(s.head, shadowRows, sizeof s.head);
        std::memcpy(static_cast<uint8_t*>(s.b.block.mapped) + 193u * 16u, shadowRows, sizeof s.head);   // c224 = b[193]
        s.headSerial = s.serial;
    }
}

bool HdGpuFixedDevReady()
{
    namespace manifest = wxlvk::vk::manifest;
    static int ready = -1;
    if (ready >= 0) return ready == 1;
    if (!context::Get() || !manifest::Loaded()) return false;   // asked again later
    ready = 0;
    if (!Init()) return false;
    // Every ShadowMap vertex record with a bone module must have its .bones.gpu twin (outils-shaders/voie-b).
    uint32_t found = 0;
    for (uint32_t perm = 0; perm < 100; ++perm)
    {
        char name[32];
        std::snprintf(name, sizeof name, "ShadowMap:%u", perm);
        const manifest::Record* r = manifest::ByName(name, manifest::Kind::Vertex);
        if (!r || r->vconst != wxlvk::draw::Cmd::kVertexRegsHigh || r->bones[0] == '\0') continue;
        const size_t n = std::strlen(r->bones);
        if (n < 10 || std::strcmp(r->bones + n - 10, ".bones.spv") != 0) return false;
        char rel[256];
        std::snprintf(rel, sizeof rel, "shaders/translated/%.*s.gpu.spv", static_cast<int>(n - 4), r->bones);
        const DWORD attr = GetFileAttributesA(wxlvk::path::Resolve(rel).c_str());
        if (attr == INVALID_FILE_ATTRIBUTES || (attr & FILE_ATTRIBUTE_DIRECTORY))
        {
            wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: voie B: %s missing; off", rel);
            return false;
        }
        ++found;
    }
    ready = found > 0 ? 1 : 0;
    return ready == 1;
}

bool HdGpuFixedDevMesh(const void* vertices, uint32_t vertexCount, uint32_t vertexStride, const uint16_t* indices,
                       uint32_t indexCount, int32_t& vertexBase, uint32_t& indexBase)
{
    if (!g.ok || !vertexStride || (g.vertexUsed % vertexStride) != 0) return false;
    PendingMesh m;
    m.vertices.assign(static_cast<const uint8_t*>(vertices), static_cast<const uint8_t*>(vertices) + size_t(vertexCount) * vertexStride);
    m.indices.assign(indices, indices + indexCount);
    m.vertexAt = g.vertexUsed;
    m.indexAt  = g.indexUsed;
    vertexBase = static_cast<int32_t>(g.vertexUsed / vertexStride);
    indexBase  = static_cast<uint32_t>(g.indexUsed / sizeof(uint16_t));
    g.vertexUsed += m.vertices.size();
    g.indexUsed  += (m.indices.size() * sizeof(uint16_t) + 3) & ~VkDeviceSize(3);   // copies stay 4-byte aligned
    g.meshes.push_back(std::move(m));
    return true;
}

void HdGpuFixedDevResetMeshes()
{
    g.meshes.clear();
    g.vertexUsed = 0;
    g.indexUsed  = 0;
}

void HdGpuFixedDevTables(const void* objects, uint32_t objectCount, const uint32_t* entries, uint32_t entryCount,
                         const void* commands, uint32_t commandCount, const uint32_t* links, uint32_t linkCount,
                         const uint32_t* anim, uint32_t animWords, uint32_t animObjects, uint32_t boneRows, uint32_t paletteRows)
{
    const uint8_t* o = static_cast<const uint8_t*>(objects);
    const uint8_t* c = static_cast<const uint8_t*>(commands);
    g.tables[0].assign(o, o + size_t(objectCount) * 128u);
    g.tables[1].assign(reinterpret_cast<const uint8_t*>(entries), reinterpret_cast<const uint8_t*>(entries) + size_t(entryCount) * 4u);
    g.tables[2].assign(c, c + size_t(commandCount) * 48u);
    g.tables[3].assign(reinterpret_cast<const uint8_t*>(links), reinterpret_cast<const uint8_t*>(links) + size_t(linkCount) * 4u);
    g.objects = objectCount;
    g.entries = entryCount;
    g.commands = commandCount;
    g.links = linkCount;
    g.anim.assign(reinterpret_cast<const uint8_t*>(anim), reinterpret_cast<const uint8_t*>(anim) + size_t(animWords) * 4u);
    g.animObjects = animObjects;
    g.boneRows = boneRows;
    g.paletteRows = paletteRows;
    g.tablesDirty = true;
}

namespace
{
    uint64_t g_meshSerial = 0;   // the frame the shared geometry was last made current in

    /// The shared geometry's pending meshes, recorded into the pre-pass (after its WAR barrier).
    bool UploadMeshes(VkCommandBuffer cmd)
    {
        bool ok = true;
        if (!g.meshes.empty())
        {
            const VkDeviceSize vOld = g.meshes.front().vertexAt, iOld = g.meshes.front().indexAt;
            ok = ok && Ensure(g.vertices, g.vertexUsed, VK_BUFFER_USAGE_VERTEX_BUFFER_BIT, memory::Where::DeviceLocal, cmd, vOld);
            ok = ok && Ensure(g.indices, g.indexUsed, VK_BUFFER_USAGE_INDEX_BUFFER_BIT, memory::Where::DeviceLocal, cmd, iOld);
            if (ok && (vOld || iOld)) Barrier(cmd, VK_PIPELINE_STAGE_TRANSFER_BIT, VK_ACCESS_TRANSFER_WRITE_BIT,
                                              VK_PIPELINE_STAGE_TRANSFER_BIT, VK_ACCESS_TRANSFER_WRITE_BIT);
            for (const PendingMesh& m : g.meshes)
            {
                if (!ok) break;
                ok = StageCopy(cmd, m.vertices.data(), m.vertices.size(), g.vertices.b.handle, m.vertexAt)
                     && StageCopy(cmd, m.indices.data(), m.indices.size() * sizeof(uint16_t), g.indices.b.handle, m.indexAt);
            }
            if (ok) g.meshes.clear();
        }
        return ok && g.vertices.b.handle != VK_NULL_HANDLE && g.indices.b.handle != VK_NULL_HANDLE;
    }
}

bool HdGpuFixedDevUploadMeshes()
{
    if (!g.ok || !present::FrameOpen()) return false;
    if (g.meshes.empty() && g_meshSerial == present::Serial())
        return g.vertices.b.handle != VK_NULL_HANDLE && g.indices.b.handle != VK_NULL_HANDLE;
    if (g.meshes.empty() && g.vertices.b.handle != VK_NULL_HANDLE && g.indices.b.handle != VK_NULL_HANDLE)
    {
        g_meshSerial = present::Serial();
        return true;
    }
    VkCommandBuffer cmd = present::PrePass();
    if (!cmd) return false;
    Barrier(cmd, VK_PIPELINE_STAGE_VERTEX_INPUT_BIT | VK_PIPELINE_STAGE_TRANSFER_BIT, 0, VK_PIPELINE_STAGE_TRANSFER_BIT, 0);
    if (!UploadMeshes(cmd)) return false;
    Barrier(cmd, VK_PIPELINE_STAGE_TRANSFER_BIT, VK_ACCESS_TRANSFER_WRITE_BIT, VK_PIPELINE_STAGE_VERTEX_INPUT_BIT,
            VK_ACCESS_VERTEX_ATTRIBUTE_READ_BIT | VK_ACCESS_INDEX_READ_BIT);
    g_meshSerial = present::Serial();
    return true;
}

bool HdGpuFixedDevCpuAlloc(uint32_t rows, uint32_t copies, uint32_t commands, HdGpuFixedCpuSpan& span)
{
    span = {};
    if (!g.ok || !rows || !copies || !commands || !present::FrameOpen()) return false;
    const VkDeviceSize rowBytes = VkDeviceSize(rows) * 16u;
    const VkDeviceSize palette = VkDeviceSize(copies) * rowBytes;
    const VkDeviceSize args = VkDeviceSize(commands) * 20u;
    G::Stream* s = StreamFor(palette + args + rowBytes + 16u);
    if (!s) return false;
    // The palette starts on a whole copy (firstInstance * rows rows), the commands after it on 4 bytes.
    VkDeviceSize at = (s->used + rowBytes - 1) / rowBytes * rowBytes;
    span.firstInstance = static_cast<uint32_t>(at / rowBytes);
    span.palette = static_cast<uint8_t*>(s->b.block.mapped) + at;
    at += palette;
    at = (at + 3u) & ~VkDeviceSize(3);
    span.args = static_cast<uint8_t*>(s->b.block.mapped) + at;
    span.argsOffset = static_cast<uint32_t>(at);
    s->used = at + args;
    span.commands = commands;
    span.rows = rows;
    span.slot = static_cast<uint32_t>(g.stream);
    return true;
}

struct HdGpuSceneObject { float x, y, z, radius; uint32_t vis; uint32_t pad[3]; };

bool HdGpuFixedDevArmCpu(const HdGpuFixedCpuSpan& span)
{
    if (!g.ok || span.slot >= g.streams.size() || g.streamSerial != present::Serial() || !span.commands
        || g_meshSerial != present::Serial())
        return false;
    const G::Stream& s = g.streams[span.slot];
    if (s.serial != present::Serial()) return false;
    t_armed.on          = true;
    t_armed.args        = s.b.handle;
    t_armed.argsOffset  = span.argsOffset;
    t_armed.drawCount   = span.commands;
    t_armed.palette     = s.set;
    t_armed.vertices    = g.vertices.b.handle;
    t_armed.indices     = g.indices.b.handle;
    t_armed.vertexBytes = static_cast<uint32_t>(g.vertices.cap);
    t_armed.indexBytes  = static_cast<uint32_t>(g.indices.cap);
    t_armed.rows        = span.rows;
    t_armed.scene       = nullptr;
    t_armed.terrain     = nullptr;
    t_armed.multi       = false;
    return true;
}

// --- Claude B2: the main scene's groups (HdGpuScene.cpp) ----------------------------------------------------------------

bool HdGpuSceneDevReady()
{
    namespace manifest = wxlvk::vk::manifest;
    static int ready = -1;
    if (ready >= 0) return ready == 1;
    if (!context::Get() || !manifest::Loaded()) return false;   // asked again later
    ready = 0;
    VkPhysicalDeviceProperties props = {};
    context::Get()->iapi->GetPhysicalDeviceProperties(context::Get()->physical, &props);
    if (props.limits.minStorageBufferOffsetAlignment > 16)
    {
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: voie B2: storage buffers aligned to %u bytes (16 wanted); off",
                            static_cast<unsigned>(props.limits.minStorageBufferOffsetAlignment));
        return false;
    }
    // Every bone module of the M2 scene's vertex families must have its .gpus twin (outils-shaders/voie-b).
    static const char* const kFamilies[] = { "CDiffuse_T1", "Color_Proj_Proj", "Color_T1", "Diffuse_Env", "Diffuse_Env_Env",
        "Diffuse_Env_T2", "Diffuse_Proj_Proj", "Diffuse_T1", "Diffuse_T1_Env", "Diffuse_T1_T2", "Diffuse_T2" };
    uint32_t found = 0;
    for (const char* family : kFamilies)
        for (uint32_t perm = 0; perm < 200; ++perm)
        {
            char name[64];
            std::snprintf(name, sizeof name, "%s:%u", family, perm);
            const manifest::Record* r = manifest::ByName(name, manifest::Kind::Vertex);
            if (!r || r->vconst != wxlvk::draw::Cmd::kVertexRegsHigh || r->bones[0] == '\0') continue;
            const size_t n = std::strlen(r->bones);
            if (n < 10 || std::strcmp(r->bones + n - 10, ".bones.spv") != 0) return false;
            for (const char* tail : { ".gpus.spv", ".gbuf.gpus.spv", ".shadow.gpus.spv", ".gpul.spv", ".gbuf.gpul.spv", ".shadow.gpul.spv" })
            {
                // (specular + 2 * (lights + 5 * ...): CM2Scene::ComputeElementShaders.)
                if (std::strstr(tail, ".gpul") && (perm / 2) % 5 == 0) continue;
                char rel[256];
                std::snprintf(rel, sizeof rel, "shaders/translated/%.*s%s", static_cast<int>(n - 4), r->bones, tail);
                const DWORD attr = GetFileAttributesA(wxlvk::path::Resolve(rel).c_str());
                if (attr == INVALID_FILE_ATTRIBUTES || (attr & FILE_ATTRIBUTE_DIRECTORY))
                {
                    wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: voie B2: %s missing; off", rel);
                    return false;
                }
            }
            ++found;
        }
    wxl::ScriptMgr::Log(WXL_LOG_INFO, "vulkan: voie B2: %u scene modules with their GPU twin", found);
    ready = found > 0 ? 1 : 0;
    return ready == 1;
}

bool HdGpuSceneDevArm(const HdGpuFixedCpuSpan& span, uint32_t first, uint32_t count, const HD::GpuSceneData::Draw* draw,
                      uint32_t phase)
{
    if (!count || first + count > span.commands || !HdGpuFixedDevArmCpu(span)) return false;
    const G::Stream& s = g.streams[span.slot];
    t_armed.argsOffset  = span.argsOffset + first * 20u;
    t_armed.drawCount   = count;
    t_armed.scene       = draw;
    t_armed.stream      = span.slot;
    t_armed.replay      = s.replay;
    (void)phase;
    return true;
}

// --- Claude B3: the terrain's groups (HdGpuTerrain.cpp) -----------------------------------------------------------------

bool HdGpuTerrainDevReady()
{
    namespace manifest = wxlvk::vk::manifest;
    static int ready = -1;
    if (ready >= 0) return ready == 1;
    if (!context::Get() || !manifest::Loaded() || !wxlvk::vk::pipelines::BonesLayout()) return false;   // asked again later
    ready = 0;
    if (!Init() || !wxlvk::vk::pipelines::TableReady()) return false;
    VkPhysicalDeviceProperties props = {};
    context::Get()->iapi->GetPhysicalDeviceProperties(context::Get()->physical, &props);
    if (props.limits.minStorageBufferOffsetAlignment > 16) return false;
    // Every terrain module of ours must have its twins (outils-shaders/voie-b).
    const auto has = [](const char* spv, const char* tail) {
        const size_t n = std::strlen(spv);
        if (n < 4) return false;
        char rel[256];
        std::snprintf(rel, sizeof rel, "shaders/translated/%.*s%s", static_cast<int>(n - 4), spv, tail);
        const DWORD attr = GetFileAttributesA(wxlvk::path::Resolve(rel).c_str());
        if (attr != INVALID_FILE_ATTRIBUTES && !(attr & FILE_ATTRIBUTE_DIRECTORY)) return true;
        wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: voie B3: %s missing; off", rel);
        return false;
    };
    uint32_t found = 0;
    for (uint32_t family = 0; family < 4; ++family)
        for (uint32_t perm = 0; perm < 128; ++perm)
        {
            char name[32];
            if (family == 0) std::snprintf(name, sizeof name, "HdTerrain:vs:0:%u", perm);
            else             std::snprintf(name, sizeof name, "HdTerrain:ps:%u:%u", family, perm);
            const manifest::Record* r = manifest::ByName(name, family == 0 ? manifest::Kind::Vertex : manifest::Kind::Pixel);
            if (!r) continue;
            if (!has(r->spv, ".gput.spv") || !has(r->spv, ".gbuf.gput.spv")) return false;
            if (family == 0 && (!has(r->spv, ".shadow.gput.spv") || !has(r->spv, ".shadow.gputr.spv") || !has(r->spv, ".shadowmv.gputr.spv")))
                return false;
            ++found;
        }
    wxl::ScriptMgr::Log(WXL_LOG_INFO, "vulkan: voie B3: %u terrain modules with their GPU twins", found);
    ready = found > 0 ? 1 : 0;
    return ready == 1;
}

bool HdGpuTerrainDevFrame()
{
#ifdef WOWDECOMP_FSR
    if (HD::Fsr::Rigid::Active()) return false;
#endif
    return g.ok && present::FrameOpen() && present::DrawPathUp() && !wxlvk::native::render::AnyDrawFilter();
}

bool HdGpuTerrainDevTexture(void* device, void* tex, float& place, bool& cube)
{
    namespace gxdev = wxl::offsets::engine::gxdevice;
    using wxl::game::At;
    place = 0.0f;
    cube  = false;
    if (!tex) return false;
    if (!At<const void* const>(tex, gxdev::kTexApiObject2) || At<const uint8_t>(tex, gxdev::kTexUpdatePending))
        wxlvk::native::impl::PrepareTexture(device, tex);
    if (wxlvk::draw::proxy::Resolve(tex)) return false;
    const wxlvk::vk::texture::Image* image = nullptr;
    if (!wxlvk::native::impl::ResolveTexture(tex, image) || !image) return false;
    if (image->cube)
    {
        cube = true;
        return true;
    }
    const int32_t at = wxlvk::vk::pipelines::TablePlace(*image, At<const uint32_t>(tex, gxdev::kTexFlags));
    if (at < 0) return false;
    place = static_cast<float>(at);
    return true;
}

bool HdGpuTerrainDevGeometry(const void* vertexBuf, const void* indexBuf, uint32_t start, uint32_t& firstIndex, int32_t& vertexOffset)
{
    namespace gxdev = wxl::offsets::engine::gxdevice;
    using wxl::game::At;
    const uint32_t stride = At<const uint32_t>(vertexBuf, gxdev::kBufItemSize);
    if (!stride) return false;
    vertexOffset = static_cast<int32_t>(At<const uint32_t>(vertexBuf, gxdev::kBufOffset) / stride);
    firstIndex   = At<const uint32_t>(indexBuf, gxdev::kBufOffset) / gxdev::kIndexSize + start;
    wxlvk::native::impl::NoteBufDrawn(vertexBuf);
    wxlvk::native::impl::NoteBufDrawn(indexBuf);
    return true;
}

bool HdGpuTerrainDevArm(const HdGpuFixedCpuSpan& span, uint32_t first, uint32_t count, const HD::GpuTerrainData::Draw* draw)
{
    if (!g.ok || !count || first + count > span.commands || span.slot >= g.streams.size() || g.streamSerial != present::Serial())
        return false;
    const G::Stream& s = g.streams[span.slot];
    if (s.serial != present::Serial()) return false;
    t_armed            = wxlvk::vk::gpufixed::Armed();
    t_armed.on         = true;
    t_armed.args       = s.b.handle;
    t_armed.argsOffset = span.argsOffset + first * 20u;
    t_armed.drawCount  = count;
    t_armed.palette    = s.set;
    t_armed.rows       = span.rows;
    t_armed.replay     = s.replay;
    t_armed.stream     = span.slot;
    t_armed.terrain    = draw;
    return true;
}

bool HdGpuMultiDevArm(const HdGpuFixedCpuSpan& span)
{
    if (!g.ok || !span.commands || span.slot >= g.streams.size() || g.streamSerial != present::Serial()) return false;
    const G::Stream& s = g.streams[span.slot];
    if (s.serial != present::Serial()) return false;
    t_armed            = wxlvk::vk::gpufixed::Armed();
    t_armed.on         = true;
    t_armed.multi      = true;
    t_armed.args       = s.b.handle;
    t_armed.argsOffset = span.argsOffset;
    t_armed.drawCount  = span.commands;
    return true;
}

bool HdGpuSceneDevPhase1(const HdGpuFixedCpuSpan&, const HdGpuSceneObject*, uint32_t, uint32_t, const float[16]) { return false; }
bool HdGpuSceneDevPhase2() { return false; }

bool HdGpuFixedDevFrame(const void* frame, uint32_t frameBytes, const uint32_t* bits, uint32_t bitWords, bool readback,
                        uint64_t tag)
{
    g.frameSerial = 0;
    if (!g.ok || !present::FrameOpen() || g.commands == 0 || g.entries == 0)
    {
        HdGpuFixedDevUploadMeshes();   // the CPU-chosen casters draw from the shared geometry too
        return false;
    }
    VkCommandBuffer cmd = present::PrePass();
    if (!cmd) return false;
    FreeDeadSets();
    const auto& d = D();

    // The previous frames' reads of these buffers (indirect commands, palette, the copies' sources) come first.
    Barrier(cmd, VK_PIPELINE_STAGE_DRAW_INDIRECT_BIT | VK_PIPELINE_STAGE_VERTEX_INPUT_BIT | VK_PIPELINE_STAGE_VERTEX_SHADER_BIT
                     | VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT | VK_PIPELINE_STAGE_TRANSFER_BIT,
            0, VK_PIPELINE_STAGE_TRANSFER_BIT | VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT, 0);

    const VkBufferUsageFlags storage = VK_BUFFER_USAGE_STORAGE_BUFFER_BIT;
    if (!UploadMeshes(cmd)) return false;
    g_meshSerial = present::Serial();
    bool ok = true;

    if (g.tablesDirty)
    {
        for (uint32_t t = 0; t < 4 && ok; ++t)
        {
            const VkDeviceSize n = g.tables[t].size();
            ok = Ensure(g.bufs[1 + t], n ? n : 16, storage, memory::Where::DeviceLocal, nullptr, 0)
                 && StageCopy(cmd, g.tables[t].data(), n, g.bufs[1 + t].b.handle, 0);
        }
        ok = ok && Ensure(g.bufs[9], g.anim.empty() ? 16 : g.anim.size(), storage, memory::Where::DeviceLocal, nullptr, 0)
             && StageCopy(cmd, g.anim.data(), g.anim.size(), g.bufs[9].b.handle, 0);
        if (!ok) return false;
        g.tablesDirty = false;
    }
    ok = Ensure(g.bufs[0], frameBytes, storage, memory::Where::DeviceLocal, nullptr, 0)
         && Ensure(g.bufs[5], VkDeviceSize(bitWords ? bitWords : 1) * 4u, storage, memory::Where::DeviceLocal, nullptr, 0)
         && Ensure(g.bufs[6], VkDeviceSize(g.commands) * 3u * 20u, storage | VK_BUFFER_USAGE_INDIRECT_BUFFER_BIT,
                   memory::Where::DeviceLocal, nullptr, 0)
         && Ensure(g.bufs[7], VkDeviceSize(g.paletteRows ? g.paletteRows : 1u) * 16u, storage, memory::Where::DeviceLocal, nullptr, 0)
         && Ensure(g.bufs[10], VkDeviceSize(g.boneRows ? g.boneRows : 1u) * 16u, storage, memory::Where::DeviceLocal, nullptr, 0)
         && Ensure(g.bufs[8], VkDeviceSize(g.entries) * 3u * 4u, storage, memory::Where::DeviceLocal, nullptr, 0)
         && StageCopy(cmd, frame, frameBytes, g.bufs[0].b.handle, 0)
         && StageCopy(cmd, bits, VkDeviceSize(bitWords) * 4u, g.bufs[5].b.handle, 0)
         && Sets();
    if (!ok) return false;

    Barrier(cmd, VK_PIPELINE_STAGE_TRANSFER_BIT, VK_ACCESS_TRANSFER_WRITE_BIT,
            VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT | VK_PIPELINE_STAGE_VERTEX_INPUT_BIT,
            VK_ACCESS_SHADER_READ_BIT | VK_ACCESS_VERTEX_ATTRIBUTE_READ_BIT | VK_ACCESS_INDEX_READ_BIT);
    d.CmdBindDescriptorSets(cmd, VK_PIPELINE_BIND_POINT_COMPUTE, g.pipeLayout, 0, 1, &g.set, 0, nullptr);
    if (g.animObjects)
    {
        d.CmdBindPipeline(cmd, VK_PIPELINE_BIND_POINT_COMPUTE, g.animPipeline);
        d.CmdDispatch(cmd, (g.animObjects + 63u) / 64u, 1, 1);
        Barrier(cmd, VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT, VK_ACCESS_SHADER_WRITE_BIT, VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT,
                VK_ACCESS_SHADER_READ_BIT);
    }
    d.CmdBindPipeline(cmd, VK_PIPELINE_BIND_POINT_COMPUTE, g.pipeline);
    d.CmdDispatch(cmd, g.commands, 3, 1);
    Barrier(cmd, VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT, VK_ACCESS_SHADER_WRITE_BIT,
            VK_PIPELINE_STAGE_DRAW_INDIRECT_BIT | VK_PIPELINE_STAGE_VERTEX_SHADER_BIT | VK_PIPELINE_STAGE_TRANSFER_BIT,
            VK_ACCESS_INDIRECT_COMMAND_READ_BIT | VK_ACCESS_SHADER_READ_BIT | VK_ACCESS_TRANSFER_READ_BIT);
    ++g.dispatches;

    if (readback && !g.readbackPending)
    {
        const VkDeviceSize n = VkDeviceSize(g.entries) * 3u * 4u;
        if (Ensure(g.readback, n, 0, memory::Where::HostVisible, nullptr, 0) && g.readback.b.block.mapped)
        {
            VkBufferCopy c = {};
            c.size = n;
            d.CmdCopyBuffer(cmd, g.bufs[8].b.handle, g.readback.b.handle, 1, &c);
            Barrier(cmd, VK_PIPELINE_STAGE_TRANSFER_BIT, VK_ACCESS_TRANSFER_WRITE_BIT, VK_PIPELINE_STAGE_HOST_BIT,
                    VK_ACCESS_HOST_READ_BIT);
            g.readbackPending = true;
            g.readbackSerial  = present::Serial();
            g.readbackTag     = tag;
            g.readbackWords   = g.entries * 3u;
        }
    }
    g.frameSerial = present::Serial();
    return true;
}

bool HdGpuFixedDevTakeReadback(uint32_t* out, uint32_t words, uint64_t& tag)
{
    if (!g.readbackPending || present::Completed() < g.readbackSerial) return false;
    g.readbackPending = false;
    if (words != g.readbackWords || !g.readback.b.block.mapped) return false;
    std::memcpy(out, g.readback.b.block.mapped, size_t(words) * 4u);
    tag = g.readbackTag;
    return true;
}

bool HdGpuFixedDevArm(uint32_t band, uint32_t first, uint32_t count, uint32_t rows)
{
    if (!g.ok || g.frameSerial == 0 || g.frameSerial != present::Serial() || band > 2 || !count
        || first + count > g.commands)
        return false;
    t_armed.on          = true;
    t_armed.args        = g.bufs[6].b.handle;
    t_armed.argsOffset  = (band * g.commands + first) * 20u;
    t_armed.drawCount   = count;
    t_armed.palette     = g.paletteSet;
    t_armed.vertices    = g.vertices.b.handle;
    t_armed.indices     = g.indices.b.handle;
    t_armed.vertexBytes = static_cast<uint32_t>(g.vertices.cap);
    t_armed.indexBytes  = static_cast<uint32_t>(g.indices.cap);
    t_armed.rows        = rows;
    t_armed.scene       = nullptr;
    t_armed.terrain     = nullptr;
    t_armed.multi       = false;
    return true;
}

void HdGpuFixedDevDisarm() { t_armed.on = false; }

void HdGpuFixedDevStats(uint64_t& uploads, uint64_t& uploadBytes, uint64_t& dispatches, uint64_t& growths)
{
    uploads     = g.uploads;
    uploadBytes = g.uploadBytes;
    dispatches  = g.dispatches;
    growths     = g.growths;
}
