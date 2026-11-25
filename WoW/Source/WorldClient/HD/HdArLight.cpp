#include "WoW/Source/WorldClient/HD/HdArLight.h"
#include "WoW/Source/DB/WowClientDB.h"
#include "WoW/Source/DB/Rec/LightParamsRec.h"
#include "WoW/Source/DB/Rec/LightIntBandRec.h"
#include "WoW/Source/DB/Rec/LightFloatBandRec.h"
#include "WoW/Source/DB/Rec/LightSkyboxRec.h"
#include "WoW/Source/DB/Rec/LightRec.h"
#include "WoW/Source/DB/Rec/LiquidTypeRec.h"
#include "WoW/Source/DB/Rec/LiquidMaterialRec.h"
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <memory>
#include <string>
#include <unordered_map>
#include <vector>

namespace {
    struct Skybox { LightSkyboxRec rec; std::string name; };
    std::unordered_map<int32_t, LightParamsRec> s_params;
    std::unordered_map<int64_t, LightIntBandRec> s_int;
    std::unordered_map<int64_t, LightFloatBandRec> s_float;
    std::unordered_map<int32_t, std::unique_ptr<Skybox>> s_skyboxes;

    // Whole rows ("R table ..."), in file order (= the client's record order). A string token holds its offset in
    // the table's string buffer (offset 0 = empty string, as in a DBC string table).
    struct Token { uint32_t word = 0; bool string = false; };
    struct Table { std::vector<std::vector<Token>> rows; std::string strings{std::string(1, '\0')}; };
    std::unordered_map<std::string, Table> s_tables;

    bool s_tried = false;
    bool s_fileFound = false;
    bool s_version = false;
    int32_t s_bad = 0;
    CVar* s_info = nullptr;

    int64_t Key(int32_t paramsId, int32_t band) { return (static_cast<int64_t>(paramsId) << 8) | static_cast<uint32_t>(band & 0xFF); }

    float Float(uint32_t bits) { float f; std::memcpy(&f, &bits, sizeof f); return f; }

    FILE* Open() {
        FILE* file = std::fopen("forever_data\\ar_world_light.txt", "rb");
        return file ? file : std::fopen("..\\..\\forever_data\\ar_world_light.txt", "rb");
    }

    template <class Rec, class Value> bool ReadBand(char* p, Rec& rec, int32_t& paramsId, int32_t& band, Value convert) {
        char* end;
        paramsId = static_cast<int32_t>(std::strtol(p, &end, 10)); if (end == p) return false; p = end;
        band = static_cast<int32_t>(std::strtol(p, &end, 10)); if (end == p) return false; p = end;
        const long count = std::strtol(p, &end, 10); if (end == p || count < 0 || count > 16) return false; p = end;
        std::memset(&rec, 0, sizeof rec);
        rec.m_num = static_cast<int32_t>(count);
        for (long i = 0; i < count; ++i) {
            rec.m_time[i] = static_cast<int32_t>(std::strtol(p, &end, 10)); if (end == p) return false; p = end;
            const uint32_t bits = static_cast<uint32_t>(std::strtoul(p, &end, 16)); if (end == p) return false; p = end;
            rec.m_data[i] = convert(bits);
        }
        return true;
    }

    // "R table token ...": int = decimal, float = h + 32-bit hex, string = "text".
    bool ReadRow(char* p) {
        while (*p == ' ') ++p;
        char* name = p;
        while (*p && *p != ' ' && *p != '\r' && *p != '\n') ++p;
        if (p == name) return false;
        Table& table = s_tables[std::string(name, p)];
        std::vector<Token> row;
        for (;;) {
            while (*p == ' ') ++p;
            if (!*p || *p == '\r' || *p == '\n') break;
            Token token;
            char* end;
            if (*p == '"') {
                char* close = std::strchr(p + 1, '"');
                if (!close) return false;
                token.string = true;
                if (close == p + 1) token.word = 0;
                else {
                    token.word = static_cast<uint32_t>(table.strings.size());
                    table.strings.append(p + 1, close);
                    table.strings.push_back('\0');
                }
                p = close + 1;
            } else if (*p == 'h') {
                token.word = static_cast<uint32_t>(std::strtoul(p + 1, &end, 16)); if (end == p + 1) return false; p = end;
            } else {
                token.word = static_cast<uint32_t>(std::strtol(p, &end, 10)); if (end == p) return false; p = end;
            }
            row.push_back(token);
        }
        table.rows.push_back(std::move(row));
        return true;
    }

    void Load() {
        if (s_tried) return;
        s_tried = true;
        FILE* file = Open();
        s_fileFound = file != nullptr;
        if (!file) return;
        static char line[16384];
        while (std::fgets(line, sizeof line, file)) {
            char* p = line;
            const char kind = *p;
            if (kind == '#' || kind == '\r' || kind == '\n' || !kind) continue;
            ++p;
            char* end;
            if (kind == 'V') { s_version = std::strtol(p, &end, 10) == 1; continue; }
            if (kind == 'P') {
                LightParamsRec rec;
                std::memset(&rec, 0, sizeof rec);
                int32_t* ints[] = { &rec.m_id, &rec.m_highlightSky, &rec.m_lightSkyboxID, &rec.m_cloudTypeID };
                bool ok = true;
                for (int32_t* v : ints) { *v = static_cast<int32_t>(std::strtol(p, &end, 10)); ok &= end != p; p = end; }
                float* floats[] = { &rec.m_glow, &rec.m_waterShallowAlpha, &rec.m_waterDeepAlpha, &rec.m_oceanShallowAlpha, &rec.m_oceanDeepAlpha };
                for (float* v : floats) { *v = Float(static_cast<uint32_t>(std::strtoul(p, &end, 16))); ok &= end != p; p = end; }
                if (ok) s_params[rec.m_id] = rec; else ++s_bad;
            } else if (kind == 'I') {
                LightIntBandRec rec; int32_t id, band;
                if (ReadBand(p, rec, id, band, [](uint32_t b) { return static_cast<int32_t>(b); }) && band >= 0 && band < 18) {
                    rec.m_id = band + 18 * id - 17; s_int[Key(id, band)] = rec;
                } else ++s_bad;
            } else if (kind == 'F') {
                LightFloatBandRec rec; int32_t id, band;
                if (ReadBand(p, rec, id, band, Float) && band >= 0 && band < 6) {
                    rec.m_id = band + 6 * id - 5; s_float[Key(id, band)] = rec;
                } else ++s_bad;
            } else if (kind == 'S') {
                auto sky = std::make_unique<Skybox>();
                std::memset(&sky->rec, 0, sizeof sky->rec);
                sky->rec.m_id = static_cast<int32_t>(std::strtol(p, &end, 10)); bool ok = end != p; p = end;
                sky->rec.m_flags = static_cast<int32_t>(std::strtol(p, &end, 10)); ok &= end != p; p = end;
                while (*p == ' ') ++p;
                size_t n = std::strcspn(p, "\r\n");
                sky->name.assign(p, n);
                sky->rec.m_name = sky->name.c_str();
                if (ok && n) { const int32_t id = sky->rec.m_id; s_skyboxes[id] = std::move(sky); } else ++s_bad;
            } else if (kind == 'R') {
                if (!ReadRow(p)) ++s_bad;
            } else ++s_bad;
        }
        std::fclose(file);
    }

    // arLightInfo: registered at the first world-light lookup (the tables themselves load earlier, with the
    // client database, before the console variables are needed).
    void Publish() {
        Load();
        if (s_info) return;
        s_info = CVar::Register("arLightInfo", "Azeroth Remastered world light tables (read only)", 0, "not loaded", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        if (!s_info) return;
        auto rows = [](const char* name) { auto it = s_tables.find(name); return unsigned(it == s_tables.end() ? 0 : it->second.rows.size()); };
        char text[240];
        if (!s_fileFound) std::snprintf(text, sizeof text, "ERROR: forever_data\\ar_world_light.txt missing");
        else std::snprintf(text, sizeof text, "%s%u params, %u colour bands, %u float bands, %u skyboxes, %u lights, %u liquid types, %u liquid materials%s",
                           s_version ? "" : "ERROR version, ", unsigned(s_params.size()), unsigned(s_int.size()),
                           unsigned(s_float.size()), unsigned(s_skyboxes.size()), rows("Light"), rows("LiquidType"),
                           rows("LiquidMaterial"), s_bad ? ", BAD LINES" : "");
        s_info->SetReadOnly(false); s_info->Set(text, true, false, false, false); s_info->SetReadOnly(true);
    }

    // Fills a client table from our rows, exactly as WowClientDB::LoadRecords fills it from a .dbc
    // (same record order, ids, index and string pointers). No row = the same fatal error as a missing .dbc.
    template <class T, class Assign> void Fill(WowClientDB<T>& db, const char* name, Assign assign) {
        Load();
        auto found = s_tables.find(name);
        if (found == s_tables.end() || found->second.rows.empty())
            SErrDisplayAppFatal("forever_data\\ar_world_light.txt: no %s rows (Azeroth Remastered world tables)", name);
        const Table& table = found->second;
        for (const auto& row : table.rows)
            if (static_cast<int32_t>(row.size()) != T::s_numColumns)
                SErrDisplayAppFatal("forever_data\\ar_world_light.txt: %s row has %d fields, expected %d", name, static_cast<int32_t>(row.size()), T::s_numColumns);

        char* strings = static_cast<char*>(SMemAlloc(static_cast<uint32_t>(table.strings.size()), __FILE__, __LINE__, 0));
        std::memcpy(strings, table.strings.data(), table.strings.size());
        db.m_strings = strings;
        db.m_numRecords = static_cast<int32_t>(table.rows.size());
        db.m_maxID = 0;
        db.m_minID = 0xFFFFFFF;
        db.m_records = static_cast<T*>(SMemAlloc(sizeof(T) * db.m_numRecords, __FILE__, __LINE__, 0));
        for (int32_t i = 0; i < db.m_numRecords; i++) {
            new (&db.m_records[i]) T();
            assign(db.m_records[i], table.rows[i].data(), strings);
            const int32_t id = db.m_records[i].m_id;
            db.m_maxID = id > db.m_maxID ? id : db.m_maxID;
            db.m_minID = id < db.m_minID ? id : db.m_minID;
        }
        db.m_recordsById = new (__FILE__, __LINE__) T*[db.m_maxID - db.m_minID + 1];
        std::memset(db.m_recordsById, 0, sizeof(T*) * (db.m_maxID - db.m_minID + 1));
        for (int32_t i = 0; i < db.m_numRecords; i++) db.m_recordsById[db.m_records[i].m_id - db.m_minID] = &db.m_records[i];
        db.m_loaded = 1;
    }

    int32_t I(const Token& t) { return static_cast<int32_t>(t.word); }
    float F(const Token& t) { return Float(t.word); }
    const char* S(const Token& t, const char* strings) { return &strings[t.word]; }
}

const LightParamsRec* HD::ArLight::Params(int32_t id) {
    Publish();
    auto it = s_params.find(id);
    return it == s_params.end() ? nullptr : &it->second;
}

const LightIntBandRec* HD::ArLight::IntBand(int32_t paramsId, int32_t band) {
    Publish();
    auto it = s_int.find(Key(paramsId, band));
    return it == s_int.end() ? nullptr : &it->second;
}

const LightFloatBandRec* HD::ArLight::FloatBand(int32_t paramsId, int32_t band) {
    Publish();
    auto it = s_float.find(Key(paramsId, band));
    return it == s_float.end() ? nullptr : &it->second;
}

const LightSkyboxRec* HD::ArLight::Skybox(int32_t id) {
    Publish();
    auto it = s_skyboxes.find(id);
    return it == s_skyboxes.end() ? nullptr : &it->second->rec;
}

void HD::ArLight::LoadWorldTables(WowClientDB<LightRec>& lights, WowClientDB<LiquidTypeRec>& liquidTypes,
                                  WowClientDB<LiquidMaterialRec>& liquidMaterials) {
    Fill(lights, "Light", [](LightRec& r, const Token* t, const char*) {
        r.m_id = I(t[0]); r.m_continentID = I(t[1]);
        for (int32_t i = 0; i < 3; i++) r.m_gameCoords[i] = F(t[2 + i]);
        r.m_gameFalloffStart = F(t[5]); r.m_gameFalloffEnd = F(t[6]);
        for (int32_t i = 0; i < 8; i++) r.m_lightParamsID[i] = I(t[7 + i]);
    });
    Fill(liquidTypes, "LiquidType", [](LiquidTypeRec& r, const Token* t, const char* s) {
        r.m_id = I(t[0]); r.m_name = S(t[1], s); r.m_flags = I(t[2]); r.m_soundBank = I(t[3]); r.m_soundID = I(t[4]);
        r.m_spellID = I(t[5]); r.m_maxDarkenDepth = F(t[6]); r.m_fogDarkenIntensity = F(t[7]);
        r.m_ambDarkenIntensity = F(t[8]); r.m_dirDarkenIntensity = F(t[9]); r.m_lightID = I(t[10]);
        r.m_particleScale = F(t[11]); r.m_particleMovement = I(t[12]); r.m_particleTexSlots = I(t[13]);
        r.m_materialID = I(t[14]);
        for (int32_t i = 0; i < 6; i++) r.m_texture[i] = S(t[15 + i], s);
        for (int32_t i = 0; i < 2; i++) r.m_color[i] = I(t[21 + i]);
        for (int32_t i = 0; i < 18; i++) r.m_float[i] = F(t[23 + i]);
        for (int32_t i = 0; i < 4; i++) r.m_int[i] = I(t[41 + i]);
    });
    Fill(liquidMaterials, "LiquidMaterial", [](LiquidMaterialRec& r, const Token* t, const char*) {
        r.m_id = I(t[0]); r.m_lvf = I(t[1]); r.m_flags = I(t[2]);
    });
}
