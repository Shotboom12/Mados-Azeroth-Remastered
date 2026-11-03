#include "WoW/Source/WorldClient/HD/HdWater.h"
#include "WoW/Source/WorldClient/HD/HdWaterPlanar.h" // HD: hdWaterPlanar
#include <atomic>
#include <cctype>
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <map>
#include <thread>
#include <vector>
#include <windows.h>
#include <d3d9.h>
#include <d3dcompiler.h>
#include "Engine/Source/ConsoleBase/ConsoleVar.h"
#include "Engine/Source/ConsoleBase/Types.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxDevice/CGxShader.h"
#include "Engine/Source/Gx/CGxDeviceD3d/CGxDeviceD3d.h"
#include "Engine/Source/Gx/Types.h"
#include "Engine/Source/Os/TimeManager.h"
#include "WoW/Source/LiquidSystem/Liquid.h"
#include "WoW/Source/WorldClient/DayNight.h"
#include "WoW/Source/WorldClient/DayNight__DNInfo.h"
#include "WoW/Source/WorldClient/HD/HdFog.h"
#include "WoW/Source/WorldClient/HD/HdWaterWaves.h"
#include "WoW/Source/WorldClient/HD/HdWaterRipples.h" // HD: ripples around swimmers and waders

// HD: the shader sources below are the files of the same name (scratchpad water/impl/shaders); HdWater.cpp is made
// from HdWater.cpp.in by embed_shaders.py, so edit the .hlsl files and run it again rather than editing them here.

namespace {
    // Vertex shader (vs_3_0): vsLiquidProcWater rewritten from its bytecode (checked against it: every output equal
    // on 1200 random vertices, all 4 permutations), plus the view-space position for the pixel shader.
    const char* kVertexShader =
R"HLSL(// Waystone HD water vertex shader (vs_3_0). Replaces Shaders\Vertex\vs_3_0\vsLiquidProcWater.bls (its 4
// permutations are the same code) when hdWater is on. Outputs 0..8 are the 3.3.5 shader rewritten from its bytecode,
// instruction for instruction (checked numerically against Blizzard's bytecode); TEXCOORD7 is new:
//   xyz = view-space position (camera at 0, +z forward, the same space as the projection), w = 3.3.5 wave height here.
// Constants: the client's own (Liquid::SetShaderConstants c0..c45, the wave block at c46..c57); nothing new.
float4 cProj[4]      : register(c0);   // rows of the native projection
float4 cFog          : register(c4);   // x = -fogMul/(end-start), y = end/(end-start), z = density exponent
float4 cModelView[4] : register(c5);   // rows of (model, camera-relative) * view
float4 cTex[24]      : register(c9);   // 6 texture matrices, 4 rows each (c9 .. c32)
float4 cPhaseA       : register(c46);  // per wave phase, first wave set (radians)
float4 cPhaseB       : register(c47);  // per wave phase, second wave set
float4 cWaveA[3]     : register(c48);  // first set: xy = centre, z = 1 / wavelength, w = amplitude
float4 cWaveAFall    : register(c51);  // first set: 1 / falloff distance, per wave
float4 cWaveBFall    : register(c52);  // second set: 1 / falloff distance, per wave
float4 cWaveB[3]     : register(c53);  // second set: xy = centre, zw = direction
float4 cWaveBFreq    : register(c56);  // second set: frequency, per wave
float4 cWaveBAmp     : register(c57);  // second set: amplitude, per wave

// sin as the 3.3.5 code does it: the compiler's own range reduction (frc to -pi..pi, then sincos), done once
float WrapSin(float a)
{
    return sin(a);
}

float Pick(float4 v, int i)
{
    float r = v.x;
    if (i == 1) r = v.y;
    if (i == 2) r = v.z;
    return r;
}

void main(float4 iPos : POSITION0, float4 iUv0 : TEXCOORD0, float4 iUv1 : TEXCOORD1,
          out float4 oPos : POSITION0, out float4 oUvA : TEXCOORD0, out float4 oUvB : TEXCOORD1,
          out float4 oUvC : TEXCOORD2, out float3 oWorld : TEXCOORD3, out float3 oT : TEXCOORD4,
          out float3 oB : TEXCOORD5, out float3 oN : TEXCOORD6, out float4 oView : TEXCOORD7,
          out float oFog : FOG)
{
    // the 3.3.5 code samples the wave field at P, at P + (0.5, 0) and at P + (0, 0.5) (yards): the heights give the
    // tangent frame, as finite differences
    float hP = 0.0;
    float hX = 0.0;
    float hY = 0.0;
    [unroll] for (int i = 0; i < 3; i++) {
        float4 w = cWaveA[i];
        float2 d = iPos.xy - w.xy;
        float fall = Pick(cWaveAFall, i);
        float ph = Pick(cPhaseA, i);
        float dist0 = sqrt(d.x * d.x + d.y * d.y);
        hP += WrapSin(dist0 * w.z - ph) * (saturate(dist0 * -fall + 1.0) * w.w);
        float dist1 = sqrt(d.y * d.y + (d.x + 0.5) * (d.x + 0.5));
        hX += WrapSin(dist1 * w.z - ph) * (saturate(dist1 * -fall + 1.0) * w.w);
        float dist2 = sqrt((d.y + 0.5) * (d.y + 0.5) + d.x * d.x);
        hY += WrapSin(dist2 * w.z - ph) * (saturate(dist2 * -fall + 1.0) * w.w);
    }
    [unroll] for (int j = 0; j < 3; j++) {
        float4 w = cWaveB[j];
        float2 d = iPos.xy - w.xy;
        float amp = Pick(cWaveBAmp, j);
        float fall = Pick(cWaveBFall, j);
        float freq = Pick(cWaveBFreq, j);
        float ph = Pick(cPhaseB, j);
        float dist0 = sqrt(d.x * d.x + d.y * d.y);
        float a0 = amp * saturate(dist0 * -fall + 1.0);
        float2 f = iPos.xy * freq * w.zw;
        hP += WrapSin(f.y + f.x - ph) * a0;
        float dist1 = sqrt(d.y * d.y + (d.x + 0.5) * (d.x + 0.5));
        float a1 = amp * saturate(dist1 * -fall + 1.0);
        float4 g = (iPos.xyxy * freq + float4(0.5, 0.0, 0.0, 0.5)) * w.zwzw;
        hX += WrapSin(g.y + g.x - ph) * a1;
        float dist2 = sqrt((d.y + 0.5) * (d.y + 0.5) + d.x * d.x);
        float a2 = amp * saturate(dist2 * -fall + 1.0);
        hY += WrapSin(g.w + g.z - ph) * a2;
    }
    float3 t = normalize(float3(1.0, 0.0, hX - hP));
    float3 b = normalize(float3(0.0, 1.0, hY - hP));
    oN = cross(t, b);
    oT = t;
    oB = b;

    float4 v = iPos.y * cModelView[1];
    v = iPos.x * cModelView[0] + v;
    v = iPos.z * cModelView[2] + v;
    v = v + cModelView[3];
    float4 c = v.y * cProj[1];
    c = v.x * cProj[0] + c;
    c = v.z * cProj[2] + c;
    oPos = v.w * cProj[3] + c;

    // texture matrices: row x, row y, translation row (rows 0, 1, 3 of each 4x4)
    oUvA.xy = iUv0.y * cTex[1].xy + iUv0.x * cTex[0].xy + cTex[3].xy;
    oUvA.zw = (iUv0.y * cTex[5].xy + iUv0.x * cTex[4].xy + cTex[7].xy).yx;
    oUvB.xy = iUv0.y * cTex[9].xy + iUv0.x * cTex[8].xy + cTex[11].xy;
    oUvB.zw = (iUv0.y * cTex[13].xy + iUv0.x * cTex[12].xy + cTex[15].xy).yx;
    oUvC.xy = iUv1.y * cTex[17].xy + iUv1.x * cTex[16].xy + cTex[19].xy;
    oUvC.zw = (iUv0.y * cTex[21].xy + iUv0.x * cTex[20].xy + cTex[23].xy).yx;

    oFog = min(pow(max(v.z * cFog.x + cFog.y, 0.0), cFog.z), 1.0);
    oWorld = iPos.xyz;
    oView = float4(v.xyz, hP);
}
)HLSL";

    // Pixel shader (ps_3_0): HD_ORIGINAL 1 = psLiquidProcWater rewritten from its bytecode (hdWater 2, checked equal on
    // 2000 random pixels), HD_ORIGINAL 0 = Forever's PBR water (hdWater 1).
    const char* kPixelShader =
R"HLSL(// Waystone HD water pixel shader (ps_3_0), used with hd_water_vs.hlsl when hdWater is on.
//   HD_ORIGINAL 1: psLiquidProcWater.bls rewritten from its bytecode (hdWater 2: must look exactly like hdWater 0).
//   HD_ORIGINAL 0: WoW Forever's PBR water. The lighting is Forever's deferred water shader (PBRWater, "DEF" in
//                  water_spec.md 3.6) moved into this forward pass: ForeverWater() below is that shader's math line
//                  for line; what feeds it (slopes, foam, sky, sun lobe) is approximated from what 3.3.5 has.
#ifndef HD_ORIGINAL
#define HD_ORIGINAL 0
#endif
#ifndef HD_FFT
#define HD_FFT 0      // HD: 1 = slopes from the FFT wave cascades (hdWaterWaves 1) instead of the 3.3.5 normal maps
#endif

samplerCUBE cubeA   : register(s0); // 3.3.5 LiquidType texture 0 (cube)
samplerCUBE cubeB   : register(s1); // 3.3.5 LiquidType texture 1 (cube)
sampler2D depthRamp : register(s2); // 3.3.5 procedural depth colour ramp (texture 4)
sampler2D lakeTex   : register(s3); // 3.3.5 animated lake/ocean texture (texture 5): alpha = 3.3.5 glint mask, our foam
sampler2D bumpA     : register(s4); // 3.3.5 animated normal map, near
sampler2D bumpB     : register(s5); // 3.3.5 animated normal map, far
#if !HD_ORIGINAL
sampler2D sceneDepth : register(s6); // HD: linear view depth of the world drawn so far (R32F, yards)
sampler2D sceneColor : register(s7); // HD: copy of the world image drawn so far (gamma)
#endif
#if HD_FFT
// HD: FFT wave cascades (HdWaterWaves.cpp): r, g = slopes dh/dx, dh/dy, b = height (yards), a = Jacobian
sampler2D fft0 : register(s8);
sampler2D fft1 : register(s9);
sampler2D fft2 : register(s10);
sampler2D fft3 : register(s11);
#endif

// the client's constants (Liquid::SetShaderConstants, CMaterialProcWater::Render)
float4 cFogColor   : register(c4);   // 3.3.5 fog colour
float4 cCamera     : register(c5);   // camera position (world)
float4 cSunDirPS   : register(c6);   // direction to the sun (world)
float4 cAmbient    : register(c7);   // CM2Lighting ambient (gamma)
float4 cDiffuse    : register(c8);   // CM2Lighting sun colour (gamma)
float4 cSpecular   : register(c9);   // CM2Lighting specular, w = 50
float4 cParams0    : register(c10);  // 3.3.5 LiquidType floats 11-14 (x = near/far normal blend rate)
float4 cParams1    : register(c11);  // 3.3.5 LiquidType floats 15-17
#if !HD_ORIGINAL
// HD: our constants, set by HD::WaterBindProcWater (HdWater.cpp)
float4 cModelView3[3] : register(c12); // rows of the model -> view rotation (xyz)
float4 cSunView    : register(c15);  // xyz = direction to the sun, view space
float4 cScreen     : register(c16);  // 1/width, 1/height, 1 = interior water (Forever flag 128), FFT cascades (1)
float4 cFog335     : register(c17);  // the 3.3.5 vertex fog terms (x, y, z = exponent), w = time (seconds)
float4 cType[7]    : register(c18);  // Forever LiquidTypePBRWater: r0, r1, r2, r3, r4 (depth foam), r5 (rim foam), r10
                                     // (colours linear; r10.w = sun specular scale, Forever cb36.x)
float4 cSky[5]     : register(c25);  // sky colours, linear: top, middle, low band, horizon, average;
                                     // w: [0] = debug view, [1] = body scale (hdWaterBody), [2] = reflections
                                     // strength (hdWaterReflect)
float4 cInterior   : register(c30);  // rgb = light on the scattering for interior water (Forever: 1), linear;
                                     // HD: w = share of the game's own water colour in the body (hdWaterColor)
float4 cProj       : register(c31);  // view -> screen: uv = view.xy / view.z * cProj.xy + cProj.zw
float4 cAmbientLin : register(c32);  // cAmbient made linear (on the CPU: saves the shader's slots)
float4 cDiffuseLin : register(c33);  // cDiffuse made linear
float4 cWaves      : register(c34);  // HD: 1 / tile size (yards) of the 4 FFT cascades (0 = unused)
float4 cWaves2     : register(c35);  // HD: x = whitecap Jacobian threshold, y = whitecap gain
#if HD_FFT
sampler2D ripples  : register(s12);  // HD: ripples around units in the water (HdWaterRipples.cpp): signed slopes
float4 cRipples    : register(c36);  // HD: world xy -> ripple texture uv (xy scale, zw offset)
float4 cRipples2   : register(c37);  // HD: x = ripple strength (0 = no ripple texture this frame)
#endif
#if HD_PLANAR
sampler2D planarReflection : register(s13); // HD: hdWaterPlanar's mirror image (HdWaterPlanar.cpp), gamma
float4 cPlanar : register(c38);             // HD: xy = 1 / its size
float4 cMainToMirror[4] : register(c39);    // HD: rows: view space (this water's) -> the mirror image's clip space
#endif
#endif

// 3.3.5: one tap of a normal map, z rebuilt from xy
float3 DecodeN(float2 t)
{
    float2 n = t * 2.0 + -1.0;
    float z = sqrt(saturate(1.0 - dot(n, n)));
    return float3(n, z);
}

#if HD_ORIGINAL

float4 main(float3 iT : TEXCOORD4, float3 iB : TEXCOORD5, float3 iN : TEXCOORD6, float4 iUvA : TEXCOORD0,
            float4 iUvB : TEXCOORD1, float4 iUvC : TEXCOORD2, float3 iWorld : TEXCOORD3, float iFog : FOG) : COLOR0
{
    float4 a0 = tex2D(bumpA, iUvA.xy);
    float4 a1 = tex2D(bumpA, iUvA.wz);
    float4 b0 = tex2D(bumpB, iUvB.xy);
    float4 b1 = tex2D(bumpB, iUvB.wz);
    float2 na0 = a0.xy * 2.0 + -1.0;
    float2 na1 = a1.wz * 2.0 + -1.0;
    float2 nb0 = b0.xy * 2.0 + -1.0;
    float2 nb1 = b1.wz * 2.0 + -1.0;
    float3 nA = float3(na0, 1.0 / rsqrt(1.0 - dot(na0, na0))) + float3(na1, 1.0 / rsqrt(1.0 - dot(na1, na1)));
    float3 nB = normalize(float3(nb0, 1.0 / rsqrt(1.0 - dot(nb0, nb0))) + float3(nb1, 1.0 / rsqrt(1.0 - dot(nb1, nb1))));
    float3 rel = iWorld - cCamera.xyz;
    float invH = rsqrt(dot(rel.xy, rel.xy));
    float blend = saturate((1.0 / invH) * cParams0.x + 0.5);
    float3 n = blend * (nA * rsqrt(dot(nA, nA)) - nB) + nB;
    float3 N = float3(dot(iT, n), dot(iB, n), dot(iN, n));
    float3 V = rel * invH;
    float3 H = normalize(rel * invH + cSunDirPS.xyz);
    float3 spec = pow(saturate(dot(H, N)), cSpecular.w) * cSpecular.rgb;
    float F = 1.0 - saturate(dot(-V, N));
    F = F * F;
    float4 ramp = tex2D(depthRamp, iUvC.xy);
    float cosI = dot(V, N);
    float k = 1.0 - cParams0.y * cParams0.y * (1.0 - cosI * cosI);
    float ok = k >= 0.0 ? 1.0 : 0.0;
    float rt = 1.0 / rsqrt(k * ok);
    float3 refr = (ok * cParams0.y) * V.xzy - (ok * cParams0.y * cosI + rt) * N.xzy;
    float3 refl = N.xzy * -(cosI + cosI) + V.xzy;
    float3 under = texCUBE(cubeA, refr).rgb + ramp.rgb;
    float3 over = texCUBE(cubeB, refl).rgb;
    float3 col = lerp(under, over, cParams0.w * F + cParams0.z);
    float4 glint = tex2D(lakeTex, iUvC.wz);
    col = spec * glint.a * 4.0 * (cParams1.z * F + cParams1.y) + col;
    return float4(lerp(cFogColor.rgb, col, iFog), cParams1.x * F + ramp.a);
}

#else

// ---------------------------------------------------------------------------------------------------------------
// The inputs ForeverWater() reads where Forever reads its textures. Approximations (water_spec.md 4, Stage 2):
float SceneDepthAt(float2 uv)  // Forever t5: linear scene view depth
{
    return tex2Dlod(sceneDepth, float4(uv, 0.0, 0.0)).r;
}

float3 SceneColorAt(float2 uv) // Forever t4.SampleLevel(.., 0): the scene behind the water (gamma here)
{
    return tex2Dlod(sceneColor, float4(uv, 0.0, 0.0)).rgb;
}

// Forever un-fogs the scene behind the water with its froxel volume (rgb = in-scatter, a = 1 - transmittance) and
// fogs the final colour again. Our fog after the water is the 3.3.5 one (the vertex fog, FOG input), so the scene is
// un-fogged with the 3.3.5 fog at the scene depth: in-scatter = fogColour * (1 - f), 1 - transmittance = 1 - f.
// HD: the kept share f is held at 0.3 or more. The world image is 8 bits and other surfaces are not always fogged
// exactly like this, so dividing by a small f (DEF allows 1/0.001) blew those errors up into a bright haze in short
// fog (rain, night); past that the scene is taken as mostly fog, which the water's own fog then puts back.
float4 FogAt(float viewZ)
{
    float f = min(pow(max(viewZ * cFog335.x + cFog335.y, 0.0), cFog335.z), 1.0);
    f = max(f, 0.3);
    return float4(cFogColor.rgb * (1.0 - f), 1.0 - f);
}

// HD: the un-fogged scene behind the water (gamma) to linear, kept within what the 8-bit image can hold
float3 BgLinear(float3 c)
{
    return pow(saturate(c), 2.2);
}

float3 ToLinear(float3 c)      // the client draws in gamma; Forever's math is linear
{
    return pow(max(c, 0.0), 2.2);
}

float3 EnvAmbient()            // Forever: the reflection cube's last mip (one colour); here the client's ambient
{
    return cAmbientLin.rgb;
}

// The client's sky colours by elevation (world direction Rw), blurred toward their average with the roughness
float3 SkyColours(float3 Rw, float lod)
{
    float e = saturate(Rw.z);
    float3 low = lerp(cSky[3].rgb, cSky[2].rgb, saturate(e * 10.0));
    float3 mid = lerp(low, cSky[1].rgb, saturate((e - 0.1) * 4.0));
    float3 sky = lerp(mid, cSky[0].rgb, saturate((e - 0.35) * 1.5385));
    return lerp(sky, cSky[4].rgb, saturate(lod * 0.142857));
}

// HD: per-pixel offset of the reflection march's first step (0..1), set by main from VPOS
static float gJitter = 0.5;
// HD: the reflection march for the test view hdWaterDebug 8: hit, steps taken / 40 (FFT variant only: the other one
// has no instruction slots left)
static float2 gSsr = 0.0;

// HD: the reflection hit thickness at view depth z (yards), see EnvSample
float HitThickness(float z)
{
    return 0.4 + 0.004 * z;
}

// HD: where a view-space point (in front of the eye) lands on the screen (uv)
float2 ScreenUv(float3 p)
{
    return p.xy / p.z * cProj.xy + cProj.zw;
}

)HLSL"
R"HLSL(// HD: Forever's screen-edge fade of its reflections, 1 - sat((max(v, 1 - v) - 0.9) * 10), on both axes
float EdgeFade(float2 uv)
{
    float2 m = max(uv, 1.0 - uv);
    return 1.0 - saturate((max(m.x, m.y) - 0.9) * 10.0);
}

// Forever: the reflection cube at mip log2(size) * roughness; Forever scatters its screen-space reflection hits into
// that cube and keeps the sky elsewhere. Here the same per pixel (water_spec.md 3.5, Stage 4):
//   1. march the reflected ray R (view space, from the water point P) over the linear depth of the world (s6): 40
//      steps growing x1.13 (about 1000 x the first step, which is 0.2 yd + 1% of the distance), then 8 halvings
//      between the last two steps (HD: was 20 steps x1.3 and 6 halvings: on calm water the long steps went through
//      the boats' hulls on some rows of pixels and not on others, which drew their reflection as a zigzag); a hit
//      is the ray going behind the world by less than a fixed thickness;
//      HD: the thickness was "the step + 2% of depth": with steps growing x1.3 a thin object (crate, barrel) was hit
//      far behind its back, a little further on each row of pixels, which drew a "ladder" of dark copies of it in
//      the water. Now 0.4 yd + 0.4% of depth, the hit is checked again after the halvings (else it is a miss), and
//      the first step starts at a per-pixel offset (gJitter) so what is left of the banding turns into fine noise;
//   2. a hit: the world image there (s7), as drawn: its fog (camera to the hit) stands in for the fog along the
//      reflected path (water to the hit), which is about as long; the water's own fog is added after, as on the rest;
//   3. a miss: the sky the client drew in direction R, when that is on screen and nothing stands in front of it
//      (the real sky: clouds, moon, sun), else the DayNight sky colours;
//   both faded at the screen edges like Forever's reflections: 1 - sat((max(v, 1 - v) - 0.9) * 10).
// The 3.3.5 cube (LiquidType texture 1, Blizzard's reflection) is not used: it is a fixed daylight image of a sky,
// the same at noon and midnight, so it would put a day sky into night water; the moon and sun glint it carried in
// Blizzard's shader comes from the sun term here (SunLobe x r10.w).
// Rough water (rEnv = lod / 7, 0.5 to 0.8) fades its screen reflections into the sky colours, as Forever's cube mips
// blur them.
float3 EnvSample(float3 Rw, float lod, float3 R, float3 P, float2 bend) // HD: bend = the waves' tilt of R (hdWaterPlanar)
{
    float3 sky = SkyColours(Rw, lod);
    float w = cSky[2].w * saturate((0.8 - lod * 0.142857) * 3.33);
#if HD_PLANAR
    // HD: hdWaterPlanar 1: the mirror image of the sky and the terrain (HdWaterPlanar.cpp) at this water point's place
    // on the screen, bent by the waves
    float4 q = P.x * cMainToMirror[0] + P.y * cMainToMirror[1] + P.z * cMainToMirror[2] + cMainToMirror[3];
    float2 uvP = q.xy / max(q.w, 0.001) * float2(0.5, -0.5) + 0.5 + bend * 0.015;
    float fadeP = EdgeFade(uvP) * step(0.001, q.w);
    uvP = clamp(uvP, cPlanar.xy * 0.5, 1.0 - cPlanar.xy * 0.5);
    float3 planarCol = BgLinear(tex2D(planarReflection, uvP).rgb);
#if HD_PLANAR == 1
    // HD: cards limited to 512 ps_3_0 slots: the mirror image alone, without the screen-space march
    return lerp(sky, planarCol, fadeP * w);
#else
    // HD: it takes the place of the sky colours where the screen-space march below finds nothing: the march still gives
    // what the mirror image has not got yet (trees, buildings, characters on the screen)
    sky = lerp(sky, planarCol, fadeP * w);
#endif
#endif
#if HD_PLANAR != 1
    float3 hit = sky;
    float hitW = 0.0;
    if (w > 0.0) {
        float stepLen = 0.2 + 0.01 * P.z;
        float tPrev = 0.0;
        float t = stepLen * (0.5 + gJitter); // HD: jittered first step
        // HD: the previous step's depth and the world's depth there (the ray leaves the water in front of the world:
        // s6 has no water)
        float zPrev = 0.0;
        float dPrev = 1.0;
        float tHit = 0.0;
        float found = 0.0;
        float steps = 0.0;
        [loop] for (int i = 0; i < 40; i++) { // HD: was 20
#if HD_FFT
            steps = steps + 0.025;
#endif
            float3 Q = P + R * t;
            float2 uvQ = ScreenUv(Q);
            float2 e = abs(uvQ - 0.5);
            if (max(max(e.x, e.y) - 0.5, 0.2 - Q.z) > 0.0) {
                break;
            }
            float D = SceneDepthAt(uvQ);
            // HD: a hit is the ray crossing the world's surface between two steps (in front, then behind), wherever
            // the second step lands (was: the step had to land less than HitThickness behind the world, so on a thick
            // object the growing steps landed inside it on some rows of pixels and past it on others: bands and
            // zigzags). Where it crosses: the ratio depth / world depth runs linearly along the ray across a flat
            // surface (perspective-correct), so that point is exact on flat surfaces without halvings. When the world
            // gets closer by more than HitThickness between the two steps (the ray came onto an object over its edge,
            // as a hull above the water line), the crossing is taken with that object's surface alone.
            // A surface at that point is a hit; a depth jump there (the ray went behind the edge of a closer object:
            // a silhouette) is not, and the march goes on to what lies behind it.
            if (Q.z > D && zPrev <= dPrev) {
                float rp = zPrev / min(dPrev, D + HitThickness(D));
                float tc = lerp(tPrev, t, (1.0 - rp) / (Q.z / D - rp));
                float3 Qc = P + R * tc;
                if (abs(Qc.z - SceneDepthAt(ScreenUv(Qc))) < HitThickness(Qc.z)) {
                    tHit = tc;
                    found = 1.0;
                    break;
                }
            }
            zPrev = Q.z;
            dPrev = D;
            tPrev = t;
            stepLen = stepLen * 1.13; // HD: was 1.3
            t = t + stepLen;
        }
        // the hit, or the direction R itself (the sky drawn at infinity; R at or behind the eye lands off the screen)
        float3 E = lerp(R, P + R * tHit, found);
        E.z = max(E.z, 0.0001);
        float2 uvE = ScreenUv(E);
        float zE = SceneDepthAt(uvE);
        hit = BgLinear(SceneColorAt(uvE));
        hitW = EdgeFade(uvE) * max(found, step(4000.0, zE) * step(0.01, R.z));
#if HD_FFT
        gSsr = float2(found, steps);
#endif
    }
    return lerp(sky, hit, hitW * w);
#endif
}

// Forever: a 2D sun-disc LUT (roughness, angle between R and the sun) times cb36.x. Here: GGX with Fresnel (F0 0.02)
// and Hammon's fit of the Smith visibility, times r10.w.
float SunLobe(float rSun, float3 R, float3 L, float3 N, float3 V)
{
    float a = max(rSun * rSun, 0.002);
    float a2 = a * a;
    float3 H = normalize(L + V);
    float NoH = saturate(dot(N, H));
    float NoL = saturate(dot(N, L));
    float NoV = max(dot(N, V), 0.0001);
    float VoH = saturate(dot(V, H));
    float dd = NoH * NoH * (a2 - 1.0) + 1.0;
    float D = a2 / (3.14159265 * dd * dd);
    float vis = 0.5 / (lerp(2.0 * NoL * NoV, NoL + NoV, a) + 0.00001); // Hammon's fit of the Smith term
    float fr = 1.0 - VoH;
    float F = 0.02 + 0.98 * (fr * fr * fr * fr * fr);
    return min(D * vis * F * NoL, 64.0) * cType[6].w;
}

// ---------------------------------------------------------------------------------------------------------------
// WoW Forever PBRWater deferred lighting (unknown_7552027 perm 0, lit mode cb37.y = 0), ported line for line.
// The %N comments are the SSA ids of scratchpad/water/ps2/unknown_7552027_partic-pertub_0.ps.
// View space throughout. Inputs (where Forever reads them):
//   uv: screen position (TEXCOORD0); zW: this pixel's view depth (t0.x); V: to the camera (%97-99);
//   G1 = t1 (x: interior flag 0/1 = bit 128, y: wave height, z, w: FFT foam channels), G2 = t2 (foam rgba),
//   G3 = t3 (slopes x, y, slope second moment, coarse slope^2); sceneZ: t5 at this pixel (%50);
//   M0..M2: world -> view rows (cb0[0..2]), up = M2; L: to the sun (-cb35); sunCol: cb0[19];
//   cascades: FFT tiles in use (%279); interiorLit: what Forever's interior water is lit with (1).
// Output: the lit colour before fog, linear. dbg* = the parts the debug views show.
// HD: EnvSample also gets R and the water point (view space) for its screen-space reflections; bg is made linear
// with BgLinear (saturated) instead of ToLinear.
float3 ForeverWater(float2 uv, float zW, float3 V, float4 G1, float4 G2, float4 G3, float sceneZ,
                    float3 M0, float3 M1, float3 M2, float3 L, float3 sunCol, float cascades, float3 interiorLit,
                    float4 r0, float4 r1, float4 r2, float4 r3, float4 r10, float3 gameCol, float gameMix,
                    out float dbgD, out float3 dbgBody, out float3 dbgRefl, out float dbgRough, out float3 dbgBg)
{
    float3 up = M2;
    // normal from the slopes (%111-137)
    float3 nt = normalize(float3(-G3.x, -G3.y, 1.0));
    float3 N = nt.x * M0 + nt.y * M1 + nt.z * M2;
    // reflection, never below the horizon (%138-166)
    float3 R = reflect(-V, N);
    float Ru = dot(up, R);
    if (Ru < 0.0) {
        R = normalize(R - Ru * up);
    }
    float NoV = min(max(dot(N, V), 1e-15), 1.0);
    // sun above the horizon (%177-188); interior water has no sun
    float sunUp = dot(up, L);
    float sv = saturate((sunUp + 0.1) * 5.0);
    float sunVis = sv * sv * (3.0 - sv * 2.0);
    if (G1.x > 0.5) {
        sunVis = 0.0;
    }
    // refraction, with the guard against objects in front of the water (%194-215)
    float d0 = min(50.0, sceneZ - zW);
    float2 uvR = G3.xy * 0.005 * d0 + uv;
    float zR = SceneDepthAt(uvR);
    if (zR < zW) {
        uvR = uv;
    }
    float d = max(0.0, max(zR, sceneZ) - zW);
    // the scene behind the water, fog in front of it removed (%217-259)
    float3 bgFog = SceneColorAt(uvR);
    float4 fog = FogAt(sceneZ);
    float fogInv = 1.0 / max(1.0 - fog.a, 0.001);
    float3 bg = BgLinear(max((bgFog - fog.rgb) * fogInv, 0.0));
    // roughness from the slope variance over the cascades (%269-326)
    float m = 1.0 / max(cascades, 1.0);
    float2 ms = m * G3.xy;
    float var = max(0.0, m * G3.z - dot(ms, ms)) * 0.5;
    float re = (0.8 - r10.y) * G2.w + r10.y;
    float rEnv = saturate(pow(re * re * sign(re) + var, 0.25));
    float rs = (0.8 - r10.x) * G2.w + r10.x;
    float rSun = saturate(pow(rs * rs * sign(rs) + var, 0.25));
    // environment: ambient (last mip) and the reflection with Karis' EnvBRDFApprox, F0 = 0.02 (%327-383)
    float3 Rw0 = float3(dot(R, M0), dot(R, M1), max(0.0, dot(R, M2)));
    float3 Rw = normalize(Rw0);
    float3 amb = EnvAmbient();
    float omr = 1.0 - rEnv;
    float a004 = (min(omr * omr, exp2(NoV * -9.28)) * omr + (0.0425 - rEnv * 0.0275)) * 1.04;
    float brdf = ((1.04 - rEnv * 0.572) - a004) * 0.02 + ((rEnv * 0.022 + -0.04) + a004);
    float3 env = brdf * r10.z * EnvSample(Rw, 7.0 * rEnv, R, V * (zW / V.z), R.xy - reflect(-V, up).xy);
    // absorption over the water depth (%399-411)
    float3 T = exp(-(d * r0.w) * r0.xyz);
)HLSL"
R"HLSL(    // single scattering (%412-522)
    float sunE = saturate(sunUp);
    float g = r3.w;
    float g2 = g * g;
    float hg = (1.0 - g2) / pow((g2 + 1.0) - dot(V, -L) * 2.0 * g, 1.5);
    float c = m * G3.w;
    float isoK = 0.98 - pow(min(max(1.0 - sunE, 0.0), 1.0), 5.0) * 0.98;
    if (G1.x > 0.5) {
        isoK = 1.0;
    }
    float iso = isoK * r1.z;
    float turb = sunE * G1.w * r1.w;
    float an = r1.y * sqrt(c / (c + 1.0)) + NoV * NoV * r1.x;
    float n = 1.0 / max(1.0, an + iso + turb);
    float A = n * an;
    float I = turb * n + iso;
    float tintK = saturate(G1.y / r2.w + 0.5);
    float3 tint = lerp(r3.rgb, r2.rgb, tintK);
    float3 lit = amb + sunVis * sunCol;
    if (G1.x > 0.5) {
        lit = interiorLit;
    }
    float3 body = (1.0 - T) * 0.0795774683 * (I * lit + sunVis * sunVis * sunCol * hg * A) * tint;
    // HD: hdWaterColor: the game's own water colour for this depth (the 3.3.5 depth ramp, made from the DayNight
    // river / ocean colours: they follow the hour and go dark at night) in place of Forever's scattering, which the
    // bright blue light of 3.3.5 nights turned into a flat bright blue
    body = lerp(body, (1.0 - T) * gameCol, gameMix);
    // foam lighting (%528-546)
    float NoL = min(max(dot(N, L), 1e-15), 1.0);
    float fz = saturate(G1.z * 10.0);
    float nl25 = saturate(NoL + 0.25);
    float fk = saturate(fz * fz * sunUp * (3.0 - fz * 2.0));
    float fl = saturate(sunVis + 0.2) * sunVis * ((pow(NoL, 8.0) - nl25) * fk + nl25);
    float3 foamLit = (fl * (sunCol - amb) + amb) * G2.rgb;
    // sun specular and the Fresnel share it takes from the environment (%565-618)
    float3 sunSpec = sunVis * sunCol * SunLobe(rSun, R, L, N, V);
    float3 H = normalize(L + V);
    float fh = min(max(1.0 - min(max(dot(H, V), 0.0), 1.0), 0.0), 1.0);
    float envW = 1.0 - (pow(fh, 5.0) * 0.98 + 0.02) * sunVis;
    // compose with the soft shoreline (%623-644)
    float k = saturate(d * 2.0);
    float3 Tbg = T * bg;
    float3 add = (Tbg - bg) + body + (foamLit - Tbg) * G2.w + sunSpec + envW * env;
    dbgD = d;
    dbgBody = body;
    dbgRefl = sunSpec + envW * env;
    dbgRough = rEnv;
    dbgBg = bg;
    return k * add + bg;
}

// Forever's foam weight over a depth (PRE %385-405 depth foam; the rim foam uses the same with its own row):
// strength * smoothstep(saturate(1 - dz / range))^4
float FoamWeight(float dz, float4 f)
{
    float s = saturate((dz - f.z) / -f.z);
    return pow(s * s * (3.0 - s * 2.0), 4.0) * f.x;
}

// Foam texture stand-in (Forever's 12fx_water_*_foam are Blizzard files we do not ship): the alpha of the 3.3.5
// animated lake/ocean texture, white, made linear like Forever does with its foam textures (pow 2.2).
// HD: only its brightest part (0.55..0.95 stretched to 0..1): the whole mask read as a veil over the shallows; made
// linear with a square (gamma 2) to save slots.
float4 FoamTex(float2 uv)
{
    float a = saturate(tex2D(lakeTex, uv).a * 2.5 - 1.375);
    return float4((a * a).xxx, a);
}

float4 main(float3 iT : TEXCOORD4, float3 iB : TEXCOORD5, float3 iN : TEXCOORD6, float4 iUvA : TEXCOORD0,
            float4 iUvB : TEXCOORD1, float4 iUvC : TEXCOORD2, float3 iWorld : TEXCOORD3, float4 iView : TEXCOORD7,
            float iFog : FOG, float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * cScreen.xy;
    // HD: interleaved gradient noise (Jimenez), the reflection march's per-pixel start offset
    gJitter = frac(52.9829189 * frac(dot(vpos, float2(0.06711056, 0.00583715))));
    float3 Pv = iView.xyz;
    float zW = Pv.z;
    float3 V = normalize(-Pv);

#if HD_FFT
    // HD: Forever's FFT slopes (G3): the wave cascades (HdWaterWaves.cpp, tiles from FFTTile.db2), added to the
    // 3.3.5 vertex waves (the normal of the TBN); the slope second moment is the cascades' squared slopes plus the
    // change across the pixel (what the cascades' mips average away)
    float4 w0 = tex2D(fft0, iWorld.xy * cWaves.x);
    float4 w1 = tex2D(fft1, iWorld.xy * cWaves.y);
    float4 w2 = tex2D(fft2, iWorld.xy * cWaves.z);
    float4 w3 = tex2D(fft3, iWorld.xy * cWaves.w);
    float3 Nv = normalize(iN);
    float2 S = -Nv.xy / max(Nv.z, 0.1) + (w0.xy + w1.xy + w2.xy + w3.xy);
    // HD: the ripples of units walking or swimming here (r - g = dh/dx, b - a = dh/dy, both x 2; calm = 0)
    float4 rip = tex2D(ripples, iWorld.xy * cRipples.xy + cRipples.zw);
    S += float2(rip.r - rip.g, rip.b - rip.a) * (0.5 * cRipples2.x);
    float2 sx = ddx(S);
    float2 sy = ddy(S);
    float4 G3 = float4(S, dot(S, S) + dot(sx, sx) + dot(sy, sy), dot(S, S));
    float waveH = w0.z + w1.z + w2.z + w3.z;
    // whitecaps where the cascades' horizontal displacement folds the surface (Jacobian below the threshold)
    float jac = 1.0 - ((1.0 - w0.w) + (1.0 - w1.w) + (1.0 - w2.w) + (1.0 - w3.w));
    float whitecap = saturate((cWaves2.x - jac) * cWaves2.y);
#else
    // the 3.3.5 normal maps: two taps each of a near and a far map, blended by distance as 3.3.5 does, bent by the
    // 3.3.5 vertex waves (TBN); their slopes stand in for Forever's FFT slopes (G3)
    float3 n1 = DecodeN(tex2D(bumpA, iUvA.xy).xy);
    float3 n2 = DecodeN(tex2D(bumpA, iUvA.wz).wz);
    float3 n3 = DecodeN(tex2D(bumpB, iUvB.xy).xy);
    float3 n4 = DecodeN(tex2D(bumpB, iUvB.wz).wz);
    float3 rel = iWorld - cCamera.xyz;
    float blend = saturate(sqrt(dot(rel.xy, rel.xy)) * cParams0.x + 0.5);
    float3 n = lerp(normalize(n3 + n4), normalize(n1 + n2), blend);
    float3 Nm = normalize(float3(dot(iT, n), dot(iB, n), dot(iN, n)));
    float2 S = -Nm.xy / max(Nm.z, 0.1);
    // slope second moment: the spread of the four taps (as Forever's cascades) plus the change across the pixel
    // (the taps' slopes to first order, -n.xy: they only feed the roughness)
    float2 s1 = -n1.xy;
    float2 s2 = -n2.xy;
    float2 s3 = -n3.xy;
    float2 s4 = -n4.xy;
    float2 meanA = (s1 + s2) * 0.5;
    float2 meanB = (s3 + s4) * 0.5;
    float2 meanT = lerp(meanB, meanA, blend);
    float mom = lerp((dot(s3, s3) + dot(s4, s4)) * 0.5, (dot(s1, s1) + dot(s2, s2)) * 0.5, blend);
    float2 sx = ddx(S);
    float2 sy = ddy(S);
    float spread = max(mom - dot(meanT, meanT), 0.0) + dot(sx, sx) + dot(sy, sy);
    float4 G3 = float4(S, dot(S, S) + spread, dot(S, S));
    float waveH = 0.0;
    float whitecap = 0.0;
#endif

    // foam (Forever's prepass): depth foam and rim foam, both from the water depth here (3.3.5 has no shore field);
    // one tap of the stand-in texture (at the depth foam's tiling and scroll) carries both
    float sceneZ = SceneDepthAt(uv);
    float dz = max(0.0, sceneZ - zW);
    float2 uvF = (17066.666 - iWorld.yx) * 0.001875 + 0.001 * S;
    float t = cFog335.w;
    float4 foam = FoamTex(cType[4].y * uvF + t * cType[4].w) * (FoamWeight(dz, cType[4]) + FoamWeight(dz, cType[5]) + whitecap);
    float4 G2 = saturate(foam);
    // HD: G1.y wave height (3.3.5 vertex waves + FFT), G1.z / w the FFT foam channels (whitecaps; 0 without FFT)
    float4 G1 = float4(cScreen.z, iView.w + waveH, whitecap, whitecap);

    // hdWaterBody scales the scattering through its tint (body is linear in r2.rgb and r3.rgb)
    float4 bodyK = float4(cSky[1].www, 1.0);
    // HD: the game's water colour here (hdWaterColor), made linear with a square (gamma 2) to save slots
    float3 ramp = tex2D(depthRamp, iUvC.xy).rgb;
    float dbgD;
    float3 dbgBody;
    float3 dbgRefl;
    float dbgRough;
    float3 dbgBg;
    float3 col = ForeverWater(uv, zW, V, G1, G2, G3, sceneZ, cModelView3[0].xyz, cModelView3[1].xyz,
                              cModelView3[2].xyz, cSunView.xyz, cDiffuseLin.rgb, cScreen.w, cInterior.rgb,
                              cType[0], cType[1], cType[2] * bodyK, cType[3] * bodyK, cType[6],
                              ramp * ramp * bodyK.x, cInterior.w, dbgD, dbgBody, dbgRefl, dbgRough, dbgBg);
    float dbg = cSky[0].w;
    if (dbg > 0.5) {
        // hdWaterDebug: 1 = water depth (white = 10 yards), 2 = scattering alone, 3 = reflections alone, 4 = foam,
        // 5 = roughness, 6 = world depth under the water (white = 100 yards), 7 = the un-fogged world under the water,
        // HD: 8 the reflection march (below)
        col = saturate(dbgD * 0.1).xxx;
        if (dbg > 1.5) col = dbgBody;
        if (dbg > 2.5) col = dbgRefl;
        if (dbg > 3.5) col = G2.rgb;
        if (dbg > 4.5) col = dbgRough.xxx;
        if (dbg > 5.5) col = saturate(sceneZ * 0.01).xxx;
        if (dbg > 6.5) col = dbgBg;
#if HD_FFT
        // HD: 8 = the reflection march: green = hit, blue = steps taken (bright = all 40), black = miss (sky);
        // with hdWaterWaves 1 only
        if (dbg > 7.5) col = float3(0.0, gSsr.xy);
#endif
    }
    float3 outG = pow(max(col, 0.0), 1.0 / 2.2);
    // the 3.3.5 fog of this surface, as on every other 3.3.5 surface (hdFog's pass comes later, over everything);
    // the test views have none
    if (dbg > 0.5) {
        return float4(saturate(outG), 1.0);
    }
    return float4(lerp(cFogColor.rgb, outG, iFog), 1.0);
}

#endif
)HLSL";

    // The world depth (INTZ) to linear view depth (R32F), before the liquids.
    const char* kDepthShader =
R"HLSL(// Waystone HD water: the world depth (INTZ, as hdFog captures it) turned into linear view depth (yards) in an R32F
// target, before the liquids are drawn. Same formula as hdFog's shader (HdFog.cpp). Drawn with no depth buffer bound.
sampler2D depthTex : register(s0);
float4 c_screen : register(c0);  // 1/width, 1/height, proj c2, proj d2
float4 c_vp     : register(c1);  // viewport depth range min z, max z; depth written where nothing was drawn

float4 main(float2 vpos : VPOS) : COLOR0
{
    float2 uv = (vpos + 0.5) * c_screen.xy;
    float raw = tex2D(depthTex, uv).r;
    // the world viewport only uses depth c_vp.x..c_vp.y: back to the projection's 0..1
    float z = saturate((raw - c_vp.x) / max(c_vp.y - c_vp.x, 1e-4));
    // view depth: z = c2 + d2 / zv
    float denom = z - c_screen.z;
    float zv = abs(c_screen.w / (abs(denom) < 1e-7 ? 1e-7 : denom));
    if (raw >= 0.99999) zv = c_vp.z;
    return float4(min(zv, c_vp.z), 0.0, 0.0, 1.0);
}
)HLSL";

    typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);

    enum { StateIdle, StateCompiling, StateReady, StateFailed };
    enum { CodeVertex = 0, CodePbr = 1, CodeOriginal = 2, CodeDepth = 3, CodePbrFft = 4, CodePlanar = 5, CodePlanarFft = 6, CodePlanarLite = 7, CodePlanarLiteFft = 8, CodeCount = 9 }; // HD: + FFT variant, + hdWaterPlanar (SSR on top, or alone)

    // Pixel constants we add (hd_water_ps.hlsl): c12..c33
    const uint32_t kFirstConst = 12;
    const uint32_t kConstCount = 31; // HD: c34, c35 FFT waves; c36, c37 ripples; c38..c42 hdWaterPlanar
    // Depth written where nothing was drawn (the sky): far enough for the water to be fully opaque
    const float kSkyDepth = 5000.0f;
    // Time for the foam scroll wraps every 2000 s: a whole number of turns for Forever's scroll speeds (0.001 steps)
    const uint32_t kTimeWrapMs = 2000000;

    std::atomic<int32_t> s_state(StateIdle);
    std::vector<uint8_t> s_code[CodeCount]; // written by the compile thread before s_state = StateReady
    char s_threadInfo[200] = "";            // written by the compile thread before s_state changes to Ready/Failed

    CVar* s_mode = nullptr;
    CVar* s_debug = nullptr;
    CVar* s_body = nullptr;
    CVar* s_reflect = nullptr;
    CVar* s_color = nullptr; // HD: hdWaterColor
    CVar* s_info = nullptr;
    char s_lastInfo[260] = "";

    // Our shaders as client shader objects (the client binds them and keeps its state cache right); never deleted.
    CGxShader* s_shaders[8] = {}; // vertex, PBR pixel, 3.3.5-copy pixel, HD: PBR pixel with FFT waves, HD: planar (+ FFT),
                                  // planar alone (+ FFT)
    int32_t s_longShaders = -1;   // HD: the card takes ps_3_0 shaders longer than 512 slots (-1 = not asked yet)
    const float kWhitecapThreshold = 0.75f; // HD: Jacobian under which the FFT crests foam (ours, not Forever's)
    const float kWhitecapGain = 4.0f;
    IDirect3DPixelShader9* s_depthShader = nullptr;
    IDirect3DTexture9* s_linearTex = nullptr;  // linear view depth of the world before the liquids (R32F)
    IDirect3DSurface9* s_linearSurf = nullptr;
    UINT s_linearWidth = 0;
    UINT s_linearHeight = 0;
    IDirect3DTexture9* s_sceneTex = nullptr;   // the world image before the liquids (hdFog's copy, no reference)
    bool s_passActive = false;                 // hdWater 1 can draw in this liquid pass
    bool s_rawBound = false;                   // our textures are bound on s6/s7 for the current draw
    bool s_planarRawBound = false;             // HD: the hdWaterPlanar texture is bound on s13
    float s_invWidth = 0.0f;
    float s_invHeight = 0.0f;
    const char* s_passNote = "";
    int32_t s_drawsPbr = 0;
    int32_t s_drawsKept = 0;
    int32_t s_lastLegacy = -1;                 // the last water drawn: 3.3.5 LiquidType -> Forever type (hdWaterInfo)
    int32_t s_lastPbr = 0;

    // ---------------------------------------------------------------------------------------------------------------
    // Water types: Forever's LiquidTypePBRWater rows, as hd_water_ps.hlsl's cType[0..6] (r0, r1, r2, r3, r4, r5, r10)
    struct WaterType {
        float rows[7][4];
    };
    struct LegacyMap {
        int32_t pbr;
        bool interior;
    };
    std::map<int32_t, WaterType> s_types;       // Forever PBR type -> rows (forever_data\hd_forever_liquid.txt)
    std::map<int32_t, LegacyMap> s_legacy;      // 3.3.5 LiquidType -> Forever PBR type
    bool s_typesLoaded = false;
    bool s_fileFound = false;

    // Built-in rows when the file is missing. Hand-made, NOT Forever's numbers (those come only from the file):
    // a clear blue lake and a green-blue sea of the same kind. Colours linear, absorption per yard.
    // HD: slots as make_hd_forever_liquid.py fills them (r1.z, the isotropic weight DEF does not normalise, <= 4 pi;
    // r10.w = 4, the sun / moon glint scale).
    const WaterType kBuiltinLake = { {
        { 0.90f, 0.36f, 0.22f, 0.30f },   // absorption rgb (light kept per yard ~0.41 0.70 0.80), density
        { 0.50f, 16.0f, 4.00f, 0.50f },   // lobes: NoV^2, slope variance, isotropic, turbulence
        { 0.25f, 0.50f, 0.90f, 1.00f },   // crest tint, wave height range
        { 0.03f, 0.22f, 0.45f, -0.15f },  // base tint, Henyey-Greenstein g
        { 0.80f, 25.0f, 1.00f, 0.010f },  // depth foam: strength, tiling, range, speed
        { 0.30f, 35.0f, 1.50f, 0.015f },  // shore foam
        { 0.25f, 0.03f, 0.50f, 4.00f },   // sun roughness, sky roughness, sky strength, sun specular scale
    } };
    const WaterType kBuiltinOcean = { {
        { 0.80f, 0.36f, 0.50f, 0.25f },
        { 0.75f, 4.00f, 6.00f, 6.00f },
        { 0.10f, 0.50f, 0.55f, 2.00f },
        { 0.03f, 0.15f, 0.20f, -0.15f },
        { 0.60f, 22.0f, 15.0f, 0.003f },
        { 0.35f, 22.0f, 1.50f, 0.015f },
        { 0.75f, 0.03f, 0.80f, 4.00f },
    } };
    // The same 3.3.5 -> Forever map as make_hd_forever_liquid.py (used when the file has no M lines)
    const int32_t kLegacyDefault[][3] = {
        { 1, 1240, 0 }, { 5, 1240, 0 }, { 9, 1288, 0 }, { 13, 1240, 0 }, { 17, 1290, 1 },
        { 2, 1250, 0 }, { 6, 1250, 0 }, { 10, 1250, 0 }, { 14, 1250, 0 },
        { 41, 1240, 0 }, { 61, 1240, 0 }, { 81, 1240, 0 }, { 100, 1240, 0 },
    };

    std::map<const Liquid::CMaterialSettings*, int32_t> s_settingsType; // settings -> 3.3.5 liquid type (cache)

    // ---------------------------------------------------------------------------------------------------------------
    void RegisterCVars() {
        static bool registered = false;
        if (registered) return;
        registered = true;
        s_mode = CVar::Register("hdWater", "HD: 1 = WoW Forever PBR water, 2 = our shaders with the 3.3.5 look (test), 0 = Blizzard water", 1, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_debug = CVar::Register("hdWaterDebug", "HD: 1 = water depth, 2 = scattering, 3 = reflections, 4 = foam, 5 = roughness, 6 = world depth, 7 = world under the water, 8 = reflection hits and steps (test views)", 0, "0", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_body = CVar::Register("hdWaterBody", "HD: strength of the water's own colour, 1 = Forever", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_reflect = CVar::Register("hdWaterReflect", "HD: screen-space reflections of the world on the water, 1 = on (Forever), 0 = sky only", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_color = CVar::Register("hdWaterColor", "HD: water colour, 1 = the game's own colours (follow the hour, dark at night), 0 = Forever's scattering", 1, "1", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
        s_info = CVar::Register("hdWaterInfo", "HD: hdWater status (read only)", 0, "off", nullptr, CATEGORY_GRAPHICS, false, nullptr, false);
    }

    void SetInfo(const char* text) {
        if (!s_info || !strcmp(s_lastInfo, text)) return;
        snprintf(s_lastInfo, sizeof(s_lastInfo), "%s", text);
        s_info->Set(text, true, false, false, false);
    }

    int32_t Mode() {
        return s_mode ? s_mode->m_intValue : 0;
    }

    float Clamp(float v, float lo, float hi) {
        return v < lo ? lo : (v > hi ? hi : v);
    }

    IDirect3DDevice9* Device() {
        if (!g_theGxDevicePtr || g_theGxDevicePtr->DeviceApi() != GxApi_D3d9) return nullptr;
        return static_cast<CGxDeviceD3d*>(g_theGxDevicePtr)->m_d3dDevice;
    }

    // ---------------------------------------------------------------------------------------------------------------
    // Compile thread: every shader, all or nothing.
    void CompileAll() {
        ULONGLONG start = GetTickCount64();
        HMODULE module = LoadLibraryA("d3dcompiler_47.dll");
        D3DCompileFn compile = module ? reinterpret_cast<D3DCompileFn>(GetProcAddress(module, "D3DCompile")) : nullptr;
        if (!compile) {
            snprintf(s_threadInfo, sizeof(s_threadInfo), "ERROR: d3dcompiler_47.dll not found, Blizzard water kept");
            s_state.store(StateFailed);
            return;
        }
        struct Job { const char* source; const char* name; const char* profile; const char* original; const char* fft; const char* planar; };
        const Job jobs[CodeCount] = {
            { kVertexShader, "HdWaterVS", "vs_3_0", nullptr, nullptr, nullptr },
            { kPixelShader, "HdWaterPS", "ps_3_0", "0", nullptr, nullptr },
            { kPixelShader, "HdWaterPS335", "ps_3_0", "1", nullptr, nullptr },
            { kDepthShader, "HdWaterDepth", "ps_3_0", nullptr, nullptr, nullptr },
            { kPixelShader, "HdWaterPSFft", "ps_3_0", "0", "1", nullptr }, // HD: FFT waves (hdWaterWaves 1)
            { kPixelShader, "HdWaterPSPlanar", "ps_3_0", "0", nullptr, "2" }, // HD: hdWaterPlanar + the SSR (about 550 slots)
            { kPixelShader, "HdWaterPSPlanarFft", "ps_3_0", "0", "1", "2" },
            { kPixelShader, "HdWaterPSPlanarLite", "ps_3_0", "0", nullptr, "1" }, // HD: hdWaterPlanar alone (512-slot cards)
            { kPixelShader, "HdWaterPSPlanarLiteFft", "ps_3_0", "0", "1", "1" },
        };
        for (int32_t i = 0; i < CodeCount; i++) {
            D3D_SHADER_MACRO macros[4] = {};
            if (jobs[i].original) { macros[0].Name = "HD_ORIGINAL"; macros[0].Definition = jobs[i].original; }
            if (jobs[i].fft) { macros[1].Name = "HD_FFT"; macros[1].Definition = jobs[i].fft; }
            // HD: hdWaterPlanar's permutations (the macro array stays contiguous without HD_FFT)
            if (jobs[i].planar) {
                int slot = jobs[i].fft ? 2 : 1;
                macros[slot].Name = "HD_PLANAR"; macros[slot].Definition = jobs[i].planar;
            }
            ID3DBlob* code = nullptr;
            ID3DBlob* errors = nullptr;
            HRESULT hr = compile(jobs[i].source, strlen(jobs[i].source), jobs[i].name, macros, nullptr, "main", jobs[i].profile, D3DCOMPILE_OPTIMIZATION_LEVEL3, 0, &code, &errors);
            if (FAILED(hr) || !code) {
                if (i >= CodePlanar) {
                    // HD: a planar shader that does not compile leaves the SSR and Blizzard's water as they are
                    if (errors) errors->Release();
                    if (code) code->Release();
                    continue;
                }
                snprintf(s_threadInfo, sizeof(s_threadInfo), "ERROR: %s: %s", jobs[i].name, errors ? static_cast<const char*>(errors->GetBufferPointer()) : "unknown");
                if (errors) errors->Release();
                if (code) code->Release();
                s_state.store(StateFailed);
                return;
            }
            if (errors) errors->Release();
            const uint8_t* bytes = static_cast<const uint8_t*>(code->GetBufferPointer());
            s_code[i].assign(bytes, bytes + code->GetBufferSize());
            code->Release();
        }
        snprintf(s_threadInfo, sizeof(s_threadInfo), "shaders compiled in %u ms", static_cast<uint32_t>(GetTickCount64() - start));
        s_state.store(StateReady);
    }

    void StartCompile() {
        int32_t expected = StateIdle;
        if (s_state.compare_exchange_strong(expected, StateCompiling)) std::thread(CompileAll).detach();
    }

    // Our client shader objects, made once the compile thread is done (the device builds the D3D object when bound).
    bool EnsureShaders() {
        if (s_state.load() != StateReady) return false;
        if (s_shaders[0]) return true;
        const int32_t codes[8] = { CodeVertex, CodePbr, CodeOriginal, CodePbrFft, CodePlanar, CodePlanarFft, CodePlanarLite, CodePlanarLiteFft };
        for (int32_t i = 0; i < 8; i++) {
            if (s_code[codes[i]].empty()) continue;
            CGxShader* shader = new CGxShader();
            shader->m_refCount = 1;
            shader->m_target = i == 0 ? GxSh_Vertex : GxSh_Pixel;
            shader->m_code.SetCount(static_cast<uint32_t>(s_code[codes[i]].size()));
            memcpy(shader->m_code.m_data, &s_code[codes[i]][0], s_code[codes[i]].size());
            s_shaders[i] = shader;
        }
        return true;
    }

    bool IsModel3(CGxShader* shader, uint32_t version) {
        return shader && shader->m_code.Count() >= 4 && *reinterpret_cast<const uint32_t*>(shader->m_code.m_data) == version;
    }

    // ---------------------------------------------------------------------------------------------------------------
    FILE* OpenData(const char* name) {
        char path[260];
        snprintf(path, sizeof(path), "forever_data\\%s", name);
        FILE* file = fopen(path, "rb");
        if (file) return file;
        snprintf(path, sizeof(path), "..\\..\\forever_data\\%s", name);
        return fopen(path, "rb");
    }

    // forever_data\hd_forever_liquid.txt (V 1): "T type 28 numbers" and "M legacyType foreverType flags"
    void LoadTypes() {
        if (s_typesLoaded) return;
        s_typesLoaded = true;
        FILE* file = OpenData("hd_forever_liquid.txt");
        if (file) {
            s_fileFound = true;
            char line[1024];
            while (fgets(line, sizeof(line), file)) {
                if (line[0] == 'T' && line[1] == ' ') {
                    char* p = line + 2;
                    char* end = nullptr;
                    long id = strtol(p, &end, 10);
                    if (end == p) continue;
                    p = end;
                    WaterType type;
                    int32_t n = 0;
                    for (; n < 28; n++) {
                        double v = strtod(p, &end);
                        if (end == p) break;
                        type.rows[n / 4][n % 4] = static_cast<float>(v);
                        p = end;
                    }
                    if (n == 28) s_types[static_cast<int32_t>(id)] = type;
                } else if (line[0] == 'M' && line[1] == ' ') {
                    int legacy = 0, pbr = 0;
                    char flags[16] = "";
                    if (sscanf(line + 2, "%d %d %15s", &legacy, &pbr, flags) >= 2) {
                        LegacyMap map = { pbr, strchr(flags, 'I') != nullptr };
                        s_legacy[legacy] = map;
                    }
                }
            }
            fclose(file);
        }
        if (s_legacy.empty()) {
            for (size_t i = 0; i < sizeof(kLegacyDefault) / sizeof(kLegacyDefault[0]); i++) {
                LegacyMap map = { kLegacyDefault[i][1], kLegacyDefault[i][2] != 0 };
                s_legacy[kLegacyDefault[i][0]] = map;
            }
        }
    }

    // The 3.3.5 liquid type of a settings object (the settings bank is indexed by liquid type).
    int32_t SettingsType(const Liquid::CMaterialSettings* settings) {
        TSGrowableArray<Liquid::CMaterialSettings*>& bank = Liquid::CSettingsBank::s_settings;
        std::map<const Liquid::CMaterialSettings*, int32_t>::iterator it = s_settingsType.find(settings);
        if (it != s_settingsType.end() && it->second >= 0 && static_cast<uint32_t>(it->second) < bank.Count() && bank.m_data[it->second] == settings) {
            return it->second;
        }
        int32_t found = -1;
        for (uint32_t i = 0; i < bank.Count(); i++) {
            if (bank.m_data[i] == settings) { found = static_cast<int32_t>(i); break; }
        }
        s_settingsType[settings] = found;
        return found;
    }

    bool NameHas(const char* name, const char* what) {
        char low[128];
        size_t i = 0;
        for (; name[i] && i + 1 < sizeof(low); i++) low[i] = static_cast<char>(tolower(static_cast<unsigned char>(name[i])));
        low[i] = 0;
        return strstr(low, what) != nullptr;
    }

    // Forever's rows for this water; interior = no sun (Forever's flag 128). Sets which type it is for the info line.
    const WaterType* TypeFor(const Liquid::CMaterialSettings* settings, bool* interior, int32_t* pbrOut) {
        LoadTypes();
        int32_t legacy = SettingsType(settings);
        int32_t pbr = 0;
        *interior = false;
        std::map<int32_t, LegacyMap>::const_iterator m = s_legacy.find(legacy);
        if (m != s_legacy.end()) {
            pbr = m->second.pbr;
            *interior = m->second.interior;
        } else {
            // a 3.3.5 type the map does not know: by its depth ramp (texture 4: procedural Ocean / River / Wmo)
            pbr = NameHas(settings->m_textureNames[4], "ocean") ? 1250 : 1240;
        }
        *pbrOut = pbr;
        s_lastLegacy = legacy;
        s_lastPbr = pbr;
        std::map<int32_t, WaterType>::const_iterator t = s_types.find(pbr);
        if (t != s_types.end()) return &t->second;
        return pbr == 1250 ? &kBuiltinOcean : &kBuiltinLake;
    }

    // ---------------------------------------------------------------------------------------------------------------
    float Linear(uint8_t c) {
        return powf(c / 255.0f, 2.2f);
    }

    void LinearColor(const CImVector& c, float* out) {
        out[0] = Linear(c.r);
        out[1] = Linear(c.g);
        out[2] = Linear(c.b);
    }

    void ReleaseTargets() {
        if (s_linearSurf) { s_linearSurf->Release(); s_linearSurf = nullptr; }
        if (s_linearTex) { s_linearTex->Release(); s_linearTex = nullptr; }
        s_linearWidth = 0;
        s_linearHeight = 0;
        s_sceneTex = nullptr;
        s_passActive = false;
    }

    bool EnsureDepthShader(IDirect3DDevice9* device) {
        if (s_depthShader) return true;
        const std::vector<uint8_t>& code = s_code[CodeDepth];
        if (code.size() < 4) return false;
        if (FAILED(device->CreatePixelShader(reinterpret_cast<const DWORD*>(&code[0]), &s_depthShader))) {
            s_depthShader = nullptr;
            return false;
        }
        return true;
    }

    bool EnsureLinearTarget(IDirect3DDevice9* device, UINT width, UINT height) {
        if (s_linearTex && s_linearWidth == width && s_linearHeight == height) return true;
        if (s_linearSurf) { s_linearSurf->Release(); s_linearSurf = nullptr; }
        if (s_linearTex) { s_linearTex->Release(); s_linearTex = nullptr; }
        if (FAILED(device->CreateTexture(width, height, 1, D3DUSAGE_RENDERTARGET, D3DFMT_R32F, D3DPOOL_DEFAULT, &s_linearTex, nullptr)) || !s_linearTex) {
            s_linearTex = nullptr;
            return false;
        }
        s_linearTex->GetSurfaceLevel(0, &s_linearSurf);
        s_linearWidth = width;
        s_linearHeight = height;
        return true;
    }

    // World depth (INTZ) -> linear view depth (R32F), drawn with no depth buffer bound. Puts the world's colour
    // and depth targets back and makes the client send its whole state again (like hdFog's pass).
    void LineariseDepth(IDirect3DDevice9* device, const HD::FogWorldDepth& depth, IDirect3DSurface9* worldColor, UINT width, UINT height) {
        IDirect3DSurface9* worldDepth = nullptr;
        device->GetDepthStencilSurface(&worldDepth);
        device->SetDepthStencilSurface(nullptr);
        device->SetRenderTarget(0, s_linearSurf);

        device->SetRenderState(D3DRS_ZENABLE, FALSE);
        device->SetRenderState(D3DRS_ZWRITEENABLE, FALSE);
        device->SetRenderState(D3DRS_ALPHATESTENABLE, FALSE);
        device->SetRenderState(D3DRS_ALPHABLENDENABLE, FALSE);
        device->SetRenderState(D3DRS_CULLMODE, D3DCULL_NONE);
        device->SetRenderState(D3DRS_FOGENABLE, FALSE);
        device->SetRenderState(D3DRS_SCISSORTESTENABLE, FALSE);
        device->SetRenderState(D3DRS_CLIPPLANEENABLE, 0);
        device->SetRenderState(D3DRS_COLORWRITEENABLE, 0x0F);
        device->SetVertexShader(nullptr);
        device->SetPixelShader(s_depthShader);
        device->SetFVF(D3DFVF_XYZRHW);
        device->SetTexture(0, depth.texture);
        device->SetSamplerState(0, D3DSAMP_MINFILTER, D3DTEXF_POINT);
        device->SetSamplerState(0, D3DSAMP_MAGFILTER, D3DTEXF_POINT);
        device->SetSamplerState(0, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
        device->SetSamplerState(0, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
        device->SetSamplerState(0, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);

        float c[8] = {
            1.0f / width, 1.0f / height, depth.projC2, depth.projD2,
            depth.vpMin, depth.vpMax, kSkyDepth, 0.0f,
        };
        device->SetPixelShaderConstantF(0, c, 2);
        float w = static_cast<float>(width) - 0.5f;
        float h = static_cast<float>(height) - 0.5f;
        float quad[16] = {
            -0.5f, -0.5f, 0.0f, 1.0f,
            w, -0.5f, 0.0f, 1.0f,
            -0.5f, h, 0.0f, 1.0f,
            w, h, 0.0f, 1.0f,
        };
        device->DrawPrimitiveUP(D3DPT_TRIANGLESTRIP, 2, quad, 4 * sizeof(float));
        device->SetTexture(0, nullptr);

        device->SetRenderTarget(0, worldColor);
        device->SetDepthStencilSurface(worldDepth);
        if (worldDepth) worldDepth->Release();
        // HD: the client turns the depth test on once at start-up and never again (see HdFog.cpp)
        device->SetRenderState(D3DRS_ZENABLE, D3DZB_TRUE);
        CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
        gx->m_viewportDirty = 1;     // SetRenderTarget reset the viewport and the scissor rectangle
        gx->m_scissorRectDirty = 1;
        HD::FogInvalidateClientState();
    }

    // Raw binding of our two textures on s6/s7 for one water draw (after the client synced its own state, so its
    // cache says s6/s7 hold nothing; WaterAfterDraw unbinds them again).
    // HD: fft = also the FFT wave cascades on s8..s11 (linear, mipmapped, wrapping tiles)
    void BindRawTextures(IDirect3DDevice9* device, bool fft, bool planar) {
        s_planarRawBound = planar;
        CGxDeviceD3d* gx = static_cast<CGxDeviceD3d*>(g_theGxDevicePtr);
        IDirect3DBaseTexture9* textures[2 + HD::WaterWaveCascades] = { s_linearTex, s_sceneTex };
        DWORD count = 2;
        if (fft) {
            for (int32_t i = 0; i < HD::WaterWaveCascades; i++) textures[2 + i] = HD::WaterWavesTexture(i);
            count = 2 + HD::WaterWaveCascades;
        }
        for (DWORD i = 0; i < count; i++) {
            DWORD stage = i < 2 ? 6 + i : 8 + (i - 2);
            bool wave = i >= 2;
            device->SetTexture(stage, textures[i]);
            device->SetSamplerState(stage, D3DSAMP_MINFILTER, wave ? D3DTEXF_LINEAR : D3DTEXF_POINT);
            device->SetSamplerState(stage, D3DSAMP_MAGFILTER, wave ? D3DTEXF_LINEAR : D3DTEXF_POINT);
            device->SetSamplerState(stage, D3DSAMP_MIPFILTER, wave ? D3DTEXF_LINEAR : D3DTEXF_NONE);
            device->SetSamplerState(stage, D3DSAMP_ADDRESSU, wave ? D3DTADDRESS_WRAP : D3DTADDRESS_CLAMP);
            device->SetSamplerState(stage, D3DSAMP_ADDRESSV, wave ? D3DTADDRESS_WRAP : D3DTADDRESS_CLAMP);
            device->SetSamplerState(stage, D3DSAMP_MAXANISOTROPY, 1);
            // the client's sampler cache no longer knows these: it sends them again the next time
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMinFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMagFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMipFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssWrapU0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssWrapV0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMaxAnisotropy0 + stage] = 0xFFFFFFFFu;
        }
        if (fft) {
            // HD: s12 ripples (HdWaterRipples.cpp): linear, one level, clamped (its edge texels are calm)
            const DWORD stage = 12;
            device->SetTexture(stage, HD::WaterRipplesTexture());
            device->SetSamplerState(stage, D3DSAMP_MINFILTER, D3DTEXF_LINEAR);
            device->SetSamplerState(stage, D3DSAMP_MAGFILTER, D3DTEXF_LINEAR);
            device->SetSamplerState(stage, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
            device->SetSamplerState(stage, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
            device->SetSamplerState(stage, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
            device->SetSamplerState(stage, D3DSAMP_MAXANISOTROPY, 1);
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMinFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMagFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMipFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssWrapU0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssWrapV0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMaxAnisotropy0 + stage] = 0xFFFFFFFFu;
        }
        if (planar) { // HD: s13 hdWaterPlanar's mirror image: linear, one level, clamped
            const DWORD stage = 13;
            device->SetTexture(stage, HD::WaterPlanarTexture());
            device->SetSamplerState(stage, D3DSAMP_MINFILTER, D3DTEXF_LINEAR);
            device->SetSamplerState(stage, D3DSAMP_MAGFILTER, D3DTEXF_LINEAR);
            device->SetSamplerState(stage, D3DSAMP_MIPFILTER, D3DTEXF_NONE);
            device->SetSamplerState(stage, D3DSAMP_ADDRESSU, D3DTADDRESS_CLAMP);
            device->SetSamplerState(stage, D3DSAMP_ADDRESSV, D3DTADDRESS_CLAMP);
            device->SetSamplerState(stage, D3DSAMP_SRGBTEXTURE, FALSE);
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMinFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMagFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssMipFilter0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssWrapU0 + stage] = 0xFFFFFFFFu;
            gx->m_deviceStates[CGxDeviceD3d::Ds_TssWrapV0 + stage] = 0xFFFFFFFFu;
        }
        s_rawBound = true;
    }

    void ShowPassInfo() {
        char text[260];
        snprintf(text, sizeof(text), "on (%s) | %s | %d water draws Forever, %d Blizzard | last type %d -> %d | %s",
                 s_fileFound ? "forever_data\\hd_forever_liquid.txt" : "built-in values, hd_forever_liquid.txt not found",
                 s_passNote, s_drawsPbr, s_drawsKept, s_lastLegacy, s_lastPbr, s_threadInfo);
        SetInfo(text);
    }
}

void HD::WaterBeginLiquidPass(bool cameraInLiquid) {
    RegisterCVars();
    HD::WaterPlanarReset(); // HD: hdWaterPlanar: no reflection from an earlier frame
    s_passActive = false;
    s_drawsPbr = 0;
    s_drawsKept = 0;
    int32_t mode = Mode();
    if (mode == 0) {
        SetInfo("off");
        return;
    }
    StartCompile();
    int32_t state = s_state.load();
    if (state == StateFailed) { SetInfo(s_threadInfo); return; }
    if (state != StateReady || !EnsureShaders()) { SetInfo("compiling (Blizzard water until done)"); return; }
    if (mode != 1) {
        char text[260];
        snprintf(text, sizeof(text), "2 = our shaders with the 3.3.5 look | %s", s_threadInfo);
        SetInfo(text);
        return;
    }
    LoadTypes();
    if (cameraInLiquid) { s_passNote = "camera under water: Blizzard water"; ShowPassInfo(); return; }

    IDirect3DDevice9* device = Device();
    if (!device) { SetInfo("ERROR: needs gxApi d3d9"); return; }
    HD::FogWorldDepth depth;
    if (!HD::FogGetWorldDepth(&depth)) {
        s_passNote = "no world depth (multisampling must be 1x, INTZ needed): Blizzard water";
        ShowPassInfo();
        return;
    }
    if (!EnsureDepthShader(device)) { SetInfo("ERROR: depth shader"); return; }

    IDirect3DSurface9* color = nullptr;
    if (FAILED(device->GetRenderTarget(0, &color)) || !color) return;
    D3DSURFACE_DESC desc;
    color->GetDesc(&desc);
    if (desc.Width != depth.width || desc.Height != depth.height || desc.MultiSampleType != D3DMULTISAMPLE_NONE) {
        color->Release();
        s_passNote = "world target and depth differ in size: Blizzard water";
        ShowPassInfo();
        return;
    }
    if (!EnsureLinearTarget(device, desc.Width, desc.Height)) {
        color->Release();
        SetInfo("ERROR: R32F render target not supported");
        return;
    }
    // HD: hdWaterPlanar: the mirrored sky + terrain, before the world image and depth are copied (its own target and
    // depth; it puts the client's state back)
    if ((s_shaders[4] || s_shaders[5] || s_shaders[6] || s_shaders[7]) && (!s_reflect || s_reflect->m_floatValue > 0.0f)) HD::WaterPlanarRender(device, desc.Width, desc.Height);
    // the world image before the liquids (hdFog's scene texture; hdFog copies the finished world into it later)
    s_sceneTex = HD::FogCopyWorldColor(color, desc.Width, desc.Height);
    if (!s_sceneTex) {
        color->Release();
        SetInfo("ERROR: scene copy texture");
        return;
    }
    LineariseDepth(device, depth, color, desc.Width, desc.Height);
    HD::WaterRipplesRender(device, color); // HD: this frame's ripples around the camera
    color->Release();

    s_invWidth = 1.0f / desc.Width;
    s_invHeight = 1.0f / desc.Height;
    s_passNote = "Forever PBR water";
    s_passActive = true;
}

void HD::WaterEndLiquidPass() {
    if (s_passActive || (Mode() == 1 && (s_drawsPbr || s_drawsKept))) ShowPassInfo();
    s_passActive = false;
}

bool HD::WaterBindProcWater(Liquid::CMaterialSettings* settings, uint32_t lightCount, const CAaSphere* bounds) {
    s_rawBound = false;
    int32_t mode = Mode();
    if (mode == 0 || !settings || !s_shaders[0]) return false;
    if (lightCount > 3) lightCount = 3;
    // only over the shader model 3 code (a ps_2_x device keeps Blizzard's water)
    if (!IsModel3(Liquid::CMaterialProcWater::s_pixelShader, 0xFFFF0300u) || !IsModel3(Liquid::CMaterialProcWater::s_vertexShaders[lightCount], 0xFFFE0300u)) return false;

    if (mode != 1) {
        // hdWater 2: our vertex shader and our copy of the 3.3.5 pixel shader, the client's constants and states
        g_theGxDevicePtr->RsSet(GxRs_VertexShader, s_shaders[0]);
        g_theGxDevicePtr->RsSet(GxRs_PixelShader, s_shaders[2]);
        return true;
    }
    if (!s_passActive) { s_drawsKept++; return false; }
    IDirect3DDevice9* device = Device();
    if (!device) return false;

    bool interior = false;
    int32_t pbr = 0;
    const WaterType* type = TypeFor(settings, &interior, &pbr);

    // c12..c33 (hd_water_ps.hlsl)
    float c[kConstCount * 4];
    memset(c, 0, sizeof(c));
    const C44Matrix& mv = Liquid::s_vsConstants.m_modelView;
    c[0] = mv.a0; c[1] = mv.a1; c[2] = mv.a2;      // c12..c14: model -> view rows (x, y, z axes in view space)
    c[4] = mv.b0; c[5] = mv.b1; c[6] = mv.b2;
    c[8] = mv.c0; c[9] = mv.c1; c[10] = mv.c2;
    // c15: to the sun, view space (the client's c33 is the direction the light travels)
    const C4Vector& sun = Liquid::s_vsConstants.m_sunDir;
    float sl = sqrtf(sun.x * sun.x + sun.y * sun.y + sun.z * sun.z);
    if (sl < 1e-6f) sl = 1.0f;
    c[12] = -sun.x / sl; c[13] = -sun.y / sl; c[14] = -sun.z / sl;
    c[16] = s_invWidth; c[17] = s_invHeight; c[18] = interior ? 1.0f : 0.0f; c[19] = 1.0f;     // c16
    const C4Vector& fog = Liquid::s_vsConstants.m_fog;                                         // c17
    c[20] = fog.x; c[21] = fog.y; c[22] = fog.z;
    c[23] = static_cast<float>(OsGetAsyncTimeMs() % kTimeWrapMs) * 0.001f;
    memcpy(&c[24], type->rows, sizeof(type->rows));                                            // c18..c24
    // c25..c29: sky colours (linear): top, middle, low band, horizon, average (DayNight bands 2, 3, 5, 6)
    const DayNight::CurrentLight& bands = DayNight::g_dnInfo.m_bands;
    LinearColor(bands.m_skyColors[0], &c[52]);
    LinearColor(bands.m_skyColors[1], &c[56]);
    LinearColor(bands.m_skyColors[3], &c[60]);
    LinearColor(bands.m_skyColors[4], &c[64]);
    for (int32_t k = 0; k < 3; k++) c[68 + k] = (c[52 + k] + c[56 + k] * 2.0f + c[60 + k] + c[64 + k]) * 0.2f;
    c[55] = static_cast<float>(s_debug ? s_debug->m_intValue : 0);
    c[59] = s_body ? Clamp(s_body->m_floatValue, 0.0f, 5.0f) : 1.0f;
    c[63] = s_reflect ? Clamp(s_reflect->m_floatValue, 0.0f, 1.0f) : 1.0f;   // c27.w: screen-space reflections
    // c30: what lights interior water's scattering (Forever: 1; here the client's ambient + sun colour, linear)
    const C4Vector& amb = Liquid::s_psProcWaterConstants.m_sunAmbient;
    const C4Vector& dif = Liquid::s_psProcWaterConstants.m_sunDiffuse;
    c[72] = powf(Clamp(amb.x + dif.x, 0.0f, 4.0f), 2.2f);
    c[73] = powf(Clamp(amb.y + dif.y, 0.0f, 4.0f), 2.2f);
    c[74] = powf(Clamp(amb.z + dif.z, 0.0f, 4.0f), 2.2f);
    c[75] = s_color ? Clamp(s_color->m_floatValue, 0.0f, 1.0f) : 1.0f;      // HD: c30.w: the game's water colour (hdWaterColor)
    // c31: view -> screen uv (the projection hdFog uses: ndc = a0 x / z + c0, b1 y / z + c1; uv y points down)
    const C44Matrix& proj = g_theGxDevicePtr->m_projNative;
    c[76] = 0.5f * proj.a0; c[77] = -0.5f * proj.b1; c[78] = 0.5f + 0.5f * proj.c0; c[79] = 0.5f - 0.5f * proj.c1;
    // c32, c33: the client's ambient and sun colours (c7, c8) made linear here instead of in the shader
    for (int32_t k = 0; k < 3; k++) {
        c[80 + k] = powf(Clamp((&amb.x)[k], 0.0f, 4.0f), 2.2f);
        c[84 + k] = powf(Clamp((&dif.x)[k], 0.0f, 4.0f), 2.2f);
    }
    // HD: c34, c35 FFT waves: this water type's cascades stepped to now and uploaded (HdWaterWaves.cpp)
    bool fft = HD::WaterWavesUpdate(device, pbr);
    if (fft) {
        // c16.w (cascades) stays 1: G3 holds the summed slopes of all cascades as one, like the stand-in did
        HD::WaterWavesTiling(&c[88]);
        c[92] = kWhitecapThreshold;
        c[93] = kWhitecapGain;
        HD::WaterRipplesConstants(&c[96]); // HD: c36, c37 ripples (strength 0 when there are none)
    }

    // HD: hdWaterPlanar: this water lies on the plane mirrored this frame: the planar shader (with the SSR when the card
    // takes shaders over 512 slots, else alone); c38..c42
    if (s_longShaders < 0) {
        D3DCAPS9 caps = {};
        s_longShaders = SUCCEEDED(device->GetDeviceCaps(&caps)) && caps.MaxPixelShader30InstructionSlots >= 1024 ? 1 : 0;
    }
    CGxShader* planarShader = s_shaders[(s_longShaders ? 4 : 6) + (fft ? 1 : 0)];
    bool planar = !interior && HD::WaterPlanarForBounds(bounds) && planarShader && planarShader->Valid();
    if (planar) HD::WaterPlanarConstants(&c[104]);
    g_theGxDevicePtr->ShaderConstantsSet(GxSh_Pixel, kFirstConst, c, planar ? kConstCount : 26);
    g_theGxDevicePtr->RsSet(GxRs_VertexShader, s_shaders[0]);
    g_theGxDevicePtr->RsSet(GxRs_PixelShader, planar ? planarShader : s_shaders[fft ? 3 : 1]);
    // the shader mixes the world behind the water itself and writes alpha 1: keep the target's alpha (glow);
    // write the water's depth, so hdFog and what is drawn after see the surface
    g_theGxDevicePtr->RsSet(GxRs_ColorWrite, 7);
    g_theGxDevicePtr->RsSet(GxRs_DepthWrite, 1);
    g_theGxDevicePtr->RsSet(GxRs_Texture6, static_cast<void*>(nullptr));
    g_theGxDevicePtr->RsSet(GxRs_Texture7, static_cast<void*>(nullptr));
    for (int32_t i = 0; i < HD::WaterWaveCascades; i++) {
        g_theGxDevicePtr->RsSet(static_cast<EGxRenderState>(GxRs_Texture8 + i), static_cast<void*>(nullptr)); // HD: s8..s11 FFT
    }
    g_theGxDevicePtr->RsSet(GxRs_Texture12, static_cast<void*>(nullptr)); // HD: s12 ripples
    if (planar) g_theGxDevicePtr->RsSet(GxRs_Texture13, static_cast<void*>(nullptr)); // HD: s13 hdWaterPlanar
    g_theGxDevicePtr->IRsSync(0);
    BindRawTextures(device, fft, planar);
    s_drawsPbr++;
    return true;
}

void HD::WaterAfterDraw() {
    if (!s_rawBound) return;
    s_rawBound = false;
    IDirect3DDevice9* device = Device();
    if (!device) return;
    device->SetTexture(6, nullptr);
    device->SetTexture(7, nullptr);
    for (DWORD i = 8; i < 12; i++) device->SetTexture(i, nullptr); // HD: FFT cascades
    device->SetTexture(12, nullptr); // HD: ripples
    if (s_planarRawBound) device->SetTexture(13, nullptr); // HD: unbind the target before the next reflection pass
    s_planarRawBound = false;
}

bool HD::WaterWantsDepth() {
    RegisterCVars();
    HD::WaterPlanarReset(); // HD: hdWaterPlanar's cvars exist from the first frame
    return Mode() == 1;
}

void HD::WaterReleaseDeviceResources() {
    ReleaseTargets();
    HD::WaterPlanarRelease(); // HD: hdWaterPlanar's targets
    HD::WaterWavesRelease(); // HD: FFT wave textures
    HD::WaterRipplesRelease(); // HD: ripple texture
    if (s_depthShader) { s_depthShader->Release(); s_depthShader = nullptr; }
    for (int32_t i = 0; i < 8; i++) {
        CGxShader* shader = s_shaders[i];
        if (!shader) continue;
        if (shader->m_apiSpecific) static_cast<IUnknown*>(shader->m_apiSpecific)->Release();
        shader->m_apiSpecific = nullptr;
        shader->m_loaded = 0;
        shader->m_valid = 0;
    }
}
