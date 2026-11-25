#include <atomic>
#include <cstdint>
#include "Engine/Source/Gx/CGxTex.h"

// VERIFY: 39ee55f7 manual
// OFFSET: 0x006852C0
CGxTex::CGxTex(EGxTexTarget target, uint32_t width, uint32_t height, uint32_t depth, EGxTexFormat format, EGxTexFormat dataFormat, CGxTexFlags flags, void* userArg, GxTexUserFunc userFunc, const char* name) {
    this->m_updateRect.minY = 0;
    this->m_updateRect.minX = 0;
    this->m_updateRect.maxY = height;
    this->m_updateRect.maxX = width;
    this->m_updatePlaneMin = -1;
    this->m_updatePlaneMax = -1;
    this->m_target = target;
    this->m_width = width;
    this->m_height = height;
    this->m_dataFormat = dataFormat;
    this->m_format = format;
    this->m_apiSpecificData = nullptr;
    this->m_apiSpecificData2 = nullptr;
    this->m_depth = depth;
    this->m_userFunc = userFunc;
    this->m_needsUpdate = 1;
    this->m_needsFlagUpdate = 1;
    this->m_needsCreation = 1;
    this->m_userArg = userArg;
    this->m_char5D = 1;
    this->m_flags = flags;
    this->unused_0054 = CGxTexNextGeneration(); // Claude CACHE1d: content generation (unique, see CGxTex.h)
}

// Claude CACHE1d: one counter for every texture, so a texture freed and re-made at the same address never
// shows the generation it had before.
uint32_t CGxTexNextGeneration() {
    static std::atomic<uint32_t> s_generation{0};
    return ++s_generation;
}

// VERIFY: bd9c61cb manual
// OFFSET: 0x00685DC0
CGxTex::~CGxTex() {
}
