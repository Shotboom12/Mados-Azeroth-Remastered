#include <cmath>
#include <cstddef>
#include <cstdint>
#include <cstdio> // Claude LT2
#include <cstring>
extern void (*g_hdShadowTrace)(const char*,float); // Claude LT2
#include "Engine/Source/ShaderEffect/ShadowCache.h"
#include "Engine/Source/Base/Handle.h"
#include "Engine/Source/Gx/CGxDevice/CGxDevice.h"
#include "Engine/Source/Gx/CGxTexFlags.h"
#include "Engine/Source/Gx/Gx.h"
#include "Engine/Source/Services/Texture.h"
#include "Engine/Source/ShaderEffect/ShaderEffect.h"
#include "Engine/Source/Tempest/CFrustum.h"
#include "Engine/Source/Tempest/CImVector.h"

#ifdef WOWDECOMP_VULKAN
namespace wxlvk::native::impl {
    bool SunShadowLayersSupported(void* device, void* sourceColour, void* sourceDepth,
                                  void* destColour, void* destDepth, uint64_t* sourceIdentity);
    bool CopySunShadowLayers(void* device, void* sourceColour, void* sourceDepth,
                             void* destColour, void* destDepth);
    bool CompareSunShadowTargets(void* device, void* held, void* reference, uint64_t& count,
                                 uint64_t& different, uint64_t& nonFinite, float& maxDelta, uint64_t* detail = nullptr);
    void SetSunShadowCompareDump(const char* prefix); // Claude CACHE1c: next comparison also writes both images
}
#endif

// HD: texture metadata is a sidecar: keep the original x64/x86 CShadowBand layout unchanged.
namespace {
    struct SunBandState {
        C3Vector rendering;
        C3Vector texture[2];
        bool valid[2]{};
        bool building=false;
    };
    SunBandState s_sunBands[3];
    bool s_sunCache=false;
    float s_refreshDegrees=.5f;
    int32_t s_nextSunBand=0;
    bool s_texelSnap=true;
    // Claude 2026-11-04 lot S3 (hdShadowFarEvery): cascaded mode only. The 640 yd cascade (band 2) is gathered, queried and
    // drawn every N frames; between them it keeps its texture, its centre (m_lastPos) and the sun it was drawn with, so
    // the matrices PostUpdate builds still match the texture. 1 = every frame, the original path.
    int32_t s_farEvery=1;uint32_t s_farCounter=0;bool s_farValid=false;C3Vector s_farSun;
#ifdef WOWDECOMP_VULKAN
    // GPT CACHE1: the reference is private to the proof and never published to samplers.
    CTexture* s_farCheckTexture = nullptr;
    CTexture* s_staticCheckColour = nullptr;
    CTexture* s_staticCheckDepth = nullptr;
    CTexture* s_mergedCheckDepth = nullptr;
    int32_t s_farCheckMode = 0;
    uint32_t s_farHeldSamples = 0;
    bool s_drawFarReference = false;
    bool s_splitCheckFrame = false;
    bool s_drawingSplitReference = false;
    int32_t s_shadowLayerPass = 0;
    bool s_hdSunQuery = false;    // Claude voie B
    bool s_hdSunRender = false;   // Claude voie B
    struct StaticShadowLayer {
        CTexture* colour = nullptr;
        CTexture* depth = nullptr;
        C3Vector sun{0.0f, 0.0f, 0.0f};
        C3Vector center;
        C3Vector direction;
        uint64_t key = 0;
        uint64_t images = 0;
        bool valid = false;
        bool hasSun = false;
        int32_t pending = 4; // GPT CACHE1b: why the layer must be rebuilt (1 sun, 4 settings), 0 = nothing special
        C44Matrix view;          // Claude CACHE1c: camera view when the layer was drawn (diagnostic of a failure)
        uint32_t builtFrame = 0; // Claude CACHE1c: s_staticCheckFrame when the layer was drawn
    };
    StaticShadowLayer s_staticLayers[3];
    int32_t s_staticShow = 0;
    bool s_staticKeepOnFailure = false; // hdShadowStaticCheck 2: log failures but keep the cache on (diagnostic)
    int32_t s_lastStaticCause = 0;
    // GPT CACHE1b: running totals for the summary line of the proof (Logs\preuve-soleil.txt).
    struct StaticProof {
        uint64_t bands = 0, texels = 0, different = 0, nonFinite = 0, reused = 0, built[5] = {};
        double maxYards = 0.0;
    } s_staticProof;
    CTexture* s_staticWorkingDepth = nullptr;
    // Claude CACHE1c: the reference of the previous check of each band, to see whether the original pass itself
    // changes when only the camera turns (same centre, sun and key).
    CTexture* s_prevReference[3] = {};
    struct PrevReferenceInfo { bool valid = false; C3Vector center, sun; uint64_t key = 0; C44Matrix view; };
    PrevReferenceInfo s_prevReferenceInfo[3];
    ShadowStaticKeyCallback s_staticKey = nullptr;
    ShadowStaticStatsCallback s_staticStats = nullptr;
    bool s_staticEnabled = false;
    bool s_staticActive = false;
    bool s_collectStatic = false;
    bool s_drawStatic = false;
    bool s_staticCheck = false;
    bool s_staticRejected = false;
    float s_staticDegrees = 0.01f;
    double s_staticChordSquared = 0.0;
    int32_t s_staticMap = 0;
    uint32_t s_staticCheckFrame = 0;

    void InvalidateStaticLayers() {
        for (auto& layer : s_staticLayers) {
            layer.valid = false;
            layer.hasSun = false;
            layer.pending = 4;
        }
    }

    void ReleaseStaticLayers() {
        for (auto& layer : s_staticLayers) {
            if (layer.colour) HandleClose(reinterpret_cast<HOBJECT>(layer.colour));
            if (layer.depth) HandleClose(reinterpret_cast<HOBJECT>(layer.depth));
            layer = StaticShadowLayer{};
        }
        if (s_staticWorkingDepth) HandleClose(reinterpret_cast<HOBJECT>(s_staticWorkingDepth));
        s_staticWorkingDepth = nullptr;
    }

    void UpdateStaticSun(StaticShadowLayer& layer) {
        const C3Vector& sun = CShadowCache::s_sunDir;
        const double dx = double(sun.x) - layer.sun.x;
        const double dy = double(sun.y) - layer.sun.y;
        const double dz = double(sun.z) - layer.sun.z;
        if (!layer.hasSun || s_staticDegrees == 0.0f || dx*dx + dy*dy + dz*dz > s_staticChordSquared) {
            layer.sun = sun;
            layer.hasSun = true;
            layer.valid = false;
            layer.pending = 1;
        }
    }
#endif
    void HdTrace3(const char*x,const char*y,const char*z,const C3Vector&v); // Claude LT2
    // HD: the light-space axes GxuXformCreateLookAtXXX builds for a shadow band (z toward the light's travel,
    // x = cross(up, z), y = cross(z, x)). False when degenerate.
    bool LightAxes(const C3Vector& sun,const C3Vector& up,double* x,double* y){
        double z[3]={sun.x,sun.y,sun.z};double n=std::sqrt(z[0]*z[0]+z[1]*z[1]+z[2]*z[2]);if(!(n>1e-6))return false;
        for(double& c:z)c/=n;
        x[0]=up.y*z[2]-up.z*z[1];x[1]=up.z*z[0]-up.x*z[2];x[2]=up.x*z[1]-up.y*z[0];
        n=std::sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);if(!(n>1e-6))return false;for(int i=0;i<3;++i)x[i]/=n;
        y[0]=z[1]*x[2]-z[2]*x[1];y[1]=z[2]*x[0]-z[0]*x[2];y[2]=z[0]*x[1]-z[1]*x[0];return true;
    }
    double BandTexel(float radius){return CShadowCache::s_shadowSize&&radius>0?2.0*radius/double(CShadowCache::s_shadowSize):0.0;}
    // HD: moving a band centre by a world step that is not a whole number of texels shifts every shadow edge by a
    // fraction of a texel (the shadows swim/jump while walking). Keep the centre on the light-space texel grid.
    C3Vector SnapToTexels(const C3Vector& p,const C3Vector& sun,const C3Vector& up,float radius){
        const double texel=BandTexel(radius);double x[3],y[3];
        if(!s_texelSnap||!(texel>0)||!LightAxes(sun,up,x,y))return p;
        const double u=p.x*x[0]+p.y*x[1]+p.z*x[2],v=p.x*y[0]+p.y*y[1]+p.z*y[2];
        const double du=std::floor(u/texel+.5)*texel-u,dv=std::floor(v/texel+.5)*texel-v;
        return C3Vector(float(p.x+du*x[0]+dv*y[0]),float(p.y+du*x[1]+dv*y[1]),float(p.z+du*x[2]+dv*y[2]));
    }
    void ResetSunBands(){for(auto& b:s_sunBands)b=SunBandState{};s_nextSunBand=0;}
    const C3Vector& ReadSun(int32_t i){
#ifdef WOWDECOMP_VULKAN
        if (s_staticActive && s_staticLayers[i].hasSun) return s_staticLayers[i].sun;
#endif
        if(i==2&&s_farEvery>1&&s_farValid&&CShadowCache::GetShadowMode()>=SHADOW_VERY_HIGH)return s_farSun; // Claude 2026-11-04 lot S3
        auto& b=CShadowCache::s_extShadowBands[i];auto& meta=s_sunBands[i];
        return s_sunCache&&meta.valid[b.m_current]?meta.texture[b.m_current]:CShadowCache::s_sunDir;
    }
    const C3Vector& RenderSun(int32_t i){
#ifdef WOWDECOMP_VULKAN
        if (s_staticActive && s_staticLayers[i].hasSun) return s_staticLayers[i].sun;
#endif
        return s_sunCache&&s_sunBands[i].building?s_sunBands[i].rendering:CShadowCache::s_sunDir;
    }
    bool SunChanged(const C3Vector& a,const C3Vector& b){
        // Directions supplied by PreUpdate are normalized. Chord distance avoids acos precision loss.
        const double x=double(a.x)-b.x,y=double(a.y)-b.y,z=double(a.z)-b.z;
        const double chord=2.0*std::sin(double(s_refreshDegrees)*.008726646259971648);
        return x*x+y*y+z*z>chord*chord;
    }
    int32_t PickSunBand(const C3Vector& pos){
        for(int32_t i=0;i<3;++i)if(s_sunBands[i].building)return i;
        for(int32_t n=0;n<3;++n){const int32_t i=(s_nextSunBand+n)%3;auto& b=CShadowCache::s_extShadowBands[i];auto& meta=s_sunBands[i];
            const float x=b.m_lastPos.x-pos.x,y=b.m_lastPos.y-pos.y,z=b.m_lastPos.z-pos.z;
            if(!meta.valid[b.m_current]||x*x+y*y+z*z>b.m_updateDistance||SunChanged(ReadSun(i),CShadowCache::s_sunDir))return i;
        }
        return -1;
    }
}
void CShadowCache::ConfigureSunCache(bool enabled,float degrees){
    s_refreshDegrees=std::isfinite(degrees)?(degrees<.01f?.01f:(degrees>5?5:degrees)):.5f;
    if(enabled!=s_sunCache){
        ResetSunBands();
        if(enabled)for(auto& b:s_extShadowBands)b.m_updateCount=0; // discard an old mixed-direction partial build
        s_sunCache=enabled;
    }
}
C3Vector CShadowCache::BandSunDirection(int32_t band){return band>=0&&band<3?ReadSun(band):s_sunDir;}
void CShadowCache::ConfigureTexelSnap(bool enabled){s_texelSnap=enabled;}
void CShadowCache::ConfigureFarEvery(int32_t every){every=every<1?1:(every>8?8:every);if(every!=s_farEvery){s_farEvery=every;s_farCounter=0;s_farValid=false;}} // Claude 2026-11-04 lot S3

void CShadowCache::ConfigureFarCheck(int32_t mode) {
#ifdef WOWDECOMP_VULKAN
    if (mode < 0 || mode > 4) mode = 0;
    if (mode == s_farCheckMode) return;

    s_farCheckMode = mode;
    s_farHeldSamples = 0;
    s_drawFarReference = false;
    s_splitCheckFrame = false;
    if (mode != 4) {
        CTexture** const layers[] = { &s_staticCheckColour, &s_staticCheckDepth, &s_mergedCheckDepth };
        for (CTexture** layer : layers) {
            if (*layer) HandleClose(reinterpret_cast<HOBJECT>(*layer));
            *layer = nullptr;
        }
    }
    if (!mode && s_farCheckTexture) {
        HandleClose(reinterpret_cast<HOBJECT>(s_farCheckTexture));
        s_farCheckTexture = nullptr;
    }
#else
    (void)mode;
#endif
}

// Claude voie B (23 nov 2026): see ShadowCache.h.
bool CShadowCache::HdSunQuery() {
#ifdef WOWDECOMP_VULKAN
    return s_hdSunQuery;
#else
    return false;
#endif
}

bool CShadowCache::HdSunRender() {
#ifdef WOWDECOMP_VULKAN
    return s_hdSunRender;
#else
    return false;
#endif
}

bool CShadowCache::IsSplitCheckFrame() {
#ifdef WOWDECOMP_VULKAN
    return s_splitCheckFrame;
#else
    return false;
#endif
}

bool CShadowCache::IsDrawingSplitReference() {
#ifdef WOWDECOMP_VULKAN
    return s_drawingSplitReference;
#else
    return false;
#endif
}

int32_t CShadowCache::ShadowLayerPass() {
#ifdef WOWDECOMP_VULKAN
    return s_shadowLayerPass;
#else
    return 0;
#endif
}

void CShadowCache::ConfigureStaticLayers(bool enabled, float degrees, bool check, int32_t mapId,
    ShadowStaticKeyCallback key, ShadowStaticStatsCallback stats, int32_t show, bool keepOnFailure) {
#ifdef WOWDECOMP_VULKAN
    if (!std::isfinite(degrees)) degrees = 0.01f;
    if (degrees < 0.0f) degrees = 0.0f;
    if (degrees > 1.0f) degrees = 1.0f;
    if (s_staticEnabled && !enabled) ReleaseStaticLayers();
    if (s_staticMap != mapId || s_staticDegrees != degrees || s_staticEnabled != enabled)
        InvalidateStaticLayers();
    if (s_staticDegrees != degrees || s_staticEnabled != enabled) {
        const double chord = 2.0 * std::sin(double(degrees) * 0.008726646259971648);
        s_staticChordSquared = chord * chord;
    }
    if (!enabled) s_staticRejected = false;
    if (check != s_staticCheck) s_staticCheckFrame = 0;
    s_staticEnabled = enabled;
    s_staticDegrees = degrees;
    s_staticCheck = check;
    s_staticMap = mapId;
    s_staticKey = key;
    s_staticStats = stats;
    s_staticShow = show < 0 || show > 2 ? 0 : show;
    s_staticKeepOnFailure = keepOnFailure;
#else
    (void)enabled; (void)degrees; (void)check; (void)mapId; (void)key; (void)stats; (void)show;
#endif
}

bool CShadowCache::IsCollectingStaticLayers() {
#ifdef WOWDECOMP_VULKAN
    return s_collectStatic;
#else
    return false;
#endif
}

bool CShadowCache::IsDrawingStaticLayers() {
#ifdef WOWDECOMP_VULKAN
    return s_drawStatic;
#else
    return false;
#endif
}
void CShadowCache::BandTexelPhase(int32_t band,float* u,float* v){
    *u=*v=-1.0f;if(band<0||band>2)return;auto& b=s_extShadowBands[band];
    const double texel=BandTexel(b.m_radius);double x[3],y[3];if(!(texel>0)||!LightAxes(ReadSun(band),b.m_dir,x,y))return;
    const C3Vector& p=b.m_lastPos;const double pu=(p.x*x[0]+p.y*x[1]+p.z*x[2])/texel,pv=(p.x*y[0]+p.y*y[1]+p.z*y[2])/texel;
    *u=float(pu-std::floor(pu+.5));*v=float(pv-std::floor(pv+.5));
}

// STATIC: 0x00B1D518
float CShadowCache::s_debugAspect = 1.0f;

// STATIC: 0x00B1D51C
int32_t CShadowCache::s_recreateTextures = 1;

// STATIC: 0x00B1D520
const float CShadowCache::s_bandRadius[3] = { 40.0f, 160.0f, 640.0f };

// STATIC: 0x00B1D52C
const float CShadowCache::s_bandUpdateDistance[3] = { 4.0f, 16.0f, 1024.0f };

// STATIC: 0x00B1D538
const char* CShadowCache::s_shadowModeDescs[NUM_SHADOW_MODES + 1] = {
    "[LOWEST]Precomputed terrain and no dynamic shadows.",
    "[LOW]Precomputed terrain and dynamic PC/NPC shadows (low-res).",
    "[MEDIUM]Precomputed terrain and dynamic PC/NPC shadows (high-res).",
    "[MED-HIGH]Full environmental and PC/NPC shadows, low-res, lg-dist.",
    "[HIGH]Full environmental and PC/NPC shadows, hi-res, lg-dist.",
    "[VERY HIGH]Cascaded shadow maps.",
    "[INVALID]Unsupported quality level.",
};

// STATIC: 0x00B1D554
const uint32_t CShadowCache::s_shadowValues[NUM_SHADOW_MODES + 1] = { 0, 1, 1, 2, 2, 3, 3 };

// STATIC: 0x00D43148
CTexture* CShadowCache::s_intDynShadow;

// STATIC: 0x00D4314C
int32_t CShadowCache::s_needsRebuild;

// STATIC: 0x00D43150
uint32_t CShadowCache::s_shadowSize;

// STATIC: 0x00D43154
EShadowMode CShadowCache::s_shadowMode;

// STATIC: 0x00D43158
ShadowMatrixCallback CShadowCache::s_matrixCallback;

// STATIC: 0x00D4315C
ShadowFrustumCallback CShadowCache::s_frustumCallback;

// STATIC: 0x00D43160
ShadowQueryCallback CShadowCache::s_queryCallback;

// STATIC: 0x00D43164
ShadowRenderCallback CShadowCache::s_renderCallback;

// STATIC: 0x00D43168
int32_t CShadowCache::s_debugLevel;

// STATIC: 0x00D4316C
uint8_t CShadowCache::s_frameCounter;

// STATIC: 0x00D43170
float CShadowCache::s_extDynShadowCullRect[4];

// STATIC: 0x00D43180
C3Vector CShadowCache::s_sunDir;

// STATIC: 0x00D4318C
C4Vector CShadowCache::s_sunDirViewSpace;

// STATIC: 0x00D4319C
C4Vector CShadowCache::s_cutoffPlane;

// STATIC: 0x00D431AC
C4Vector CShadowCache::s_cutoffPlaneDefault;

// STATIC: 0x00D431BC
float CShadowCache::s_textureSize[2];

// STATIC: 0x00D431C8
float CShadowCache::s_shadowScale;

// STATIC: 0x00D431D0
C4Vector CShadowCache::s_pcfOffsets[8];

// STATIC: 0x00D43250
CShadowBand CShadowCache::s_extDynShadow;

// STATIC: 0x00D43290
CShadowBand CShadowCache::s_extShadowBands[3];
int32_t CShadowCache::s_failBox[4] = {}; // Claude CACHE1d

// STATIC: 0x00D43348
C4Vector CShadowCache::s_shadowMatrices[12];

static void ShadowCacheTextureCallback(EGxTexCommand command, uint32_t width, uint32_t height, uint32_t depth, uint32_t mipLevel, void* userArg, uint32_t& texelStrideInBytes, const void*& texels) {
}

// VERIFY: 1994effb auto
// OFFSET: 0x00873F50
uint32_t CShadowCache::GetMaxShadowMode() {
    return NUM_SHADOW_MODES - 1;
}

// VERIFY: f7bdb006 auto
// OFFSET: 0x00873F60
const char* CShadowCache::GetShadowModeDesc(uint32_t mode) {
    if (mode >= NUM_SHADOW_MODES + 1) {
        return CShadowCache::s_shadowModeDescs[NUM_SHADOW_MODES];
    }

    return CShadowCache::s_shadowModeDescs[mode];
}

// VERIFY: 2a55048c auto
// OFFSET: 0x00873F80
EShadowMode CShadowCache::GetShadowMode() {
    return CShadowCache::s_recreateTextures == 0 ? CShadowCache::s_shadowMode : SHADOW_LOWEST;
}

// VERIFY: bbdd945f auto
// OFFSET: 0x00873FA0
void CShadowCache::SetMatrixCallback(ShadowMatrixCallback callback) {
    CShadowCache::s_matrixCallback = callback;
}

// VERIFY: 2800d06b auto
// OFFSET: 0x00873FB0
void CShadowCache::SetFrustumCallback(ShadowFrustumCallback callback) {
    CShadowCache::s_frustumCallback = callback;
}

// VERIFY: 583f7889 auto
// OFFSET: 0x00873FC0
void CShadowCache::SetQueryCallback(ShadowQueryCallback callback) {
    CShadowCache::s_queryCallback = callback;
}

// VERIFY: f4783dcb auto
// OFFSET: 0x00873FD0
void CShadowCache::SetRenderCallback(ShadowRenderCallback callback) {
    CShadowCache::s_renderCallback = callback;
}

// VERIFY: 4d6705e3 auto
// OFFSET: 0x00873FE0
void __fastcall CShadowCache::NotifyTexturesRecreate() {
    CShadowCache::s_recreateTextures = 1;
}

// VERIFY: 2be7bf88 auto
// OFFSET: 0x00873FF0
uint32_t CShadowCache::GetShadowValue() {
    return CShadowCache::s_shadowValues[CShadowCache::GetShadowMode()];
}

// VERIFY: 01640fc8 auto
// OFFSET: 0x00874010
void CShadowCache::SetDebugParams(float aspect, int32_t level) {
    CShadowCache::s_debugAspect = aspect;
    CShadowCache::s_debugLevel = level;
}

// VERIFY: 6a7262c7 auto
// OFFSET: 0x00874030
void CShadowCache::SetShadowScale(float scale) {
    CShadowCache::s_shadowScale = scale;
}

// VERIFY: 7406ae09 manual
// OFFSET: 0x00874040
CShadowBand::CShadowBand() {
    this->m_textures[0] = nullptr;
    this->m_textures[1] = nullptr;
    this->m_radius = 0.0f;
    this->m_updateDistance = 0.0f;
    this->m_lastPos = C3Vector(0.0f, 0.0f, 0.0f);
    this->m_pos = C3Vector(0.0f, 0.0f, 0.0f);
    this->m_dir = C3Vector(1.0f, 0.0f, 0.0f);
    this->m_updateCount = 0;
    this->m_current = 0;
}

// VERIFY: e21b5039 auto
// OFFSET: 0x008740D0
int32_t CShadowCache::ValidateShadowMode(EShadowMode mode) {
    int32_t vertexTarget = g_theGxDevicePtr->Caps().m_shaderTargets[GxSh_Vertex];
    int32_t pixelTarget = g_theGxDevicePtr->Caps().m_shaderTargets[GxSh_Pixel];
    int32_t depthFormat = g_theGxDevicePtr->Caps().m_rttFormat[GxTex_D24X8] || g_theGxDevicePtr->Caps().m_rttFormat[GxTex_R32F];

    switch (mode) {
        case SHADOW_LOWEST:
            return 1;

        case SHADOW_LOW:
        case SHADOW_MEDIUM:
            switch (g_theGxDevicePtr->DeviceApi()) {
                case GxApi_D3d9:
                case GxApi_D3d9Ex:
                case GxApi_Vulkan: // HD: the Vulkan device takes D3D9's shader targets and shadow path
                    if (vertexTarget != 1 && vertexTarget != 2 && vertexTarget != 3) {
                        return 0;
                    }

                    if (pixelTarget != 3 && pixelTarget != 4) {
                        return 0;
                    }

                    return depthFormat ? 1 : 0;

                case GxApi_D3d10:
                case GxApi_D3d11:
                    return depthFormat;

                case GxApi_GLL:
                    if ((vertexTarget == 6 || vertexTarget == 10) && (pixelTarget == 12 || pixelTarget == 11)) {
                        return depthFormat;
                    }

                    return 0;

                default:
                    return 0;
            }

        case SHADOW_MEDIUM_HIGH:
        case SHADOW_HIGH:
        case SHADOW_VERY_HIGH:
            switch (g_theGxDevicePtr->DeviceApi()) {
                case GxApi_D3d9:
                case GxApi_D3d9Ex:
                case GxApi_Vulkan: // HD: the Vulkan device takes D3D9's shader targets and shadow path
                    if (vertexTarget != 3 || pixelTarget != 4) {
                        return 0;
                    }

                    return depthFormat ? 1 : 0;

                case GxApi_D3d10:
                case GxApi_D3d11:
                    return depthFormat;

                default:
                    return 0;
            }

        default:
            return 0;
    }
}

// VERIFY: c1d6590c auto
// OFFSET: 0x00874210
int32_t CShadowCache::SetShadowMode(EShadowMode mode) {
    if (!CShadowCache::ValidateShadowMode(mode)) {
        return 0;
    }

    CShadowCache::s_shadowMode = mode;
    CShadowCache::s_recreateTextures = 1;

    return 1;
}

// VERIFY: b392dedb manual
// OFFSET: 0x00874240
void CShadowCache::Destroy() {
#ifdef WOWDECOMP_VULKAN
    ReleaseStaticLayers();
    ConfigureFarCheck(0);
#endif
    if (CShadowCache::s_extDynShadow.m_textures[0]) {
        HandleClose(reinterpret_cast<HOBJECT>(CShadowCache::s_extDynShadow.m_textures[0]));
        CShadowCache::s_extDynShadow.m_textures[0] = nullptr;
    }

    if (CShadowCache::s_extDynShadow.m_textures[1]) {
        HandleClose(reinterpret_cast<HOBJECT>(CShadowCache::s_extDynShadow.m_textures[1]));
        CShadowCache::s_extDynShadow.m_textures[1] = nullptr;
    }

    if (CShadowCache::s_intDynShadow) {
        HandleClose(reinterpret_cast<HOBJECT>(CShadowCache::s_intDynShadow));
        CShadowCache::s_intDynShadow = nullptr;
    }

    for (uint32_t i = 0; i < 3; i++) {
        CShadowBand& band = CShadowCache::s_extShadowBands[i];

        if (band.m_textures[0]) {
            HandleClose(reinterpret_cast<HOBJECT>(band.m_textures[0]));
            band.m_textures[0] = nullptr;
        }

        if (band.m_textures[1]) {
            HandleClose(reinterpret_cast<HOBJECT>(band.m_textures[1]));
            band.m_textures[1] = nullptr;
        }
    }

    g_theGxDevicePtr->RemoveTextureRecreationCallback(CShadowCache::NotifyTexturesRecreate);
}

// VERIFY: ac294af0 manual
// OFFSET: 0x008742E0
void CShadowCache::InitPcfOffsets() {
    float size = CShadowCache::s_shadowSize;
    CShadowCache::s_textureSize[0] = size;
    CShadowCache::s_textureSize[1] = size;

    float texel = 1.0 / size;

    CShadowCache::s_pcfOffsets[0].x = 0.8f * texel;
    CShadowCache::s_pcfOffsets[0].y = -1.0f * texel;
    CShadowCache::s_pcfOffsets[0].z = 0.0f;
    CShadowCache::s_pcfOffsets[0].w = 0.0f;
    CShadowCache::s_pcfOffsets[1].x = texel * -0.2f;
    CShadowCache::s_pcfOffsets[1].y = texel * -0.8f;
    CShadowCache::s_pcfOffsets[1].z = 0.0f;
    CShadowCache::s_pcfOffsets[1].w = 0.0f;
    CShadowCache::s_pcfOffsets[2].x = texel * 0.2f;
    CShadowCache::s_pcfOffsets[2].y = texel * -0.6f;
    CShadowCache::s_pcfOffsets[2].z = 0.0f;
    CShadowCache::s_pcfOffsets[2].w = 0.0f;
    CShadowCache::s_pcfOffsets[3].x = texel;
    CShadowCache::s_pcfOffsets[3].y = -0.4f * texel;
    CShadowCache::s_pcfOffsets[3].z = 0.0f;
    CShadowCache::s_pcfOffsets[3].w = 0.0f;
    CShadowCache::s_pcfOffsets[4].x = texel * -0.6f;
    CShadowCache::s_pcfOffsets[4].y = texel * -0.2f;
    CShadowCache::s_pcfOffsets[4].z = 0.0f;
    CShadowCache::s_pcfOffsets[4].w = 0.0f;
    CShadowCache::s_pcfOffsets[5].x = texel * 0.6f;
    CShadowCache::s_pcfOffsets[5].y = texel * 0.2f;
    CShadowCache::s_pcfOffsets[5].z = 0.0f;
    CShadowCache::s_pcfOffsets[5].w = 0.0f;
    CShadowCache::s_pcfOffsets[6].x = -1.0f * texel;
    CShadowCache::s_pcfOffsets[6].y = -0.4f * texel;
    CShadowCache::s_pcfOffsets[6].z = 0.0f;
    CShadowCache::s_pcfOffsets[6].w = 0.0f;
    CShadowCache::s_pcfOffsets[7].x = -0.4f * texel;
    CShadowCache::s_pcfOffsets[7].y = texel * -0.6f;
    CShadowCache::s_pcfOffsets[7].z = 0.0f;
    CShadowCache::s_pcfOffsets[7].w = 0.0f;
}

// VERIFY: 0ffef1a7 auto
// OFFSET: 0x008744E0
void CShadowCache::SetShadowMapGenericGlobal() {
    if (CShadowCache::s_recreateTextures) {
        return;
    }

    EShadowMode mode = CShadowCache::s_shadowMode;

    if (mode <= SHADOW_LOWEST) {
        return;
    }

    GxShaderConstantsSet(GxSh_Vertex, 224, &CShadowCache::s_shadowMatrices[0].x, 12);
    GxShaderConstantsSet(GxSh_Pixel, 4, &CShadowCache::s_sunDirViewSpace.x, 1);
    GxShaderConstantsSet(GxSh_Pixel, 5, &CShadowCache::s_pcfOffsets[0].x, 8);

    if (mode > SHADOW_MEDIUM) {
        CShadowBand* bands = CShadowCache::s_extShadowBands;
        g_theGxDevicePtr->RsSet(GxRs_Texture5, TextureGetGxTex(bands[0].m_textures[bands[0].m_current], 1, nullptr));
        g_theGxDevicePtr->RsSet(GxRs_Texture6, TextureGetGxTex(bands[1].m_textures[bands[1].m_current], 1, nullptr));
        g_theGxDevicePtr->RsSet(GxRs_Texture7, TextureGetGxTex(bands[2].m_textures[bands[2].m_current], 1, nullptr));
    }
}

// VERIFY: 23abd6bb auto
// OFFSET: 0x008745D0
void CShadowCache::SetShadowMapGenericInterior(int32_t interior) {
    if (CShadowCache::s_recreateTextures) {
        return;
    }

    EShadowMode mode = CShadowCache::s_shadowMode;

    if (mode <= SHADOW_LOWEST) {
        return;
    }

    const C4Vector* cutoffPlane = &CShadowCache::s_cutoffPlane;
    CGxTex* texture = TextureGetGxTex(CShadowCache::s_intDynShadow, 1, nullptr);

    if (!interior) {
        texture = TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[CShaderEffect::s_usePcfFiltering], 1, nullptr);

        if (mode > SHADOW_MEDIUM) {
            cutoffPlane = &CShadowCache::s_cutoffPlaneDefault;
        }
    }

    GxShaderConstantsSet(GxSh_Pixel, 3, &cutoffPlane->x, 1);
    g_theGxDevicePtr->RsSet(GxRs_Texture4, texture);
}

// VERIFY: f70f0371 auto
// OFFSET: 0x00874660
void CShadowCache::SetShadowMapTerrain() {
    if (CShadowCache::s_recreateTextures) {
        return;
    }

    EShadowMode mode = CShadowCache::s_shadowMode;

    if (mode <= SHADOW_LOWEST) {
        return;
    }

    GxShaderConstantsSet(GxSh_Vertex, 37, &CShadowCache::s_shadowMatrices[0].x, 12);
    GxShaderConstantsSet(GxSh_Pixel, 3, &CShadowCache::s_pcfOffsets[0].x, 8);
    g_theGxDevicePtr->RsSet(GxRs_Texture5, TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[CShaderEffect::s_usePcfFiltering], 1, nullptr));

    if (mode > SHADOW_MEDIUM) {
        CShadowBand* bands = CShadowCache::s_extShadowBands;
        g_theGxDevicePtr->RsSet(GxRs_Texture6, TextureGetGxTex(bands[0].m_textures[bands[0].m_current], 1, nullptr));
        g_theGxDevicePtr->RsSet(GxRs_Texture7, TextureGetGxTex(bands[1].m_textures[bands[1].m_current], 1, nullptr));
        g_theGxDevicePtr->RsSet(GxRs_Texture8, TextureGetGxTex(bands[2].m_textures[bands[2].m_current], 1, nullptr));
    }
}

// VERIFY: 0b31ef9c auto
// OFFSET: 0x00874760
void CShadowCache::SetShadowMapDetailDoodad() {
    if (CShadowCache::s_recreateTextures) {
        return;
    }

    EShadowMode mode = CShadowCache::s_shadowMode;

    if (mode <= SHADOW_LOWEST) {
        return;
    }

    GxShaderConstantsSet(GxSh_Vertex, 23, &CShadowCache::s_shadowMatrices[0].x, 12);
    GxShaderConstantsSet(GxSh_Pixel, 3, &CShadowCache::s_cutoffPlaneDefault.x, 1);
    GxShaderConstantsSet(GxSh_Pixel, 4, &CShadowCache::s_sunDirViewSpace.x, 1);
    GxShaderConstantsSet(GxSh_Pixel, 5, &CShadowCache::s_pcfOffsets[0].x, 8);
    g_theGxDevicePtr->RsSet(GxRs_Texture4, TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[CShaderEffect::s_usePcfFiltering], 1, nullptr));

    if (mode > SHADOW_MEDIUM) {
        CShadowBand* bands = CShadowCache::s_extShadowBands;
        g_theGxDevicePtr->RsSet(GxRs_Texture5, TextureGetGxTex(bands[0].m_textures[bands[0].m_current], 1, nullptr));
        g_theGxDevicePtr->RsSet(GxRs_Texture6, TextureGetGxTex(bands[1].m_textures[bands[1].m_current], 1, nullptr));
        g_theGxDevicePtr->RsSet(GxRs_Texture7, TextureGetGxTex(bands[2].m_textures[bands[2].m_current], 1, nullptr));
    }
}

// VERIFY: 2396207d manual
// OFFSET: 0x00874890
void CShadowCache::GatherBands(CShadowCacheQueryData& data, const C3Vector& pos, CFrustum& frustum, int32_t useCullFrustum) {
#ifdef WOWDECOMP_VULKAN
    s_drawFarReference = false;
    s_splitCheckFrame = false;
    const bool staticActive = s_staticEnabled && !s_staticRejected && s_staticKey && s_farEvery == 1 && !s_farCheckMode
        && !CShaderEffect::s_usePcfFiltering && GetShadowMode() == SHADOW_VERY_HIGH;
    if (staticActive != s_staticActive) InvalidateStaticLayers();
    s_staticActive = s_collectStatic = staticActive;
#endif
    uint32_t frame = 0;
    const int32_t sunBand=s_sunCache&&GetShadowMode()<SHADOW_VERY_HIGH?PickSunBand(pos):-1;

    if (CShadowCache::GetShadowMode() < SHADOW_VERY_HIGH) {
        C44Matrix identity;

        for (uint32_t i = 0; i < 3; i++) {
            CShadowBand& band = CShadowCache::s_extShadowBands[i];

            data.m_textureIndex[i] = band.m_current == 0;
            data.m_active[i] = 0;

            // HD: one progressive cached band at a time, including movement-triggered builds.
            if(s_sunCache&&i!=static_cast<uint32_t>(sunBand))continue;
            if(s_sunCache&&!s_sunBands[i].building){s_sunBands[i].rendering=s_sunDir;s_sunBands[i].building=true;band.m_updateCount=0;}

            if (!s_sunCache && !band.m_updateCount) {
                float dx = band.m_lastPos.x - pos.x;
                float dy = band.m_lastPos.y - pos.y;
                float dz = band.m_lastPos.z - pos.z;

                if (dx * dx + dy * dy + dz * dz <= band.m_updateDistance) {
                    continue;
                }
            }

            data.m_radius[i] = band.m_radius;

            if (!band.m_updateCount) {
                band.m_pos = SnapToTexels(pos, RenderSun(i), band.m_dir, band.m_radius); // HD: hdShadowTexelSnap (was: pos)
            }

            data.m_pos[i] = band.m_pos;

            float step;
            uint32_t row;

            if (i >= 2) {
                step = data.m_radius[i] * 0.4f;
                data.m_bounds[i][0] = (band.m_updateCount % 5) * step - data.m_radius[i];
                data.m_bounds[i][1] = data.m_bounds[i][0] + step;
                row = band.m_updateCount / 5;
            } else {
                step = data.m_radius[i] * 0.6666667f;
                data.m_bounds[i][0] = (band.m_updateCount % 3) * step - data.m_radius[i];
                data.m_bounds[i][1] = data.m_bounds[i][0] + step;
                row = band.m_updateCount / 3;
            }

            data.m_bounds[i][2] = row * step - data.m_radius[i];
            data.m_bounds[i][3] = step + data.m_bounds[i][2];

            data.m_bounds[i][1] = data.m_radius[i] * 2.0f * (ceil(CShadowCache::s_shadowSize / (data.m_radius[i] + data.m_radius[i]) * data.m_bounds[i][1]) / CShadowCache::s_shadowSize);
            data.m_bounds[i][3] = ceil(CShadowCache::s_shadowSize / (2.0f * data.m_radius[i]) * data.m_bounds[i][3]) / CShadowCache::s_shadowSize * (data.m_radius[i] + data.m_radius[i]);

            float scale = 0.5f / data.m_radius[i];
            data.m_texBounds[i][0] = data.m_bounds[i][0] * scale + 0.5f;
            data.m_texBounds[i][1] = data.m_bounds[i][1] * scale + 0.5f;
            data.m_texBounds[i][2] = 0.5f - data.m_bounds[i][3] * scale;
            data.m_texBounds[i][3] = 0.5f - scale * data.m_bounds[i][2];

            CShadowCache::s_frustumCallback(data.m_frustums[i], data.m_matrices[i], band.m_dir, data, i, RenderSun(i));
            data.m_frustums[i].Extents(data.m_extents[i]);

            if (i && data.m_active[i - 1]) {
                data.m_cullFrustums[i] = frustum;
                data.m_useCullFrustum[i] = 1;
            } else {
                data.m_useCullFrustum[i] = 0;
            }

            data.m_queryFlags[i] = 8;

            float bounds[4];
            bounds[0] = data.m_bounds[i][0];
            bounds[1] = data.m_bounds[i][1];
            bounds[2] = data.m_bounds[i][2];
            bounds[3] = data.m_bounds[i][3];

            data.m_bounds[i][0] = -data.m_radius[i];
            data.m_bounds[i][1] = data.m_radius[i];
            data.m_bounds[i][2] = -data.m_radius[i];
            data.m_bounds[i][3] = data.m_radius[i];

            CShadowCache::s_frustumCallback(frustum, identity, band.m_dir, data, i, RenderSun(i));
            frustum.InvertPlanes();

            data.m_bounds[i][0] = bounds[0];
            data.m_bounds[i][1] = bounds[1];
            data.m_bounds[i][2] = bounds[2];
            data.m_bounds[i][3] = bounds[3];

            // HD: publish only after the final tile's render callback succeeded (RenderBands).
            if(!s_sunCache){
                band.m_updateCount++;
                if ((i < 2 && band.m_updateCount >= 9) || (i == 2 && band.m_updateCount >= 25)) {
                    band.m_lastPos = band.m_pos;
                    band.m_updateCount = 0;
                    band.m_current = band.m_current == 0;
                }
            }

            data.m_active[i] = 1;
            data.m_lastBand = i;
        }
    } else {
        frame = CShadowCache::s_frameCounter;
        // Claude 2026-11-04 lot S3: on a held frame band 2 is left out (m_lastBand stays 1: not queried, not drawn).
        const bool hdFarHold = s_farEvery > 1 && s_farValid && (++s_farCounter % static_cast<uint32_t>(s_farEvery)) != 0;
        if(g_hdShadowTrace){g_hdShadowTrace("sh.farHold",hdFarHold?1.f:0.f);g_hdShadowTrace("sh.farValid",s_farValid?1.f:0.f);g_hdShadowTrace("sh.farEvery",float(s_farEvery)); // Claude LT2
         HdTrace3("sh.sun.x","sh.sun.y","sh.sun.z",CShadowCache::s_sunDir);HdTrace3("sh.farSun.x","sh.farSun.y","sh.farSun.z",s_farSun);
         for(int b=0;b<3;++b){char k[3][24];for(int c=0;c<3;++c)std::snprintf(k[c],24,"sh.b%d.last.%c",b,'x'+c);HdTrace3(k[0],k[1],k[2],CShadowCache::s_extShadowBands[b].m_lastPos);}}

#ifdef WOWDECOMP_VULKAN
        s_drawFarReference = hdFarHold && (s_farCheckMode == 1 || s_farCheckMode == 2)
            && !CShaderEffect::s_usePcfFiltering
            && (s_farHeldSamples++ % 60 == 0);
        s_splitCheckFrame = s_farEvery == 1 && s_farCheckMode >= 3 && !CShaderEffect::s_usePcfFiltering
            && (s_farHeldSamples++ % 120 == 0);
        const bool skipFarBand = hdFarHold && !s_drawFarReference;
#else
        const bool skipFarBand = hdFarHold;
#endif
        for (uint32_t i = 0; i < 3; i++) {
            if (i == 2 && skipFarBand) break;
            CShadowBand& band = CShadowCache::s_extShadowBands[i];
#ifdef WOWDECOMP_VULKAN
            if (s_staticActive) UpdateStaticSun(s_staticLayers[i]);
#endif
            const C3Vector sun = RenderSun(i);

            data.m_textureIndex[i] = 0;
            data.m_active[i] = 0;
            data.m_radius[i] = band.m_radius;
            band.m_pos = pos;

            float cell;

            if (i == 0) {
                cell = 2.0f;
            } else if (i == 1) {
                cell = 4.0f;
            } else {
                cell = 16.0f;
            }

            float invCell = 1.0f / cell;
            band.m_pos.x = floor(invCell * band.m_pos.x) * cell;
            band.m_pos.y = floor(band.m_pos.y * invCell) * cell;
            band.m_pos.z = floor(band.m_pos.z * invCell) * cell;
            band.m_pos = SnapToTexels(band.m_pos, sun, band.m_dir, band.m_radius); // HD: hdShadowTexelSnap

            C3Vector querySun = sun;
#ifdef WOWDECOMP_VULKAN
            if (i == 2 && s_drawFarReference && s_farCheckMode == 1) {
                band.m_pos = band.m_lastPos;
                querySun = s_farSun;
            }
#endif

            data.m_pos[i] = band.m_pos;

            data.m_bounds[i][0] = -data.m_radius[i];
            data.m_bounds[i][1] = data.m_radius[i];
            data.m_bounds[i][2] = -data.m_radius[i];
            data.m_bounds[i][3] = data.m_radius[i];

            data.m_texBounds[i][0] = 0.0f;
            data.m_texBounds[i][1] = 1.0f;
            data.m_texBounds[i][2] = 0.0f;
            data.m_texBounds[i][3] = 1.0f;

            CShadowCache::s_frustumCallback(data.m_frustums[i], data.m_matrices[i], band.m_dir, data, i, querySun);
            data.m_frustums[i].Extents(data.m_extents[i]);

            data.m_useCullFrustum[i] = useCullFrustum;

            if (useCullFrustum) {
                data.m_cullFrustums[i] = frustum;
            }

            data.m_queryFlags[i] = 13;
            frustum = data.m_frustums[i];
            frustum.InvertPlanes();

#ifdef WOWDECOMP_VULKAN
            if (i != 2 || !s_drawFarReference)
#endif
                band.m_lastPos = band.m_pos;
            data.m_active[i] = 1;
            data.m_lastBand = i;
            useCullFrustum = 1;
        }
    }

#ifdef WOWDECOMP_VULKAN
    s_hdSunQuery = !s_staticActive;   // Claude voie B
#endif
    CShadowCache::s_queryCallback(data, frame);
#ifdef WOWDECOMP_VULKAN
    s_hdSunQuery = false;
#endif
}

// VERIFY: bfe3e321 manual
// OFFSET: 0x00874FB0
#ifdef WOWDECOMP_VULKAN
static CGxTex* ShadowCheckTarget(CTexture*& texture, uint32_t size, EGxTexFormat format) {
    if (!texture) {
        CGxTexFlags flags(GxTex_Nearest, 0, 0, 0, 0, 0, 1, 0, 0, 0);
        flags.m_renderTarget = 1;
        texture = TextureCreate(GxTex_2d, size, size, 0, format, format,
            flags, nullptr, ShadowCacheTextureCallback, "ShadowCheck", 0);
    }
    return texture ? TextureGetGxTex(texture, 1, nullptr) : nullptr;
}

// GPT CACHE1: persistent copies live in each band. The destination depth can be reused
// across bands because draws and copies use the same ordered wxl command stream.
static bool RenderCachedShadowBand(CShadowCacheQueryData& data, int32_t bandIndex, CGxTex* target,
                                  CShadowBand& band, const C3Vector& sun) {
    uint64_t key = 0;
    if (s_staticRejected || !target || !s_staticKey(bandIndex, key)) {
        s_staticLayers[bandIndex].valid = false;
        return false;
    }
    auto* device = g_theGxDevicePtr;
    CGxTex* oldDepth = nullptr;
    device->DeviceGetRenderTarget(GxBuffers_Depth, oldDepth);
    if (oldDepth) return false;

    auto& layer = s_staticLayers[bandIndex];
    const uint32_t size = CShadowCache::s_shadowSize;
    CGxTex* colour = ShadowCheckTarget(layer.colour, size, GxTex_R32F);
    CGxTex* depth = ShadowCheckTarget(layer.depth, size, GxTex_D24X8);
    CGxTex* workingDepth = ShadowCheckTarget(s_staticWorkingDepth, size, GxTex_D24X8);
    uint64_t images = 0;
    if (!wxlvk::native::impl::SunShadowLayersSupported(device, colour, depth, target, workingDepth, &images)) {
        layer.valid = false;
        return false;
    }

    const auto sameVector = [](const C3Vector& a, const C3Vector& b) {
        return a.x == b.x && a.y == b.y && a.z == b.z;
    };
    const bool reused = layer.valid && layer.images == images && layer.key == key && sameVector(layer.center, data.m_pos[bandIndex])
        && sameVector(layer.direction, band.m_dir);
    const auto render = CShadowCache::s_renderCallback;
    s_drawingSplitReference = s_drawStatic = true;
    // GPT CACHE1b: first cause found wins, in the order sun, targets or settings, band centre, content.
    int32_t cause = 0;
    if (!reused) {
        cause = layer.pending ? layer.pending
            : layer.images != images ? 4
            : (!sameVector(layer.center, data.m_pos[bandIndex]) || !sameVector(layer.direction, band.m_dir)) ? 2 : 3;
        layer.valid = false;
        s_shadowLayerPass = 1;
        device->DeviceSetRenderTarget(GxBuffers_Depth, depth, 0);
        if (render(data, bandIndex, colour, nullptr, band.m_dir, sun)) {
            layer.key = key;
            layer.images = images;
            layer.center = data.m_pos[bandIndex];
            layer.direction = band.m_dir;
            layer.valid = true;
            layer.pending = 0;
            {
                CGxMatrixStack& stack = device->m_xforms[GxXform_View];
                layer.view = stack.m_mtx[stack.m_level];
                layer.builtFrame = s_staticCheckFrame;
            }
        }
    }
    bool rendered = false;
    if (layer.valid && wxlvk::native::impl::CopySunShadowLayers(device, colour, depth, target, workingDepth)) {
        if (s_staticShow == 1) {
            rendered = true; // diagnostic: the static layer alone
        } else {
            // Show 2 draws the dynamic casters on a cleared target (pass 3); normally they go over the copy (pass 2).
            s_shadowLayerPass = s_staticShow == 2 ? 3 : 2;
            device->DeviceSetRenderTarget(GxBuffers_Depth, workingDepth, 0);
            rendered = render(data, bandIndex, target, nullptr, band.m_dir, sun) != 0;
        }
    }
    device->DeviceSetRenderTarget(GxBuffers_Depth, oldDepth, 0);
    s_shadowLayerPass = 0;
    s_drawingSplitReference = s_drawStatic = false;
    if (rendered) {
        s_lastStaticCause = cause;
        if (reused) ++s_staticProof.reused; else ++s_staticProof.built[cause];
        if (s_staticStats) s_staticStats(reused ? 0 : cause);
    }
    if (!rendered) layer.valid = false;
    return rendered;
}
#endif

void CShadowCache::RenderBands(CShadowCacheQueryData& data) {
    EShadowMode mode = CShadowCache::GetShadowMode();
#ifdef WOWDECOMP_VULKAN
    s_collectStatic = false;
    const bool checkStatic = s_staticActive && s_staticCheck && (s_staticCheckFrame++ % 120 == 0);
#endif

#ifdef WOWDECOMP_VULKAN
    s_hdSunRender = !s_staticActive;   // Claude voie B
#endif
    for (int32_t i = 0; i <= data.m_lastBand; i++) {
        if (!data.m_active[i]) {
            continue;
        }
        HDShadowDiag::Zone(i);   // Claude GPU0 (mesure)

        CShadowBand& band = CShadowCache::s_extShadowBands[i];
#ifdef WOWDECOMP_VULKAN
        if (i == 2 && s_drawFarReference) {
            const C3Vector referenceSun = s_farCheckMode == 1 ? s_farSun : RenderSun(i);
            CGxTex* reference = ShadowCheckTarget(s_farCheckTexture, s_shadowSize, GxTex_R32F);
            CGxTex* held = TextureGetGxTex(band.m_textures[0], 1, nullptr);
            uint64_t count = 0, different = 0, nonFinite = 0;
            float maxDelta = 0.0f;
            const bool compared = reference && held
                && s_renderCallback(data, i, reference, nullptr, band.m_dir, referenceSun)
                && wxlvk::native::impl::CompareSunShadowTargets(g_theGxDevicePtr, held, reference,
                    count, different, nonFinite, maxDelta);
            if (FILE* log = std::fopen("Logs\\preuve-soleil.txt", "a")) {
                if (compared) {
                    std::fprintf(log,
                        "PREUVE bande soleil (CACHE1) : image gardee %u, mode %d, %llu texels compares, "
                        "%llu differents, %llu non finis, ecart max R32F %.9g\n",
                        static_cast<unsigned>(s_farHeldSamples), s_farCheckMode,
                        static_cast<unsigned long long>(count), static_cast<unsigned long long>(different),
                        static_cast<unsigned long long>(nonFinite), maxDelta);
                    C44Matrix scale, translate;
                    scale.Scale(C3Vector(1.0f, -1.0f, s_shadowScale));
                    const float halfTexel = 0.5f / s_textureSize[0];
                    translate.Translate(C3Vector(halfTexel, halfTexel, 0.0f));
                    auto writeProjection = [&](const char* name, C3Vector center, const C3Vector& sun) {
                        C44Matrix matrix;
                        s_matrixCallback(center, band.m_radius, matrix, band.m_dir, i, sun);
                        matrix = matrix * scale * translate;
                        std::fprintf(log,
                            "  %s centre=(%.9g %.9g %.9g) soleil=(%.9g %.9g %.9g) "
                            "l9=(%.9g %.9g %.9g %.9g) l10=(%.9g %.9g %.9g %.9g) l11=(%.9g %.9g %.9g %.9g)\n",
                            name, center.x, center.y, center.z, sun.x, sun.y, sun.z,
                            matrix.a0, matrix.b0, matrix.c0, matrix.d0,
                            matrix.a1, matrix.b1, matrix.c1, matrix.d1,
                            matrix.a2, matrix.b2, matrix.c2, matrix.d2);
                    };
                    writeProjection("gardee", band.m_lastPos, s_farSun);
                    writeProjection("controle", data.m_pos[i], referenceSun);
                } else {
                    std::fprintf(log, "PREUVE bande soleil (CACHE1) : comparaison indisponible (mode %d)\n",
                        s_farCheckMode);
                }
                std::fclose(log);
            }
            band.m_pos = band.m_lastPos;
            continue;
        }
#endif
        CGxTex* colorTarget = nullptr;
        CGxTex* target;

        if (CShaderEffect::s_usePcfFiltering) {
            if (mode < SHADOW_VERY_HIGH) {
                colorTarget = TextureGetGxTex(band.m_textures[data.m_textureIndex[i]], 1, nullptr);
            } else {
                colorTarget = TextureGetGxTex(band.m_textures[0], 1, nullptr);
            }

            target = TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[0], 1, nullptr);
        } else if (mode >= SHADOW_VERY_HIGH) {
            target = TextureGetGxTex(band.m_textures[0], 1, nullptr);
        } else {
            target = TextureGetGxTex(band.m_textures[data.m_textureIndex[i]], 1, nullptr);
        }

#ifdef WOWDECOMP_VULKAN
        CGxTex* splitReference = s_splitCheckFrame
            ? ShadowCheckTarget(s_farCheckTexture, s_shadowSize, GxTex_R32F) : nullptr;
        bool splitDrawn = false;
        if (target && splitReference && s_farCheckMode == 3) {
            s_drawingSplitReference = true;
            splitDrawn = s_renderCallback(data, i, splitReference, nullptr, band.m_dir, RenderSun(i)) != 0;
            s_drawingSplitReference = false;
        }
        if (target && splitReference && s_farCheckMode == 4) {
            auto* device = g_theGxDevicePtr;
            CGxTex* fixedColour = ShadowCheckTarget(s_staticCheckColour, s_shadowSize, GxTex_R32F);
            CGxTex* fixedDepth = ShadowCheckTarget(s_staticCheckDepth, s_shadowSize, GxTex_D24X8);
            CGxTex* mergedDepth = ShadowCheckTarget(s_mergedCheckDepth, s_shadowSize, GxTex_D24X8);
            CGxTex* oldDepth = nullptr;
            device->DeviceGetRenderTarget(GxBuffers_Depth, oldDepth);
            if (!oldDepth && wxlvk::native::impl::SunShadowLayersSupported(
                    device, fixedColour, fixedDepth, splitReference, mergedDepth, nullptr)) {
                s_drawingSplitReference = true;
                s_shadowLayerPass = 1;
                device->DeviceSetRenderTarget(GxBuffers_Depth, fixedDepth, 0);
                const bool fixedDrawn = s_renderCallback(data, i, fixedColour, nullptr, band.m_dir, RenderSun(i)) != 0;
                if (fixedDrawn && wxlvk::native::impl::CopySunShadowLayers(
                        device, fixedColour, fixedDepth, splitReference, mergedDepth)) {
                    s_shadowLayerPass = 2;
                    device->DeviceSetRenderTarget(GxBuffers_Depth, mergedDepth, 0);
                    splitDrawn = s_renderCallback(data, i, splitReference, nullptr, band.m_dir, RenderSun(i)) != 0;
                }
                device->DeviceSetRenderTarget(GxBuffers_Depth, oldDepth, 0);
                s_shadowLayerPass = 0;
                s_drawingSplitReference = false;
            }
        }
#endif
        const uint64_t hdPerf=HDShadowDiag::PerfBegin(); // Claude 2026-11-04 lot S1
#ifdef WOWDECOMP_VULKAN
        const bool renderedFromLayers = s_staticActive && !colorTarget
            && RenderCachedShadowBand(data, i, target, band, RenderSun(i));
#else
        constexpr bool renderedFromLayers = false;
#endif
        const int32_t rendered = renderedFromLayers ? 1
            : s_renderCallback(data, i, target, colorTarget, band.m_dir, RenderSun(i));
        HDShadowDiag::PerfEnd(2+i,hdPerf);
#ifdef WOWDECOMP_VULKAN
        if (checkStatic && renderedFromLayers) {
            CGxTex* original = ShadowCheckTarget(s_farCheckTexture, s_shadowSize, GxTex_R32F);
            uint64_t count = 0, different = 0, nonFinite = 0, detail[6] = {};
            float maxDelta = 0.0f;
            // Claude CACHE1d: the reference draws everything fresh in one pass, in the order of the composition
            // (buildings, fixed models, then the mobile casters): two casters at the same depth to the 24-bit depth
            // test keep the same winner, so what is compared is the reuse of the layer alone.
            s_drawingSplitReference = true;
            const bool referenceDrawn = original && s_renderCallback(data, i, original, nullptr, band.m_dir, RenderSun(i));
            s_drawingSplitReference = false;
            const bool compared = referenceDrawn
                && wxlvk::native::impl::CompareSunShadowTargets(g_theGxDevicePtr, target, original,
                    count, different, nonFinite, maxDelta, detail);
            // Claude CACHE1c: the original pass against itself two seconds earlier, when the band centre, the sun and
            // the casters (key) are unchanged: different = the original shadow map changes with the camera alone.
            if (compared && original) {
                auto& info = s_prevReferenceInfo[i];
                uint64_t keyNow = 0;
                const bool haveKey = s_staticKey && s_staticKey(i, keyNow);
                CGxMatrixStack& stack = g_theGxDevicePtr->m_xforms[GxXform_View];
                const C44Matrix viewNow = stack.m_mtx[stack.m_level];
                CGxTex* previous = ShadowCheckTarget(s_prevReference[i], s_shadowSize, GxTex_R32F);
                const C3Vector sunNow = RenderSun(i);
                const bool sameKey = haveKey && info.key == keyNow;
                const bool same = info.valid && haveKey
                    && info.center.x == data.m_pos[i].x && info.center.y == data.m_pos[i].y && info.center.z == data.m_pos[i].z
                    && info.sun.x == sunNow.x && info.sun.y == sunNow.y && info.sun.z == sunNow.z;
                if (same && previous) {
                    uint64_t c = 0, d = 0, n = 0;
                    float m = 0.0f;
                    if (wxlvk::native::impl::CompareSunShadowTargets(g_theGxDevicePtr, original, previous, c, d, n, m)) {
                        const float a[9] = { info.view.a0, info.view.a1, info.view.a2, info.view.b0, info.view.b1,
                            info.view.b2, info.view.c0, info.view.c1, info.view.c2 };
                        const float b[9] = { viewNow.a0, viewNow.a1, viewNow.a2, viewNow.b0, viewNow.b1, viewNow.b2,
                            viewNow.c0, viewNow.c1, viewNow.c2 };
                        double turn = 0.0;
                        for (int k = 0; k < 9; ++k) turn = std::max(turn, std::fabs(double(a[k]) - b[k]));
                        if (FILE* log = std::fopen("Logs\\preuve-soleil.txt", "a")) {
                            std::fprintf(log, "REFERENCE bande %d : passe d'origine contre elle-meme 120 images plus tot "
                                "(meme centre et soleil, liste fixe %s) : %llu differents, ecart max %.9g yd, camera tournee de %.6g\n",
                                i, sameKey ? "identique" : "changee", static_cast<unsigned long long>(d), double(m) * 4000.0, turn);
                            std::fclose(log);
                        }
                    }
                }
                if (previous && haveKey) {
                    g_theGxDevicePtr->DeviceCopyTex(original, 0, previous, 0);
                    info.valid = true;
                    info.key = keyNow;
                    info.center = data.m_pos[i];
                    info.sun = sunNow;
                    info.view = viewNow;
                }
            }
            const double deltaYards = double(maxDelta) * 4000.0;
            // GPT CACHE1b: a texel that differs by one float step is the camera rounding the plan accepts (measured:
            // 4 texels in 184 million, 0.00024 yd at most), so only a real error (>= 0.001 yd or non finite) rejects.
            const bool rejected = compared && (nonFinite || deltaYards >= 0.001);
            // Claude CACHE1c: on a failure, draw the static layer again now and compare it with the kept one.
            // Same: the kept layer is still right and the error is in the dynamic pass or the composition.
            // Different: what the layer holds changed without the key seeing it (the camera, or a caster).
            bool freshCompared = false;
            uint64_t freshCount = 0, freshDifferent = 0, freshNonFinite = 0, freshDetail[6] = {};
            float freshDelta = 0.0f;
            bool oldMatrixCompared = false;
            uint64_t oldCount = 0, oldDifferent = 0, oldNonFinite = 0;
            float oldDelta = 0.0f;
            double viewRotation = 0.0, viewTranslation = 0.0;
            uint32_t layerAge = 0;
            if (rejected && s_staticLayers[i].valid) {
                auto* device = g_theGxDevicePtr;
                auto& layer = s_staticLayers[i];
                CGxMatrixStack& stack = device->m_xforms[GxXform_View];
                const C44Matrix& now = stack.m_mtx[stack.m_level];
                const float a[16] = { layer.view.a0, layer.view.a1, layer.view.a2, layer.view.a3, layer.view.b0,
                    layer.view.b1, layer.view.b2, layer.view.b3, layer.view.c0, layer.view.c1, layer.view.c2,
                    layer.view.c3, layer.view.d0, layer.view.d1, layer.view.d2, layer.view.d3 };
                const float b[16] = { now.a0, now.a1, now.a2, now.a3, now.b0, now.b1, now.b2, now.b3,
                    now.c0, now.c1, now.c2, now.c3, now.d0, now.d1, now.d2, now.d3 };
                for (int k = 0; k < 16; ++k) {
                    const double d = std::fabs(double(a[k]) - b[k]);
                    if (k >= 12) { if (d > viewTranslation) viewTranslation = d; }
                    else if (d > viewRotation) viewRotation = d;
                }
                layerAge = s_staticCheckFrame - layer.builtFrame;
                CGxTex* freshColour = ShadowCheckTarget(s_staticCheckColour, s_shadowSize, GxTex_R32F);
                CGxTex* freshDepth = ShadowCheckTarget(s_staticCheckDepth, s_shadowSize, GxTex_D24X8);
                CGxTex* kept = layer.colour ? TextureGetGxTex(layer.colour, 1, nullptr) : nullptr;
                CGxTex* oldDepth = nullptr;
                device->DeviceGetRenderTarget(GxBuffers_Depth, oldDepth);
                if (freshColour && freshDepth && kept && !oldDepth) {
                    // First the layer again with the light matrix (c14..c16) of the kept layer (pass 4 = pass 1 with
                    // that matrix): equal to the kept layer = that matrix is the only thing the turn changed.
                    s_drawingSplitReference = s_drawStatic = true;
                    s_shadowLayerPass = 4;
                    device->DeviceSetRenderTarget(GxBuffers_Depth, freshDepth, 0);
                    const bool drawnOld = s_renderCallback(data, i, freshColour, nullptr, band.m_dir, RenderSun(i)) != 0;
                    device->DeviceSetRenderTarget(GxBuffers_Depth, oldDepth, 0);
                    oldMatrixCompared = drawnOld && wxlvk::native::impl::CompareSunShadowTargets(device, freshColour, kept,
                        oldCount, oldDifferent, oldNonFinite, oldDelta, nullptr);
                    s_shadowLayerPass = 1;
                    device->DeviceSetRenderTarget(GxBuffers_Depth, freshDepth, 0);
                    const bool drawn = s_renderCallback(data, i, freshColour, nullptr, band.m_dir, RenderSun(i)) != 0;
                    device->DeviceSetRenderTarget(GxBuffers_Depth, oldDepth, 0);
                    s_shadowLayerPass = 0;
                    s_drawingSplitReference = s_drawStatic = false;
                    static uint32_t s_dumps = 0;
                    if (s_dumps < 4) {
                        char prefix[64];
                        std::snprintf(prefix, sizeof(prefix), "Logs\\ombre-%u-bande%d", s_dumps++, i);
                        wxlvk::native::impl::SetSunShadowCompareDump(prefix); // a = redrawn now, b = kept layer
                    }
                    freshCompared = drawn && wxlvk::native::impl::CompareSunShadowTargets(device, freshColour, kept,
                        freshCount, freshDifferent, freshNonFinite, freshDelta, freshDetail);
                }
            }
            if (rejected) {
                g_theGxDevicePtr->DeviceCopyTex(original, 0, target, 0);
                if (!s_staticKeepOnFailure) s_staticRejected = true;
                s_staticLayers[i].valid = false; // the layer that gave a wrong band is never reused
                s_staticLayers[i].pending = 3;
            }
            if (FILE* log = std::fopen("Logs\\preuve-soleil.txt", "a")) {
                if (compared) {
                    std::fprintf(log, "PREUVE cache soleil (CACHE1) : bande %d, %llu texels compares, "
                        "%llu differents, %llu non finis, ecart max %.9g yd%s\n", i,
                        static_cast<unsigned long long>(count), static_cast<unsigned long long>(different),
                        static_cast<unsigned long long>(nonFinite), deltaYards,
                        rejected ? (s_staticKeepOnFailure ? " (ECHEC, calque jete, cache garde pour le diagnostic)"
                                                           : " (cache desactive apres comparaison)") : "");
                    if (rejected) {
                        // GPT CACHE1b: what failed, to find the cause: was the layer reused or just rebuilt, which side is
                        // nearer, and where on the map the differing texels are (texel box).
                        std::fprintf(log, "  DIAGNOSTIC bande %d : calque %s (cause %d), carte composee plus proche sur %llu texels, "
                            "reference plus proche sur %llu, boite des texels differents x %llu..%llu y %llu..%llu\n", i,
                            s_lastStaticCause ? "reconstruit" : "reutilise", s_lastStaticCause,
                            static_cast<unsigned long long>(detail[0]), static_cast<unsigned long long>(detail[1]),
                            static_cast<unsigned long long>(detail[2]), static_cast<unsigned long long>(detail[3]),
                            static_cast<unsigned long long>(detail[4]), static_cast<unsigned long long>(detail[5]));
                        if (freshCompared) {
                            std::fprintf(log, "  DIAGNOSTIC bande %d : calque fixe redessine maintenant contre calque garde : "
                                "%llu differents, ecart max %.9g yd, boite x %llu..%llu y %llu..%llu ; "
                                "calque dessine il y a %u images ; camera depuis : rotation %.6g, translation vue %.6g\n", i,
                                static_cast<unsigned long long>(freshDifferent), double(freshDelta) * 4000.0,
                                static_cast<unsigned long long>(freshDetail[2]), static_cast<unsigned long long>(freshDetail[3]),
                                static_cast<unsigned long long>(freshDetail[4]), static_cast<unsigned long long>(freshDetail[5]),
                                layerAge, viewRotation, viewTranslation);
                            if (oldMatrixCompared)
                                std::fprintf(log, "  DIAGNOSTIC bande %d : calque redessine avec la matrice lumiere (c14..c16) du calque garde : "
                                    "%llu differents, ecart max %.9g yd\n", i,
                                    static_cast<unsigned long long>(oldDifferent), double(oldDelta) * 4000.0);
                        } else {
                            std::fprintf(log, "  DIAGNOSTIC bande %d : calque fixe pas redessine (calque deja invalide ou cible absente)\n", i);
                        }
                        std::fflush(log);
                        uint64_t unused = 0;
                        for (int k = 0; k < 4; ++k) CShadowCache::s_failBox[k] = static_cast<int32_t>(detail[2 + k]); // Claude CACHE1d
                        if (s_staticKey) s_staticKey(-1 - i, unused); // the query side adds its own line (lists, groups)
                    }
                    // GPT CACHE1b: running summary in the format asked for by the plan (section 5, P5).
                    ++s_staticProof.bands;
                    s_staticProof.texels += count;
                    s_staticProof.different += different;
                    s_staticProof.nonFinite += nonFinite;
                    if (deltaYards > s_staticProof.maxYards) s_staticProof.maxYards = deltaYards;
                    std::fprintf(log, "PREUVE cache soleil (CACHE1) : %llu bandes, %llu texels compares, "
                        "%llu differents, %llu non finis, ecart max %.9g yd, calques reutilises %llu, "
                        "redessines %llu (causes : soleil %llu, centre %llu, liste %llu, reglages %llu)\n",
                        static_cast<unsigned long long>(s_staticProof.bands),
                        static_cast<unsigned long long>(s_staticProof.texels),
                        static_cast<unsigned long long>(s_staticProof.different),
                        static_cast<unsigned long long>(s_staticProof.nonFinite), s_staticProof.maxYards,
                        static_cast<unsigned long long>(s_staticProof.reused),
                        static_cast<unsigned long long>(s_staticProof.built[1] + s_staticProof.built[2]
                            + s_staticProof.built[3] + s_staticProof.built[4]),
                        static_cast<unsigned long long>(s_staticProof.built[1]),
                        static_cast<unsigned long long>(s_staticProof.built[2]),
                        static_cast<unsigned long long>(s_staticProof.built[3]),
                        static_cast<unsigned long long>(s_staticProof.built[4]));
                } else {
                    std::fprintf(log, "PREUVE cache soleil (CACHE1) : bande %d, comparaison indisponible\n", i);
                }
                std::fclose(log);
            }
        }
        if (s_splitCheckFrame) {
            uint64_t count = 0, different = 0, nonFinite = 0;
            float maxDelta = 0.0f;
            const bool compared = splitDrawn && rendered
                && wxlvk::native::impl::CompareSunShadowTargets(g_theGxDevicePtr, target, splitReference,
                    count, different, nonFinite, maxDelta);
            if (FILE* log = std::fopen("Logs\\preuve-soleil.txt", "a")) {
                if (compared) {
                    std::fprintf(log,
                        "PREUVE composition soleil (CACHE1) : mode %d, bande %d, %llu texels compares, "
                        "%llu differents, %llu non finis, ecart max R32F %.9g\n", s_farCheckMode, i,
                        static_cast<unsigned long long>(count), static_cast<unsigned long long>(different),
                        static_cast<unsigned long long>(nonFinite), maxDelta);
                } else {
                    std::fprintf(log, "PREUVE composition soleil (CACHE1) : mode %d, bande %d, comparaison indisponible\n",
                        s_farCheckMode, i);
                }
                std::fclose(log);
            }
        }
#endif
        if(s_sunCache&&rendered){
            auto& meta=s_sunBands[i];
            if(mode<SHADOW_VERY_HIGH){
                ++band.m_updateCount;
                if(band.m_updateCount>=(i<2?9u:25u)){
                    const uint32_t texture=data.m_textureIndex[i];
                    meta.texture[texture]=meta.rendering;meta.valid[texture]=true;
                    band.m_lastPos=band.m_pos;band.m_current=texture;band.m_updateCount=0;
                    meta.building=false;s_nextSunBand=(i+1)%3;
                }
            }else{meta.texture[0]=s_sunDir;meta.valid[0]=true;}
        }
        if(i==2&&mode>=SHADOW_VERY_HIGH){s_farValid=rendered!=0;s_farSun=RenderSun(2);s_farCounter=0;} // Claude 2026-11-04 lot S3
        if(g_hdShadowTrace){char k[24];std::snprintf(k,sizeof k,"sh.b%d.drawn",i);g_hdShadowTrace(k,rendered?1.f:-1.f);} // Claude LT2
    }
    HDShadowDiag::Zone(-1);   // Claude GPU0 (mesure)
#ifdef WOWDECOMP_VULKAN
    s_hdSunRender = false;   // Claude voie B
    s_splitCheckFrame = false;
#endif
}

// VERIFY: 5c2fb76e manual
// OFFSET: 0x008750B0
void (*g_hdShadowTrace)(const char*,float)=nullptr; // Claude LT2: set by ShadowQuery to HD::LightTrace::Set
namespace{void HdTrace3(const char*x,const char*y,const char*z,const C3Vector&v){if(g_hdShadowTrace){g_hdShadowTrace(x,v.x);g_hdShadowTrace(y,v.y);g_hdShadowTrace(z,v.z);}}}
void CShadowCache::PostUpdate() {
    if (!CShadowCache::s_matrixCallback || !CShadowCache::s_frustumCallback || !CShadowCache::s_queryCallback || !CShadowCache::s_renderCallback) {
        return;
    }

    C44Matrix scale;
    C44Matrix translate;

    scale.Scale(C3Vector(1.0f, -1.0f, CShadowCache::s_shadowScale));

    C3Vector offset;
    offset.x = 0.5f / CShadowCache::s_textureSize[0];
    offset.y = offset.x;
    offset.z = 0.0f;
    translate.Translate(offset);

    C44Matrix matrix;
    CShadowCache::s_matrixCallback(CShadowCache::s_extDynShadow.m_lastPos, CShadowCache::s_extDynShadow.m_radius, matrix, CShadowCache::s_extDynShadow.m_dir, -1, CShadowCache::s_sunDir);
    matrix = matrix * scale * translate;

    CShadowCache::s_shadowMatrices[0].x = matrix.a0;
    CShadowCache::s_shadowMatrices[0].y = matrix.b0;
    CShadowCache::s_shadowMatrices[0].z = matrix.c0;
    CShadowCache::s_shadowMatrices[0].w = matrix.d0;
    CShadowCache::s_shadowMatrices[1].x = matrix.a1;
    CShadowCache::s_shadowMatrices[1].y = matrix.b1;
    CShadowCache::s_shadowMatrices[1].z = matrix.c1;
    CShadowCache::s_shadowMatrices[1].w = matrix.d1;
    CShadowCache::s_shadowMatrices[2].x = matrix.a2;
    CShadowCache::s_shadowMatrices[2].y = matrix.b2;
    CShadowCache::s_shadowMatrices[2].z = matrix.c2;
    CShadowCache::s_shadowMatrices[2].w = matrix.d2;

    for (int32_t i = 0; i < 3; i++) {
        CShadowBand& band = CShadowCache::s_extShadowBands[i];

        CShadowCache::s_matrixCallback(band.m_lastPos, band.m_radius, matrix, band.m_dir, i, ReadSun(i));
        matrix = matrix * scale * translate;

        CShadowCache::s_shadowMatrices[3 + 3 * i].x = matrix.a0;
        CShadowCache::s_shadowMatrices[3 + 3 * i].y = matrix.b0;
        CShadowCache::s_shadowMatrices[3 + 3 * i].z = matrix.c0;
        CShadowCache::s_shadowMatrices[3 + 3 * i].w = matrix.d0;
        CShadowCache::s_shadowMatrices[4 + 3 * i].x = matrix.a1;
        CShadowCache::s_shadowMatrices[4 + 3 * i].y = matrix.b1;
        CShadowCache::s_shadowMatrices[4 + 3 * i].z = matrix.c1;
        CShadowCache::s_shadowMatrices[4 + 3 * i].w = matrix.d1;
        CShadowCache::s_shadowMatrices[5 + 3 * i].x = matrix.a2;
        CShadowCache::s_shadowMatrices[5 + 3 * i].y = matrix.b2;
        CShadowCache::s_shadowMatrices[5 + 3 * i].z = matrix.c2;
        CShadowCache::s_shadowMatrices[5 + 3 * i].w = matrix.d2;
    }
}

// VERIFY: 6227ff43 manual
// OFFSET: 0x008753F0
CShadowCacheQueryData::CShadowCacheQueryData() {
    for (uint32_t i = 0; i < 3; i++) {
        this->m_cullRects[i][0] = 0.0f;
        this->m_cullRects[i][1] = 0.0f;
        this->m_cullRects[i][2] = 0.0f;
        this->m_cullRects[i][3] = 0.0f;
    }

    for (uint32_t i = 0; i < 3; i++) {
        this->m_queryFlags[i] = 0;
        this->m_active[i] = 0;
        this->m_useCullFrustum[i] = 0;
        this->m_textureIndex[i] = 0;
        this->m_radius[i] = 0.0f;
        this->m_bounds[i][0] = 0.0f;
        this->m_bounds[i][1] = 0.0f;
        this->m_bounds[i][2] = 0.0f;
        this->m_bounds[i][3] = 0.0f;
        this->m_texBounds[i][0] = 0.0f;
        this->m_texBounds[i][1] = 0.0f;
        this->m_texBounds[i][2] = 0.0f;
        this->m_texBounds[i][3] = 0.0f;
    }

    this->m_useFrustum = 0;
    this->m_lastBand = -1;
}

// VERIFY: e0449636 manual
// OFFSET: 0x00875760
void CShadowCache::ClearBandTextures() {
#ifdef WOWDECOMP_VULKAN
    InvalidateStaticLayers();
#endif
    ResetSunBands(); // HD: metadata cannot outlive the textures it describes
    s_farValid=false;s_farCounter=0; // Claude 2026-11-04 lot S3: a cleared band 2 is redrawn at once
    if (CShadowCache::s_shadowMode <= SHADOW_MEDIUM) {
        CShadowCache::s_needsRebuild = 0;
        return;
    }

    CGxTex* colorTarget = nullptr;
    CGxTex* depthTarget = nullptr;
    g_theGxDevicePtr->DeviceGetRenderTarget(GxBuffers_Color, colorTarget);

    float minX;
    float maxX;
    float minY;
    float maxY;
    float minZ;
    float maxZ;
    GxXformViewport(minX, maxX, minY, maxY, minZ, maxZ);

    CImVector clearColor;
    clearColor.b = 0xFF;
    clearColor.g = 0xFF;
    clearColor.r = 0xFF;
    clearColor.a = 0xFF;

    if (CShaderEffect::s_usePcfFiltering) {
        GxRsSet(GxRs_ColorWrite, 0);
        g_theGxDevicePtr->DeviceGetRenderTarget(GxBuffers_Depth, depthTarget);
    }

    GxXformSetViewport(0.0f, 1.0f, 0.0f, 1.0f, 0.0f, 1.0f);

    if (CShaderEffect::s_usePcfFiltering) {
        if (CShadowCache::s_extDynShadow.m_textures[0]) {
            GxRenderTargetSet(GxBuffers_Color, TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[0], 1, nullptr), 0);
        }

        if (CShadowCache::s_extDynShadow.m_textures[1]) {
            GxRenderTargetSet(GxBuffers_Depth, TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[1], 1, nullptr), 0);
            GxSceneClear(3, clearColor);
        }

        if (CShadowCache::s_intDynShadow) {
            GxRenderTargetSet(GxBuffers_Depth, TextureGetGxTex(CShadowCache::s_intDynShadow, 1, nullptr), 0);
            GxSceneClear(3, clearColor);
        }
    } else {
        GxRenderTargetSet(GxBuffers_Depth, nullptr, 0);

        if (CShadowCache::s_extDynShadow.m_textures[0]) {
            GxRenderTargetSet(GxBuffers_Color, TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[0], 1, nullptr), 0);
            GxSceneClear(3, clearColor);
        }

        if (CShadowCache::s_intDynShadow) {
            GxRenderTargetSet(GxBuffers_Color, TextureGetGxTex(CShadowCache::s_intDynShadow, 1, nullptr), 0);
            GxSceneClear(3, clearColor);
        }
    }

    EGxBuffer buffer;

    if (CShaderEffect::s_usePcfFiltering) {
        buffer = GxBuffers_Depth;

        if (CShadowCache::s_extDynShadow.m_textures[0]) {
            GxRenderTargetSet(GxBuffers_Color, TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[0], 1, nullptr), 0);
        }
    } else {
        buffer = GxBuffers_Color;
        GxRenderTargetSet(GxBuffers_Depth, nullptr, 0);
    }

    for (uint32_t i = 0; i < 3; i++) {
        CShadowBand& band = CShadowCache::s_extShadowBands[i];

        if (band.m_textures[0]) {
            GxRenderTargetSet(buffer, TextureGetGxTex(band.m_textures[0], 1, nullptr), 0);
            GxSceneClear(3, clearColor);
        }

        if (band.m_textures[1]) {
            GxRenderTargetSet(buffer, TextureGetGxTex(band.m_textures[1], 1, nullptr), 0);
            GxSceneClear(3, clearColor);
        }
    }

    GxXformSetViewport(minX, maxX, minY, maxY, minZ, maxZ);
    GxRenderTargetSet(GxBuffers_Color, colorTarget, 0);

    if (CShaderEffect::s_usePcfFiltering) {
        GxRsSet(GxRs_ColorWrite, 15);
        GxRenderTargetSet(GxBuffers_Depth, depthTarget, 0);
    }

    for (uint32_t i = 0; i < 3; i++) {
        CShadowBand& band = CShadowCache::s_extShadowBands[i];
        band.m_lastPos = C3Vector(0.0f, 0.0f, 0.0f);
        band.m_pos = C3Vector(0.0f, 0.0f, 0.0f);
        band.m_updateCount = 0;
        band.m_current = 0;
    }

    CShadowCache::s_needsRebuild = 0;
}

// VERIFY: 53ac3144 manual
// OFFSET: 0x00875C10
void CShadowCache::PreUpdate(const C3Vector& sunDir) {
    CShadowCache::s_sunDir = sunDir;

    C44Matrix view;
    GxXformView(view);

    C3Vector& dir = CShadowCache::s_sunDir;
    float x = view.c0 * dir.z + view.b0 * dir.y + view.a0 * dir.x;
    float y = view.c1 * dir.z + view.b1 * dir.y + dir.x * view.a1;
    float z = dir.y * view.b2 + dir.z * view.c2 + dir.x * view.a2;
    float scale = 1.0 / sqrt(y * y + z * z + x * x);

    CShadowCache::s_sunDirViewSpace.x = x * scale;
    CShadowCache::s_sunDirViewSpace.y = y * scale;
    CShadowCache::s_sunDirViewSpace.z = scale * z;
    CShadowCache::s_sunDirViewSpace.w = 0.0f;
}

// VERIFY: 98b606e7 manual
// OFFSET: 0x00875D30
void CShadowCache::Init() {
    CShadowCache::s_shadowSize = 1024;

    if (CShadowCache::s_shadowMode >= SHADOW_HIGH || CShadowCache::s_shadowMode == SHADOW_MEDIUM) {
        CShadowCache::s_shadowSize = 2048;
    }

    CShadowCache::InitPcfOffsets();

    CShadowCache::s_extDynShadow.m_textures[0] = nullptr;
    CShadowCache::s_extDynShadow.m_textures[1] = nullptr;
    CShadowCache::s_intDynShadow = nullptr;

    for (uint32_t i = 0; i < 3; i++) {
        CShadowCache::s_extShadowBands[i].m_textures[0] = nullptr;
        CShadowCache::s_extShadowBands[i].m_textures[1] = nullptr;
    }

    CGxTexFlags flags(GxTex_Linear, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    EGxTexFormat format;

    if (CShaderEffect::s_usePcfFiltering) {
        format = GxTex_D24X8;
        flags.m_filter = GxTex_Linear;
    } else {
        format = GxTex_R32F;
        flags.m_filter = GxTex_Nearest;
    }

    flags.m_wrapU = 0;
    flags.m_wrapV = 0;
    flags.m_renderTarget = 1;

    uint32_t size = CShadowCache::s_shadowSize;

    if (CShadowCache::s_shadowMode) {
        if (CShaderEffect::s_usePcfFiltering) {
            CShadowCache::s_extDynShadow.m_textures[0] = TextureCreate(GxTex_2d, size, size, 0, GxTex_Argb8888, GxTex_Argb8888, flags, nullptr, ShadowCacheTextureCallback, "ShadowCache", 0);
            CShadowCache::s_extDynShadow.m_textures[1] = TextureCreate(GxTex_2d, size, size, 0, format, format, flags, nullptr, ShadowCacheTextureCallback, "ShadowCache", 0);
        } else {
            CShadowCache::s_extDynShadow.m_textures[0] = TextureCreate(GxTex_2d, size, size, 0, format, format, flags, nullptr, ShadowCacheTextureCallback, "ShadowCache", 0);
            CShadowCache::s_extDynShadow.m_textures[1] = nullptr;
        }

        CShadowCache::s_intDynShadow = TextureCreate(GxTex_2d, size, size, 0, format, format, flags, nullptr, ShadowCacheTextureCallback, "ShadowCache", 0);
        CShadowCache::s_extDynShadow.m_radius = 20.0f;

        if (CShadowCache::s_shadowMode > SHADOW_MEDIUM) {
            for (uint32_t i = 0; i < 3; i++) {
                CShadowBand& band = CShadowCache::s_extShadowBands[i];
                band.m_textures[0] = TextureCreate(GxTex_2d, size, size, 0, format, format, flags, nullptr, ShadowCacheTextureCallback, "ShadowCache", 0);

                if (CShadowCache::s_shadowMode < SHADOW_VERY_HIGH) {
                    band.m_textures[1] = TextureCreate(GxTex_2d, size, size, 0, format, format, flags, nullptr, ShadowCacheTextureCallback, "ShadowCache", 0);
                }

                band.m_radius = CShadowCache::s_bandRadius[i];
                band.m_updateDistance = CShadowCache::s_bandUpdateDistance[i];
            }
        }
    }

    CShadowCache::ClearBandTextures();
    g_theGxDevicePtr->AddTextureRecreationCallback(CShadowCache::NotifyTexturesRecreate);
    CShadowCache::s_needsRebuild = 0;

    CShadowCache::s_cutoffPlaneDefault.x = 0.0f;
    CShadowCache::s_cutoffPlaneDefault.y = 0.0f;
    CShadowCache::s_cutoffPlaneDefault.z = 0.0f;
    CShadowCache::s_cutoffPlaneDefault.w = 0.0f;
    CShadowCache::s_cutoffPlane.x = 0.0f;
    CShadowCache::s_cutoffPlane.y = 0.0f;
    CShadowCache::s_cutoffPlane.z = 0.0f;
    CShadowCache::s_cutoffPlane.w = 0.0f;
}

// VERIFY: 2346cbd1 auto
// OFFSET: 0x00875F80
int32_t CShadowCache::Update(const C3Vector& pos, int32_t useCullFrustum) {
    int32_t recreate = CShadowCache::s_recreateTextures;
    uint32_t frame = 0;

    if (recreate) {
        CShadowCache::Destroy();
        CShadowCache::Init();
        recreate = 0;
        CShadowCache::s_recreateTextures = 0;
    }

    if (!CShadowCache::s_matrixCallback || !CShadowCache::s_frustumCallback || !CShadowCache::s_queryCallback || !CShadowCache::s_renderCallback) {
        return 0;
    }

    if (recreate) {
        return 1;
    }

    EShadowMode mode = CShadowCache::s_shadowMode;

    if (mode < SHADOW_LOW) {
        return 1;
    }

    CShadowCacheQueryData data;
    CShadowCache::s_frameCounter++;
    uint64_t hdPerfDyn=HDShadowDiag::PerfBegin(); // Claude 2026-11-04 lot S1: the dynamic part, up to the bands

    float radius = CShadowCache::s_extDynShadow.m_radius;
    data.m_radius[0] = radius;

    float size = CShadowCache::s_shadowSize;
    CShadowCache::s_extDynShadow.m_lastPos = pos;
    data.m_pos[0] = pos;

    float texel = 1.0 / size;
    CShadowCache::s_extDynShadow.m_lastPos.x = floor(size * CShadowCache::s_extDynShadow.m_lastPos.x + 0.5) * texel;
    CShadowCache::s_extDynShadow.m_lastPos.y = floor(CShadowCache::s_extDynShadow.m_lastPos.y * size + 0.5) * texel;

    CGxTex* depthTarget = nullptr;

    if (CShaderEffect::s_usePcfFiltering) {
        GxRsSet(GxRs_ColorWrite, 0);
        g_theGxDevicePtr->DeviceGetRenderTarget(GxBuffers_Depth, depthTarget);
    }

    data.m_bounds[0][0] = -radius;
    data.m_bounds[0][2] = -radius;
    data.m_bounds[0][1] = radius;
    data.m_bounds[0][3] = radius;
    data.m_texBounds[0][0] = 0.0f;
    data.m_texBounds[0][1] = 1.0f;
    data.m_texBounds[0][3] = 1.0f;
    data.m_texBounds[0][2] = 0.0f;

    CShadowCache::s_frustumCallback(data.m_frustums[0], data.m_matrices[0], CShadowCache::s_extDynShadow.m_dir, data, 0, CShadowCache::s_sunDir);
    data.m_frustums[0].Extents(data.m_extents[0]);

    CShadowCache::s_extDynShadow.m_dir = C3Vector(1.0f, 0.0f, 0.0f);

    CShadowCache::s_extDynShadowCullRect[0] = data.m_cullRects[0][0];
    CShadowCache::s_extDynShadowCullRect[1] = data.m_cullRects[0][1];
    CShadowCache::s_extDynShadowCullRect[2] = data.m_cullRects[0][2];
    CShadowCache::s_extDynShadowCullRect[3] = data.m_cullRects[0][3];

    data.m_lastBand = 0;

    if (mode >= SHADOW_VERY_HIGH) {
        frame = CShadowCache::s_frameCounter;
    }

    data.m_queryFlags[0] = 3;
    data.m_useFrustum = 0;
    CShadowCache::s_queryCallback(data, frame);

    CGxTex* target = TextureGetGxTex(CShadowCache::s_intDynShadow, 1, nullptr);
    CGxTex* colorTarget = nullptr;

    if (CShaderEffect::s_usePcfFiltering) {
        target = TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[0], 1, nullptr);
        colorTarget = TextureGetGxTex(CShadowCache::s_intDynShadow, 1, nullptr);
    }

    CShadowCache::s_renderCallback(data, 0, target, colorTarget, CShadowCache::s_extDynShadow.m_dir, CShadowCache::s_sunDir);

    if (useCullFrustum) {
        data.m_queryFlags[0] = 1;

        if (mode > SHADOW_HIGH) {
            data.m_queryFlags[0] = 13;
        } else if (mode > SHADOW_MEDIUM) {
            data.m_queryFlags[0] = 5;
        }

        CShadowCache::s_queryCallback(data, frame);

        target = TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[0], 1, nullptr);
        colorTarget = nullptr;

        if (CShaderEffect::s_usePcfFiltering) {
            colorTarget = TextureGetGxTex(CShadowCache::s_extDynShadow.m_textures[1], 1, nullptr);
        }

        CShadowCache::s_renderCallback(data, 0, target, colorTarget, CShadowCache::s_extDynShadow.m_dir, CShadowCache::s_sunDir);
    }

    HDShadowDiag::PerfEnd(0,hdPerfDyn);
    if (mode > SHADOW_MEDIUM) {
        if (CShadowCache::s_needsRebuild) {
            CShadowCache::ClearBandTextures();
        }

        if (useCullFrustum || mode < SHADOW_VERY_HIGH) {
            int32_t useBandCull = 0;
            CFrustum frustum;

            if (mode < SHADOW_VERY_HIGH) {
                data.m_useFrustum = 0;
            } else {
                useBandCull = 1;
                frustum = data.m_frustums[0];
                frustum.InvertPlanes();
                data.m_useFrustum = 1;
            }

            const uint64_t hdPerfGather=HDShadowDiag::PerfBegin(); // Claude 2026-11-04 lot S1
            CShadowCache::GatherBands(data, pos, frustum, useBandCull);
            HDShadowDiag::PerfEnd(1,hdPerfGather);
            CShadowCache::RenderBands(data);
        }
    }

    if (CShaderEffect::s_usePcfFiltering) {
        GxRsSet(GxRs_ColorWrite, 15);
        GxRenderTargetSet(GxBuffers_Depth, depthTarget, 0);
    }

    return 1;
}

// OFFSET: 0x00876360
int32_t CShadowCache::Initialize() {
    CShadowCache::Init();
    return 1;
}
