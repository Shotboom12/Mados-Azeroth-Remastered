// Waystone HD: grass wind and grass parting around the player.
// Algorithm and default values adapted from wxl-grasswind (WarcraftXL, by iThorgrim), GPLv3:
// this program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public
// License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later
// version. It is distributed WITHOUT ANY WARRANTY. See <https://www.gnu.org/licenses/>.
#include "WoW/Source/WorldClient/HD/HdGrassWind.h"
#include <cmath>
#include <windows.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "WoW/Source/ObjectMgrClient/ObjectMgrClient.h"
#include "WoW/Source/Object/ObjectClient/Object_C.h"
#include "WoW/Source/UIUtil/Camera.h"
#include "WoW/Source/Ui/WorldFrame.h"
#include "WoW/Source/WorldClient/World.h"
#ifdef WOWDECOMP_LUMEN
// HD 2026-11-02, kit commun R1 lot G1: Seyris wind model (GPLv3, hd/seyris), read only of map, area and weather.
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/seyris/SxCore.h"
#include "WoW/Source/DB/DBClient/DBClient.h"
#include "WoW/Source/WorldClient/Map.h"
#include "WoW/Source/WorldClient/MapWeather.h"
#include <cstdio>
#include <cstring>
#endif

namespace {
    const double kTwoPi = 6.283185307179586;

    // WarcraftXL's defaults (GrassWind.hpp)
    const float kAmplitude = 0.06f;        // wave 1 sway at the tip, yards
    const float kWavelength = 18.0f;       // wave 1 length, yards
    const float kCrossAmplitude = 0.02f;   // wave 2 sway, yards
    const float kCrossWavelength = 6.5f;   // wave 2 length, yards
    const float kCrossAngle = 35.0f;       // wave 2 heading, degrees from wave 1
    const float kCrossSpeed = 1.37f;       // wave 2 speed / wave 1 speed
    const float kLean = 0.35f;             // downwind lean, fraction of wave 1
    const float kVariance = 0.6f;          // per-blade amplitude spread (0.7 .. 1.3)
    const float kDistanceFade = 0.015f;    // sway / (1 + depth * this)
    const float kAnchor = 0.3f;            // foot part of the blade that never moves
    const float kJitter = 1.7f;            // per-blade phase spread, radians
    const float kPushCentre = 0.5f;        // lean at the player, yards (0 at the radius)
    const float kConeHeight = 0.5f;        // height above the player's feet where the lean is full
    const float kMinHeight = 0.3f;         // lower than this above the player's feet: no lean

    CVar* s_wind = nullptr;
    CVar* s_speed = nullptr;
    CVar* s_direction = nullptr;
    CVar* s_strength = nullptr;
    CVar* s_react = nullptr;
    CVar* s_radius = nullptr;

    // this frame (GrassWindPrepare)
    ULONGLONG s_lastTick = 0;
    double s_phase1 = 0.0;                 // wave phases, advanced each frame (a speed change does not jump)
    double s_phase2 = 0.0;
    float s_dir1[2] = { 0.0f, 0.0f };      // wave directions * 2 pi / wavelength
    float s_dir2[2] = { 0.0f, 0.0f };
    float s_amp1[2] = { 0.0f, 0.0f };      // wave directions * amplitude
    float s_amp2[2] = { 0.0f, 0.0f };
    float s_on = 0.0f;
    bool s_havePlayer = false;
    C3Vector s_player;
    float s_push = 0.0f;
    float s_radiusValue = 2.0f;

    float Clamp(float v, float lo, float hi) {
        return v < lo ? lo : (v > hi ? hi : v);
    }

    // same object as ShadowQuery.cpp's GetViewerPosition: what the camera follows (the player, or the player's vehicle)
    bool PlayerPosition(C3Vector* position) {
        CGCamera* camera = CGWorldFrame::GetActiveCamera();
        if (!camera) return false;
        CGObject_C* object = ClntObjMgrObjectPtr(camera->m_targetGUID, TYPEMASK_OBJECT, __FILE__, __LINE__);
        if (!object) return false;
        *position = object->GetPosition();
        return true;
    }

#ifdef WOWDECOMP_LUMEN
    // Lot G1 (Seyris S2): hdSxWind 1 = the FORCE of the wind comes from the Seyris wind model at the player: the
    // zone's profile (Vulkan\seyris\WindProfile.cdbc, subzone > zone > map > world), the native weather intensity
    // and its travelling gusts, eased by the model. The sway itself is unchanged: same shader, same c53..c59, same
    // heading (hdGrassWindDirection), so the FSR motion path and the For Ever grass light do not move. A heading that
    // turns with time is NOT taken: the waves' phase is k . world position, turning k would make far grass flicker.
    // hdSxWind 0 (default) = exactly the old wind. hdSxInfo (read only) says what was used.
    const float kSxReference = 0.475f; // the profile file's world default (ground wind .3 .. .65): its middle = strength 1
    CVar* s_sxWind = nullptr;
    CVar* s_sxInfo = nullptr;
    HD::Seyris::Cdbc s_sxTable;
    bool s_sxTried = false;
    HD::Seyris::WindModel s_sxModel;
    bool s_sxRunning = false;
    double s_sxSeconds = 0.0;
    double s_sxInfoAt = -1.0;

    void SxStatus(const char* text) {
        if (!s_sxInfo) return;
        if (!s_sxInfo->m_stringValue.m_str || std::strcmp(s_sxInfo->m_stringValue.m_str, text)) { s_sxInfo->SetReadOnly(false); s_sxInfo->InternalSet(text, true, false, false, false); } // read-only cvars ignore InternalSet
        s_sxInfo->SetReadOnly(true);
    }

    // The area chain under the player, subzone first (AreaTable parents), at most 16.
    HD::Seyris::Place SxPlace(const C3Vector& player) {
        HD::Seyris::Place place;
        place.map = s_mapId;
        int32_t id = CMap::bDungeon ? 0 : CMap::QueryAreaIdTerrain(&player);
        while (id > 0 && place.areaCount < 16) {
            bool seen = false;
            for (uint32_t i = 0; i < place.areaCount; i++) seen |= place.areas[i] == static_cast<uint32_t>(id);
            if (seen) break;
            place.areas[place.areaCount++] = static_cast<uint32_t>(id);
            const AreaTableRec* area = g_areaTableDB.GetRecord(id);
            id = area ? area->m_parentAreaID : 0;
        }
        return place;
    }

    // Returns the strength multiplier (1 = the old wind) and the speed multiplier, or false = keep the old wind.
    bool SeyrisWind(double dt, float* strengthScale, float* speedScale) {
        if (!s_sxWind) {
            s_sxWind = CVar::Register("hdSxWind", "HD: 1 = grass wind force from the Seyris wind model (zone, weather, gusts), 0 = old wind", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
            s_sxInfo = CVar::LookupRegistered("hdSxInfo");
            if (!s_sxInfo) s_sxInfo = CVar::Register("hdSxInfo", "HD: Seyris wind state (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
            SxStatus("off");
        }
        if (!s_sxWind || s_sxWind->m_intValue == 0) {
            if (s_sxRunning) { s_sxModel.Reset(); s_sxRunning = false; SxStatus("off"); }
            return false;
        }
        if (!s_sxTried) {
            s_sxTried = true;
            s_sxTable.Load("Vulkan\\seyris\\WindProfile.cdbc");
        }
        if (s_sxTable.Rows() == 0) { SxStatus("WindProfile.cdbc absent ou invalide : vent d'origine"); return false; }
        C3Vector player;
        if (!PlayerPosition(&player)) return false;
        HD::Seyris::Place place = SxPlace(player);
        float weather = 0.0f;
        if (World::s_weather && World::s_weather->GetType() != 0) {
            weather = World::s_weather->m_intensity;
            weather = std::isfinite(weather) ? Clamp(weather, 0.0f, 1.0f) : 0.0f;
        }
        s_sxSeconds += dt;
        s_sxModel.Update(HD::Seyris::ResolveWind(s_sxTable, place), place.map, weather, s_sxSeconds, dt);
        s_sxRunning = true;
        HD::Seyris::WindSample sample = s_sxModel.At({ player.x, player.y, player.z });
        float force = std::sqrt(sample.x * sample.x + sample.y * sample.y);
        if (!std::isfinite(force)) force = 0.0f;
        *strengthScale = Clamp(force / kSxReference, 0.0f, 6.0f);
        *speedScale = Clamp(0.5f + 0.5f * *strengthScale, 0.5f, 2.5f);
        if (s_sxInfoAt < 0.0 || s_sxSeconds - s_sxInfoAt > 0.25) {
            s_sxInfoAt = s_sxSeconds;
            char text[160];
            std::snprintf(text, sizeof(text), "vent Seyris : carte %d, zone %u, meteo %.2f, force x%.2f, rafale %.2f",
                place.map, place.areaCount ? place.areas[0] : 0u, weather, *strengthScale, sample.gust);
            SxStatus(text);
        }
        return true;
    }
#endif
}

void HD::GrassWindRegister() {
    static bool registered = false;
    if (registered) return;
    registered = true;
    s_wind = CVar::Register("hdGrassWind", "HD: 1 = wind in the grass, 0 = off", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_speed = CVar::Register("hdGrassWindSpeed", "HD: grass wind wave speed, yards per second", 1, "3", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_direction = CVar::Register("hdGrassWindDirection", "HD: grass wind heading, degrees", 1, "45", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_strength = CVar::Register("hdGrassWindStrength", "HD: grass wind sway multiplier (1 = default)", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_react = CVar::Register("hdGrassReact", "HD: 1 = grass parts around the player, 0 = off", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    s_radius = CVar::Register("hdGrassReactRadius", "HD: radius of the grass parting, yards", 1, "2", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
}

void HD::GrassWindPrepare() {
    HD::GrassWindRegister();
    ULONGLONG now = GetTickCount64();
    double dt = s_lastTick ? (now - s_lastTick) * 0.001 : 0.0;
    s_lastTick = now;
    if (dt > 0.25) dt = 0.25; // a hitch or a loading screen does not make the grass jump

    bool wind = s_wind ? s_wind->m_intValue != 0 : true;
    float speed = s_speed ? s_speed->m_floatValue : 3.0f;
    float heading = s_direction ? s_direction->m_floatValue : 45.0f;
    float strength = s_strength ? Clamp(s_strength->m_floatValue, 0.0f, 50.0f) : 1.0f;
#ifdef WOWDECOMP_LUMEN
    float sxStrength = 1.0f, sxSpeed = 1.0f;
    if (wind && SeyrisWind(dt, &sxStrength, &sxSpeed)) { strength = Clamp(strength * sxStrength, 0.0f, 50.0f); speed *= sxSpeed; } // lot G1
#endif
    if (!wind) strength = 0.0f;

    float a1 = static_cast<float>(heading * (kTwoPi / 360.0));
    float a2 = static_cast<float>((heading + kCrossAngle) * (kTwoPi / 360.0));
    float k1 = static_cast<float>(kTwoPi / kWavelength);
    float k2 = static_cast<float>(kTwoPi / kCrossWavelength);
    s_dir1[0] = std::cos(a1) * k1;
    s_dir1[1] = std::sin(a1) * k1;
    s_dir2[0] = std::cos(a2) * k2;
    s_dir2[1] = std::sin(a2) * k2;
    s_amp1[0] = std::cos(a1) * kAmplitude * strength;
    s_amp1[1] = std::sin(a1) * kAmplitude * strength;
    s_amp2[0] = std::cos(a2) * kCrossAmplitude * strength;
    s_amp2[1] = std::sin(a2) * kCrossAmplitude * strength;

    // the waves travel downwind: sin(k . p - k v t)
    s_phase1 = std::fmod(s_phase1 - k1 * speed * dt, kTwoPi);
    s_phase2 = std::fmod(s_phase2 - k2 * speed * kCrossSpeed * dt, kTwoPi);

    bool react = s_react ? s_react->m_intValue != 0 : true;
    s_radiusValue = s_radius ? Clamp(s_radius->m_floatValue, 0.1f, 20.0f) : 2.0f;
    s_havePlayer = react && PlayerPosition(&s_player);
    s_push = s_havePlayer ? kPushCentre : 0.0f;
    s_on = (strength > 0.0f || s_push > 0.0f) ? 1.0f : 0.0f;
}

void HD::GrassWindConstants(float chunkOffsetX, float chunkOffsetY, float chunkOffsetZ, float* out) {
    // the chunk's corner in world coordinates (the blade positions are relative to it)
    double ox = static_cast<double>(chunkOffsetX) + CWorldScene::s_activeWorldView.x;
    double oy = static_cast<double>(chunkOffsetY) + CWorldScene::s_activeWorldView.y;
    double oz = static_cast<double>(chunkOffsetZ) + CWorldScene::s_activeWorldView.z;

    // world coordinates go to 17000 yards: the waves' phase at the chunk corner is worked out here in double and
    // wrapped, the shader only adds k . (position in the chunk), so the sway stays smooth and seamless from chunk
    // to chunk (exact same field as k . world position)
    float phase1 = static_cast<float>(std::fmod(ox * s_dir1[0] + oy * s_dir1[1] + s_phase1, kTwoPi));
    float phase2 = static_cast<float>(std::fmod(ox * s_dir2[0] + oy * s_dir2[1] + s_phase2, kTwoPi));

    float* c = out;
    // c53: xy = chunk corner wrapped to 64 yards (per-blade random seed only), z unused, w = wave 1 phase here
    c[0] = static_cast<float>(std::fmod(ox, 64.0));
    c[1] = static_cast<float>(std::fmod(oy, 64.0));
    c[2] = 0.0f;
    c[3] = phase1;
    // c54: xyz = player relative to the chunk corner, w = lean at the player (0 = no parting)
    c[4] = s_havePlayer ? static_cast<float>(s_player.x - ox) : 0.0f;
    c[5] = s_havePlayer ? static_cast<float>(s_player.y - oy) : 0.0f;
    c[6] = s_havePlayer ? static_cast<float>(s_player.z - oz) : 0.0f;
    c[7] = s_push;
    // c55: x = 1 / radius, y = radius, z = 1 / cone height, w = min height
    c[8] = 1.0f / s_radiusValue;
    c[9] = s_radiusValue;
    c[10] = 1.0f / kConeHeight;
    c[11] = kMinHeight;
    // c56: wave 1: xy = direction * amplitude, zw = direction * 2 pi / wavelength
    c[12] = s_amp1[0];
    c[13] = s_amp1[1];
    c[14] = s_dir1[0];
    c[15] = s_dir1[1];
    // c57: wave 2, same
    c[16] = s_amp2[0];
    c[17] = s_amp2[1];
    c[18] = s_dir2[0];
    c[19] = s_dir2[1];
    // c58: x = anchor, y = 1 / (1 - anchor), z = variance, w = distance fade per yard
    c[20] = kAnchor;
    c[21] = 1.0f / (1.0f - kAnchor);
    c[22] = kVariance;
    c[23] = kDistanceFade;
    // c59: x = wave 2 phase here, y = per-blade phase spread, z = lean, w = 1 when wind or parting is on
    c[24] = phase2;
    c[25] = kJitter;
    c[26] = kLean;
    c[27] = s_on;
}
