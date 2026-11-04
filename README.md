This is a modification of the Saty's wotlk decompile.


## Installer la version HD (joueurs)

1. Télécharge le dernier `WoW-HD-AAAA-MM-JJ.zip` dans les [Releases](../../releases) du dépôt.
2. Dézippe-le, puis double-clique sur `Installer.bat`.
3. Si l'installeur le demande, choisis le dossier de ton client 3.3.5a (celui qui contient `Wow.exe`).
4. Lance le jeu avec le raccourci **WoW HD** sur ton bureau.

Il te faut un client 3.3.5a (12340) complet, Windows 10 ou 11 en 64 bits, et une carte graphique Vulkan avec un pilote
à jour. L'installeur ne supprime rien : `Wow.exe` reste le jeu d'origine.

*English: download the latest zip from Releases, unzip it, run `Installer.bat`, pick your 3.3.5a client folder if
asked, then start **WoW HD** from your desktop.*


## Requirements

- Windows 10 or 11
- Visual Studio 2022 with the **Desktop development with C++** workload (MSVC v143 and a Windows SDK)
- CMake 3.10 or newer (the one that ships with Visual Studio works)
- For Win32 builds only: [NASM](https://www.nasm.us/), on `PATH` or passed as `-DNASM_EXECUTABLE=<path>`, and
  `DivxDecoder.dll` from your 3.3.5a client copied to `ThirdParty/DivxDecoder/` (the build copies it next to the
  executables; the x64 build uses its own decoder instead)
- A World of Warcraft **3.3.5a (12340)** client. No game data is included in this repository.



## Special thanks

Saty's

- [binana](https://github.com/thunderbrewhq/binana)
- [thunderbrew](https://github.com/thunderbrewhq/thunderbrew)
- [whoa](https://github.com/whoahq/whoa)
- TOMRUS, for the initial IDB
- Everyone who has reported bugs so far
- The WoW modding community
