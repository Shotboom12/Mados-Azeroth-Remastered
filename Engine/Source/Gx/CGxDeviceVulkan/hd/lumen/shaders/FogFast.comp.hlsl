// Generated Vulkan compute adaptation of Lumenveil 0.1.1. Original equations retained.
// Claude BRUME1, 24 nov 2026: the fog march of Fog1/2/3Memory0 without what is worth nothing when there are no shafts, no image
// shadows, no clouds, no ceiling and no terrain or floor map (FogStage::Record checks it): same image, less work.
[[vk::binding(0,0)]] cbuffer LvUniforms {float4 LvConstants[128];};
[[vk::binding(1,0)]] SamplerState LvPoint;
[[vk::binding(2,0)]] SamplerState LvLinear;
[[vk::binding(3,0)]] SamplerState LvWrap;
[[vk::binding(20,0)]] RWTexture2D<float4> LvOutput;
// STEPS comes from the command line: 16, 24 or 32 (hdLvQuality 1, 2, 3), see regenerer-brume1.py
#define cWorldViewportPx LvConstants[0]
#define cPixelGrid LvConstants[1]
#define cViewToNdc LvConstants[2]
#define cDepthToViewZ LvConstants[3]
#define cViewToWorld float4x4(LvConstants[4],LvConstants[5],LvConstants[6],LvConstants[7])

static const float kSkyMinDepth = 0.99903;

float2 ViewportOrigin()
{
    return cWorldViewportPx.xy;
}

float2 ViewportSize()
{
    return cWorldViewportPx.zw;
}

float2 ViewportLastPixelCentre()
{
    return ViewportOrigin() + ViewportSize() - 0.5;
}

float FullPixelsPerLowResTexel()
{
    return cPixelGrid.x;
}

float FrameIndex()
{
    return cPixelGrid.y;
}

float2 DepthTexelSize()
{
    return cPixelGrid.zw;
}

float2 ViewToNdcScale()
{
    return cViewToNdc.xy;
}

float2 ViewToNdcOffset()
{
    return cViewToNdc.zw;
}

float DepthAtInfiniteViewZ()
{
    return cDepthToViewZ.x;
}

float DepthPerInverseViewZ()
{
    return cDepthToViewZ.y;
}

float MaxFogDistance()
{
    return cDepthToViewZ.z;
}

float DeepestWorldDepth()
{
    return cDepthToViewZ.w;
}

float3 CameraPositionWorld()
{
    return cViewToWorld[3].xyz;
}

float3 ViewToWorldDirection(float3 viewDirection)
{
    return mul(viewDirection, (float3x3)cViewToWorld);
}

float SampleDepth(Texture2D<float4> depthSampler, float2 pixel)
{
    return depthSampler.SampleLevel(LvPoint,(float4(pixel * DepthTexelSize(), 0, 0)).xy,(float4(pixel * DepthTexelSize(), 0, 0)).w).r;
}

bool BeyondFarClip(float depth)
{
    return depth > DeepestWorldDepth();
}

bool IsSky(float depth)
{
    return depth >= max(DeepestWorldDepth(), kSkyMinDepth);
}

float LinearDepth(float depth)
{
    return BeyondFarClip(depth) ? MaxFogDistance()
                                : min(DepthPerInverseViewZ() / (depth - DepthAtInfiniteViewZ()), MaxFogDistance());
}

float2 LowResTexelToFullPixel(float2 lowResTexel)
{
    float2 pixel = ViewportOrigin() + lowResTexel * FullPixelsPerLowResTexel() +
                   floor(FullPixelsPerLowResTexel() * 0.5) + 0.5;
    return min(pixel, ViewportLastPixelCentre());
}

float2 PixelToNdc(float2 pixel)
{
    return float2((pixel.x - ViewportOrigin().x) / ViewportSize().x * 2 - 1,
                  1 - (pixel.y - ViewportOrigin().y) / ViewportSize().y * 2);
}

float3 ViewRayAtUnitDepth(float2 pixel)
{
    float2 ndc = PixelToNdc(pixel);
    return float3((ndc.x - ViewToNdcOffset().x) / ViewToNdcScale().x,
                  (ndc.y - ViewToNdcOffset().y) / ViewToNdcScale().y, 1);
}

static const float kSkyRatioFloor = 1e-3;
static const float kSkyRatioFloorShare = 0.05;

float3 SkyRatioBase(float3 target)
{
    return max(target, max(kSkyRatioFloor, kSkyRatioFloorShare * max(target.r, max(target.g, target.b))));
}

float InterleavedGradientNoise(float2 pixel)
{
    return frac(52.9829189 * frac(dot(pixel, float2(0.06711056, 0.00583715))));
}

#ifndef STEPS
#define STEPS 24
#endif

static const int kFogLayers = 4;
static const int kRegistersPerLayer = 6;
static const float kGoldenRatioFraction = 0.618034;
static const float kMinOpticalDepth = 1e-6;

#define cLight LvConstants[9]
#define cMarch LvConstants[11]

#define cDriftCoarse LvConstants[38]
#define cDriftFine LvConstants[39]
#define cDriftScale LvConstants[40]
#define cMist LvConstants[41]
#define cDriftDetail LvConstants[42]
#define cTerrainShadow LvConstants[43]
#define cHazeFromSky LvConstants[57]
#define cSkyReference LvConstants[58]
#define cBankFloor LvConstants[59]
#define cBankShape LvConstants[60]

#define cBankShade LvConstants[64]
#define cBankMisc LvConstants[65]
#define cBankNoise LvConstants[66]
static const float kBankEdgeFadePerUv = 16;
static const float kBankPoolRange = 40;
static const float kBankMinTopShare = 0.25;
static const float kBankFarLodFrom = 2.5;
static const float kBankFarLodPerLevel = 0.5;

[[vk::binding(4,0)]] Texture2D<float4> sDepth;
[[vk::binding(5,0)]] Texture3D<float4> sDriftNoise;
[[vk::binding(6,0)]] Texture2D<float4> sTerrainShadow;
[[vk::binding(10,0)]] Texture2D<float4> sSkyReference;
[[vk::binding(11,0)]] Texture2D<float4> sBankFloor;

struct FogLayer
{
    float start;
    float density;
    float g;
    float isotropic;
    float3 emissive;
    float strength;
    float3 diffuse;
    float exponent;
    float upperHeight;
    float upperFalloff;
    float lowerHeight;
    float lowerFalloff;
    float3 shadowEmissive;
    float shadowDensity;
    float shadowed;
    float skyFalloff;
    float limit;
    float bankShare;
};

FogLayer LoadFogLayer(int index)
{
    int first = index * kRegistersPerLayer;
    FogLayer layer;
    layer.start = LvConstants[12+(first)].x;
    layer.density = LvConstants[12+(first)].y;
    layer.g = LvConstants[12+(first)].z;
    layer.isotropic = LvConstants[12+(first)].w;
    layer.emissive = LvConstants[12+(first + 1)].rgb;
    layer.strength = LvConstants[12+(first + 1)].w;
    layer.diffuse = LvConstants[12+(first + 2)].rgb;
    layer.exponent = LvConstants[12+(first + 2)].w;
    layer.upperHeight = LvConstants[12+(first + 3)].x;
    layer.upperFalloff = LvConstants[12+(first + 3)].y;
    layer.lowerHeight = LvConstants[12+(first + 3)].z;
    layer.lowerFalloff = LvConstants[12+(first + 3)].w;
    layer.shadowEmissive = LvConstants[12+(first + 4)].rgb;
    layer.shadowDensity = LvConstants[12+(first + 4)].w;
    layer.shadowed = LvConstants[12+(first + 5)].x;
    layer.skyFalloff = LvConstants[12+(first + 5)].y;
    layer.limit = LvConstants[12+(first + 5)].z;
    layer.bankShare = LvConstants[12+(first + 5)].w;
    return layer;
}

float3 DirectionToLightView()
{
    return cLight.xyz;
}

float LightAboveHorizon()
{
    return cLight.w;
}

float3 HazeFromSky(float2 pixel)
{
    float u = (pixel.x - ViewportOrigin().x) / ViewportSize().x;
    float3 ratio = sSkyReference.SampleLevel(LvPoint,(float4(u, 0.5, 0, 0)).xy,(float4(u, 0.5, 0, 0)).w).rgb;
    return lerp(cHazeFromSky.rgb, ratio * SkyRatioBase(cHazeFromSky.rgb), cSkyReference.x);
}

float HazeFromSkyShare()
{
    return cHazeFromSky.w;
}

bool JitterEnabled()
{
    return cMarch.x > 0;
}

float DistanceCurvePerYard()
{
    return cMarch.y;
}

float HorizonBlendStart()
{
    return cMarch.z;
}

float FarClip()
{
    return cMarch.w;
}

float3 CoarseDriftOrigin()
{
    return cDriftCoarse.xyz;
}

float DriftSlope()
{
    return cDriftCoarse.w;
}

float3 FineDriftOrigin()
{
    return cDriftFine.xyz;
}

float FineDriftLodOffset()
{
    return cDriftFine.w;
}

float3 CoarseDriftPerYard()
{
    return cDriftScale.xxy;
}

float3 FineDriftPerYard()
{
    return cDriftScale.zzw;
}

float DriftTexelsPerYardOfStep()
{
    return cDriftDetail.x;
}

float SwirlPerNoise()
{
    return cDriftDetail.y;
}

float WispShare()
{
    return cDriftDetail.z;
}

float BankWispErosion()
{
    return cBankNoise.x;
}

float DriftOffset()
{
    return cDriftDetail.w;
}

float MistTop()
{
    return cMist.x;
}

float MistFalloff()
{
    return cMist.y;
}

float MistBoost()
{
    return cMist.z;
}

float MistInverseRange()
{
    return cMist.w;
}

float DriftLod(float stepLength)
{
    return log2(stepLength * DriftTexelsPerYardOfStep());
}

float2 DriftNoise(float3 offsetFromCamera, float lod)
{
    float4 patches =
        sDriftNoise.SampleLevel(LvWrap,(float4(offsetFromCamera * CoarseDriftPerYard() + CoarseDriftOrigin(), lod)).xyz,(float4(offsetFromCamera * CoarseDriftPerYard() + CoarseDriftOrigin(), lod)).w);
    float3 fine = offsetFromCamera * FineDriftPerYard() + FineDriftOrigin();
    fine.xy += patches.ba * SwirlPerNoise();
    float wisps = sDriftNoise.SampleLevel(LvWrap,(float4(fine, lod + FineDriftLodOffset())).xyz,(float4(fine, lod + FineDriftLodOffset())).w).g;
    return float2(lerp(patches.r, wisps, WispShare()), patches.r + (wisps - 0.5) * BankWispErosion());
}

float PlainDrift(float noise)
{
    return max(noise * DriftSlope() + DriftOffset(), 0);
}

float BankStrength()
{
    return cBankMisc.y;
}

float BankReferenceZ()
{
    return cBankMisc.x;
}

float BanksInValleysOnly()
{
    return cBankMisc.z;
}

float BankShadeNoiseScale()
{
    return cBankMisc.w;
}

float BankSharpness()
{
    return cBankShape.x;
}

float BankThresholdRise()
{
    return cBankShape.y;
}

float BankPoolGain()
{
    return cBankShape.z;
}

float BankLift()
{
    return cBankShape.w;
}

float3 BankShadeOffset()
{
    return cBankShade.xyz;
}

float BankShadeStrength()
{
    return cBankShade.w;
}

struct BankPlace
{
    float floorRef;
    float top;
    float gain;
    float gate;
    float shift;
    float4 shape;
};

BankPlace PlaceBank(float2 uv)
{
    float4 floors = sBankFloor.SampleLevel(LvPoint,(float4(uv, 0, 0)).xy,(float4(uv, 0, 0)).w);
    float2 fromCentre = abs(uv - 0.5);
    float known = cBankFloor.w * saturate((0.5 - max(fromCentre.x, fromCentre.y)) * kBankEdgeFadePerUv);
    float lake = floors.b * known;
    float sea = floors.a * known;
    float land = saturate(1 - lake - sea);
    float depth = (floors.g - floors.r) * known;
    float relief = clamp(depth / kBankPoolRange, -1, 1);
    float pool = 1 + BankPoolGain() * relief;
    BankPlace b;
    b.floorRef = lerp(BankReferenceZ(), floors.r, known) + BankLift() * max(depth, 0);
    b.shape = LvConstants[61+(0)] * land + LvConstants[61+(1)] * lake + LvConstants[61+(2)] * sea;
    b.top = b.shape.z * max(pool, kBankMinTopShare);
    b.gain = max(pool, 0) * b.shape.w;
    b.gate = lerp(1, max(saturate(2 * relief), 1 - land), BanksInValleysOnly());
    b.shift = BankReferenceZ() - b.floorRef;
    return b;
}

float BankRise(float height, BankPlace b)
{
    return saturate((height - b.floorRef) / b.top);
}

float BankCloud(float noise, float rise, BankPlace b)
{
    return saturate((noise - b.shape.x - BankThresholdRise() * rise) * BankSharpness()) * b.shape.y *
           (1 - rise * rise);
}

float BankDensity(float noise, float height, float lod, BankPlace b)
{
    float rise = BankRise(height, b);
    float far = saturate((lod - kBankFarLodFrom) * kBankFarLodPerLevel);
    return lerp(BankCloud(noise, rise, b), 1 - rise * rise, far) * b.gain;
}

float BankLight(float3 offsetFromCamera, float height, float lod, BankPlace b)
{
    float3 coarse = (offsetFromCamera + BankShadeOffset()) * CoarseDriftPerYard() + CoarseDriftOrigin();
    float noise = 0.5 + (sDriftNoise.SampleLevel(LvWrap,(float4(coarse, lod + 1)).xyz,(float4(coarse, lod + 1)).w).r - 0.5) * BankShadeNoiseScale();
    float rise = BankRise(height + BankShadeOffset().z, b);
    return exp(-BankShadeStrength() * BankCloud(noise, rise, b) * b.gain);
}

float2 TerrainShadowUvAtCamera()
{
    return cTerrainShadow.xy;
}

float TerrainShadowSharpness()
{
    return cTerrainShadow.w;
}

float TerrainLight(float2 uv, float height)
{
    return saturate(height * TerrainShadowSharpness() + sTerrainShadow.SampleLevel(LvPoint,(float4(uv, 0, 0)).xy,(float4(uv, 0, 0)).w).r);
}

float MistDensity(float height, float sampleDistance)
{
    return 1 + MistBoost() * saturate(exp((MistTop() - height) * MistFalloff())) *
                   saturate(1 - sampleDistance * MistInverseRange());
}

float PhaseHG(float g, float cosAngle)
{
    float r = (1 - g) / sqrt(max(1 + g * g - 2 * g * cosAngle, 1e-6));
    return r * r * r;
}

float StepCoverage(FogLayer layer, float stepStart, float sampleDistance, float stepLength)
{
    return saturate((sampleDistance - layer.start) / max(stepLength, 1e-3)) *
           saturate((layer.limit - stepStart) / max(stepLength, 1e-3));
}

float DistanceCurve(FogLayer layer, float sampleDistance)
{
    // Claude BRUME1: strength 0 gives exactly 1.
    float curve = 1;
    [branch] if (layer.strength != 0)
        curve = 1 + layer.strength * pow(saturate((sampleDistance - layer.start) * DistanceCurvePerYard()) + 1e-6,
                                         layer.exponent);
    return curve;
}

float HeightProfile(FogLayer layer, float height)
{
    // Claude BRUME1: falloff 0 gives exactly 1.
    float profile = saturate(exp((layer.upperHeight - height) * layer.upperFalloff));
    [branch] if (layer.lowerFalloff != 0)
        profile *= saturate(exp((height - layer.lowerHeight) * layer.lowerFalloff));
    return profile;
}

// Claude BRUME1: what this layer adds in one step. Same operations in the same order as AccumulateLayer (Fog2Memory0); the factor
// that is the same at every step of the pixel (skyScale) comes in, and nothing is kept for the shaft steps (there are none here).
void AccumulateLayer(FogLayer layer, float phase, float skyScale, float3 hazeColour, float hazeFromSky, float sampleDistance,
                     float stepLength, float coverage, float sampleHeight, float sunVisibility, float4 scales,
                     inout float3 radiance, inout float opticalDepth)
{
    float bankShare = abs(layer.bankShare);
    float distanceCurve = DistanceCurve(layer, sampleDistance);
    float heightProfile = HeightProfile(layer, sampleHeight + max(layer.bankShare, 0) * scales.z);
    float banked = lerp(1, scales.w, bankShare);
    float directLight = lerp(1, sunVisibility, layer.shadowed) * banked;
    float shadowDensityScale = lerp(1, lerp(layer.shadowDensity, 1, sunVisibility), layer.shadowed);
    float layerOpticalDepth = layer.density * skyScale * stepLength * coverage * distanceCurve * heightProfile *
                              shadowDensityScale * lerp(scales.x, scales.y, bankShare);
    float3 own = lerp(layer.emissive, lerp(layer.shadowEmissive, layer.emissive, sunVisibility), layer.shadowed);
    float3 emissive = lerp(own, hazeColour, hazeFromSky);
    radiance += (layer.diffuse * (directLight * phase) + emissive) * layerOpticalDepth;
    opticalDepth += layerOpticalDepth;
}

// The end of a far step (StepBoundary of Fog2Memory0 past its shaft steps, whose length is 0 here).
float StepBoundary(int boundary, float farLength)
{
    float farFraction = boundary / (float)STEPS;
    return farLength * farFraction * farFraction;
}

float StepJitter(float2 lowResTexel)
{
    return JitterEnabled() ? frac(InterleavedGradientNoise(lowResTexel) + FrameIndex() * kGoldenRatioFraction) : 0.5;
}

float4 LvPixel(float2 lowResTexel)
{
    float2 pixel = LowResTexelToFullPixel(lowResTexel);
    float3 viewRay = ViewRayAtUnitDepth(pixel);
    float distancePerViewZ = length(viewRay);
    float3 viewDirection = viewRay / distancePerViewZ;
    float depth = SampleDepth(sDepth, pixel);
    float skyMask = IsSky(depth) ? 1 : 0;
    // F1 (Claude 2026-11-05): an empty pixel below the horizon (no sea floor, past the far clip) takes the
    // sky-tinted haze like the far terrain beside it; only real sky above the horizon keeps the sunlit colour.
    float hazeFromSky = HazeFromSkyShare() * (1 - skyMask * smoothstep(0.0, 0.02, ViewToWorldDirection(viewDirection).z));
    float3 hazeColour = HazeFromSky(pixel);
    float viewZ = LinearDepth(depth);
    float horizonBlend = max(BeyondFarClip(depth) ? 1 : 0, smoothstep(HorizonBlendStart(), FarClip(), viewZ));
    viewZ = lerp(viewZ, MaxFogDistance(), horizonBlend);
    float marchLength = min(viewZ * distancePerViewZ, MaxFogDistance());

    float jitter = StepJitter(lowResTexel);
    float3 cameraWorld = CameraPositionWorld();
    float3 directionWorld = ViewToWorldDirection(viewDirection);
    // F2 (Claude 2026-11-05): at and below the horizon nothing is drawn past the far clip (the native fog ends there).
    // March no further than the far clip there, not MaxFogDistance (4x farther): looking toward the light, 5000 yards of
    // fog at eye height saturated to white over the empty sea and the far terrain. The cap fades out over the first
    // ~3 degrees above the horizon, so the real sky keeps its full march.
    marchLength = min(marchLength, lerp(FarClip() * distancePerViewZ, MaxFogDistance(), smoothstep(0.0, 0.05, directionWorld.z)));
    // Preserve the native fog's existing air/water boundary. This is a read-only
    // plane supplied by the water owner, not a new water effect or depth write.
    if(LvConstants[127].y>0.5 && abs(directionWorld.z)>1e-6){float planeDistance=(LvConstants[127].x-cameraWorld.z)/directionWorld.z;if(planeDistance>0)marchLength=min(marchLength,planeDistance);}
    float cosToLight = dot(DirectionToLightView(), viewDirection);
    float upward = max(directionWorld.z, 0);
    float riseLevelledAtHorizon = lerp(directionWorld.z, upward, horizonBlend);
    float3 marchDirectionWorld = float3(directionWorld.xy, riseLevelledAtHorizon);

    float phase[kFogLayers];
    float skyScale[kFogLayers];
    float skyUpward = upward * skyMask;
    [unroll] for (int i = 0; i < kFogLayers; i++)
    {
        FogLayer layer = LoadFogLayer(i);
        skyScale[i] = exp(-skyUpward * layer.skyFalloff);
        phase[i] = lerp(PhaseHG(layer.g, cosToLight), 1, layer.isotropic);
    }

    // Claude BRUME1: FogStage::Record runs this kernel only when there are no shafts, no image shadows, no clouds, no ceiling and no
    // terrain or floor map. Then the bank stands at the same place and the light is the same at every step: worked out once.
    bool banks = BankStrength() > 0;
    BankPlace bank = PlaceBank(cBankFloor.xy);
    float sunVisibility = LightAboveHorizon() * TerrainLight(TerrainShadowUvAtCamera(), 0);
    bool shade = banks && BankShadeStrength() > 0;

    float3 inScatteredRadiance = 0;
    float transmittance = 1;
    float stepEnd = 0;
    [loop] for (int s = 0; s < STEPS; s++)
    {
        float stepStart = stepEnd;
        stepEnd = StepBoundary(s + 1, marchLength);
        float stepLength = stepEnd - stepStart;
        float sampleDistance = lerp(stepStart, stepEnd, jitter);
        float sampleHeight = cameraWorld.z + riseLevelledAtHorizon * sampleDistance;
        // A layer that does not cover this step, or a fully banked one over the top of the bank, adds exactly 0: skipped. A step
        // without any layer left reads no noise at all.
        bool overBank = banks && bank.gate == 1 && BankRise(sampleHeight, bank) >= 1;
        float coverage[kFogLayers];
        bool active = false;
        [unroll] for (int c = 0; c < kFogLayers; c++)
        {
            FogLayer layer = LoadFogLayer(c);
            coverage[c] = layer.density != 0 && !(overBank && abs(layer.bankShare) == 1)
                              ? StepCoverage(layer, stepStart, sampleDistance, stepLength) : 0;
            active = active || coverage[c] != 0;
        }
        [branch] if (stepLength > 0 && active)
        {
            float3 driftOffset = marchDirectionWorld * sampleDistance;
            float lod = DriftLod(stepLength);
            float2 noise = DriftNoise(driftOffset, lod);
            float4 scales = float4(PlainDrift(noise.x), PlainDrift(noise.x), 0, 1);
            [branch] if (banks)
            {
                scales.y = lerp(scales.x, BankDensity(noise.y, sampleHeight, lod, bank), bank.gate);
                scales.z = bank.shift * bank.gate;
                [branch] if (shade && scales.y > 0)
                    scales.w = lerp(1, BankLight(driftOffset, sampleHeight, lod, bank), bank.gate);
            }
            scales.xy *= MistDensity(sampleHeight + BankStrength() * scales.z, sampleDistance);
            float3 stepRadiance = 0;
            float stepOpticalDepth = 0;
            [unroll] for (int j = 0; j < kFogLayers; j++)
                [branch] if (coverage[j] != 0)
                    AccumulateLayer(LoadFogLayer(j), phase[j], skyScale[j], hazeColour, hazeFromSky, sampleDistance,
                                    stepLength, coverage[j], sampleHeight, sunVisibility, scales, stepRadiance,
                                    stepOpticalDepth);
            float stepTransmittance = exp(-stepOpticalDepth);
            float extinctionOverStep = (1 - stepTransmittance) / max(stepOpticalDepth, kMinOpticalDepth);
            float inStepAttenuation = stepOpticalDepth > kMinOpticalDepth ? extinctionOverStep : 1;
            inScatteredRadiance += transmittance * stepRadiance * inStepAttenuation;
            transmittance *= stepTransmittance;
        }
    }
    return float4(inScatteredRadiance, 1 - transmittance);
}

[numthreads(8,8,1)] void CSMain(uint3 id : SV_DispatchThreadID) {
uint w,h;LvOutput.GetDimensions(w,h);if(id.x>=w||id.y>=h)return;
LvOutput[id.xy]=LvPixel(float2(id.xy));
}
