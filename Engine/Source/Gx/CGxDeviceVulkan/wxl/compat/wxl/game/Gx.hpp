// HD: x64 replacement for wxl-core's wxl/game/Gx.hpp (WarcraftXL, GPL-3.0).
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
// HD: only RawGraphicsDevice(), the one helper of wxl-core's game/Gx.hpp the port calls.

#pragma once

#include "wxl/game/Binding.hpp"
#include "wxl/offsets/engine/Gx.hpp"

namespace wxl::game::gx
{
    /// The engine's graphics-device object (g_theGxDevicePtr), or null before it exists.
    inline void* RawGraphicsDevice() { return Read<void*>(wxl::offsets::engine::gx::kGxDevicePtr); }
}
