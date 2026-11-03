// HD: x64 replacement for wxl-core's wxl/offsets/engine/Camera.hpp (WarcraftXL, GPL-3.0).
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
// HD: the camera statics wxl-vulkan-api reads, as addresses of the x64 objects.

#pragma once

#include <cstdint>

#include "wxlcompat/Engine.hpp"

namespace wxl::offsets::engine::camera
{
    inline const uintptr_t kView      = wxlcompat::CameraViewAddress();   // C44Matrix, world -> view
    inline const uintptr_t kCameraPos = wxlcompat::CameraPosAddress();    // C3Vector
}
