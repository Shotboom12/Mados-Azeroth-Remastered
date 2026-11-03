// HD: adapted from wxl-vulkan-api (GPL-3.0); compressed texture initialization by transfer.
// Copyright (C) 2026 WarcraftXL contributors
// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once

#include "vulkan/Texture.hpp"
#include <cstring>

namespace wxlvk::vk::texture::detail
{
    // HD: one tightly packed copy per mip, including every cube face. No heap allocation.
    struct BcClearPlan
    {
        VkBufferImageCopy copies[32] = {};
        uint32_t count = 0;
        uint32_t blockBytes = 0;
        VkDeviceSize bytes = 0;
    };

    inline bool PlanBcClear(const Image& img, BcClearPlan& out, VkDeviceSize offset = 0)
    {
        out = {};
        const uint32_t blockBytes = img.format == VK_FORMAT_BC1_RGBA_UNORM_BLOCK ? 8u
            : (img.format == VK_FORMAT_BC2_UNORM_BLOCK || img.format == VK_FORMAT_BC3_UNORM_BLOCK) ? 16u : 0u;
        if (!blockBytes || offset % blockBytes || !img.extent.width || !img.extent.height
            || !img.layers || !img.levels || img.levels > 32) return false;
        out.blockBytes = blockBytes;
        for (uint32_t level = 0; level < img.levels; ++level)
        {
            const uint32_t w = (img.extent.width >> level) ? (img.extent.width >> level) : 1u;
            const uint32_t h = (img.extent.height >> level) ? (img.extent.height >> level) : 1u;
            const uint64_t blocks = ((uint64_t(w) + 3) / 4) * ((uint64_t(h) + 3) / 4);
            if (blocks > SIZE_MAX / blockBytes / img.layers) return false; // HD: check before multiplying.
            const uint64_t bytes = blocks * blockBytes * img.layers;
            // HD: this client is Win32; refuse any fill that cannot be addressed on the CPU.
            if (bytes > SIZE_MAX || out.bytes > SIZE_MAX - bytes || offset > UINT64_MAX - out.bytes - bytes)
                return false;
            VkBufferImageCopy& c = out.copies[level];
            c.bufferOffset = offset + out.bytes;
            c.imageSubresource = { VK_IMAGE_ASPECT_COLOR_BIT, level, 0, img.layers };
            c.imageExtent = { w, h, 1 };
            out.bytes += bytes;
        }
        out.count = img.levels;
        return true;
    }

    inline uint32_t BcUnorm(float value, uint32_t maximum)
    {
        // HD: comparisons also clamp NaN to zero before a float-to-integer conversion.
        if (!(value > 0.0f)) return 0;
        if (value >= 1.0f) return maximum;
        return static_cast<uint32_t>(value * maximum + 0.5f);
    }

    inline void FillBcClear(const BcClearPlan& plan, VkFormat format, const float* rgba, void* mapped)
    {
        const float grey[4] = { 0.5f, 0.5f, 0.5f, 1.0f };
        if (!rgba) rgba = grey;
        uint8_t block[16] = {};
        const uint16_t rgb = static_cast<uint16_t>((BcUnorm(rgba[0],31) << 11)
            | (BcUnorm(rgba[1],63) << 5) | BcUnorm(rgba[2],31));
        uint8_t* colour = block + (plan.blockBytes == 8 ? 0 : 8);
        colour[0] = colour[2] = static_cast<uint8_t>(rgb);
        colour[1] = colour[3] = static_cast<uint8_t>(rgb >> 8);
        // HD: index zero selects the equal RGB565 endpoint; BC1 index three represents transparency.
        if (format == VK_FORMAT_BC1_RGBA_UNORM_BLOCK && !(rgba[3] >= 0.5f))
            std::memset(colour + 4, 0xff, 4);
        if (format == VK_FORMAT_BC2_UNORM_BLOCK)
        {
            const uint8_t a = static_cast<uint8_t>(BcUnorm(rgba[3],15));
            std::memset(block, a | (a << 4), 8);
        }
        else if (format == VK_FORMAT_BC3_UNORM_BLOCK)
            block[0] = block[1] = static_cast<uint8_t>(BcUnorm(rgba[3],255));
        auto* dst = static_cast<uint8_t*>(mapped);
        for (size_t at = 0; at < static_cast<size_t>(plan.bytes); at += plan.blockBytes)
            std::memcpy(dst + at, block, plan.blockBytes);
    }
}
