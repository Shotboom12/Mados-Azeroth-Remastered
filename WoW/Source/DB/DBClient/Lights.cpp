#include "WoW/Source/WorldClient/HD/HdTime.h"
#include "WoW/Source/WorldClient/HD/HdDayNightMath.h"
#include <cstdint>
#include "Engine/Source/Tempest/CImVector.h"
#include "Engine/Source/Tempest/CMath.h"
#include "WoW/Source/DB/DBClient/DBClient.h"
#include "WoW/Source/DB/Rec/LightParamsRec.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/World.h"
#include "WoW/Source/WorldClient/HD/HdForever.h" // AR1: our world colours

// VERIFY: 7c5384b3 manual
// OFFSET: 0x007EAE70
static void GetBandTimeRange(const int32_t* times, int32_t count, float time, int32_t& index, float& t, int32_t& next) {
    HD::DayNightMath::Range(times,count,time,index,t,next,HD::DayNightSmoothingEnabled());
}

// VERIFY: d2967a23 manual
// OFFSET: 0x007EAF60
static void TransformMapCoord(LightRec* rec, bool transform) {
    if ((rec->m_gameCoords[0] != 0.0f || rec->m_gameCoords[1] != 0.0f || rec->m_gameCoords[2] != 0.0f) && transform) {
        rec->m_gameCoords[0] *= 1.0f / 36.0f;
        rec->m_gameCoords[1] *= 1.0f / 36.0f;
        rec->m_gameCoords[2] *= 1.0f / 36.0f;
        rec->m_gameFalloffStart *= 1.0f / 36.0f;
        rec->m_gameFalloffEnd *= 1.0f / 36.0f;

        float offsetX = 0.0f;
        float offsetY = 0.0f;

        if (!World::MapIsDungeon()) {
            offsetX = 51200.0f / 3.0f;
            offsetY = 51200.0f / 3.0f;
        }

        float x = -(rec->m_gameCoords[0] - offsetY);
        float z = rec->m_gameCoords[1];
        rec->m_gameCoords[0] = -(rec->m_gameCoords[2] - offsetX);
        rec->m_gameCoords[1] = x;
        rec->m_gameCoords[2] = z;
    }
}

// VERIFY: c7d146ee auto
// OFFSET: 0x007EB010
static void TransformLights(bool transform) {
    for (int32_t i = 0; i < g_lightDB.m_numRecords; i++) {
        LightRec* rec = i >= 0 && i < g_lightDB.m_numRecords ? &g_lightDB.m_records[i] : nullptr;
        TransformMapCoord(rec, transform);
    }
}

// VERIFY: ae55f679 auto
// OFFSET: 0x007EB060
void InitLights(bool transform) {
    TransformLights(transform);
}

// VERIFY: b70039a6 auto
// OFFSET: 0x007EBF30
CImVector DayNight::LoadLightIntBand(float time, const LightParamsRec* params, int32_t band) {
    // AR1: our world colours (For Ever + the converted tables of ar_world_light.txt, see HdForever.h).
    return HD::WorldLightBand(params, band, time);
}

// VERIFY: 95c2a7e6 auto
// OFFSET: 0x007EAEF0
float DayNight::InterpFloatBand(const LightFloatBandRec* rec, float now, int32_t bandIndex) {
    if (!rec->m_num) {
        return 0.0f;
    }

    float t;
    int32_t lo;
    int32_t hi;
    GetBandTimeRange(rec->m_time, rec->m_num, now, lo, t, hi);

    if (bandIndex) {
        return (rec->m_data[hi] - rec->m_data[lo]) * t + rec->m_data[lo];
    }

    float loValue = rec->m_data[lo] * 0.027777778f;
    return loValue + (0.027777778f * rec->m_data[hi] - loValue) * t;
}

// VERIFY: fb110f5d manual
// OFFSET: 0x007ED2D0
void DayNight::ColorLerpBytes(CImVector* out, const CImVector* a, const CImVector* b, float t) {
    float blue = b->b < a->b ? a->b - (a->b - b->b) * t : a->b + (b->b - a->b) * t;
    float green = b->g < a->g ? a->g - (a->g - b->g) * t : a->g + (b->g - a->g) * t;
    float red = b->r < a->r ? a->r - (a->r - b->r) * t : a->r + (b->r - a->r) * t;
    out->b = CMath::fint_(blue - 0.5f);
    out->g = CMath::fint_(green - 0.5f);
    out->r = CMath::fint_(red - 0.5f);
    out->a = 0xFF;
}
