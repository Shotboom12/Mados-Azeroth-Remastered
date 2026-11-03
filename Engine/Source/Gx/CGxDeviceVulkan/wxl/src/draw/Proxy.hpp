// HD: proxy textures. An engine texture that stands for an image the device made this frame.
// Copyright (C) 2026 WarcraftXL
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

#pragma once

#include "vulkan/Texture.hpp"
#include "vulkan/Vk.hpp"

#include <cstdint>

// HD (Cata water, CGxDeviceVulkan/hd/CataWaterService.cpp): the engine binds a small texture of its
// own (a CGxTex) on a stage, and the draw samples an image a stage of this frame made instead: the
// scene copied before the water, its depth, the reflection. ReadMaterial (Reader.cpp) asks Resolve
// for every bound texture while any proxy is set.
//
// A proxy is good for the frame it was set in only. In another frame it resolves to an image without
// a handle, so the draw is skipped (RecordInputs: "resolved to no image") rather than sampling a
// view that may be gone. The image is sampled in the layout it is in (GENERAL or
// SHADER_READ_ONLY_OPTIMAL), with id 0, so no descriptor set is cached across frames for it.
//
// Render thread only, like the draw path.
namespace wxlvk::draw::proxy
{
    constexpr uint32_t kSlots = 7;   // HD: + the blurred scene (Cata water s3), + the two ripple maps (tranche 2)

    struct View
    {
        VkImage       image  = VK_NULL_HANDLE;
        VkImageView   view   = VK_NULL_HANDLE;
        VkImageLayout layout = VK_IMAGE_LAYOUT_UNDEFINED;   ///< GENERAL or SHADER_READ_ONLY_OPTIMAL
        VkFormat      format = VK_FORMAT_UNDEFINED;
        VkExtent2D    extent = { 0, 0 };
    };

    /// `tex` (a CGxTex*) samples `view` in the frame `serial`. A null tex frees the slot.
    void Set(uint32_t slot, const void* tex, const View& view, uint64_t serial);

    /// Every slot freed (the owner's shutdown).
    void ClearAll();

    /// The image for an engine texture: nullptr when it is no proxy (the caller keeps its own), the
    /// slot's image in its frame, else an image without a handle.
    const vk::texture::Image* Resolve(const void* tex);
}
