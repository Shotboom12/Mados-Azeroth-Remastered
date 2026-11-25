#pragma once
#include "WoW/Source/WorldClient/HD/ForeverLightComposition.h"
class CImVector;
class LightParamsRec;

namespace HD {
// Resolved authored values, sampled once with one intensity policy.
WorldLighting::LightValue WorldLightValueAt(const LightParamsRec* params, float time);

class WorldLightUpdate {
    bool owner;
public:
    explicit WorldLightUpdate(float time);
    ~WorldLightUpdate();
    void Finish();
    WorldLightUpdate(const WorldLightUpdate&) = delete;
    WorldLightUpdate& operator=(const WorldLightUpdate&) = delete;
};

// Typed views of the existing CurrentLight DTO; its layout remains unchanged.
struct WorldLightOutput {
    CImVector& sun;
    CImVector& ambient;
    CImVector (&sky)[6];
    CImVector (&clouds)[5];
};
struct WorldLightInput {
    const CImVector& sun;
    const CImVector& ambient;
    const CImVector (&sky)[6];
    const CImVector (&clouds)[5];
};
void LoadWorldLightFor(const void* key, const LightParamsRec* params, float time, WorldLightOutput out);
void BlendWorldLightFor(const void* dst, const void* src, float weight, WorldLightOutput out, WorldLightInput input);
void CopyWorldLightFor(const void* dst, const void* src);
void ForgetWorldLightFor(const void* key);
void PublishWorldLightFor(const void* key, WorldLightOutput out);
uint64_t WorldLightRevision();
// Returns validity of the publication and always fills valid output pointers.
// Before first publication it uses the explicit project profile at midnight.
bool CurrentWorldHemisphere(float* horizon, float* ground);
}
