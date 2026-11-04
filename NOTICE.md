# Notice and provenance

**Mado's Azeroth Remastered** is the work of **Madominator (Mado)**: the HD / graphics client pack and renderer
built on the wowdecomp x64 decompilation of the World of Warcraft 3.3.5a (12340) client.

- Source snapshot: Madominator1/Azeroth-Remastered, beta, commit `41573fb2ca43f54bd68534274539f2e697be82e7`
  (7,469 files; every file hash-checked against the Git tree listing of that commit).
- This repository is an **unmodified copy** of that snapshot, republished by Shotboom12 with Mado's permission
  (given by Mado in a Discord conversation with Shotboom on 2026-10-29) and with Mado's credit kept.
  Only this NOTICE.md was added. No Git history is included.
- Base decompilation: `wowdecomp` by Saty (SatyPardus). Credit for the x64 decompilation work belongs to Saty.
- Third-party code under `ThirdParty/` and `Engine/Source/` keeps its own licenses in its own folders.
- No game data, executables, MPQs or release zips are included. A 3.3.5a (12340) client is required.
- The original repository has no license file. Reuse beyond this copy should be cleared with Mado.

## Update of 2026-11-03

Updated to Mado's source drop of 2026-11-03 ("Azeroth Remastered-source-2026-11-03"): lamps, native Lumenveil logic (hd/lumen), FSR 3.1 and DLSS support
(hd/fsr, hd/dlss), the WaystoneHD menu pages (FSR, Lumen, hours, button) and the related renderer and wxl changes. 325 files were added or changed, copied
unmodified from that drop (files that only differed by line endings were left as they were). Credit for all of it stays with Madominator1.

Left out of this repository on purpose:
- `Engine/Source/Gx/CGxDeviceVulkan/hd/lumen/data/lampdata.bin` (data table; ask Mado)
- `ThirdParty/DLSS/` (NVIDIA's DLSS SDK headers, import library and nvngx_dlss.dll): NVIDIA's license does not allow redistributing the SDK itself. Get it from
  https://github.com/NVIDIA/DLSS (tag v310.9.16 is the version this code was written against) and place it in `ThirdParty/DLSS` (the CMake option WOWDECOMP_DLSS expects
  include/ and lib/Windows_x86_64/ there).
- The FidelityFX files under `ThirdParty/FidelityFX/` are AMD's and keep AMD's license (`ThirdParty/FidelityFX/license.md`).
