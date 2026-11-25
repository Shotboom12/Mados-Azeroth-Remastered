#include "WoW/Source/WorldClient/HD/HdLightTrace.h"
#include "WoW/Source/WorldClient/HD/HdDayNightMath.h"
#include "WoW/Source/WorldClient/DayNight.h"
#include "Engine/Source/Os/TimeManager.h"
#include "WoW/Source/WorldClient/HD/HdTime.h"
#include "WoW/Source/WorldClient/HD/HdWeatherBlend.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"

namespace {
    CVar* s_hdTime = nullptr;
    CVar *s_daySmooth=nullptr,*s_dayHalfLife=nullptr,*s_dayRate=nullptr,*s_dayWindow=nullptr;
    CVar* s_daySnap=nullptr; // Claude HEURE1 2026-11-16
    HD::DayNightMath::Clock s_dayClock;
    bool s_dayEnabled=false;float s_visualDay=0;uint64_t s_dayFrame=0;
    CVar* s_hdShadowTexelSnap=nullptr;
    CVar* s_hdShadowCasterFade=nullptr;
    CVar* s_hdFogContinuousFlags=nullptr;
    CVar* s_hdShadowSunRefresh=nullptr;
    CVar* s_hdShadowFarEvery=nullptr; // Claude 2026-11-04 lot S3
    CVar* s_hdWeatherBlendHalfLife=nullptr;
    HD::WeatherBlendState s_weatherBlend;
    CVar* s_hdShadowBillboard = nullptr;
    CVar* s_hdShadowSunMin = nullptr;
    CVar* s_hdSunGlareDim = nullptr;

    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_hdFogContinuousFlags=CVar::Register("hdFogContinuousFlags","HD: 1 blends fog shadow/relative-height features continuously; 0 diagnostic original flags",1,"1",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_hdShadowCasterFade=CVar::Register("hdShadowCasterFade","HD: 1 = bushes and trees stay in the near shadow maps (their shadows no longer blink as you move), 0 = original",1,"1",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_hdShadowTexelSnap=CVar::Register("hdShadowTexelSnap","HD: 1 = shadow map centres stay on the texel grid (shadows no longer swim when you move), 0 = original",1,"1",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_hdShadowSunRefresh=CVar::Register("hdShadowSunRefresh","HD: refresh real-sun cached maps after this angle in degrees (.01..5)",1,"0.5",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_hdShadowFarEvery=CVar::Register("hdShadowFarEvery","HD: cascaded shadows (extShadowQuality 5): redraw the 640 yd cascade every N frames (1 = every frame, original; 2..8; default 4 = Max base setting, Claude DEF1)",1,"4",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_hdWeatherBlendHalfLife=CVar::Register("hdWeatherBlendHalfLife","HD: visual weather blend half-life in seconds (deprecated: native weather always used by this kit)",1,"0",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_daySmooth=CVar::Register("hdDayNightSmooth","HD: continuous visual day/night clock and palette interpolation; 0 diagnostic native timing",1,"1",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_dayHalfLife=CVar::Register("hdDayNightHalfLife","HD: visual clock correction half-life in seconds; native weather unchanged",1,"6",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_dayRate=CVar::Register("hdDayNightMaxRate","HD: maximum visual catch-up rate in game minutes per real second (0.1..1440; HEURE1: was capped at 120)",1,"10",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_daySnap=CVar::Register("hdDayNightSnap","HD (Claude HEURE1): any new value = the visual clock jumps at once to the hour now asked (hdTime or real), no glide; the glide resumes after",1,"0",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_dayWindow=CVar::Register("hdDayNightSunBlend","HD: sun/moon handover width in game minutes",1,"30",nullptr,CATEGORY_GRAPHICS,false,nullptr,false);
        s_hdTime = CVar::Register("hdTime", "HD: -1 = real time, 0 to 24 = force this hour on this screen only", 1, "-1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_hdShadowBillboard = CVar::Register("hdShadowBillboard", "HD: 0 = original tree shadows (turn with the camera), 1 = tree leaf cards face the sun in the shadows (still), 2 = test: leaf cards cast no shadow", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_hdSunGlareDim = CVar::Register("hdSunGlareDim", "HD: how much looking at the sun darkens the whole world, 0 to 1 (0 = never: it flickered through the leaves, 1 = original)", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_hdShadowSunMin = CVar::Register("hdShadowSunMin", "HD: the lowest sun height in degrees above the horizon for the shadow maps (0 = no limit)", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    // Forced minutes since midnight (0 to 1439), or -1 when the override is off.
    int32_t ForcedMinutes() {
        RegisterCVars();
        if (!s_hdTime) return -1;
        float hours = s_hdTime->m_floatValue;
        if (hours < 0.0f) return -1;
        if (hours >= 24.0f) hours = 0.0f;
        int32_t minutes = static_cast<int32_t>(hours * 60.0f + 0.5f);
        return minutes >= 1440 ? 0 : minutes;
    }
}

void HD::ApplyTimeOverride(DayNight::DNInfo* info) {
    HD::LightTrace::BeginFrame(); // Claude LT1: the light trace's frame starts here
    int32_t minutes=ForcedMinutes();if(!info)return;++s_dayFrame;
    if(minutes>=0){info->m_timeOfDay=uint32_t(minutes);info->m_dayProgression=minutes*(1.0f/1440.0f);}
    s_dayEnabled=s_daySmooth&&s_daySmooth->m_intValue!=0;
    const float h=s_dayHalfLife&&std::isfinite(s_dayHalfLife->m_floatValue)?std::clamp(s_dayHalfLife->m_floatValue,.1f,120.f):6.f;
    const float rate=s_dayRate&&std::isfinite(s_dayRate->m_floatValue)?std::clamp(s_dayRate->m_floatValue,.1f,1440.f):10.f;
    {static int32_t lastSnap=0;const int32_t snap=s_daySnap?s_daySnap->m_intValue:0;if(snap!=lastSnap){lastSnap=snap;s_dayClock.Reset();}} // Claude HEURE1: the next Update starts at the asked hour
    s_visualDay=s_dayClock.Update(info->m_dayProgression,OsGetAsyncTimeMs(),DayNight::s_mapId,s_dayEnabled?h:0.f,rate);
    if(s_dayEnabled)info->m_dayProgression=s_visualDay;
}

int32_t HD::OverrideMinutes(int32_t realMinutes) {
    int32_t minutes=ForcedMinutes();
    if(s_dayEnabled&&s_dayClock.valid)return int32_t(s_visualDay*1440.f);
    return minutes<0?realMinutes:minutes;
}

int32_t HD::ShadowBillboardMode() {
    RegisterCVars();
    return s_hdShadowBillboard ? s_hdShadowBillboard->m_intValue : 0;
}

float HD::SunGlareDim() {
    RegisterCVars();
    if (!s_hdSunGlareDim) return 0.0f;
    float dim = s_hdSunGlareDim->m_floatValue;
    return dim < 0.0f ? 0.0f : (dim > 1.0f ? 1.0f : dim);
}

float HD::ShadowMinElevation() {
    RegisterCVars();
    if (!s_hdShadowSunMin) return 0.0f;
    float degrees = s_hdShadowSunMin->m_floatValue;
    return degrees < 0.0f ? 0.0f : (degrees > 60.0f ? 60.0f : degrees);
}

// HD: the render cache reads these once at CShadowQuery::Update, not for every tile/vertex.
bool HD::ShadowCasterFade(){RegisterCVars();return !s_hdShadowCasterFade||s_hdShadowCasterFade->m_intValue!=0;}
bool HD::ShadowTexelSnap(){RegisterCVars();return !s_hdShadowTexelSnap||s_hdShadowTexelSnap->m_intValue!=0;}
int32_t HD::ShadowFarEvery(){RegisterCVars();const int32_t v=s_hdShadowFarEvery?s_hdShadowFarEvery->m_intValue:1;return v<1?1:(v>8?8:v);} // Claude 2026-11-04 lot S3
float HD::ShadowSunRefreshDegrees(){RegisterCVars();float v=s_hdShadowSunRefresh?s_hdShadowSunRefresh->m_floatValue:.5f;return std::isfinite(v)?std::clamp(v,.01f,5.f):.5f;}
float HD::SmoothWeatherBlend(float target,uint32_t now,int32_t mapId){
    return target; // HD: native weather is mandatory in this kit, even with an old saved nonzero cvar.
}
void HD::ResetWeatherBlend(){s_weatherBlend.Reset();}

bool HD::SmoothFogFeatures(){RegisterCVars();return s_hdFogContinuousFlags&&s_hdFogContinuousFlags->m_intValue!=0;}

bool HD::DayNightSmoothingEnabled(){return s_dayEnabled;}
float HD::DayNightBandTime(float ticks){
    if(s_dayEnabled)return std::isfinite(ticks)?ticks:0.f;
    return float(int32_t(ticks));
}
float HD::DayNightBandTime(float ticks,float nativeRounded){
    if(s_dayEnabled)return std::isfinite(ticks)?ticks:0.f;
    return nativeRounded; // HD: preserve even a negative native midpoint-rounding result at midnight.
}
float HD::DayNightBlendWeight(){
    const float width=s_dayWindow&&std::isfinite(s_dayWindow->m_floatValue)?std::clamp(s_dayWindow->m_floatValue,1.f,120.f):30.f;
    return HD::DayNightMath::DayWeight(s_visualDay,width);
}
void HD::ResetDayNight(){s_dayClock.Reset();s_dayEnabled=false;s_visualDay=0;++s_dayFrame;}

uint64_t HD::DayNightFrameSerial(){return s_dayFrame;}
