#include <cstdlib>
#include "LvStages.h"
#include <chrono> // Claude PERF1
// Claude PERF1 (measure only): CPU cost of the cubes per frame, averaged over 64 frames, appended to hdLvLampCubeInfo.
extern double g_wxlViewsWalkMs,g_wxlViewsRecMs;extern unsigned long long g_wxlViewsKept,g_wxlViewsCaptured,g_wxlViewsLive; // Claude PERF2 (Replay.cpp)
extern unsigned long long g_wxlViewsCalls,g_wxlViewsMultiDraws; // Claude CUBES1 (Replay.cpp)
extern unsigned long long g_wxlAsideDraws[2],g_wxlAsideBuilds,g_wxlAsideRingFull,g_wxlAsideCalls,g_wxlAsideEarly; // Claude CPU-A (Replay.cpp)
extern double g_wxlAsideWorkMs,g_wxlAsideWaitMs; // Claude CPU-A (Replay.cpp)
extern unsigned long long g_wxlSkinDraws,g_wxlSkinLite,g_wxlSkinRefused; // Claude ANIM1 (Replay.cpp)
bool g_hdCubeMultiFaces=true; // Claude CUBES1: hdShadowCubeInstancing (LvClient.cpp)
namespace{struct CubeCpu{double staticMs=0,dynMs=0;uint64_t moving=0,fixedDrawn=0,staticDraws=0,dynViews=0,dynDraws=0,dynWalks=0,frames=0;};CubeCpu g_cubeCpu;char g_cubeText[400]="";}
#include <algorithm>
#include <cmath>
#include <cstddef>
#include <cstdio>
#include <cstring>
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdVulkanLocalShadow.h" // Claude LV22: BuildMatrices, the cube faces' convention
#include "Engine/Source/Gx/CGxDeviceVulkan/hd/HdGpuZones.h" // Claude GPU0 (mesure)
namespace HD::Lumen {
bool LampStage::Resize(uint32_t w,uint32_t h,uint32_t scale){if(!gpu_||!w||!h||scale<1||scale>4)return false;Shutdown();width_=w;height_=h;scale_=scale;bool ok=gpu_->Create(table_,Source::kLampSlots,Source::kLampTableRows,VK_FORMAT_R32G32B32A32_SFLOAT)&&gpu_->Create(tiles_,((w+63)/64)*Source::kLampTileBlockWidth,((h+63)/64)*Source::kLampTileBlockHeight*Source::kLampTileLists,VK_FORMAT_R16_UNORM) /* Claude LV41: 16-bit entries, 16x16 blocks */&&gpu_->Create(visibility_[0],Source::kLampSlots,1,VK_FORMAT_R16G16B16A16_SFLOAT)&&gpu_->Create(visibility_[1],Source::kLampSlots,1,VK_FORMAT_R16G16B16A16_SFLOAT)&&gpu_->Create(surfaces_,w,h,VK_FORMAT_R16G16B16A16_SFLOAT)&&gpu_->Create(blur_,w,h,VK_FORMAT_R16G16B16A16_SFLOAT)&&gpu_->Create(halos_,(w+scale-1)/scale,(h+scale-1)/scale,VK_FORMAT_R16G16B16A16_SFLOAT);if(!ok)Shutdown();return ok;}
bool LampStage::Record(const Uniforms&common,const Source::LampTable&table,const Source::LampTiles&tiles,Texture depth,Texture fog,Texture occluder,float blend,const std::array<float,4>&sun,const Source::CarrierBody&body,bool surfaces,bool halos,bool useTiles){if(!gpu_||!table_.handle||!depth.view||table.slots<0||table.slots>Source::kLampSlots||tiles.TextureWidth()!=tiles_.extent.width||tiles.TextureHeight()!=tiles_.extent.height)return false;
 if(!gpu_->Upload(table_,table.texels,sizeof table.texels)||!gpu_->Upload(tiles_,tiles.Texels().data(),tiles.TexelBytes()))return false;
 if(!valid_)for(auto&v:visibility_)if(!gpu_->Clear(v,{1,1,1,1}))return false;
 std::array<Texture,16>t{};t[0]=depth;t[1]=gpu_->Sample(visibility_[ping_]);t[2]=gpu_->Sample(table_);auto u=common;u.r[9]={valid_?blend:1,0,0,0};unsigned next=1-ping_;if(!gpu_->Run(Kernel::LampVisibility,u,t,visibility_[next]))return false;ping_=next;valid_=true;
 if(surfaces){t={};t[0]=depth;t[1]=gpu_->Sample(table_);t[2]=occluder.view?occluder:depth;t[3]=gpu_->Sample(tiles_);u=common;u.r[1][0]=1;u.r[8]={float(width_),float(height_),1.f/width_,1.f/height_};u.r[9]={float(table.surfaceSlots),0,0,0};u.r[10]=sun;u.r[11]={body.base[0],body.base[1],body.base[2],body.radius};u.r[12]={body.up[0],body.up[1],body.up[2],body.height};u.r[13]={1.f/tiles_.extent.width,1.f/tiles_.extent.height,0,useTiles?64.f:0};if(!gpu_->Run(Kernel::LampSurfaces,u,t,surfaces_))return false;}else if(!gpu_->Clear(surfaces_,{0,0,0,0}))return false;
 if(halos){t={};t[0]=depth;t[1]=fog;t[2]=gpu_->Sample(visibility_[ping_]);t[3]=gpu_->Sample(table_);t[4]=gpu_->Sample(tiles_);u=common;u.r[1][0]=float(scale_);u.r[8]={float(halos_.extent.width),float(halos_.extent.height),1.f/halos_.extent.width,1.f/halos_.extent.height};u.r[9][0]=float(table.slots);u.r[10]={1.f/tiles_.extent.width,1.f/tiles_.extent.height,float(tiles.TilesY()*Source::kLampTileBlockHeight),useTiles?64.f:0};if(!gpu_->Run(Kernel::LampHalos,u,t,halos_))return false;}else if(!gpu_->Clear(halos_,{0,0,0,0}))return false;return true;
}

bool LampStage::UploadTable(const Source::LampTable&t,const Source::LampTiles&tiles){if(!gpu_||!table_.handle||tiles.TextureWidth()!=tiles_.extent.width||tiles.TextureHeight()!=tiles_.extent.height||t.slots<0||t.slots>Source::kLampSlots||t.surfaceSlots<0||t.surfaceSlots>Source::kSurfaceSlots)return false;surfaceSlots_=t.surfaceSlots;slots_=t.slots;return gpu_->Upload(table_,t.texels,sizeof t.texels)&&gpu_->Upload(tiles_,tiles.Texels().data(),tiles.TexelBytes());}
void LampStage::PollOptimizationProof(uint64_t completed) {
    if ((!proofOriginal_.serial && !proofOptimized_.serial)
        || proofOriginal_.serial > completed || proofOptimized_.serial > completed
        || (proofHasRepeat_ && proofRepeat_.serial > completed))
        return;
    // Claude GPU-B : A' (le premier noyau relance apres B) doit egaler A, sinon une entree a change entre les executions
    size_t unstable = 0; bool repeatRead = true;
    if (proofHasRepeat_) {
        const auto* a = static_cast<const unsigned char*>(gpu_->Ready(proofOriginal_, completed));
        const auto* again = static_cast<const unsigned char*>(gpu_->Ready(proofRepeat_, completed));
        repeatRead = a && again && proofOriginal_.usedBytes == proofRepeat_.usedBytes;
        if (repeatRead) for (size_t i = 0, n = proofOriginal_.usedBytes / 8; i < n; ++i) unstable += std::memcmp(a + i * 8, again + i * 8, 8) != 0;
        gpu_->Consume(proofRepeat_, completed);
        proofHasRepeat_ = false;
        if (!repeatRead || unstable) {
            if (FILE* log = std::fopen("Logs\\lumen-preuve.txt", "a")) {
                std::fprintf(log, "PREUVE GPU-B type %d : image %llu INSTABLE, A et A' different sur %llu texels (entree changee entre deux executions), paire non comptee\n",
                    proofKind_, static_cast<unsigned long long>(proofOriginal_.serial), static_cast<unsigned long long>(unstable));
                std::fclose(log);
            }
            gpu_->Consume(proofOriginal_, completed);
            gpu_->Consume(proofOptimized_, completed);
            return;
        }
    }
    const auto* original = static_cast<const unsigned char*>(gpu_->Ready(proofOriginal_, completed));
    const auto* optimized = static_cast<const unsigned char*>(gpu_->Ready(proofOptimized_, completed));
    if (FILE* log = std::fopen("Logs\\lumen-preuve.txt", "a")) {
        const char* effect = proofKind_ == 1 ? "LampSurfaces" : proofKind_ == 3 ? "LampSurfaces listes 16x16 GPU-B" : proofKind_ == 4 ? "LampSurfaces TEMOIN GPU-B" : proofKind_ == 5 ? "LampSurfaces controle GPU-B" : "LampBlur";
        if (original && optimized && proofOriginal_.usedBytes == proofOptimized_.usedBytes) {
            const size_t texels = static_cast<size_t>(proofOriginal_.usedBytes / 8);
            size_t different = 0, overOne = 0;
            int maxSteps = 0; float maxValue = 0.f; size_t firstDiff = SIZE_MAX, lastDiff = 0;
            char samples[512] = {}; int sampleCount = 0;
            // Claude GPU-B : ecart en pas de demi-flottant (signe-grandeur) et en valeur, par canal
            auto halfToFloat = [](uint16_t h) { const uint32_t s = (h >> 15) & 1u, e = (h >> 10) & 31u, m = h & 1023u;
                const float mag = e == 0 ? std::ldexp(float(m), -24) : e == 31 ? 65504.f : std::ldexp(float(m | 1024u), int(e) - 25);
                return s ? -mag : mag; };
            auto ordered = [](uint16_t h) { return (h & 0x8000u) ? -int(h & 0x7fffu) : int(h); };
            for (size_t i = 0; i < texels; ++i) {
                if (std::memcmp(original + i * 8, optimized + i * 8, 8) == 0) continue;
                ++different; firstDiff = std::min(firstDiff, i); lastDiff = i;
                int texelSteps = 0;
                for (int c = 0; c < 4; ++c) {
                    uint16_t a, b; std::memcpy(&a, original + i * 8 + c * 2, 2); std::memcpy(&b, optimized + i * 8 + c * 2, 2);
                    texelSteps = std::max(texelSteps, std::abs(ordered(a) - ordered(b)));
                    maxValue = std::max(maxValue, std::fabs(halfToFloat(a) - halfToFloat(b)));
                }
                maxSteps = std::max(maxSteps, texelSteps); overOne += texelSteps > 1;
                if (texelSteps > 1 && sampleCount < 3) { // Claude GPU-B : exemples (A puis B, 4 canaux)
                    char* o = samples + std::strlen(samples);
                    uint16_t a[4], b[4]; std::memcpy(a, original + i * 8, 8); std::memcpy(b, optimized + i * 8, 8);
                    std::snprintf(o, sizeof samples - (o - samples), " [texel %llu A %g %g %g %g B %g %g %g %g]", static_cast<unsigned long long>(i),
                        halfToFloat(a[0]), halfToFloat(a[1]), halfToFloat(a[2]), halfToFloat(a[3]), halfToFloat(b[0]), halfToFloat(b[1]), halfToFloat(b[2]), halfToFloat(b[3]));
                    ++sampleCount;
                }
            }
            const size_t rowTexels = proofOriginal_.usedBytes / 8 / std::max<size_t>(1, height_);
            std::fprintf(log, "PREUVE optimisation %s : image %llu, %llu texels RGBA16F compares, %llu differents | ecart max %d pas, %.6g en valeur, %llu au-dela d'un pas | lignes %llu a %llu%s\n",
                effect, static_cast<unsigned long long>(proofOriginal_.serial),
                static_cast<unsigned long long>(texels), static_cast<unsigned long long>(different), maxSteps, maxValue,
                static_cast<unsigned long long>(overOne),
                static_cast<unsigned long long>(different ? firstDiff / std::max<size_t>(1, rowTexels) : 0),
                static_cast<unsigned long long>(different ? lastDiff / std::max<size_t>(1, rowTexels) : 0), samples);
        } else {
            std::fprintf(log, "PREUVE optimisation %s : relecture incomplete\n", effect);
        }
        std::fclose(log);
    }
    gpu_->Consume(proofOriginal_, completed);
    gpu_->Consume(proofOptimized_, completed);
}

bool LampStage::PrepareOptimizationProof(uint64_t completed) {
    if (proofOriginal_.serial || proofOptimized_.serial || proofRepeat_.serial) return false;
    const VkDeviceSize bytes = VkDeviceSize(width_) * height_ * 8;
    for (Readback* target : {&proofOriginal_, &proofOptimized_, &proofRepeat_}) {
        if (target->buffer && target->bytes >= bytes) continue;
        if (!gpu_->DestroyReadback(*target, completed) || !gpu_->CreateReadback(*target, bytes)) return false;
    }
    return true;
}

bool LampStage::ReleaseOptimizationProof(uint64_t completed) {
    if (!gpu_) return true;
    PollOptimizationProof(completed);
    const bool first = gpu_->DestroyReadback(proofOriginal_, completed);
    const bool second = gpu_->DestroyReadback(proofOptimized_, completed) && gpu_->DestroyReadback(proofRepeat_, completed);
    if (first && second) {
        gpu_->Retire(proofIntermediate_);
        proofNext_ = 0;
    }
    return first && second;
}

void LampStage::RecordOptimizationProof(Target& original, Target& optimized, int kind) {
    proofKind_ = kind;
    proofHasRepeat_ = false;
    gpu_->CopyReadback(original, proofOriginal_);
    gpu_->CopyReadback(optimized, proofOptimized_);
}

bool LampStage::RecordSurfaces(const Uniforms& common, Texture depth, Texture occ,
    const std::array<float,4>& sun, const Source::CarrierBody& body, bool blur, bool tiles,
    Texture material, Texture normals, float normalCheck, float lampView,
    const std::array<float,4>& postUp, Texture cubes, float cubeMode,
    const std::array<float,4>* cubeRows, Texture movers) {
    if (!gpu_ || !surfaces_.handle || !depth.view) return false;
    const auto* ctx = gpu_->Context();
    if (!ctx) return false;
    PollOptimizationProof(ctx->completedSerial);
    if (optimizationCheck == 0 && (proofOriginal_.buffer || proofOptimized_.buffer || proofIntermediate_.handle))
        ReleaseOptimizationProof(ctx->completedSerial);

    const bool surfaceSupported = lampView == 0 && gpu_->Supports(Kernel::LampSurfacesOptimized);
    const bool blurSupported = blur && gpu_->Supports(Kernel::LampBlurOptimized);
    const bool optSurface = surfaceSupported && (optimization & 1);
    // Claude GPU-B : listes de lampes par carre de 16x16 pixels triees avec la profondeur, lues par le noyau optimise LVOPT1 inchange
    const bool cullSupported = surfaceSupported && gpu_->Supports(Kernel::LampGroupLists);
    const bool optCull = cullSupported && optSurface && (optimization & 4);
    if (!optCull && optimizationCheck < 3 && lists_.handle) gpu_->Retire(lists_);
    const bool optBlur = blurSupported && (optimization & 2);
    bool check = false;
    if (ctx->serial >= proofNext_ && ((optimizationCheck == 1 && surfaceSupported)
        || (optimizationCheck == 2 && blurSupported)
        || (optimizationCheck >= 3 && cullSupported))) {
        proofNext_ = ctx->serial + 120;
        check = PrepareOptimizationProof(ctx->completedSerial);
        if (check && optimizationCheck == 2 && !proofIntermediate_.handle)
            check = gpu_->Create(proofIntermediate_, width_, height_, VK_FORMAT_R16G16B16A16_SFLOAT);
        if (!check) {
            if (FILE* log = std::fopen("Logs\\lumen-preuve.txt", "a")) {
                std::fputs("PREUVE optimisation lampes : relecture indisponible\n", log);
                std::fclose(log);
            }
        }
    }

    auto u = common;
    u.r[1][0] = 1;
    u.r[8] = {float(width_), float(height_), 1.f/width_, 1.f/height_};
    u.r[9] = {float(surfaceSlots_), sourceScale, carrierClear, 0};
    u.r[10] = sun;
    u.r[11] = {body.base[0], body.base[1], body.base[2], body.radius};
    u.r[12] = {body.up[0], body.up[1], body.up[2], body.height};
    u.r[13] = {1.f/tiles_.extent.width, 1.f/tiles_.extent.height, 0, tiles ? 64.f : 0.f};
    u.r[14] = {normals.view ? 1.f : 0.f, normalCheck, lampView, cubeRows && cubes.view ? cubeMode : 0.f};
    u.r[15] = postUp;
    if (cubeRows && cubes.view) u.r[32] = cubeRows[0];

    std::array<Texture,16> t{};
    t[0] = depth;
    t[1] = gpu_->Sample(table_);
    t[2] = occ.view ? occ : depth;
    t[3] = gpu_->Sample(tiles_);
    t[4] = material;
    t[5] = normals;
    t[6] = cubes;
    t[11] = movers;
    // Claude GPU-B : les listes 16x16 (meme format que les tuiles de 64 : blocs de 16x16 entrees, 0 = le nombre), puis le MEME noyau
    // des surfaces qui les lit a la place des tuiles (seules ses constantes de tuile et sa texture de liste changent).
    const uint32_t listW = (width_ + 15) / 16 * 16, listH = (height_ + 15) / 16 * 16; // un bloc de 16x16 entrees par carre de 16x16 pixels
    if (lists_.handle && (lists_.extent.width != listW || lists_.extent.height != listH)) gpu_->Retire(lists_);
    auto buildLists = [&](float reachScale, Uniforms& lu, std::array<Texture,16>& lt) {
        if (!lists_.handle && !gpu_->Create(lists_, listW, listH, VK_FORMAT_R32_SFLOAT)) return false;
        auto g = u;
        g.r[16] = {float(width_), float(height_), reachScale, 0};
        if (!gpu_->Run(Kernel::LampGroupLists, g, t, lists_, nullptr, {(width_ + 1) / 2, (height_ + 1) / 2}) /* un fil = 2x2 pixels */) return false;
        lu = u;
        lu.r[13] = {1.f/listW, 1.f/listH, 0, 16.f};
        lt = t;
        lt[3] = gpu_->Sample(lists_);
        return true;
    };
    const Kernel surfaceKernel = optSurface ? Kernel::LampSurfacesOptimized : Kernel::LampSurfaces;
    Uniforms mainU = u;
    std::array<Texture,16> mainT = t;
    if (optCull && !buildLists(0.f, mainU, mainT))
        return false;
    if (!gpu_->Run(surfaceKernel, mainU, mainT, surfaces_))
        return false;
    // Claude GPU-B : 3 = l'autre de la paire (listes 16x16 / tuiles 64) ; 4 = temoin, listes a portee reduite (doit differer) ;
    // 5 = controle, le meme calcul deux fois. A' (le premier calcul relance) doit egaler A, sinon la paire est dite instable.
    if (check && optimizationCheck >= 3 && optSurface) {
        Uniforms otherU = u;
        std::array<Texture,16> otherT = t;
        bool ready = true;
        if (optimizationCheck == 3 && !optCull) ready = buildLists(0.f, otherU, otherT);
        if (optimizationCheck == 4) ready = buildLists(0.8f, otherU, otherT);
        if (optimizationCheck == 5) { otherU = mainU; otherT = mainT; }
        if (ready && gpu_->Run(Kernel::LampSurfacesOptimized, otherU, otherT, blur_)) {
            RecordOptimizationProof(surfaces_, blur_, optimizationCheck);
            // A' : le premier calcul encore une fois (ses listes refaites s'il en a), dans une troisieme cible
            Uniforms againU = u;
            std::array<Texture,16> againT = t;
            bool again = !optCull || buildLists(0.f, againU, againT);
            if (again && (proofIntermediate_.handle || gpu_->Create(proofIntermediate_, width_, height_, VK_FORMAT_R16G16B16A16_SFLOAT))
                && gpu_->Run(surfaceKernel, againU, againT, proofIntermediate_)) {
                gpu_->CopyReadback(proofIntermediate_, proofRepeat_);
                proofHasRepeat_ = true;
            }
        }
    }
    if (check && optimizationCheck == 1) {
        if (gpu_->Run(optSurface ? Kernel::LampSurfaces : Kernel::LampSurfacesOptimized, u, t, blur_))
            RecordOptimizationProof(optSurface ? blur_ : surfaces_, optSurface ? surfaces_ : blur_, 1);
    }
    if (!blur) return true;

    const Kernel blurKernel = optBlur ? Kernel::LampBlurOptimized : Kernel::LampBlur;
    const Kernel otherBlur = optBlur ? Kernel::LampBlur : Kernel::LampBlurOptimized;
    t = {};
    t[0] = depth;
    t[1] = gpu_->Sample(surfaces_);
    u.r[9] = {1, 0, 0, 0};
    if (!gpu_->Run(blurKernel, u, t, blur_)) return false;
    const bool checkBlur = check && optimizationCheck == 2
        && gpu_->Run(otherBlur, u, t, proofIntermediate_);
    t[1] = gpu_->Sample(blur_);
    u.r[9] = {0, 1, 0, 0};
    if (!gpu_->Run(blurKernel, u, t, surfaces_)) return false;
    if (checkBlur) {
        t[1] = gpu_->Sample(proofIntermediate_);
        if (gpu_->Run(otherBlur, u, t, blur_))
            RecordOptimizationProof(optBlur ? blur_ : surfaces_, optBlur ? surfaces_ : blur_, 2);
    }
    return true;
}
bool LampStage::RecordHalos(const Uniforms&common,Texture depth,Texture fog,float blend,bool transmittance,bool tiles,std::array<float,4> fogUV){if(!gpu_||!halos_.handle||!depth.view||!fog.view)return false;if(!valid_)for(auto&v:visibility_)if(!gpu_->Clear(v,{1,1,1,1}))return false;auto u=common;std::array<Texture,16>t{};t[0]=depth;t[1]=gpu_->Sample(visibility_[ping_]);t[2]=gpu_->Sample(table_);u.r[9]={valid_?blend:1,0,0,0};unsigned next=1-ping_;if(!gpu_->Run(Kernel::LampVisibility,u,t,visibility_[next]))return false;ping_=next;valid_=true;u=common;u.r[1][0]=float(scale_);u.r[8]={float(halos_.extent.width),float(halos_.extent.height),1.f/halos_.extent.width,1.f/halos_.extent.height};u.r[9][0]=float(slots_);u.r[10]={1.f/tiles_.extent.width,1.f/tiles_.extent.height,float(((height_+63)/64)*Source::kLampTileBlockHeight),tiles?64.f:0};u.r[11]={transmittance?1.f:0.f,0,0,0};u.r[12]=fogUV;t={};t[0]=depth;t[1]=fog;t[2]=gpu_->Sample(visibility_[ping_]);t[3]=gpu_->Sample(table_);t[4]=gpu_->Sample(tiles_);return gpu_->Run(Kernel::LampHalos,u,t,halos_);}
void LampStage::Shutdown(){if(!gpu_)return;for(auto*t:{&table_,&tiles_,&visibility_[0],&visibility_[1],&surfaces_,&halos_,&blur_,&proofIntermediate_,&lists_})gpu_->Retire(*t);ping_=0;valid_=false;}
bool FogStage::Resize(uint32_t w,uint32_t h,uint32_t scale){if(!gpu_||!w||!h||scale<1||scale>4)return false;Shutdown();w=(w+scale-1)/scale;h=(h+scale-1)/scale;bool ok=gpu_->Create(current_,w,h,VK_FORMAT_R16G16B16A16_SFLOAT)&&gpu_->Create(history_[0],w,h,VK_FORMAT_R16G16B16A16_SFLOAT)&&gpu_->Create(history_[1],w,h,VK_FORMAT_R16G16B16A16_SFLOAT);if(!ok)Shutdown();return ok;}
bool FogStage::Record(const Uniforms&march,const Uniforms&temporal,const std::array<Texture,16>&inputs,unsigned quality,bool memory,bool reset,bool fast){if(!gpu_||!current_.handle||!inputs[0].view||!inputs[1].view||quality<1||quality>3)return false;if(memory&&(!inputs[3].view||!inputs[4].view))return false;if(!valid_||reset)for(auto&t:history_)if(!gpu_->Clear(t,{0,0,0,0}))return false;
 // Claude BRUME1 (hdBrume1): no shafts (c36.z), no image shadows (c10.z), no clouds (c54.w), no ceiling (c66.z), no terrain map (c43.zw)
 // and no floor map (c59.z): the kernel without what is then worth nothing. Same image.
 const auto&m=march.r;const Kernel light=Kernel(unsigned(Kernel::Fog1Fast)+quality-1);
 const bool plain=fast&&!memory&&m[36][2]==0&&!(m[10][2]>0)&&!(m[54][3]>0)&&!(m[66][2]>0)&&m[43][2]==0&&m[43][3]==0&&m[59][2]==0&&gpu_->Supports(light);
 auto kernel=plain?light:Kernel(unsigned(Kernel::Fog1Memory0)+(quality-1)*2+(memory?1:0));if(!gpu_->Run(kernel,march,inputs,current_))return false;auto u=temporal;u.r[13][1]=valid_&&!reset?1.f:0.f;std::array<Texture,16>t{};t[0]=gpu_->Sample(current_);t[1]=gpu_->Sample(history_[ping_]);t[2]=inputs[0];auto next=1-ping_;if(!gpu_->Run(Kernel::FogTemporal,u,t,history_[next]))return false;ping_=next;valid_=true;return true;}
void FogStage::Shutdown(){if(!gpu_)return;for(auto*t:{&current_,&history_[0],&history_[1]})gpu_->Retire(*t);ping_=0;valid_=false;}
bool SpellStage::Resize(uint32_t w,uint32_t h){if(!gpu_||!w||!h)return false;Shutdown();width_=w;height_=h;auto gw=(w+7)/8,gh=(h+7)/8;columns_=(gw+3)/4;rows_=(gh+3)/4;bool ok=gpu_->Create(gatherLight_,gw,gh,VK_FORMAT_R32G32B32A32_SFLOAT)&&gpu_->Create(gatherPlace_,gw,gh,VK_FORMAT_R32G32B32A32_SFLOAT)&&gpu_->Create(reduced_,2*columns_,rows_,VK_FORMAT_R32G32B32A32_SFLOAT);if(!ok)Shutdown();return ok;}
bool SpellStage::Record(const Uniforms&common,Texture before,Texture now,Texture beforeDepth,Texture nowDepth,bool swapRB){if(!gpu_||!reduced_.handle||!before.view||!now.view||!beforeDepth.view||!nowDepth.view)return false;std::array<Texture,16>t{};t[0]=now;t[1]=before;t[2]=beforeDepth;t[3]=nowDepth;auto u=common;u.r[9]={Source::kEffectThreshold,Source::kEffectNearestYards,Source::kEffectFarthestYards,Source::kEffectDepthChange};u.r[10]={1.f/width_,1.f/height_,1.f/64,0};u.r[11]={swapRB?1.f:0.f,0,0,0};if(!Gather(u,t))return false;t={};t[0]=gpu_->Sample(gatherLight_);t[1]=gpu_->Sample(gatherPlace_);u.r[9]={float(columns_),1.f/16,0,0};u.r[10]={float(gatherLight_.extent.width),float(gatherLight_.extent.height),1.f/gatherLight_.extent.width,1.f/gatherLight_.extent.height};return gpu_->Run(Kernel::EffectReduce,u,t,reduced_);}
// Claude GATHER1 : un groupe par case (dispatch = cases x 8 pixels), un fil par pixel ; en preuve, les deux noyaux (l'original sert l'image).
bool SpellStage::Gather(const Uniforms&u,const std::array<Texture,16>&t){
 const bool fast=opt!=0&&gpu_->Supports(Kernel::EffectGatherOptimized);const VkExtent2D cells{gatherLight_.extent.width*8,gatherLight_.extent.height*8};
 if(!fast)return gpu_->Run(Kernel::EffectGather,u,t,gatherLight_,&gatherPlace_);
 if(opt<2)return gpu_->Run(Kernel::EffectGatherOptimized,u,t,gatherLight_,&gatherPlace_,cells);
 const WXL_VkStageContext*c=gpu_->Context();const uint64_t serial=c?c->serial:0,done=c?c->completedSerial:0;PollProof(done);
 // 4 = preuve sous charge : les deux noyaux sans seuil ni limite de profondeur (chaque pixel qui s'eclaircit compte), l'image de ce mode aussi ;
 // 3 = temoin : l'original normal, l'optimise sous charge (doit differer).
 // sous charge : l'image d'avant les sorts remplacee par du noir (chaque pixel visible s'eclaircit et passe par tout le calcul, profondeurs comprises).
 auto us=u;us.r[9][0]=0.f;us.r[9][2]=1e9f;us.r[9][3]=1e9f;auto ts=t;ts[1]=Texture{};
 if(!gpu_->Run(Kernel::EffectGather,opt==4?us:u,opt==4?ts:t,gatherLight_,&gatherPlace_))return false;
 if(serial<proofNext_||proofRead_[0].serial)return true;
 const uint32_t w=gatherLight_.extent.width,h=gatherLight_.extent.height;const VkDeviceSize bytes=VkDeviceSize(w)*h*16;bool ok=true;
 if(proofLight_.handle&&(proofLight_.extent.width!=w||proofLight_.extent.height!=h)){gpu_->Retire(proofLight_);gpu_->Retire(proofPlace_);}
 if(!proofLight_.handle)ok=gpu_->Create(proofLight_,w,h,VK_FORMAT_R32G32B32A32_SFLOAT)&&gpu_->Create(proofPlace_,w,h,VK_FORMAT_R32G32B32A32_SFLOAT);
 for(auto&r:proofRead_)if(ok&&(!r.buffer||r.bytes<bytes))ok=gpu_->DestroyReadback(r,done)&&gpu_->CreateReadback(r,bytes);
 const Uniforms&ub=opt>=3?us:u;
 ok=ok&&gpu_->Run(Kernel::EffectGatherOptimized,ub,opt>=3?ts:t,proofLight_,&proofPlace_,cells)&&gpu_->CopyReadback(gatherLight_,proofRead_[0])&&gpu_->CopyReadback(gatherPlace_,proofRead_[1])
  &&gpu_->CopyReadback(proofLight_,proofRead_[2])&&gpu_->CopyReadback(proofPlace_,proofRead_[3]);
 if(ok){proofNext_=serial+120;proofMode_=opt;}
 return true;
}
// Claude GATHER1 : la preuve relue une fois le GPU passe (A = l'original, B = l'optimise ; lumiere et place, octet par octet).
void SpellStage::PollProof(uint64_t done){
 for(auto&r:proofRead_)if(!r.serial||r.serial>done)return;
 const unsigned char*p[4];for(int i=0;i<4;++i)p[i]=static_cast<const unsigned char*>(gpu_->Ready(proofRead_[i],done));
 if(p[0]&&p[1]&&p[2]&&p[3]&&proofRead_[0].usedBytes==proofRead_[2].usedBytes&&proofRead_[1].usedBytes==proofRead_[3].usedBytes){
  const size_t n=size_t(proofRead_[0].usedBytes/16);size_t diff=0,lit=0;double worst=0;
  for(size_t i=0;i<n*4;++i)for(int k=0;k<2;++k){float a,b;std::memcpy(&a,p[k]+i*4,4);std::memcpy(&b,p[k+2]+i*4,4);if(a!=b)worst=std::max(worst,std::fabs(double(a)-double(b))/std::max(std::fabs(double(a)),1e-30));}
  for(size_t i=0;i<n;++i){diff+=std::memcmp(p[0]+i*16,p[2]+i*16,16)!=0||std::memcmp(p[1]+i*16,p[3]+i*16,16)!=0;float wsum;std::memcpy(&wsum,p[1]+i*16+8,4);lit+=wsum>0;}
  if(FILE*log=std::fopen("Logs\\lumen-preuve.txt","a")){std::fprintf(log,"PREUVE %s effets : image %llu, %llu cases comparees (%llu avec de la lumiere), %llu differentes, ecart relatif max %.3g\n",proofMode_==3?"TEMOIN GATHER1":proofMode_==4?"GATHER1 sous charge":"GATHER1",static_cast<unsigned long long>(proofRead_[0].serial),static_cast<unsigned long long>(n),static_cast<unsigned long long>(lit),static_cast<unsigned long long>(diff),worst);std::fclose(log);}}
 for(auto&r:proofRead_)gpu_->Consume(r,done);
}
void SpellStage::Shutdown(){if(!gpu_)return;for(auto*t:{&gatherLight_,&gatherPlace_,&reduced_,&proofLight_,&proofPlace_})gpu_->Retire(*t);const WXL_VkStageContext*c=gpu_->Context();for(auto&r:proofRead_)gpu_->DestroyReadback(r,c?c->completedSerial:0);}
// ---- Claude 2026-11-15 lot LV22 (hdLvLampCubes): the lamps' shadow cubes (see LvStages.h).
bool LampCubes::Init(const WXL_VkRenderApi*a){
 if(api_)return api_==a;
 if(!a||a->structSize<offsetof(WXL_VkRenderApi,ReplayWorldViews)+sizeof(a->ReplayWorldViews)||!a->ReplayWorldViews||!a->GetShadowPass||!a->GetDeviceInfo||!a->CreateImage||!a->RetireImage||!a->RegisterPass||!a->UnregisterPass||!a->RequestDrawCapture){std::snprintf(info_,sizeof info_,"cubes: the device offers no world replay");return false;}
 WXL_VkDeviceInfo d{};d.structSize=sizeof d;pass_={};pass_.structSize=sizeof pass_;
 if(!a->GetDeviceInfo(&d)||!d.device||!d.getDeviceProcAddr||!a->GetShadowPass(&pass_)||!pass_.renderPass||!pass_.loadPass||(pass_.depthFormat!=VK_FORMAT_D32_SFLOAT&&pass_.depthFormat!=VK_FORMAT_D16_UNORM)){std::snprintf(info_,sizeof info_,"cubes: no shadow pass");return false;}
 createFramebuffer_=reinterpret_cast<PFN_vkCreateFramebuffer>(d.getDeviceProcAddr(d.device,"vkCreateFramebuffer"));destroyFramebuffer_=reinterpret_cast<PFN_vkDestroyFramebuffer>(d.getDeviceProcAddr(d.device,"vkDestroyFramebuffer"));
 barrier_=reinterpret_cast<PFN_vkCmdPipelineBarrier>(d.getDeviceProcAddr(d.device,"vkCmdPipelineBarrier"));clearDepth_=reinterpret_cast<PFN_vkCmdClearDepthStencilImage>(d.getDeviceProcAddr(d.device,"vkCmdClearDepthStencilImage"));
 if(!createFramebuffer_||!destroyFramebuffer_||!barrier_||!clearDepth_){std::snprintf(info_,sizeof info_,"cubes: Vulkan entry points missing");return false;}
 copy_=reinterpret_cast<PFN_vkCmdCopyImageToBuffer>(d.getDeviceProcAddr(d.device,"vkCmdCopyImageToBuffer")); // Claude LV24: the probe alone needs it
 copyImage_=reinterpret_cast<PFN_vkCmdCopyImage>(d.getDeviceProcAddr(d.device,"vkCmdCopyImage")); // Claude PREUVE1: the check's first copy
 device_=d.device;api_=a;std::snprintf(info_,sizeof info_,"off");return true;
}
void LampCubes::Off(){if(!api_)return;if(handle_){api_->UnregisterPass(handle_);handle_=nullptr;}if(capture_){api_->RequestDrawCapture(0);capture_=false;}on_=false;}
void LampCubes::Release(){CheckRelease(); /* Claude PREUVE1 */if(framebuffer_){destroyFramebuffer_(device_,framebuffer_,nullptr);framebuffer_={};}if(image_){api_->RetireImage(image_,last_);image_=nullptr;}imageInfo_={};size_=0;initialized_=false;
 if(dynFramebuffer_){destroyFramebuffer_(device_,dynFramebuffer_,nullptr);dynFramebuffer_={};}if(dynImage_){api_->RetireImage(dynImage_,last_);dynImage_=nullptr;}dynInfo_={};dynInitialized_=false;} // Claude LV36
bool LampCubes::Allocate(uint32_t size,uint32_t capacity){
 Release();for(auto&s:slots_)s=Slot{};
 // Claude LV34: as many cubes as asked, in a nearly square atlas (a cube is 3 x 2 faces): columns ~ sqrt(2/3 capacity).
 const uint32_t columns=std::min(std::max(1u,kAtlasMaxSide/(3*size)),std::max(1u,uint32_t(std::ceil(std::sqrt(double(capacity)*2.0/3.0))))),rows=(capacity+columns-1)/columns; // Claude LV41: never wider than kAtlasMaxSide
 WXL_VkImageDesc desc{pass_.depthFormat,columns*3*size,rows*2*size,1,VK_IMAGE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT|VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_TRANSFER_DST_BIT|VK_IMAGE_USAGE_TRANSFER_SRC_BIT /* Claude LV24: the probe */,VK_IMAGE_ASPECT_DEPTH_BIT};
 image_=api_->CreateImage(&desc,&imageInfo_);if(!image_){std::snprintf(info_,sizeof info_,"cubes: atlas %ux%u not allocated",desc.width,desc.height);return false;}
 VkFramebufferCreateInfo fi{VK_STRUCTURE_TYPE_FRAMEBUFFER_CREATE_INFO};fi.renderPass=pass_.renderPass;fi.attachmentCount=1;fi.pAttachments=&imageInfo_.view;fi.width=desc.width;fi.height=desc.height;fi.layers=1;
 if(createFramebuffer_(device_,&fi,nullptr,&framebuffer_)!=VK_SUCCESS){framebuffer_={};Release();std::snprintf(info_,sizeof info_,"cubes: framebuffer refused");return false;}
 // Claude LV36: the movers' atlas, the same layout (a cube's cell is the same in both).
 dynImage_=api_->CreateImage(&desc,&dynInfo_);if(!dynImage_){Release();std::snprintf(info_,sizeof info_,"cubes: movers' atlas %ux%u not allocated",desc.width,desc.height);return false;}
 fi.pAttachments=&dynInfo_.view;if(createFramebuffer_(device_,&fi,nullptr,&dynFramebuffer_)!=VK_SUCCESS){dynFramebuffer_={};Release();std::snprintf(info_,sizeof info_,"cubes: movers' framebuffer refused");return false;}
 size_=size;capacity_=capacity;columns_=columns;rows_=rows;return true;
}
bool LampCubes::Configure(bool on,uint32_t size,float nearYards,float nearZ,uint32_t perFrame,uint64_t completed,int probe,int cull,int check,uint32_t capacity){
 capacity=std::clamp(capacity,1u,std::min(MaxCapacity,CubeBudget)); // Claude LV34; LV41: at most CubeBudget cubes (the nearest lights get them)
 {const uint32_t s=std::max(size,1u),maxColumns=std::max(1u,kAtlasMaxSide/(3*s)),maxRows=std::max(1u,kAtlasMaxSide/(2*s));capacity=std::min(capacity,maxColumns*maxRows);} // Claude LV41: the atlas fits the largest image (at 512 px, 237 cubes did not: no cube at all)
 if(!api_)return false;
 perFrame_=std::clamp(perFrame,1u,5u);
 if(probeBuffer_&&probeSerial_&&completed>=probeSerial_)WriteProbe(); // Claude LV24: the copy is done, written to Logs
 if(chkBuffer_&&chkSerial_&&completed>=chkSerial_)CheckRead(); // Claude PREUVE1: the copy is done, compared
 if(check!=check_){if(check_&&!check)CheckRelease();if(!check_&&check){chkFrames_=chkFaceCount_=chkTexels_=chkDiffTexels_=chkDiffFaces_=chkStatTotal_=chkNearTexels_=0;chkText_[0]=0;}check_=check;} // Claude PREUVE1
 if(probe!=probeAsked_){probeAsked_=probe;probeWanted_=probe!=0;sweepLeft_=probe<0?std::min<uint32_t>(uint32_t(-probe),kSweepMax):0;sweepIdx_=0;} // Claude LV39: -K = the K nearest lamps
 if(!on){Off();std::snprintf(info_,sizeof info_,"off");return true;}
 if(std::isfinite(nearYards)&&nearYards!=near_){near_=nearYards;for(auto&s:slots_)s.builds=0,s.clear=true,s.since=-1;}
 if(std::isfinite(nearZ)&&nearZ!=nearZ_){nearZ_=nearZ;for(auto&s:slots_)s.builds=0,s.clear=true,s.since=-1;} // Claude LV24
 cull=std::clamp(cull,0,2);if(cull!=cull_){cull_=cull;for(auto&s:slots_)s.builds=0,s.clear=true,s.since=-1;} // Claude LV25: a new culling, every cube drawn again
 // A new face size: the old atlas only once the GPU is done with it (until then the old size keeps working).
 if((size!=size_||capacity!=capacity_)&&(!image_||completed>=last_)&&!Allocate(size,capacity)){Off();return false;} // Claude LV34: or a new count
 // Claude LV35: while the GPU still uses the old atlas, MidPass draws nothing (last_ then stops moving), so the new one comes as soon
 // as the frames in flight are done; the old cubes are read until then. Before, a new count waited for a frame without cubes.
 pending_=size!=size_||capacity!=capacity_;
 if(!handle_){WXL_VkRenderPassDesc p{};p.structSize=sizeof p;p.user=this;p.MidPass=MidPassThunk;handle_=api_->RegisterPass(WXL_VK_POINT_AFTER_OPAQUE_WORLD,&p,"HD.Lumen.LampCubes");if(!handle_){Off();std::snprintf(info_,sizeof info_,"cubes: pass not registered");return false;}}
 if(!capture_){api_->RequestDrawCapture(1);capture_=true;}
 on_=true;return true;
}
void LampCubes::Wish(int map,const CubeWish*w,uint32_t n){
 ++wishes_;if(map!=map_){map_=map;for(auto&s:slots_)s=Slot{};}
 nearest_=n?w[0].id+1:0; // Claude LV24: the probe's lamp (the wishes come nearest first)
 wishCount_=std::min<uint32_t>(n,kSweepMax);for(uint32_t i=0;i<wishCount_;++i)wishIds_[i]=w[i].id+1; // Claude LV39: the sweep's lamps
 bool placed[MaxCapacity]{};n=std::min(n,capacity_); // Claude LV34: the atlas's own count
 for(uint32_t i=0;i<n;++i)for(uint32_t j=0;j<capacity_;++j){Slot&s=slots_[j];if(!(s.id&&s.id==w[i].id+1))continue; // id + 1: catalogue lamp 0 is a lamp
  // Claude LV37: a moving light, where it stands now; its cube drawn again from scratch this frame (Static), the last one read until then.
  if(w[i].moving){std::memcpy(s.world,w[i].world,sizeof s.world);s.radius=w[i].radius;s.nearYards=s.nearZ=w[i].nearYards;s.moving=true;s.clear=true;s.bad=false;}
  else if(s.nearYards!=near_||s.nearZ!=NearZ()){std::memcpy(s.world,w[i].world,sizeof s.world);s.radius=w[i].radius;s.nearYards=near_;s.nearZ=NearZ();s.builds=0;s.clear=true;s.bad=false;s.since=-1;}
  // Claude LV35: a new radius (the water's step): drawn again from scratch, the cube in the atlas (and its drawn radius) read until then.
  else if(s.radius!=w[i].radius){std::memcpy(s.world,w[i].world,sizeof s.world);s.radius=w[i].radius;s.clear=true;s.bad=false;s.stale=s.builds>0;}
  s.wished=wishes_;s.unitReach=w[i].unitReach;placed[i]=true;break;} // Claude PERSO2
 for(uint32_t i=0;i<n;++i){if(placed[i])continue;Slot*free=nullptr;for(uint32_t j=0;j<capacity_;++j){Slot&s=slots_[j];if(s.wished!=wishes_&&(!free||s.wished<free->wished))free=&s;}if(!free)break;
  *free=Slot{};free->id=w[i].id+1;std::memcpy(free->world,w[i].world,sizeof free->world);free->radius=w[i].radius;free->moving=w[i].moving;free->unitReach=w[i].unitReach; /* Claude PERSO2 */
  free->nearYards=w[i].moving?w[i].nearYards:near_;free->nearZ=w[i].moving?w[i].nearYards:NearZ();free->wished=wishes_;}
}
int LampCubes::Cube(uint32_t id)const{if(!Ready())return -1;for(uint32_t i=0;i<capacity_;++i)if(slots_[i].id==id+1&&slots_[i].builds>0&&!slots_[i].bad)return int(i);return -1;}
void LampCubes::Units(const float (*u)[4],int n,float ownDepth){unitCount_=0;own_=std::isfinite(ownDepth)?std::clamp(ownDepth,0.f,4.f):1.5f;if(!u)return;for(int i=0;i<n&&unitCount_<int(units_.size());++i){bool ok=true;for(int k=0;k<4;++k)ok=ok&&std::isfinite(u[i][k]);if(ok)units_[unitCount_++]={u[i][0],u[i][1],u[i][2],std::clamp(u[i][3],0.f,4.f)};}}
// Claude LV34: a cube's radius; how far its light has faded in since the cube was first seen drawn (kLampFadeSeconds, the
// lamps' own fade): a light never shows before its cube, and does not pop in.
float LampCubes::Radius(int cube)const{return cube>=0&&cube<int(capacity_)?slots_[cube].drawn:0.f;} // Claude LV35: as drawn
void LampCubes::Centre(int cube,float(&world)[3],float&nearPlane,bool&allFaces)const{world[0]=world[1]=world[2]=0;nearPlane=0;allFaces=false;if(cube<0||cube>=int(capacity_))return;
 const Slot&s=slots_[cube];std::memcpy(world,s.drawnWorld,sizeof world);nearPlane=s.drawnNear;allFaces=s.moving;}
float LampCubes::Wanted(uint32_t id)const{for(uint32_t i=0;i<capacity_;++i)if(slots_[i].id==id+1)return slots_[i].radius;return 0.f;}
float LampCubes::Fade(int cube,double seconds){if(cube<0||cube>=int(capacity_))return 0.f;Slot&s=slots_[cube];if(s.since<0||seconds<s.since)s.since=seconds;
 return float(std::clamp((seconds-s.since)/double(Source::kLampFadeSeconds),0.0,1.0));}
// Every cube is drawn with the same near planes (Configure redraws them all when one changes): z the side faces', w the up and down faces'.
std::array<float,4> LampCubes::AtlasRow()const{return {float(size_),float(columns_),near_,NearZ()};}
Texture LampCubes::DynamicAtlas()const{if(!Ready()||!dynInitialized_||pending_)return {};return {dynInfo_.view,VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL,0};} // Claude LV36
uint32_t LampCubes::DynamicMask(int cube,uint64_t serial)const{if(cube<0||cube>=int(capacity_)||!dynInitialized_)return 0;const Slot&s=slots_[cube];return s.dynSerial==serial?s.dynMask:0;}
Texture LampCubes::Atlas()const{if(!Ready()||!initialized_||pending_)return {}; /* Claude LV35: an atlas about to go is read no more */return {imageInfo_.view,VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL,0};}
void __cdecl LampCubes::MidPassThunk(void*user,const WXL_VkRenderContext*c){if(user&&c)static_cast<LampCubes*>(user)->MidPass(*c);}
void LampCubes::MidPass(const WXL_VkRenderContext&c){
 if(!Ready()||pending_||c.point!=WXL_VK_POINT_AFTER_OPAQUE_WORLD||c.invocation!=0||!c.cmd||!c.serial)return; // Claude LV35: pending_
 if(!initialized_){ // born UNDEFINED: cleared to the far plane, then left as the replay's LOAD pass wants it
  VkImageMemoryBarrier b{VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER};b.oldLayout=VK_IMAGE_LAYOUT_UNDEFINED;b.newLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b.image=imageInfo_.image;b.srcQueueFamilyIndex=b.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;b.subresourceRange={VK_IMAGE_ASPECT_DEPTH_BIT,0,1,0,1};b.dstAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;
  barrier_(c.cmd,VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,VK_PIPELINE_STAGE_TRANSFER_BIT,0,0,nullptr,0,nullptr,1,&b);VkClearDepthStencilValue farPlane{1,0};clearDepth_(c.cmd,imageInfo_.image,VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,&farPlane,1,&b.subresourceRange);
  b.oldLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b.newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b.srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
  barrier_(c.cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT|VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,0,0,nullptr,0,nullptr,1,&b);
  initialized_=true;last_=c.serial;}
 if(dynImage_&&!dynInitialized_){ // Claude LV36: the movers' atlas, the same first clear // born UNDEFINED: cleared to the far plane, then left as the replay's LOAD pass wants it
  VkImageMemoryBarrier b{VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER};b.oldLayout=VK_IMAGE_LAYOUT_UNDEFINED;b.newLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b.image=dynInfo_.image;b.srcQueueFamilyIndex=b.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;b.subresourceRange={VK_IMAGE_ASPECT_DEPTH_BIT,0,1,0,1};b.dstAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;
  barrier_(c.cmd,VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,VK_PIPELINE_STAGE_TRANSFER_BIT,0,0,nullptr,0,nullptr,1,&b);VkClearDepthStencilValue farPlane{1,0};clearDepth_(c.cmd,dynInfo_.image,VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,&farPlane,1,&b.subresourceRange);
  b.oldLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b.newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b.srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
  barrier_(c.cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT|VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,0,0,nullptr,0,nullptr,1,&b);
  dynInitialized_=true;last_=c.serial;}
 if(check_){if(!chkImage_&&!CheckAllocate())check_=0;else if(!chkInit_)CheckStart(c);} // Claude PREUVE1
 // Claude CPU-A: from here on the commands go into cc.cmd -- the main buffer's piece after the aside segment, when one is open (the
 // replays are then recorded into the segment by the device's replay thread, which the GPU runs before this piece), else c.cmd.
 WXL_VkRenderContext cc=c;asideNow_=false;refCount_=0;
 if((aside_==1||aside_==2)&&api_->structSize>=offsetof(WXL_VkRenderApi,BeginReplayAside)+sizeof(api_->BeginReplayAside)&&api_->BeginReplayAside)
  if(VkCommandBuffer next=api_->BeginReplayAside()){cc.cmd=next;asideNow_=true;}
 {using clk=std::chrono::steady_clock;const auto t0=clk::now();Static(cc);const auto t1=clk::now();if(!asideNow_)HD::GpuZones::Direct(cc.cmd,"HD MidPass : LampCubes personnages"); /* Claude GPU0 (mesure, hdLvCubeAside 0) */Dynamic(cc);const auto t2=clk::now(); // Claude PERF1: timed
  // Claude CPU-A proof / control: the replays made again on this thread, after them, with the same flags, into the check atlases.
  for(uint32_t i=0;i<refCount_;++i){RefCall&r=refs_[i];r.desc.cmd=cc.cmd;r.desc.views=r.views;r.desc.excludeBoxes=r.desc.excludeBoxCount?r.boxes:nullptr;WXL_VkReplayStats s2{};s2.structSize=sizeof s2;api_->ReplayWorldViews(&r.desc,&s2);}
  auto&k=g_cubeCpu;k.staticMs+=std::chrono::duration<double,std::milli>(t1-t0).count();k.dynMs+=std::chrono::duration<double,std::milli>(t2-t1).count();
  for(uint32_t i=0;i<capacity_;++i)if(slots_[i].id&&slots_[i].wished==wishes_&&slots_[i].moving)++k.moving;
  if(++k.frames>=64){const double f=double(k.frames);
   k.staticDraws+=g_wxlAsideDraws[0];k.dynDraws+=g_wxlAsideDraws[1];g_wxlAsideDraws[0]=g_wxlAsideDraws[1]=0; /* Claude CPU-A: the replay thread's draws */std::snprintf(g_cubeText,sizeof g_cubeText," | CPU/image: fixes %.2f ms (%.1f lampes mobiles, %.1f cubes dessines, %.0f dessins), personnages %.2f ms (%.1f passes, %.1f faces, %.0f dessins)",
   k.staticMs/f,k.moving/f,k.fixedDrawn/f,k.staticDraws/f,k.dynMs/f,k.dynWalks/f,k.dynViews/f,k.dynDraws/f);
   {const size_t l=std::strlen(g_cubeText);std::snprintf(g_cubeText+l,sizeof g_cubeText-l," | tri %.2f ms, envoi %.2f ms, %.0f objets gardes (%.0f bougent), %.0f objets lus, %.0f appels de dessin (%.0f objets en multi-faces))",g_wxlViewsWalkMs/f,g_wxlViewsRecMs/f,g_wxlViewsKept/f,g_wxlViewsLive/f,g_wxlViewsCaptured/f,g_wxlViewsCalls/f,g_wxlViewsMultiDraws/f);
    g_wxlViewsWalkMs=g_wxlViewsRecMs=0;g_wxlViewsKept=g_wxlViewsCaptured=g_wxlViewsLive=0;g_wxlViewsCalls=g_wxlViewsMultiDraws=0;} /* Claude PERF2, CUBES1 */
   {const size_t l=std::strlen(g_cubeText);std::snprintf(g_cubeText+l,sizeof g_cubeText-l," | fil a part (CPU-A) : %.2f ms/image hors thread principal, attente %.3f ms, %.1f rejeux, %.0f joints tot, %.0f pipelines construits, %.0f listes en vue par vue",
    g_wxlAsideWorkMs/f,g_wxlAsideWaitMs/f,double(g_wxlAsideCalls)/f,double(g_wxlAsideEarly),double(g_wxlAsideBuilds),double(g_wxlAsideRingFull));
    g_wxlAsideWorkMs=g_wxlAsideWaitMs=0;g_wxlAsideCalls=g_wxlAsideEarly=g_wxlAsideBuilds=g_wxlAsideRingFull=0;} /* Claude CPU-A */
   {const size_t l=std::strlen(g_cubeText);std::snprintf(g_cubeText+l,sizeof g_cubeText-l," | ANIM1 (mode %d) : %.0f dessins animes une fois, %.0f appels legers, %.1f sans place",skin_,double(g_wxlSkinDraws)/f,double(g_wxlSkinLite)/f,double(g_wxlSkinRefused)/f);
    g_wxlSkinDraws=g_wxlSkinLite=g_wxlSkinRefused=0;} /* Claude ANIM1 */
   {static const bool bench=[]{const char*e=std::getenv("WXL_VK_FRAME_LOG");return e&&e[0]=='1';}(); /* Claude CPU-A: the benches' line (WXL_VK_FRAME_LOG=1 only) */
    if(bench)if(std::FILE*fl=std::fopen("Logs\\cubes-cpu.txt","a")){std::fprintf(fl,"mode %d%s\n",aside_,g_cubeText);std::fclose(fl);}}
   k=CubeCpu{};}
  if(g_cubeText[0]){if(char*bar=std::strstr(info_," | CPU/image"))*bar=0;if(std::strlen(info_)+std::strlen(g_cubeText)<sizeof info_)std::strcat(info_,g_cubeText);}}
 if(check_&&chkInit_){CheckCopy(cc);if(chkText_[0]&&std::strlen(info_)+std::strlen(chkText_)<sizeof info_)std::strcat(info_,chkText_);} // Claude PREUVE1
 Probe(cc); // Claude CPU-A: cc
}
// Claude LV38: whether a light's sphere meets the camera's view (the frame's viewProj, row vectors, D3D depth 0..1: the four sides,
// near z >= 0, far z <= w). The capture a cube is completed from holds only what the camera drew: a cube whose sphere lies wholly
// outside the view learns nothing from this frame, and no pixel on screen is within its reach. Without the scene, every cube is.
static bool SphereInView(const WXL_VkRenderContext&c,const float*centre,float radius){
 if(!c.scene)return true;const float*m=c.scene->viewProj;
 auto plane=[&](int col,float sign,int base){float a[4];for(int r=0;r<4;++r)a[r]=(base>=0?m[r*4+base]:0.f)+sign*m[r*4+col];
  const float len=std::sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);if(!(len>0)||!std::isfinite(len))return true;
  return (a[0]*centre[0]+a[1]*centre[1]+a[2]*centre[2]+a[3])/len>=-radius;};
 return plane(0,1,3)&&plane(0,-1,3)&&plane(1,1,3)&&plane(1,-1,3)&&plane(2,1,-1)&&plane(2,-1,3);
}
// Claude PERF1: which of a cube's six faces can be read by a pixel on screen. A pixel at P reads the face of the dominant axis of
// P - light (the readers' Face()), within the cube's radius r: that region lies in the pyramid of the light and the four corners
// light + r (axis +- u +- v). When all five points are outside one plane of the camera's view, no visible pixel reads the face: its
// movers need not be drawn this frame (exact: nothing on screen changes). Order of BuildMatrices: +X -X +Y -Y +Z -Z. Without the
// scene, every face.
// Claude PREUVE1: LampSurfaces does not read the face of the pixel P itself but of p = P + its normal x (kCubeNormalOffset + texelYards
// (0.75 + 1.5 slant)), up to 0.02 + 4.5 |P - light| / size yards away; a face is read only when p is in it with z < r, so |p| <= sqrt(3) r.
// The planes are normalised and a face is left out only when its five points are all farther out than that offset (PERF1 had no margin:
// a pixel on the screen's edge could read a face not drawn this frame).
static uint32_t FacesInView(const WXL_VkRenderContext&c,const float*at,float r,uint32_t size){
 if(!c.scene)return 63u;const float*m=c.scene->viewProj;
 const float sz=float(std::max<uint32_t>(size,16u)),reach=(1.7320508f*r+.02f)/std::max(1.f-4.5f/sz,.5f),margin=.02f+4.5f*reach/sz+.05f;
 float planes[6][4];int np=0;
 auto make=[&](int col,float sign,int base){float*a=planes[np];for(int k=0;k<4;++k)a[k]=(base>=0?m[k*4+base]:0.f)+sign*m[k*4+col];
  const float len=std::sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);if(len>0&&std::isfinite(len)){for(int k=0;k<4;++k)a[k]/=len;a[3]+=margin;++np;}};
 make(0,1,3);make(0,-1,3);make(1,1,3);make(1,-1,3);make(2,1,-1);make(2,-1,3);
 uint32_t mask=0;
 for(int f=0;f<6;++f){const int a=f/2;const float sgn=(f&1)?-1.f:1.f;const int u=(a+1)%3,v=(a+2)%3;
  float pts[5][3];for(int k=0;k<3;++k)pts[0][k]=at[k];
  for(int q=0;q<4;++q){float*p=pts[1+q];for(int k=0;k<3;++k)p[k]=at[k];p[a]+=sgn*r;p[u]+=(q&1)?r:-r;p[v]+=(q&2)?r:-r;}
  bool seen=true;
  for(int i=0;i<np&&seen;++i){const float*pl=planes[i];bool allOut=true;
   for(int q=0;q<5&&allOut;++q)allOut=pl[0]*pts[q][0]+pl[1]*pts[q][1]+pl[2]*pts[q][2]+pl[3]<0.f;
   if(allOut)seen=false;}
  if(seen)mask|=1u<<f;}
 return mask;
}
void LampCubes::Static(const WXL_VkRenderContext&c){
 // Claude LV37: the moving lights (the lantern, the spells) first, all of them, every frame: their cube is drawn again where they stand.
 // Then, as before, hdLvLampCubeUpdates kept cubes: the wanted ones never drawn first (LV35: or with a new radius), then the one
 // completed the longest ago. Drawn five cubes (30 views) per replay.
 uint32_t todo[MaxCapacity],fixed[MaxCapacity];uint32_t n=0,nf=0;
 // Claude LV38: a kept cube is completed only while its sphere is in view (SphereInView): the others have nothing to learn, so the
 // ones on screen come round again sooner (141 cubes at 2 a frame: once every 70 frames before, behind the camera too).
 for(uint32_t i=0;i<capacity_;++i){const Slot&s=slots_[i];if(!s.id||s.wished!=wishes_||s.bad)continue;if(s.moving)todo[n++]=i;else if(SphereInView(c,s.world,s.radius))fixed[nf++]=i;}
 std::sort(fixed,fixed+nf,[&](uint32_t a,uint32_t b){const Slot&x=slots_[a],&y=slots_[b];if((x.builds==0||x.stale)!=(y.builds==0||y.stale))return x.builds==0||x.stale; /* Claude LV35: a new radius as soon as a new cube */return x.built<y.built;});
 for(uint32_t k=0;k<nf&&k<perFrame_;++k)todo[n++]=fixed[k];
 if(!n){std::snprintf(info_,sizeof info_,"cubes: no lamp wants one");return;}
 uint32_t drawnNow=0,replayed=0,culled=0,excluded=0,boxesUsed=0;
 for(uint32_t from=0;from<n;from+=5){
  WXL_VkReplayView views[6*5]{};uint32_t used[5]{},count=0,cubes=0;
  for(uint32_t k=from;k<n&&k<from+5;++k){Slot&s=slots_[todo[k]];HD::VulkanLocalShadow::Light light;light.key=uint64_t(s.id);light.position={s.world[0],s.world[1],s.world[2]};light.radius=s.radius;light.nearPlane=s.nearYards;
   float m[6][16];if(!HD::VulkanLocalShadow::BuildMatricesUpTo(light,MaxRadius,m)){s.bad=true;s.built=c.serial;continue;} // Claude LV23: an unusable lamp is never read (LV22 read its never-cleared faces)
   // Claude LV24 hdLvLampCubeNearZ: the up (+Z) and down (-Z) faces with their own near plane; the four side faces keep hdLvLampCubeNear.
   if(s.nearZ>0&&s.nearZ!=s.nearYards){float mz[6][16];light.nearPlane=s.nearZ;if(!HD::VulkanLocalShadow::BuildMatricesUpTo(light,MaxRadius,mz)){s.bad=true;s.built=c.serial;continue;}std::memcpy(m[4],mz[4],sizeof m[4]);std::memcpy(m[5],mz[5],sizeof m[5]);}
   uint32_t i=todo[k];for(uint32_t f=0;f<6;++f){auto&v=views[count++];v.area={{int32_t(((i%columns_)*3+f%3)*size_),int32_t(((i/columns_)*2+f/3)*size_)},{size_,size_}};std::memcpy(v.lightViewProj,m[f],sizeof v.lightViewProj);v.cullSphere[0]=s.world[0];v.cullSphere[1]=s.world[1];v.cullSphere[2]=s.world[2];v.cullSphere[3]=s.radius;v.cascade=f;v.clear=s.clear?1u:0u;}
   used[cubes++]=i;}
  if(!count)continue;
  WXL_VkReplayViewsDesc desc{};desc.structSize=sizeof desc;desc.cmd=c.cmd;desc.framebuffer=framebuffer_;desc.depthBias=0;desc.slopeBias=0;
  desc.flags=WXL_VK_REPLAY_ALPHA_TESTED|WXL_VK_REPLAY_CULL_FRUSTUM|WXL_VK_REPLAY_NO_SKINNED|WXL_VK_REPLAY_WIND_STILL|WXL_VK_REPLAY_NO_CASTERS;
  // Claude LV25 hdLvLampCubeCull: each draw's own face culling (measured: a lantern's glass, roof and floor are seen from inside, back
  // faces; a lamppost's arm shows the flame its front). A two-sided material keeps both faces.
  if(cull_>0)desc.flags|=WXL_VK_REPLAY_OWN_CULL|(cull_==2?WXL_VK_REPLAY_OWN_CULL_MIRRORED:0u);
  if(g_hdCubeMultiFaces)desc.flags|=WXL_VK_REPLAY_MULTI_FACES; // Claude CUBES1
  desc.views=views;desc.viewCount=count;desc.viewStride=sizeof(WXL_VkReplayView);
  // Claude LV23: boxes whose model draws stay out of the kept cubes. Round every unit near the cubes drawn now: what a unit
  // carries without bones (a weapon, a fishing rod, a sheath) is not taken for the unit's by the device (draw/Reader.cpp, the
  // mover test needs bone weights) and was drawn into the cubes wherever the unit went: a trail on the ground. Round each lamp's
  // own fixture: its brazier, cage or torch (its origin within 0.6 yd across and hdLvLampCubeOwn yards under the light).
  static float boxes[(256+5)*6]; /* Claude LV41: was 64+5 */uint32_t boxCount=0;
  if(own_>0)for(uint32_t k=0;k<cubes;++k){const Slot&s=slots_[used[k]];float*b=boxes+6*boxCount++;b[0]=s.world[0]-.6f;b[1]=s.world[1]-.6f;b[2]=s.world[2]-own_;b[3]=s.world[0]+.6f;b[4]=s.world[1]+.6f;b[5]=s.world[2]+1.f;}
  for(int u=0;u<unitCount_&&boxCount<256+5;++u){const auto&p=units_[u];bool close=false;
   for(uint32_t k=0;k<cubes&&!close;++k){const Slot&s=slots_[used[k]];float dx=p[0]-s.world[0],dy=p[1]-s.world[1],dz=p[2]-s.world[2],r=s.radius+p[3]+3;close=dx*dx+dy*dy+dz*dz<r*r;}
   if(!close)continue;float h=p[3]+1.f;float*b=boxes+6*boxCount++;b[0]=p[0]-h;b[1]=p[1]-h;b[2]=p[2]-.5f;b[3]=p[0]+h;b[4]=p[1]+h;b[5]=p[2]+4.5f;}
  desc.excludeBoxes=boxCount?boxes:nullptr;desc.excludeBoxCount=boxCount;
  WXL_VkReplayStats st{};st.structSize=sizeof st;last_=c.serial;
  if(asideNow_)desc.flags|=WXL_VK_REPLAY_ASIDE; // Claude CPU-A
  if(!api_->ReplayWorldViews(&desc,&st)||!st.captured){std::snprintf(info_,sizeof info_,"cubes: replay unavailable this frame (%u draws captured)",st.captured);return;}
  if(check_&&chkInit_&&aside_>=2)Defer(desc,chkFramebuffer_); /* Claude CPU-A: the same flags, on this thread, after */else
  if(check_&&chkInit_){WXL_VkReplayViewsDesc old=desc;old.framebuffer=chkFramebuffer_;old.flags=(old.flags|WXL_VK_REPLAY_OLD_BOUNDS|(check_==2?WXL_VK_REPLAY_NO_MODEL_CULL:0u))&~WXL_VK_REPLAY_MULTI_FACES; /* Claude CUBES1: the reference is the per-view path; INST1-CUBES: 2 = no model culled */WXL_VkReplayStats s2{};s2.structSize=sizeof s2;api_->ReplayWorldViews(&old,&s2);} // Claude PREUVE1
  // Claude LV35, LV37: what the atlas now holds for this cube: its radius, where it was drawn and its near plane
  for(uint32_t k=0;k<cubes;++k){Slot&s=slots_[used[k]];++s.builds;s.built=c.serial;s.clear=s.moving;s.drawn=s.radius;s.stale=false;std::memcpy(s.drawnWorld,s.world,sizeof s.world);s.drawnNear=s.nearYards;}
  drawnNow+=cubes;replayed+=st.replayed;g_cubeCpu.staticDraws+=st.replayed;g_cubeCpu.fixedDrawn+=cubes; /* Claude PERF1 */culled+=st.culled;excluded+=st.excluded;boxesUsed+=boxCount;}
 uint32_t ready=0;for(auto&s:slots_)if(s.id&&s.wished==wishes_&&s.builds>0)++ready;
 std::snprintf(info_,sizeof info_,"cubes: %u lights with a cube, %u drawn this frame (%u draws, %u culled, %u left out by %u boxes), face %u px",ready,drawnNow,replayed,culled,excluded,boxesUsed,size_);
}
// Claude LV36: the movers' layer. For every cube read this frame (wished, drawn, not bad), the units round it: each unit's box (the
// LV23 box: its feet, its bounding radius + 1 yd across, 0.5 yd under to 4.5 yd over) and the faces that see it, exactly
// (FacesSeeingBox). Those
// faces are cleared and drawn with the units alone (DYNAMIC_ONLY; the swaying trees are left out, NO_WIND: the kept cubes hold
// them at rest), at the cube's DRAWN radius and near planes, so LampSurfaces and WaterLamps read them exactly as the kept faces.
// Every face of every lit cube that sees a unit, every frame: no count, no budget.
// Which faces of a cube see a box, exactly: face +X holds the points with x > max(|y|, |z|) (relative to the light) and x beyond its
// near plane. Over the box, x - max(|y|, |z|) is largest at the box's farthest x with y and z as near the light's as the box allows
// (each term on its own axis), so the face sees the box if and only if that one point is in the face. The same for the six faces.
static uint32_t FacesSeeingBox(const float(&l)[3],const float(&lo)[3],const float(&hi)[3],float nearSide,float nearUpDown){
 float c[3];for(int k=0;k<3;++k)c[k]=std::fabs(std::clamp(l[k],lo[k],hi[k])-l[k]);
 uint32_t mask=0;
 for(int a=0;a<3;++a){const float across=std::max(c[(a+1)%3],c[(a+2)%3]),nearPlane=a==2?nearUpDown:nearSide;
  const float ahead=hi[a]-l[a],behind=l[a]-lo[a]; // faces +a (2a) and -a (2a+1), BuildMatrices' order
  if(ahead>nearPlane&&ahead>across)mask|=1u<<(2*a);
  if(behind>nearPlane&&behind>across)mask|=1u<<(2*a+1);}
 return mask;
}
void LampCubes::Dynamic(const WXL_VkRenderContext&c){
 if(!persos_)return; // Claude MESURE hdLvCubePersos 0: no unit layer this frame (every mask stale: nothing read)
 if(!dynImage_||!dynInitialized_||!unitCount_)return; // no unit: every mask is stale (dynSerial != this frame), nothing is read
 WXL_VkReplayView views[WXL_VK_REPLAY_MAX_VIEWS]{};uint32_t count=0;
 uint32_t batch[WXL_VK_REPLAY_MAX_VIEWS],batchMask[WXL_VK_REPLAY_MAX_VIEWS],cubesInBatch=0;
 auto flush=[&]{
  if(!count)return;
  WXL_VkReplayViewsDesc desc{};desc.structSize=sizeof desc;desc.cmd=c.cmd;desc.framebuffer=dynFramebuffer_;desc.depthBias=0;desc.slopeBias=0;
  desc.flags=WXL_VK_REPLAY_DYNAMIC_ONLY|WXL_VK_REPLAY_NO_WIND|WXL_VK_REPLAY_ALPHA_TESTED|WXL_VK_REPLAY_CULL_FRUSTUM|WXL_VK_REPLAY_NO_CASTERS;
  if(cull_>0)desc.flags|=WXL_VK_REPLAY_OWN_CULL|(cull_==2?WXL_VK_REPLAY_OWN_CULL_MIRRORED:0u); // as the kept cubes (LV25)
  if(g_hdCubeMultiFaces)desc.flags|=WXL_VK_REPLAY_MULTI_FACES; // Claude CUBES1
  if(g_hdCubeMultiFaces&&skin_>0)desc.flags|=WXL_VK_REPLAY_PRESKIN|(skin_==3?WXL_VK_REPLAY_PRESKIN_CONTROL:0u); // Claude ANIM1
  desc.views=views;desc.viewCount=count;desc.viewStride=sizeof(WXL_VkReplayView);
  WXL_VkReplayStats st{};st.structSize=sizeof st;last_=c.serial;
  if(asideNow_)desc.flags|=WXL_VK_REPLAY_ASIDE; // Claude CPU-A
  ++g_cubeCpu.dynWalks;g_cubeCpu.dynViews+=count; /* Claude PERF1 */
  if(api_->ReplayWorldViews(&desc,&st)&&st.captured&&(g_cubeCpu.dynDraws+=st.replayed,true)){for(uint32_t k=0;k<cubesInBatch;++k){Slot&s=slots_[batch[k]];s.dynMask=batchMask[k];s.dynSerial=c.serial;}
   if(check_&&chkInit_&&aside_>=2)Defer(desc,chkDynFramebuffer_); /* Claude CPU-A */else
   if(check_&&chkInit_){WXL_VkReplayViewsDesc old=desc;old.framebuffer=chkDynFramebuffer_;old.flags=(old.flags|WXL_VK_REPLAY_OLD_BOUNDS|(check_==2?WXL_VK_REPLAY_NO_MODEL_CULL:0u))&~(WXL_VK_REPLAY_MULTI_FACES|WXL_VK_REPLAY_PRESKIN|WXL_VK_REPLAY_PRESKIN_CONTROL); /* Claude ANIM1 */ /* Claude CUBES1; INST1-CUBES */WXL_VkReplayStats s2{};s2.structSize=sizeof s2;api_->ReplayWorldViews(&old,&s2);} // Claude PREUVE1
}
  count=0;cubesInBatch=0;};
 for(uint32_t i=0;i<capacity_;++i){Slot&s=slots_[i];if(!s.id||s.wished!=wishes_||s.builds==0||s.bad||!(s.drawn>s.drawnNear))continue;
  const float r=s.drawn;uint32_t mask=0;const float*at=s.drawnWorld; // Claude LV37: where the cube was drawn
  // Claude PERSO2 hdLvPersoReach: the units only within the light's reach on surfaces (each surface it lights, and every unit between,
  // lies there: the surfaces keep every shadow); the projection stays the cube's drawn radius. Only the far water glints lose the units.
  const float reach=reach_&&s.unitReach>0?std::min(r,s.unitReach):r;
  if(!SphereInView(c,at,reach))continue; // Claude LV38: no pixel on screen within its reach: its movers' faces would never be read
  for(int u=0;u<unitCount_&&mask!=63u;++u){const auto&p=units_[u];const float h=p[3]+1.f;const float lo[3]={p[0]-h,p[1]-h,p[2]-.5f},hi[3]={p[0]+h,p[1]+h,p[2]+4.5f};
   // the box's nearest point to the light: beyond the cube's radius, the unit is in no face
   float d2=0;for(int k=0;k<3;++k){const float w=at[k],q=std::clamp(w,lo[k],hi[k]);d2+=(q-w)*(q-w);}if(d2>=reach*reach)continue;
   mask|=FacesSeeingBox(s.drawnWorld,lo,hi,s.drawnNear,s.nearZ>0?s.nearZ:s.drawnNear);}
  mask&=FacesInView(c,at,reach,size_); // Claude PERF1: a face no pixel on screen reads is not drawn (exact)
  if(!mask)continue;
  HD::VulkanLocalShadow::Light light;light.key=uint64_t(s.id);light.position={at[0],at[1],at[2]};light.radius=r;light.nearPlane=s.drawnNear;
  float m[6][16];if(!HD::VulkanLocalShadow::BuildMatricesUpTo(light,MaxRadius,m))continue;
  if(s.nearZ>0&&s.nearZ!=s.drawnNear){float mz[6][16];light.nearPlane=s.nearZ;if(!HD::VulkanLocalShadow::BuildMatricesUpTo(light,MaxRadius,mz))continue;std::memcpy(m[4],mz[4],sizeof m[4]);std::memcpy(m[5],mz[5],sizeof m[5]);}
  uint32_t faces=0;for(uint32_t f=0;f<6;++f)faces+=(mask>>f)&1u;
  if(count+faces>WXL_VK_REPLAY_MAX_VIEWS)flush();
  for(uint32_t f=0;f<6;++f){if(!(mask&(1u<<f)))continue;auto&v=views[count++];v.area={{int32_t(((i%columns_)*3+f%3)*size_),int32_t(((i/columns_)*2+f/3)*size_)},{size_,size_}};
   std::memcpy(v.lightViewProj,m[f],sizeof v.lightViewProj);v.cullSphere[0]=at[0];v.cullSphere[1]=at[1];v.cullSphere[2]=at[2];v.cullSphere[3]=reach;v.cascade=f;v.clear=1;} // Claude PERSO2
  batch[cubesInBatch]=i;batchMask[cubesInBatch]=mask;++cubesInBatch;}
 flush();
}
// Claude LV24 hdLvLampCubeProbe (measure only): the nearest lamp's whole cube (six faces, 3 x 2 cells of the atlas) copied to a host
// buffer, outside any pass, after this frame's replay; the atlas goes back to SHADER_READ_ONLY for LampSurfaces and the next LOAD.
void LampCubes::Probe(const WXL_VkRenderContext&c){
 if(!probeWanted_||probeBuffer_||!copy_||!nearest_||!api_->CreateBuffer||!api_->RetireBuffer)return;
 // Claude LV39: in a sweep the lamp is the sweepIdx_-th nearest; one whose cube is not drawn is skipped.
 uint32_t target=nearest_;
 if(sweepLeft_>0){if(sweepIdx_>=wishCount_){sweepLeft_=0;probeWanted_=false;return;}target=wishIds_[sweepIdx_];}
 int cube=-1;for(uint32_t i=0;i<capacity_;++i)if(slots_[i].id==target&&slots_[i].builds>0&&!slots_[i].bad)cube=int(i);
 if(cube<0){if(sweepLeft_>0){++sweepIdx_;--sweepLeft_;if(!sweepLeft_)probeWanted_=false;}return;}
 const uint32_t texel=pass_.depthFormat==VK_FORMAT_D32_SFLOAT?4u:2u;
 WXL_VkBufferDesc bd{VkDeviceSize(3*size_)*(2*size_)*texel,VK_BUFFER_USAGE_TRANSFER_DST_BIT,WXL_VK_MEMORY_HOST};probeInfo_={};
 probeBuffer_=api_->CreateBuffer(&bd,&probeInfo_);
 if(!probeBuffer_||!probeInfo_.mapped||!probeInfo_.buffer){if(probeBuffer_)api_->RetireBuffer(probeBuffer_,c.serial);probeBuffer_=nullptr;probeWanted_=false;std::snprintf(info_,sizeof info_,"cubes: probe buffer refused");return;}
 VkImageMemoryBarrier b{VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER};b.oldLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b.newLayout=VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;b.image=imageInfo_.image;b.srcQueueFamilyIndex=b.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;b.subresourceRange={VK_IMAGE_ASPECT_DEPTH_BIT,0,1,0,1};
 b.srcAccessMask=VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;b.dstAccessMask=VK_ACCESS_TRANSFER_READ_BIT;
 barrier_(c.cmd,VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,VK_PIPELINE_STAGE_TRANSFER_BIT,0,0,nullptr,0,nullptr,1,&b);
 VkBufferImageCopy r{};r.imageSubresource={VK_IMAGE_ASPECT_DEPTH_BIT,0,0,1};r.imageOffset={int32_t((uint32_t(cube)%columns_)*3*size_),int32_t((uint32_t(cube)/columns_)*2*size_),0};r.imageExtent={3*size_,2*size_,1};
 copy_(c.cmd,imageInfo_.image,VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL,probeInfo_.buffer,1,&r);
 VkBufferMemoryBarrier hb{VK_STRUCTURE_TYPE_BUFFER_MEMORY_BARRIER};hb.srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;hb.dstAccessMask=VK_ACCESS_HOST_READ_BIT;hb.srcQueueFamilyIndex=hb.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;hb.buffer=probeInfo_.buffer;hb.offset=0;hb.size=VK_WHOLE_SIZE;
 b.oldLayout=VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;b.newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b.srcAccessMask=VK_ACCESS_TRANSFER_READ_BIT;b.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
 barrier_(c.cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_HOST_BIT|VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT|VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,0,0,nullptr,1,&hb,1,&b);
 probeSlot_=slots_[cube];probeCube_=uint32_t(cube);probeSize_=size_;probeSerial_=c.serial;last_=c.serial;probeWanted_=false;
 if(sweepLeft_>0){++sweepIdx_;--sweepLeft_;probeWanted_=sweepLeft_>0;} // Claude LV39: the next lamp once this copy is written
}
void LampCubes::WriteProbe(){
 ++probeSeq_;char name[64];const size_t bytes=size_t(probeInfo_.size);bool ok=false;
 std::snprintf(name,sizeof name,"Logs\\lumen-cube-%d.bin",probeSeq_);
 if(std::FILE*f=std::fopen(name,"wb")){ok=std::fwrite(probeInfo_.mapped,1,bytes,f)==bytes;std::fclose(f);}
 std::snprintf(name,sizeof name,"Logs\\lumen-cube-%d.txt",probeSeq_);
 if(std::FILE*f=std::fopen(name,"w")){const Slot&s=probeSlot_;
  std::fprintf(f,"lumen-cube-%d (Claude LV24, hdLvLampCubeProbe) %s\n",probeSeq_,ok?"bin complet":"BIN NON ECRIT");
  std::fprintf(f,"lampe %u\nmonde %.4f %.4f %.4f\nrayon %.4f\nnear %.4f\nnearZ %.4f\nface %u\nformat %s\ncube %u\nconstructions %u\noctets %zu\n",
   s.id,s.world[0],s.world[1],s.world[2],s.radius,s.nearYards,s.nearZ>0?s.nearZ:s.nearYards,probeSize_,pass_.depthFormat==VK_FORMAT_D32_SFLOAT?"D32_SFLOAT":"D16_UNORM",probeCube_,s.builds,bytes);
  std::fprintf(f,"cull %d\n",cull_); // Claude LV25: hdLvLampCubeCull when written
  std::fprintf(f,"image %u x %u, lignes de haut en bas ; faces +X,-X,+Y (ligne 0) puis -Y,+Z,-Z (ligne 1), axes de BuildMatrices\n",3*probeSize_,2*probeSize_);
  std::fprintf(f,"profondeur stockee s : distance sur l'axe de la face z = -n*c/(s-c), c = r/(r-n), n = near de cette face ; s = 1 : rien\n");std::fclose(f);}
 api_->RetireBuffer(probeBuffer_,probeSerial_);probeBuffer_=nullptr;probeSerial_=0;
}
// ---- Claude PREUVE1 hdShadowBoundsCheck (measure only): the proof that PERF2's exact bounds change no texel of the cubes.
bool LampCubes::CheckAllocate(){
 if(!image_||!dynImage_||!copyImage_||!copy_||!api_->CreateBuffer||!api_->RetireBuffer){std::snprintf(chkText_,sizeof chkText_," | PREUVE : impossible (atlas ou copie absents)");return false;}
 WXL_VkImageDesc desc{pass_.depthFormat,columns_*3*size_,rows_*2*size_,1,VK_IMAGE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT|VK_IMAGE_USAGE_SAMPLED_BIT|VK_IMAGE_USAGE_TRANSFER_DST_BIT|VK_IMAGE_USAGE_TRANSFER_SRC_BIT,VK_IMAGE_ASPECT_DEPTH_BIT};
 VkFramebufferCreateInfo fi{VK_STRUCTURE_TYPE_FRAMEBUFFER_CREATE_INFO};fi.renderPass=pass_.renderPass;fi.attachmentCount=1;fi.width=desc.width;fi.height=desc.height;fi.layers=1;
 chkImage_=api_->CreateImage(&desc,&chkInfo_);if(chkImage_){fi.pAttachments=&chkInfo_.view;if(createFramebuffer_(device_,&fi,nullptr,&chkFramebuffer_)!=VK_SUCCESS)chkFramebuffer_={};}
 chkDynImage_=api_->CreateImage(&desc,&chkDynInfo_);if(chkDynImage_){fi.pAttachments=&chkDynInfo_.view;if(createFramebuffer_(device_,&fi,nullptr,&chkDynFramebuffer_)!=VK_SUCCESS)chkDynFramebuffer_={};}
 if(!chkImage_||!chkDynImage_||!chkFramebuffer_||!chkDynFramebuffer_){CheckRelease();std::snprintf(chkText_,sizeof chkText_," | PREUVE : atlas de controle non alloues");return false;}
 chkInit_=false;return true;
}
void LampCubes::CheckRelease(){
 if(!api_)return;
 if(chkBuffer_){api_->RetireBuffer(chkBuffer_,std::max(last_,chkSerial_));chkBuffer_=nullptr;chkSerial_=0;}
 if(chkFramebuffer_){destroyFramebuffer_(device_,chkFramebuffer_,nullptr);chkFramebuffer_={};}if(chkImage_){api_->RetireImage(chkImage_,last_);chkImage_=nullptr;}chkInfo_={};
 if(chkDynFramebuffer_){destroyFramebuffer_(device_,chkDynFramebuffer_,nullptr);chkDynFramebuffer_={};}if(chkDynImage_){api_->RetireImage(chkDynImage_,last_);chkDynImage_=nullptr;}chkDynInfo_={};
 chkInit_=false;
}
// The check atlases start as copies of the real ones (what the kept cubes hold since they were first drawn); from then on every replay
// is made twice, so both hold the same history and differ only by the bound.
void LampCubes::CheckStart(const WXL_VkRenderContext&c){
 VkImageMemoryBarrier b[4]{};for(auto&x:b){x.sType=VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;x.srcQueueFamilyIndex=x.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;x.subresourceRange={VK_IMAGE_ASPECT_DEPTH_BIT,0,1,0,1};}
 const VkImage src[2]={imageInfo_.image,dynInfo_.image},dst[2]={chkInfo_.image,chkDynInfo_.image};
 for(int i=0;i<2;++i){b[i].image=src[i];b[i].oldLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b[i].newLayout=VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;b[i].srcAccessMask=VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;b[i].dstAccessMask=VK_ACCESS_TRANSFER_READ_BIT;
  b[2+i].image=dst[i];b[2+i].oldLayout=VK_IMAGE_LAYOUT_UNDEFINED;b[2+i].newLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b[2+i].dstAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;}
 barrier_(c.cmd,VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT,VK_PIPELINE_STAGE_TRANSFER_BIT,0,0,nullptr,0,nullptr,4,b);
 VkImageCopy r{};r.srcSubresource=r.dstSubresource={VK_IMAGE_ASPECT_DEPTH_BIT,0,0,1};r.extent={columns_*3*size_,rows_*2*size_,1};
 for(int i=0;i<2;++i)copyImage_(c.cmd,src[i],VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL,dst[i],VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL,1,&r);
 for(int i=0;i<2;++i){b[i].oldLayout=VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;b[i].newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b[i].srcAccessMask=VK_ACCESS_TRANSFER_READ_BIT;
  b[2+i].oldLayout=VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL;b[2+i].newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;b[2+i].srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;}
 for(auto&x:b)x.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;
 barrier_(c.cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT|VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,0,0,nullptr,0,nullptr,4,b);
 chkInit_=true;last_=c.serial;
}
// The faces drawn this frame (the units' layer first, then the kept cubes built now), at most 48 a copy, starting at a turning
// offset so that every face is compared over the frames; each face copied twice side by side: the real one, then the check's.
void LampCubes::CheckCopy(const WXL_VkRenderContext&c){
 if(chkBuffer_)return;
 static std::vector<ChkFace> all;all.assign(size_t(capacity_)*12,ChkFace{});uint32_t n=0; // Claude 21 nov: every face, compared in turn (was the first 256: a unit layer of 400 faces was never all compared)
 for(uint32_t i=0;i<capacity_;++i){const Slot&s=slots_[i];if(s.id&&s.built==c.serial&&s.builds>0&&!s.bad)for(uint32_t f=0;f<6;++f)all[n++]={i,f,false,s.radius,f>=4&&s.nearZ>0?s.nearZ:s.nearYards,s.radius};}
 for(uint32_t i=0;i<capacity_;++i){const Slot&s=slots_[i];if(s.id&&s.dynSerial==c.serial)for(uint32_t f=0;f<6;++f)if(s.dynMask&(1u<<f))all[n++]={i,f,true,s.drawn,f>=4&&s.nearZ>0?s.nearZ:s.drawnNear,reach_&&s.unitReach>0?std::min(s.drawn,s.unitReach):s.drawn};}
 if(!n)return;
 // the kept cubes' faces first (built on few frames), every one of them; the units' faces fill the rest, turning
 uint32_t fixedN=0;while(fixedN<n&&!all[fixedN].dyn)++fixedN;
 const uint32_t take=std::min<uint32_t>(n,48),fixedTake=std::min(fixedN,take),dynN=n-fixedN,start=dynN?uint32_t(chkFrames_*48%dynN):0;
 for(uint32_t k=0;k<fixedTake;++k)chkList_[k]=all[k];
 for(uint32_t k=fixedTake;k<take;++k)chkList_[k]=all[fixedN+(start+k-fixedTake)%dynN];
 const uint32_t texel=pass_.depthFormat==VK_FORMAT_D32_SFLOAT?4u:2u;chkFaceBytes_=size_*size_*texel;
 WXL_VkBufferDesc bd{VkDeviceSize(chkFaceBytes_)*2*take,VK_BUFFER_USAGE_TRANSFER_DST_BIT,WXL_VK_MEMORY_HOST};chkBufInfo_={};
 chkBuffer_=api_->CreateBuffer(&bd,&chkBufInfo_);
 if(!chkBuffer_||!chkBufInfo_.mapped||!chkBufInfo_.buffer){if(chkBuffer_)api_->RetireBuffer(chkBuffer_,c.serial);chkBuffer_=nullptr;std::snprintf(chkText_,sizeof chkText_," | PREUVE : tampon refuse");return;}
 const VkImage img[4]={imageInfo_.image,dynInfo_.image,chkInfo_.image,chkDynInfo_.image};
 VkImageMemoryBarrier b[4]{};for(int i=0;i<4;++i){auto&x=b[i];x.sType=VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;x.srcQueueFamilyIndex=x.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;x.subresourceRange={VK_IMAGE_ASPECT_DEPTH_BIT,0,1,0,1};x.image=img[i];
  x.oldLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;x.newLayout=VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;x.srcAccessMask=VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;x.dstAccessMask=VK_ACCESS_TRANSFER_READ_BIT;}
 barrier_(c.cmd,VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,VK_PIPELINE_STAGE_TRANSFER_BIT,0,0,nullptr,0,nullptr,4,b);
 for(uint32_t k=0;k<take;++k){const ChkFace&f=chkList_[k];
  VkBufferImageCopy r{};r.imageSubresource={VK_IMAGE_ASPECT_DEPTH_BIT,0,0,1};r.imageOffset={int32_t(((f.cube%columns_)*3+f.face%3)*size_),int32_t(((f.cube/columns_)*2+f.face/3)*size_),0};r.imageExtent={size_,size_,1};
  r.bufferOffset=VkDeviceSize(chkFaceBytes_)*(2*k);copy_(c.cmd,f.dyn?dynInfo_.image:imageInfo_.image,VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL,chkBufInfo_.buffer,1,&r);
  r.bufferOffset=VkDeviceSize(chkFaceBytes_)*(2*k+1);copy_(c.cmd,f.dyn?chkDynInfo_.image:chkInfo_.image,VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL,chkBufInfo_.buffer,1,&r);}
 VkBufferMemoryBarrier hb{VK_STRUCTURE_TYPE_BUFFER_MEMORY_BARRIER};hb.srcAccessMask=VK_ACCESS_TRANSFER_WRITE_BIT;hb.dstAccessMask=VK_ACCESS_HOST_READ_BIT;hb.srcQueueFamilyIndex=hb.dstQueueFamilyIndex=VK_QUEUE_FAMILY_IGNORED;hb.buffer=chkBufInfo_.buffer;hb.offset=0;hb.size=VK_WHOLE_SIZE;
 for(auto&x:b){x.oldLayout=VK_IMAGE_LAYOUT_TRANSFER_SRC_OPTIMAL;x.newLayout=VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL;x.srcAccessMask=VK_ACCESS_TRANSFER_READ_BIT;x.dstAccessMask=VK_ACCESS_SHADER_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_READ_BIT|VK_ACCESS_DEPTH_STENCIL_ATTACHMENT_WRITE_BIT;}
 barrier_(c.cmd,VK_PIPELINE_STAGE_TRANSFER_BIT,VK_PIPELINE_STAGE_HOST_BIT|VK_PIPELINE_STAGE_COMPUTE_SHADER_BIT|VK_PIPELINE_STAGE_FRAGMENT_SHADER_BIT|VK_PIPELINE_STAGE_EARLY_FRAGMENT_TESTS_BIT|VK_PIPELINE_STAGE_LATE_FRAGMENT_TESTS_BIT,0,0,nullptr,1,&hb,4,b);
 chkFaces_=take;chkSerial_=c.serial;last_=c.serial;
}
// Claude CPU-A: a replay to be made again on this thread after the MidPass's replays (its views and boxes copied; the pointers set when made).
void LampCubes::Defer(const WXL_VkReplayViewsDesc&d,VkFramebuffer fb){
 if(refCount_==refs_.size())refs_.emplace_back();RefCall&r=refs_[refCount_++];r.desc=d;r.desc.framebuffer=fb;r.desc.flags&=~(WXL_VK_REPLAY_ASIDE|WXL_VK_REPLAY_PRESKIN|WXL_VK_REPLAY_PRESKIN_CONTROL); /* Claude ANIM1: the reference animated per face */
 const uint32_t n=std::min<uint32_t>(d.viewCount,WXL_VK_REPLAY_MAX_VIEWS);std::memcpy(r.views,d.views,n*sizeof(WXL_VkReplayView));r.desc.viewCount=n;r.desc.viewStride=sizeof(WXL_VkReplayView);
 const uint32_t b=d.excludeBoxes?std::min<uint32_t>(d.excludeBoxCount,256+5):0u;if(b)std::memcpy(r.boxes,d.excludeBoxes,size_t(b)*6*sizeof(float));r.desc.excludeBoxCount=b;
}
void LampCubes::CheckRead(){
 const uint8_t*p=static_cast<const uint8_t*>(chkBufInfo_.mapped);const uint32_t texel=pass_.depthFormat==VK_FORMAT_D32_SFLOAT?4u:2u;
 uint32_t dyn=0,stat=0;
 for(uint32_t k=0;k<chkFaces_;++k){const uint8_t*a=p+size_t(chkFaceBytes_)*(2*k),*b=a+chkFaceBytes_;(chkList_[k].dyn?dyn:stat)++;
  chkTexels_+=chkFaceBytes_/texel;
  if(std::memcmp(a,b,chkFaceBytes_)!=0){uint64_t d=0,nearD=0;
   // Claude INST1-CUBES: each differing texel's distance to the light (its depth s on the face's axis z = -n c / (s - c), c = r / (r - n),
   // times the texel's ray length): nearer than the cull radius on either side, it can matter (a surface the light reaches there
   // might read it); beyond, no lit surface lies behind it from the light. s = 1: nothing there.
   const ChkFace&cf=chkList_[k];const double cc=cf.r>cf.n?double(cf.r)/(double(cf.r)-cf.n):0.0;const uint32_t N=size_;
   auto dist=[&](const uint8_t*q,uint32_t idx)->double{double s;if(texel==4){float v;std::memcpy(&v,q,4);s=v;}else{uint16_t v;std::memcpy(&v,q,2);s=v/65535.0;}
    if(!(s<1.0)||cc<=0)return 1e30;const double z=-double(cf.n)*cc/(s-cc),u=((idx%N)+.5)/N*2-1,w=((idx/N)+.5)/N*2-1;return z*std::sqrt(1+u*u+w*w);};
   for(uint32_t t=0,idx=0;t<chkFaceBytes_;t+=texel,++idx)if(std::memcmp(a+t,b+t,texel)!=0){++d;if(std::min(dist(a+t,idx),dist(b+t,idx))<double(cf.cull))++nearD;}
   chkDiffTexels_+=d;chkNearTexels_+=nearD;++chkDiffFaces_;
   if(std::FILE*f=std::fopen("Logs\\preuve-cubes.txt","a")){std::fprintf(f,"DIFFERENCE : image %llu, cube %u face %u (%s), %llu texels differents, dont %llu plus pres de la lampe que le rayon de tri (%.1f yd)\n",(unsigned long long)chkSerial_,cf.cube,cf.face,cf.dyn?"unites":"decor fixe",(unsigned long long)d,(unsigned long long)nearD,double(cf.cull));std::fclose(f);}}}
 chkFaceCount_+=chkFaces_;++chkFrames_;chkStatTotal_+=stat;
 std::snprintf(chkText_,sizeof chkText_," | %s : %llu images, %llu faces (dont %llu du decor fixe), %llu texels compares, %llu differents (%llu faces), dont %llu plus pres que le rayon de tri",
  skin_==2?"PREUVE ANIM1 (animes une fois)":skin_==3?"TEMOIN ANIM1 (sommet voisin)":aside_==2?"PREUVE fil a part (CPU-A)":aside_==3?"TEMOIN thread principal (CPU-A)":"PREUVE sphere exacte",(unsigned long long)chkFrames_,(unsigned long long)chkFaceCount_,(unsigned long long)chkStatTotal_,(unsigned long long)chkTexels_,(unsigned long long)chkDiffTexels_,(unsigned long long)chkDiffFaces_,(unsigned long long)chkNearTexels_);
 if(chkFrames_%64==1||stat)if(std::FILE*f=std::fopen("Logs\\preuve-cubes.txt","a")){std::fprintf(f,"%s\n",chkText_+3);std::fclose(f);}
 api_->RetireBuffer(chkBuffer_,chkSerial_);chkBuffer_=nullptr;chkSerial_=0;
}
bool LampCubes::Shutdown(uint64_t completed){if(!api_)return true;if(completed<last_)return false;if(probeBuffer_){api_->RetireBuffer(probeBuffer_,last_);probeBuffer_=nullptr;probeSerial_=0;} /* Claude LV24 */Off();Release();for(auto&s:slots_)s=Slot{};api_=nullptr;std::snprintf(info_,sizeof info_,"off");return true;}
}
