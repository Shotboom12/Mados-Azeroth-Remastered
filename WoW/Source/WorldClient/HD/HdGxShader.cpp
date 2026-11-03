#include "WoW/Source/WorldClient/HD/HdGxShader.h"
#include <atomic>
#include <cstdio>
#include <windows.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/Gx/GxSeam.h"
#include "Engine/Source/Gx/Types.h"

namespace {
    // The first pixel register the translated modules do not carry, and the vertex row it is read from.
    const uint32_t kPixelHighFirst = 13;
    const uint32_t kPixelHighRow = 64;
    const uint32_t kPixelHighLast = 204; // 64 + (204 - 13) = 255, the last vertex row

    CVar* s_dump = nullptr;
    std::atomic<int32_t> s_dumpOn(0);

    bool DumpCallback(CVar*, const char*, const char* value, void*) {
        s_dumpOn.store(value && value[0] == '1' ? 1 : 0);
        return true;
    }
}

void HD::ShaderCVars() {
    static bool registered = false;
    if (registered) return;
    registered = true;
    s_dump = CVar::Register("hdShaderDump", "HD: 1 = write the HD shaders to Vulkan\\hd-blobs\\ for the Vulkan translator", 1, "0", DumpCallback, CATEGORY_GRAPHICS, false, nullptr, false);
    if (s_dump) s_dumpOn.store(s_dump->m_intValue != 0 ? 1 : 0);
}

bool HD::VulkanDevice() {
    return g_theGxDevicePtr && g_theGxDevicePtr->DeviceApi() == GxApi_Vulkan;
}

bool HD::ShaderSwapDevice() {
    if (!g_theGxDevicePtr) return false;
    EGxApi api = g_theGxDevicePtr->DeviceApi();
    return api == GxApi_D3d9 || api == GxApi_D3d9Ex || api == GxApi_Vulkan;
}

bool HD::ShaderKnown(const uint8_t* code, size_t size) {
    if (!HD::VulkanDevice()) return true;
    return g_gxShaderKnown && code && size && g_gxShaderKnown(code, static_cast<uint32_t>(size)) != 0;
}

bool HD::ShaderObjectOwnedByDevice() {
    return HD::VulkanDevice();
}

void HD::PixelConstantsSet(uint32_t first, const float* data, uint32_t count) {
    if (!g_theGxDevicePtr || !count) return;
    g_theGxDevicePtr->ShaderConstantsSet(GxSh_Pixel, first, data, count);
    if (!HD::VulkanDevice() || first + count <= kPixelHighFirst) return;

    uint32_t skip = first < kPixelHighFirst ? kPixelHighFirst - first : 0;
    uint32_t start = first + skip;
    if (start > kPixelHighLast) return;
    uint32_t rows = count - skip;
    if (start + rows - 1 > kPixelHighLast) rows = kPixelHighLast - start + 1;
    g_theGxDevicePtr->ShaderConstantsSet(GxSh_Vertex, kPixelHighRow + (start - kPixelHighFirst), data + 4 * skip, rows);
}

void HD::ShaderDump(const char* material, bool pixel, int32_t a, int32_t b, const uint8_t* code, size_t size) {
    if (!s_dumpOn.load() || !material || !code || !size) return;
    CreateDirectoryA("Vulkan", nullptr);
    CreateDirectoryA("Vulkan\\hd-blobs", nullptr);
    char path[MAX_PATH];
    snprintf(path, sizeof(path), "Vulkan\\hd-blobs\\%s-%s-%d-%d.bin", material, pixel ? "ps" : "vs", a, b);
    FILE* file = fopen(path, "wb");
    if (!file) return;
    fwrite(code, 1, size, file);
    fclose(file);
}
