#pragma once

// A single composition for world sunlight and all three ambient directions.
// Keys identify existing CurrentLight objects without changing their ABI/layout.
// No allocation, DB lookup, spatial walk or wall-clock cache in this model.
#include "WoW/Source/WorldClient/HD/ForeverWorldLighting.h"
#include <cstddef>
#include <cstdint>

namespace HD::WorldLighting {
struct LightValue { Rgb255 colors[ChannelCount]; };

inline bool Valid(const LightValue& value) {
    for (const auto& c : value.colors)
        for (float v : {c.r, c.g, c.b})
            if (!std::isfinite(v) || v < 0 || v > 255) return false;
    return true;
}

inline LightValue Blend(const LightValue& a, const LightValue& b, float weight) {
    LightValue value;
    const float t = std::isfinite(weight) ? std::clamp(weight, 0.0f, 1.0f) : 0.0f;
    if (t == 0) return a;
    if (t == 1) return b;
    auto mixed = [&](float from, float to) { return std::clamp(from + (to-from)*t, 0.0f, 255.0f); };
    for (int i = 0; i < ChannelCount; ++i) {
        value.colors[i].r = mixed(a.colors[i].r, b.colors[i].r);
        value.colors[i].g = mixed(a.colors[i].g, b.colors[i].g);
        value.colors[i].b = mixed(a.colors[i].b, b.colors[i].b);
    }
    return value;
}

inline void HemisphereRatios(const LightValue& value, float* horizon, float* ground) {
    const auto& sky = value.colors[SkyAmbient];
    const auto& h = value.colors[HorizonAmbient];
    const auto& g = value.colors[GroundAmbient];
    const float s[] = {sky.r / 255.0f, sky.g / 255.0f, sky.b / 255.0f};
    const float a[] = {h.r / 255.0f, h.g / 255.0f, h.b / 255.0f};
    const float b[] = {g.r / 255.0f, g.g / 255.0f, g.b / 255.0f};
    for (int i = 0; i < 3; ++i) {
        horizon[i] = DayNightMath::AmbientRatio(s[i], a[i]);
        ground[i] = DayNightMath::AmbientRatio(s[i], b[i]);
    }
}

template<size_t Capacity = 32> class Composition {
    struct Entry { const void* key = nullptr; LightValue value{}; };
    Entry entries[Capacity];
    size_t count = 0;
    bool active = false, degraded = false, publishedThisFrame = false;
    LightValue fallback{};
    Entry* Find(const void* key) {
        for (size_t i = 0; i < count; ++i) if (entries[i].key == key) return &entries[i];
        return nullptr;
    }
public:
    struct Published {
        LightValue value{};
        float horizon[3]{1,1,1}, ground[3]{1,1,1};
        uint64_t revision = 0;
        bool ready = false, valid = false;
    } published;

    bool Active() const { return active; }
    bool Degraded() const { return degraded; }
    bool Begin(const LightValue& defaultValue) {
        if (active) { degraded = true; return false; }
        count = 0; active = true; degraded = false; publishedThisFrame = false;
        fallback = defaultValue;
        if (!Valid(fallback)) { fallback = {}; degraded = true; }
        return true;
    }
    bool Set(const void* key, const LightValue& value) {
        if (!active) return false;
        if (!key || !Valid(value)) { degraded = true; return false; }
        Entry* entry = Find(key);
        if (!entry) {
            if (count >= Capacity) { degraded = true; return false; }
            entry = &entries[count++]; entry->key = key;
        }
        entry->value = value;
        return true;
    }
    const LightValue* Get(const void* key) {
        if (!active) return nullptr;
        const auto* entry = Find(key);
        return entry ? &entry->value : nullptr;
    }
    void Forget(const void* key) {
        if (!active) return;
        for (size_t i = 0; i < count; ++i) if (entries[i].key == key) {
            entries[i] = entries[--count];
            return;
        }
    }
    bool Copy(const void* dst, const void* src) {
        if (!active) return false;
        const auto* entry = Find(src);
        // Unknown source (a light copied before it was loaded): dst no longer holds a
        // composed value. Its packed bytes are re-read by the next blend (AR1).
        if (!entry) { Forget(dst); return false; }
        const auto value = entry->value;
        return Set(dst, value);
    }
    bool BlendInto(const void* dst, const void* src, float weight) {
        if (!active) return false;
        const auto* a = Find(dst);
        const auto* b = Find(src);
        if (!a || !b || !std::isfinite(weight)) { degraded = true; return false; }
        const auto value = Blend(a->value, b->value, weight);
        return Set(dst, value);
    }
    // `current` = the packed value the light really holds. If this frame's composition
    // failed, the world keeps those colours (no hemisphere) instead of jumping to the
    // project default profile (AR1: no global colour switch on an internal error).
    void Publish(const void* key, const LightValue& current) {
        if (!active) return;
        const auto* entry = Find(key);
        published.valid = entry && !degraded;
        published.value = published.valid ? entry->value : (Valid(current) ? current : fallback);
        HemisphereRatios(published.value, published.horizon, published.ground);
        ++published.revision;
        published.ready = publishedThisFrame = true;
    }
    void End() {
        if (!active) return;
        if (!publishedThisFrame) Publish(nullptr, fallback);
        active = false;
    }
};
}
