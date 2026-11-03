// HD: x64 replacement for wxl-core's wxl/offsets/engine/Gx.hpp (WarcraftXL, GPL-3.0).
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
// HD: only the names wxl-vulkan-api uses, as x64 offsetof(). The engine statics the original listed
// as addresses (the shader constant caches, the device pointer, the texture fill callbacks) are
// reached through wxlcompat:: (compat/Engine.hpp).

#pragma once

#include <cstddef>
#include <cstdint>

#include "wxlcompat/Engine.hpp"

#include "Engine/Source/Gx/CGxBuf.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Tempest/C44Matrix.h"

namespace wxl::offsets::engine::gx
{
    // CRect {minY, minX, maxY, maxX}: the height is maxY, the width maxX.
    constexpr size_t kCurWindowHeight = offsetof(CGxDevice, m_curWindowRect.maxY);
    constexpr size_t kCurWindowWidth  = offsetof(CGxDevice, m_curWindowRect.maxX);
    constexpr size_t kDefWindowHeight = offsetof(CGxDevice, m_defWindowRect.maxY);
    constexpr size_t kDefWindowWidth  = offsetof(CGxDevice, m_defWindowRect.maxX);
    constexpr size_t kFormatWidth     = offsetof(CGxDevice, m_format.m_size.x);
    constexpr size_t kFormatHeight    = offsetof(CGxDevice, m_format.m_size.y);

    constexpr size_t kMasterEnableField = offsetof(CGxDevice, m_appMasterEnables);
    constexpr size_t kViewportDirty     = offsetof(CGxDevice, m_viewportDirty);
    constexpr size_t kDeviceViewStride  = sizeof(C44Matrix);

    constexpr size_t kGxDeviceVertexStream = offsetof(CGxDevice, m_primVertexFormatBuf);
    constexpr size_t kGxBufStreamOffset    = offsetof(CGxBuf, m_index);
    constexpr size_t kGxBufStreamStride    = offsetof(CGxBuf, m_itemSize);

    constexpr unsigned kVsConstRegisters = 256;

    // Engine statics, as addresses of the x64 objects (wxlcompat, compat/Engine.cpp).
    inline const uintptr_t kGxDevicePtr     = wxlcompat::GxDevicePtrAddress();
    inline const uintptr_t kPsConstCache    = wxlcompat::PsConstCacheAddress();     // float[256*4]
    inline const uintptr_t kPsDirtyRegEnd   = wxlcompat::PsDirtyRegEndAddress();    // uint32
    inline const uintptr_t kPsDirtyRegStart = wxlcompat::PsDirtyRegStartAddress();  // uint32
    inline const uintptr_t kVsConstCache    = wxlcompat::VsConstCacheAddress();
    inline const uintptr_t kVsDirtyRegEnd   = wxlcompat::VsDirtyRegEndAddress();
    inline const uintptr_t kVsDirtyRegStart = wxlcompat::VsDirtyRegStartAddress();

    // The texture fill callbacks whose userArg is a CTexture, and where its file name is.
    inline const uintptr_t kTexFillBlp         = wxlcompat::TexFillBlpAddress();
    inline const uintptr_t kTexFillTga         = wxlcompat::TexFillTgaAddress();
    inline const uintptr_t kTexFillBlob        = wxlcompat::TexFillBlobAddress();
    inline const size_t    kTexHandleNameField = wxlcompat::TextureFileNameOffset();
}
