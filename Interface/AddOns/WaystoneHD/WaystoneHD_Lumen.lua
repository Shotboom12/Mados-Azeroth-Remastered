local function Read(name) local ok,value=pcall(GetCVar,name);if ok then return value end end
local function Write(name,value) pcall(SetCVar,name,tostring(value)) end
-- Separate comparison page. No reset of the user's settings, palette, weather, water or baseline renderer.
local panel = CreateFrame("Frame", "WaystoneHDLumenPanel", UIParent)
panel:Hide()
panel.name = "Lumenveil - Comparaison"
panel.parent = "Waystone HD"
local title = panel:CreateFontString(nil, "ARTWORK", "GameFontNormalLarge")
title:SetPoint("TOPLEFT", 16, -16); title:SetText("Eclairage candidat - couleurs Waystone")
local status = panel:CreateFontString(nil, "ARTWORK", "GameFontHighlightSmall")
status:SetPoint("TOPLEFT", 16, -44); status:SetWidth(560); status:SetJustifyH("LEFT")
local defs = {
 {"hdLvLamps", "Lampes et objets"}, {"hdLvFog", "Brouillard volumetrique"},
 {"hdLvHalos", "Halos des lampes"}, {"hdLvSpells", "Lumieres des sorts"},
 {"hdLvAmbiance", "Profils regionaux numeriques"}, {"hdLvShafts", "Rayons soleil/lune"},
 {"hdLvMemory", "Memoire des occluders"}, {"hdLvTerrain", "Occlusion terrain/batiments"},
 {"hdLvTiles", "Selection par tuile"}, {"hdLvBlur", "Flou bilateral des lampes"}
}
local widgets = {}
local readiness={hdLvLamps="hdLvLampsReady",hdLvFog="hdLvFogReady",hdLvHalos="hdLvHalosReady",hdLvSpells="hdLvSpellsReady",hdLvAmbiance="hdLvAmbianceReady",hdLvShafts="hdLvShaftsReady",hdLvMemory="hdLvMemoryReady",hdLvTerrain="hdLvTerrainReady",hdLvBlur="hdLvBlurReady"}
local function available(key)
 if Read("hdLvReady")~="1" then return false end
 return not key or key=="hdLvLamps" or key=="hdLvSpells" or not readiness[key] or Read(readiness[key])=="1"
end
for i,d in ipairs(defs) do
 local c = CreateFrame("CheckButton", "WaystoneLvCheck"..i, panel, "UICheckButtonTemplate")
 c:SetPoint("TOPLEFT", 16+math.floor((i-1)/5)*280, -100-((i-1)%5)*30)
 _G[c:GetName().."Text"]:SetText(d[2]); c.key=d[1]
 c:SetScript("OnClick", function(self) if available(self.key) then Write(self.key,self:GetChecked() and "1" or "0") end end)
 widgets[#widgets+1]=c
end
local sliders={
 {"hdLvQuality","Qualite",1,3,1}, {"hdLvLampCount","Budget lampes",0,128,1},
 {"hdLvLampGain","Intensite lampes",0,4,.05}, {"hdLvHaloGain","Intensite halos",0,4,.05},
 {"hdLvSpellGain","Intensite sorts",0,4,.05}, {"hdLvDensity","Densite",0,4,.05},
 {"hdLvShaftGain","Intensite rayons",0,4,.05}, {"hdLvTemporal","Stabilisation",0,.95,.01},
 {"hdLvLantern","Lanterne (0 arret, 1 auto, 2 marche)",0,2,1},
 {"hdLvLanternR","Lanterne rouge",0,4,.01},{"hdLvLanternG","Lanterne vert",0,4,.01},{"hdLvLanternB","Lanterne bleu",0,4,.01}}
for i,d in ipairs(sliders) do
 local s=CreateFrame("Slider","WaystoneLvSlider"..i,panel,"OptionsSliderTemplate")
 s:SetWidth(165);s:SetPoint("TOPLEFT",24+math.floor((i-1)/3)*188,-280-((i-1)%3)*52)
 s:SetMinMaxValues(d[3],d[4]);s:SetValueStep(d[5]);s.key=d[1]
 _G[s:GetName().."Text"]:SetText(d[2]);_G[s:GetName().."Low"]:SetText(tostring(d[3]));_G[s:GetName().."High"]:SetText(tostring(d[4]))
 s:SetScript("OnValueChanged",function(self,v) if not panel.refreshing and available(self.key) then Write(self.key,v) end end)
 widgets[#widgets+1]=s
end
local off=CreateFrame("Button",nil,panel,"UIPanelButtonTemplate");off:SetWidth(220);off:SetHeight(25);off:SetPoint("BOTTOMLEFT",16,16);off:SetText("Retour a mon rendu de reference")
off:SetScript("OnClick",function() if available() then for i=1,8 do Write(defs[i][1],"0") end end panel:GetScript("OnShow")(panel) end)
panel:SetScript("OnShow",function()
 panel.refreshing=true
 local ready=available();status:SetText(ready and (Read("hdLvInfo") or "Pret") or "Kit de sources : branchement natif pas encore valide. Options indisponibles.")
 for _,w in ipairs(widgets) do local v=tonumber(Read(w.key)) or 0;if w:GetObjectType()=="CheckButton" then w:SetChecked(v~=0) else w:SetValue(v) end;if available(w.key) then w:Enable() else w:Disable() end end
 panel.refreshing=false
end)
InterfaceOptions_AddCategory(panel)
SLASH_WAYSTONELUMEN1="/hdlumen"
SlashCmdList.WAYSTONELUMEN=function() InterfaceOptionsFrame_OpenToCategory(panel);InterfaceOptionsFrame_OpenToCategory(panel) end

-- Advanced candidate-only controls generated from the compiled native schema.
local advancedDefs={
 {"hdLvCfg_Banks","Banks",0,2,1,1},
 {"hdLvCfg_Density","Density",0,10,0.05,1},
 {"hdLvCfg_FogCeiling","FogCeiling",0,300,0.1,40},
 {"hdLvCfg_Haze","Haze",0,10,0.05,1},
 {"hdLvCfg_GroundFog","GroundFog",0,10,0.05,0.600000024},
 {"hdLvCfg_FarFog","FarFog",0,10,0.05,1},
 {"hdLvCfg_FarFogStretch","FarFogStretch",0,1,0.005,1},
 {"hdLvCfg_AerialPerspective","AerialPerspective",0,1,0.005,1},
 {"hdLvCfg_SunScatter","SunScatter",0,10,0.05,1},
 {"hdLvCfg_Ambient","Ambient",0,10,0.05,1},
 {"hdLvCfg_HazeFromSky","HazeFromSky",0,1,0.005,1},
 {"hdLvCfg_HazeSkyLevel","HazeSkyLevel",0.25,1.5,0.00625,0.850000024},
 {"hdLvCfg_Shafts","Shafts",0,4,0.02,1},
 {"hdLvCfg_LowSunShafts","LowSunShafts",0,3,0.015,1},
 {"hdLvCfg_ShaftGlare","ShaftGlare",0.0199999996,4,0.019900000002,0.150000006},
 {"hdLvCfg_ShaftFocus","ShaftFocus",0,0.949999988,0.00474999994,0.699999988},
 {"hdLvCfg_MoonShafts","MoonShafts",0,8,0.04,2},
 {"hdLvCfg_MoonShaftFocus","MoonShaftFocus",0,0.949999988,0.00474999994,0.5},
 {"hdLvCfg_ShaftHaze","ShaftHaze",0,10,0.05,1},
 {"hdLvCfg_ShaftRange","ShaftRange",30,600,0.1,200},
 {"hdLvCfg_ShaftLength","ShaftLength",10,300,0.1,250},
 {"hdLvCfg_ShaftDepth","ShaftDepth",0.100000001,4,0.019499999995,1.5},
 {"hdLvCfg_Drift","Drift",0,2,0.01,0.600000024},
 {"hdLvCfg_DriftSize","DriftSize",10,300,0.1,60},
 {"hdLvCfg_DriftDetail","DriftDetail",0,1,0.005,0.649999976},
 {"hdLvCfg_DriftSwirl","DriftSwirl",0,3,0.015,1},
 {"hdLvCfg_BankCover","BankCover",0,1,0.005,0.550000012},
 {"hdLvCfg_BankHeight","BankHeight",5,300,0.1,60},
 {"hdLvCfg_BankPool","BankPool",0,3,0.015,1},
 {"hdLvCfg_BankShadow","BankShadow",0,3,0.015,1},
 {"hdLvCfg_WindSpeed","WindSpeed",0,10,0.05,2},
 {"hdLvCfg_StormWind","StormWind",0,20,0.1,7},
 {"hdLvCfg_WindDirection","WindDirection",0,360,0.1,60},
 {"hdLvCfg_MorningMist","MorningMist",0,8,0.04,2},
 {"hdLvCfg_MistHeight","MistHeight",2,60,0.1,12},
 {"hdLvCfg_EveningHaze","EveningHaze",0,2,0.01,0.400000006},
 {"hdLvCfg_WeatherFog","WeatherFog",0,4,0.02,1},
 {"hdLvCfg_WeatherShafts","WeatherShafts",0,1,0.005,0.349999994},
 {"hdLvCfg_Twilight","Twilight",0,2,0.01,1},
 {"hdLvCfg_DustHaze","DustHaze",0,3,0.015,1},
 {"hdLvCfg_HumidHaze","HumidHaze",0,3,0.015,1},
 {"hdLvCfg_HorizonFog","HorizonFog",0,1,0.005,1},
 {"hdLvCfg_CloudShadows","CloudShadows",0,1,0.005,0.600000024},
 {"hdLvCfg_CloudCover","CloudCover",0,2,0.01,1},
 {"hdLvCfg_CloudSize","CloudSize",100,2000,0.1,400},
 {"hdLvCfg_FarLights","FarLights",0,4,0.02,1},
 {"hdLvCfg_LampFog","LampFog",0,4,0.02,1},
 {"hdLvCfg_LampFlicker","LampFlicker",0,2,0.01,1},
 {"hdLvCfg_FireStrength","FireStrength",0,2,0.01,1},
 {"hdLvCfg_LampIndoors","LampIndoors",0,2,0.01,1},
 {"hdLvCfg_LampLight","LampLight",0,4,0.02,2},
 {"hdLvCfg_LampDayLight","LampDayLight",0,1,0.005,0.349999994},
 {"hdLvCfg_LampShadows","LampShadows",0,1,0.005,1},
 {"hdLvCfg_WindowLight","WindowLight",0,4,0.02,2},
 {"hdLvCfg_EffectLight","EffectLight",0,4,0.02,1},
 {"hdLvCfg_LanternLight","LanternLight",0,4,0.02,1},
 {"hdLvCfg_LanternHalo","LanternHalo",0,2,0.01,0.300000012},
 {"hdLvCfg_LanternSwing","LanternSwing",0,2,0.01,1},
}
local advanced=CreateFrame("Frame","WaystoneHDLumenAdvanced",UIParent);advanced:Hide();advanced.name="Lumenveil - Reglages avances";advanced.parent="Waystone HD"
local text=advanced:CreateFontString(nil,"ARTWORK","GameFontNormalLarge");text:SetPoint("TOPLEFT",16,-16);text:SetText("Reglages candidats (palette, meteo et eau natives conservees)")
local scroll=CreateFrame("ScrollFrame","WaystoneLvAdvancedScroll",advanced,"UIPanelScrollFrameTemplate");scroll:SetPoint("TOPLEFT",16,-52);scroll:SetPoint("BOTTOMRIGHT",advanced,"BOTTOMRIGHT",-38,48)
local content=CreateFrame("Frame",nil,scroll);content:SetWidth(540);content:SetHeight(math.ceil(#advancedDefs/2)*62);scroll:SetScrollChild(content)
local advancedWidgets={}
for i,d in ipairs(advancedDefs)do
 local w=CreateFrame("Slider","WaystoneLvAdvancedSlider"..i,content,"OptionsSliderTemplate");w:SetWidth(220);w:SetPoint("TOPLEFT",8+((i-1)%2)*260,-20-math.floor((i-1)/2)*62);w:SetMinMaxValues(d[3],d[4]);w:SetValueStep(d[5]);w.key=d[1]
 _G[w:GetName().."Text"]:SetText(d[2]);_G[w:GetName().."Low"]:SetText(tostring(d[3]));_G[w:GetName().."High"]:SetText(tostring(d[4]));w:SetScript("OnValueChanged",function(self,v)if not advanced.refreshing and available()then Write(self.key,v)end end);advancedWidgets[#advancedWidgets+1]=w
end
advanced:SetScript("OnShow",function()advanced.refreshing=true;for _,w in ipairs(advancedWidgets)do w:SetValue(tonumber(Read(w.key))or 0);if available()and Read(w.key)then w:Enable()else w:Disable()end end;advanced.refreshing=false end)
local reset=CreateFrame("Button",nil,advanced,"UIPanelButtonTemplate");reset:SetWidth(240);reset:SetHeight(25);reset:SetPoint("BOTTOMLEFT",16,12);reset:SetText("Reinitialiser ces reglages candidats")
reset:SetScript("OnClick",function()if available()then for _,d in ipairs(advancedDefs)do Write(d[1],d[6])end end;advanced:GetScript("OnShow")(advanced)end)
InterfaceOptions_AddCategory(advanced)

-- HD 2026-11-02, lots L2/L3/G1: third page to compare the lamps (For Ever colours), the relief shadow and the
-- Seyris grass wind. Every value written here is read again by the engine each frame; nothing else is changed.
local cmp=CreateFrame("Frame","WaystoneHDLumenCompare",UIParent);cmp:Hide();cmp.name="Lumenveil - Lampes, ombres, herbe";cmp.parent="Waystone HD"
local ct=cmp:CreateFontString(nil,"ARTWORK","GameFontNormalLarge");ct:SetPoint("TOPLEFT",16,-16);ct:SetText("Lampes For Ever, ombre du relief, vent de l'herbe")
local function Label(y,text) local f=cmp:CreateFontString(nil,"ARTWORK","GameFontNormal");f:SetPoint("TOPLEFT",16,y);f:SetText(text);return f end
local function Info(y) local f=cmp:CreateFontString(nil,"ARTWORK","GameFontHighlightSmall");f:SetPoint("TOPLEFT",24,y);f:SetWidth(560);f:SetJustifyH("LEFT");return f end
Label(-48,"Lampes R2 (case \"Lampes et objets\" de la page Comparaison) : ce qu'elles ont le droit d'eclairer")
local classes={{2,"Sol (deja eclaire par tes lampes For Ever)"},{4,"Murs des batiments (conseille)"},{8,"Interieurs"},{16,"Modeles et personnages (deja eclaires)"}}
local classChecks={}
local function ClassValue() local v=tonumber(Read("hdLvLampClasses")) or 4;return v end
for i,c in ipairs(classes) do
 local b=CreateFrame("CheckButton","WaystoneLvClass"..i,cmp,"UICheckButtonTemplate")
 b:SetPoint("TOPLEFT",16+((i-1)%2)*290,-70-math.floor((i-1)/2)*28);_G[b:GetName().."Text"]:SetText(c[2]);b.bit=c[1]
 b:SetScript("OnClick",function(self) local v=ClassValue();local has=math.floor(v/self.bit)%2==1
  if self:GetChecked() and not has then v=v+self.bit elseif not self:GetChecked() and has then v=v-self.bit end;Write("hdLvLampClasses",v) end)
 classChecks[#classChecks+1]=b
end
local lampInfo=Info(-130)
Label(-160,"Ombre du relief R2 (cases \"Brouillard\" + \"Occlusion terrain/batiments\" de la page Comparaison)")
local wmo=CreateFrame("CheckButton","WaystoneLvTerrainWmo",cmp,"UICheckButtonTemplate");wmo:SetPoint("TOPLEFT",16,-182)
_G[wmo:GetName().."Text"]:SetText("Les batiments font aussi de l'ombre (sinon : le sol seul)")
wmo:SetScript("OnClick",function(self) Write("hdLvTerrainWmo",self:GetChecked() and "1" or "0") end)
local fogInfo=Info(-212)
Label(-242,"Herbe")
local sx=CreateFrame("CheckButton","WaystoneSxWind",cmp,"UICheckButtonTemplate");sx:SetPoint("TOPLEFT",16,-264)
_G[sx:GetName().."Text"]:SetText("Vent Seyris : force selon la zone, la meteo et les rafales (direction = ton reglage)")
sx:SetScript("OnClick",function(self) Write("hdSxWind",self:GetChecked() and "1" or "0") end)
local sxInfo=Info(-294)
local back=CreateFrame("Button",nil,cmp,"UIPanelButtonTemplate");back:SetWidth(260);back:SetHeight(25);back:SetPoint("BOTTOMLEFT",16,16);back:SetText("Remettre ces reglages par defaut")
local function Refresh()
 local v=ClassValue();for _,b in ipairs(classChecks) do b:SetChecked(math.floor(v/b.bit)%2==1) end
 wmo:SetChecked(Read("hdLvTerrainWmo")~="0");sx:SetChecked(Read("hdSxWind")=="1")
 lampInfo:SetText("Lampes : "..(Read("hdLvLampInfo") or "pas encore lu (ouvre le jeu avec R2 compile)"))
 fogInfo:SetText("R2 : "..(Read("hdLvInfo") or "?").."   relief pret : "..(Read("hdLvTerrainReady") or "?"))
 sxInfo:SetText("Herbe : "..(Read("hdSxInfo") or "off"))
end
back:SetScript("OnClick",function() Write("hdLvLampClasses",4);Write("hdLvTerrainWmo",1);Write("hdSxWind",0);Refresh() end)
cmp:SetScript("OnShow",Refresh)
local wait=0;cmp:SetScript("OnUpdate",function(self,e) wait=wait+e;if wait>.5 then wait=0;Refresh() end end)
InterfaceOptions_AddCategory(cmp)
SLASH_WAYSTONELUMENCMP1="/hdlampes"
SlashCmdList.WAYSTONELUMENCMP=function() InterfaceOptionsFrame_OpenToCategory(cmp);InterfaceOptionsFrame_OpenToCategory(cmp) end
