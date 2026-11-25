// Generated Vulkan compute adaptation of Lumenveil 0.1.1. Original equations retained.
[[vk::binding(0,0)]] cbuffer LvUniforms {float4 LvConstants[128];};
[[vk::binding(1,0)]] SamplerState LvPoint;
[[vk::binding(2,0)]] SamplerState LvLinear;
[[vk::binding(3,0)]] SamplerState LvWrap;
[[vk::binding(20,0)]] RWTexture2D<float4> LvOutput;
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

static const float kLampBodyYards = 1.5;
static const float kShadowStartYards = 0.2;
static const float kMaxShadowStartShare = 0.5;
static const float kShadowBias = 0.1;
static const float kShadowBiasPerViewZ = 0.003;
static const float kMinOccluderYards = 1;
static const float kOccluderThicknessInSteps = 1.5;
static const float kOccluderThicknessPerViewZ = 0.02;
static const float kMinSampleViewZ = 0.3;

float LampShadow(Texture2D<float4> depthTexture, float3 start, float3 toLamp, float distance, float jitter, int steps,
                 float clearYards, float startYards, float4 bodyBase, float4 bodyUp, float4 postBase, float4 postUp)
{
    float travel = saturate(1 - clearYards / max(distance, 1e-3));
    float3 path = toLamp * travel;
    float startShare = min(startYards / max(distance * travel, 1e-3), kMaxShadowStartShare);
    float thickness = max(kMinOccluderYards, distance * travel / steps * kOccluderThicknessInSteps);
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
                bool occluder = !BeyondFarClip(sceneDepth) &&
                                behind > kShadowBias + kShadowBiasPerViewZ * samplePosition.z &&
                                behind < max(thickness, kOccluderThicknessPerViewZ * samplePosition.z) &&
                                dot(fromLamp, fromLamp) > clearYards * clearYards &&
                                !InsideBody(occluderPosition, bodyBase, bodyUp) &&
                                !InsideBody(occluderPosition, postBase, postUp); // Claude LV21: the lamp's own post
                lit = occluder ? 0 : 1;
            }
        }
    }
    return lit;
}

static const float kLampTileBlockWidth = 16;
static const float kLampTileBlockHeight = 16;   // Claude LV41: was 8 (capacity 255)
static const float kLampTileCapacity = kLampTileBlockWidth * kLampTileBlockHeight - 1;
static const float kLampTileEveryLamp = 65535;  // Claude LV41: 16-bit entries

float LampTileEntry(Texture2D<float4> tiles, float4 layout, float2 tile, float index)
{
    float row = floor(index / kLampTileBlockWidth);
    float column = index - row * kLampTileBlockWidth;
    float2 texel = float2(tile.x * kLampTileBlockWidth + column, layout.z + tile.y * kLampTileBlockHeight + row);
    return floor(tiles.SampleLevel(LvPoint,(float4((texel + 0.5) * layout.xy, 0, 0)).xy,(float4((texel + 0.5) * layout.xy, 0, 0)).w).r * 65535 + 0.5); // Claude LV41: R16_UNORM
}

float2 LampTileOf(float4 layout, float2 pixel)
{
    return floor((pixel - ViewportOrigin()) / max(layout.w, 1));
}

float LampTileListed(Texture2D<float4> tiles, float4 layout, float2 tile)
{
    return layout.w > 0 ? LampTileEntry(tiles, layout, tile, 0) : kLampTileEveryLamp;
}

[[vk::binding(4,0)]] Texture2D<float4> sDepth;

static const float kMissingNeighbour = 1e9;
static const float kThinStep = 0.1;
static const float kThinStepPerViewZ = 0.005;
static const float kSliverPixels = 3;

float3 ViewPositionAt(float2 pixel)
{
    return ViewRayAtUnitDepth(pixel) * LinearDepth(SampleDepth(sDepth, pixel));
}

float StepScore(float3 step)
{
    return dot(step, step) > 1e-10 ? abs(step.z) : kMissingNeighbour;
}

float DepthAt(float2 pixel)
{
    return LinearDepth(SampleDepth(sDepth, clamp(pixel, ViewportOrigin() + 0.5, ViewportLastPixelCentre())));
}

bool Sliver(float2 pixel, float2 step, float z, float threshold)
{
    float ahead = DepthAt(pixel + step) - z;
    float behind = DepthAt(pixel - step) - z;
    return ahead * behind > 0 && min(abs(ahead), abs(behind)) > threshold;
}

float4 SurfaceNormal(float2 pixel, float3 centre)
{
    float2 low = ViewportOrigin() + 0.5;
    float2 high = ViewportLastPixelCentre();
    float3 right = ViewPositionAt(min(pixel + float2(1, 0), high)) - centre;
    float3 left = centre - ViewPositionAt(max(pixel - float2(1, 0), low));
    float3 below = ViewPositionAt(min(pixel + float2(0, 1), high)) - centre;
    float3 above = centre - ViewPositionAt(max(pixel - float2(0, 1), low));
    float3 alongX = StepScore(right) < StepScore(left) ? right : left;
    float3 alongY = StepScore(below) < StepScore(above) ? below : above;
    float3 facing = cross(alongX, alongY);
    float lengthSquared = dot(facing, facing);
    float3 normal = lengthSquared > 1e-12 ? facing * rsqrt(lengthSquared) : -normalize(centre);
    float threshold = kThinStep + kThinStepPerViewZ * centre.z;
    bool thin = Sliver(pixel, float2(kSliverPixels, 0), centre.z, threshold) ||
                Sliver(pixel, float2(0, kSliverPixels), centre.z, threshold);
    return float4(dot(normal, centre) > 0 ? -normal : normal, thin ? 1 : 0);
}


[[vk::binding(8,0)]] Texture2D<float4> sNativeMaterial;
[[vk::binding(9,0)]] Texture2D<float4> sNativeNormals;
#define cLampSurfaces LvConstants[9]
#define cSunInView LvConstants[10]
#define cCarrierBase LvConstants[11]
#define cCarrierUp LvConstants[12]
#define cLampTiles LvConstants[13]
#ifdef HD_LAMP_SURFACE_OPT
// The optimized pipeline is selected only for the regular, non-debug view.
#define LampDebugView 0.0
#else
#define LampDebugView LvConstants[14].z
#endif

[[vk::binding(5,0)]] Texture2D<float4> sLampTable;
[[vk::binding(6,0)]] Texture2D<float4> sOccluderDepth;
[[vk::binding(7,0)]] Texture2D<float4> sLampTiles;

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
// Claude LV39: radius (yards) of the light's glowing body: a lantern's flame and glass, a window's pane, a carried lantern. A blocker near
// the flame hides only part of it: soft shadow (penumbra) instead of a point's hard one.
// Claude 2026-11-16, Max: SOFT SHADOWS ON (his choice after seeing the hard arrows too big). Radii in yards of the light's body; set all
// three to 0 for the hard shadows of before LV39, then recompile LampSurfaces (kit-LV34\Compiler-LV34.py LampSurfaces).
static const float kLampSourceYards = 0.2;
static const float kWindowSourceYards = 0.5;
static const float kCarriedSourceYards = 0.1;
static const float kCubeBias = 0.03;
static const float kCubeBiasPerYard = 0.012;

// Claude LV34: the cube and its radius come from the light's own kLampCubeRow (no 16-cube limit); the near planes are every
// cube's (cCubeAtlas.z, and .w for the up and down faces), as LampCubes draws them all.
// Claude LV37: centre = the light's kLampCubeCentreRow (where its cube was drawn, view space; w its near plane, < 0 for all six faces:
// a moving light's) and fromLamp the point seen from there (world). carrierBody: the belt lantern, whose carrier's own body never
// blocks it (Lumenveil's InsideBody, LampShadow's): a unit in the movers' layer whose hit lies in that body is passed through.
// Claude LV39 hdLvLampView 7: yards from the flame to the nearest texel that blocked this point's light (1e9 = none)
static float gCubeBlocker = 1e9;
float CubeShadow(float cube, float radius, float4 centre, float3 fromLamp, float3 normalWorld, uint movers, bool carrierBody, float sourceYards, float jitter)
{
    gCubeBlocker = 1e9;
    float4 info = float4(radius, abs(centre.w), centre.w < 0 ? -centre.w : cCubeAtlas.w, 0);
    float nearPlane = info.y;
    float size = cCubeAtlas.x;
    float columns = cCubeAtlas.y;
    // Claude LV23: the normal offset and the depth bias grow with the angle between the surface and the light, in the cube's own
    // texels at this distance: a post lit from just above shaded itself in stripes (shadow acne) with LV22's fixed values.
    float yards = max(length(fromLamp), 1e-3);
    float texelYards = 2 * yards / size;
    float facing = saturate(dot(normalWorld, -fromLamp / yards));
    float slant = sqrt(saturate(1 - facing * facing));
    float3 p = fromLamp + normalWorld * (kCubeNormalOffset + texelYards * (0.75 + 1.5 * slant));
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
    float limit = z - (kCubeBias + texelYards * (1 + 2 * min(slant / max(facing, 0.1), 4)));
    float2 cell = float2((fmod(cube, columns) * 3 + (face % 3)) * size, (floor(cube / columns) * 2 + (face / 3)) * size);
    float2 texel = local * size - 0.5;
    float2 base = floor(texel);
    float2 f = texel - base;
    // Claude LV39: SOFT SHADOW of a round light of radius sourceYards (PCSS in the cube). 1. a blocker search: the centre texel and eight
    // more on a ring 4.7 % of the face away. 2. none: the hard lookup below (a far blocker's penumbra is under a texel). 3. else the
    // penumbra radius on the blockers' plane, sourceYards (z - zb) / z, in texels (a texel is 2 zb / size yards there), and the fraction
    // of twelve taps of that disk that still see the light. The units' layer (movers) stays hard, multiplied in.
    [branch] if (sourceYards > 0)
    {
        float reach = size * 0.047;
        float2 ctr = floor(texel + 0.5);
        float zSum = 0, zCount = 0;
        [unroll] for (int k = 0; k < 9; k++)
        {
            float2 o = k == 0 ? float2(0, 0) : float2(cos(k * 0.785398), sin(k * 0.785398)) * reach;
            float zz = d / min(sLampCubes.Load(int3(cell + floor(clamp(ctr + o, 0, size - 1) + 0.5), 0)).r - c, -1e-6);
            float hit = limit > zz ? 1 : 0;
            zSum += hit * zz;
            zCount += hit;
        }
        [branch] if (zCount > 0)
        {
            float zb = zSum / zCount;
            float rt = clamp(sourceYards * (z - zb) / (z * zb) * size * 0.5, 1, size * 0.11);
            float litSoft = 0;
            [unroll] for (int k2 = 0; k2 < 12; k2++)
            {
                float2 o = float2(cos(k2 * 2.39996323 + jitter * 6.2831853), sin(k2 * 2.39996323 + jitter * 6.2831853)) * (rt * sqrt((k2 + 0.5) / 12));
                float zz = d / min(sLampCubes.Load(int3(cell + floor(clamp(ctr + o, 0, size - 1) + 0.5), 0)).r - c, -1e-6);
                litSoft += limit <= zz ? 1 : 0;
            }
            litSoft /= 12;
            float litUnits = 1;
            [branch] if ((movers >> face) & 1u)
            {
                litUnits = 0;
                [unroll] for (int jj = 0; jj < 2; jj++)
                    [unroll] for (int ii = 0; ii < 2; ii++)
                    {
                        float2 tp = clamp(base + float2(ii, jj), 0, size - 1);
                        float moverZ = d / min(sMoverCubes.Load(int3(cell + tp, 0)).r - c, -1e-6);
                        bool own = (carrierBody && InsideBody(centre.xyz + mul((float3x3)cViewToWorld, p * (moverZ / z)), cCarrierBase, cCarrierUp))
                                   || (centre.w < 0 && moverZ * length(p) / max(z, 1e-3) < cLampSurfaces.z); // Claude LV39: its carrier
                        litUnits += (own || limit <= moverZ ? 1 : 0) * ((ii == 0 ? 1 - f.x : f.x) * (jj == 0 ? 1 - f.y : f.y));
                    }
            }
            gCubeBlocker = zb * length(p) / max(z, 1e-3);
            return litSoft * litUnits;
        }
    }
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
                // Claude LV37: the hit, from the cube's centre along this point's direction, back in view space
                bool own = carrierBody && InsideBody(centre.xyz + mul((float3x3)cViewToWorld, p * (moverZ / z)),
                                                     cCarrierBase, cCarrierUp);
                // Claude LV39 hdLvCarrierClear: a MOVING light (centre.w < 0: an NPC's torch, a spell, the lantern) is not blocked by the
                // units' layer within cLampSurfaces.z yards of its flame: its carrier's hand, arm and chest. An NPC's torch lit only the one
                // cube face its own body did not fill (a square of ground) or nothing; legs and other units farther still cast.
                own = own || (centre.w < 0 && moverZ * length(p) / max(z, 1e-3) < cLampSurfaces.z);
                storedZ = own ? storedZ : min(storedZ, moverZ);
            }
            float weight = (i == 0 ? 1 - f.x : f.x) * (j == 0 ? 1 - f.y : f.y);
            lit += limit <= storedZ ? weight : 0;
            [branch] if (limit > storedZ)
                gCubeBlocker = min(gCubeBlocker, storedZ * length(p) / max(z, 1e-3));
        }
    return lit;
}

static const int kShadowSteps = 16;
static const float kNearYards = 0.5;
static const float kFalloffPerYard = 0.7;
static const float kFalloffPerSquareYard = 0.03;
static const float kWrap = 0.15;
static const float kMinShadowedLight = 0.002;
static const float kThinFacing = 0.6;
static const float kWindowWrap = 0.1;
static const float kThinFacingCode = 1;
static const float kFacingCodeScale = 0.5;
static const float3 kLuminanceWeights = float3(0.2126, 0.7152, 0.0722);

float SlotCount()
{
    return cLampSurfaces.x;
}

float SunFacingCode(float4 normal)
{
    return normal.w > 0 ? kThinFacingCode : saturate(dot(normal.xyz, cSunInView.xyz)) * kFacingCodeScale;
}

float4 LvPixel(float2 targetPixel)
{
    float2 pixel = ViewportOrigin() + targetPixel + 0.5;
    float depth = SampleDepth(sDepth, pixel);
    [branch] if (BeyondFarClip(depth))
        return float4(0, 0, 0, 1);
    float3 surface = ViewRayAtUnitDepth(pixel) * LinearDepth(depth);
    float4 normal = SurfaceNormal(pixel, surface);
    bool gNormal = false; // Claude LV22: the normal comes from the G-buffer
    if(LvConstants[14].x>0.5){float4 n=sNativeNormals.Load(int3((int2)pixel,0));float tag=abs(n.w);float decoded=(tag-.505)/.49*16-4;bool covered=n.w>.5&&(tag>=.999||(tag>=.505&&tag<=.995&&abs(decoded-clamp(log2(max(surface.z,.0625)),-4,12))<=.03));if(covered&&dot(n.xyz,n.xyz)>1e-8){float3 g=normalize(n.xyz);g=dot(g,surface)>0?-g:g;
     // Claude LV18 hdLvNormalCheck: keep the G-buffer normal only when it agrees with the shape on screen (within 60 degrees);
     // a wrong model normal (the floor under the Stormwind gate) is otherwise flipped toward the camera by the line above and
     // the lit side changes as the camera turns.
     // Claude LV20 hdLvNormalCheck 2: ground and buildings (classes 1-3) never take the G-buffer normal (the Blizzard WMO
     // normals of the Stormwind gate floor are wrong); 3: no surface takes it. Models (class 4) keep theirs in mode 2.
     uint ncls=((uint)round(sNativeMaterial.Load(int3((int2)pixel,0)).a*255))&31;
     // Claude LV39: the TERRAIN (class 1) keeps its G-buffer normal in mode 2: the shape normal from the depth is flat on each
     // terrain triangle and the lamp light showed the terrain's triangles as straight steps (Goldshire path, measured with views 4/5).
     bool shapeOnly=LvConstants[14].y>2.5||(LvConstants[14].y>1.5&&ncls>=2&&ncls<=3);
     if(!shapeOnly&&(LvConstants[14].y<=0.5||LvConstants[14].y>1.5||dot(g,normal.xyz)>0.5)){normal.xyz=g;gNormal=true;}}}

    float jitter = InterleavedGradientNoise(pixel);

    float2 tile = LampTileOf(cLampTiles, pixel);
    float listed = LampTileListed(sLampTiles, cLampTiles, tile);
    bool every = listed > kLampTileCapacity;
    float count = every ? SlotCount() : listed;
    float3 pointLight = 0;
    float entry = 0;
#ifdef HD_LAMP_SURFACE_OPT
    uint pixelClassMask = 0;
#endif
    float dbgReach = 0, dbgClass = 0, dbgFacing = 0; // Claude LV19 hdLvLampView 6 (diagnostic only)
    float dbgBestLit = 0, dbgBestShadow = 1, dbgBestBlocker = 1e9; // Claude LV39 hdLvLampView 7 (diagnostic only)
    float dbgBestMarch = 1, dbgUnshadowed = 0, dbgBestTexel = 0; // Claude LV39 hdLvLampView 8, 9 (diagnostic only)
    [loop] while (entry < count)
    {
        float slot = every ? entry : LampTileEntry(sLampTiles, cLampTiles, tile, entry + 1);
        float slotU = SlotU(slot);
        uint coverage=(uint)LampTexel(sLampTable,slotU,kLampCoreRow).w;
        if (coverage != 0)
        {
#ifdef HD_LAMP_SURFACE_OPT
            if (pixelClassMask == 0)
                pixelClassMask = 1u << (((uint)round(sNativeMaterial.Load(int3((int2)pixel,0)).a*255))&31);
            if ((coverage & pixelClassMask) != 0)
#else
            uint cls=((uint)round(sNativeMaterial.Load(int3((int2)pixel,0)).a*255))&31;
            if ((coverage & (1u << cls)) != 0)
#endif
            {
                if (LampDebugView > 5.5)
                {
                    float4 lp=LampTexel(sLampTable,slotU,kLampViewRow);
                    float3 tl=lp.xyz-surface;
                    if (dot(tl,tl)<lp.w*lp.w) dbgClass+=1;
                }
                entry+=1;
                continue;
            }
        }
        float4 lamp = LampTexel(sLampTable, slotU, kLampViewRow);
        float3 toLamp = lamp.xyz - surface;
        float distanceSquared = dot(toLamp, toLamp);
        float reachSquared = lamp.w * lamp.w;
        [branch] if (distanceSquared < reachSquared)
        {
            float4 light = LampTexel(sLampTable, slotU, kLampSurfaceRow);
            float4 emit = LampTexel(sLampTable, slotU, kLampEmitRow);
            float distance = sqrt(distanceSquared);
            float3 direction = toLamp / max(distance, 1e-4);
            bool carried = emit.w < 0;
            bool lantern = carried && emit.y > 0;
            float nearYards = emit.w != 0 ? abs(emit.w) : kNearYards;
            float spread = distanceSquared + nearYards * nearYards;
            float falloff = 1 / (kFalloffPerYard * sqrt(spread) + kFalloffPerSquareYard * spread);
            float lambert = saturate((dot(normal.xyz, direction) + kWrap) / (1 + kWrap));
            // Claude LV22: with the shadow cubes on, a pixel lit through its own G-buffer normal keeps its true facing (the 60 % floor
            // of a pixel judged thin on screen came and went with the camera on the lamp's own pedestal).
            float facing = normal.w > 0 && !(gNormal && LvConstants[14].w > 0.5) ? max(lambert, kThinFacing) : lambert;
            dbgReach += 1; dbgFacing += facing; // Claude LV19
            float outward = emit.w > 0 ? saturate((kWindowWrap - dot(emit.xyz, direction)) / (1 + kWindowWrap)) : 1;
            float window = saturate(1 - distanceSquared * distanceSquared / (reachSquared * reachSquared));
            float3 lit = light.rgb * (facing * outward * window * window * falloff);
            // Claude LV22 hdLvLampCubes: a catalogue lamp with its cube takes its shadow from the cube; in mode 1 a lamp without one has
            // none, in mode 2 it keeps the screen-space shadow; windows, spells and the lantern keep the screen-space shadow.
            // Claude LV34: every catalogue lamp AND every window (a light that does not move: emit.w >= 0) has its own cube
            // (kLampCubeRow). In mode 1 a fixed light whose cube is not drawn yet gives no light and fades in once it is
            // (z, kLampFadeSeconds): it never lights through a wall, not even for a frame. In mode 2 it keeps the screen-space
            // shadow until then. Spells and the lantern (carried: emit.w < 0) keep the screen-space shadow.
            // Claude LV37: the lantern and the spells have their cube too, drawn every frame where they stood (kLampCubeCentreRow).
            float4 cubeRow = LampTexel(sLampTable, slotU, kLampCubeRow);
            float4 cubeCentre = LampTexel(sLampTable, slotU, kLampCubeCentreRow);
            float cube = cubeRow.x > 0.5 ? cubeRow.x - 1 : -1;
            bool cubes = LvConstants[14].w > 0.5;
            bool fixedLight = light.w > 0 && cubeRow.w > 0.5;   // w: LvSuite asked a cube for it (Claude LV37: moving lights too)
            [branch] if (cubes && fixedLight && LvConstants[14].w < 1.5)
                lit *= cubeRow.z;
            // Claude LV38: a light with a cube is always shadowed: the threshold (Lumenveil's, to spare its march) let every dim light
            // through the walls, and many dim lamps add up; the cube costs four reads.
            [branch] if (cubes && fixedLight && cube >= 0
#ifdef HD_LAMP_SURFACE_OPT
                && any(lit != 0)
#endif
            )
            {
                float cubeLit = CubeShadow(cube, cubeRow.y, cubeCentre, ViewToWorldDirection(surface - cubeCentre.xyz), ViewToWorldDirection(normal.xyz),
                                           MoverFaces(cubeRow.w), lantern, (emit.w > 0 ? kWindowSourceYards : carried ? kCarriedSourceYards : kLampSourceYards) * cLampSurfaces.y, jitter);
                // Claude LV39 hdLvLampView 7: the light that counts most here, how much of it the cube took, and how far its blocker is
                float before = dot(lit, kLuminanceWeights);
                if (LampDebugView > 6.5 && before > dbgBestLit)
                {
                    dbgBestLit = before;
                    dbgBestShadow = cubeLit;
                    dbgBestBlocker = cubeLit < 0.999 ? gCubeBlocker : 1e9;
                    dbgBestTexel = 2 * distance / cCubeAtlas.x;
                    // Claude LV39 hdLvLampView 8: the same light judged by the OTHER, independent shadow (the screen march), to compare
                    if (LampDebugView > 7.5)
                        dbgBestMarch = LampShadow(sOccluderDepth, surface, toLamp, distance, jitter, kShadowSteps, kLampBodyYards, kShadowStartYards,
                                                  float4(cCarrierBase.xyz, 0), cCarrierUp,
                                                  float4(lamp.xyz - LvConstants[15].xyz * 8, LvConstants[15].w), float4(LvConstants[15].xyz, 8.5));
                }
                lit *= lerp(1, cubeLit, light.w);
            }
            // Claude LV35: any light no cube serves (carried, or not asked a cube) keeps the screen-space shadow: none is ever unshadowed.
            bool shadowed = light.w > 0 && (normal.w == 0 || lantern) &&
                            (!cubes || !fixedLight || (cube < 0 && LvConstants[14].w > 1.5));
            [branch] if (shadowed && dot(lit, kLuminanceWeights) > kMinShadowedLight)
                lit *= lerp(1, LampShadow(sOccluderDepth, surface, toLamp, distance, jitter, kShadowSteps,
                                          carried ? emit.x : kLampBodyYards, carried ? emit.z : kShadowStartYards,
                                          float4(cCarrierBase.xyz, lantern ? cCarrierBase.w : 0), cCarrierUp,
                                          // Claude LV21 hdLvLampPostClear: a vertical cylinder from 8 yd under the lamp to
                                          // 0.5 yd above it (its post and base) never blocks its own light.
                                          float4(lamp.xyz - LvConstants[15].xyz * 8, carried ? 0 : LvConstants[15].w),
                                          float4(LvConstants[15].xyz, 8.5)),
                            light.w);
            // Claude LV39 hdLvLampView 9: light that counts here and no shadow of any kind judged (no cube, no march): a leak by construction
            if (!(cubes && fixedLight && cube >= 0) && !shadowed)
                dbgUnshadowed += dot(lit, kLuminanceWeights);
            pointLight += lit;
        }
        entry += 1;
    }
    // Claude LV19 hdLvLampView 6: red = lamps within reach (/4), green = lamps within reach skipped for this class (/4),
    // blue = mean facing of the surface toward the lamps within reach (0 = turned away, 1 = facing).
    // Claude LV39 hdLvLampView 8: cube versus screen march for the strongest cube light. Dark green = both lit, grey = both shadowed,
    // CYAN = the cube shadows what the march sees lit (an over-shadow: own fixture, bias, a thin mass), MAGENTA = the cube lights what the
    // march sees shadowed (a leak: a caster the cube lacks, an old cube). The march only knows what the screen shows: magenta behind
    // geometry the screen cannot see is not proof; cyan in the open is.
    if (LampDebugView > 7.5 && LampDebugView < 8.5)
    {
        float cube1 = dbgBestShadow, march1 = dbgBestMarch;
        float3 diag = float3(0, saturate(dbgBestLit * 4) * 0.4, 0);
        if (cube1 < 0.5 && march1 < 0.5) diag = float3(0.35, 0.35, 0.35);
        else if (cube1 < 0.5 && march1 >= 0.5) diag = float3(0, 1, 1) * saturate(march1 - cube1);
        else if (cube1 >= 0.5 && march1 < 0.5) diag = float3(1, 0, 1) * saturate(cube1 - march1);
        return float4(diag, SunFacingCode(normal));
    }
    // Claude LV39 hdLvLampView 9: yellow = a light of some strength reaches this pixel with no shadow judged at all; the texel size
    // of the cube read here in the blue channel (blocky shadows: > 0.1 yd).
    if (LampDebugView > 8.5)
        return float4(saturate(dbgUnshadowed * 8) , saturate(dbgUnshadowed * 8) * 0.9, saturate(dbgBestTexel * 6), SunFacingCode(normal));
    // Claude LV39 hdLvLampView 7: the strongest lamp's cube shadow as colour. Dark green = lit (brighter = more light); where the cube
    // took light away: red = its blocker is within 2.5 yd of the flame (the lamp's own lantern, cap, arm or post: suspect), orange =
    // 2.5 to 8 yd (a stall, a post, a tree), blue = beyond 8 yd (a building, a wall); the stronger the colour, the darker the shadow.
    if (LampDebugView > 6.5 && LampDebugView < 7.5)
    {
        float lum = saturate(dbgBestLit * 4);
        float dark = 1 - dbgBestShadow;
        float3 shade = dbgBestBlocker < 2.5 ? float3(1, 0, 0) : dbgBestBlocker < 8 ? float3(1, 0.55, 0) : float3(0, 0.4, 1);
        float3 diag = dbgBestShadow >= 0.999 ? float3(0, lum * 0.5, 0) : shade * saturate(0.25 + dark);
        return float4(diag, SunFacingCode(normal));
    }
    if (LampDebugView > 5.5)
        return float4(dbgReach * 0.25, dbgClass * 0.25, dbgFacing / max(dbgReach, 1), SunFacingCode(normal));
    return float4(pointLight, SunFacingCode(normal));
}

#ifdef HD_LAMP_GROUP_LISTS
// Claude GPU-B : la liste des lampes de chaque carre de 16x16 pixels, triee avec la profondeur du carre. Le noyau des surfaces
// (LampSurfacesOptimized, le meme SPIR-V) la lit a la place de la liste de sa tuile de 64 pixels : il ne change pas d'une instruction,
// seules les lampes qui ne peuvent atteindre aucun pixel du carre sont retirees, et l'ordre des autres est garde -> meme image au bit pres.
// Une lampe retiree n'ajoute rien a un pixel : LvPixel n'ajoute une lampe que si distance^2 < portee^2, et la distance au pixel est
// au moins celle a la boite des pixels du carre (marge pour les arrondis). Doute (NaN, surface non finie) = la lampe est gardee.
static const uint kListStep = 2;   // un carre = 8 x kListStep pixels de cote (16)
#define cGroupLists LvConstants[16]   // x, y : taille des surfaces en pixels ; z : portee du temoin de la preuve (0 = normale)
groupshared float3 gListMin[64];
groupshared float3 gListMax[64];
groupshared uint gListBad[64];
groupshared uint gListMask[2];   // les lampes gardees du paquet de 64, un bit par fil
void ListWrite(uint2 group, float index, float value)
{
    float row = floor(index / kLampTileBlockWidth);
    float column = index - row * kLampTileBlockWidth;
    LvOutput[uint2(group.x * (uint)kLampTileBlockWidth + (uint)column, group.y * (uint)kLampTileBlockHeight + (uint)row)] = float4(value / 65535, 0, 0, 0);
}
[numthreads(8,8,1)] void CSMain(uint3 id : SV_DispatchThreadID, uint3 group : SV_GroupID, uint lane : SV_GroupIndex) {
// 1. la boite 3D des pixels du carre qui lisent des lampes (memes calculs que LvPixel ; le ciel n'en lit aucune) ;
// chaque fil prend kListStep x kListStep pixels
float3 boxLo = 1e30, boxHi = -1e30;
uint boxBad = 0u;
[unroll] for (uint k = 0; k < kListStep * kListStep; ++k)
{
    uint2 at = id.xy * kListStep + uint2(k % kListStep, k / kListStep);
    bool inside = at.x < (uint)cGroupLists.x && at.y < (uint)cGroupLists.y;
    float2 pixel = ViewportOrigin() + float2(at) + 0.5;
    float depth = inside ? SampleDepth(sDepth, pixel) : 0;
    bool used = inside && !BeyondFarClip(depth);
    float3 surface = used ? ViewRayAtUnitDepth(pixel) * LinearDepth(depth) : 0;
    boxLo = used ? min(boxLo, surface) : boxLo;
    boxHi = used ? max(boxHi, surface) : boxHi;
    boxBad |= (used && !all(abs(surface) < 1e30)) ? 1u : 0u;
}
gListMin[lane] = boxLo;
gListMax[lane] = boxHi;
gListBad[lane] = boxBad;
GroupMemoryBarrierWithGroupSync();
[unroll] for (uint s = 32; s > 0; s >>= 1)
{
    if (lane < s)
    {
        gListMin[lane] = min(gListMin[lane], gListMin[lane + s]);
        gListMax[lane] = max(gListMax[lane], gListMax[lane + s]);
        gListBad[lane] = gListBad[lane] | gListBad[lane + s];
    }
    GroupMemoryBarrierWithGroupSync();
}
float3 lo = gListMin[0], hi = gListMax[0];
bool bad = gListBad[0] != 0u;
bool reads = lo.x <= hi.x;   // au moins un pixel du carre lit des lampes
// 2. la liste de la tuile de 64 pixels qui contient le carre (64 est un multiple de 16 : un carre est dans une seule tuile)
float2 tile = LampTileOf(cLampTiles, ViewportOrigin() + float2(group.xy * 8 * kListStep) + 0.5);
float listed = LampTileListed(sLampTiles, cLampTiles, tile);
bool every = listed > kLampTileCapacity;
float total = every ? SlotCount() : listed;
float extent = max(max(max(abs(lo.x), abs(lo.y)), abs(lo.z)), max(max(abs(hi.x), abs(hi.y)), abs(hi.z)));
float slack = 0.01 + 4e-5 * extent;   // arrondis du calcul des surfaces (un autre noyau) : la boite est elargie
float reachScale = cGroupLists.z > 0 ? cGroupLists.z : 1;
float kept = 0;
// 3. par paquets de 64 lampes, dans l'ordre de la tuile : un bit par lampe gardee, sa place = les bits gardes avant le sien
for (float base = 0; reads && base < total; base += 64)
{
    if (lane < 2)
        gListMask[lane] = 0u;
    GroupMemoryBarrierWithGroupSync();
    float e = base + lane;
    bool keep = false;
    float slot = 0;
    if (e < total)
    {
        slot = every ? e : LampTileEntry(sLampTiles, cLampTiles, tile, e + 1);
        float4 lamp = LampTexel(sLampTable, SlotU(slot), kLampViewRow);
        float reach = lamp.w * reachScale + slack;
        float3 away = lamp.xyz - clamp(lamp.xyz, lo, hi);
        keep = bad || !(dot(away, away) >= reach * reach);
    }
    uint dummy;
    if (keep)
        InterlockedOr(gListMask[lane >> 5], 1u << (lane & 31u), dummy);
    GroupMemoryBarrierWithGroupSync();
    uint low = gListMask[0], high = gListMask[1];
    uint before = lane < 32u ? countbits(low & ((1u << lane) - 1u)) : countbits(low) + countbits(high & ((1u << (lane - 32u)) - 1u));
    float at = kept + before + 1;   // entree 1, 2, ... (0 = le nombre)
    if (keep && at <= kLampTileCapacity)
        ListWrite(group.xy, at, slot);
    kept += countbits(low) + countbits(high);
    GroupMemoryBarrierWithGroupSync();
}
// plus de 255 lampes gardees : seulement possible quand la tuile prenait deja toutes les lampes -> "toutes", comme elle
if (lane == 0)
    ListWrite(group.xy, 0, kept > kLampTileCapacity ? kLampTileEveryLamp : kept);
}
#else
[numthreads(8,8,1)] void CSMain(uint3 id : SV_DispatchThreadID) {
uint w,h;LvOutput.GetDimensions(w,h);if(id.x>=w||id.y>=h)return;
LvOutput[id.xy]=LvPixel(float2(id.xy));
}
#endif
