// HD: x64 replacement for wxl-core's wxl/offsets/engine/Shader.hpp (WarcraftXL, GPL-3.0).
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
// HD: CGxShader's code array as x64 offsetof(), and the effect fog constants' addresses.

#pragma once

#include <cstddef>

#include "Engine/Source/Gx/CGxDevice/CGxShader.h"

namespace wxl::offsets::engine::shader
{
    constexpr size_t kCgxShaderByteLen = offsetof(CGxShader, m_code.m_count);
    constexpr size_t kCgxShaderBytePtr = offsetof(CGxShader, m_code.m_data);

    // CShaderEffect::s_fogColorAlphaRef and s_fogParams. They were 0x10 apart in the 32-bit image; two
    // statics have no fixed distance here, so each has its own address (native/api/Scene.cpp).
    inline const uintptr_t kEffectFogColorAlphaRef = wxlcompat::EffectFogColorAlphaRefAddress();
    inline const uintptr_t kEffectFogParams        = wxlcompat::EffectFogParamsAddress();
}
