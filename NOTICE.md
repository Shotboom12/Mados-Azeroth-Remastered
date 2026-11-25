# Notice and provenance

**Mado's Azeroth Remastered** is the work of **Madominator (Mado)**: the HD / graphics client pack and renderer
built on the wowdecomp x64 decompilation of the World of Warcraft 3.3.5a (12340) client.

- Source snapshot: Madominator1/Azeroth-Remastered, beta, commit `41573fb2ca43f54bd68534274539f2e697be82e7`
  (7,469 files; every file hash-checked against the Git tree listing of that commit).
- The initial publication was an **unmodified copy** of that snapshot, republished by Shotboom12 with Mado's permission
  (given by Mado in a Discord conversation with Shotboom on 2026-10-29) and with Mado's credit kept.
  At that initial publication only NOTICE.md was added. Later changes are recorded below and in Git history.
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

## BRUME1 source update â€” November 25, 2026

Madominator supplied the BRUME1 source as `Code-source-BRUME1-partie1.zip` and `Code-source-BRUME1-partie2.zip`, packaged together in `Code-source-BRUME1-partie1.zip.zip`. Shotboom12 requested publication. The parts contain 7,750 files, with no overlapping paths; all ZIP entry CRCs passed. This supersedes the older native-source snapshot description for the current branch.

- Outer archive SHA-256: `335413555c216cc7069717fa64d3960da1f8c561136f38f077ac354e6f64364c`.
- Part 1 SHA-256: `17603ee938760b84de2bdce7ceb82a0266cd4a7a3c582d1e5bb1a23dd0caeeef`.
- Part 2 SHA-256: `3587158d5eafcb4b3da9bf8e9e6fc8e38bad23bed3f4a10dd50974f5d11f6533`.

Imported content-changing files retain the supplied bytes. The 2,513 files differing only in line endings keep their existing repository bytes. The four active WaystoneHD addon files retain Shotboom12's English v1.0.4 translation; their French baseline matches the BRUME1 source addon after newline normalization. The repository README, this provenance notice and English update instructions remain maintained documentation. The supplied upstream README is retained under `docs/upstream-BRUME1-README.md`.

The existing `lampdata.bin` exclusion remains in place. The supplied `ThirdParty/DLSS` folder contains only LICENSE.txt; that notice is included, while the SDK files described above are still external prerequisites. Existing AMD signed runtime DLLs, absent from this source drop but referenced by its CMake configuration, are retained in the repository. No missing SDK, data or build dependency was downloaded as part of this publication.

Credits remain with Madominator for the renderer and Saty for the base x64 decompilation, alongside existing third-party notices. The source was not compiled, installed or launched; exact reproduction of the downloadable binary is unverified.

