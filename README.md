This is a modification of Saty's WoTLK decompile.

## Install the HD version (players)

1. Download the latest `Azeroth.Remastered-YYYY-MM-DD.zip` from this repository's [Releases](../../releases).
2. Extract the ZIP, then double-click `Installer.bat`. The guide, installer prompts, recommended graphics settings, and WaystoneHD panel are in English.
3. If prompted, select your 3.3.5a client folder (the one containing the `Data` folder).
4. Launch the game with the **Azeroth Remastered** desktop shortcut.

You need a complete WoW 3.3.5a (12340) client, Windows 10 or 11 (64-bit), and a Vulkan-compatible graphics card with an up-to-date driver. The installer does not remove the original game; `Wow.exe` remains untouched.

## Requirements

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
