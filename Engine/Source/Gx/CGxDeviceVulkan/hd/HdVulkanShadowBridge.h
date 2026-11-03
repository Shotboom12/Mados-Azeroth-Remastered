// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once
#include <cstdint>
#include "vulkan/Texture.hpp"
namespace HD::VulkanShadows::Bridge {
// Render-thread only. Image IDs never repeat within a device session. No pointer/offset tricks.
inline bool enabled = false;
inline uint32_t ids[5]{};
inline uint32_t Mask(const wxlvk::vk::texture::Image* const* textures) {
    if (!enabled) return 0;
    uint32_t mask=0;
    for(uint32_t slot=0;slot<16;++slot) if(textures[slot] && textures[slot]->id)
        for(uint32_t i=0;i<5;++i) if(ids[i] && textures[slot]->id==ids[i]) {mask|=1u<<slot;break;}
    return mask;
}
inline uint32_t InteriorMask(const wxlvk::vk::texture::Image* const* textures) {
 if(!enabled||!ids[4])return 0;uint32_t mask=0;for(uint32_t slot=0;slot<16;++slot)if(textures[slot]&&textures[slot]->id==ids[4])mask|=1u<<slot;return mask;
}
}
