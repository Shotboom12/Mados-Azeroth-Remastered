// HD: proxy textures (Proxy.hpp).
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

#include "draw/Proxy.hpp"

#include "native/Present.hpp"

namespace
{
    struct Slot
    {
        const void*                 tex    = nullptr;
        uint64_t                    serial = 0;
        wxlvk::vk::texture::Image   image;
    };
    Slot     g_slots[wxlvk::draw::proxy::kSlots];
    uint32_t g_used = 0;                        ///< slots with a texture: Resolve's early out
    const wxlvk::vk::texture::Image g_none;     ///< no handle: the draw is skipped
}

namespace wxlvk::draw::proxy
{
    void Set(uint32_t slot, const void* tex, const View& view, uint64_t serial)
    {
        if (slot >= kSlots) return;
        Slot& s = g_slots[slot];
        s.tex    = tex;
        s.serial = serial;
        s.image  = vk::texture::Image();
        s.image.handle = view.image;
        s.image.view   = view.view;
        s.image.id     = 0;
        s.image.format = view.format;
        s.image.extent = view.extent;
        s.image.levels = 1;
        s.image.layers = 1;
        s.image.cube   = false;
        s.image.layout = view.layout;
        s.image.wanted = view.layout;
        g_used = 0;
        for (const Slot& each : g_slots)
            if (each.tex) ++g_used;
    }

    void ClearAll()
    {
        for (Slot& s : g_slots) s = Slot();
        g_used = 0;
    }

    const vk::texture::Image* Resolve(const void* tex)
    {
        if (!g_used || !tex) return nullptr;
        for (const Slot& s : g_slots)
        {
            if (s.tex != tex) continue;
            return s.serial == native::present::Serial() ? &s.image : &g_none;
        }
        return nullptr;
    }
}
