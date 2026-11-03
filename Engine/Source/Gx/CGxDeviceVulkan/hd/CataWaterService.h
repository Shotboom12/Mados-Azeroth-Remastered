// SPDX-License-Identifier: GPL-3.0-or-later
// HD: the Cata water's device-side services under the Vulkan device (CGxDeviceVulkan): the copy of the scene
// before the water (CataSceneCapture, stage BeforeLiquids) and its check on screen (hdCataDebug). Step A of the
// port: nothing here changes what the water looks like yet.
#pragma once

#include <cstdint>

namespace HD::CataWater::Service {
// After a successful DeviceCreate: registers hdCataWater / hdCataDebug (once) and the stages. Render thread.
void Startup();
// Before DeviceDestroy (and from the device's destructor): unregisters the stages and frees what they own,
// after the GPU is idle. Safe when Startup did nothing.
void Shutdown();
}
