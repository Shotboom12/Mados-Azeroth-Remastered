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

    // hdShadowBillboard: billboarded M2 parts (tree leaf cards) in the shadow maps.
    //   0 = original (they face the camera, so their shadow turns with the camera)
    //   1 = they face the sun during the shadow pass (shadow stays still)
    //   2 = test: they cast no shadow at all
    int32_t ShadowBillboardMode();
}

#endif
