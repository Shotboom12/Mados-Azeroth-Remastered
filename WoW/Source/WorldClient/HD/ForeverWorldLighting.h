#pragma once

// World-lighting profile: one colour track per channel plus For Ever's intensity. No DB, CVar or GPU dependency.
// RGB stays in the encoded 0..255 domain of the shaders (NOT linear RGB). Intensity is For Ever's linear
// value, converted once to an encoded multiplier when sampling. The tracks come from For Ever's settings and
// from the converted tables (ar_world_light.txt), see HdForever.cpp.
#include "WoW/Source/WorldClient/HD/HdDayNightMath.h"
#include <algorithm>
#include <cmath>
#include <cstdint>

namespace HD::WorldLighting {
constexpr int MaxKeys = 32;

struct ColorTrack {
    int32_t count = 0;
    int32_t time[MaxKeys]{};
    uint32_t color[MaxKeys]{}; // RRGGBB
};

struct IntensityTrack {
    int32_t count = 0;
    int32_t time[MaxKeys]{};
    float value[MaxKeys]{}; // linear intensity, dimensionless
};

struct Rgb255 { float r = 0, g = 0, b = 0; };
// Sky0..Sky5 are the six sky/fog colour tracks (bands 2..7); Orb..CloudReserved are bands 9..13.
enum Channel : int { Sun, SkyAmbient, HorizonAmbient, GroundAmbient,
                     Sky0, Sky1, Sky2, Sky3, Sky4, Sky5,
                     Orb, CloudSun, CloudShade, CloudEmission, CloudReserved, ChannelCount };

struct Profile {
    int32_t setting = 0; // For Ever setting, 0 = converted tracks only
    ColorTrack colors[ChannelCount];
    IntensityTrack intensity;
};

inline float TimeOfDay(float time) {
    if (time >= 0 && time < 2880) return time;
    if (!std::isfinite(time)) return 0;
    double wrapped = std::fmod(static_cast<double>(time), 2880.0);
    if (wrapped < 0) wrapped += 2880.0;
    const float result = static_cast<float>(wrapped);
    return result < 2880 ? result : 0;
}

inline Rgb255 Sample(const ColorTrack& track, float time, bool smooth) {
    if (track.count < 1 || track.count > MaxKeys) return {};
    int32_t a, b; float t;
    DayNightMath::Range(track.time, track.count, TimeOfDay(time), a, t, b, smooth);
    const uint32_t x = track.color[a], y = track.color[b];
    auto channel = [&](int shift) {
        const int from = (x >> shift) & 255, to = (y >> shift) & 255;
        return (to - from) * t + from;
    };
    return {channel(16), channel(8), channel(0)};
}

inline float IntensityScale(const Profile& p, float time, bool smooth, int mode) {
    if (mode == 0 || !p.intensity.count) return 1;
    int32_t a, b; float t;
    DayNightMath::Range(p.intensity.time, p.intensity.count, TimeOfDay(time), a, t, b, smooth);
    float v = p.intensity.value[a] + (p.intensity.value[b] - p.intensity.value[a]) * t;
    if (!(v > 0) || !std::isfinite(v)) return 1;
    if (mode == 2 && v > 1) v = 1;
    return std::pow(v, 1.0f / 2.2f);
}

inline Rgb255 Unscaled(const Profile& p, Channel channel, float time, bool smooth) {
    if (channel < Sun || channel >= ChannelCount) return {};
    Rgb255 rgb = Sample(p.colors[channel], time, smooth);
    // Black horizon or ground ambient inherits the sky ambient (no hemisphere), as before AR1.
    if ((channel == HorizonAmbient || channel == GroundAmbient) && rgb.r + rgb.g + rgb.b <= 0)
        rgb = Sample(p.colors[SkyAmbient], time, smooth);
    return rgb;
}

inline Rgb255 WithScale(Rgb255 rgb, float scale) {
    auto clamped = [&](float v) { return std::clamp(v * scale, 0.0f, 255.0f); };
    return {clamped(rgb.r), clamped(rgb.g), clamped(rgb.b)};
}

inline Rgb255 Sample(const Profile& p, Channel channel, float time, bool smooth, int intensityMode) {
    // Intensity scales the sun and the ambients only (bands 0/1 and the hemisphere), as INT1 did.
    return WithScale(Unscaled(p, channel, time, smooth),
                     channel < Sky0 ? IntensityScale(p, time, smooth, intensityMode) : 1.0f);
}

// Neutral data if no profile can be found at all (data files missing). Reported as ERROR by foreverWorldInfo.
inline Profile EmergencyProfile() {
    Profile p;
    for (int c = 0; c < ChannelCount; ++c) {
        p.colors[c].count = 1;
        p.colors[c].color[0] = c == Sun ? 0xffffffu : 0x808080u;
    }
    return p;
}
}
