#include "LvSuite.h"
#include "Engine/Source/Gx/GxSeam.h" // Claude LV28: the Cata water's waves (g_gxCataWater)
#include <algorithm>
#include <cmath>
#include <cstring>
#include <cstddef>
namespace HD::Lumen {
bool SceneInputs(const WXL_VkStageContext&c,VkRect2D world,const Source::FrameInputs&env,Source::FrameInputs&f){if(!c.sceneValid||!c.scene||!world.extent.width||!world.extent.height||world.offset.x<0||world.offset.y<0||!std::isfinite(c.viewport.x)||!std::isfinite(c.viewport.y)||!std::isfinite(c.viewport.width)||!std::isfinite(c.viewport.height)||std::abs(c.viewport.width-world.extent.width)>.01f||std::abs(c.viewport.height-world.extent.height)>.01f)return false;
 f=env;for(int k=0;k<3;++k){if(!std::isfinite(c.scene->cameraPos[k]))return false;f.camPos[k]=c.scene->cameraPos[k];}DepthMapping map;if(!MapNativeProjection(c.scene->projection,c.viewport.minDepth,c.viewport.maxDepth,f.glProjection,map))return false;for(int k=0;k<16;++k)if(!std::isfinite(c.scene->view[k]))return false;std::copy(c.scene->view,c.scene->view+16,f.cameraRelativeView);f.cameraRelativeView[12]=f.cameraRelativeView[13]=f.cameraRelativeView[14]=0;f.cameraRelativeView[15]=1;
 f.viewport={uint32_t(world.offset.x),uint32_t(world.offset.y),world.extent.width,world.extent.height,c.viewport.minDepth,c.viewport.maxDepth};
 // Fold the actual native fractional viewport (D3D pixel shift + FSR jitter) into the projection once.
 f.glProjection[8]+=2*(c.viewport.x-world.offset.x)/world.extent.width;f.glProjection[9]-=2*(c.viewport.y-world.offset.y)/world.extent.height;return true;
}
bool Suite::Fail(const char*s){status_=s;previousValid_=false;fogCpu_.ResetHistory();return false;}
bool Suite::Init(const WXL_VkRenderApi*a,const char*catalogue,const char*regions){if(api_)return api_==a;if(!a||!gpu_.Init(a))return Fail("Vulkan init failed");api_=a;sized_=memoryMade_=prepared_=opaque_=fogWanted_=tableUploaded_=terrainReady_=previousValid_=false;serial_=composedFog_=measuredSerial_=beforeSerial_=finalSerial_=0;lastSeconds_=ceilingSeconds_=-1;ceilingGate_=0;terrainVersion_=floorVersion_=~0u;std::fill(phaseCoarse_,phaseCoarse_+3,0);std::fill(phaseFine_,phaseFine_+3,0);std::fill(phaseCloud_,phaseCloud_+2,0);available_={};if(!lamps_.Init(catalogue?catalogue:"")||!ambiance_.Init(regions?regions:""))return Fail("catalogue/profile invalid");if(!noise_.Init(gpu_))return Fail("noise allocation failed");lampGpu_.Init(gpu_);cubes_.Init(a); /* Claude LV22: without the replay the lamps keep the screen-space shadow */fogGpu_.Init(gpu_);captures_.Init(gpu_);composite_.Init(gpu_);spells_.Init();fogCpu_.Init();available_.backend=available_.ambiance=true;status_="off";return true;}
bool Suite::Prepare(const NativeFrame&n,Controls c,VkExtent2D render,VkRect2D world,uint64_t done){
 prepared_=false;opaque_=false;fogWanted_=false;tableUploaded_=false;composedFog_=0;if(!api_)return false;c.Clamp();if(!c.spells){captures_.Cancel(done);spells_.Init();}controls_=c;controls_.memory=c.memory&&c.fog&&c.shafts;cubes_.Aside(c.cubeAside); /* Claude CPU-A */cubes_.Persos(c.cubePersos!=0);cubes_.Skin(c.cubeSkin); /* Claude ANIM1 */cubes_.PersoReach(c.persoReach!=0) /* Claude PERSO2 */; /* Claude MESURE */cubes_.Configure(c.lamps&&c.lampCubes>0,uint32_t(c.lampCubeSize),c.lampCubeNear,c.lampCubeNearZ,uint32_t(c.lampCubeUpdates),done,c.lampCubeProbe,c.lampCubeCull,(c.cubeAside>=2||c.cubeSkin>=2)?1:c.boundsCheck, /* Claude ANIM1: 2 and 3 compare with the units animated per face */uint32_t(std::clamp(c.lampCount,0,Source::kMaxLampCount)+Source::kWindowSlots+Source::kFarHaloSlots+Source::kEffectSlots+Source::kLanternSlots)); /* Claude LV34: a cube for every lamp and window; LV35: and every far lamp on the water; LV37: the spells and the lantern */ /* Claude LV22, LV24: near of the up/down faces, probe; LV25: culling */native_=n;opaqueDepth_={};available_.lamps=lamps_.Catalog().Loaded()&&n.surfacePolicyComplete;available_.fog=available_.halos=available_.shafts=available_.memory=available_.spells=available_.blur=true;available_.terrain=n.height.probe!=nullptr;
 bool asked=c.lamps||c.halos||c.fog||c.spells;if(!asked){previousValid_=false;lastSeconds_=-1;fogCpu_.ResetHistory();status_="off";return true;}
 if(n.environment.unitCount<0||n.environment.unitCount>Source::kMaxUnitInputs||n.environment.corpseCount<0||n.environment.corpseCount>Source::kMaxCorpseInputs||n.environment.mapId<0||!std::isfinite(n.environment.seconds)||n.policyCount>n.policies.size()||!render.width||!render.height||render.width>16384||render.height>16384||world.offset.x<0||world.offset.y<0||!world.extent.width||!world.extent.height||uint64_t(world.offset.x)+world.extent.width>render.width||uint64_t(world.offset.y)+world.extent.height>render.height)return Fail("invalid scene snapshot");
 for(float x:{n.environment.dayFraction,n.environment.weatherIntensity,n.environment.sunElevation,n.environment.moonElevation,n.environment.farClip,n.environment.indoors})if(!std::isfinite(x))return Fail("invalid environment values");
 for(float x:n.environment.camPos)if(!std::isfinite(x))return Fail("invalid camera");double len=0;for(float x:n.environment.toLight){if(!std::isfinite(x))return Fail("invalid sunlight");len+=double(x)*x;}if(len<1e-10)return Fail("invalid sunlight direction");
 Source::SetEffectTuning(native_.spellGain,native_.spellPure);measuredCount_+=captures_.Poll(done,spells_,lamps_.Catalog());spells_.Record(n.environment);
 uint32_t scale=c.quality==1?4:2;bool changed=!sized_||render.width!=extent_.width||render.height!=extent_.height||world.offset.x!=world_.offset.x||world.offset.y!=world_.offset.y||world.extent.width!=world_.extent.width||world.extent.height!=world_.extent.height||scale!=scale_;
 if(changed){sized_=false;previousValid_=false;fogCpu_.ResetHistory();if(!captures_.Resize(render.width,render.height,done,world))return Fail("resize deferred until captures complete");if(!lampGpu_.Resize(world.extent.width,world.extent.height,scale)||!fogGpu_.Resize(world.extent.width,world.extent.height,scale)||!composite_.Resize(render.width,render.height))return Fail("resize failed");if(!neutralFog_.handle&&!gpu_.Create(neutralFog_,1,1,VK_FORMAT_R16G16B16A16_SFLOAT))return false;if(!terrain_.handle&&!gpu_.Create(terrain_,512,512,VK_FORMAT_R32_SFLOAT))return false;if(!floors_.handle&&!gpu_.Create(floors_,128,128,VK_FORMAT_R32G32B32A32_SFLOAT))return false;Source::FrameInputs warm=n.environment;warm.viewport={uint32_t(world.offset.x),uint32_t(world.offset.y),world.extent.width,world.extent.height,0,1};if(!lamps_.Resize(warm))return Fail("CPU tile resize failed");extent_=render;world_=world;scale_=scale;sized_=false;previousValid_=false;gpu_.Retire(edges_);if(!gpu_.Create(edges_,(world.extent.width+7)/8,(world.extent.height+31)/32,VK_FORMAT_R16G16B16A16_SFLOAT))return false;gpu_.Retire(opaqueFallback_);if(api_->structSize<offsetof(WXL_VkRenderApi,GetOpaqueDepth)+sizeof(api_->GetOpaqueDepth)||!api_->GetOpaqueDepth){if(!gpu_.Create(opaqueFallback_,render.width,render.height,VK_FORMAT_R32_SFLOAT))return false;}sized_=true;}
 if(controls_.memory&&!memoryMade_){if(!memory_.Init(gpu_))return Fail("occluder memory unavailable");memoryMade_=true;}
 frame_=n.environment;frame_.viewport={uint32_t(world.offset.x),uint32_t(world.offset.y),world.extent.width,world.extent.height,0,1};frame_.unitCount=std::clamp(frame_.unitCount,0,Source::kMaxUnitInputs);config_=ambiance_.Record(frame_,c,n.numericBase);/* Claude 2026-11-13 lot LV3: climat de zone comme Lumenveil 0.1.1 (hooks.cpp:227-231) : zones seches/vertes (frame_.dryLand/greenLand, fondu 4 s) puis densite par zone (ZoneDensity) ; avant : jamais appele */Source::GlobalZoneClimate().Update(frame_,config_);{Source::Config zoned;config_=Source::ZonedLook(config_,Source::GlobalZoneClimate().DensityFactor(),zoned);}fog_=fogCpu_.Record(frame_,c,config_,n.hasAuthored?&n.authored:nullptr,n.height.probe?&n.height:nullptr);
 if(n.dayLightWeight>=0&&n.dayLightWeight<=1){float w=n.dayLightWeight;bool primaryMoon=frame_.lightIsMoon;if((primaryMoon&&w>0)||(!primaryMoon&&w<1)){auto alternative=frame_;alternative.lightIsMoon=!primaryMoon;auto other=Source::BuildFogParams(alternative,config_,n.hasAuthored?&n.authored:nullptr);static_assert(offsetof(Source::FogParams,linear)==776,"float-only native fog blend schema changed; review before porting");constexpr size_t words=776/sizeof(float);float a[words],b[words];std::memcpy(a,primaryMoon?&fog_:&other,sizeof a);std::memcpy(b,primaryMoon?&other:&fog_,sizeof b);for(size_t i=0;i<words;++i)a[i]+=(b[i]-a[i])*w;std::memcpy(&fog_,a,sizeof a);}}
 if(n.smoothAuthoredWeights&&n.hasAuthored)for(int i=0;i<std::min(3,n.authored.layerCount);++i)fog_.layers[i].shadowed=c.shafts?std::clamp(n.shadowWeights[i],0.f,1.f):0;
 for(unsigned i=0;i<n.policyCount;++i){auto&p=n.policies[i];if(p.nativeColour&&!(p.catalogueIdentity&0x30000000u))lamps_.Catalog().SetNativeColour(frame_.mapId,p.catalogueIdentity&0x0FFFFFFFu,p.rgb,(p.catalogueIdentity&0x80000000u)!=0);}
 double dt=lastSeconds_>=0&&frame_.seconds>=lastSeconds_?std::min(.25,frame_.seconds-lastSeconds_):0;lastSeconds_=frame_.seconds;double heading=config_.windDirection*3.14159265358979/180.,speed=fog_.windSpeed;for(int k=0;k<2;++k){double direction=k?std::sin(heading):std::cos(heading);phaseCoarse_[k]-=dt*speed*direction/(4*std::max(1.f,config_.driftSize));phaseFine_[k]-=dt*speed*1.6*(k?std::sin(heading+.7):std::cos(heading+.7))*5/(4*std::max(1.f,config_.driftSize));phaseCloud_[k]+=dt*fog_.cloudWind[k];}phaseCoarse_[2]-=dt*speed*.05/(4*std::max(1.f,config_.driftSize));phaseFine_[2]-=dt*speed*.15*5/(4*std::max(1.f,config_.driftSize));
 // Claude LV27 hdLvWaterLamps: the depth before the liquids and a copy of the frame, full size; released when off.
 if(c.waterLamps){if(waterBefore_.handle&&(waterBefore_.extent.width!=render.width||waterBefore_.extent.height!=render.height)){gpu_.Retire(waterBefore_);gpu_.Retire(waterScene_);}if(!waterBefore_.handle&&(!gpu_.Create(waterBefore_,render.width,render.height,VK_FORMAT_R32_SFLOAT)||!gpu_.Create(waterScene_,render.width,render.height,VK_FORMAT_R8G8B8A8_UNORM))){gpu_.Retire(waterBefore_);gpu_.Retire(waterScene_);}}else if(waterBefore_.handle){gpu_.Retire(waterBefore_);gpu_.Retire(waterScene_);}
 prepared_=true;if(!std::strcmp(status_,"off"))status_="preparing";return true;
}
bool Suite::Opaque(const WXL_VkStageContext&ctx){opaque_=false;fogWanted_=false;tableUploaded_=false;if(!prepared_||ctx.extent.width!=extent_.width||ctx.extent.height!=extent_.height||!ctx.depthView||ctx.colorFormat!=VK_FORMAT_R8G8B8A8_UNORM||!SceneInputs(ctx,world_,native_.environment,frame_)||!CommonConstants(frame_,extent_,scale_,common_))return Fail("scene ABI/extent unsupported; reference retained");common_.r[1][1]=float(ctx.serial%1024);serial_=ctx.serial;
 if(!gpu_.Begin(ctx))return Fail("frame slot not ready");
 waterReady_=false;if(controls_.waterLamps&&waterBefore_.handle){std::array<Texture,16> t{};t[0]={ctx.depthView,ctx.depthLayout};waterReady_=gpu_.Run(Kernel::DepthCopy,common_,t,waterBefore_);} // Claude LV27: the depth before the liquids
 if(terrain_.layout==VK_IMAGE_LAYOUT_UNDEFINED)gpu_.Clear(terrain_,{-1e9f,0,0,0});if(floors_.layout==VK_IMAGE_LAYOUT_UNDEFINED)gpu_.Clear(floors_,{frame_.camPos[2],frame_.camPos[2],0,0});if(edges_.layout==VK_IMAGE_LAYOUT_UNDEFINED)gpu_.Clear(edges_,{0,0,0,0});
 if(controls_.fog&&controls_.shafts){WXL_VkPreviousDepth shared{};shared.structSize=sizeof shared;if(api_->structSize>=offsetof(WXL_VkRenderApi,GetOpaqueDepth)+sizeof(api_->GetOpaqueDepth)&&api_->GetOpaqueDepth&&api_->GetOpaqueDepth(&shared)&&shared.valid&&shared.serial==ctx.serial&&shared.extent.width==ctx.extent.width&&shared.extent.height==ctx.extent.height&&shared.format==VK_FORMAT_R32_SFLOAT)opaqueDepth_={shared.imageView,shared.layout};else if(opaqueFallback_.handle){std::array<Texture,16> t{};t[0]={ctx.depthView,ctx.depthLayout};if(!gpu_.Run(Kernel::DepthCopy,common_,t,opaqueFallback_))return Fail("opaque depth capture failed");opaqueDepth_=gpu_.Sample(opaqueFallback_);}}
 if(native_.refreshSurfacePolicy){native_.surfacePolicyComplete=native_.refreshSurfacePolicy(native_.policyUser,ctx.serial,native_);if(native_.policyCount>native_.policies.size())return Fail("invalid surface policy count");for(unsigned i=0;i<native_.policyCount;++i){auto&p=native_.policies[i];if(p.nativeColour&&!(p.catalogueIdentity&0x30000000u)&&!lamps_.Catalog().SetNativeColour(frame_.mapId,p.catalogueIdentity&0x0FFFFFFFu,p.rgb,(p.catalogueIdentity&0x80000000u)!=0))return Fail("native palette mapping invalid");}available_.lamps=lamps_.Catalog().Loaded()&&native_.surfacePolicyComplete;}
if(neutralFog_.layout==VK_IMAGE_LAYOUT_UNDEFINED)gpu_.Clear(neutralFog_,{0,0,0,0});
 if(controls_.fog&&!noise_.Ready()){noise_.RecordUploads();if(!noise_.Ready()){status_="preparing noise; reference retained";return true;}}
 Source::FrameInputs tileFrame=frame_;auto&source=lamps_.Record(tileFrame,controls_,config_,fog_,controls_.spells?&MergedSpells():nullptr);table_=source;
 for(int k=0;k<table_.slots;++k){uint32_t identity=lamps_.Identity(unsigned(k));uint32_t canonical=identity&~0x40000000u;uint32_t mask=native_.defaultAppliedClasses;for(unsigned p=0;p<native_.policyCount;++p)if(native_.policies[p].catalogueIdentity==canonical)mask|=native_.policies[p].alreadyAppliedClasses;if(native_.effectsAllClasses&&identity!=0xFFFFFFFFu&&(identity&0x30000000u))mask=0;table_.texels[Source::kLampCoreRow][k][3]=float(mask&0x3Eu);}
 // Claude 2026-11-15 lot LV22 hdLvLampCubes, Claude LV34: EVERY fixed light lighting surfaces with a shadow (each catalogue lamp
 // and each lit window; not the spells or the lantern; Claude LV35: and the far lamps on the water) has its own shadow cube; the
 // atlas holds hdLvLampCount lamps + the window slots + the far halo slots (Configure), so none is ever left without one. Its table row kLampCubeRow: x cube + 1 once drawn,
 // y the cube's radius, z its fade-in, w 1 = it has a cube to wait for (LampSurfaces and WaterLamps hide it until then).
 // Radius: the lamp's own reach on surfaces (LampSurfaceReach: no surface it lights lies beyond its cube), and at least
 // hdLvLampCubeRange. Claude LV35, when the water was drawn last frame: (1) the far lamps mirrored on it (halo-only slots,
 // canonical identity so a lamp keeps its cube when it changes slot kind) get a cube too; (2) every cube reaches twice the light's
 // distance to the camera: a water point nearer the camera than the light lies within it (|LP| <= |LC| + |CP| <= 2 |LC|), so
 // the cube alone judges every glint WaterLamps can show between the camera and the light, without the screen. The radius goes
 // by doubling steps from the surface radius and is kept while it is between the need and 4 x the need: a cube is drawn
 // again only when its light has gone twice as far, or come four times nearer.
 for(int k=0;k<table_.slots&&k<Source::kLampSlots;++k){std::memset(table_.texels[Source::kLampCubeRow][k],0,sizeof table_.texels[Source::kLampCubeRow][k]);std::memset(table_.texels[Source::kLampCubeCentreRow][k],0,sizeof table_.texels[Source::kLampCubeCentreRow][k]);}
 std::array<float,4> cubeAtlas{};float cubeMode=0;
 if(controls_.lamps&&controls_.lampCubes>0&&cubes_.Ready()){
  const bool water=waterSeen_&&controls_.waterLamps;waterSeen_=false; // Claude LV35: WaterLamps sets it again this frame
  struct Near {float d;int k;};Near list[LampCubes::MaxCapacity];uint32_t n=0;
  for(int k=0;k<table_.slots&&k<Source::kLampSlots&&n<LampCubes::MaxCapacity;++k){uint32_t id=lamps_.Identity(unsigned(k));if(id==0xFFFFFFFFu)continue;
   const float*s=table_.texels[Source::kLampSurfaceRow][k];const float*e=table_.texels[Source::kLampEmitRow][k];const float*p=table_.texels[Source::kLampSphereRow][k];
   if(!(s[3]>0))continue;float d=p[0]*p[0]+p[1]*p[1]+p[2]*p[2];if(!std::isfinite(d))continue;
   const bool lit=s[0]>0||s[1]>0||s[2]>0;
   const bool lamp=lit&&k<table_.surfaceSlots&&(id&0xF0000000u)==0&&e[3]==0,window=lit&&k<table_.surfaceSlots&&(id&0xF0000000u)==0x80000000u&&e[3]>0; // kWindowBit
   // kHaloOnlyBit: mirrored with its halo's energy (LV30); only when that halo gives light (an outdoor lamp by day gives none: WaterLamps
   // skips it, and its large cube would be drawn for nothing).
   const float*halo=table_.texels[Source::kLampLightRow][k];
   const bool far=water&&controls_.halos&&!lit&&(halo[0]>0||halo[1]>0||halo[2]>0)&&(id&0xF0000000u)==0x40000000u&&e[3]==0;
   // Claude LV37: a moving light (emit.w < 0): a spell (kEffectBit) or the belt lantern (kLanternSlotId); its cube drawn every frame.
   // (a reach no larger than its clearance has no cube to draw: it keeps the screen's shadow)
   const bool moving=lit&&k<table_.surfaceSlots&&e[3]<0&&((id&0xF0000000u)==0x10000000u||id==0x20000000u)&&table_.texels[Source::kLampViewRow][k][3]>std::max(e[0],.01f);
   if(lamp||window||far||moving)list[n++]={d,k};}
  std::sort(list,list+n,[](const Near&a,const Near&b){return a.d<b.d;}); // nearest first: the first drawn
  n=std::min(n,cubes_.Count());
  CubeWish wishes[LampCubes::MaxCapacity];int slotOf[LampCubes::MaxCapacity];
  for(uint32_t i=0;i<n;++i){int k=list[i].k;const float*p=table_.texels[Source::kLampSphereRow][k];auto&x=wishes[i];x.id=lamps_.Identity(unsigned(k))&~0x40000000u;for(int j=0;j<3;++j)x.world[j]=p[j]+frame_.camPos[j];
   const float*e=table_.texels[Source::kLampEmitRow][k];
   if(e[3]<0){ // Claude LV37: a moving light: its own reach (the lantern's: and its glint on the water, which it keeps, LV30), its own
    // clearance as the near plane (emit.x, what Lumenveil's march leaves out round its flame), drawn again every frame: no steps.
    const bool lanternSlot=x.id==0x20000000u;const float reach=table_.texels[Source::kLampViewRow][k][3];
    x.radius=std::min(std::max(reach,lanternSlot&&water?2.f*std::sqrt(list[i].d):0.f),LampCubes::MaxRadius);
    x.nearYards=std::max(e[0],.01f);x.moving=true;slotOf[i]=k;continue;}
   const float base=std::max(table_.texels[Source::kLampViewRow][k][3],controls_.lampCubeRange);float radius=base;
   const float kept=cubes_.Wanted(x.id);
   if(water){const float need=std::max(base,2.f*std::sqrt(list[i].d));
    if(kept>=need&&kept<=4.f*need)radius=kept;else while(radius<need)radius*=2.f;}
   else if(kept>base)radius=kept; // no water this frame: a larger cube is still right, it is not drawn again for nothing
   x.radius=std::min(radius,LampCubes::MaxRadius);slotOf[i]=k; // never beyond what a cube can be drawn with
   x.unitReach=std::min(base,x.radius);} // Claude PERSO2: the units' layer only within the light's reach on surfaces (the water's glints beyond: no unit)
  cubes_.Units(native_.shadowUnits,native_.shadowUnitCount,controls_.lampCubeOwn); /* Claude LV23 */
  cubes_.Wish(frame_.mapId,wishes,n);
  for(uint32_t i=0;i<n;++i){float*r=table_.texels[Source::kLampCubeRow][slotOf[i]];r[3]=1;int cube=cubes_.Cube(wishes[i].id);if(cube<0)continue;
   r[0]=float(cube+1);r[1]=cubes_.Radius(cube);r[2]=wishes[i].moving?1.f:cubes_.Fade(cube,frame_.seconds); // LV37: a moving light, at once
   r[3]=float(1+2*cubes_.DynamicMask(cube,ctx.serial)); // Claude LV36: w = 1 + 2 x the faces of the movers' layer drawn this frame
   // Claude LV37: where the cube was drawn, in view space as the lamp's own view row; w its near plane (< 0: all six faces).
   float at[3],nearPlane;bool allFaces;cubes_.Centre(cube,at,nearPlane,allFaces);float rel[3]={at[0]-frame_.camPos[0],at[1]-frame_.camPos[1],at[2]-frame_.camPos[2]};
   float*cr=table_.texels[Source::kLampCubeCentreRow][slotOf[i]];Source::TransformDirection(rel,frame_.cameraRelativeView,cr);cr[3]=allFaces?-nearPlane:nearPlane;}
  cubeAtlas=cubes_.AtlasRow();cubeMode=float(controls_.lampCubes);if(cubes_.Atlas().view)cubes_.Used(ctx.serial); // Claude LV35: read this frame
 }
 waterCubeAtlas_=cubeAtlas;waterCubeMode_=cubeMode; // Claude LV27, LV34
 if(!lampGpu_.UploadTable(table_,lamps_.Tiles()))return Fail("lamp table or tiles upload refused (size, format or budget: LvGpu UploadMip)"); /* Claude LT1: the old text blamed the budget for every refusal */tableUploaded_=true;
 bool surfaces=(controls_.lamps||controls_.spells)&&available_.lamps;WXL_VkGBuffer gb{};gb.structSize=sizeof gb;bool has=api_->structSize>=offsetof(WXL_VkRenderApi,GetGBuffer)+sizeof(api_->GetGBuffer)&&api_->GetGBuffer&&api_->GetGBuffer(&gb)&&ValidNativeGBuffer(ctx,gb);
 // Claude G2 2026-11-05: no surface lamp gives light this frame (every surface slot has surface-row rgb <= 0, or none): each lit term is
 // light.rgb * finite factors <= 0, LampSurfaces' rgb stays <= 0, the blur keeps it <= 0, SceneComposite clamps it to 0 and writes the scene
 // back unchanged -> the three passes are skipped, same image. A NaN or any positive light keeps the passes.
 bool surfaceLight=false;for(int k=0;k<table_.surfaceSlots&&k<Source::kLampSlots&&!surfaceLight;++k){const float*l=table_.texels[Source::kLampSurfaceRow][k];surfaceLight=!(l[0]<=0&&l[1]<=0&&l[2]<=0);}
 if(surfaces&&has&&!surfaceLight&&GpuTiming::on)++GpuTiming::surfacesSkipped;
 if(surfaces&&has&&surfaceLight){auto body=Source::CarrierBodyInView(frame_,lamps_.Lantern());float sun[3];Source::TransformDirection(frame_.toLight,frame_.cameraRelativeView,sun);lampGpu_.sourceScale=controls_.lampSource;lampGpu_.carrierClear=controls_.carrierClear;lampGpu_.optimization=controls_.lampOpt;lampGpu_.optimizationCheck=controls_.lampOptCheck;if(!lampGpu_.RecordSurfaces(common_,{ctx.depthView,ctx.depthLayout},{ctx.depthView,ctx.depthLayout},{sun[0],sun[1],sun[2],0},body,controls_.blur,controls_.tileLists,{gb.albedoView,VK_IMAGE_LAYOUT_GENERAL},{gb.normalView,VK_IMAGE_LAYOUT_GENERAL},float(controls_.normalCheck),float(controls_.lampView),[&]{const float worldUp[3]={0,0,1};float up[3];Source::TransformDirection(worldUp,frame_.cameraRelativeView,up);return std::array<float,4>{up[0],up[1],up[2],controls_.lampPostClear};}(),cubes_.Atlas(),cubeMode,&cubeAtlas,cubes_.DynamicAtlas()))return Fail("local-light pass failed; reference retained");if(!composite_.Record(ctx,common_,&gb,gpu_.Sample(lampGpu_.Surfaces()),{}, {},{}, {true,false,false,1,float(controls_.lampView)}))return Fail("local-light composite rejected");}
 fogWanted_=controls_.fog&&noise_.Ready()&&!frame_.inLiquid&&(!controls_.shafts||opaqueDepth_.view);opaque_=true;status_=(controls_.lamps||controls_.spells)&&!available_.lamps?"local surfaces need verified native coverage":surfaces&&!has?"G-buffer unavailable; local surfaces retained reference":"active";return true;
}
void Suite::BuildMarch(){march_=common_;march_.r[127]={native_.liquidPlaneHeight,native_.liquidPlaneValid&&std::isfinite(native_.liquidPlaneHeight)?1.f:0.f,0,0};float light[3];Source::TransformDirection(frame_.toLight,frame_.cameraRelativeView,light);march_.r[9]={light[0],light[1],light[2],fog_.shadowedLayerLightScale};march_.r[10]={1.5f,.035f,controls_.shafts?1.f:0.f,4};march_.r[11]={1,1/std::max(1.f,fog_.maxDistance),fog_.horizonStart,fog_.farClip};std::memcpy(&march_.r[12],fog_.layers,sizeof fog_.layers);march_.r[36]={fog_.shaftStrength,fog_.shaftFocus,controls_.shafts?config_.shaftRange:0,config_.shaftDepth};march_.r[37]={fog_.airShaftScatter[0],fog_.airShaftScatter[1],fog_.airShaftScatter[2],config_.shaftLength};auto drift=Source::BuildDriftConstants(frame_,fog_,config_,phaseCoarse_,phaseFine_,true);std::memcpy(&march_.r[38],&drift,sizeof drift);auto terrain=terrainReady_?fogCpu_.Terrain().Constants(frame_.camPos):Source::kTerrainShadowsOff;march_.r[43]={terrain.uvAtCamera[0],terrain.uvAtCamera[1],terrain.uvPerYard,terrain.sharpness};auto fade=Source::ShaftFadeConstants(config_.shaftRange,config_.shaftDepth,config_.shaftGlare);std::memcpy(&march_.r[44],&fade,sizeof fade);if(controls_.memory&&memory_.Valid())memory_.Lookup(frame_,march_);auto cloud=Source::CloudConstants(frame_,fog_,phaseCloud_,true);std::memcpy(&march_.r[53],&cloud,sizeof cloud);auto body=Source::ShaftBodyInView(frame_,Source::kDefaultPivotHeight);march_.r[55]={body.base[0],body.base[1],body.base[2],body.radius};march_.r[56]={body.up[0],body.up[1],body.up[2],body.height};march_.r[57]={fog_.hazeFromSky[0],fog_.hazeFromSky[1],fog_.hazeFromSky[2],fog_.hazeFromSkyShare};march_.r[58]={0,0,0,0};auto banks=Source::BuildBankConstants(frame_,fog_,terrain,terrainReady_&&fogCpu_.Terrain().FloorsKnown());float target=0;if(config_.fogCeiling>0&&terrainReady_&&fogCpu_.Terrain().FloorsKnown()){banks.noise.w=fogCpu_.Terrain().FloorAt(frame_.camPos[0],frame_.camPos[1]).nearFloor;banks.noise.y=1/(Source::kFogCeilingFadeShare*config_.fogCeiling);target=Source::FogCeilingGate(config_.fogCeiling,frame_.camPos[2]-banks.noise.w);}if(ceilingSeconds_<0||frame_.seconds<ceilingSeconds_)ceilingGate_=target;else ceilingGate_=Source::FogCeilingGateStep(ceilingGate_,target,frame_.seconds-ceilingSeconds_);ceilingSeconds_=frame_.seconds;banks.noise.z=banks.noise.y>0?ceilingGate_:0;std::memcpy(&march_.r[59],&banks,sizeof banks);
 temporal_=common_;temporal_.r[13]={controls_.temporal,previousValid_?1.f:0.f,0,0};if(previousValid_){float currentToWorld[16],currentToPrevious[16];std::memcpy(currentToWorld,&common_.r[4],sizeof currentToWorld);Source::Mul4x4(currentToWorld,previousVP_,currentToPrevious);std::memcpy(&temporal_.r[9],currentToPrevious,sizeof currentToPrevious);}
}
bool Suite::BeforeSpells(const WXL_VkStageContext&ctx){if(!opaque_||ctx.serial!=serial_)return false;if(!gpu_.Begin(ctx))return false;Texture fogTexture=gpu_.Sample(neutralFog_);bool fogTransmittance=false;std::array<float,4>fogUV{0,0,1,1};bool canHalo=!native_.nativeFogEnabled;
 if(fogWanted_){if(controls_.terrain&&native_.height.probe){auto&terrain=fogCpu_.Terrain();if(terrain.Version()!=terrainVersion_){if(!gpu_.Upload(terrain_,terrain.Texels(),512u*512*4))return Fail("terrain upload failed");terrainVersion_=terrain.Version();}if(terrain.FloorsKnown()&&terrain.FloorVersion()!=floorVersion_){if(!gpu_.Upload(floors_,terrain.Floors(),128u*128*16))return Fail("floor upload failed");floorVersion_=terrain.FloorVersion();}terrainReady_=true;}else terrainReady_=false;
  if(controls_.memory){auto body=Source::ShaftBodyInView(frame_,Source::kDefaultPivotHeight);if(!memory_.Record(common_,frame_,opaqueDepth_,body,(fogCpu_.ResetBits()&(First|Map|Clock|Camera))!=0))return Fail("memory update failed; reference fog retained");}
  if(controls_.shafts&&!controls_.memory){auto u=common_;u.r[9]={float(world_.extent.width)/edges_.extent.width,float(world_.extent.height)/edges_.extent.height,0,0};auto body=Source::ShaftBodyInView(frame_,Source::kDefaultPivotHeight);u.r[10]={body.base[0],body.base[1],body.base[2],body.radius};u.r[11]={body.up[0],body.up[1],body.up[2],body.height};std::array<Texture,16> edgeInputs{};edgeInputs[0]=opaqueDepth_;if(!gpu_.Run(Kernel::EdgeOccluders,u,edgeInputs,edges_))return Fail("edge occluders failed");}
  BuildMarch();std::array<Texture,16>input{};input[0]={ctx.depthView,ctx.depthLayout};input[1]=gpu_.Sample(noise_.Volume());input[2]=terrainReady_?gpu_.Sample(terrain_):Texture{};input[3]=controls_.memory?gpu_.Sample(memory_.Output()):gpu_.Sample(edges_);input[4]=controls_.memory?gpu_.Sample(memory_.Before()):Texture{};input[5]=gpu_.Sample(noise_.Cloud());input[7]=terrainReady_?gpu_.Sample(floors_):Texture{};
  if(!fogGpu_.Record(march_,temporal_,input,unsigned(controls_.quality),controls_.memory&&memory_.Valid(),fogCpu_.ResetBits()!=0,controls_.fogFast!=0))return Fail("fog update failed; reference retained");fogTexture=gpu_.Sample(fogGpu_.Output());canHalo=true;
 }
 bool halos=controls_.halos&&tableUploaded_&&canHalo&&!frame_.inLiquid;if(halos){auto common=common_;common.r[9][1]=Source::FarCoreAnglePerTexel(frame_,int(lampGpu_.Halos().extent.height));if(!lampGpu_.RecordHalos(common,{ctx.depthView,ctx.depthLayout},fogTexture,lamps_.VisibilityBlend(),fogTransmittance,controls_.tileLists,fogUV))return Fail("halo pass failed");}
 if(fogWanted_||halos){CompositeSettings cfg{false,fogWanted_,halos,1};Texture ownFog=fogWanted_?fogTexture:gpu_.Sample(neutralFog_);if(!composite_.Record(ctx,common_,nullptr,{},ownFog,halos?gpu_.Sample(lampGpu_.Halos()):Texture{},lampGpu_.Halos().extent,cfg))return Fail("fog/halo composite rejected; reference retained");if(fogWanted_)composedFog_=ctx.serial;}

 float currentToWorld[16],worldToView[16];std::memcpy(currentToWorld,&common_.r[4],sizeof currentToWorld);if(Source::Invert4x4(currentToWorld,worldToView)){Source::Mul4x4(worldToView,frame_.glProjection,previousVP_);previousValid_=true;}if(controls_.halos&&!canHalo)status_="halos need current reference fog opacity";return true;
}
bool Suite::AfterReferenceFog(const WXL_VkStageContext&ctx){
 if(ctx.structSize<sizeof ctx||ctx.point!=5||!prepared_||!opaque_||ctx.serial!=serial_||finalSerial_==ctx.serial)return false;
 finalSerial_=ctx.serial;if(!gpu_.Begin(ctx))return false;
 // Native fog was retained (candidate disabled or failed): sample its CURRENT opacity
 // after order 100, never a previous frame or the future candidate result.
 if(!ComposedFog(ctx.serial)&&native_.nativeFogEnabled&&controls_.halos&&tableUploaded_&&!frame_.inLiquid){
  FogSnapshot shared;
  if(native_.readReferenceFog&&native_.readReferenceFog(native_.fogUser,ctx.serial,shared)&&shared.image.view){
   auto u=common_;u.r[9][1]=Source::FarCoreAnglePerTexel(frame_,int(lampGpu_.Halos().extent.height));
   if(!lampGpu_.RecordHalos(u,{ctx.depthView,ctx.depthLayout},shared.image,lamps_.VisibilityBlend(),shared.transmittance,controls_.tileLists,shared.uv))return Fail("reference-fog halo pass failed");
   if(!composite_.Record(ctx,common_,nullptr,{},gpu_.Sample(neutralFog_),gpu_.Sample(lampGpu_.Halos()),lampGpu_.Halos().extent,{false,false,true,1}))return Fail("reference-fog halo composite failed");
  }else status_="halos need current reference fog opacity";
 }
 if(controls_.spells&&!captures_.Before(ctx,common_,frame_))return Fail("spell baseline unavailable");
 return true;
}
bool Suite::Record(const WXL_VkStageContext&ctx){if(ctx.structSize<sizeof(WXL_VkStageContext))return false;if(ctx.point==3)return WaterLamps(ctx); /* Claude LV27 */if(ctx.point==0){if(serial_==ctx.serial&&opaque_)return false;return Opaque(ctx);}if(ctx.point==5){if(beforeSerial_==ctx.serial)return false;beforeSerial_=ctx.serial;return BeforeSpells(ctx);}if(ctx.point==7&&controls_.spells&&opaque_&&ctx.serial==serial_){if(measuredSerial_==ctx.serial)return false;if(!gpu_.Begin(ctx))return false;measuredSerial_=ctx.serial;return captures_.After(ctx,common_);}return false;}
// Claude 2026-11-15 lot LV27 hdLvWaterLamps (Lumenveil 0.1.1 water_lamps + vf_water_lamps): after the liquids, where the water drew
// its depth (HdCataWater writes it while this is on), each lamp of this frame's table leaves its glint on the surface, hidden
// by the lamp's own shadow cube. The frame is copied, then written back with the glints (WaterLamps.comp.hlsl).
bool Suite::WaterLamps(const WXL_VkStageContext&ctx){
 if(!controls_.waterLamps||!controls_.lamps||!opaque_||!tableUploaded_||!waterReady_||ctx.serial!=serial_||waterSerial_==ctx.serial||frame_.inLiquid||!ctx.depthView||!ctx.colorImage||!ctx.colorView||ctx.colorFormat!=VK_FORMAT_R8G8B8A8_UNORM||ctx.colorLayout!=VK_IMAGE_LAYOUT_GENERAL||!waterScene_.handle||ctx.extent.width!=waterScene_.extent.width||ctx.extent.height!=waterScene_.extent.height)return false;
 waterSerial_=ctx.serial;waterSeen_=g_gxCataWater.m_lampWaterCount>0; /* Claude LV35: next frame's cubes reach the water */if(!gpu_.Begin(ctx)||!gpu_.CopyFrame(waterScene_))return false;
 std::array<Texture,16>t{};t[0]={ctx.depthView,ctx.depthLayout};t[1]=gpu_.Sample(lampGpu_.Table());t[2]=gpu_.Sample(waterBefore_);t[3]=gpu_.Sample(waterScene_);const Texture atlas=cubes_.Atlas();if(atlas.view){t[6]=atlas;t[11]=cubes_.DynamicAtlas();cubes_.Used(ctx.serial);} /* Claude LV35; LV36: binding 15, the movers */
 auto u=common_;u.r[9]={float(table_.slots),controls_.waterLampGain,controls_.waterLampRough,ctx.swapRB?1.f:0.f}; // Claude LV30: every slot, the far halos' too
 const float worldUp[3]={0,0,1};float up[3];Source::TransformDirection(worldUp,frame_.cameraRelativeView,up);u.r[15]={up[0],up[1],up[2],float(controls_.waterLampShadow)}; // Claude LV29: w hdLvWaterLampShadow
 // Claude LV30 (Lumenveil water_lamps.cpp RecoverFarHaloEnergy): a far lamp with no light on surfaces is mirrored with its halo's
 // light times LampLight / (LampHaze x its near-camera share), x kIndoorLampLight / kIndoorLampHaze when its hidden share says indoor;
 // haze and light as the lamp table was written with (LvLamps::Record).
 const float wlHaze=controls_.halos?fog_.lampHaze:0.f,wlLight=controls_.lamps?fog_.lampLight:0.f;
 u.r[14]={wlHaze>0&&wlLight>0?wlLight/wlHaze:0.f,Source::kIndoorLampLight/Source::kIndoorLampHaze,Source::kHiddenIndoorLampShare,atlas.view?waterCubeMode_:0.f};u.r[32]=waterCubeAtlas_; /* Claude LV34: each light's cube is in its kLampCubeRow */
 {auto body=Source::CarrierBodyInView(frame_,lamps_.Lantern());u.r[33]={body.base[0],body.base[1],body.base[2],body.radius};u.r[34]={body.up[0],body.up[1],body.up[2],body.height};} // Claude LV37: the lantern's carrier, as LampSurfaces'
 // Claude LV28 hdLvWaterLampWaves: the Cata waters drawn this pass (map objects first, then the chunks' global ones), each
 // with its four surface-normal lookups (CataProcWater's texcoord0/1) as affine functions of the world (its UVs follow the world:
 // GxCataLampWater::uv): the camera's part in double and wrapped, the slope per yard; up to 4 normals textures (t[4], t[5], t[7], t[8]).
 u.r[35]={0,0,0,0};
 if(controls_.waterLampWaves&&g_gxCataWater.m_lampWaterCount&&api_->structSize>=offsetof(WXL_VkRenderApi,GetTextureView)+sizeof(api_->GetTextureView)&&api_->GetTextureView){
  const void*keys[4]{};const int slots[4]={4,5,7,8};int textures=0,count=0;
  const double cx=frame_.camPos[0],cy=frame_.camPos[1],cz=frame_.camPos[2];
  for(int pass=0;pass<2;++pass)for(uint32_t w=0;w<g_gxCataWater.m_lampWaterCount&&w<8&&count<8;++w){const GxCataLampWater&e=g_gxCataWater.m_lampWaters[w];if((e.global!=0)!=(pass==1)||!e.normals)continue;
   int tex=-1;for(int i=0;i<textures;++i)if(keys[i]==e.normals)tex=i;
   if(tex<0){if(textures>=4)continue;VkImageView view{};VkImageLayout layout{};if(!api_->GetTextureView(e.normals,&view,&layout))continue;keys[textures]=e.normals;t[slots[textures]]={view,layout};tex=textures++;}
   const float(*q)[4]=e.rows;const double k=32.0*q[16][3],a=0.03125;const double wz=e.global?cz:0.5*(double(e.box[2])+double(e.box[5]));
   auto layer=[&](int n,double wx,double wy,double&uu,double&vv){
    const double v3x=e.uv[0][0]*wx+e.uv[0][1]*wy+e.uv[0][2]*wz+e.uv[0][3],v3y=e.uv[1][0]*wx+e.uv[1][1]*wy+e.uv[1][2]*wz+e.uv[1][3];
    const double ax=a*v3x*q[0][0]+a*v3y*q[1][0]+q[3][0],ay=a*v3x*q[0][1]+a*v3y*q[1][1]+q[3][1];   // v26, v27, v29
    const double s=-0.03125*(0.5+v3x),tt=-0.03125*(0.5+v3y);
    const double bx=s*q[4][0]+tt*q[5][0]+q[7][0],by=s*q[4][1]+tt*q[5][1]+q[7][1];                   // v30, v31, v33
    const double px=n==0?ax:n==1?bx:n==2?k*ax:k*bx,py=n==0?ay:n==1?by:n==2?k*ay:k*by;
    uu=px*q[12][1]+py*q[13][1]+q[15][1];vv=px*q[12][0]+py*q[13][0]+q[15][0];};                     // v38.yx, v39.yx, v41.yx
   const uint32_t base=36+9*uint32_t(count);bool finite=true;
   for(int n=0;n<4;++n){double u0,v0,ux,vx,uy,vy;layer(n,cx,cy,u0,v0);layer(n,cx+1,cy,ux,vx);layer(n,cx,cy+1,uy,vy);
    u.r[base+n]={float(ux-u0),float(uy-u0),float(vx-v0),float(vy-v0)};
    const float fu=float(u0-std::floor(u0)),fv=float(v0-std::floor(v0));u.r[base+4+n/2][(n%2)*2]=fu;u.r[base+4+n/2][(n%2)*2+1]=fv;
    for(float f:u.r[base+n])finite=finite&&std::isfinite(f);finite=finite&&std::isfinite(fu)&&std::isfinite(fv);}
   u.r[base+6]=e.global?std::array<float,4>{-1e9f,-1e9f,1e9f,1e9f}:std::array<float,4>{float(e.box[0]-cx),float(e.box[1]-cy),float(e.box[3]-cx),float(e.box[4]-cy)};
   u.r[base+7]={e.pixel[1],e.pixel[3],float(tex),e.global?1.f:0.f};u.r[base+8]={e.pixel[2],0,0,0}; // f[14], f[6], f[15]
   if(finite)++count;}
  u.r[35]={float(count),0,count?1.f:0.f,0};
  // The characters' ripples (Cata's two displacement maps, CataRipples.cpp; its s4, s8): where each lies, from the camera.
  const GxCataRipples&rp=g_gxCataRipples;u.r[111]={0,0,0,0};
  if(count&&rp.m_ready&&rp.m_views[0]&&rp.m_views[1]){bool ok=true;
   for(int m=0;m<2;++m){const double sx=rp.m_size[m][0],sy=rp.m_size[m][1];ok=ok&&sx>0&&sy>0&&rp.m_texSize[m]>0;if(!ok)break;
    u.r[108+m]={float((cx-double(rp.m_rawPos[m][0]))/sx),float((cy-double(rp.m_rawPos[m][1]))/sy),float(1.0/sx),float(1.0/sy)};
    t[9+m]={reinterpret_cast<VkImageView>(rp.m_views[m]),VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL};}
   if(ok){u.r[110]={1.f/float(rp.m_texSize[0]),1.f/float(rp.m_texSize[1]),rp.m_interpolation[0],rp.m_interpolation[1]};u.r[111]={1,0,0,0};}
   else{t[9]={};t[10]={};}}
 }
 // Claude EAU3 (hdLvWaterCull) : dans le noyau optimise, les lampes dont le lobe vaut exactement 0 pour un pixel sont sautees
 // (1 et 2 = le test, 3 = temoin, 0 = sans test, comme EAU2). 2 et 3 lancent la preuve ci-dessous.
 u.r[35][3]=controls_.waterCull==3?3.f:controls_.waterCull!=0?1.f:0.f;
 u.r[35][1]=controls_.waterTiles==3?3.f:controls_.waterTiles!=0?1.f:0.f; // Claude EAU4 (hdLvWaterTiles) : 1 et 2 = tuiles, 3 = temoin
 // Claude EAU1 (hdLvWaterOpt 2 / 3) : la preuve de l'eau. Les memes entrees, deux fois hors de l'image : A l'original, B l'optimise (3 : B avec
 // un autre gain, il doit differer) ; les deux cibles relues et comparees octet par octet (Logs\lumen-preuve.txt).
 const bool waterOpt=controls_.waterOpt!=0&&gpu_.Supports(Kernel::WaterLampsOptimized),waterProof=waterOpt&&(controls_.waterOpt>=2||controls_.waterCull>=2||controls_.waterTiles>=2); // Claude EAU3: hdLvWaterCull 2/3 too; EAU4: hdLvWaterTiles 2/3
 if(waterProof){PollWaterProof(ctx.completedSerial);
  if(ctx.serial>=persoWaterNext_&&!persoReadA_.serial&&!persoReadB_.serial){
   if(persoWaterA_.handle&&(persoWaterA_.extent.width!=ctx.extent.width||persoWaterA_.extent.height!=ctx.extent.height)){gpu_.Retire(persoWaterA_);gpu_.Retire(persoWaterB_);}
   const VkDeviceSize bytes=VkDeviceSize(ctx.extent.width)*ctx.extent.height*4;bool ok=true;
   if(!persoWaterA_.handle)ok=gpu_.Create(persoWaterA_,ctx.extent.width,ctx.extent.height,ctx.colorFormat)&&gpu_.Create(persoWaterB_,ctx.extent.width,ctx.extent.height,ctx.colorFormat);
   for(Readback*r:{&persoReadA_,&persoReadB_})if(ok&&(!r->buffer||r->bytes<bytes))ok=gpu_.DestroyReadback(*r,ctx.completedSerial)&&gpu_.CreateReadback(*r,bytes);
   if(ok){auto ub=u;if(controls_.waterOpt==3)ub.r[9][1]*=2;persoWaterKind_=controls_.waterOpt==3?3:controls_.waterCull==3?5:controls_.waterTiles==3?7:controls_.waterTiles==2?6:controls_.waterCull==2?4:2; /* Claude EAU3: 4 EAU3, 5 its control; EAU4: 6, 7 its control */
    ok=gpu_.Clear(persoWaterA_,{0,0,0,0})&&gpu_.Clear(persoWaterB_,{0,0,0,0})&&gpu_.Run(Kernel::WaterLamps,u,t,persoWaterA_)&&gpu_.Run(Kernel::WaterLampsOptimized,ub,t,persoWaterB_)
    &&gpu_.CopyReadback(persoWaterA_,persoReadA_)&&gpu_.CopyReadback(persoWaterB_,persoReadB_);persoWaterNext_=ctx.serial+120;persoWaterLamps_=g_gxCataWater.m_lampWaterCount;}}}
 else if(persoWaterA_.handle||persoReadA_.buffer){if(gpu_.DestroyReadback(persoReadA_,ctx.completedSerial)&&gpu_.DestroyReadback(persoReadB_,ctx.completedSerial)){gpu_.Retire(persoWaterA_);gpu_.Retire(persoWaterB_);}}
 Target frame;frame.handle=reinterpret_cast<void*>(uintptr_t(1));frame.info.image=ctx.colorImage;frame.info.view=ctx.colorView;frame.extent=ctx.extent;frame.format=ctx.colorFormat;frame.layout=ctx.colorLayout;
 return gpu_.Run(waterOpt?Kernel::WaterLampsOptimized:Kernel::WaterLamps,u,t,frame); // Claude EAU1
}
bool Suite::NeedsBeforeSpells()const{return prepared_&&(controls_.fog||controls_.halos||controls_.spells);}
// Claude EAU1 : la preuve de l'eau lue une fois le GPU passe (octets RGBA8 differents entre A et B).
void Suite::PollWaterProof(uint64_t done){
 if(!persoReadA_.serial||!persoReadB_.serial||persoReadA_.serial>done||persoReadB_.serial>done)return;
 const auto*a=static_cast<const unsigned char*>(gpu_.Ready(persoReadA_,done));const auto*b=static_cast<const unsigned char*>(gpu_.Ready(persoReadB_,done));
 if(a&&b&&persoReadA_.usedBytes==persoReadB_.usedBytes){size_t diff=0,lit=0;const size_t n=size_t(persoReadA_.usedBytes/4);for(size_t i=0;i<n;++i){diff+=std::memcmp(a+i*4,b+i*4,4)!=0;lit+=(a[i*4]|a[i*4+1]|a[i*4+2])!=0;}
  if(FILE*log=std::fopen("Logs\\lumen-preuve.txt","a")){std::fprintf(log,"PREUVE %s eau : image %llu, %llu pixels compares (%llu non noirs, %u eaux Cata), %llu differents\n",persoWaterKind_==3?"TEMOIN EAU1":persoWaterKind_==4?"EAU3 (lobe nul saute)":persoWaterKind_==5?"TEMOIN EAU3":persoWaterKind_==6?"EAU4 (tuiles)":persoWaterKind_==7?"TEMOIN EAU4":"EAU1",static_cast<unsigned long long>(persoReadA_.serial),static_cast<unsigned long long>(n),static_cast<unsigned long long>(lit),persoWaterLamps_,static_cast<unsigned long long>(diff));std::fclose(log);}}
 gpu_.Consume(persoReadA_,done);gpu_.Consume(persoReadB_,done);
}
bool Suite::Shutdown(uint64_t done){if(gpu_.LastUsed()>done)return false;if(!gpu_.DestroyReadback(persoReadA_,done)||!gpu_.DestroyReadback(persoReadB_,done))return false;gpu_.Retire(persoWaterA_);gpu_.Retire(persoWaterB_); /* Claude EAU1 */if(!lampGpu_.ReleaseOptimizationProof(done))return false;if(!cubes_.Shutdown(done))return false; /* Claude LV22 */if(!captures_.Shutdown(done))return false;memory_.Shutdown();noise_.Shutdown();composite_.Shutdown();lampGpu_.Shutdown();fogGpu_.Shutdown();gpu_.Retire(neutralFog_);gpu_.Retire(terrain_);gpu_.Retire(floors_);gpu_.Retire(edges_);gpu_.Retire(opaqueFallback_);gpu_.Retire(waterBefore_);gpu_.Retire(waterScene_); /* Claude LV27 */if(!gpu_.Shutdown(done))return false;lamps_.Shutdown();ambiance_.Shutdown();spells_.Shutdown();api_=nullptr;available_={};prepared_=opaque_=sized_=memoryMade_=false;status_="off";return true;}
}
