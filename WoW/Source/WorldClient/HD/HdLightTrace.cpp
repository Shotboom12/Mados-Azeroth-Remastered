#include "WoW/Source/WorldClient/HD/HdLightTrace.h"
#include <atomic>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <mutex>
#include <string>
#include <unordered_map>
#include <vector>
#include <windows.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"

// Claude LT1 (2026-11-16): see HdLightTrace.h.
void CVarForEachRegistered(void (*callback)(const char* name, const char* value, void* arg), void* arg); // ConsoleVar.cpp

namespace {
    CVar* s_seconds = nullptr;
    CVar* s_mark = nullptr;
    std::atomic<bool> s_active{false};
    std::mutex s_lock;
    FILE* s_file = nullptr;
    std::string s_line;            // this frame's values
    std::string s_events;          // this frame's events
    uint32_t s_frame = 0;
    LARGE_INTEGER s_start{}, s_freq{};
    double s_until = 0.0;
    std::string s_markValue;
    std::unordered_map<std::string, std::string> s_texts;   // Text(): last text per key
    std::unordered_map<std::string, std::string> s_cvars;   // hd* console variables: last value
    uint32_t s_lastCvarFrame = 0;

    double Now() {
        LARGE_INTEGER t;
        QueryPerformanceCounter(&t);
        return double(t.QuadPart - s_start.QuadPart) / double(s_freq.QuadPart);
    }

    void Register() {
        if (s_seconds) return;
        s_seconds = CVar::Register("hdLightTrace", "HD (Claude LT1): record every light value of the next N seconds (1..120) to Logs\\HdLightTrace-*.txt, then back to 0. Measure only", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_mark = CVar::Register("hdLightTraceMark", "HD (Claude LT1): any new value writes a MARK line in the running light trace (type it when something looks wrong)", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    bool HdName(const char* name) {
        return name && (name[0] == 'h' || name[0] == 'H') && (name[1] == 'd' || name[1] == 'D');
    }

    void CvarSeen(const char* name, const char* value, void*) {
        if (!HdName(name)) return;
        std::string v = value ? value : "";
        auto it = s_cvars.find(name);
        if (it == s_cvars.end()) { s_cvars.emplace(name, v); return; }   // the first pass only learns
        if (it->second == v) return;
        it->second = v;
        char text[600];
        std::snprintf(text, sizeof text, "%s = %s", name, v.c_str());
        s_events += "E " + std::to_string(s_frame) + " cvar " + text + "\n";
    }

    void Open() {
        QueryPerformanceFrequency(&s_freq);
        QueryPerformanceCounter(&s_start);
        CreateDirectoryA("Logs", nullptr);
        SYSTEMTIME st;
        GetLocalTime(&st);
        char path[MAX_PATH];
        std::snprintf(path, sizeof path, "Logs\\HdLightTrace-%04d%02d%02d-%02d%02d%02d.txt", st.wYear, st.wMonth, st.wDay, st.wHour, st.wMinute, st.wSecond);
        s_file = std::fopen(path, "w");
        if (!s_file) return;
        int seconds = s_seconds->m_intValue < 1 ? 1 : (s_seconds->m_intValue > 120 ? 120 : s_seconds->m_intValue);
        s_until = double(seconds);
        s_frame = 0;
        s_line.clear();
        s_events.clear();
        s_texts.clear();
        s_cvars.clear();
        s_lastCvarFrame = 0;
        CVarForEachRegistered(CvarSeen, nullptr);   // learn every hd* value at the start
        std::string all = "# HdLightTrace LT1: F <frame> t=<s> key=value ... | E <frame> <kind> <text>\n# start values:";
        for (const auto& kv : s_cvars) all += " " + kv.first + "=" + kv.second;
        all += "\n";
        std::fputs(all.c_str(), s_file);
        s_markValue = s_mark && s_mark->m_stringValue.m_str ? s_mark->m_stringValue.m_str : "";
        s_active = true;
    }

    void Close(const char* why) {
        s_active = false;
        if (s_file) {
            std::fprintf(s_file, "# end (%s) after %u frames\n", why, s_frame);
            std::fclose(s_file);
            s_file = nullptr;
        }
        if (s_seconds && s_seconds->m_intValue != 0) s_seconds->Set("0", true, false, false, false);
    }

    void Flush() {
        if (!s_file) return;
        if (!s_line.empty()) { s_line += "\n"; std::fputs(s_line.c_str(), s_file); }
        if (!s_events.empty()) std::fputs(s_events.c_str(), s_file);
        s_line.clear();
        s_events.clear();
    }

    void Append(const char* key, float value) {
        char text[96];
        if (std::isfinite(value)) std::snprintf(text, sizeof text, " %s=%.6g", key, value);
        else std::snprintf(text, sizeof text, " %s=nan", key);
        s_line += text;
    }
}

bool HD::LightTrace::Active() { return s_active.load(std::memory_order_relaxed); }

uint32_t HD::LightTrace::Frame() { return s_active ? s_frame : 0; }

void HD::LightTrace::BeginFrame() {
    Register();
    std::lock_guard<std::mutex> guard(s_lock);
    if (!s_active) {
        if (s_seconds->m_intValue > 0) Open();
        if (!s_active) return;
    } else {
        Flush();
        if (s_seconds->m_intValue <= 0) { Close("stopped"); return; }
        if (Now() >= s_until) { Close("time"); return; }
    }
    ++s_frame;
    char head[64];
    std::snprintf(head, sizeof head, "F %u t=%.4f", s_frame, Now());
    s_line = head;
    // MARK, and the hd* console variables every 10 frames (what Max typed, the status texts)
    const char* mark = s_mark && s_mark->m_stringValue.m_str ? s_mark->m_stringValue.m_str : "";
    if (s_markValue != mark) {
        s_markValue = mark;
        s_events += "E " + std::to_string(s_frame) + " MARK " + s_markValue + "\n";
    }
    if (s_frame - s_lastCvarFrame >= 10) {
        s_lastCvarFrame = s_frame;
        CVarForEachRegistered(CvarSeen, nullptr);
    }
    if ((s_frame & 63) == 0 && s_file) std::fflush(s_file);
}

void HD::LightTrace::Set(const char* key, float value) {
    if (!Active() || !key) return;
    std::lock_guard<std::mutex> guard(s_lock);
    if (s_active) Append(key, value);
}

void HD::LightTrace::SetRgb(const char* key, const float* rgb) {
    if (!Active() || !key || !rgb) return;
    std::lock_guard<std::mutex> guard(s_lock);
    if (!s_active) return;
    char k[80];
    static const char* c[3] = {"r", "g", "b"};
    for (int i = 0; i < 3; i++) { std::snprintf(k, sizeof k, "%s.%s", key, c[i]); Append(k, rgb[i]); }
}

void HD::LightTrace::SetColor(const char* key, uint32_t argb) {
    if (!Active()) return;
    const float rgb[3] = {float((argb >> 16) & 255u) / 255.0f, float((argb >> 8) & 255u) / 255.0f, float(argb & 255u) / 255.0f};
    SetRgb(key, rgb);
}

void HD::LightTrace::Event(const char* kind, const char* text) {
    if (!Active()) return;
    std::lock_guard<std::mutex> guard(s_lock);
    if (!s_active) return;
    s_events += "E " + std::to_string(s_frame) + " " + (kind ? kind : "?") + " " + (text ? text : "") + "\n";
}

void HD::LightTrace::Text(const char* key, const char* text) {
    if (!Active() || !key) return;
    std::lock_guard<std::mutex> guard(s_lock);
    if (!s_active) return;
    std::string& last = s_texts[key];
    const char* t = text ? text : "";
    if (last == t) return;
    last = t;
    s_events += "E " + std::to_string(s_frame) + " text " + key + " = " + t + "\n";
}
