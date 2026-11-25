// Claude voie B, B3 (23 nov 2026): one table of sampled images, set 3 of the terrain's groups (the .gput modules index it).
#include "vulkan/pipelines/Internal.hpp"

#include "native/Present.hpp"
#include "native/record/RecordThread.hpp"
#include "vulkan/DeviceCaps.hpp"

#include <vector>

namespace
{
    namespace context = wxlvk::vk::context;
    namespace loader  = wxlvk::vk::loader;
    namespace present = wxlvk::native::present;
    using namespace wxlvk::vk::pipelines::detail;

    constexpr uint32_t kPlaces = 8192;   // Caps.cpp asked the device for them
    constexpr uint64_t kIdle   = 600;    // frames an image keeps its place unused, when the table is full

    struct Entry   // of an image's id
    {
        uint32_t key = 0, place = 0;     // place + 1; 0: none
        uint64_t last = 0;
    };
    struct Freed
    {
        uint32_t place;
        uint64_t last;
    };

    struct T
    {
        bool tried = false, ok = false, full = false;
        VkDescriptorSetLayout layout = VK_NULL_HANDLE;
        VkDescriptorPool      pool = VK_NULL_HANDLE;
        VkDescriptorSet       set = VK_NULL_HANDLE;
        uint32_t              next = 0;
        std::vector<Entry>    byId;
        std::vector<Freed>    freed;
    } t;

    int32_t TakePlace()
    {
        if (t.next < kPlaces) return static_cast<int32_t>(t.next++);
        const uint64_t done = present::Completed();
        if (t.freed.empty())
        {
            const uint64_t now = present::Serial();
            for (Entry& e : t.byId)
                if (e.place && e.last + kIdle < now)
                {
                    t.freed.push_back({ e.place - 1u, e.last });
                    e.place = 0;
                }
        }
        for (size_t i = 0; i < t.freed.size(); ++i)
            if (t.freed[i].last <= done)
            {
                const uint32_t place = t.freed[i].place;
                t.freed[i] = t.freed.back();
                t.freed.pop_back();
                return static_cast<int32_t>(place);
            }
        if (!t.full)
        {
            t.full = true;
            wxl::ScriptMgr::Log(WXL_LOG_WARN, "vulkan: voie B3: the texture table holds %u images, all in use (logged once)", kPlaces);
        }
        return -1;
    }
}

namespace wxlvk::vk::pipelines::detail
{
    VkPipelineLayout TableLayoutFor(uint32_t index)
    {
        LayoutEntry& e = s.layouts[index];
        if (e.table != VK_NULL_HANDLE || !t.ok || s.bonesLayout == VK_NULL_HANDLE) return e.table;
        VkPushConstantRange push = {};
        push.stageFlags = VK_SHADER_STAGE_VERTEX_BIT;
        push.offset     = 0;
        push.size       = kPushBytes;
        const VkDescriptorSetLayout sets[4] = { e.set0, s.regsLayout, s.bonesLayout, t.layout };
        VkPipelineLayoutCreateInfo info = {};
        info.sType                  = VK_STRUCTURE_TYPE_PIPELINE_LAYOUT_CREATE_INFO;
        info.setLayoutCount         = 4;
        info.pSetLayouts            = sets;
        info.pushConstantRangeCount = 1;
        info.pPushConstantRanges    = &push;
        const VkResult r = s.dapi->CreatePipelineLayout(s.device, &info, nullptr, &e.table);
        if (r != VK_SUCCESS)
        {
            e.table = VK_NULL_HANDLE;
            Fail("vkCreatePipelineLayout (texture table)", r);
        }
        return e.table;
    }

    void DropTable(const loader::Device& d, VkDevice device)
    {
        if (t.pool != VK_NULL_HANDLE) d.DestroyDescriptorPool(device, t.pool, nullptr);
        if (t.layout != VK_NULL_HANDLE) d.DestroyDescriptorSetLayout(device, t.layout, nullptr);
        t = T();
    }
}

namespace wxlvk::vk::pipelines
{
    bool TableReady()
    {
        if (t.tried) return t.ok;
        if (!s.dapi || s.bonesLayout == VK_NULL_HANDLE || !(context::Caps().enabled & wxlvk::vk::kCapTextureTable)) return false;
        t.tried = true;
        const loader::Device& d = *s.dapi;
        VkDescriptorSetLayoutBinding binding = {};
        binding.binding         = 0;
        binding.descriptorType  = VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;
        binding.descriptorCount = kPlaces;
        binding.stageFlags      = VK_SHADER_STAGE_FRAGMENT_BIT;
        const VkDescriptorBindingFlags flags = VK_DESCRIPTOR_BINDING_UPDATE_AFTER_BIND_BIT | VK_DESCRIPTOR_BINDING_PARTIALLY_BOUND_BIT
                                               | VK_DESCRIPTOR_BINDING_UPDATE_UNUSED_WHILE_PENDING_BIT;
        VkDescriptorSetLayoutBindingFlagsCreateInfo bindingFlags = {};
        bindingFlags.sType         = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_BINDING_FLAGS_CREATE_INFO;
        bindingFlags.bindingCount  = 1;
        bindingFlags.pBindingFlags = &flags;
        VkDescriptorSetLayoutCreateInfo layout = {};
        layout.sType        = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_LAYOUT_CREATE_INFO;
        layout.pNext        = &bindingFlags;
        layout.flags        = VK_DESCRIPTOR_SET_LAYOUT_CREATE_UPDATE_AFTER_BIND_POOL_BIT;
        layout.bindingCount = 1;
        layout.pBindings    = &binding;
        VkResult r = d.CreateDescriptorSetLayout(s.device, &layout, nullptr, &t.layout);
        if (r == VK_SUCCESS)
        {
            VkDescriptorPoolSize size = { VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER, kPlaces };
            VkDescriptorPoolCreateInfo pool = {};
            pool.sType         = VK_STRUCTURE_TYPE_DESCRIPTOR_POOL_CREATE_INFO;
            pool.flags         = VK_DESCRIPTOR_POOL_CREATE_UPDATE_AFTER_BIND_BIT;
            pool.maxSets       = 1;
            pool.poolSizeCount = 1;
            pool.pPoolSizes    = &size;
            r = d.CreateDescriptorPool(s.device, &pool, nullptr, &t.pool);
        }
        if (r == VK_SUCCESS)
        {
            VkDescriptorSetAllocateInfo alloc = {};
            alloc.sType              = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
            alloc.descriptorPool     = t.pool;
            alloc.descriptorSetCount = 1;
            alloc.pSetLayouts        = &t.layout;
            r = d.AllocateDescriptorSets(s.device, &alloc, &t.set);
        }
        if (r != VK_SUCCESS)
        {
            Fail("the texture table (voie B3)", r);
            return false;
        }
        t.ok = true;
        return true;
    }

    VkDescriptorSet TableSet() { return t.set; }

    int32_t TablePlace(const wxlvk::vk::texture::Image& image, uint32_t texFlags)
    {
        if (!t.ok || image.id == 0 || image.handle == VK_NULL_HANDLE || image.view == VK_NULL_HANDLE || image.cube
            || image.layout != VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL)
            return -1;
        // The sampler of RecordInputs.cpp Textures(), for a world draw.
        uint32_t key = texFlags & kSamplerKeyMask;
        if ((key & 0x7u) != 5u) key &= ~0x3E00u;
        if (s.worldFilter && image.levels > 1 && (key & 0x7u) >= 3u) key |= kSamplerWorldBit;
        if (image.id >= t.byId.size()) t.byId.resize(image.id + 1024u);
        Entry& e = t.byId[image.id];
        if (e.place && e.key == key)
        {
            e.last = present::Serial();
            return static_cast<int32_t>(e.place - 1u);
        }
        VkSampler sampler = s.samplerByKey[SamplerSlot(key)];
        if (sampler == VK_NULL_HANDLE)
        {
            wxlvk::recordthread::Drain();   // the record thread makes samplers too
            sampler = s.samplerByKey[SamplerSlot(key)];
            if (sampler == VK_NULL_HANDLE) sampler = Sampler(key);
            if (sampler == VK_NULL_HANDLE) return -1;
        }
        const int32_t place = TakePlace();
        if (place < 0) return -1;
        if (e.place) t.freed.push_back({ e.place - 1u, e.last });
        VkDescriptorImageInfo info = { sampler, image.view, VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL };
        VkWriteDescriptorSet write = {};
        write.sType           = VK_STRUCTURE_TYPE_WRITE_DESCRIPTOR_SET;
        write.dstSet          = t.set;
        write.dstArrayElement = static_cast<uint32_t>(place);
        write.descriptorCount = 1;
        write.descriptorType  = VK_DESCRIPTOR_TYPE_COMBINED_IMAGE_SAMPLER;
        write.pImageInfo      = &info;
        s.dapi->UpdateDescriptorSets(s.device, 1, &write, 0, nullptr);
        e.key   = key;
        e.place = static_cast<uint32_t>(place) + 1u;
        e.last  = present::Serial();
        return place;
    }
}
