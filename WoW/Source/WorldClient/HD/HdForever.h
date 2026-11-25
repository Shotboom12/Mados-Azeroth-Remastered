#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDFOREVER_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDFOREVER_H

// World colours (Azeroth Remastered, AR1 20 nov 2026): a light slot For Ever has a setting for takes For Ever's
// tracks; every band For Ever leaves empty, and every other light, takes the converted tracks of its LightParams
// (forever_data\ar_world_light.txt, see HdArLight.h). Same colours as before AR1, no WotLK table read at run time.
// forever_world_policy.txt "D" is an emergency profile only (ar_world_light.txt missing).
// AR1 (19 nov 2026): hdForever, hdForeverForce and hdForeverLight are gone; nothing can switch back to WotLK.
//   hdForeverInfo  read only, what was loaded:  /run print(GetCVar("hdForeverInfo"))
// Data file: forever_data\hd_forever_light.txt (made by forever_tools\make_hd_forever_light.py).
// Ambient:   forever_data\hd_forever_ambient.txt (made by forever_tools\make_hd_forever_ambient.py), horizon and
//            ground ambient colours for the terrain lighting (hdTerrainLight).
// Clouds:    forever_data\hd_forever_sky.txt (made by forever_tools\make_hd_forever_sky.py), band 12 (cloud base colour)
//            from Forever's CloudEmissiveColor, loaded like hd_forever_light.txt (optional; used by the clouds, see HdSky.h).
// Fog file:  forever_data\hd_forever_fog.txt (made by forever_tools\make_hd_forever_fog.py), used by hdFog.

#include <cstdint>

class CImVector;
class LightParamsRec;
class LightRec;

namespace HD {
    // The no-map-light constants, for a light whose LightParams is missing. No colour.
    const LightParamsRec* DefaultLightMetadata();
    float DefaultLightFloatBand(int32_t band);

    // The LightParams to use for this light slot: a For Ever record if For Ever has a setting for it, else original.
    const LightParamsRec* ForeverLightParams(const LightRec* light, int32_t slot, const LightParamsRec* original);

    // The 3.3.5 LightParams ID behind a record (the HD records keep the 3.3.5 one for bands Forever leaves empty).
    int32_t RealLightParamsId(const LightParamsRec* params);

    // HD lot NUIT1: scale for the specular colour (band 9): 0 at night with hdForeverNightSpec 0; independent of hdForever.
    float ForeverSpecularScale(float dayProgression);

    // A colour band 0..17 (0 sun, 1 ambient, 2..7 sky/fog, 8 shadow opacity, 9..13 sun/moon/clouds, 14..17 water).
    CImVector WorldLightBand(const LightParamsRec* params, int32_t band, float time);

    // Full world values and composition: HdWorldLightingFrame.h.

    // One Forever fog layer (LightDataGlobalVolumeFog), as Forever's global fog shader reads it (GlobalFogParams).
    // Only the layers the Forever client draws (flag 8) are in the file. Colours 0..1, values unscaled.
    struct ForeverFogLayer {
        int32_t flags;            // 1 = sun shadow (shadow colour/density when the sun is down), 2 = heights relative
                                  // to the player, 4 = noise, 8 = drawn; 0 = no layer here
        float diffuse[3];         // sun-lit colour, added toward the sun (column 1)
        float emissive[3];        // base colour (column 2)
        float shadow[3];          // base colour in shadow (column 3)
        float start;              // distance where the layer starts, yards (column 5)
        float density;            // x 0.01 = per yard (column 6)
        float shadowMul;          // density in shadow (column 7)
        float topRate, topHeight; // thins above topHeight: exp(-topRate * 0.01 * (z - topHeight)) (columns 8, 10)
        float bottomRate, bottomHeight; // thins below bottomHeight (columns 11, 12)
        float intensity;          // sun scatter strength (column 14)
        float g;                  // phase: 0 = even, 0.9 = strongly toward the sun (column 15)
        float strength, exponent; // denser with distance: 1 + strength * (distance share)^exponent (columns 25, 26)
        // HD: internal interpolation metadata only; never serialized or read as client/x86 offsets.
        float shadowWeight=0.0f, relativeHeightWeight=0.0f;
        bool featureWeightsValid=false;
    };

    inline float FogShadowWeight(const ForeverFogLayer& l) {return l.featureWeightsValid?l.shadowWeight:((l.flags&1)?1.0f:0.0f);}
    inline float FogRelativeHeightWeight(const ForeverFogLayer& l) {return l.featureWeightsValid?l.relativeHeightWeight:((l.flags&2)?1.0f:0.0f);}

    // Blend two fog layers (t = 0 keeps a, 1 gives b). A missing layer (flags 0) takes the other's colours,
    // so it only fades in by density.
    void LerpFogLayer(ForeverFogLayer& a, const ForeverFogLayer& b, float t);

    struct ForeverFog {
        int32_t count;
        int32_t setting;
        ForeverFogLayer layers[3];
    };

    // Forever's fog for this light and slot at this time (0-2880 half-minutes), interpolated between
    // Forever's time keys. False if Forever has no fog for this light (TBC, WotLK or Turtle zone).
    bool ForeverFogAt(const LightRec* light, int32_t slot, float time, ForeverFog* out);

    // Forever's colour grading for this light and slot at this time (0-2880 half-minutes): the LUTs of the two
    // time keys around it (forever_data\grading\<lut>.blp) and how far between them (0 = lutA, 1 = lutB).
    // False if Forever has no grading for this light. Data: forever_data\hd_forever_grading.txt.
    bool ForeverGradingAt(const LightRec* light, int32_t slot, float time, int32_t* lutA, int32_t* lutB, float* t);
    // HD: INT1 - Forever's light intensity (LightData column 59) as a factor for a gamma colour, 1 = none
    float ForeverIntensityAt(const LightRec* light, int32_t slot, float time);
    // HD: INT1 - the same factor where the camera is (area lights blended like the grading, see HdGrade.cpp)
    float ForeverIntensityHere();
}

#endif
