// SPDX-License-Identifier: GPL-3.0-or-later
// Existing M2 point-light path: controlled diagnostics, no extra illumination pass.
#pragma once
#include <array>
#include <cstddef>
#include <cstdint>
struct LocalLights;
namespace HD::VulkanModelLights {
struct Vec4 {float x=0,y=0,z=0,w=0;};
struct Block {
    std::array<Vec4,4> color{},position{};
    std::array<float,4> constant{},linear{},quadratic{};
};
static_assert(sizeof(Block)==176,"eleven existing vertex constant rows");
enum class Mode:uint32_t {Off=0,Observe=1,Cut=2,Gain=3};
struct Stats {
    uint64_t blocks=0,litBlocks=0,activeSlots=0,invalid=0;
    uint32_t maxSelected=0;float peak=0;
};
// Does not allocate. Modes Off/Observe leave EVERY input byte unchanged. Other modes change RGB only.
void Process(Block& block,uint32_t selected,Mode mode,float gain,Stats& stats);
void Init();
void InspectAndFilter(::LocalLights& block,uint32_t selected); // immediately before the existing c17..c27 upload
void Tick(); // immediately before the normal ScenePresent; throttled status, no rendering
void Shutdown();
}
