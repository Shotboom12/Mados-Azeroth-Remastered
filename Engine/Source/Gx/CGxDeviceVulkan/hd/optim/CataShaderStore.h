#pragma once
#include "CataOptimRenderer.h"
#include <filesystem>
namespace HD::CataOptim {
enum class View {World,Mirror,Shadow};
// shaderDirectory is the deployed directory containing terrain_*.spv / grass_*.spv / packed_*.spv.
// Actual resolved native MD5s are required, not just aliases (a changed HD shader must be regenerated).
// Runs ONLY during resource preparation, never inside a replacement draw.
bool WarmNativePair(Renderer&,const std::filesystem::path&shaderDirectory,const std::filesystem::path&nativeTranslatedDirectory,const char*vertexMd5,const char*pixelMd5,View,ProgramDesc state,Handle&result,char*error,size_t errorBytes);
}
