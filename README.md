This is a modification of Saty's WoTLK decompile.

## Install the HD version (players)

1. Download the player ZIP from this repository's [latest release](../../releases/latest). The November 24, 2026 package is named `Azeroth.Remastered-2026-11-24-BRUME1-English-v1.0.4.zip`.
2. Extract the whole ZIP, open the extracted package folder, then double-click `Installer.bat`. Read the included `README.txt` first. The v1.0.4 community update includes an English guide and English in-game HD settings panel.
3. If prompted, select your 3.3.5a client folder (the one containing the `Data` folder).
4. Launch the game with the **Azeroth Remastered** desktop shortcut.

You need a complete WoW 3.3.5a (12340) client, Windows 10 or 11 (64-bit), and a Vulkan-compatible graphics card with an up-to-date driver. The installer does not remove the original game; `Wow.exe` remains untouched.

## November 24, 2026 player package

The supplied BRUME1 package includes the Vulkan HD renderer, Lumenveil lighting and fog, For Ever colours, AMD FSR 3.1, and NVIDIA DLSS. The package guide says upscaling and frame generation start off. DLSS requires a compatible NVIDIA RTX card; FSR also supports AMD and Intel cards. See the included guide for details.

The v1.0.4 English community update translates the November 24 WaystoneHD panel, tooltips and messages. Madominator's renderer binaries, assets, presets and third-party license notices are preserved. Lua 5.1 syntax and mock API checks pass; in-game layout remains unverified. No game was installed or launched during publication.

Already using BRUME1? Download `WaystoneHD-English-v1.0.4.zip` from the latest release for the small addon-only update. Close the game normally, back up `Interface/AddOns/WaystoneHD`, and extract into your client folder. See [English update instructions](docs/ENGLISH-UPDATE-v1.0.4.txt) for details and rollback.

## Source version

The repository now includes Madominator's supplied **BRUME1 source drop**, received November 25, 2026 as two ZIP parts. Native source and shader content changes have been imported; files differing only in line endings keep the repository's existing bytes. The English v1.0.4 WaystoneHD panel is retained and its French base matches the addon supplied with the BRUME1 source.

This is a source publication, not a new renderer build. Compilation and exact reproduction of the published binaries have not been verified. See [BRUME1 provenance and exclusions](NOTICE.md#brume1-source-update--november-25-2026) and [import verification](docs/BRUME1-source-import-20261125.json).

Download current source using **Code â†’ Download ZIP**, or clone this repository. The automatic source archives on the earlier v1.0.4 release remain its historical tag snapshot; the full English player package remains attached to that release.

## Source build requirements

- Windows 10 or 11
- Visual Studio 2022 with the **Desktop development with C++** workload (MSVC v143 and a Windows SDK)
- CMake 3.10 or newer (the version included with Visual Studio works)
- For Win32 builds only: [NASM](https://www.nasm.us/), on `PATH` or passed as `-DNASM_EXECUTABLE=<path>`, and `DivxDecoder.dll` from your 3.3.5a client copied to `ThirdParty/DivxDecoder/` (the build copies it next to the executables; x64 builds use their own decoder)
- A World of Warcraft **3.3.5a (12340)** client. No game data is included in this repository.

## Special thanks

Saty's work and contributions from:

- [binana](https://github.com/thunderbrewhq/binana)
- [thunderbrew](https://github.com/thunderbrewhq/thunderbrew)
- [whoa](https://github.com/whoahq/whoa)
- TOMRUS, for the initial IDB
- Everyone who has reported bugs so far
- The WoW modding community

