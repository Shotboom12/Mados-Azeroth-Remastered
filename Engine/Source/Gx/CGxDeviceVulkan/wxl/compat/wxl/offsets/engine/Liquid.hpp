// HD: x64 replacement for wxl-core's wxl/offsets/engine/Liquid.hpp (WarcraftXL, GPL-3.0).
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
// HD: the late liquid seam. The 32-bit build hooked CWorldScene::RenderLiquidPass by address; here
// World.cpp calls the seam directly (Engine/Source/Gx/GxSeam.h), so there is no address: the hook
// attach is taken by its name (compat/src/Seams.cpp) and the 0 below is only what the log prints.

#pragma once

#include <cstdint>

namespace wxl::offsets::engine::liquid
{
    constexpr uintptr_t kWorldLiquidPass = 0;
    using WorldLiquidPassFn = void(__cdecl*)();
}
