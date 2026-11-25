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

The native renderer source files retained in this repository predate the November 24 BRUME1 binary package. The `Interface/AddOns/WaystoneHD` folder is updated separately to the English v1.0.4 addon based on the November 24 package. No matching updated source was supplied with that package. The native source files are preserved for reference and are not presented as the source that reproduces the latest downloadable binaries. GitHub's automatically generated source archives contain the older native source plus the updated English addon; players should download the attached player ZIP instead.

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
