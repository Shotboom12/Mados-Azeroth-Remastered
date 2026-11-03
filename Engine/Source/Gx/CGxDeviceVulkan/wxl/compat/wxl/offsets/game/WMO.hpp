// HD: x64 replacement for wxl-core's wxl/offsets/game/WMO.hpp (WarcraftXL, GPL-3.0).
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
//
// HD: the map object fields wxl-vulkan-api reads, as x64 offsetof().

#pragma once

#include <cstddef>
#include <cstdint>

#include "WoW/Source/WorldClient/MapObj.h"
#include "WoW/Source/WorldClient/MapObjGroup.h"

namespace wxl::offsets::game::wmo
{
    constexpr size_t kOffNameInline = offsetof(CMapObj, m_wmoName);
    constexpr size_t kOffGroupCount = offsetof(CMapObj, m_mapObjGroupCount);
    constexpr size_t kOffGroupArray = offsetof(CMapObj, m_mapObjGroupArray);   // + sizeof(void*) * index

    constexpr size_t kOffGroupFlags = offsetof(CMapObjGroup, m_flags);
    constexpr size_t kOffGroupBbox  = offsetof(CMapObjGroup, m_bbox);
    constexpr size_t kOffGroupRoot  = offsetof(CMapObjGroup, m_parent);

    constexpr uint32_t kGroupFlagExteriorLit = 0x40;
    constexpr uint32_t kGroupFlagIndoor      = 0x2000;
}
