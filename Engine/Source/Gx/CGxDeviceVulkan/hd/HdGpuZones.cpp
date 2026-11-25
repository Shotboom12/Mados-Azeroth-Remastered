// SPDX-License-Identifier: GPL-3.0-or-later
// Claude GPU0 (17 nov 2026, MESURE SEULEMENT) : voir HdGpuZones.h.
#include "HdGpuZones.h"
#include "native/Present.hpp"
#include <thread>
namespace HD::GpuZones {
namespace { std::thread::id g_main; }
void SetMain() { g_main = std::this_thread::get_id(); }
bool OnMain() { return std::this_thread::get_id() == g_main; }
void Zone(const char* name) { if (on && OnMain()) wxlvk::native::present::GpuZone(name); }
void Direct(void* cmd, const char* name) { if (on && cmd) wxlvk::native::present::GpuMarkDirect(static_cast<VkCommandBuffer>(cmd), name); } // Claude GPU0
}
