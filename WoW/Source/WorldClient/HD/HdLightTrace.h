#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDLIGHTTRACE_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDLIGHTTRACE_H

// Claude LT1 (2026-11-16): the lighting flight recorder. Measure only: it changes nothing on screen.
//   /console hdLightTrace N   records the next N seconds (1..120) to Logs\HdLightTrace-<date>-<time>.txt, then goes back to 0.
//   /console hdLightTraceMark 1 (any new value) writes a MARK line: type it the moment something looks wrong.
// One "F" line per frame with every value the producers set this frame (key=value), "E" lines for events (a chunk's
// ground lights changed, a console variable changed, a status text changed). tools: outils-lumiere\analyser_trace.py.
// Producers: DayNight (native sun/ambient/fog/zone lights), HdTerrain (For Ever hemisphere and the ground constants),
// HdLights (the frame's lights, each ground draw's choice), Lumen (LvClient: what Lumenveil received).

#include <cstdint>

namespace HD::LightTrace {
    // Cheap test for producers: false unless a recording runs.
    bool Active();
    // Once per frame, first (HD::ApplyTimeOverride): ends the previous frame's line, starts this one.
    void BeginFrame();
    // A value of this frame (the last one set under a key wins).
    void Set(const char* key, float value);
    void SetRgb(const char* key, const float* rgb);      // key.r key.g key.b
    void SetColor(const char* key, uint32_t argb);       // 0xAARRGGBB -> key.r key.g key.b (0..1)
    // A line of its own, in the frame being recorded.
    void Event(const char* kind, const char* text);
    // A text value: an event only when it changed since the last frame it was given (status strings).
    void Text(const char* key, const char* text);
    // Frame counter of the recording (0 when off).
    uint32_t Frame();
}

#endif
