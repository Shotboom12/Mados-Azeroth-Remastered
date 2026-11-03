// HD: local IEEE CRC-32 helper for wxl-vulkan-api (GPL-3.0); no dependency on an unavailable bake SDK.
// This file is part of wxl-vulkan-api and is distributed under GPL-3.0-or-later.
#pragma once
#include <cstddef>
#include <cstdint>

namespace wxlvk {
    inline uint32_t Crc32(const void* bytes, size_t size) {
        const auto* data = static_cast<const unsigned char*>(bytes);
        uint32_t crc = 0xffffffffu;
        for (size_t i = 0; i < size; ++i) {
            crc ^= data[i];
            for (unsigned bit = 0; bit < 8; ++bit)
                crc = (crc >> 1) ^ (0xedb88320u & (0u - (crc & 1u)));
        }
        return crc ^ 0xffffffffu;
    }
}
