#include "WoW/Source/WorldClient/HD/HdWorldLightingFrame.h"
#include "WoW/Source/WorldClient/HD/HdLightTrace.h"
#include "Engine/Source/Tempest/CImVector.h"
#include "Engine/Source/Tempest/CMath.h"

namespace {
    // DayNight composition and render-constant preparation are main-thread work,
    // just like the DNInfo/CurrentLight data this replaces. No render-thread writes.
    HD::WorldLighting::Composition<>& State() {
        // CurrentLight global constructors may call Forget before other TUs initialize.
        static HD::WorldLighting::Composition<> state;
        return state;
    }

    CImVector Packed(HD::WorldLighting::Rgb255 color) {
        return {static_cast<uint8_t>(CMath::fint_(color.b)),
                static_cast<uint8_t>(CMath::fint_(color.g)),
                static_cast<uint8_t>(CMath::fint_(color.r)), 255};
    }
    void Write(const HD::WorldLighting::LightValue& value, HD::WorldLightOutput out) {
        out.sun = Packed(value.colors[HD::WorldLighting::Sun]);
        out.ambient = Packed(value.colors[HD::WorldLighting::SkyAmbient]);
        for (int i = 0; i < 6; ++i) out.sky[i] = Packed(value.colors[HD::WorldLighting::Sky0+i]);
        for (int i = 0; i < 5; ++i) out.clouds[i] = Packed(value.colors[HD::WorldLighting::Orb+i]);
    }
    HD::WorldLighting::LightValue FromPacked(HD::WorldLightInput input) {
        HD::WorldLighting::LightValue value;
        value.colors[HD::WorldLighting::Sun] = {float(input.sun.r), float(input.sun.g), float(input.sun.b)};
        for (int i = HD::WorldLighting::SkyAmbient; i <= HD::WorldLighting::GroundAmbient; ++i)
            value.colors[i] = {float(input.ambient.r), float(input.ambient.g), float(input.ambient.b)};
        for (int i = 0; i < 6; ++i)
            value.colors[HD::WorldLighting::Sky0+i] = {float(input.sky[i].r), float(input.sky[i].g), float(input.sky[i].b)};
        for (int i = 0; i < 5; ++i)
            value.colors[HD::WorldLighting::Orb+i] = {float(input.clouds[i].r), float(input.clouds[i].g), float(input.clouds[i].b)};
        return value;
    }
    void TracePublication() {
        if (!HD::LightTrace::Active()) return;
        HD::LightTrace::Set("world.composition.valid", State().published.valid ? 1.f : 0.f);
        HD::LightTrace::SetRgb("world.composition.horizonRatio", State().published.horizon);
        HD::LightTrace::SetRgb("world.composition.groundRatio", State().published.ground);
    }
}

HD::WorldLightUpdate::WorldLightUpdate(float time) : owner(State().Begin(WorldLightValueAt(nullptr, time))) {}
HD::WorldLightUpdate::~WorldLightUpdate() {
    Finish();
}
void HD::WorldLightUpdate::Finish() {
    if (owner) { State().End(); TracePublication(); owner = false; }
}

void HD::LoadWorldLightFor(const void* key, const LightParamsRec* params, float time,
                          HD::WorldLightOutput out) {
    const auto value = WorldLightValueAt(params, time);
    Write(value, out);
    if (State().Active()) State().Set(key, value);
}

void HD::BlendWorldLightFor(const void* dst, const void* src, float weight,
                           HD::WorldLightOutput out, HD::WorldLightInput input) {
    const auto packedDst = FromPacked({out.sun, out.ambient, out.sky, out.clouds});
    const auto packedSrc = FromPacked(input);
    if (!State().Active()) {
        // Non-world DTO blends (e.g. tools) still use the same For Ever math;
        // no state is published, and no legacy DB colour is consulted.
        Write(WorldLighting::Blend(packedDst, packedSrc, weight), out);
        return;
    }
    // AR1: a light not in the composition (copied by value, built outside Load) joins it
    // with the bytes it holds, so one odd light never degrades the whole frame.
    if (!State().Get(dst)) State().Set(dst, packedDst);
    if (!State().Get(src)) State().Set(src, packedSrc);
    if (State().BlendInto(dst, src, weight)) Write(*State().Get(dst), out);
    else Write(WorldLighting::Blend(packedDst, packedSrc, weight), out);
}

void HD::CopyWorldLightFor(const void* dst, const void* src) {
    if (State().Active()) State().Copy(dst, src);
}

void HD::ForgetWorldLightFor(const void* key) { State().Forget(key); }

void HD::PublishWorldLightFor(const void* key, HD::WorldLightOutput out) {
    State().Publish(key, FromPacked({out.sun, out.ambient, out.sky, out.clouds}));
    Write(State().published.value, out);
    TracePublication();
}

uint64_t HD::WorldLightRevision() { return State().published.revision; }

bool HD::CurrentWorldHemisphere(float* horizon, float* ground) {
    if (!horizon || !ground) return false;
    if (!State().published.ready) {
        WorldLighting::HemisphereRatios(WorldLightValueAt(nullptr, 0), horizon, ground);
        return false;
    }
    for (int i = 0; i < 3; ++i) {
        horizon[i] = State().published.horizon[i];
        ground[i] = State().published.ground[i];
    }
    return State().published.valid;
}
