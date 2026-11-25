#include "WoW/Source/WorldClient/HD/HdTime.h"
#include "WoW/Source/WorldClient/HD/HdDayNightMath.h"
#include "WoW/Source/WorldClient/HD/HdForever.h"
#include "WoW/Source/WorldClient/HD/ForeverWorldLighting.h"
#include "WoW/Source/WorldClient/HD/HdWorldLightingFrame.h"
#include "WoW/Source/WorldClient/HD/HdArLight.h"
#include "WoW/Source/DB/Rec/LightIntBandRec.h"
#include <cstdio>
#include <cstdlib>
#include <cmath>
#include <cstring>
#include <unordered_map>
#include <vector>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Tempest/CImVector.h"
#include "Engine/Source/Tempest/CMath.h"
#include "WoW/Source/DB/Rec/LightParamsRec.h"
#include "WoW/Source/DB/Rec/LightRec.h"

namespace {
    // HD records get IDs above every real LightParams ID: kMarker + index into s_records.
    const int32_t kMarker = 0x40000000;
    const int32_t kMaxKeys = 32;
    const int32_t kBands = 20; // HD: 0-17 the 3.3.5 bands, 18 horizon ambient, 19 ground ambient (hd_forever_ambient.txt)

    struct Band {
        int32_t count = 0;
        int32_t time[kMaxKeys];
        uint32_t color[kMaxKeys];
    };

    struct Setting {
        Band bands[kBands];
    };

    struct LightEntry {
        int32_t map;
        int32_t slots[8];
    };

    // A light slot For Ever has a setting for: its LightParams (skybox, glow, water alpha, float bands) plus one
    // world profile = For Ever's tracks, and for each band For Ever leaves empty the converted track of the
    // original LightParams (ar_world_light.txt). Same colours as before AR1, band by band.
    struct HdRecord {
        LightParamsRec rec;
        int32_t realId;
        HD::WorldLighting::Profile world;
    };

    // HD: INT1 - Forever's light intensity per setting (LightData column 59, hd_forever_intensity.txt)
    struct IntensityKeys {
        int32_t count = 0;
        int32_t time[kMaxKeys];
        float value[kMaxKeys];
    };

    std::unordered_map<int32_t, IntensityKeys> s_intensity;

    // HD: Forever fog layers (hdFog), one key per time of day
    struct FogKey {
        int32_t time;
        int32_t count;
        HD::ForeverFogLayer layers[3];
    };

    std::unordered_map<int32_t, std::vector<FogKey>> s_fog;

    // HD: Forever colour grading (hdGrade), one LUT per time of day
    struct GradeKey {
        int32_t time;
        int32_t lut;
    };

    std::unordered_map<int32_t, std::vector<GradeKey>> s_grading;

    CVar* s_info = nullptr;
    CVar* s_intensityVar = nullptr; // HD: INT1 hdForeverIntensity
    CVar* s_nightSpec = nullptr; // HD: hdForeverNightSpec (lot NUIT1)
    bool s_triedLoad = false;
    std::unordered_map<int32_t, LightEntry> s_lights;
    std::unordered_map<int32_t, Setting*> s_settings;
    std::unordered_map<uint64_t, HdRecord*> s_recordByPair; // (original LightParams id, For Ever setting)
    std::vector<HdRecord*> s_records;
    // LightParams For Ever has no setting for: its converted tracks (ar_world_light.txt), one profile per id.
    std::unordered_map<int32_t, HD::WorldLighting::Profile> s_baseProfiles;
    // Emergency only (ar_world_light.txt missing or an id it does not have): the "D" profile of
    // forever_world_policy.txt, else neutral grey.
    const HD::WorldLighting::Profile s_worldEmergency = HD::WorldLighting::EmergencyProfile();
    HD::WorldLighting::Profile s_worldDefaultProfile;
    const HD::WorldLighting::Profile* s_worldDefault = nullptr;
    int32_t s_worldDefaultId = 0;
    int s_worldIntensityMode = 2;
    CVar* s_worldInfo = nullptr;
    bool s_worldPolicyValid = false;
    uint32_t s_worldFallbacks = 0;

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_intensityVar = CVar::Register("hdForeverIntensity", "HD: compatibility fog intensity: 0 off, 1 authored, 2 darkening only. World intensity uses its own catalogue policy", 1, "2", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_info = CVar::Register("hdForeverInfo", "HD: what hdForever loaded (read only)", 0, "not loaded yet", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_nightSpec = CVar::Register("hdForeverNightSpec", "HD: 0 = fade out night specular, 1 = use For Ever moon specular", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_worldInfo = CVar::Register("foreverWorldInfo", "For Ever world-light status (read only)", 0, "not loaded", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        if (s_worldInfo) s_worldInfo->SetReadOnly(true);
    }

    void SetInfo(const char* text) {
        if (s_info) {
            s_info->Set(text, true, false, false, false);
        }
    }

    FILE* OpenData(const char* name) {
        char path[260];
        snprintf(path, sizeof(path), "forever_data\\%s", name);
        FILE* file = fopen(path, "rb");
        if (file) return file;
        snprintf(path, sizeof(path), "..\\..\\forever_data\\%s", name);
        return fopen(path, "rb");
    }

    void WorldInfo() {
        if (!s_worldInfo) return;
        char text[260];
        std::snprintf(text, sizeof text,
            "%s: %u For Ever records, %u converted profiles, emergency default %d%s, %u emergency uses",
            s_worldPolicyValid ? "For Ever + Azeroth Remastered" : "ERROR forever_world_policy.txt",
            static_cast<unsigned>(s_records.size()), static_cast<unsigned>(s_baseProfiles.size()),
            int(s_worldDefaultId), s_worldDefault ? "" : " (missing)", s_worldFallbacks);
        s_worldInfo->SetReadOnly(false);
        s_worldInfo->Set(text, true, false, false, false);
        s_worldInfo->SetReadOnly(true);
    }

    HD::WorldLighting::ColorTrack TrackOf(const Band& b) {
        HD::WorldLighting::ColorTrack t;
        t.count = b.count;
        for (int32_t i = 0; i < b.count && i < HD::WorldLighting::MaxKeys; ++i) { t.time[i] = b.time[i]; t.color[i] = b.color[i]; }
        return t;
    }

    // A converted colour band (ar_world_light.txt), read as the client read LightIntBand: no key = black.
    HD::WorldLighting::ColorTrack ConvertedTrack(int32_t paramsId, int32_t band) {
        HD::WorldLighting::ColorTrack t;
        const LightIntBandRec* rec = HD::ArLight::IntBand(paramsId, band);
        t.count = rec && rec->m_num > 0 ? rec->m_num : 1;
        if (!rec || rec->m_num <= 0) return t; // one black key
        for (int32_t i = 0; i < rec->m_num; ++i) {
            t.time[i] = rec->m_time[i];
            t.color[i] = static_cast<uint32_t>(rec->m_data[i]) & 0xFFFFFFu;
        }
        return t;
    }

    // Profile channel of a colour band: 0 sun, 1 ambient, 2-7 sky/fog colours, 9-13 sun/moon/cloud colours.
    HD::WorldLighting::Channel ChannelOf(int32_t band) {
        using namespace HD::WorldLighting;
        return static_cast<Channel>(band < 2 ? band : band < 8 ? Sky0 + band - 2 : Orb + band - 9);
    }

    // For Ever's track where its setting has keys, else the converted track of paramsId. setting null: all converted.
    HD::WorldLighting::Profile MakeProfile(int32_t paramsId, const Setting* setting, int32_t foreverId) {
        using namespace HD::WorldLighting;
        Profile p;
        p.setting = foreverId;
        for (int32_t band = 0; band < 14; ++band) {
            if (band == 8) continue;
            p.colors[ChannelOf(band)] = setting && setting->bands[band].count ? TrackOf(setting->bands[band]) : ConvertedTrack(paramsId, band);
        }
        // Horizon and ground ambient: For Ever's (hd_forever_ambient.txt), else the sky ambient (no hemisphere).
        p.colors[HorizonAmbient] = setting && setting->bands[18].count ? TrackOf(setting->bands[18]) : p.colors[SkyAmbient];
        p.colors[GroundAmbient] = setting && setting->bands[19].count ? TrackOf(setting->bands[19]) : p.colors[SkyAmbient];
        auto intensity = setting ? s_intensity.find(foreverId) : s_intensity.end();
        if (intensity != s_intensity.end()) {
            const auto& k = intensity->second;
            p.intensity.count = k.count;
            for (int32_t i = 0; i < k.count && i < MaxKeys; ++i) { p.intensity.time[i] = k.time[i]; p.intensity.value[i] = k.value[i]; }
        }
        return p;
    }

    // forever_world_policy.txt: V 3, D <emergency setting>, I <intensity policy>.
    void LoadWorldPolicy() {
        FILE* file = OpenData("forever_world_policy.txt");
        bool version = false, haveDefault = false, haveIntensity = false, valid = true;
        if (file) {
            char line[256];
            while (std::fgets(line, sizeof line, file)) {
                char kind = 0, extra = 0; int value = 0;
                char* p = line;
                while (*p == ' ' || *p == '\t') ++p;
                if (!*p || *p == '#' || *p == '\r' || *p == '\n') continue;
                if (std::sscanf(p, " %c %d %c", &kind, &value, &extra) != 2) { valid = false; continue; }
                if (kind == 'V' && value == 3 && !version) version = true;
                else if (kind == 'D' && value > 0 && !haveDefault) { s_worldDefaultId = value; haveDefault = true; }
                else if (kind == 'I' && value >= 0 && value <= 2 && !haveIntensity) { s_worldIntensityMode = value; haveIntensity = true; }
                else valid = false;
            }
            if (std::ferror(file)) valid = false;
            std::fclose(file);
        }
        s_worldPolicyValid = file && valid && version && haveDefault && haveIntensity;
        const auto source = s_settings.find(s_worldDefaultId);
        if (s_worldPolicyValid && source != s_settings.end()) {
            s_worldDefaultProfile = MakeProfile(0, source->second, s_worldDefaultId);
            s_worldDefault = &s_worldDefaultProfile;
        }
        WorldInfo();
    }

    // "L light map slot0..slot7" and "B setting band count time colour ..." lines (hd_forever_light.txt,
    // hd_forever_ambient.txt). Returns the number of lines skipped.
    int32_t LoadBands(FILE* file) {
        static char line[8192];
        int32_t badLines = 0;
        while (fgets(line, sizeof(line), file)) {
            char* p = line;
            if (*p == 'L') {
                LightEntry entry;
                int32_t id = strtol(p + 1, &p, 10);
                entry.map = strtol(p, &p, 10);
                for (int32_t i = 0; i < 8; i++) entry.slots[i] = strtol(p, &p, 10);
                s_lights[id] = entry;
            } else if (*p == 'B') {
                int32_t setting = strtol(p + 1, &p, 10);
                int32_t band = strtol(p, &p, 10);
                int32_t count = strtol(p, &p, 10);
                if (band < 0 || band >= kBands || count < 1 || count > kMaxKeys) {
                    badLines++;
                    continue;
                }
                Setting*& s = s_settings[setting];
                if (!s) s = new Setting();
                Band& b = s->bands[band];
                b.count = count;
                for (int32_t i = 0; i < count; i++) {
                    b.time[i] = strtol(p, &p, 10);
                    b.color[i] = static_cast<uint32_t>(strtoul(p, &p, 16));
                }
            }
        }
        fclose(file);
        return badLines;
    }

    void SetColor(float* dst, uint32_t rgb) {
        dst[0] = ((rgb >> 16) & 0xFF) * (1.0f / 255.0f);
        dst[1] = ((rgb >> 8) & 0xFF) * (1.0f / 255.0f);
        dst[2] = (rgb & 0xFF) * (1.0f / 255.0f);
    }

    // forever_data\hd_forever_fog.txt (V 2): "F setting time layer flags diffuse emissive shadow start density
    // shadowMul topRate topHeight bottomRate bottomHeight intensity g strength exponent"
    int32_t LoadFog() {
        static const char* paths[] = {
            "forever_data\\hd_forever_fog.txt",
            "..\\..\\forever_data\\hd_forever_fog.txt",
        };
        FILE* file = nullptr;
        for (const char* path : paths) {
            file = fopen(path, "rb");
            if (file) break;
        }
        if (!file) return -1;

        char line[512];
        int32_t layers = 0;
        while (fgets(line, sizeof(line), file)) {
            if (line[0] != 'F') continue;
            char* p = line + 1;
            int32_t setting = strtol(p, &p, 10);
            int32_t time = strtol(p, &p, 10);
            int32_t index = strtol(p, &p, 10);
            if (index < 0 || index > 2) continue;
            HD::ForeverFogLayer layer;
            layer.flags = strtol(p, &p, 10);
            SetColor(layer.diffuse, static_cast<uint32_t>(strtoul(p, &p, 16)));
            SetColor(layer.emissive, static_cast<uint32_t>(strtoul(p, &p, 16)));
            SetColor(layer.shadow, static_cast<uint32_t>(strtoul(p, &p, 16)));
            layer.start = strtof(p, &p);
            layer.density = strtof(p, &p);
            layer.shadowMul = strtof(p, &p);
            layer.topRate = strtof(p, &p);
            layer.topHeight = strtof(p, &p);
            layer.bottomRate = strtof(p, &p);
            layer.bottomHeight = strtof(p, &p);
            layer.intensity = strtof(p, &p);
            layer.g = strtof(p, &p);
            layer.strength = strtof(p, &p);
            layer.exponent = strtof(p, &p);

            std::vector<FogKey>& keys = s_fog[setting];
            if (keys.empty() || keys.back().time != time) {
                FogKey key;
                memset(&key, 0, sizeof(key));
                key.time = time;
                keys.push_back(key);
            }
            FogKey& key = keys.back();
            key.layers[index] = layer;
            if (key.count < index + 1) key.count = index + 1;
            layers++;
        }
        fclose(file);
        return layers;
    }

    // forever_data\hd_forever_grading.txt: "G setting time lut"
    int32_t LoadGrading() {
        static const char* paths[] = {
            "forever_data\\hd_forever_grading.txt",
            "..\\..\\forever_data\\hd_forever_grading.txt",
        };
        FILE* file = nullptr;
        for (const char* path : paths) {
            file = fopen(path, "rb");
            if (file) break;
        }
        if (!file) return -1;

        char line[128];
        int32_t count = 0;
        while (fgets(line, sizeof(line), file)) {
            if (line[0] != 'G') continue;
            char* p = line + 1;
            GradeKey key;
            int32_t setting = strtol(p, &p, 10);
            key.time = strtol(p, &p, 10);
            key.lut = strtol(p, &p, 10);
            if (key.lut <= 0) continue;
            s_grading[setting].push_back(key);
            count++;
        }
        fclose(file);
        return count;
    }

    // HD: INT1 - forever_data\hd_forever_intensity.txt: "S setting count time value ..."
    int32_t LoadIntensity() {
        FILE* file = OpenData("hd_forever_intensity.txt");
        if (!file) return -1;
        static char line[4096];
        int32_t settings = 0;
        while (fgets(line, sizeof(line), file)) {
            if (line[0] != 'S') continue;
            char* p = line + 1;
            int32_t setting = strtol(p, &p, 10);
            int32_t count = strtol(p, &p, 10);
            if (count < 1 || count > kMaxKeys) continue;
            IntensityKeys& k = s_intensity[setting];
            k.count = count;
            for (int32_t i = 0; i < count; i++) {
                k.time[i] = strtol(p, &p, 10);
                k.value[i] = strtof(p, &p);
            }
            settings++;
        }
        fclose(file);
        return settings;
    }

    void Load() {
        s_triedLoad = true;
        FILE* file = OpenData("hd_forever_light.txt");
        if (!file) {
            SetInfo("ERROR: forever_data\\hd_forever_light.txt not found next to WowClient64.exe");
            WorldInfo();
            return;
        }
        int32_t badLines = LoadBands(file);
        FILE* ambientFile = OpenData("hd_forever_ambient.txt"); // HD: horizon and ground ambient (bands 18, 19)
        bool haveAmbient = ambientFile != nullptr;
        if (haveAmbient) badLines += LoadBands(ambientFile);

        FILE* skyFile = OpenData("hd_forever_sky.txt"); // HD: hdSky, cloud base colour (band 12) from Forever's CloudEmissiveColor
        bool haveSky = skyFile != nullptr;
        if (haveSky) badLines += LoadBands(skyFile);

        int32_t fogLayers = LoadFog(); // HD: Forever fog for hdFog
        int32_t gradeKeys = LoadGrading(); // HD: Forever colour grading for hdGrade
        int32_t intensitySettings = LoadIntensity(); // HD: INT1
        LoadWorldPolicy();

        char info[240]; // HD: was 160 (hdSky note added), 240 for INT1
        snprintf(info, sizeof(info), "loaded %d lights, %d Forever settings, %d fog layers, %d grading keys, %d intensities%s%s%s", static_cast<int>(s_lights.size()), static_cast<int>(s_settings.size()), fogLayers, gradeKeys, intensitySettings, haveAmbient ? "" : ", no hd_forever_ambient.txt", haveSky ? "" : ", no hd_forever_sky.txt", badLines ? " (some lines skipped)" : ""); // HD: hdSky
        SetInfo(info);
    }

    // Same search as the client's GetBandTimeRange (Lights.cpp), with up to 32 keys.
    void BandTimeRange(const int32_t* times, int32_t count, float time, int32_t& index, float& t, int32_t& next) {
    HD::DayNightMath::Range(times,count,time,index,t,next,HD::DayNightSmoothingEnabled());
}

    // The Forever setting for this light and slot (0 = none). A slot with none falls back to slot 0 when asked.
    int32_t SettingFor(const LightRec* light, int32_t slot, bool fallbackToSlot0) {
        auto found = s_lights.find(light->m_id);
        if (found == s_lights.end() || found->second.map != light->m_continentID) return 0;
        int32_t foreverId = found->second.slots[slot];
        if (!foreverId && fallbackToSlot0 && slot != 0) foreverId = found->second.slots[0]; // e.g. no storm setting: clear weather
        return foreverId;
    }

    // HD: INT1 - the factor for a gamma colour (0..1) so that, once our shaders take it to linear (^2.2), the light
    // is Forever's colour x intensity (column 59). 1 when hdForeverIntensity is 0 or the setting has none.
    float IntensityGammaScale(int32_t foreverId, float time) {
        int32_t mode = s_intensityVar ? s_intensityVar->m_intValue : 0;
        if (mode <= 0) return 1.0f;
        auto found = s_intensity.find(foreverId);
        if (found == s_intensity.end() || !found->second.count) return 1.0f;
        const IntensityKeys& k = found->second;
        int32_t index;
        float t;
        int32_t next;
        BandTimeRange(k.time, k.count, time, index, t, next);
        float v = k.value[index] + (k.value[next] - k.value[index]) * t;
        if (v <= 0.0f) return 1.0f;
        if (mode == 2 && v > 1.0f) v = 1.0f;
        return powf(v, 1.0f / 2.2f);
    }

    const HdRecord* FindRecord(const LightParamsRec* params) {
        if (!params || params->m_id < kMarker) return nullptr;
        uint32_t index = static_cast<uint32_t>(params->m_id - kMarker);
        return index < s_records.size() ? s_records[index] : nullptr;
    }

    // The world profile of a LightParams: its For Ever record, else its converted tracks. The emergency
    // default only when ar_world_light.txt has nothing for this id (file missing).
    const HD::WorldLighting::Profile* WorldProfileFor(const LightParamsRec* params) {
        RegisterCVars();
        if (!s_triedLoad) Load();
        const HdRecord* record = FindRecord(params);
        if (record) return &record->world;
        if (params) {
            auto found = s_baseProfiles.find(params->m_id);
            if (found != s_baseProfiles.end()) return &found->second;
            if (HD::ArLight::IntBand(params->m_id, 0)) {
                auto made = s_baseProfiles.emplace(params->m_id, MakeProfile(params->m_id, nullptr, 0));
                WorldInfo();
                return &made.first->second;
            }
        }
        ++s_worldFallbacks;
        return s_worldDefault ? s_worldDefault : &s_worldEmergency;
    }

    // A converted colour band at this time, exactly as the client's InterpolateIntBand: no key = black.
    CImVector ConvertedBand(int32_t paramsId, int32_t band, float time) {
        const LightIntBandRec* rec = HD::ArLight::IntBand(paramsId, band);
        if (!rec || rec->m_num <= 0) return CImVector(0, 0, 0, 0xff);
        int32_t index;
        float t;
        int32_t next;
        BandTimeRange(rec->m_time, rec->m_num, time, index, t, next);
        const uint32_t from = static_cast<uint32_t>(rec->m_data[index]), to = static_cast<uint32_t>(rec->m_data[next]);
        auto channel = [&](int shift) {
            const int32_t a = (from >> shift) & 0xFF, b = (to >> shift) & 0xFF;
            return static_cast<uint8_t>(CMath::fint_((b - a) * t + a) & 0xFF);
        };
        return CImVector(channel(0), channel(8), channel(16), 0xff);
    }
}

const LightParamsRec* HD::DefaultLightMetadata() {
    static const LightParamsRec metadata = [] {
        LightParamsRec p;
        std::memset(&p, 0, sizeof p);
        p.m_glow = 0.5f;
        p.m_waterShallowAlpha = 0.5f; p.m_waterDeepAlpha = 1.0f;
        p.m_oceanShallowAlpha = 0.75f; p.m_oceanDeepAlpha = 1.0f;
        return p;
    }();
    return &metadata;
}

float HD::DefaultLightFloatBand(int32_t band) {
    // Same neutral non-colour contract as the no-map-light branch, in final
    // CurrentLight units (fog distance in yards, not raw DBC distance units).
    if (band == 0) return 1.0e10f;
    if (band == 1) return 0.5f;
    return 0.0f;
}

// Same rule as before AR1: a record only for a light slot For Ever has a setting for (no slot-0 fallback here);
// any other slot keeps its own LightParams, whose colours are the converted ones.
const LightParamsRec* HD::ForeverLightParams(const LightRec* light, int32_t slot, const LightParamsRec* original) {
    RegisterCVars();
    if (!light || !original || slot < 0 || slot > 7) return original;
    if (!s_triedLoad) Load();

    int32_t foreverId = SettingFor(light, slot, false);
    if (!foreverId) return original;
    auto setting = s_settings.find(foreverId);
    if (setting == s_settings.end()) return original;

    uint64_t key = (static_cast<uint64_t>(static_cast<uint32_t>(original->m_id)) << 32) | static_cast<uint32_t>(foreverId);
    HdRecord*& record = s_recordByPair[key];
    if (!record) {
        record = new HdRecord();
        memcpy(&record->rec, original, sizeof(LightParamsRec)); // skybox, glow, water alpha: the original's
        record->realId = original->m_id;
        record->rec.m_id = kMarker + static_cast<int32_t>(s_records.size());
        record->world = MakeProfile(original->m_id, setting->second, foreverId);
        s_records.push_back(record);
        WorldInfo();
    }
    return &record->rec;
}

int32_t HD::RealLightParamsId(const LightParamsRec* params) {
    const HdRecord* record = FindRecord(params);
    return record ? record->realId : (params ? params->m_id : 0);
}

CImVector HD::WorldLightBand(const LightParamsRec* params, int32_t band, float time) {
    if (band < 0 || band > 17) return CImVector(0, 0, 0, 0xff);
    // Shadow opacity (8) and water colours (14-17): For Ever has none, always the converted bands.
    if (band == 8 || band >= 14) return ConvertedBand(RealLightParamsId(params), band, time);
    const auto* profile = WorldProfileFor(params);
    const auto color = WorldLighting::Sample(*profile, ChannelOf(band), time, DayNightSmoothingEnabled(), s_worldIntensityMode);
    return CImVector(static_cast<uint8_t>(CMath::fint_(color.b)), static_cast<uint8_t>(CMath::fint_(color.g)),
                     static_cast<uint8_t>(CMath::fint_(color.r)), 0xff);
}

HD::WorldLighting::LightValue HD::WorldLightValueAt(const LightParamsRec* params, float time) {
    const auto* profile = WorldProfileFor(params);
    const bool smooth = DayNightSmoothingEnabled();
    const float scale = WorldLighting::IntensityScale(*profile, time, smooth, s_worldIntensityMode);
    WorldLighting::LightValue value;
    for (int i = 0; i < WorldLighting::ChannelCount; ++i)
        value.colors[i] = WorldLighting::WithScale(WorldLighting::Unscaled(*profile,
            static_cast<WorldLighting::Channel>(i), time, smooth), i < WorldLighting::Sky0 ? scale : 1.0f);
    return value;
}

// World specular uses the owned sun/moon orb colour. The explicit night-art
// control is independent of the remaining compatibility water switch.
float HD::ForeverSpecularScale(float dayProgression) {
    RegisterCVars();
    if (s_nightSpec && s_nightSpec->m_intValue != 0) return 1.0f;
    const float nightStart = 0.9236111f, nightEnd = 0.2013889f, fade = 0.0138889f;
    float t = dayProgression - floorf(dayProgression);
    // distance (in day fraction) to the nearer switch, signed: > 0 by day, < 0 at night
    float toEnd = t - nightEnd;          // > 0 after 4:50
    float toStart = nightStart - t;      // > 0 before 22:10
    float day = fminf(toEnd, toStart);
    float s = 0.5f + day / (2.0f * fade);
    return s < 0.0f ? 0.0f : (s > 1.0f ? 1.0f : s);
}

bool HD::ForeverFogAt(const LightRec* light, int32_t slot, float time, ForeverFog* out) {
    RegisterCVars();
    if (!s_triedLoad) Load();
    if (!light || slot < 0 || slot > 7) return false;

    int32_t foreverId = SettingFor(light, slot, true);
    if (!foreverId) return false;
    auto fog = s_fog.find(foreverId);
    if (fog == s_fog.end() || fog->second.empty()) return false;

    const std::vector<FogKey>& keys = fog->second;
    int32_t times[kMaxKeys];
    int32_t count = static_cast<int32_t>(keys.size() < kMaxKeys ? keys.size() : kMaxKeys);
    for (int32_t i = 0; i < count; i++) times[i] = keys[i].time;

    int32_t index;
    float t;
    int32_t next;
    BandTimeRange(times, count, time, index, t, next);
    const FogKey& a = keys[index];
    const FogKey& b = keys[next];

    out->setting = foreverId;
    out->count = a.count > b.count ? a.count : b.count;
    for (int32_t i = 0; i < 3; i++) {
        out->layers[i] = a.layers[i];
        LerpFogLayer(out->layers[i], b.layers[i], t);
    }
    // HD: INT1 - the fog is lit by the same lights: its colours follow Forever's light intensity too (shape,
    // density and heights unchanged; Lumenveil keeps drawing it).
    float scale = IntensityGammaScale(foreverId, time);
    if (scale != 1.0f) {
        for (int32_t i = 0; i < 3; i++) {
            for (int32_t c = 0; c < 3; c++) {
                out->layers[i].diffuse[c] = out->layers[i].diffuse[c] * scale > 1.0f ? 1.0f : out->layers[i].diffuse[c] * scale;
                out->layers[i].emissive[c] = out->layers[i].emissive[c] * scale > 1.0f ? 1.0f : out->layers[i].emissive[c] * scale;
                out->layers[i].shadow[c] = out->layers[i].shadow[c] * scale > 1.0f ? 1.0f : out->layers[i].shadow[c] * scale;
            }
        }
    }
    return true;
}

void HD::LerpFogLayer(ForeverFogLayer& a, const ForeverFogLayer& b, float t) {
    if (!a.flags && !b.flags) return;
    if (!b.flags) {
        // HD: the layer fades out: keep its look, lose its density
        a.density *= 1.0f - t;
        return;
    }
    if (!a.flags) {
        float density = b.density * t;
        a = b;
        a.density = density;
        return;
    }
    // HD: flags remain discrete metadata, but shader-visible shadow and height features blend continuously.
    const float sunA=FogShadowWeight(a),sunB=FogShadowWeight(b);
    const float relA=FogRelativeHeightWeight(a),relB=FogRelativeHeightWeight(b);
    a.shadowWeight=sunA+(sunB-sunA)*t;
    a.relativeHeightWeight=relA+(relB-relA)*t;
    a.featureWeightsValid=true;
    if (t >= 0.5f) a.flags = b.flags;
    for (int32_t c = 0; c < 3; c++) {
        a.diffuse[c] += (b.diffuse[c] - a.diffuse[c]) * t;
        a.emissive[c] += (b.emissive[c] - a.emissive[c]) * t;
        a.shadow[c] += (b.shadow[c] - a.shadow[c]) * t;
    }
    a.start += (b.start - a.start) * t;
    a.density += (b.density - a.density) * t;
    a.shadowMul += (b.shadowMul - a.shadowMul) * t;
    a.topRate += (b.topRate - a.topRate) * t;
    a.topHeight += (b.topHeight - a.topHeight) * t;
    a.bottomRate += (b.bottomRate - a.bottomRate) * t;
    a.bottomHeight += (b.bottomHeight - a.bottomHeight) * t;
    a.intensity += (b.intensity - a.intensity) * t;
    a.g += (b.g - a.g) * t;
    a.strength += (b.strength - a.strength) * t;
    a.exponent += (b.exponent - a.exponent) * t;
}

float HD::ForeverIntensityAt(const LightRec* light, int32_t slot, float time) {
    RegisterCVars();
    if (!light || slot < 0 || slot > 7) return 1.0f;
    if (!s_triedLoad) Load();
    int32_t foreverId = SettingFor(light, slot, true);
    return foreverId ? IntensityGammaScale(foreverId, time) : 1.0f;
}

bool HD::ForeverGradingAt(const LightRec* light, int32_t slot, float time, int32_t* lutA, int32_t* lutB, float* t) {
    RegisterCVars();
    if (!s_triedLoad) Load();
    if (!light || slot < 0 || slot > 7) return false;

    int32_t foreverId = SettingFor(light, slot, true);
    if (!foreverId) return false;
    auto grading = s_grading.find(foreverId);
    if (grading == s_grading.end() || grading->second.empty()) return false;

    const std::vector<GradeKey>& keys = grading->second;
    int32_t times[kMaxKeys];
    int32_t count = static_cast<int32_t>(keys.size() < kMaxKeys ? keys.size() : kMaxKeys);
    for (int32_t i = 0; i < count; i++) times[i] = keys[i].time;

    int32_t index;
    int32_t next;
    BandTimeRange(times, count, time, index, *t, next);
    *lutA = keys[index].lut;
    *lutB = keys[next].lut;
    return true;
}
