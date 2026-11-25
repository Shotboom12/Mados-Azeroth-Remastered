// Claude LV27 2026-11-15: lamp reflections on the water, ported from Lumenveil 0.1.1 vf_water_lamps.hlsl (GPL-2.0).
[[vk::binding(0,0)]] cbuffer LvUniforms {float4 LvConstants[128];};
[[vk::binding(1,0)]] SamplerState LvPoint;
[[vk::binding(2,0)]] SamplerState LvLinear;
[[vk::binding(3,0)]] SamplerState LvWrap;
[[vk::binding(20,0)]] [[vk::image_format("rgba8")]] RWTexture2D<float4> LvOutput;
#define cWorldViewportPx LvConstants[0]
#define cPixelGrid LvConstants[1]
#define cViewToNdc LvConstants[2]
#define cDepthToViewZ LvConstants[3]
#define cViewToWorld float4x4(LvConstants[4],LvConstants[5],LvConstants[6],LvConstants[7])
#define cLowResTarget LvConstants[8]

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

bool OutsideViewport(float2 pixel)
{
    return any(pixel < ViewportOrigin()) || any(pixel > ViewportOrigin() + ViewportSize());
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

float2 LowResSize()
{
    return cLowResTarget.xy;
}

float2 LowResTexelSize()
{
    return cLowResTarget.zw;
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

static const float kFirstEdgeOccluderViewZ = 8;
static const float kEdgeOccluderViewZRatio = 2.5;

float4 EdgeOccluderViewZs()
{
    return kFirstEdgeOccluderViewZ * float4(1, kEdgeOccluderViewZRatio, kEdgeOccluderViewZRatio * kEdgeOccluderViewZRatio,
                                            kEdgeOccluderViewZRatio * kEdgeOccluderViewZRatio * kEdgeOccluderViewZRatio);
}

float EdgeOccluderLevel(float viewZ)
{
    return log2(viewZ / kFirstEdgeOccluderViewZ) / log2(kEdgeOccluderViewZRatio);
}

float2 LowResTexelToFullPixel(float2 lowResTexel)
{
    float2 pixel = ViewportOrigin() + lowResTexel * FullPixelsPerLowResTexel() +
                   floor(FullPixelsPerLowResTexel() * 0.5) + 0.5;
    return min(pixel, ViewportLastPixelCentre());
}

float2 FullPixelToLowResTexel(float2 pixel)
{
    return (pixel - ViewportOrigin() - floor(FullPixelsPerLowResTexel() * 0.5) - 0.5) / FullPixelsPerLowResTexel();
}

float2 LowResTexelToUv(float2 lowResTexel)
{
    return (lowResTexel + 0.5) * LowResTexelSize();
}

float2 PixelToNdc(float2 pixel)
{
    return float2((pixel.x - ViewportOrigin().x) / ViewportSize().x * 2 - 1,
                  1 - (pixel.y - ViewportOrigin().y) / ViewportSize().y * 2);
}

float2 NdcToPixel(float2 ndc)
{
    return ViewportOrigin() + float2(ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5) * ViewportSize();
}

float3 ViewRayAtUnitDepth(float2 pixel)
{
    float2 ndc = PixelToNdc(pixel);
    return float3((ndc.x - ViewToNdcOffset().x) / ViewToNdcScale().x,
                  (ndc.y - ViewToNdcOffset().y) / ViewToNdcScale().y, 1);
}

bool InsideBody(float3 position, float4 bodyBase, float4 bodyUp)
{
    float3 fromBase = position - bodyBase.xyz;
    float along = dot(fromBase, bodyUp.xyz);
    float3 across = fromBase - bodyUp.xyz * along;
    return along > 0 && along < bodyUp.w && dot(across, across) < bodyBase.w * bodyBase.w;
}

float2 ViewToPixel(float3 viewPosition)
{
    float2 ndc = float2(viewPosition.x / viewPosition.z * ViewToNdcScale().x + ViewToNdcOffset().x,
                        viewPosition.y / viewPosition.z * ViewToNdcScale().y + ViewToNdcOffset().y);
    return NdcToPixel(ndc);
}

static const float kSkyRatioFloor = 1e-3;
static const float kSkyRatioFloorShare = 0.05;
static const float kSkyRatioMax = 64;

float3 SkyRatioBase(float3 target)
{
    return max(target, max(kSkyRatioFloor, kSkyRatioFloorShare * max(target.r, max(target.g, target.b))));
}

float InterleavedGradientNoise(float2 pixel)
{
    return frac(52.9829189 * frac(dot(pixel, float2(0.06711056, 0.00583715))));
}


static const float kLampSlots = 497;            // Claude LV41: 256 lamps + 128 windows + 48 effects + 1 lantern + 64 far halos (was 237)
static const float kLampTableRows = 10;         // Claude LV34: + kLampCubeRow; LV37: + kLampCubeCentreRow
static const float kLampSphereRow = 0;
static const float kLampLightRow = 1;
static const float kLampScreenRow = 2;
static const float kLampTestRow = 3;
static const float kLampSurfaceRow = 4;
static const float kLampViewRow = 5;
static const float kLampEmitRow = 6;
static const float kLampCoreRow = 7;
static const float kLampCubeRow = 8;            // Claude LV34: x cube + 1, y radius, z fade, w 1 = wants a cube
static const float kLampCubeCentreRow = 9;      // Claude LV37: xyz where the cube was drawn (view), w its near (< 0: all faces)

float SlotU(float slot)
{
    return (slot + 0.5) / kLampSlots;
}

float4 LampTexel(Texture2D<float4> table, float slotU, float row)
{
    return table.SampleLevel(LvPoint,(float4(slotU, (row + 0.5) / kLampTableRows, 0, 0)).xy,(float4(slotU, (row + 0.5) / kLampTableRows, 0, 0)).w);
}


// Inputs (binding = 4 + texture index in LvSuite::WaterLamps):
//   4 sDepth: the depth AFTER the liquids (the Cata water writes its depth when hdLvWaterLamps is on)
//   5 sLampTable: this frame's lamp table (LampSurfaces' own)
//   6 sDepthBefore: the depth after the opaque world, before the liquids (DepthCopy, R32)
//   7 sScene: the frame before this pass (copy, R8G8B8A8 as the frame's bytes)
//  10 sLampCubes: the lamps' shadow cubes (LV22-LV25)
[[vk::binding(4,0)]] Texture2D<float4> sDepth;
[[vk::binding(5,0)]] Texture2D<float4> sLampTable;
[[vk::binding(6,0)]] Texture2D<float4> sDepthBefore;
[[vk::binding(7,0)]] Texture2D<float4> sScene;
// Claude LV28: the Cata waters' surface normals (their s5), up to four kinds this frame.
[[vk::binding(8,0)]] Texture2D<float4> sCataNormals0;
[[vk::binding(9,0)]] Texture2D<float4> sCataNormals1;
[[vk::binding(11,0)]] Texture2D<float4> sCataNormals2;
[[vk::binding(12,0)]] Texture2D<float4> sCataNormals3;
// Claude LV28: the characters' ripples, Cata's two displacement maps (its s4, s8: x the height now, y the one before).
[[vk::binding(13,0)]] Texture2D<float4> sRipples0;
[[vk::binding(14,0)]] Texture2D<float4> sRipples1;
// Claude 2026-11-15 lot LV22 hdLvLampCubes: the lamp's shadow cube, six depth faces drawn FROM the lamp and kept frame after frame
// (LampCubes, LvStages.cpp): whether the lamp sees this point no longer depends on the camera. Faces and axes are
// HdVulkanLocalShadow::BuildMatrices' (atlas cells +X,-X,+Y / -Y,+Z,-Z; up +Z, and -Y / +Y for the +Z / -Z faces).
[[vk::binding(10,0)]] Texture2D<float4> sLampCubes;
// Claude LV36: the movers' layer (players, creatures, mounts), the same atlas layout, drawn each frame for the faces that see one;
// kLampCubeRow.w = 1 + 2 x those faces' bits (0: none drawn this frame, the layer is not read).
[[vk::binding(15,0)]] Texture2D<float4> sMoverCubes;
uint MoverFaces(float cubeRowW)
{
    return (uint)round(max(cubeRowW - 1, 0) * 0.5);
}
#define cCubeAtlas LvConstants[32]
static const float kCubeNormalOffset = 0.02;
static const float kCubeNormalOffsetPerYard = 0.006;
static const float kCubeBias = 0.03;
static const float kCubeBiasPerYard = 0.012;

// Claude LV34: the cube and its radius come from the light's own kLampCubeRow (no 16-cube limit); the near planes are every
// cube's (cCubeAtlas.z, and .w for the up and down faces), as LampCubes draws them all.
// Claude LV35: the water's own test. The water is no caster in the cubes (they hold the opaque world drawn before the liquids):
// the point of the water is not in its cube, so it cannot shade itself and needs neither the surfaces' normal offset nor their
// slope bias (LV23). Those grow with the light's grazing angle, and a far lamp always grazes the water: at 300 yd they let a
// pier a few yards above the water through. Only the depth bias of one texel at this distance (the 2 x 2 filter's reach) stays.
// Claude LV37: centre = the light's kLampCubeCentreRow (where its cube was drawn, view space; w its near, < 0 for all six faces) and
// fromLamp the point seen from there (world). carrierBody: the belt lantern; its carrier's own body (cCarrierBase / cCarrierUp, the
// same body LampSurfaces is given) never blocks it in the movers' layer, as Lumenveil's InsideBody.
#define cCarrierBase LvConstants[33]
#define cCarrierUp LvConstants[34]
float CubeShadow(float cube, float radius, float4 centre, float3 fromLamp, uint movers, bool carrierBody)
{
    float4 info = float4(radius, abs(centre.w), centre.w < 0 ? -centre.w : cCubeAtlas.w, 0);
    float nearPlane = info.y;
    float size = cCubeAtlas.x;
    float columns = cCubeAtlas.y;
    float yards = max(length(fromLamp), 1e-3);
    float texelYards = 2 * yards / size;
    float3 p = fromLamp;
    float3 a = abs(p);
    int face = (a.x >= a.y && a.x >= a.z) ? (p.x >= 0 ? 0 : 1) : (a.y >= a.z ? (p.y >= 0 ? 2 : 3) : (p.z >= 0 ? 4 : 5));
    // Claude LV24 hdLvLampCubeNearZ: the up and down faces were drawn with their own near plane (info.z; 0 before LV24).
    if (face >= 4 && info.z > 0)
        nearPlane = info.z;
    float3 axis = face == 0 ? float3(1, 0, 0) : face == 1 ? float3(-1, 0, 0) : face == 2 ? float3(0, 1, 0)
                : face == 3 ? float3(0, -1, 0) : face == 4 ? float3(0, 0, 1) : float3(0, 0, -1);
    float3 up = face == 4 ? float3(0, -1, 0) : face == 5 ? float3(0, 1, 0) : float3(0, 0, 1);
    float3 across = cross(up, axis);
    float3 upward = cross(axis, across);
    float z = dot(p, axis);
    [branch] if (z <= nearPlane || z >= radius)
        return 1;
    float2 local = float2(dot(p, across) / z * 0.5 + 0.5, 0.5 - dot(p, upward) / z * 0.5);
    float c = radius / (radius - nearPlane);
    float d = -nearPlane * c;
    float limit = z - (kCubeBias + texelYards);
    float2 cell = float2((fmod(cube, columns) * 3 + (face % 3)) * size, (floor(cube / columns) * 2 + (face / 3)) * size);
    float2 texel = local * size - 0.5;
    float2 base = floor(texel);
    float2 f = texel - base;
    float lit = 0;
    [unroll] for (int j = 0; j < 2; j++)
        [unroll] for (int i = 0; i < 2; i++)
        {
            float2 tap = clamp(base + float2(i, j), 0, size - 1);
            float stored = sLampCubes.Load(int3(cell + tap, 0)).r;
            float storedZ = d / min(stored - c, -1e-6);
            [branch] if ((movers >> face) & 1u)    // Claude LV36: a unit nearer the light along this texel
            {
                float moverZ = d / min(sMoverCubes.Load(int3(cell + tap, 0)).r - c, -1e-6);
                bool own = carrierBody && InsideBody(centre.xyz + mul((float3x3)cViewToWorld, p * (moverZ / z)),
                                                     cCarrierBase, cCarrierUp);   // Claude LV37
                storedZ = own ? storedZ : min(storedZ, moverZ);
            }
            float weight = (i == 0 ? 1 - f.x : f.x) * (j == 0 ? 1 - f.y : f.y);
            lit += limit <= storedZ ? weight : 0;
        }
    return lit;
}

#define cWaterLamps LvConstants[9]   // x slots, y gain, z roughness, w 1 = frame bytes are BGR
// Claude LV30: [14].x LampLight / LampHaze (0: no far lamp recovered), y kIndoorLampLight / kIndoorLampHaze, z kHiddenIndoorLampShare
#define cFarLamps LvConstants[14]
// Lumenveil fog_model.cpp LampNearCameraShare (kNearLampHazeShare, kNearLampFadeFrom, kNearLampFadeTo).
static const float kNearLampHazeShare = 0.25;
static const float kNearLampFadeFrom = 3;
static const float kNearLampFadeTo = 14;

float LampNearCameraShare(float cameraYards)
{
    return kNearLampHazeShare + (1 - kNearLampHazeShare) * smoothstep(kNearLampFadeFrom, kNearLampFadeTo, cameraYards);
}
#define cWaterUp LvConstants[15]     // world up in view space (xyz); Claude LV29: w hdLvWaterLampShadow (0, 1, 2)
// Claude LV28 (Lumenveil vf_lamp_shadow.hlsli, as LampSurfaces): the lamp seen from the water through the screen's depth.
static const float kLampBodyYards = 1.5;
static const float kShadowStartYards = 0.2;
static const float kMaxShadowStartShare = 0.5;
static const float kShadowBias = 0.1;
static const float kShadowBiasPerViewZ = 0.003;
static const float kMinOccluderYards = 1;
static const float kOccluderThicknessInSteps = 1.5;
static const float kOccluderThicknessPerViewZ = 0.02;
static const float kMinSampleViewZ = 0.3;

// Claude LV29: the point seen at this pixel of a depth texture (view space).
float3 SeenAt(Texture2D<float4> depthTexture, float2 pixel)
{
    return ViewRayAtUnitDepth(pixel) * LinearDepth(SampleDepth(depthTexture, pixel));
}

// Claude LV29: how deep a point lies under the surface seen at its pixel, measured across that surface (along its normal,
// from the depth: each axis from the neighbour nearer in depth, as a neighbour across an edge would tilt it). -1 when the
// surface is not resolved there (a neighbour farther than the occluder thickness on both sides of an axis).
float DepthUnderSurface(Texture2D<float4> depthTexture, float2 samplePixel, float3 samplePosition, float thickness,
                        out float3 normal)
{
    normal = 0;
    float2 centre = floor(samplePixel) + 0.5;
    float3 seen = SeenAt(depthTexture, centre);
    float3 right = SeenAt(depthTexture, centre + float2(1, 0)) - seen;
    float3 left = seen - SeenAt(depthTexture, centre - float2(1, 0));
    float3 below = SeenAt(depthTexture, centre + float2(0, 1)) - seen;
    float3 above = seen - SeenAt(depthTexture, centre - float2(0, 1));
    float3 across = dot(right, right) < dot(left, left) ? right : left;
    float3 along = dot(below, below) < dot(above, above) ? below : above;
    normal = cross(across, along);
    float normalLength = length(normal);
    [branch] if (dot(across, across) > thickness * thickness || dot(along, along) > thickness * thickness ||
                 normalLength <= 0)
        return -1;
    normal /= normalLength;
    normal = dot(normal, seen) > 0 ? -normal : normal;    // out of the surface, toward the camera
    float3 occluderPosition = samplePosition * (seen.z / samplePosition.z);
    return dot(occluderPosition - samplePosition, normal);
}

float LampShadow(Texture2D<float4> depthTexture, float3 start, float3 toLamp, float distance, float jitter, int steps,
                 float clearYards, float startYards, float4 bodyBase, float4 bodyUp, float4 postBase, float4 postUp)
{
    float travel = saturate(1 - clearYards / max(distance, 1e-3));
    float3 path = toLamp * travel;
    float startShare = min(startYards / max(distance * travel, 1e-3), kMaxShadowStartShare);
    float stepThickness = distance * travel / steps * kOccluderThicknessInSteps;
    float thickness = max(kMinOccluderYards, stepThickness);
    float3 pathDirection = toLamp / max(distance, 1e-3);
    float3 lamp = start + toLamp;
    float lit = 1;
    [loop] for (int k = 0; k < steps && lit > 0; k++)
    {
        float3 samplePosition = start + path * lerp(startShare, 1, (k + jitter) / steps);
        [branch] if (samplePosition.z >= kMinSampleViewZ)
        {
            float2 samplePixel = ViewToPixel(samplePosition);
            [branch] if (!OutsideViewport(samplePixel))
            {
                float sceneDepth = SampleDepth(depthTexture, samplePixel);
                float sceneViewZ = LinearDepth(sceneDepth);
                float behind = samplePosition.z - sceneViewZ;
                float3 occluderPosition = samplePosition * (sceneViewZ / samplePosition.z);
                float3 fromLamp = occluderPosition - lamp;
                float bias = kShadowBias + kShadowBiasPerViewZ * samplePosition.z;
                float thick = max(thickness, kOccluderThicknessPerViewZ * samplePosition.z);
                bool occluder = !BeyondFarClip(sceneDepth) && behind > bias &&
                                dot(fromLamp, fromLamp) > clearYards * clearYards &&
                                !InsideBody(occluderPosition, bodyBase, bodyUp) &&
                                !InsideBody(occluderPosition, postBase, postUp); // Claude LV21: the lamp's own post
                // Lumenveil's thickness: how far behind the seen surface along the camera ray. Claude LV29: or how deep under
                // it across the surface: the ground seen from a low camera puts a point a yard under it many yards behind
                // it along the ray, and Lumenveil's test took the bank between a lake and a far lamp for a thin object.
                // Lumenveil's rule (a solid is crossed with a sample inside it if it is 1.5 steps thick) is taken across
                // the surface: 1.5 steps of the path's own advance across it (Claude LV29 b). A path that rises through a
                // pier or a bank meets it; a path that runs under a plank, nearly level with it, is not hidden by it.
                [branch] if (occluder && !(behind < thick))
                {
                    float3 normal;
                    float under = DepthUnderSurface(depthTexture, samplePixel, samplePosition, thick, normal);
                    float3 ray = samplePosition / max(length(samplePosition), 1e-4);
                    float across = max(kMinOccluderYards,
                                       max(stepThickness * abs(dot(pathDirection, normal)),
                                           kOccluderThicknessPerViewZ * samplePosition.z * abs(dot(ray, normal))));
                    occluder = under > bias && under < bias + across;
                }
                lit = occluder ? 0 : 1;
            }
        }
    }
    return lit;
}

static const float kPi = 3.14159265;
static const float kSourceSpread = 0.25;      // vf_water_lamps.hlsl
static const float kFlameYards = 0.3;         // water_lamps.h kWaterLampFlameYards
static const float kNearYards = 0.5;          // water_lamps.h kWaterLampNearYards
static const float kMinRoughness = 1e-5;
static const float kMinHalfwayCosine = 0.01;
static const float kMinGrazing = 0.05;        // vf_water_surface.hlsli
static const float kWindowWrap = 0.1;
static const float kFalloffPerYard = 0.7;
static const float kFalloffPerSquareYard = 0.03;
static const float kFresnelAtNormal = 0.02;   // water
static const float kMinWaterYards = 0.05;     // the surface must stand this far in front of what was there before the liquids
static const float kMinFlatness = 0.85;       // a water surface faces up: cos 32 degrees
static const float kMinOccludedLight = 0.002;  // vf_water_lamps.hlsl: dimmer glints are not marched
static const int kOcclusionSteps = 16;   // Lumenveil's 8, doubled: a long path to a far lamp no longer steps over a hill
static const float kOcclusionPlace = 0.5;
static const float3 kLuminanceWeights = float3(0.2126, 0.7152, 0.0722);

float3 ViewAt(float2 pixel)
{
    return ViewRayAtUnitDepth(pixel) * LinearDepth(SampleDepth(sDepth, pixel));
}

float Fresnel(float cosine)
{
    float x = 1 - saturate(cosine);
    float x2 = x * x;
    return kFresnelAtNormal + (1 - kFresnelAtNormal) * x2 * x2 * x;
}

// Claude LV28 hdLvWaterLampWaves: the Cata waters' own waves. [35].x waters this frame, z 1 = on. Water w at [36 + 9 w]:
// +0..3 each lookup's uv per world yard (du/dx, du/dy, dv/dx, dv/dy), +4 +5 each lookup's uv at the camera (wrapped),
// +6 its box (x, y min / max from the camera; the chunks' global: everything), +7 x the slope it ends with (LiquidType f[14]),
// y the waves' strength (f[6]), z its normals texture, w 1 = a chunk's (global); +8 x the ripples' strength (f[15]).
// The ripple maps: [108], [109] each map's (camera - its corner) / its size and 1 / its size, [110] each map's texel,
// each map's interpolation, [111].x 1 = there this frame.
#define cCataWaves LvConstants[35]
#define cRipples LvConstants[111]

float RippleHeight(int map, float2 uv)
{
    float4 s = map == 0 ? sRipples0.SampleLevel(LvLinear, uv, 0) : sRipples1.SampleLevel(LvLinear, uv, 0);
    float a = map == 0 ? LvConstants[110].z : LvConstants[110].w;
    return lerp(s.y, s.x, a);
}

// CataProcWaterAbove's ripple part, map by map: three taps a texel apart at the map's place for this point (moved by
// 0.02 x the waves' unit slope), the two differences as unit slopes multiplied together, f[15]; nothing at the map's edge.
float2 RippleSlope(float2 rel, float2 unit, float strength)
{
    float2 total = 0;
    [unroll] for (int map = 0; map < 2; map++)
    {
        float4 place = LvConstants[108 + map];
        float texel = map == 0 ? LvConstants[110].x : LvConstants[110].y;
        float2 uv = (rel + place.xy / place.zw) * place.zw - (unit * 0.02 + 1e-6);
        float h0 = RippleHeight(map, uv);
        float dx = RippleHeight(map, uv + float2(texel, 0)) - h0;
        float dy = RippleHeight(map, uv + float2(0, texel)) - h0;
        float2 slope = float2(dx, dy) * rsqrt(1 + dx * dx) * rsqrt(1 + dy * dy) * strength;
        float edge = max(abs(uv.x * 2 - 1), abs(uv.y * 2 - 1));
        slope = edge >= 1 - texel ? 0 : slope;
        total += slope;
    }
    return total;
}

float2 CataLookup(int water, int n, float2 rel)
{
    float4 j = LvConstants[36 + 9 * water + n];
    float4 c = LvConstants[36 + 9 * water + 4 + n / 2];
    float2 at = (n % 2) == 0 ? c.xy : c.zw;
    return at + float2(dot(j.xy, rel), dot(j.zw, rel));
}

float2 CataSample(int tex, float2 uv, float lod)
{
    [branch] if (tex == 0) return sCataNormals0.SampleLevel(LvWrap, uv, lod).xy;
    [branch] if (tex == 1) return sCataNormals1.SampleLevel(LvWrap, uv, lod).xy;
    [branch] if (tex == 2) return sCataNormals2.SampleLevel(LvWrap, uv, lod).xy;
    return sCataNormals3.SampleLevel(LvWrap, uv, lod).xy;
}

float CataLevels(int tex, out float width)
{
    float h, levels;
    if (tex == 0) sCataNormals0.GetDimensions(0, width, h, levels);
    else if (tex == 1) sCataNormals1.GetDimensions(0, width, h, levels);
    else if (tex == 2) sCataNormals2.GetDimensions(0, width, h, levels);
    else sCataNormals3.GetDimensions(0, width, h, levels);
    return levels;
}

// The water holding this point: a map object's whose box holds it (with a yard of margin), else a chunk's; -1: none.
int CataWaterAt(float2 rel)
{
    int found = -1;
    int count = (int)cCataWaves.x;
    [loop] for (int w = 0; w < count; w++)
    {
        float4 box = LvConstants[36 + 9 * w + 6];
        if (found < 0 && all(rel >= box.xy - 1) && all(rel <= box.zw + 1))
            found = w;
    }
    return found;
}

// CataProcWaterAbove's normal, its surface-normal part (the characters' ripple maps aside): the four lookups, the
// distance blend, f[6], then f[14] on the unit slope; mips by the pixel's footprint (no lookup derivatives here).
bool CataNormalWorld(float3 surface, float3 rel, float viewCosine, out float3 normal)
{
    normal = float3(0, 0, 1);
    int water = CataWaterAt(rel.xy);
    [branch] if (water < 0)
        return false;
    float4 params = LvConstants[36 + 9 * water + 7];
    int tex = (int)params.z;
    float w;
    float levels = CataLevels(tex, w);
    float pixelYards = 2 * surface.z / (ViewToNdcScale().y * ViewportSize().y) / max(viewCosine, 0.15);
    float4 j0 = LvConstants[36 + 9 * water], j2 = LvConstants[36 + 9 * water + 2];
    float spread = max(max(length(j0.xy), length(j0.zw)), max(length(j2.xy), length(j2.zw)));
    float lod = clamp(log2(max(spread * pixelYards * w, 1e-4)), 0, levels - 1);
    float4 r;
    r.xy = CataSample(tex, CataLookup(water, 0, rel.xy), lod) + CataSample(tex, CataLookup(water, 1, rel.xy), lod);
    r.zw = CataSample(tex, CataLookup(water, 2, rel.xy), lod) + CataSample(tex, CataLookup(water, 3, rel.xy), lod);
    r -= 1;
    r.zw *= 1.4;
    float2 detail = r.xy * 2 - r.zw;
    float blend = saturate(length(rel) * 0.001 + 0.2);
    float2 slope = (blend * detail + r.zw) * params.y;
    float2 unit = normalize(float3(slope, 1)).xy;
    [branch] if (cRipples.x > 0.5)
        unit += RippleSlope(rel.xy, unit, LvConstants[36 + 9 * water + 8].x);
    normal = normalize(float3(params.x * unit, 1));
    return true;
}

#ifdef HD_WATER_OPT
// Claude EAU1 : une case par lampe (497 -> 16 mots), mise par le groupe avant la boucle des pixels.
static const uint kLampMaskWords = 16;
groupshared uint gLampMask[kLampMaskWords];
groupshared uint gAnyWater;
// Claude EAU2 : les lignes de la table des lampes retenues, 64 cases a la fois, lues une seule fois par le groupe
// (une lampe par fil) au lieu d'une fois par pixel. Memes valeurs (lecture au point), meme ordre croissant des cases.
static const uint kLampChunk = 64;
groupshared float4 gLampView[kLampChunk];
groupshared float4 gLampEnergy[kLampChunk];      // l'energie apres la reprise des halos lointains (ne depend pas du pixel)
groupshared float4 gLampEmit[kLampChunk];
groupshared float4 gLampCube[kLampChunk];
groupshared float4 gLampCubeCentre[kLampChunk];

// Claude EAU3 (hdLvWaterCull) : le reflet d'une lampe est un lobe tres etroit (rugosite 0,005) : pour la plupart des couples
// pixel x lampe, LampGlint calcule lobe = exp((c2 - 1) / (c2 * spread)) avec un exposant bien en dessous de -104, donc
// exp donne exactement 0 (plus petit que le plus petit flottant), light3 = energie x 0 = 0, l'ombre n'est pas lue
// (0 < kMinOccludedLight) et glint += 0 ne change aucun bit. Ce test court refait c2 et spread, et ne saute la lampe que si
// l'exposant est sous -kZeroLobeBound (120 : 15 % de marge sur -104, les arrondis du test sont de l'ordre de 1e-6).
// Toute valeur douteuse (NaN, demi-vecteur nul) fait echouer le test : la lampe passe alors par LampGlint, inchangee.
#define cWaterCull LvConstants[35].w               // 0 = sans test (EAU2), 1 = test, 3 = temoin (borne beaucoup trop basse)
static const float kZeroLobeBound = 120;
static const float kZeroLobeControl = 2;          // temoin : saute des lampes qui eclairent, la preuve doit trouver des differences
bool LobeIsZero(float3 surface, float3 normal, float3 toCamera, float roughness, float4 lamp, float emitW, float bound)
{
    float3 toLamp = lamp.xyz - surface;
    float distanceSquared = max(dot(toLamp, toLamp), 1e-4);
    float3 halfway = toLamp * rsqrt(distanceSquared) + toCamera;   // light + toCamera, sans normaliser
    float nh = dot(normal, halfway);
    float c2 = max(nh > 0 ? nh * nh / dot(halfway, halfway) : 0, kMinHalfwayCosine * kMinHalfwayCosine);
    float size = emitW > 0 ? emitW : kFlameYards;
    float spread = roughness + kSourceSpread * size * size / distanceSquared;
    return (1 - c2) >= bound * c2 * spread;        // faux pour NaN
}

// Claude EAU4 (hdLvWaterTiles) : le meme saut, mais une fois par tuile 8x8 au lieu d'une fois par pixel. La tuile garde la boite
// (vue) de ses points d'eau et le plus petit cosinus entre leur normale et le haut. Une lampe est retiree du masque de la tuile
// seulement si, pour TOUT point de la boite et TOUTE normale du cone, l'exposant du lobe est sous -bound (120 : exp donne 0
// exactement des -104) : elle ajoute alors exactement 0 a chaque pixel, et le pixel l'aurait sautee lui-meme (EAU3).
// Bornes : |l_p - l_0| <= 2 r / |q - s_0| et |v_p - v_0| <= 2 r / |s_0| (vecteurs unitaires, r = demi-diagonale de la boite),
// donc l'angle entre le demi-vecteur du pixel et celui du centre est sous asin(|dH| / |H_0|) ; la normale est a moins de
// acos(minCos) du haut ; spread est le plus grand a la plus courte distance (|q - s_0| - r). Tout doute : la lampe reste.
#define cWaterTiles LvConstants[35].y              // 0 = sans tuiles, 1 = tuiles, 3 = temoin (borne beaucoup trop basse)
groupshared uint gBoxMin[3];
groupshared uint gBoxMax[3];
groupshared uint gMinUp;
uint OrderedBits(float f)
{
    uint u = asuint(f);
    return (u & 0x80000000u) != 0 ? ~u : (u | 0x80000000u);
}
float FromOrdered(uint u)
{
    return asfloat((u & 0x80000000u) != 0 ? (u & 0x7FFFFFFFu) : ~u);
}
bool TileLobeIsZero(float3 boxMin, float3 boxMax, float minUp, float3 up, float roughness, float4 lamp, float emitW, float bound)
{
    float3 centre = (boxMin + boxMax) * 0.5;
    float r = length(boxMax - boxMin) * 0.5 * 1.001 + 1e-4;
    float3 toLamp = lamp.xyz - centre;
    float dl = length(toLamp);
    float ds = length(centre);
    if (!(dl > 2 * r) || !(ds > 2 * r))
        return false;
    float3 h0 = toLamp / dl - centre / ds;
    float hl = length(h0);
    float dh = 2 * r / dl + 2 * r / ds;
    if (!(dh < 0.9 * hl))
        return false;
    float angleH = asin(dh / hl);
    float angleN = acos(clamp(minUp, -1, 1));
    float angle0 = acos(clamp(dot(up, h0) / hl, -1, 1));
    float lower = angle0 - angleH - angleN - 0.002;
    if (!(lower > 0))
        return false;
    float c = lower >= 1.5707 ? 0 : cos(lower);
    float c2 = max(c * c, kMinHalfwayCosine * kMinHalfwayCosine);
    float dmin = dl - r;
    float size = emitW > 0 ? emitW : kFlameYards;
    float spread = roughness + kSourceSpread * size * size / (dmin * dmin);
    return (1 - c2) >= bound * c2 * spread;        // faux pour NaN
}
#endif

// Claude EAU2 : le point d'eau du pixel (le debut de Glints), partage par les deux versions du noyau.
bool WaterSurface(float2 pixel, out float3 surface, out float3 normal, out float3 toCamera, out float viewCosine)
{
    surface = 0;
    normal = 0;
    toCamera = 0;
    viewCosine = 0;
    float depth = SampleDepth(sDepth, pixel);
    [branch] if (BeyondFarClip(depth))
        return false;
    float z = LinearDepth(depth);
    float before = LinearDepth(sDepthBefore.Load(int3((int2)pixel, 0)).r);
    [branch] if (!(z < before - kMinWaterYards))
        return false;                              // nothing drawn by the liquids here
    surface = ViewRayAtUnitDepth(pixel) * z;
    float3 up = normalize(cWaterUp.xyz);
    // The surface the liquids drew must be flat and face up (a lake, a river): its shape from the neighbours.
    float3 dx = ViewAt(pixel + float2(1, 0)) - surface;
    float3 dy = ViewAt(pixel + float2(0, 1)) - surface;
    float3 shape = cross(dx, dy);
    float shapeLength = length(shape);
    [branch] if (shapeLength > 1e-8 && abs(dot(shape / shapeLength, up)) < kMinFlatness)
        return false;
    normal = up;
    toCamera = -surface / max(length(surface), 1e-4);
    viewCosine = max(dot(normal, toCamera), kMinGrazing);
    float3 waveWorld;
    [branch] if (cCataWaves.z > 0.5 && CataNormalWorld(surface, ViewToWorldDirection(surface), viewCosine, waveWorld))
    {
        float3 n = normalize(mul((float3x3)cViewToWorld, waveWorld));
        if (dot(n, up) > 0.2)
            normal = n;
        viewCosine = max(dot(normal, toCamera), kMinGrazing);
    }
    return true;
}

// A far lamp in a halo-only slot (no light on surfaces) is mirrored with the energy its halo gives back.
float4 LampEnergy(float slotU, float4 energy, float4 emit)
{
    [branch] if (!(max(energy.r, max(energy.g, energy.b)) > 0) && emit.w == 0 && cFarLamps.x > 0)
    {
        float4 halo = LampTexel(sLampTable, slotU, kLampLightRow);
        float3 sphere = LampTexel(sLampTable, slotU, kLampSphereRow).xyz;
        float indoor = halo.w == cFarLamps.z ? cFarLamps.y : 1;
        energy.rgb = halo.rgb * (cFarLamps.x * indoor / LampNearCameraShare(length(sphere)));
    }
    return energy;
}

// hidden: the light the scenery took away (hdLvWaterLampShadow 2 shows it in red).
// Claude LV33 (measure only, hdLvWaterLampShadow 3): route: each marched glint's light, coloured by how its lamp was judged:
// red = the screen march alone (no cube), green = its cube alone, yellow = its cube up to its reach (LV35; LV33: then the march);
// a window adds blue (magenta = a window marched with no cube, cyan = a window's cube, white = a window's cube then the march).
// Claude EAU2 : la part d'une lampe (energy : deja reprise par LampEnergy), ajoutee a glint, hidden et route.
void LampGlint(float3 surface, float3 normal, float3 toCamera, float viewCosine, float roughness, bool cubes,
               float4 lamp, float4 energy, float4 emit, float4 cubeRow, float4 cubeCentre,
               inout float3 glint, inout float3 hidden, inout float3 route)
{
    // Claude LV30, as Lumenveil's RecordWaterLamps: the effect lights (spells, projectiles, the loot sparkle; the client draws
    // their glows after the liquid pass) are left out of the water. A carried light (emit.w < 0) other than the belt lantern
    // (emit.y > 0, vf_lamp_surfaces.hlsl's own test) is one.
    bool carried = emit.w < 0;
    [branch] if (carried && !(emit.y > 0))
        return;
    [branch] if (!(max(energy.r, max(energy.g, energy.b)) > 0))
        return;
    float3 toLamp = lamp.xyz - surface;
    float distanceSquared = max(dot(toLamp, toLamp), 1e-4);
    float distance = sqrt(distanceSquared);
    float3 light = toLamp / distance;
    float lit = saturate(dot(normal, light));
    [branch] if (lit <= 0)
        return;                                    // a lamp under the surface
    float3 halfway = normalize(light + toCamera);
    float cosine = max(dot(normal, halfway), kMinHalfwayCosine);
    float c2 = cosine * cosine;
    bool window = emit.w > 0;
    float size = window ? emit.w : kFlameYards;
    float spread = roughness + kSourceSpread * size * size / distanceSquared;
    float lobe = exp((c2 - 1) / (c2 * spread)) / (kPi * spread * c2 * c2);
    float nearYards = emit.w != 0 ? abs(emit.w) : kNearYards;
    float softened = distanceSquared + nearYards * nearYards;
    float falloff = 1 / (kFalloffPerYard * sqrt(softened) + kFalloffPerSquareYard * softened);
    float side = window ? saturate((kWindowWrap - dot(emit.xyz, light)) / (1 + kWindowWrap)) : 1;
    float3 light3 = energy.rgb * (lobe * Fresnel(dot(toCamera, halfway)) / (4 * viewCosine) * lit * falloff * side);
    // Whether the lamp sees this point of the water (its glint is there only then): its shadow cube where the cube
    // covers the point (LV22-LV25); otherwise, as Lumenveil's water lamps, a march to the lamp through the depth before
    // the liquids (16 steps; a lamp without a cube, a window, a point past the cube's reach). Claude LV28: before, a
    // lamp without a cube was never hidden and its glint came through the hills and the trees.
    // Claude LV29 hdLvWaterLampShadow: 0 = nothing hidden (for comparison), 1 = hidden, 2 = hidden and shown in red.
    // Claude LV34: a light that has a cube to wait for (kLampCubeRow.w: every lamp and window lighting surfaces) shows its
    // glint only once its cube is drawn, faded in (z), in mode 1 of hdLvLampCubes: never through the scenery, not even for a frame.
    [branch] if (cubes && cubeRow.w > 0.5 && LvConstants[14].w < 1.5)
        light3 *= cubeRow.z;
    [branch] if (cWaterUp.w > 0.5 && cWaterLamps.y * dot(light3, kLuminanceWeights) > kMinOccludedLight)
    {
        // Claude LV32: the lamp's or the window's cube (Claude LV34: from its own kLampCubeRow). Claude LV35: with the water
        // on screen every cube reaches twice its light's distance to the camera (LvSuite), so each water point nearer the
        // camera than the light lies within it: the cube alone, never the screen. A point beyond (farther from the camera
        // than the light itself) is judged by the cube up to its reach, the path's point there seen from the light; the
        // screen march (LV28) is left only to a light with no cube to wait for (the belt lantern) and to mode 2.
        float cube = cubes && cubeRow.x > 0.5 ? cubeRow.x - 1 : -1;
        float seen;
        float3 how = float3(1, 0, 0);              // Claude LV33: the march alone
        [branch] if (cube >= 0)
        {
            float reach = cubeRow.y * 0.98;
            float3 fromLamp = ViewToWorldDirection(surface - cubeCentre.xyz);   // Claude LV37: from where the cube was drawn
            float fromCentre = length(fromLamp);
            bool lantern = carried;                  // the only carried light left on the water (LV30)
            [branch] if (fromCentre < reach)
            {
                seen = CubeShadow(cube, cubeRow.y, cubeCentre, fromLamp, MoverFaces(cubeRow.w), lantern);
                how = float3(0, 1, 0);             // Claude LV33: the cube alone
            }
            else
            {
                seen = CubeShadow(cube, cubeRow.y, cubeCentre, fromLamp * (reach / max(fromCentre, 1e-4)), MoverFaces(cubeRow.w), lantern);
                how = float3(1, 1, 0);             // Claude LV35: yellow = the cube up to its reach (no march any more)
            }
        }
        else
            seen = LampShadow(sDepthBefore, surface, toLamp, distance, kOcclusionPlace, kOcclusionSteps,
                              kLampBodyYards, kShadowStartYards, 0, 0, 0, 0);
        how.b = window ? 1 : 0;                    // Claude LV33: a window adds blue
        route += how * dot(light3, kLuminanceWeights);
        hidden += light3 * (1 - seen);
        light3 *= seen;
    }
    glint += light3;
}

// Claude EAU2 : la couleur finale du pixel (la fin de CSMain), partagee par les deux versions du noyau.
float4 WaterColour(float4 scene, float3 glint, float3 hidden, float3 route)
{
    float3 shown = 1 - exp(-cWaterLamps.y * glint);
    if (cWaterUp.w > 1.5 && cWaterUp.w < 2.5)
        shown.r += 1 - exp(-cWaterLamps.y * max(hidden.r, max(hidden.g, hidden.b)));
    if (cWaterUp.w > 2.5)                          // Claude LV33: each glint's route instead of its light (before any shadow)
        shown = 1 - exp(-cWaterLamps.y * route);
    if (cWaterLamps.w > 0.5)
        shown = shown.bgr;
    return float4(saturate(scene.rgb + shown), scene.a);
}

#ifdef HD_WATER_OPT
[numthreads(8,8,1)] void CSMain(uint3 id : SV_DispatchThreadID, uint index : SV_GroupIndex)
{
    uint w, h;
    LvOutput.GetDimensions(w, h);
    // Claude EAU1 : le groupe cherche d'abord s'il a de l'eau, puis retient une seule fois les lampes qui comptent ;
    // aucun retour avant les barrieres.
    bool inside = id.x < w && id.y < h;
    if (index < kLampMaskWords)
        gLampMask[index] = 0;
    if (index == 0)
        gAnyWater = 0;
    // Claude EAU4 : la boite de la tuile, vide au depart.
    if (index < 3)
    {
        gBoxMin[index] = 0xFFFFFFFFu;
        gBoxMax[index] = 0u;
    }
    if (index == 3)
        gMinUp = 0xFFFFFFFFu;
    GroupMemoryBarrierWithGroupSync();
    // Claude EAU4 : le point d'eau du pixel (le meme calcul qu'avant, fait plus tot) entre dans la boite de la tuile.
    float2 pixel = float2(id.xy) + 0.5;
    bool shade = inside && !OutsideViewport(pixel);
    float3 surface, normal, toCamera;
    float viewCosine;
    bool water = shade && WaterSurface(pixel, surface, normal, toCamera, viewCosine);
    float3 up = normalize(cWaterUp.xyz);
    bool tiles = cWaterTiles > 0.5;
    [branch] if (tiles && water)
    {
        InterlockedMin(gBoxMin[0], OrderedBits(surface.x));
        InterlockedMin(gBoxMin[1], OrderedBits(surface.y));
        InterlockedMin(gBoxMin[2], OrderedBits(surface.z));
        InterlockedMax(gBoxMax[0], OrderedBits(surface.x));
        InterlockedMax(gBoxMax[1], OrderedBits(surface.y));
        InterlockedMax(gBoxMax[2], OrderedBits(surface.z));
        InterlockedMin(gMinUp, OrderedBits(dot(normal, up)));
    }
    {
        float2 at = float2(id.xy) + 0.5;
        [branch] if (inside && !OutsideViewport(at))
        {
            float depth = SampleDepth(sDepth, at);
            [branch] if (!BeyondFarClip(depth))
            {
                float z = LinearDepth(depth);
                float before = LinearDepth(sDepthBefore.Load(int3((int2)at, 0)).r);
                if (z < before - kMinWaterYards)
                    InterlockedOr(gAnyWater, 1u);
            }
        }
    }
    GroupMemoryBarrierWithGroupSync();
    float roughness = max(cWaterLamps.z, kMinRoughness);
    // Claude EAU4 : la tuile a-t-elle un point d'eau (sa boite n'est plus vide) ; sinon aucune lampe ne peut lui servir.
    bool tileBox = tiles && gBoxMin[0] != 0xFFFFFFFFu;
    float3 boxMin = 0, boxMax = 0;
    float minUp = 1;
    if (tileBox)
    {
        boxMin = float3(FromOrdered(gBoxMin[0]), FromOrdered(gBoxMin[1]), FromOrdered(gBoxMin[2]));
        boxMax = float3(FromOrdered(gBoxMax[0]), FromOrdered(gBoxMax[1]), FromOrdered(gBoxMax[2]));
        minUp = FromOrdered(gMinUp);
    }
    float tileBound = cWaterTiles > 2.5 ? kZeroLobeControl : kZeroLobeBound;
    [branch] if (gAnyWater != 0)
    {
        float count = cWaterLamps.x;
        [loop] for (uint s = index; s < kLampMaskWords * 32 && float(s) < count; s += 64)
        {
            float slotU = SlotU(float(s));
            float4 emit = LampTexel(sLampTable, slotU, kLampEmitRow);
            bool carried = emit.w < 0;
            [branch] if (carried && !(emit.y > 0))
                continue;
            float4 energy = LampEnergy(slotU, LampTexel(sLampTable, slotU, kLampSurfaceRow), emit);
            [branch] if (!(max(energy.r, max(energy.g, energy.b)) > 0))
                continue;
            [branch] if (tileBox && TileLobeIsZero(boxMin, boxMax, minUp, up, roughness, LampTexel(sLampTable, slotU, kLampViewRow),
                                                   emit.w, tileBound))
                continue;                          // Claude EAU4 : cette lampe ajoute exactement 0 a toute la tuile
            InterlockedOr(gLampMask[s >> 5], 1u << (s & 31));
        }
    }
    GroupMemoryBarrierWithGroupSync();
    // Claude EAU2 : chaque fil prepare son pixel, puis le groupe passe les lampes retenues 64 cases a la fois : chaque fil
    // charge une lampe en memoire partagee, puis chaque pixel d'eau ajoute les lampes du paquet dans l'ordre croissant.
    // Tous les fils passent toutes les barrieres (le masque est le meme pour tout le groupe).
    bool cubes = LvConstants[14].w > 0.5;
    float cullBound = cWaterCull == 1 ? kZeroLobeBound : cWaterCull == 3 ? kZeroLobeControl : 0;   // Claude EAU3
    float3 glint = 0, hidden = 0, route = 0;
    [loop] for (uint chunk = 0; chunk < kLampMaskWords / 2; chunk++)
    {
        uint low = gLampMask[2 * chunk], high = gLampMask[2 * chunk + 1];
        [branch] if ((low | high) == 0)
            continue;
        uint mine = index < 32 ? (low >> index) & 1u : (high >> (index - 32)) & 1u;
        [branch] if (mine != 0)
        {
            float slotU = SlotU(float(chunk * kLampChunk + index));
            float4 emit = LampTexel(sLampTable, slotU, kLampEmitRow);
            gLampView[index] = LampTexel(sLampTable, slotU, kLampViewRow);
            gLampEnergy[index] = LampEnergy(slotU, LampTexel(sLampTable, slotU, kLampSurfaceRow), emit);
            gLampEmit[index] = emit;
            gLampCube[index] = LampTexel(sLampTable, slotU, kLampCubeRow);
            gLampCubeCentre[index] = LampTexel(sLampTable, slotU, kLampCubeCentreRow);   // Claude LV37
        }
        GroupMemoryBarrierWithGroupSync();
        [branch] if (water)
        {
            [loop] for (uint part = 0; part < 2; part++)
            {
                uint bits = part == 0 ? low : high;
                [loop] while (bits != 0)
                {
                    uint j = part * 32 + firstbitlow(bits);
                    bits &= bits - 1;
                    [branch] if (cullBound > 0 && LobeIsZero(surface, normal, toCamera, roughness, gLampView[j], gLampEmit[j].w, cullBound))
                        continue;                  // Claude EAU3 : cette lampe ajoute exactement 0 a ce pixel
                    LampGlint(surface, normal, toCamera, viewCosine, roughness, cubes, gLampView[j], gLampEnergy[j], gLampEmit[j],
                              gLampCube[j], gLampCubeCentre[j], glint, hidden, route);
                }
            }
        }
        GroupMemoryBarrierWithGroupSync();
    }
    if (!inside)
        return;
    float4 scene = sScene.Load(int3(id.xy, 0));
    LvOutput[id.xy] = shade ? WaterColour(scene, glint, hidden, route) : scene;
}
#else
float3 Glints(float2 pixel, out float3 hidden, out float3 route)
{
    hidden = 0;
    route = 0;
    float3 surface, normal, toCamera;
    float viewCosine;
    [branch] if (!WaterSurface(pixel, surface, normal, toCamera, viewCosine))
        return 0;
    float roughness = max(cWaterLamps.z, kMinRoughness);
    bool cubes = LvConstants[14].w > 0.5;
    float3 glint = 0;
    float count = cWaterLamps.x;
    float slot = 0;
    [loop] while (slot < count)
    {
        float slotU = SlotU(slot);
        float4 lamp = LampTexel(sLampTable, slotU, kLampViewRow);
        float4 emit = LampTexel(sLampTable, slotU, kLampEmitRow);
        float4 energy = LampEnergy(slotU, LampTexel(sLampTable, slotU, kLampSurfaceRow), emit);
        float4 cubeRow = LampTexel(sLampTable, slotU, kLampCubeRow);
        float4 cubeCentre = LampTexel(sLampTable, slotU, kLampCubeCentreRow);   // Claude LV37
        slot += 1;
        LampGlint(surface, normal, toCamera, viewCosine, roughness, cubes, lamp, energy, emit, cubeRow, cubeCentre, glint, hidden, route);
    }
    return glint;
}

[numthreads(8,8,1)] void CSMain(uint3 id : SV_DispatchThreadID)
{
    uint w, h;
    LvOutput.GetDimensions(w, h);
    if (id.x >= w || id.y >= h)
        return;
    float4 scene = sScene.Load(int3(id.xy, 0));
    float2 pixel = float2(id.xy) + 0.5;
    [branch] if (OutsideViewport(pixel))
    {
        LvOutput[id.xy] = scene;
        return;
    }
    float3 hidden, route;
    float3 glint = Glints(pixel, hidden, route);
    LvOutput[id.xy] = WaterColour(scene, glint, hidden, route);
}
#endif
