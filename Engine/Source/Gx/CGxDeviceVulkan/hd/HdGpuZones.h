// SPDX-License-Identifier: GPL-3.0-or-later
// Claude GPU0 (17 nov 2026, MESURE SEULEMENT) : le pont entre les etapes du moteur et le chrono GPU par zone (hdGpuZones).
#pragma once
namespace HD::GpuZones {
inline bool on = false;        // hdGpuZones 1
void SetMain();                // le thread qui allume la mesure (le principal, par la console)
bool OnMain();
void Zone(const char* name);   // thread principal : la zone du moteur change
void Direct(void* cmd, const char* name); // Claude GPU0 (mesure) : un repere ecrit tout de suite dans ce tampon (comme les MidPass, Points.cpp)
}
