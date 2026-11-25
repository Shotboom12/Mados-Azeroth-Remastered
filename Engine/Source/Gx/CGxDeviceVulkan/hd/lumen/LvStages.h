#pragma once
#include "LvGpu.h"
#include <vector>
#include "LvLamps.h"
namespace HD::Lumen {
// A shared Gpu instance is owned by the native integration. Resize is called outside Record.
class LampStage {
public:float sourceScale=1.f; // Claude LV39: hdLvLampSource, times the shader's source radii (0 = hard shadows)
 float carrierClear=1.2f; // Claude LV39: hdLvCarrierClear, yards round a moving light where units do not shadow it
 int optimization=0,optimizationCheck=0;
 bool Init(Gpu&g){gpu_=&g;return true;}bool Resize(uint32_t width,uint32_t height,uint32_t scale=2);
 bool Record(const Uniforms& common,const Source::LampTable&,const Source::LampTiles&,Texture depth,Texture fogOpacity,Texture occluderDepth,float visibilityBlend,const std::array<float,4>&sun,const Source::CarrierBody&,bool surfaces=true,bool halos=true,bool useTiles=true);
 bool UploadTable(const Source::LampTable&,const Source::LampTiles&);
 bool RecordSurfaces(const Uniforms&,Texture depth,Texture occluder,const std::array<float,4>&sun,const Source::CarrierBody&,bool blur=true,bool useTiles=true,Texture material={},Texture normals={},float normalCheck=1,float lampView=0,const std::array<float,4>&postUp={0,0,0,0},Texture cubes={},float cubeMode=0,const std::array<float,4>*cubeRows=nullptr,Texture movers={} /* Claude LV36: binding 15 */); // Claude LV18: hdLvNormalCheck ; LV19: hdLvLampView 6 ; LV21: world up in view + hdLvLampPostClear ; LV22: shadow cubes (cubeRows: LampCubes::Capacity + 1 rows)
 bool RecordHalos(const Uniforms&,Texture depth,Texture fog,float visibilityBlend,bool fogIsTransmittance=false,bool useTiles=true,std::array<float,4> fogUV={0,0,1,1});
 bool ReleaseOptimizationProof(uint64_t completed);
 void Shutdown();Target& Surfaces(){return surfaces_;}Target& Table(){return table_;} /* Claude LV27: the water lamps read it */Target& Halos(){return halos_;}void Reset(){valid_=false;}
private:Gpu*gpu_=nullptr;Target table_,tiles_,visibility_[2],surfaces_,halos_,blur_;int surfaceSlots_=0,slots_=0;unsigned ping_=0;bool valid_=false;uint32_t width_=0,height_=0,scale_=2;
 Target proofIntermediate_;Target lists_; /* Claude GPU-B : listes de lampes par carre 16x16 */
 Readback proofOriginal_,proofOptimized_,proofRepeat_;bool proofHasRepeat_=false; /* Claude GPU-B : A, B, A' */
 int proofKind_=0;
 uint64_t proofNext_=0;
 void PollOptimizationProof(uint64_t completed);
 bool PrepareOptimizationProof(uint64_t completed);
 void RecordOptimizationProof(Target& original,Target& optimized,int kind);
};
// Claude 2026-11-15 lot LV22 (hdLvLampCubes): one shadow cube per nearby lamp. A depth atlas of Capacity cubes (Columns x Rows blocks
// of 3 x 2 faces); each cube is the device's replay of the frame's STATIC world (no unit, trees at rest, no grass) seen from the
// lamp, drawn ON what the cube already holds (LOAD): a caster the camera saw once stays in it, so whether a point is in the lamp's
// shadow no longer depends on the camera. Built in a MidPass at AfterOpaqueWorld, read by LampSurfaces in the same frame.
// Claude LV37: moving (the lantern, a spell): drawn again every frame where it stands, with its own near plane on all six faces
// (its Lumenveil clearance, emit.x); a fixed light keeps hdLvLampCubeNear / NearZ.
struct CubeWish {uint32_t id=0;float world[3]{};float radius=0;float nearYards=0;bool moving=false;float unitReach=0; /* Claude PERSO2: 0 = the whole radius */};
class LampCubes {
public:
 // Claude LV34: no fixed count. Every fixed light that lights surfaces gets its cube: hdLvLampCount lamps + the window slots
 // (Configure's capacity); MaxCapacity is the table's own most (kMaxLampCount + kWindowSlots), never a choice.
 // Claude LV35: + the far halo slots: a far lamp mirrored on the water is judged by its own cube too.
 // Claude LV37: + the spells' and the lantern's slots: every light that lights a surface has its cube.
 static constexpr uint32_t CubeBudget=256,kAtlasMaxSide=16384; // Claude LV41: the most cubes kept (VRAM: two D32 atlases), the largest image side
 static constexpr uint32_t MaxCapacity=uint32_t(Source::kMaxLampCount+Source::kWindowSlots+Source::kFarHaloSlots+Source::kEffectSlots+Source::kLanternSlots);
 // Claude LV35: the largest radius a cube is ever asked: twice the farthest lamp searched (kLampSearchYards, the water's rule in
 // LvSuite), and the doubling steps may overshoot that by up to two: 4 x kLampSearchYards.
 static constexpr float MaxRadius=4.f*Source::kLampSearchYards;
 bool Init(const WXL_VkRenderApi*);
 // Scene thread, before the world is drawn (Suite::Prepare): turns the cubes on/off, (re)allocates the atlas.
 // Claude LV24: nearZ (> 0) = yards left out of the up and down faces only (0: nearYards); probe = hdLvLampCubeProbe (a new non-zero
 // value copies the nearest lamp's cube to a host buffer, written to Logs\lumen-cube-N.bin/.txt once the GPU is done).
 // Claude LV25: cull = hdLvLampCubeCull (0 both faces, 1 each draw's own culling, 2 the same with the front face reversed).
 // Claude LV34: capacity = the cubes the atlas holds (1..MaxCapacity); a new capacity reallocates the atlas (every cube drawn again).
 bool Configure(bool on,uint32_t faceSize,float nearYards,float nearZ,uint32_t perFrame,uint64_t completed,int probe=0,int cull=0,int check=0,uint32_t capacity=MaxCapacity); // Claude PREUVE1: check
 // Suite::Opaque: the lamps wanted, nearest first; the next MidPasses build them.
 void Wish(int map,const CubeWish*,uint32_t count);
 // Claude LV23: the units near the camera (feet xyz, bounding radius) and hdLvLampCubeOwn, for the next MidPasses' boxes.
 void Units(const float (*units)[4],int count,float ownDepth);
 int Cube(uint32_t id)const; // the cube holding a replay for this lamp, or -1
 // Claude LV34: the cube's radius, and how far its light has faded in (0..1) kLampFadeSeconds after the cube's first drawing.
 float Radius(int cube)const;float Fade(int cube,double seconds);uint32_t Count()const{return capacity_;}
 // Claude LV35: the radius this light's cube is asked for (0: no cube yet). A new radius redraws the cube, the old one is read until then.
 float Wanted(uint32_t id)const;
 // Claude LV37: where the cube was drawn and its near plane; allFaces: that near for all six faces (a moving light's).
 void Centre(int cube,float(&world)[3],float&nearPlane,bool&allFaces)const;
 // Claude LV35: a frame that reads the atlas (LampSurfaces, WaterLamps) keeps it alive until that frame is done.
 void Used(uint64_t serial){if(serial>last_)last_=serial;}
 std::array<float,4> AtlasRow()const; // face size, columns, near of the side faces, near of the up and down faces (Claude LV34: every cube's)
 Texture Atlas()const;
 // Claude LV36: the movers' layer: the same atlas layout, each frame only the faces of a cube that see a unit (players, creatures,
 // mounts), drawn with the units alone. DynamicMask: those faces (bit f = face f) when they were drawn THIS frame, else 0.
 Texture DynamicAtlas()const;uint32_t DynamicMask(int cube,uint64_t serial)const;
 void Persos(bool on){persos_=on;} /* Claude MESURE */void Skin(int m){skin_=m;} /* Claude ANIM1 */void PersoReach(bool on){reach_=on;} /* Claude PERSO2 */
 bool Ready()const{return api_&&on_&&image_&&framebuffer_;}
 bool Shutdown(uint64_t completed);uint64_t LastUsed()const{return last_;}const char* Info()const{return info_;}
 LampCubes()=default;LampCubes(const LampCubes&)=delete;LampCubes&operator=(const LampCubes&)=delete;
private:
 struct Slot {uint32_t id=0;float world[3]{};float radius=0,nearYards=0,nearZ=0;uint32_t builds=0;uint64_t wished=0,built=0;bool clear=true,bad=false;double since=-1; /* Claude LV34: when first seen drawn */float drawn=0;bool stale=false; /* Claude LV35: the radius in the atlas; a new radius waits to be drawn */uint32_t dynMask=0;uint64_t dynSerial=0; /* Claude LV36 */bool moving=false;float drawnWorld[3]{},drawnNear=0; /* Claude LV37: where and how it was drawn */float unitReach=0; /* Claude PERSO2 */};
 static void __cdecl MidPassThunk(void*,const WXL_VkRenderContext*);void MidPass(const WXL_VkRenderContext&);void Static(const WXL_VkRenderContext&);void Dynamic(const WXL_VkRenderContext&); /* Claude LV36 */bool Allocate(uint32_t size,uint32_t capacity);void Release();void Off();
 float NearZ()const{return nearZ_>0?nearZ_:near_;}void Probe(const WXL_VkRenderContext&);void WriteProbe(); // Claude LV24
 const WXL_VkRenderApi*api_=nullptr;VkDevice device_{};WXL_VkShadowPass pass_{};
 PFN_vkCreateFramebuffer createFramebuffer_=nullptr;PFN_vkDestroyFramebuffer destroyFramebuffer_=nullptr;PFN_vkCmdPipelineBarrier barrier_=nullptr;PFN_vkCmdClearDepthStencilImage clearDepth_=nullptr;
 void*image_=nullptr;WXL_VkImageInfo imageInfo_{};VkFramebuffer framebuffer_{};void*handle_=nullptr;uint32_t size_=0,perFrame_=2;float near_=.5f;
 uint32_t capacity_=0,columns_=0,rows_=0; // Claude LV34: the atlas's cubes, columns_ x rows_ blocks of 3 x 2 faces
 void*dynImage_=nullptr;WXL_VkImageInfo dynInfo_{};VkFramebuffer dynFramebuffer_{};bool dynInitialized_=false; // Claude LV36
 bool pending_=false; // Claude LV35: a new size or count waits for the GPU to be done with the atlas; no cube is drawn meanwhile
 bool initialized_=false,on_=false,capture_=false;std::array<Slot,MaxCapacity>slots_{};uint64_t wishes_=0,last_=0;int map_=-1;char info_[720]="off"; /* Claude PERF1: was 200, + CPU times; PERF2 720 */
 std::array<std::array<float,4>,256>units_{}; /* Claude LV41: was 64 */int unitCount_=0;float own_=1.5f; // Claude LV23
 // Claude LV24: hdLvLampCubeNearZ and the probe (one copy in flight; its slot as it was when copied).
 int cull_=0; // Claude LV25: hdLvLampCubeCull
 float nearZ_=0;int probeAsked_=0,probeSeq_=0;bool probeWanted_=false;uint32_t nearest_=0;
 // Claude LV39: hdLvLampCubeProbe -K sweeps the K nearest lamps' cubes, one per copy (their ids, nearest first, as the wishes gave them).
 static constexpr uint32_t kSweepMax=96;uint32_t wishIds_[kSweepMax]{};uint32_t wishCount_=0,sweepIdx_=0,sweepLeft_=0;
PFN_vkCmdCopyImageToBuffer copy_=nullptr;
 // Claude PREUVE1 hdShadowBoundsCheck: the same frame's cubes drawn again with the bound before PERF2 (WXL_VK_REPLAY_OLD_BOUNDS) into
 // their own two atlases (a copy of the real ones when the check starts), then the faces drawn this frame copied side by side to the
 // host and compared bit for bit once the GPU is done.
 PFN_vkCmdCopyImage copyImage_=nullptr;int check_=0;bool chkInit_=false;
 void*chkImage_=nullptr;WXL_VkImageInfo chkInfo_{};VkFramebuffer chkFramebuffer_{};void*chkDynImage_=nullptr;WXL_VkImageInfo chkDynInfo_{};VkFramebuffer chkDynFramebuffer_{};
 void*chkBuffer_=nullptr;WXL_VkBufferInfo chkBufInfo_{};uint64_t chkSerial_=0;uint32_t chkFaces_=0,chkFaceBytes_=0;
 struct ChkFace{uint32_t cube,face;bool dyn;float r=0,n=0,cull=0; /* Claude INST1-CUBES: the face's far radius, near plane and cull radius when drawn */};ChkFace chkList_[192]{};
 uint64_t chkStatTotal_=0,chkFrames_=0,chkFaceCount_=0,chkTexels_=0,chkDiffTexels_=0,chkDiffFaces_=0,chkNearTexels_=0;char chkText_[300]=""; /* Claude INST1-CUBES: chkNearTexels_ = the differing texels nearer the light than the cull radius */
 bool CheckAllocate();void CheckRelease();void CheckStart(const WXL_VkRenderContext&);void CheckCopy(const WXL_VkRenderContext&);void CheckRead();
 // Claude CPU-A hdLvCubeAside: 1 = the replays recorded by the device's replay thread (BeginReplayAside, WXL_VK_REPLAY_ASIDE) while this
 // thread goes on with the frame; 2 = proof: 1, and every replay made again on this thread, after them, with the SAME flags into the check
 // atlases (compared bit for bit as PREUVE1's); 3 = control: 0 and the same check; 0 = every replay on this thread (before CPU-A).
 int aside_=1;bool asideNow_=false;
 int skin_=1; /* Claude ANIM1 hdLvCubeSkin */bool persos_=true; /* Claude MESURE hdLvCubePersos */bool reach_=true; /* Claude PERSO2 hdLvPersoReach */
 struct RefCall{WXL_VkReplayViewsDesc desc;WXL_VkReplayView views[WXL_VK_REPLAY_MAX_VIEWS];float boxes[(256+5)*6];};std::vector<RefCall>refs_;uint32_t refCount_=0;
 void Defer(const WXL_VkReplayViewsDesc&,VkFramebuffer);
public:
 void Aside(int mode){if(mode!=aside_){chkFrames_=chkFaceCount_=chkTexels_=chkDiffTexels_=chkDiffFaces_=chkStatTotal_=chkNearTexels_=0;chkText_[0]=0;}aside_=mode;} // Claude CPU-A: a new mode, new counts
private:
 void*probeBuffer_=nullptr;WXL_VkBufferInfo probeInfo_{};uint64_t probeSerial_=0;Slot probeSlot_{};uint32_t probeSize_=0,probeCube_=0;
};
class FogStage {
public:bool Init(Gpu&g){gpu_=&g;return true;}bool Resize(uint32_t width,uint32_t height,uint32_t scale=2);
 // march constants include c12..35 source FogLayer[4] and c38..66 helper constants; see binding contract.
 bool Record(const Uniforms& march,const Uniforms& temporal,const std::array<Texture,16>& inputs,unsigned quality,bool memoryReady,bool reset,bool fast);
 void Shutdown();Target& Output(){return history_[ping_];}
private:Gpu*gpu_=nullptr;Target current_,history_[2];unsigned ping_=0;bool valid_=false;
};
class SpellStage {
public:bool Init(Gpu&g){gpu_=&g;return true;}bool Resize(uint32_t width,uint32_t height);
 bool Record(const Uniforms& common,Texture sceneBefore,Texture sceneNow,Texture depthBefore,Texture depthNow,bool swapRB=false);
 void Shutdown();Target& Measurements(){return reduced_;}uint32_t Columns()const{return columns_;}uint32_t Rows()const{return rows_;}
private:Gpu*gpu_=nullptr;Target gatherLight_,gatherPlace_,reduced_;uint32_t width_=0,height_=0,columns_=0,rows_=0;
 // Claude GATHER1 hdLvGatherOpt : 1 = un fil par pixel (meme somme, meme ordre), 0 = avant, 2 = preuve (les deux noyaux, cases comparees
 // octet par octet, Logs\lumen-preuve.txt), 3 = temoin (l'optimise avec un autre seuil : la preuve doit trouver des differences).
public:static inline int opt=1;
private:Target proofLight_,proofPlace_;Readback proofRead_[4];uint64_t proofNext_=0;int proofMode_=0;void PollProof(uint64_t done);bool Gather(const Uniforms&,const std::array<Texture,16>&);
};
}
