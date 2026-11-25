#pragma once

// Claude BLZ1 (20 nov 2026): our world shaders (terrain, buildings, grass, sky) are ready BEFORE the first world frame,
// so no frame is ever drawn with Blizzard's shaders while ours compile (the cause of the golden/pink ground, PIPE1).
//   - Build(): every shader of one material, all or nothing. First the disk copy HD\ShaderCache\<material>.bin, used
//     only when its key (FNV-1a 64 of every source, entry, profile, define and flag, plus the size and date of
//     d3dcompiler_47.dll) is the same; else compiled on every core and written back. D3DCompile is deterministic for
//     the same inputs and DLL, so the copy holds exactly the bytes a compile would give (same md5s for Vulkan).
//   - Wait(): the world load (CWorld::LoadMap) waits there, under the loading screen, until each material has
//     finished (ready or failed).
#include <atomic>
#include <cstddef>
#include <cstdint>
#include <vector>

namespace HD::ShaderBuild {
struct Job {
    const char* source = nullptr;   // HLSL text
    const char* name = nullptr;     // source name for the compiler's messages
    const char* entry = "main";
    const char* profile = nullptr;  // vs_3_0 / ps_3_0
    const char* macroName[8] = {};
    int32_t macroValue[8] = {};
    int32_t macroCount = 0;
    std::vector<uint8_t>* out = nullptr;
    const char* what = "";          // for an error: which family
    int32_t index = 0;              // ... and which permutation

    void Define(const char* macro, int32_t value) {
        macroName[macroCount] = macro;
        macroValue[macroCount] = value;
        macroCount++;
    }
};

// All jobs or none (false: info holds the first error). info also says on success where the code came from and how long.
bool Build(const char* material, std::vector<Job>& jobs, char* info, size_t infoSize);

// An ERROR: one of our shaders could not be put in (Blizzard's code would be drawn). Appended with the time to
// Logs\HdErreurs.txt next to the exe and sent to the debugger output. Safe on any thread.
void Error(const char* text);

// Blocks until state is no longer `compiling` (sleeps 2 ms between looks); returns the ms waited.
uint32_t Wait(const std::atomic<int32_t>& state, int32_t compiling);
}
