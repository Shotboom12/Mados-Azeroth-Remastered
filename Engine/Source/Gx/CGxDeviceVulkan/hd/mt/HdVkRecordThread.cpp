// SPDX-License-Identifier: GPL-3.0-or-later
#include "HdVkRecordThread.h"
#include "native/record/RecordThread.hpp"
#include "capture/Capture.hpp"   // Claude CPU-C
#include "native/Present.hpp"     // Claude GPU0
#include "../HdGpuZones.h"         // Claude GPU0
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include <cstdlib>
#include <cstring>
namespace HD::VkRecordThread {
namespace {
CVar* control=nullptr;
bool Toggle(CVar*,const char*,const char* value,void*) {
    if(!value || (std::strcmp(value,"0") && std::strcmp(value,"1") && std::strcmp(value,"2")))return false;
    return wxlvk::recordthread::SetMode(value[0]-'0');
}
}
void Initialize() {
    if(!wxlvk::recordthread::Init())return;
    wxlvk::recordthread::SetEnabled(false);
    // Non-archived experimental switch: never silently restores enabled on startup.
    // Reserve this name for this owner; an already registered name is left alone.
    if(auto* existing=CVar::LookupRegistered("hdVkRecordThread")) {
        if(existing==control)existing->Set("0",true,false,false,false);
    } else
        control=CVar::Register("hdVkRecordThread","Vulkan record thread: 0 native, 1 MT1 copy test, 2 MT2 record thread (FSR motion off only; not saved)",
                       0,"0",Toggle,CATEGORY_GRAPHICS,false,nullptr,false);
}
// Claude MT5 (17 nov 2026): hdVkDeltaRegs 1 (default) = a queued draw carries only the vertex registers written since
// the previous one; 0 = the whole file with every draw (as before). hdVkDeltaCheck 1 = the proof (Vulkan.log).
namespace {
CVar* deltaCvar=nullptr; CVar* deltaCheckCvar=nullptr;
bool ToggleDelta(CVar*,const char*,const char* value,void*) {
    if(!value || (std::strcmp(value,"0") && std::strcmp(value,"1")))return false;
    wxlvk::recordthread::SetDeltaRegs(value[0]=='1'); return true;
}
bool ToggleDeltaCheck(CVar*,const char*,const char* value,void*) {
    if(!value || (std::strcmp(value,"0") && std::strcmp(value,"1")))return false;
    wxlvk::recordthread::SetDeltaCheck(value[0]=='1'); return true;
}
// Claude CPU-B (17 nov 2026): hdVkPassQueue 1 (default) = a pass's end and begin, and a clear in it, go through the record
// thread's queue in order (no drain); 0 = the original (drain first); 2 = queued with the proof (Logs\preuve-passes.txt).
CVar* passQueueCvar=nullptr;
bool TogglePassQueue(CVar*,const char*,const char* value,void*) {
    if(!value || (std::strcmp(value,"0") && std::strcmp(value,"1") && std::strcmp(value,"2") && std::strcmp(value,"3")))return false;
    wxlvk::recordthread::SetPassQueue(value[0]-'0'); return true;
}
// Claude CPU-C (17 nov 2026): hdVkCubeWalk 1 (default) = a character cube replay walks the frame's movers alone, each bound
// taken to world once; 0 = the original walk; 2 = with the proof (Logs\preuve-cubes.txt); 3 = the proof's control.
CVar* cubeWalkCvar=nullptr;
bool ToggleCubeWalk(CVar*,const char*,const char* value,void*) {
    if(!value || value[0]<'0' || value[0]>'3' || value[1])return false;
    wxlvk::capture::cubeWalk=value[0]-'0'; return true;
}
// Claude CPU-E (17 nov 2026): hdVkCopyQueue 1 (default) = the sun shadow layers' copy queued in order (no drain);
// 0 = the original; 2 = with the proof (Logs\\preuve-copies.txt); 3 = the proof's control.
CVar* copyQueueCvar=nullptr;
bool ToggleCopyQueue(CVar*,const char*,const char* value,void*) {
    if(!value || value[0]<'0' || value[0]>'3' || value[1])return false;
    wxlvk::recordthread::SetCopyQueue(value[0]-'0'); return true;
}
// Claude GPU0 (17 nov 2026, mesure seulement) : hdGpuZones 1 = le temps GPU de l'image zone par zone (Logs\\gpu-zones.txt).
CVar* gpuZonesCvar=nullptr;
bool ToggleGpuZones(CVar*,const char*,const char* value,void*) {
    if(!value || (value[0]!='0' && value[0]!='1') || value[1])return false;
    const bool on=value[0]=='1';
    if(on)HD::GpuZones::SetMain();
    HD::GpuZones::on=on;
    wxlvk::native::present::SetGpuZones(on);
    return true;
}
void RegisterDelta() {
    if(deltaCvar)return;
    gpuZonesCvar=CVar::Register("hdGpuZones","HD (Claude GPU0, mesure seulement) : 1 = le temps GPU de l'image zone par zone (etapes du moteur, bandes du soleil, etapes HD, MidPasses), dans Logs\\gpu-zones.txt toutes les 2 s ; 0 = rien (defaut). Avec WXL_VK_LABELS=1 au lancement, les zones sont aussi des etiquettes pour Nsight / VulkanProfiler",
                   0,"0",ToggleGpuZones,CATEGORY_GRAPHICS,false,nullptr,false);
    copyQueueCvar=CVar::Register("hdVkCopyQueue","HD (Claude CPU-E): 1 = la copie des couches d'ombre du soleil mise dans la file du thread d'enregistrement, dans l'ordre, sans l'attendre ; 0 = l'original (attente) ; 2 = avec la preuve (Logs\\preuve-copies.txt) ; 3 = temoin de la preuve (layouts lus en direct, pas dans la file : doit compter des differences)",
                   0,"1",ToggleCopyQueue,CATEGORY_GRAPHICS,false,nullptr,false);
    cubeWalkCvar=CVar::Register("hdVkCubeWalk","HD (Claude CPU-C): 1 = les cubes des personnages ne parcourent que les dessins qui bougent, centres calcules une fois par dessin ; 0 = l'original (tous les dessins) ; 2 = avec la preuve (Logs\\preuve-cubes.txt) ; 3 = temoin de la preuve (le dernier mobile oublie, doit compter des differences)",
                   0,"1",ToggleCubeWalk,CATEGORY_GRAPHICS,false,nullptr,false);
    passQueueCvar=CVar::Register("hdVkPassQueue","HD (Claude CPU-B): 1 = fin et debut de passe (et effacements) mis dans la file du thread d'enregistrement, dans l'ordre, sans l'attendre ; 0 = l'original (attente) ; 2 = en file avec la preuve (Logs\\preuve-passes.txt) ; 3 = temoin de la preuve (l'ancien defaut : layouts copies sans la file, doit compter des differences)",
                   0,"1",TogglePassQueue,CATEGORY_GRAPHICS,false,nullptr,false);
    deltaCvar=CVar::Register("hdVkDeltaRegs","HD (Claude MT5): 1 = a draw sent to the record thread carries only the vertex registers changed since the previous one (same draws); 0 = the whole register file every draw",
                   0,"1",ToggleDelta,CATEGORY_GRAPHICS,false,nullptr,false);
    deltaCheckCvar=CVar::Register("hdVkDeltaCheck","HD (Claude MT5, mesure seulement): 1 = chaque dessin envoie aussi tout le banc et le compare a la copie du thread d'enregistrement (Logs\\Vulkan.log toutes les 120 images)",
                   0,"0",ToggleDeltaCheck,CATEGORY_GRAPHICS,false,nullptr,false);
}
}
// HD (Claude) lot MT4 2026-11-06: MT2 (record thread) on by default once the device exists (Max's choice for the release).
// /console hdVkRecordThread 0 turns it off for the session; WXL_VK_RECORD_THREAD=0 in the environment keeps it off at start.
void EnableDefault() {
    RegisterDelta();   // Claude MT5: the switches exist even with the record thread kept off
    const char* env=std::getenv("WXL_VK_RECORD_THREAD");
    if(env && env[0]=='0')return;
    if(control)control->Set("2",true,false,false,false);
}
void Shutdown(){wxlvk::recordthread::Shutdown();}
}
