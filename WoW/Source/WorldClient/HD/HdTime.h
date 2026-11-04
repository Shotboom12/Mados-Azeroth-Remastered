#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDTIME_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDTIME_H

// Waystone HD: client-side time-of-day override (not part of the original client).
//   hdTime   -1 = real server time (default)
//            0 to 24 = force this hour on this screen only, e.g. 12 = noon, 18.5 = 18:30
//   hdSunPath 0 = original sun (north-west, under the horizon before 5:30 and after 21:30)
//             1 = by day (4:50 to 22:10) the sun sits where the world light comes from (north-west, 20 to 37
//                 degrees up), like WoW Forever's sun; the sun rays and the fog glow then match the lighting
//   hdShadowSun 0 = original shadows: the client casts them 5x steeper than the light (always short)
//               1 = shadows cast at the light's real height (20 to 37 degrees: long, like WoW Forever)

#include <cstdint>

namespace DayNight { struct DNInfo; }

namespace HD {
    // Called from CGWorldFrame::UpdateDayNight after the real time has been written into info.
    void ApplyTimeOverride(DayNight::DNInfo* info);

    // Minutes since midnight to use for skybox animations: the override if active, else realMinutes.
    int32_t OverrideMinutes(int32_t realMinutes);

    // hdSunPath 1: put the sun where the world light comes from (DayNight::SetPlanets).
    bool SunFollowsLight();

    // hdShadowSun: how much CShadowQuery::Update steepens the light for the shadow maps (5 = original, 1 = real).
    float ShadowHeightScale();

    // HD: diagnostics/refresh of real-sun cached maps; original short-shadow path is untouched.
    bool ShadowSunCacheFix();
    // hdShadowTexelSnap: 1 = shadow band centres on the shadow map texel grid (no swimming edges), 0 = original.
    bool ShadowTexelSnap();
    // hdShadowCasterFade: 1 = shadow casters no longer cut at the fade distance inside the near bands (no blinking
    // shadows of bushes and trees as the player moves), 0 = original.
    bool ShadowCasterFade();
    bool SmoothFogFeatures();
    float ShadowSunRefreshDegrees();
    float SmoothWeatherBlend(float target, uint32_t now, int32_t mapId);
    void ResetWeatherBlend();
    // HD: a single visual clock; native weather and the server/gameplay clock stay independent.
    bool DayNightSmoothingEnabled();
    float DayNightBandTime(float ticks);
    float DayNightBandTime(float ticks, float nativeRounded);
    float DayNightBlendWeight();
    void ResetDayNight();
    uint64_t DayNightFrameSerial();

    // hdShadowSunMin: with hdShadowSun 1, the lowest sun height (degrees above the horizon) the shadow maps use.
    float ShadowMinElevation();

    // hdSunGlareDim: how much looking at the sun darkens the whole world (DayNight::Update: up to 35% of the map
    // light's ambient and diffuse). 0 = never (default: with hdSunPath 1 the sun is low and often behind swaying
    // leaves, and the darkening flickered over the whole screen), 1 = original.
    float SunGlareDim();

    // hdShadowBillboard: billboarded M2 parts (tree leaf cards) in the shadow maps.
    //   0 = original (they face the camera, so their shadow turns with the camera)
    //   1 = they face the sun during the shadow pass (shadow stays still)
    //   2 = test: they cast no shadow at all
    int32_t ShadowBillboardMode();
}

#endif
