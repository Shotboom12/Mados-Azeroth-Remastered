// HD: x64 replacement for wxl-core's wxl/offsets/engine/GxDevice.hpp (WarcraftXL, GPL-3.0).
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
// HD: the original header lists the 32-bit client's byte offsets and code addresses. Here every
// field offset is offsetof() on the recompiled x64 types, so the compiler that builds the client
// also lays out these numbers, and only the names wxl-vulkan-api uses are kept. Engine functions
// are not addresses any more: the call sites call wxlcompat:: (compat/Engine.hpp) directly.

#pragma once

#include <cstddef>
#include <cstdint>

#include "wxlcompat/Engine.hpp"

#include "Engine/Source/Gx/CGxBuf.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDevice/CGxShader.h"
#include "Engine/Source/Gx/CGxDevice/EmergencyMem.h"
#include "Engine/Source/Gx/CGxDeviceVulkan/CGxDeviceVulkan.h"
#include "Engine/Source/Gx/CGxFormat.h"
#include "Engine/Source/Gx/CGxLight.h"
#include "Engine/Source/Gx/CGxMatrixStack.h"
#include "Engine/Source/Gx/CGxPool.h"
#include "Engine/Source/Gx/CGxTex.h"
#include "Engine/Source/Gx/Types.h"

#include "wxl/offsets/engine/Gx.hpp"

namespace wxl::offsets::engine::gxdevice
{
    namespace gx = wxl::offsets::engine::gx;

    constexpr unsigned kVTableSlots = 84;

    // --- device fields --------------------------------------------------------------------------------
    constexpr size_t kDefWindow = offsetof(CGxDevice, m_defWindowRect);
    constexpr size_t kCurWindow = offsetof(CGxDevice, m_curWindowRect);
    constexpr size_t kApi       = offsetof(CGxDevice, m_api);
    constexpr size_t kFormat    = offsetof(CGxDevice, m_format);

    constexpr size_t kBaseMipLevel     = offsetof(CGxDevice, m_baseMipLevel);
    constexpr size_t kGammaRamp        = offsetof(CGxDevice, m_gammaRamp);
    constexpr size_t kGammaRampDesktop = offsetof(CGxDevice, m_systemGammaRamp);
    constexpr size_t kGammaRampBytes   = sizeof(CGxGammaRamp);

    constexpr size_t kWndProc       = offsetof(CGxDevice, m_windowProc);
    constexpr size_t kContext       = offsetof(CGxDevice, m_context);
    constexpr size_t kFramePoisoned = offsetof(CGxDevice, m_intF5C);
    constexpr size_t kSizeTracking  = offsetof(CGxDevice, m_windowVisible);
    constexpr size_t kHasFocus      = offsetof(CGxDevice, m_windowFocus);
    constexpr size_t kFrameCounter  = offsetof(CGxDevice, m_frameCount);

    // CBoundingBox {x.l, x.h, y.l, y.h, z.l, z.h}, all floats.
    constexpr size_t kViewportMinX = offsetof(CGxDevice, m_viewport) + 0x00;
    constexpr size_t kViewportMaxX = offsetof(CGxDevice, m_viewport) + 0x04;
    constexpr size_t kViewportMinY = offsetof(CGxDevice, m_viewport) + 0x08;
    constexpr size_t kViewportMaxY = offsetof(CGxDevice, m_viewport) + 0x0C;
    constexpr size_t kViewportMinZ = offsetof(CGxDevice, m_viewport) + 0x10;
    constexpr size_t kViewportMaxZ = offsetof(CGxDevice, m_viewport) + 0x14;

    constexpr size_t kApiProjection = offsetof(CGxDevice, m_projNative);

    // The 19 matrix stacks: m_xforms[11] then m_texGen[8], back to back.
    constexpr size_t kMatrixStacks      = offsetof(CGxDevice, m_xforms);
    constexpr size_t kMatrixStackStride = sizeof(CGxMatrixStack);
    constexpr size_t kMatrixStackTop    = offsetof(CGxMatrixStack, m_level);
    constexpr size_t kMatrixStackDirty  = offsetof(CGxMatrixStack, m_dirty);
    constexpr size_t kMatrixStackBase   = offsetof(CGxMatrixStack, m_mtx);
    constexpr size_t kMatrixStackFlags  = offsetof(CGxMatrixStack, m_flags);
    constexpr uint32_t kMatrixStackFlagIdentity = CGxMatrixStack::F_Identity;
    constexpr unsigned kMatrixStackDepth = 4;
    constexpr unsigned kXformTex0        = 0;
    constexpr unsigned kXformWorld       = 8;
    constexpr unsigned kXformProjection  = 9;
    constexpr unsigned kXformView        = 10;
    constexpr unsigned kXformTexGen0     = 11;
    static_assert(offsetof(CGxDevice, m_texGen) == kMatrixStacks + kXformTexGen0 * kMatrixStackStride,
                  "the texgen stacks follow the eleven xform stacks");

    constexpr size_t kScissorDirty = offsetof(CGxDevice, m_scissorRectDirty);
    constexpr size_t kScissorRect  = offsetof(CGxDevice, m_scissorRect);

    // Lights: four CGxApiLight.
    constexpr size_t   kLights           = offsetof(CGxDevice, m_lights);
    constexpr size_t   kLightStride      = sizeof(CGxApiLight);
    constexpr unsigned kLightCount       = 4;
    constexpr size_t   kLightPosition    = offsetof(CGxApiLight, m_dir);
    constexpr size_t   kLightAmbient     = offsetof(CGxApiLight, m_ambColor);
    constexpr size_t   kLightDiffuse     = offsetof(CGxApiLight, m_dirColor);
    constexpr size_t   kLightSpecular    = offsetof(CGxApiLight, m_specColor);
    constexpr size_t   kLightAttenuation = offsetof(CGxApiLight, m_constantAttenuation);
    constexpr size_t   kLightEnabled     = offsetof(CGxApiLight, m_enable);

    // Master enables (bits of gx::kMasterEnableField).
    constexpr unsigned kMasterLighting   = 0;
    constexpr unsigned kMasterFog        = 1;
    constexpr unsigned kMasterDepthTest  = 2;
    constexpr unsigned kMasterDepthWrite = 3;
    constexpr unsigned kMasterColorWrite = 4;
    constexpr unsigned kMasterCulling    = 5;

    // Vertex attributes: 14 CGxVertexAttrib slots and the 14 bufs they read.
    constexpr size_t   kAttribSlots       = offsetof(CGxDevice, m_primVertexFormatAttrib);
    constexpr size_t   kAttribSlotStride  = sizeof(CGxVertexAttrib);
    constexpr size_t   kAttribSlotAttrib  = offsetof(CGxVertexAttrib, m_attrib);
    constexpr size_t   kAttribSlotFormat  = offsetof(CGxVertexAttrib, m_type);
    constexpr size_t   kAttribSlotOffset  = offsetof(CGxVertexAttrib, m_offset);
    constexpr size_t   kAttribSlotStrideB = offsetof(CGxVertexAttrib, m_bufSize);
    constexpr size_t   kAttribBufs        = gx::kGxDeviceVertexStream;   // + attribute * sizeof(void*)
    constexpr size_t   kAttribEnabled     = offsetof(CGxDevice, m_primVertexMask);
    constexpr size_t   kAttribChanged     = offsetof(CGxDevice, m_primVertexDirty);
    constexpr size_t   kVertexFormat      = offsetof(CGxDevice, m_primVertexFormat);
    constexpr uint32_t kVertexFormatCustom = 14;
    constexpr unsigned kAttribCount       = 14;
    constexpr unsigned kAttribPosition    = 0;
    constexpr unsigned kAttribBitNormal   = 3;
    constexpr unsigned kAttribBitColor0   = 4;
    constexpr unsigned kAttribTexCoord0   = 6;
    constexpr uint32_t kAttribFmtFloat1   = 6;

    constexpr size_t   kIndexBuf        = offsetof(CGxDevice, m_primIndexBuf);
    constexpr size_t   kIndexBufChanged = offsetof(CGxDevice, m_primIndexDirty);
    constexpr uint32_t kIndexSize       = 2;

    constexpr size_t kEmergencyLockBlock  = offsetof(CGxDevice, m_emergencyMem);
    constexpr size_t kEmergencyLockStride = sizeof(EmergencyMem);

    // Render states: TSFixedArray<CGxAppRenderState>; kRsTable is its data pointer.
    constexpr size_t   kRsTable          = offsetof(CGxDevice, m_appRenderStates.m_data);
    constexpr size_t   kRsStride         = sizeof(CGxAppRenderState);
    constexpr size_t   kRsValue          = offsetof(CGxAppRenderState, m_value);
    constexpr unsigned kRenderStateCount = 86;
    constexpr unsigned kRsPolygonOffset    = GxRs_PolygonOffset;
    constexpr unsigned kRsMatDiffuse       = GxRs_MatDiffuse;
    constexpr unsigned kRsMatEmissive      = GxRs_MatEmissive;
    constexpr unsigned kRsMatSpecular      = GxRs_MatSpecular;
    constexpr unsigned kRsMatSpecularExp   = GxRs_MatSpecularExp;
    constexpr unsigned kRsNormalizeNormals = GxRs_NormalizeNormals;
    constexpr unsigned kRsBlend            = GxRs_BlendingMode;
    constexpr unsigned kRsAlphaRef         = GxRs_AlphaRef;
    constexpr unsigned kRsFogStart         = GxRs_FogStart;
    constexpr unsigned kRsFogEnd           = GxRs_FogEnd;
    constexpr unsigned kRsFogColor         = GxRs_FogColor;
    constexpr unsigned kRsLighting         = GxRs_Lighting;
    constexpr unsigned kRsFog              = GxRs_Fog;
    constexpr unsigned kRsDepthTest        = 13;
    constexpr unsigned kRsDepthFunc        = 14;
    constexpr unsigned kRsDepthWrite       = 15;
    constexpr unsigned kRsColorWrite       = 16;
    constexpr unsigned kRsCulling          = 17;
    constexpr unsigned kRsScissorTest      = 20;
    constexpr unsigned kRsTexture0         = 21;
    constexpr unsigned kRsColorOp0         = 37;
    constexpr unsigned kRsAlphaOp0         = 45;
    constexpr unsigned kRsTexGen0          = 53;
    constexpr unsigned kRsTexTransform0    = 61;
    constexpr unsigned kRsTexCoord0        = 69;
    constexpr unsigned kRsVertexShader     = 77;
    constexpr unsigned kRsPixelShader      = 78;
    constexpr unsigned kRsBlendFactor      = 84;
    constexpr unsigned kRsColorMaterial    = 85;
    constexpr unsigned kCullNone           = 0;

    // Render targets: CGxDevice::TextureTarget[2].
    constexpr size_t   kRenderTargets      = offsetof(CGxDevice, m_textureTarget);
    constexpr size_t   kRenderTargetStride = sizeof(CGxDevice::TextureTarget);
    constexpr size_t   kRenderTargetTex    = offsetof(CGxDevice::TextureTarget, m_texture);
    constexpr size_t   kRenderTargetFace   = offsetof(CGxDevice::TextureTarget, m_plane);
    constexpr uint32_t kBufferColor        = 0;
    constexpr uint32_t kBufferDepth        = 1;

    // m_textures is TSExplicitList<CGxTex>: the head is its terminator's m_next.
    constexpr size_t kTexListHead = offsetof(CGxDevice, m_textures.m_terminator.m_next);

    constexpr size_t kScreenshotPending = offsetof(CGxDevice, m_scrShotClick);

    constexpr size_t kCursorVisible  = offsetof(CGxDevice, m_cursorVisible);
    constexpr size_t kCursorHardware = offsetof(CGxDevice, m_hwCursor);
    constexpr size_t kCursorHotspotX = offsetof(CGxDevice, m_cursorHotspotX);
    constexpr size_t kCursorHotspotY = offsetof(CGxDevice, m_cursorHotspotY);
    constexpr size_t kCursorImage    = offsetof(CGxDevice, m_cursor);

    // What wxl read from CGxDeviceD3d; they are CGxDeviceVulkan's own members here.
    constexpr size_t kWindow            = offsetof(CGxDeviceVulkan, m_hwnd);
    constexpr size_t kWindowClassAtom   = offsetof(CGxDeviceVulkan, m_hwndClass);
    constexpr size_t kOwnsWindow        = offsetof(CGxDeviceVulkan, m_ownhwnd);
    constexpr size_t kD3dCursorDirty    = offsetof(CGxDeviceVulkan, m_hwCursorDirty);
    constexpr size_t kD3dPlaceholderTex = offsetof(CGxDeviceVulkan, m_placeholderTex);
    constexpr uint32_t kPlaceholderTexColor = 0xFF00FF00;

    // --- CGxFormat (no pointers: same layout as x86) --------------------------------------------------
    constexpr size_t kFormatSize     = sizeof(CGxFormat);
    constexpr size_t kFmtWindowed    = offsetof(CGxFormat, m_window);
    constexpr size_t kFmtDepthFormat = offsetof(CGxFormat, m_depthFormat);
    constexpr size_t kFmtWidth       = offsetof(CGxFormat, m_size.x);
    constexpr size_t kFmtHeight      = offsetof(CGxFormat, m_size.y);
    constexpr size_t kFmtSamples     = offsetof(CGxFormat, m_multisampleCount);
    constexpr size_t kFmtVSync       = offsetof(CGxFormat, m_vsync);
    constexpr size_t kWindowed       = kFormat + kFmtWindowed;

    // --- CGxCaps (no pointers: the block is copied whole) ---------------------------------------------
    constexpr size_t kCapsBase             = offsetof(CGxDevice, m_caps);
    constexpr size_t kCapsShaderTarget     = kCapsBase + offsetof(CGxCaps, m_shaderTargets);
    constexpr size_t kCapsMaxTexWidth      = kCapsBase + offsetof(CGxCaps, m_texMaxSize) + 0x0;
    constexpr size_t kCapsMaxTexHeight     = kCapsBase + offsetof(CGxCaps, m_texMaxSize) + 0x4;
    constexpr size_t kCapsMaxCubeSize      = kCapsBase + offsetof(CGxCaps, m_texMaxSize) + 0x8;
    constexpr size_t kCapsMaxTexExtent     = kCapsBase + offsetof(CGxCaps, m_texMaxSize) + 0xC;
    constexpr size_t kCapsRtArgb8888       = kCapsBase + offsetof(CGxCaps, m_rttFormat) + 4 * 2;
    constexpr size_t kCapsRtRgb565         = kCapsBase + offsetof(CGxCaps, m_rttFormat) + 4 * 5;
    constexpr size_t kCapsRtRg16f          = kCapsBase + offsetof(CGxCaps, m_rttFormat) + 4 * 10;
    constexpr size_t kCapsRtR32f           = kCapsBase + offsetof(CGxCaps, m_rttFormat) + 4 * 11;
    constexpr size_t kCapsDepthTexD24S8    = kCapsBase + offsetof(CGxCaps, m_rttFormat) + 4 * 12;
    constexpr size_t kCapsTexFilterAniso   = kCapsBase + offsetof(CGxCaps, m_texFilterAnisotropic);
    constexpr size_t kCapsMaxAnisotropy    = kCapsBase + offsetof(CGxCaps, m_maxTexAnisotropy);
    constexpr size_t kCapsDepthBias        = kCapsBase + offsetof(CGxCaps, m_depthBias);
    constexpr size_t kCapsMaxClipPlanes    = kCapsBase + offsetof(CGxCaps, m_maxClipPlanes);
    constexpr size_t kCapsHwCursor         = kCapsBase + offsetof(CGxCaps, m_hwCursor);
    constexpr size_t kCapsOcclusionQuery   = kCapsBase + offsetof(CGxCaps, m_occlusionQuery);
    constexpr size_t kCapsPointParameters  = kCapsBase + offsetof(CGxCaps, m_pointParameters);
    constexpr size_t kCapsMaxPointSize     = kCapsBase + offsetof(CGxCaps, m_pointScaleMax);
    constexpr size_t kCapsPointSprites     = kCapsBase + offsetof(CGxCaps, m_pointSprite);
    constexpr size_t kCaps348              = kCapsBase + offsetof(CGxCaps, unk_0134);
    constexpr size_t kCaps34C              = kCapsBase + offsetof(CGxCaps, unk_0138);
    static_assert(sizeof(CGxCaps) == 0x13C, "CGxCaps holds no pointer, so it keeps its 32-bit size");
    static_assert(offsetof(CGxCaps, m_rttFormat) == 0x7C, "CGxCaps layout");
    static_assert(offsetof(CGxCaps, m_pointSprite) == 0x10C, "CGxCaps layout");

    constexpr unsigned kShTargetVertex    = 0;
    constexpr unsigned kShTargetPixel     = 4;
    constexpr int      kVertexProfileVs30 = 3;
    constexpr int      kPixelProfilePs30  = 4;

    // --- CGxBatch --------------------------------------------------------------------------------------
    constexpr size_t kBatchPrim    = offsetof(CGxBatch, m_primType);
    constexpr size_t kBatchStart   = offsetof(CGxBatch, m_start);
    constexpr size_t kBatchCount   = offsetof(CGxBatch, m_count);
    constexpr size_t kBatchMinVert = offsetof(CGxBatch, m_minIndex);
    constexpr size_t kBatchMaxVert = offsetof(CGxBatch, m_maxIndex);
    constexpr size_t kBatchSize    = sizeof(CGxBatch);

    // --- CGxPool ---------------------------------------------------------------------------------------
    constexpr size_t   kPoolType         = offsetof(CGxPool, m_target);
    constexpr size_t   kPoolUsage        = offsetof(CGxPool, m_usage);
    constexpr size_t   kPoolSize         = offsetof(CGxPool, m_size);
    constexpr size_t   kPoolApiHandle    = offsetof(CGxPool, m_apiSpecific);
    constexpr size_t   kPoolStreamCursor = offsetof(CGxPool, m_offset);
    constexpr size_t   kPoolName         = offsetof(CGxPool, m_name);
    constexpr uint32_t kPoolTypeCount    = 2;
    constexpr uint32_t kPoolUsageStatic  = GxPoolUsage_Static;
    constexpr uint32_t kPoolUsageDynamic = GxPoolUsage_Dynamic;
    constexpr uint32_t kPoolUsageStream  = GxPoolUsage_Stream;

    // --- CGxBuf ----------------------------------------------------------------------------------------
    constexpr size_t kBufPool      = offsetof(CGxBuf, m_pool);
    constexpr size_t kBufItemSize  = gx::kGxBufStreamStride;
    constexpr size_t kBufItemCount = offsetof(CGxBuf, m_itemCount);
    constexpr size_t kBufBytes     = offsetof(CGxBuf, m_size);
    constexpr size_t kBufOffset    = gx::kGxBufStreamOffset;
    constexpr size_t kBufValid     = offsetof(CGxBuf, m_valid);

    // --- TSGrowableArray -------------------------------------------------------------------------------
    constexpr size_t kGrowableData = offsetof(TSGrowableArray<CImVector>, m_data);

    // --- CGxTex ----------------------------------------------------------------------------------------
    constexpr size_t kTexUpdateRect    = offsetof(CGxTex, m_updateRect);
    constexpr size_t kTexWidth         = offsetof(CGxTex, m_width);
    constexpr size_t kTexHeight        = offsetof(CGxTex, m_height);
    constexpr size_t kTexTarget        = offsetof(CGxTex, m_target);
    constexpr size_t kTexFormat        = offsetof(CGxTex, m_format);
    constexpr size_t kTexDataFormat    = offsetof(CGxTex, m_dataFormat);
    constexpr size_t kTexFlags         = offsetof(CGxTex, m_flags);
    constexpr size_t kTexUserArg       = offsetof(CGxTex, m_userArg);
    constexpr size_t kTexFillCallback  = offsetof(CGxTex, m_userFunc);
    constexpr size_t kTexApiObject     = offsetof(CGxTex, m_apiSpecificData);
    constexpr size_t kTexApiObject2    = offsetof(CGxTex, m_apiSpecificData2);
    constexpr size_t kTexLinkNext      = offsetof(CGxTex, m_link.m_next);
    constexpr size_t kTexUpdatePending = offsetof(CGxTex, m_needsUpdate);
    constexpr size_t kTexNeedsRecreate = offsetof(CGxTex, m_needsCreation);
    static_assert(sizeof(CGxTexFlags) == 4, "CGxTexFlags is read as one dword");

    constexpr uint32_t kTexFlagFilterMask   = 0x7;
    constexpr uint32_t kTexFlagWrapU        = 1 << 3;
    constexpr uint32_t kTexFlagWrapV        = 1 << 4;
    constexpr uint32_t kTexFlagSingleMip    = 1 << 5;
    constexpr uint32_t kTexFlagGenerateMips = 1 << 6;
    constexpr uint32_t kTexFlagRenderTarget = 1 << 7;
    constexpr uint32_t kTexFlagAnisoShift   = 9;
    constexpr uint32_t kTexFlagRectIsOrigin = 1 << 15;

    enum : uint32_t
    {
        kTexFmtUnknown  = 0,
        kTexFmtAbgr8888 = 1,
        kTexFmtArgb8888 = 2,
        kTexFmtArgb4444 = 3,
        kTexFmtArgb1555 = 4,
        kTexFmtRgb565   = 5,
        kTexFmtDxt1     = 6,
        kTexFmtDxt3     = 7,
        kTexFmtDxt5     = 8,
        kTexFmtU8V8     = 9,
        kTexFmtG16R16F  = 10,
        kTexFmtR32F     = 11,
        kTexFmtD24X8    = 12,
    };
    constexpr uint32_t kTexFormatCount = 13;

    // The fill callback a CGxTex carries (GxTexUserFunc: the references are pointers in the ABI).
    using TexFillFn = void(__cdecl*)(uint32_t cmd, uint32_t width, uint32_t height, uint32_t face, uint32_t level,
                                     void* userArg, uint32_t* pitch, const void** data);
    constexpr uint32_t kTexCmdBegin   = 0;
    constexpr uint32_t kTexCmdGetData = 1;
    constexpr uint32_t kTexCmdEnd     = 2;
    constexpr uint32_t kTexCmdDropped = 3;

    // --- CGxShader -------------------------------------------------------------------------------------
    constexpr size_t kShaderName       = offsetof(CGxShader, m_key.m_str);
    constexpr size_t kShaderRefCount   = offsetof(CGxShader, m_refCount);
    constexpr size_t kShaderApiObject  = offsetof(CGxShader, m_apiSpecific);
    constexpr size_t kShaderTarget     = offsetof(CGxShader, m_target);
    constexpr size_t kShaderValid      = offsetof(CGxShader, m_valid);
    constexpr size_t kShaderCreateTried = offsetof(CGxShader, m_loaded);
    constexpr size_t kShaderCodeSize   = offsetof(CGxShader, m_code.m_count);
    constexpr size_t kShaderCode       = offsetof(CGxShader, m_code.m_data);

    // --- engine statics -------------------------------------------------------------------------------
    inline const uintptr_t kUiVertexShader = wxlcompat::UiVertexShaderAddress();   // CGxShader*[2]
    inline const uintptr_t kUiPixelShader  = wxlcompat::UiPixelShaderAddress();    // CGxShader*
    inline const uintptr_t kUiShaderName   = reinterpret_cast<uintptr_t>("UI");
}
