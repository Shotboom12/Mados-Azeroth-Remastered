-- Waystone HD : menu unique (/hd), redessine le 2 nov 2026 par HD a la demande de Max.
-- Colonne de gauche = les sujets ; a droite quelques listes simples, et des sections + pour les reglages fins. Pour chaque effet qui existe en plusieurs versions
-- (For Ever, Lumenveil, Seyris), une liste deroulante permet de passer de l'une a l'autre et de les melanger.
-- Chaque controle ecrit simplement une variable de la console (comme taper /console nom valeur).
-- Une variable absente de cette version du jeu grise son controle au lieu de provoquer une erreur.

local function Read(name) local ok, v = pcall(GetCVar, name); if ok then return v end end
local function Num(name, fallback) return tonumber(Read(name) or "") or fallback end
local function Set(name, value) pcall(SetCVar, name, tostring(value)) end
local function Has(name) return Read(name) ~= nil end
local function On(name) return Num(name, 0) ~= 0 end
local function SetMany(t) for i = 1, #t, 2 do if Has(t[i]) then Set(t[i], t[i + 1]) end end end

local COLUMN, ROWSLIDER, ROWCHECK = 285, 46, 26
local panel, pages, current, counter, updating = nil, {}, nil, 0, false
local openList = nil

local function Gold(fs) fs:SetTextColor(1, 0.82, 0) end
local function Grey(fs) fs:SetTextColor(0.5, 0.5, 0.5) end


-- ===================================================================== constructeur de page
-- Une page = des sections empilees. La premiere (sans titre) est toujours visible ;
-- les suivantes ont un titre cliquable (+ / -) qui les ouvre ou les ferme.
local function NewPage(key, title, parent, build)
    local page = { key = key, title = title, items = {}, sections = {}, y = 0, col = 0, rowH = 0, built = false }
    page.build = build
    page.Layout = function(self)
        local off = 0
        for _, s in ipairs(self.sections) do
            if s.header then s.header:SetPoint("TOPLEFT", self.root, "TOPLEFT", 4, -off); off = off + 30 end
            if s.open then
                s.body:ClearAllPoints()
                s.body:SetPoint("TOPLEFT", self.root, "TOPLEFT", 0, -off)
                s.body:Show(); off = off + s.height + 6
            else s.body:Hide() end
        end
        self.root:SetHeight(off + 16)
    end
    page.Flush = function(self)
        if self.col ~= 0 then self.y = self.y - self.rowH; self.col = 0; self.rowH = 0 end
    end
    -- ferme la section en cours et en ouvre une autre. open = visible au depart
    page.Section = function(self, text, open)
        if self.cur then self:Flush(); self.cur.height = -self.y end
        counter = counter + 1
        local sec = { open = open and true or false, height = 0 }
        sec.body = CreateFrame("Frame", nil, self.root)
        sec.body:SetWidth(570); sec.body:SetHeight(10)
        if text then
            local b = CreateFrame("Button", "WaystoneHDSec" .. counter, self.root, "UIPanelButtonTemplate")
            b:SetWidth(556); b:SetHeight(24)
            local function Label() b:SetText((sec.open and "-  " or "+  ") .. text) end
            Label()
            b:SetScript("OnClick", function()
                sec.open = not sec.open; Label(); self:Layout()
                if self.scroll.UpdateScrollChildRect then self.scroll:UpdateScrollChildRect() end
            end)
            sec.header = b
        end
        table.insert(self.sections, sec)
        self.cur, self.content, self.y, self.col, self.rowH = sec, sec.body, 0, 0, 0
    end
    page.Build = function(self)
        counter = counter + 1
        local scroll = CreateFrame("ScrollFrame", "WaystoneHDScroll" .. counter, parent, "UIPanelScrollFrameTemplate")
        scroll:SetPoint("TOPLEFT", 172, -48)
        scroll:SetPoint("BOTTOMRIGHT", -34, 16)
        local root = CreateFrame("Frame", nil, scroll)
        root:SetWidth(570); root:SetHeight(10)
        scroll:SetScrollChild(root)
        self.scroll, self.root = scroll, root
        self.built = true
        self:Section(nil, true)
        self.build(self)
        self:Flush(); self.cur.height = -self.y
        self:Layout()
        scroll:Hide()
    end
    -- half = place dans une des deux colonnes ; sinon pleine largeur
    page.Place = function(self, frame, h, half, dy)
        local x
        if half then
            x = self.col * COLUMN
            if h > self.rowH then self.rowH = h end
            frame:SetPoint("TOPLEFT", self.content, "TOPLEFT", x + 4, self.y - (dy or 0))
            self.col = self.col + 1
            if self.col == 2 then self.y = self.y - self.rowH; self.col = 0; self.rowH = 0 end
        else
            self:Flush()
            frame:SetPoint("TOPLEFT", self.content, "TOPLEFT", 4, self.y - (dy or 0))
            self.y = self.y - h
        end
    end
    page.Header = function(self, text)
        self:Flush(); self.y = self.y - 8
        local fs = self.content:CreateFontString(nil, "ARTWORK", "GameFontNormalLarge")
        fs:SetText(text)
        fs:SetPoint("TOPLEFT", self.content, "TOPLEFT", 4, self.y)
        self.y = self.y - 26
    end
    page.Note = function(self, text)
        self:Flush()
        local fs = self.content:CreateFontString(nil, "ARTWORK", "GameFontHighlightSmall")
        fs:SetWidth(556); fs:SetJustifyH("LEFT"); fs:SetText(text)
        fs:SetPoint("TOPLEFT", self.content, "TOPLEFT", 6, self.y)
        local lines = math.max(1, math.ceil(string.len(text) / 105))
        self.y = self.y - (lines * 13 + 6)
    end
    page.Space = function(self, h) self:Flush(); self.y = self.y - (h or 10) end

    -- case a cocher. def = { cvar, label, tip, get (opt), on (opt) }
    page.Check = function(self, def)
        counter = counter + 1
        local name = "WaystoneHDCheck" .. counter
        local c = CreateFrame("CheckButton", name, self.content, "UICheckButtonTemplate")
        c:SetWidth(24); c:SetHeight(24)
        local label = _G[name .. "Text"]
        label:SetText(def.label)
        c:SetScript("OnClick", function(btn)
            if updating then return end
            if def.on then def.on(btn:GetChecked() and true or false) else Set(def.cvar, btn:GetChecked() and 1 or 0) end
        end)
        if def.tip then
            c:SetScript("OnEnter", function(btn) GameTooltip:SetOwner(btn, "ANCHOR_RIGHT"); GameTooltip:SetText(def.tip, 1, 1, 1, 1, true); GameTooltip:Show() end)
            c:SetScript("OnLeave", function() GameTooltip:Hide() end)
        end
        self:Place(c, ROWCHECK, true)
        table.insert(self.items, { refresh = function()
            local available = def.get and true or Has(def.cvar)
            local checked = def.get and def.get() or (not def.get and On(def.cvar))
            c:SetChecked(checked and true or false)
            if available then c:Enable(); Gold(label) else c:Disable(); Grey(label) end
        end })
    end

    -- curseur. def = { cvar, label, min, max, step, default, release, forever }
    page.Slider = function(self, def)
        counter = counter + 1
        local name = "WaystoneHDSlider" .. counter
        local s = CreateFrame("Slider", name, self.content, "OptionsSliderTemplate")
        s:SetWidth(210)
        s:SetMinMaxValues(def.min, def.max); s:SetValueStep(def.step)
        _G[name .. "Text"]:SetText(def.label)
        _G[name .. "Low"]:SetText(def.min); _G[name .. "High"]:SetText(def.max)
        local value = self.content:CreateFontString(nil, "ARTWORK", "GameFontHighlightSmall")
        value:SetPoint("LEFT", s, "RIGHT", 8, 0)
        local function Show()
            local v = s:GetValue()
            if def.cvar == "hdTime" and v < 0 then value:SetText("real time")
            elseif def.cvar == "hdTime" then local h = math.floor(v); value:SetText(string.format("%d:%02d", h, math.floor((v - h) * 60 + 0.5)))
            elseif def.step >= 1 then value:SetText(string.format("%d", v))
            else value:SetText(string.format("%.2f", v)) end
        end
        local function Send()
            local v = math.floor(s:GetValue() / def.step + 0.5) * def.step
            if def.cvar == "hdTime" and v < 0 then v = -1 end
            Set(def.cvar, v)
        end
        s.dragging = false
        s:SetScript("OnValueChanged", function() Show(); if not updating and not def.release and Has(def.cvar) then Send() end end)
        s:SetScript("OnMouseDown", function() s.dragging = true end)
        s:SetScript("OnMouseUp", function() s.dragging = false; if not updating and def.release and Has(def.cvar) then Send() end end)
        self:Place(s, ROWSLIDER, true, 16)
        local item = { def = def, refresh = function()
            if s.dragging then return end
            local available = Has(def.cvar)
            s:SetValue(Num(def.cvar, def.default or def.min)); Show()
            if available then s:Enable(); Gold(_G[name .. "Text"]) else s:Disable(); Grey(_G[name .. "Text"]) end
        end }
        table.insert(self.items, item)
        if def.forever then pages.foreverSliders = pages.foreverSliders or {}; table.insert(pages.foreverSliders, def) end
    end

    -- case de saisie numerique
    page.Input = function(self, def)
        counter = counter + 1
        local label = self.content:CreateFontString(nil, "ARTWORK", "GameFontNormalSmall")
        label:SetText(def.label)
        local box = CreateFrame("EditBox", "WaystoneHDInput" .. counter, self.content, "InputBoxTemplate")
        box:SetWidth(70); box:SetHeight(20); box:SetAutoFocus(false); box:SetNumeric(true)
        box:SetScript("OnEnterPressed", function(b) Set(def.cvar, tostring(tonumber(b:GetText()) or 0)); b:ClearFocus() end)
        box:SetScript("OnEscapePressed", function(b) b:ClearFocus() end)
        self:Flush()
        label:SetPoint("TOPLEFT", self.content, "TOPLEFT", 6, self.y)
        box:SetPoint("TOPLEFT", self.content, "TOPLEFT", 12, self.y - 16)
        self.y = self.y - 44
        table.insert(self.items, { refresh = function()
            if not box:HasFocus() then box:SetText(tostring(Num(def.cvar, 0))) end
        end })
    end

    page.Button = function(self, text, width, onClick)
        counter = counter + 1
        local b = CreateFrame("Button", "WaystoneHDButton" .. counter, self.content, "UIPanelButtonTemplate")
        b:SetWidth(width or 260); b:SetHeight(24); b:SetText(text)
        b:SetScript("OnClick", function() onClick(); if current then current:Refresh() end end)
        self:Place(b, 30, false)
    end

    -- texte d'etat mis a jour en direct. fn() renvoie une chaine
    page.Info = function(self, fn, lines)
        local fs = self.content:CreateFontString(nil, "ARTWORK", "GameFontHighlightSmall")
        fs:SetWidth(556); fs:SetJustifyH("LEFT")
        self:Flush()
        fs:SetPoint("TOPLEFT", self.content, "TOPLEFT", 6, self.y)
        self.y = self.y - ((lines or 2) * 13 + 8)
        table.insert(self.items, { refresh = function() fs:SetText(fn()) end })
    end

    -- liste deroulante. def = { label, options = { {text, apply, avail} }, current = function() -> index (0 = melange) }
    page.Drop = function(self, def)
        counter = counter + 1
        local label = self.content:CreateFontString(nil, "ARTWORK", "GameFontNormal")
        label:SetText(def.label)
        self:Flush()
        label:SetPoint("TOPLEFT", self.content, "TOPLEFT", 6, self.y)
        local button = CreateFrame("Button", "WaystoneHDDrop" .. counter, self.content, "UIPanelButtonTemplate")
        button:SetWidth(400); button:SetHeight(24)
        button:SetPoint("TOPLEFT", self.content, "TOPLEFT", 12, self.y - 18)
        self.y = self.y - 52
        local item = {}
        item.refresh = function()
            local i = def.current()
            if i and i > 0 and def.options[i] then button:SetText(def.options[i].text .. "   v")
            else button:SetText((def.unknown or "Custom (mixed settings)") .. "   v") end
        end
        button:SetScript("OnClick", function()
            if openList and openList.owner == button then openList:Hide(); return end
            if openList then openList:Hide() end
            counter = counter + 1
            local list = CreateFrame("Frame", "WaystoneHDList" .. counter, UIParent)
            list.owner = button
            list:SetFrameStrata("TOOLTIP")
            list:SetWidth(404); list:SetHeight(#def.options * 24 + 10)
            list:SetBackdrop({ bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background",
                edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border", tile = true, tileSize = 16, edgeSize = 14,
                insets = { left = 4, right = 4, top = 4, bottom = 4 } })
            list:SetPoint("TOPLEFT", button, "BOTTOMLEFT", 0, 0)
            for i, o in ipairs(def.options) do
                local b = CreateFrame("Button", nil, list, "UIPanelButtonTemplate")
                b:SetWidth(392); b:SetHeight(22); b:SetPoint("TOPLEFT", 6, -5 - (i - 1) * 24)
                local ok = (not o.avail) or o.avail()
                b:SetText(ok and o.text or (o.text .. "  (unavailable)"))
                if not ok then b:Disable() end
                b:SetScript("OnClick", function() o.apply(); list:Hide(); openList = nil; if current then current:Refresh() end end)
            end
            list:SetScript("OnHide", function(l) if openList == l then openList = nil end end)
            openList = list
            list:Show()
        end)
        table.insert(self.items, item)
    end

    -- bouton qui remet la page a zero : tous ses curseurs a leur valeur de depart + les reglages listes (cvar, valeur, ...)
    page.Reset = function(self, extra)
        self:Button("Reset this page", 260, function()
            for _, it in ipairs(self.items) do
                if it.def and it.def.default ~= nil and Has(it.def.cvar) then Set(it.def.cvar, it.def.default) end
            end
            SetMany(extra)
        end)
    end

    page.Refresh = function(self)
        updating = true
        for _, it in ipairs(self.items) do it.refresh() end
        updating = false
    end
    return page
end

-- ===================================================================== les pages
local ADVANCED = {
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


local function FogMode()
    local fe, lv = On("hdFog"), Has("hdLvFog") and On("hdLvFog")
    if not fe and not lv then return 1 elseif fe and not lv then return 2 elseif lv and not fe then return 3 end
    return 4
end

local function LampMode()
    local lights, classes = Num("hdLights", 1), Num("hdLvLampClasses", 4)
    if not (Has("hdLvLamps") and On("hdLvLamps")) then
        if lights == 0 then return 1 elseif lights == 1 then return 2 end
        return 0
    end
    local forever = Num("hdLvLampForever", 1) ~= 0
    if lights == 0 and classes == 30 then return 3 end
    if lights == 1 and classes == 4 and forever then return 4 end
    if lights == 1 and classes == 28 and not forever then return 5 end
    return 0
end

local function ClassBit(bit)
    return math.floor(Num("hdLvLampClasses", 4) / bit) % 2 == 1
end
local function SetClassBit(bit, on)
    local v = Num("hdLvLampClasses", 4)
    local has = math.floor(v / bit) % 2 == 1
    if on and not has then v = v + bit elseif not on and has then v = v - bit end
    Set("hdLvLampClasses", v)
end

local function UpscalerMode()
    if Has("hdDLSS") and On("hdDLSS") then return 3 end
    if On("hdFSR") then return 2 end
    if not On("hdFSR") and not (Has("hdDLSS") and On("hdDLSS")) then return 1 end
    return 0
end

local function ApplyFsrMode()
    if Has("hdFSRWindMotion") and On("hdFSRWindMotion") then Set("hdFSRWindMotion", 0) end
    local want = (On("hdFSR") or On("hdFSRFrameGeneration") or (Has("hdDLSS") and On("hdDLSS"))) and 2 or 0
    if Has("hdFSRTest") and Num("hdFSRTest", 0) ~= want then Set("hdFSRTest", want) end
    -- 3 nov 2026 (Max) : FSR, DLSS ou generation d'images allume = les mouvements contre les trainees vont avec.
    if want == 2 then
        for _, name in ipairs({ "hdFSRObjectMotion", "hdFSRRigidMotion", "hdFSRSkeletalMotion", "hdFSRReactiveMasks" }) do
            if Has(name) and not On(name) then Set(name, 1) end
        end
    end
end

local function Line(label, cvar) return label .. " : " .. (Read(cvar) or "not available in this version") end

local function Gm(text) if SendChatMessage then pcall(SendChatMessage, text, "SAY") end end
local function LanternMode() return math.min(2, math.max(0, math.floor(Num("hdLvLantern", 0)))) + 1 end
local function QualityMode() return math.min(3, math.max(0, math.floor(Num("hdFSRQuality", 1)))) + 1 end
local function FourWay(fe, lv)
    return function()
        local a, b = On(fe), Has(lv) and On(lv)
        if not a and not b then return 1 elseif a and not b then return 2 elseif b and not a then return 3 end
        return 4
    end
end


-- ===================================================================== "My settings" (3 nov 2026, demande de Max)
-- Un preset personnel : le bouton "My settings" remet tout ce qui est dans la liste ci-dessous ; le bouton
-- "Save" relit les valeurs du jeu et les garde dans WaystoneHDMine (WTF\...\SavedVariables\WaystoneHD.lua),
-- donc elles survivent au redemarrage. Tant que rien n'est sauve, c'est MINE_DEFAUT (les reglages de Max du 3 nov).
-- hdTime n'y est pas : c'est l'heure du jeu, pas un reglage d'image.
local MINE_DEFAUT = {
    "farclip", "2500",
    "specular", "1",
    "groundEffectDensity", "128",
    "projectedTextures", "1",
    "textureFilteringMode", "5",
    "componentTextureLevel", "9",
    "shadowLevel", "0",
    "environmentDetail", "1.5",
    "extShadowQuality", "5",
    "weatherDensity", "3",
    "groundEffectDist", "280",
    "particleDensity", "1",
    "shadowMode", "3",
    "shadowTextureSize", "2048",
    "ambientOcclusion", "1",
    "postBloom", "1",
    "aerialFog", "1",
    "hdForever", "1",
    "hdFogGround", "2",
    "hdFogHorizon", "1",
    "hdFogTest", "7",
    "hdSunPath", "1",
    "hdGrade", "1",
    "hdLightHorizon", "0.75",
    "hdLightGround", "0.8",
    "hdWater", "1",
    "hdWaterWaves", "0",
    "hdGI", "1",
    "hdContactShadow", "1",
    "hdCataWater", "1",
    "hdAONormals", "1",
    "hdCataViewDistance", "1",
    "hdCataViewQuality", "4",
    "hdSunShadows", "1",
    "hdRays", "1",
    "hdLvLampForever", "0",
    "hdAO", "1",
    "hdLvSpellGround", "1",
    "hdLvSpellGain", "4",
    "hdLvLamps", "1",
    "hdLvFog", "1",
    "hdLvHalos", "1",
    "hdLvSpells", "1",
    "hdLvTerrain", "1",
    "hdLvLampClasses", "28",
    "hdLvCfg_FarLights", "0.3",
    "hdLvHaloGain", "0.6",
    "hdBloom", "1",
    "hdGrassBuffers", "4096",
    "hdLvCfg_ShaftGlare", "0.05",
    "hdLvTemporal", "0.85",
    "hdBloomStrength", "0",
    "hdBloomThreshold", "1",
    "hdLvShaftGain", "0.35",
    "hdFog", "0",
    -- 3 nov 2026 20:18 : valeurs choisies par Max apres le branchement L18
    "hdLvCfg_SunScatter", "1",
    "hdLvCfg_ViewLight", "1",
    "hdLvCfg_AntiGlare", "1",
}

local function MineList()
    if type(WaystoneHDMine) == "table" and #WaystoneHDMine >= 2 then return WaystoneHDMine, true end
    return MINE_DEFAUT, false
end
local function MineApply()
    local list = MineList()
    SetMany(list)
end
-- reglages ajoutes plus tard (L14, L15) : "Save" les garde aussi, meme s'ils ne sont pas dans la liste de depart
local MINE_SUIVIS = { "hdLvCfg_ViewLight", "hdLvCfg_SunScatter", "hdLvCfg_AntiGlare", "hdLvCfg_ScatterDawn",
    "hdLvCfg_ScatterDay", "hdLvCfg_ScatterDusk", "hdLvCfg_ScatterNight", "hdLvSpellSource", "hdLvMissileLight",
    "hdLvMissileReach", "hdLvMissileImpact", "hdLvShafts" }
local function MineSave()
    local list = MineList()
    local out, n, seen = {}, 0, {}
    local function keep(name)
        if seen[name] then return end
        seen[name] = true
        local v = Read(name)
        if v ~= nil then out[#out + 1] = name; out[#out + 1] = v; n = n + 1 end
    end
    for i = 1, #list, 2 do keep(list[i]) end
    for i = 1, #MINE_DEFAUT, 2 do keep(MINE_DEFAUT[i]) end
    for _, name in ipairs(MINE_SUIVIS) do keep(name) end
    WaystoneHDMine = out
    return n
end
local function MineCount()
    local list, saved = MineList()
    return math.floor(#list / 2), saved
end

-- HD 2026-11-05 lot R2 (demande de Max : ses reglages toujours actifs, pas de test dans le vide) :
-- le OK du menu Video de Blizzard ramene ces reglages au maximum de SES curseurs (verifie 3 nov et 5 nov :
-- herbe 140 / density 64, vue 1277). Si une de ces valeurs exactes apparait alors que "My settings" veut plus,
-- on remet la valeur de Max (verifie toutes les secondes) et on l'ecrit dans le chat.
local VIDEO_CLAMPS = { groundEffectDist = 140, groundEffectDensity = 64, farclip = 1277 }
local function MineValue(name)
    local list = MineList()
    for i = 1, #list, 2 do if list[i] == name then return tonumber(list[i + 1]) end end
    for i = 1, #MINE_DEFAUT, 2 do if MINE_DEFAUT[i] == name then return tonumber(MINE_DEFAUT[i + 1]) end end
end
local guard, guardWait = CreateFrame("Frame"), 0
guard:SetScript("OnUpdate", function(self, elapsed)
    guardWait = guardWait + elapsed
    if guardWait < 1 then return end
    guardWait = 0
    for name, clamp in pairs(VIDEO_CLAMPS) do
        local now, mine = Num(name, nil), MineValue(name)
        if now and mine and mine > clamp and math.abs(now - clamp) < 0.01 then
            Set(name, mine)
            if DEFAULT_CHAT_FRAME then DEFAULT_CHAT_FRAME:AddMessage("|cffffd100Waystone HD|r " .. name .. " reset to " .. mine .. " (the Video menu had set it to " .. clamp .. ")") end
        end
    end
end)

-- ===================================================================== mesure A/B (OPT2, 4 nov 2026)
-- Mesure le temps de chaque image (OnUpdate) pendant des phases alternees A/B, sans rien changer d'autre.
-- A = outils de mesure/journaux allumes (comme avant), B = tous fermes. Resultats dans le chat et dans
-- WaystoneHDMesures (WTF\Account\...\SavedVariables\WaystoneHD.lua, ecrit a la deconnexion).
local AB_OUTILS = { "hdCataRenderPerf", "hdSunTelemetry", "hdLvLampScan", "hdCataWaterLog", "hdCataHorizonVerify" }
local AB_ORDRE = { "A", "B", "A", "B", "A", "B" }
local AB_CHAUFFE, AB_DUREE = 5, 20
local ab = { actif = false, texte = "No measurement yet this session." }
local abFrame = CreateFrame("Frame")
local function AbStats(t)
    local n = #t
    if n == 0 then return nil end
    table.sort(t)
    local sum, lent33, lent50 = 0, 0, 0
    for _, v in ipairs(t) do sum = sum + v; if v > 33.4 then lent33 = lent33 + 1 end; if v > 50 then lent50 = lent50 + 1 end end
    local function q(p) return t[math.max(1, math.min(n, math.ceil(p * n)))] end
    return { n = n, fps = 1000 * n / sum, p50 = q(0.5), p95 = q(0.95), p99 = q(0.99), lent33 = lent33, lent50 = lent50 }
end
local function AbMediane(list)
    table.sort(list)
    local n = #list
    if n == 0 then return 0 end
    if n % 2 == 1 then return list[(n + 1) / 2] end
    return (list[n / 2] + list[n / 2 + 1]) / 2
end
local function AbAppliquer(mode)
    for _, c in ipairs(AB_OUTILS) do if Has(c) then Set(c, mode == "A" and 1 or 0) end end
end
local function AbFin()
    abFrame:SetScript("OnUpdate", nil)
    ab.actif = false
    for c, v in pairs(ab.avant) do Set(c, v) end
    local fa, fb, pa, pb, res = {}, {}, {}, {}, {}
    for i, r in ipairs(ab.resultats) do
        if r.mode ~= "B" then table.insert(fa, r.fps); table.insert(pa, r.p95) else table.insert(fb, r.fps); table.insert(pb, r.p95) end
        table.insert(res, string.format("%d%s %.1f FPS p50 %.2f p95 %.2f p99 %.2f ms >33ms %d >50ms %d (%d frames)", i, r.mode, r.fps, r.p50, r.p95, r.p99, r.lent33, r.lent50, r.n))
    end
    local mA, mB = AbMediane(fa), AbMediane(fb)
    local simple = #ab.ordre == 1
    local gain = mA > 0 and (mB - mA) / mA * 100 or 0
    if simple then ab.texte = string.format("Simple 60 s measurement: %.1f FPS, p50 %.2f ms, p95 %.2f ms, p99 %.2f ms", ab.resultats[1].fps, ab.resultats[1].p50, ab.resultats[1].p95, ab.resultats[1].p99) else
    ab.texte = string.format("Median A (tools on) %.1f FPS, p95 %.2f ms | Median B (everything off) %.1f FPS, p95 %.2f ms | B/A difference %+.1f %%",
        mA, AbMediane(pa), mB, AbMediane(pb), gain) end
    if type(WaystoneHDMesures) ~= "table" then WaystoneHDMesures = {} end
    table.insert(WaystoneHDMesures, { quand = date("%Y-%m-%d %H:%M:%S"), zone = GetZoneText and GetZoneText() or "?",
        resume = ab.texte, phases = res, outils = table.concat(AB_OUTILS, ",") })
    if DEFAULT_CHAT_FRAME then
        for _, l in ipairs(res) do DEFAULT_CHAT_FRAME:AddMessage("|cffffd100Waystone HD|r " .. l) end
        DEFAULT_CHAT_FRAME:AddMessage("|cffffd100Waystone HD|r " .. ab.texte)
    end
end
local function AbPhase(i)
    ab.i, ab.t, ab.samples = i, 0, {}
    if ab.ordre[i] ~= "M" then AbAppliquer(ab.ordre[i]) end
end
local function AbDemarrer(simple)
    if ab.actif then return end
    ab.actif, ab.resultats, ab.avant = true, {}, {}
    ab.ordre = simple and { "M" } or AB_ORDRE
    ab.duree = simple and 60 or AB_DUREE
    for _, c in ipairs(AB_OUTILS) do local v = Read(c); if v ~= nil then ab.avant[c] = v end end
    AbPhase(1)
    abFrame:SetScript("OnUpdate", function(_, elapsed)
        ab.t = ab.t + elapsed
        if ab.t > AB_CHAUFFE then table.insert(ab.samples, elapsed * 1000) end
        ab.texte = string.format("Measurement in progress: phase %d/%d (%s), %d s of %d. Keep the camera still.", ab.i, #ab.ordre, ab.ordre[ab.i], math.floor(ab.t), AB_CHAUFFE + ab.duree)
        if ab.t >= AB_CHAUFFE + ab.duree then
            local s = AbStats(ab.samples) or { n = 0, fps = 0, p50 = 0, p95 = 0, p99 = 0, lent33 = 0, lent50 = 0 }
            s.mode = ab.ordre[ab.i]
            table.insert(ab.resultats, s)
            if ab.i < #ab.ordre then AbPhase(ab.i + 1) else AbFin() end
        end
    end)
end

-- ===================================================================== profil GPU (OPT4, 4 nov 2026)
-- Coupe un effet a la fois, 120 s chacun, pour lire son cout GPU dans Logs\Vulkan.log (lignes "stages" et "gpu",
-- une par minute avec le lanceur -Compteurs). Les heures de debut vont dans WaystoneHDMesures. Tout est remis a la fin.
local GPU_PHASES = {
    { "reference", {} },
    { "no sun-contact shadows", { "hdSunContact", 0 } },
    { "sun quality 0 (8/16 samples)", { "hdSunQuality", 0 } },
    { "no HD sun shadows", { "hdSunShadows", 0 } },
    { "no ambient occlusion", { "hdAO", 0 } },
    { "no Lumenveil fog", { "hdLvFog", 0 } },
    { "no Lumenveil terrain", { "hdLvTerrain", 0 } },
    { "no Lumenveil lamps or glow", { "hdLvLamps", 0, "hdLvHalos", 0 } },
    { "no For Ever rays", { "hdRays", 0 } },
}
local GPU_DUREE = 150
local gpu = { actif = false, texte = "No GPU profile this session." }
local gpuFrame = CreateFrame("Frame")
local function GpuRemettre()
    for c, v in pairs(gpu.avant) do Set(c, v) end
end
local function GpuPhase(i)
    GpuRemettre()
    gpu.i, gpu.t = i, 0
    local s = GPU_PHASES[i][2]
    SetMany(s)
    table.insert(gpu.journal, string.format("%s phase %d: %s", date("%H:%M:%S"), i, GPU_PHASES[i][1]))
end
local function GpuDemarrer()
    if gpu.actif or ab.actif then return end
    gpu.actif, gpu.avant, gpu.journal = true, {}, {}
    for _, p in ipairs(GPU_PHASES) do
        for k = 1, #p[2], 2 do local v = Read(p[2][k]); if v ~= nil and gpu.avant[p[2][k]] == nil then gpu.avant[p[2][k]] = v end end
    end
    GpuPhase(1)
    gpuFrame:SetScript("OnUpdate", function(_, elapsed)
        gpu.t = gpu.t + elapsed
        gpu.texte = string.format("GPU profile: phase %d/%d (%s), %d s of %d. Keep the camera still.", gpu.i, #GPU_PHASES, GPU_PHASES[gpu.i][1], math.floor(gpu.t), GPU_DUREE)
        if gpu.t >= GPU_DUREE then
            if gpu.i < #GPU_PHASES then GpuPhase(gpu.i + 1) else
                gpuFrame:SetScript("OnUpdate", nil)
                GpuRemettre()
                table.insert(gpu.journal, date("%H:%M:%S") .. " finished, settings restored")
                gpu.actif = false
                gpu.texte = "GPU profile complete; settings restored. Exit the game normally so Vulkan.log is complete."
                if type(WaystoneHDMesures) ~= "table" then WaystoneHDMesures = {} end
                table.insert(WaystoneHDMesures, { quand = date("%Y-%m-%d %H:%M:%S"), zone = GetZoneText and GetZoneText() or "?", resume = "profil GPU", phases = gpu.journal })
                if DEFAULT_CHAT_FRAME then DEFAULT_CHAT_FRAME:AddMessage("|cffffd100Waystone HD|r " .. gpu.texte) end
            end
        end
    end)
end

local PAGEDEFS = {
{ "accueil", "Home", function(p)
    p:Header("Waystone HD")
    p:Note("One topic per tab. The drop-down lists let you choose the For Ever, Lumenveil or Seyris version. Sections marked + open for fine settings.")
    p:Header("Two complete looks")
    p:Button("All For Ever (my graphics)", 340, function()
        SetMany({ "hdLvFog", 0, "hdLvShafts", 0, "hdLvMemory", 0, "hdLvHalos", 0, "hdLvTerrain", 0, "hdLvLamps", 0,
                  "hdLvSpells", 0, "hdLvLantern", 0, "hdLvAmbiance", 0, "hdSxWind", 0, "hdLvLampClasses", 4,
                  "hdFog", 1, "hdRays", 1, "hdBloom", 1, "hdShadowSun", 1, "hdLights", 1, "hdGrassWind", 1 })
    end)
    p:Button("All Lumenveil (For Ever off)", 340, function()
        SetMany({ "hdFog", 0, "hdRays", 0, "hdBloom", 0, "hdShadowSun", 0, "hdLights", 0,
                  "hdLvFog", 1, "hdLvShafts", 1, "hdLvMemory", 1, "hdLvHalos", 1, "hdLvTerrain", 1, "hdLvLamps", 1,
                  "hdLvLampClasses", 30, "hdLvSpells", 1, "hdLvLantern", 1, "hdSxWind", 1, "hdGrassWind", 1 })
    end)
    p:Note("Changes neither FSR/DLSS, water, nor view distance.")
    p:Header("Back to the original values")
    p:Button("For Ever values (original sliders and switches)", 340, function()
        for _, def in ipairs(pages.foreverSliders or {}) do if Has(def.cvar) then Set(def.cvar, def.default) end end
        SetMany({ "hdForeverForce", 0, "hdGradeDebug", 0, "hdBloomDebug", 0, "hdWmoLight", 1, "hdWater", 1, "hdGrassLight", 1, "hdWaterReflect", 1 })
    end)
    p:Header("My settings")
    p:Button("My settings (put everything back the way I like it)", 340, function() MineApply() end)
    p:Button("Save the current settings to this button", 340, function()
        local n = MineSave()
        if DEFAULT_CHAT_FRAME then DEFAULT_CHAT_FRAME:AddMessage("|cffffd200Waystone HD|r : " .. n .. " settings saved to \"My settings\".") end
    end)
    p:Info(function()
        local n, saved = MineCount()
        return (saved and "Your saved settings: " or "Starting settings (Nov 3): ") .. n .. " values. The in-game time (hdTime) is not included."
    end, 2)
    p:Section("Live status", false)
    p:Info(function()
        return Line("Fog", "hdFogInfo") .. "\n" .. Line("Ground", "hdTerrainInfo") .. "\n" .. Line("Water", "hdWaterInfo")
            .. "\n" .. Line("Lumenveil", "hdLvInfo") .. "\n" .. Line("Lamps Lumenveil", "hdLvLampInfo")
            .. "\n" .. Line("Seyris grass", "hdSxInfo")
            .. "\n" .. Line("Upscaler", (Has("hdDLSS") and On("hdDLSS")) and "hdDLSSInfo" or "hdFSRInfo")
            .. "\n" .. Line("Generated frames", "hdFSRFrameGenerationInfo")
    end, 8)
end },

{ "ambiance", "Atmosphere", function(p)
    p:Header("Atmosphere")
    p:Slider({ cvar = "hdTime", label = "Time of day (-1 = real time)", min = -1, max = 24, step = 0.05, default = -1, forever = true })
    p:Drop({ label = "Fog", current = FogMode, options = {
        { text = "Original WotLK (no HD fog)", apply = function() SetMany({ "hdFog", 0, "hdLvFog", 0, "hdLvShafts", 0, "hdLvMemory", 0 }) end },
        { text = "For Ever only", apply = function() SetMany({ "hdFog", 1, "hdLvFog", 0, "hdLvShafts", 0, "hdLvMemory", 0 }) end },
        { text = "Lumenveil only", apply = function() SetMany({ "hdFog", 0, "hdLvFog", 1 }) end, avail = function() return Has("hdLvFog") end },
        { text = "For Ever + Lumenveil together", apply = function() SetMany({ "hdFog", 1, "hdLvFog", 1 }) end, avail = function() return Has("hdLvFog") end },
    } })
    p:Drop({ label = "Sun rays", current = FourWay("hdRays", "hdLvShafts"), options = {
        { text = "None", apply = function() SetMany({ "hdRays", 0, "hdLvShafts", 0 }) end },
        { text = "For Ever only", apply = function() SetMany({ "hdRays", 1, "hdLvShafts", 0 }) end },
        { text = "Lumenveil only (turns on its fog)", apply = function() SetMany({ "hdRays", 0, "hdLvShafts", 1, "hdLvFog", 1 }) end, avail = function() return Has("hdLvShafts") end },
        { text = "Both together", apply = function() SetMany({ "hdRays", 1, "hdLvShafts", 1, "hdLvFog", 1 }) end, avail = function() return Has("hdLvShafts") end },
    } })
    p:Drop({ label = "Glow (bloom)", current = FourWay("hdBloom", "hdLvHalos"), options = {
        { text = "None", apply = function() SetMany({ "hdBloom", 0, "hdLvHalos", 0 }) end },
        { text = "For Ever only", apply = function() SetMany({ "hdBloom", 1, "hdLvHalos", 0 }) end },
        { text = "Lumenveil only (turns on its fog)", apply = function() SetMany({ "hdBloom", 0, "hdLvHalos", 1, "hdLvFog", 1 }) end, avail = function() return Has("hdLvHalos") end },
        { text = "Both together", apply = function() SetMany({ "hdBloom", 1, "hdLvHalos", 1, "hdLvFog", 1 }) end, avail = function() return Has("hdLvHalos") end },
    } })
    p:Drop({ label = "Distant shadows", current = FourWay("hdShadowSun", "hdLvTerrain"), options = {
        { text = "None", apply = function() SetMany({ "hdShadowSun", 0, "hdLvTerrain", 0 }) end },
        { text = "For Ever only", apply = function() SetMany({ "hdShadowSun", 1, "hdLvTerrain", 0 }) end },
        { text = "Lumenveil only (turns on its fog)", apply = function() SetMany({ "hdShadowSun", 0, "hdLvTerrain", 1, "hdLvFog", 1 }) end, avail = function() return Has("hdLvTerrain") end },
        { text = "Both together", apply = function() SetMany({ "hdShadowSun", 1, "hdLvTerrain", 1, "hdLvFog", 1 }) end, avail = function() return Has("hdLvTerrain") end },
    } })
    p:Drop({ label = "Weather (GM command sent to the server)", unknown = "Choose a weather...", current = function() return 0 end, options = {
        { text = "Clear weather", apply = function() Gm(".wchange 1 0") end },
        { text = "Light rain", apply = function() Gm(".wchange 1 0.3") end },
        { text = "Rain", apply = function() Gm(".wchange 1 0.6") end },
        { text = "Heavy rain", apply = function() Gm(".wchange 1 1") end },
        { text = "Snow", apply = function() Gm(".wchange 2 0.6") end },
        { text = "Sandstorm", apply = function() Gm(".wchange 3 0.6") end },
    } })
    p:Reset({ "hdLvFog", 0, "hdLvShafts", 0, "hdLvMemory", 0, "hdLvHalos", 0, "hdLvTerrain", 0, "hdLvTerrainWmo", 1, "hdForeverForce", 0, "hdWmoLight", 1 })

    p:Section("Fog settings", false)
    p:Slider({ cvar = "hdFogDensity", label = "For Ever: density", min = 0, max = 3, step = 0.05, default = 1, forever = true })
    p:Slider({ cvar = "hdFogSun", label = "For Ever: sun colour", min = 0, max = 3, step = 0.05, default = 1, forever = true })
    p:Slider({ cvar = "hdFogAmbient", label = "For Ever: base colour", min = 0, max = 5, step = 0.05, default = 1, forever = true })
    p:Check({ cvar = "hdFogShadow", label = "For Ever: rays in the haze" })
    p:Slider({ cvar = "hdLvDensity", label = "Lumenveil: density", min = 0, max = 4, step = 0.05, default = 1 })
    p:Slider({ cvar = "hdLvQuality", label = "Lumenveil: quality (1 high, 3 fast)", min = 1, max = 3, step = 1, default = 2 })
    p:Slider({ cvar = "hdLvTemporal", label = "Lumenveil: stabilisation", min = 0, max = 0.95, step = 0.01, default = 0.85 })
    p:Check({ cvar = "hdLvMemory", label = "Lumenveil: obstacle memory", tip = "Needs Lumenveil fog and rays." })

    p:Section("Ray, glow and shadow settings", false)
    p:Slider({ cvar = "hdRaysStrength", label = "For Ever rays: strength", min = 0, max = 3, step = 0.05, default = 1, forever = true })
    p:Slider({ cvar = "hdLvShaftGain", label = "Lumenveil rays: strength", min = 0, max = 4, step = 0.05, default = 1 })
    p:Slider({ cvar = "hdBloomStrength", label = "For Ever glow: strength", min = 0, max = 3, step = 0.05, default = 1, forever = true })
    p:Slider({ cvar = "hdBloomThreshold", label = "For Ever glow: threshold", min = 0, max = 1, step = 0.01, default = 0.7, forever = true })
    p:Slider({ cvar = "hdLvHaloGain", label = "Lumenveil glow: strength in the haze", min = 0, max = 4, step = 0.05, default = 1 })
    p:Slider({ cvar = "hdLvCfg_LampFog", label = "Lumenveil glow: lamp light in the haze", min = 0, max = 4, step = 0.02, default = 1 })
    p:Slider({ cvar = "hdLvCfg_FarLights", label = "Lumenveil glow: distant lamps", min = 0, max = 4, step = 0.02, default = 1 })
    p:Check({ cvar = "hdLvTerrainWmo", label = "Terrain shadows: include buildings", tip = "Unticked: ground only." })

    p:Section("For Ever light and colours", false)
    p:Check({ cvar = "hdForever", label = "For Ever lights" })
    p:Check({ cvar = "hdGrade", label = "For Ever colour grading" })
    p:Check({ cvar = "hdSunPath", label = "Sun like For Ever" })
    p:Check({ cvar = "hdWmoLight", label = "For Ever buildings" })
    p:Slider({ cvar = "hdForeverLight", label = "Scenery (1 For Ever, 0 WotLK)", min = 0, max = 1, step = 0.05, default = 1, forever = true })
    p:Slider({ cvar = "hdTerrainLight", label = "Ground (1 For Ever, 0 WotLK, 2 test, 3 sun)", min = 0, max = 3, step = 1, default = 1, forever = true })
    p:Slider({ cvar = "hdLightAmbient", label = "Ground: ambient strength", min = 0, max = 1.5, step = 0.05, default = 1, forever = true })
    p:Slider({ cvar = "hdGradeStrength", label = "Colour grading: strength", min = 0, max = 2, step = 0.05, default = 1, forever = true })
    p:Input({ cvar = "hdForeverForce", label = "Force For Ever everywhere (0 = by location, e.g. 7624)" })

    p:Section("Test view and status", false)
    p:Slider({ cvar = "hdFogDebug", label = "Test view (0 normal, 3 haze, 4 shadows)", min = 0, max = 4, step = 1, default = 0, forever = true })
    p:Info(function() return Line("For Ever", "hdFogInfo") .. "\n" .. Line("Lumenveil", "hdLvInfo") end, 2)
end },

{ "lampes", "Lamps", function(p)
    p:Header("Lamps")
    p:Drop({ label = "What lights up around the lamps", current = LampMode, options = {
        { text = "Original WotLK", apply = function() SetMany({ "hdLights", 0, "hdLvLamps", 0 }) end },
        { text = "For Ever only", apply = function() SetMany({ "hdLights", 1, "hdLvLamps", 0 }) end },
        { text = "Lumenveil only", apply = function() SetMany({ "hdLights", 0, "hdLvLamps", 1, "hdLvLampClasses", 30 }) end, avail = function() return Has("hdLvLamps") end },
        { text = "For Ever + Lumenveil (building walls)", apply = function() SetMany({ "hdLights", 1, "hdLvLamps", 1, "hdLvLampClasses", 4, "hdLvLampForever", 1 }) end, avail = function() return Has("hdLvLamps") end },
        { text = "For Ever ground + true Lumenveil lights", apply = function() SetMany({ "hdLights", 1, "hdLvLamps", 1, "hdLvLampClasses", 28, "hdLvLampForever", 0 }) end, avail = function() return Has("hdLvLampForever") end },
    } })
    p:Drop({ label = "Player lantern", current = LanternMode, options = {
        { text = "Off", apply = function() SetMany({ "hdLvLantern", 0 }) end },
        { text = "Automatic (at night)", apply = function() SetMany({ "hdLvLantern", 1 }) end, avail = function() return Has("hdLvLantern") end },
        { text = "Always on", apply = function() SetMany({ "hdLvLantern", 2 }) end, avail = function() return Has("hdLvLantern") end },
    } })
    p:Drop({ label = "Spell lights (spell colour)", current = function()
        if not On("hdLvSpells") then return 1 end
        return (Has("hdLvSpellGround") and On("hdLvSpellGround")) and 3 or 2
    end, options = {
        { text = "None", apply = function() SetMany({ "hdLvSpells", 0, "hdLvSpellGround", 0 }) end },
        { text = "Lumenveil (uses lamp settings)", apply = function() SetMany({ "hdLvSpells", 1, "hdLvSpellGround", 0 }) end, avail = function() return Has("hdLvSpells") end },
        { text = "Lumenveil everywhere, including the ground", apply = function() SetMany({ "hdLvSpells", 1, "hdLvSpellGround", 1 }) end, avail = function() return Has("hdLvSpellGround") end },
    } })

    p:Check({ cvar = "hdLvLampForever", label = "Lumenveil uses For Ever colours", tip = "Unticked: Lumenveil lamps keep their own colours, even when For Ever lamps are on." })
    p:Reset({ "hdLvSpellGround", 0, "hdLvLampForever", 1, "hdLvLamps", 0, "hdLvLampClasses", 4, "hdLvSpells", 0, "hdLvLantern", 0, "hdLights", 1 })

    p:Section("Lamp settings", false)
    p:Slider({ cvar = "hdLights", label = "Ground lamps (1 For Ever, 0 WotLK)", min = 0, max = 3, step = 1, default = 1 })
    p:Slider({ cvar = "hdLvLampCount", label = "Lumenveil: number of lamps", min = 0, max = 128, step = 1, default = 32 })
    p:Slider({ cvar = "hdLvLampGain", label = "Lumenveil: intensity", min = 0, max = 4, step = 0.05, default = 1 })
    p:Slider({ cvar = "hdLvSpellGain", label = "Spells: intensity", min = 0, max = 4, step = 0.05, default = 1 })
    p:Header("What Lumenveil lights")
    p:Check({ label = "Building walls", get = function() return ClassBit(4) end, on = function(c) SetClassBit(4, c) end })
    p:Check({ label = "Ground (already lit)", get = function() return ClassBit(2) end, on = function(c) SetClassBit(2, c) end })
    p:Check({ label = "Interiors", get = function() return ClassBit(8) end, on = function(c) SetClassBit(8, c) end })
    p:Check({ label = "Models (already lit)", get = function() return ClassBit(16) end, on = function(c) SetClassBit(16, c) end })

    p:Section("Lantern colour", false)
    p:Slider({ cvar = "hdLvLanternR", label = "Red", min = 0, max = 4, step = 0.01, default = 1 })
    p:Slider({ cvar = "hdLvLanternG", label = "Green", min = 0, max = 4, step = 0.01, default = 0.55 })
    p:Slider({ cvar = "hdLvLanternB", label = "Blue", min = 0, max = 4, step = 0.01, default = 0.2 })

    p:Section("Status", false)
    p:Info(function() return Line("Lamps", "hdLvLampInfo") .. "\n" .. Line("Lumenveil", "hdLvInfo") .. "\n" .. Line("Ground lamps", "hdLightsInfo") .. "\n" .. Line("Spells", "hdLvSpellInfo") end, 5)
end },

{ "nature", "Water and grass", function(p)
    p:Header("Water and grass")
    p:Drop({ label = "Grass wind", current = function()
        local wind, sx = On("hdGrassWind"), Has("hdSxWind") and On("hdSxWind")
        if not wind then return 1 elseif not sx then return 2 else return 3 end
    end, options = {
        { text = "No wind", apply = function() SetMany({ "hdGrassWind", 0, "hdSxWind", 0 }) end },
        { text = "Waystone (your current wind)", apply = function() SetMany({ "hdGrassWind", 1, "hdSxWind", 0 }) end },
        { text = "Seyris (adjusts Waystone wind strength to the zone and weather)", apply = function() SetMany({ "hdGrassWind", 1, "hdSxWind", 1 }) end, avail = function() return Has("hdSxWind") end },
    } })
    p:Check({ cvar = "hdWater", label = "Water For Ever" })
    p:Check({ cvar = "hdWaterReflect", label = "Water reflections" })
    p:Check({ cvar = "hdGrassLight", label = "For Ever grass (lighting)" })
    p:Check({ cvar = "hdGrassReact", label = "Grass parts around the player" })
    p:Reset({ "hdSxWind", 0, "hdGrassWind", 1, "hdWater", 1, "hdWaterReflect", 1, "hdGrassLight", 1 })

    p:Section("Wind settings", false)
    p:Slider({ cvar = "hdGrassWindStrength", label = "Strength", min = 0, max = 5, step = 0.05, default = 1 })
    p:Slider({ cvar = "hdGrassWindSpeed", label = "Wave speed", min = 0, max = 10, step = 0.1, default = 3 })
    p:Slider({ cvar = "hdGrassWindDirection", label = "Direction (degrees)", min = 0, max = 360, step = 5, default = 45 })
    p:Slider({ cvar = "hdGrassReactRadius", label = "Parting: radius", min = 0, max = 10, step = 0.5, default = 2 })
    p:Info(function() return Line("Seyris", "hdSxInfo") end, 2)

    p:Section("Water settings", false)
    p:Slider({ cvar = "hdWaterBody", label = "Own colour (1 For Ever)", min = 0, max = 3, step = 0.05, default = 1, forever = true })
    p:Slider({ cvar = "hdWaterDebug", label = "Test view (0 normal, 1 depth, 3 reflections, 4 foam)", min = 0, max = 7, step = 1, default = 0, forever = true })
    p:Info(function() return Line("Status", "hdWaterInfo") end, 3)

    p:Section("Grass distance and density (applied on release)", false)
    p:Slider({ cvar = "farclip", label = "View distance", min = 200, max = 2500, step = 25, default = 1277, release = true })
    p:Slider({ cvar = "groundEffectDist", label = "Grass: distance (140 WotLK)", min = 0, max = 280, step = 10, default = 140, release = true })
    p:Slider({ cvar = "groundEffectDensity", label = "Grass: density (128 advised)", min = 16, max = 256, step = 8, default = 128, release = true })
    p:Slider({ cvar = "hdGrassBuffers", label = "Grass: buffers (0 = WotLK)", min = 0, max = 4096, step = 128, default = 1536, release = true })
    p:Slider({ cvar = "hdGrassPack", label = "Grass: right-sized buffers", min = 0, max = 1, step = 1, default = 1, release = true })
    p:Slider({ cvar = "hdGrassFillBudget", label = "Grass: fills per frame", min = 0, max = 200, step = 5, default = 60, release = true })
    p:Slider({ cvar = "hdGrassKeep", label = "Grass: keep off-screen", min = 0, max = 2000, step = 20, default = 600, release = true })
end },

{ "fluidite", "Upscaling", function(p)
    p:Header("Performance")
    p:Drop({ label = "Upscaler", current = UpscalerMode, options = {
        { text = "None", apply = function() SetMany({ "hdFSR", 0, "hdDLSS", 0 }); ApplyFsrMode() end },
        { text = "FSR 3.1 (AMD)", apply = function() SetMany({ "hdFSR", 1, "hdDLSS", 0 }); ApplyFsrMode() end, avail = function() return Has("hdFSR") end },
        { text = "DLSS (NVIDIA RTX, instead of FSR)", apply = function() SetMany({ "hdFSR", 0, "hdDLSS", 1 }); ApplyFsrMode() end, avail = function() return Has("hdDLSS") end },
    } })
    p:Drop({ label = "Quality", current = QualityMode, options = {
        { text = "Native (no upscaling)", apply = function() SetMany({ "hdFSRQuality", 0 }) end },
        { text = "Quality", apply = function() SetMany({ "hdFSRQuality", 1 }) end },
        { text = "Balanced", apply = function() SetMany({ "hdFSRQuality", 2 }) end },
        { text = "Performance", apply = function() SetMany({ "hdFSRQuality", 3 }) end },
    } })
    p:Check({ cvar = "hdFSRFrameGeneration", label = "Frame generation (about 2x)", on = function(c) Set("hdFSRFrameGeneration", c and 1 or 0); ApplyFsrMode() end })
    p:Reset({})

    p:Section("Sharpness", false)
    p:Slider({ cvar = "hdFSRSharpness", label = "FSR (0 none, 1 max)", min = 0, max = 1, step = 0.05, default = 0.2, release = true })
    p:Slider({ cvar = "hdDLSSSharpness", label = "DLSS (1 = max FSR, up to 2)", min = 0, max = 2, step = 0.05, default = 1, release = true })

    p:Section("Motion (reduces ghost trails)", false)
    p:Check({ cvar = "hdFSRObjectMotion", label = "Object motion" })
    p:Check({ cvar = "hdFSRRigidMotion", label = "  Rigid objects" })
    p:Check({ cvar = "hdFSRSkeletalMotion", label = "  Characters and creatures" })
    p:Check({ cvar = "hdFSRReactiveMasks", label = "Transparency masks" })
    p:Check({ cvar = "hdFSRDebugCheck", label = "AMD validation (uses FPS)" })

    p:Section("Status", false)
    p:Info(function()
        return Line("Upscaler", (Has("hdDLSS") and On("hdDLSS")) and "hdDLSSInfo" or "hdFSRInfo") .. "\n" .. Line("Generated frames", "hdFSRFrameGenerationInfo")
    end, 4)
end },

{ "perf", "Performance tools", function(p)
    p:Header("Measurement tools and logs")
    p:Note("Each checkbox enables a tool that measures performance or writes a log to Logs. These use CPU time or disk space: leave them off while playing and enable only what you need. Your choices are saved between sessions.")
    p:Button("Turn everything off (play with no measurement overhead)", 340, function()
        SetMany({ "hdCataRenderPerf", 0, "hdSunTelemetry", 0, "hdLvLampScan", 0, "hdCataWaterLog", 0, "hdLvFogLog", 0,
                  "hdCataHorizonVerify", 0, "hdLightsLog", 0, "hdFSRDebugCheck", 0 })
    end)
    p:Button("FPS measurement only (CPU counter, nothing else)", 340, function()
        SetMany({ "hdSunTelemetry", 0, "hdLvLampScan", 0, "hdCataWaterLog", 0, "hdLvFogLog", 0,
                  "hdCataHorizonVerify", 0, "hdLightsLog", 0, "hdFSRDebugCheck", 0, "hdCataRenderPerf", 1 })
    end)

    p:Header("Performance measurements")
    p:Check({ cvar = "hdCataRenderPerf", label = "CPU time per frame stage",
        tip = "Timing for each frame stage (Logs\\CataRenderPerf.log every 2 s; spikes in CataRenderSpikes.log). Used to measure FPS. Uses some CPU time (thousands of timers per frame), and log files grow quickly." })
    p:Check({ cvar = "hdFSRDebugCheck", label = "AMD FSR validation",
        tip = "AMD internal FSR validation. Costs FPS. Use only to investigate an FSR issue." })
    p:Info(function()
        if not On("hdCataRenderPerf") then return "CPU counter is off." end
        return "Last 2 s: " .. (Read("hdCataRenderPerfInfo") or "?")
    end, 4)

    p:Header("Diagnostic logs")
    p:Check({ cvar = "hdSunTelemetry", label = "Sun diagnostics",
        tip = "Detailed sun-shadow data each frame + Logs\\hdSunDiag.txt. Does not change shadows. (hdSunDebug also enables it.)" })
    p:Check({ cvar = "hdLvLampScan", label = "Find missing lamps",
        tip = "Compares every in-game light with the Lumenveil catalog each frame and writes Logs\\lumen-lampes-manquantes.txt. Expensive; use only to find lamps to add." })
    p:Check({ cvar = "hdCataWaterLog", label = "Water log",
        tip = "Logs\\hd-eau.txt once per second: water drawn near the camera and its reflection." })
    p:Check({ cvar = "hdLvFogLog", label = "Fog log",
        tip = "Logs\\lumen-brume.txt once per second (when Lumenveil fog is on)." })
    p:Check({ cvar = "hdCataHorizonVerify", label = "Horizon verification",
        tip = "Compares the Cata horizon index with the game selection (debug overhead). Only useful when the horizon index is enabled." })
    p:Check({ cvar = "hdLightsLog", label = "Light log (20 s)",
        tip = "Logs\\HdLights.log once per second for 20 seconds, then turns itself off." })
    p:Note("Always on, with no checkbox: Lumenveil spell logs (lumen-sorts.txt, lumen-projectiles.txt) write only while spells are active and have a line limit. Vulkan counters (Vulkan.log) are configured in Vulkan\\Vulkan.cfg (WXL_VK_STATS) and require a game restart.")

    p:Header("Measure the gain: automatic A/B test")
    p:Note("Stand in a busy area, keep the camera still, and do not touch anything for 2 min 30. The test alternates six 25 s phases: A = CPU counter, sun diagnostics, missing-lamp scan, water log and horizon check on; B = everything off. The first 5 seconds of each phase are excluded. Your original settings are restored when it ends.")
    p:Button("Start A/B test (2 min 30)", 340, function() AbDemarrer() end)
    p:Button("Simple 60 s measurement (nothing changes)", 340, function() AbDemarrer(true) end)
    p:Info(function() return ab.texte end, 3)

    p:Header("GPU profile (for HD)")
    p:Note("Run with the -Counters launcher. Turns off one effect at a time for 2 min 30 (9 phases, 23 min) to measure its GPU cost, then restores everything. The image changes during the test; this is expected. Keep the camera still and the game window in the foreground.")
    p:Button("Start GPU profile (23 min)", 340, function() GpuDemarrer() end)
    p:Info(function() return gpu.texte end, 2)
end },

{ "avance", "Advanced", function(p)
    p:Header("Lumenveil: advanced settings")
    p:Note("For experimentation. Has no effect while its matching Lumenveil checkbox is off.")
    p:Reset({})
    p:Section("Sliders", false)
    for _, d in ipairs(ADVANCED) do
        p:Slider({ cvar = d[1], label = d[2], min = d[3], max = d[4], step = d[5], default = d[6] })
    end
end },
}

-- ===================================================================== fenetre
local function Show(key)
    if openList then openList:Hide() end
    for _, p in ipairs(pages) do
        if p.key == key then
            if not p.built then p:Build() end
            p.scroll:Show(); p.button:LockHighlight(); current = p
        elseif p.built then p.scroll:Hide(); p.button:UnlockHighlight() end
    end
    if current then current:Refresh() end
end

local function BuildPanel()
    panel = CreateFrame("Frame", "WaystoneHDPanel", UIParent)
    panel:SetWidth(780); panel:SetHeight(600); panel:SetPoint("CENTER")
    panel:SetFrameStrata("DIALOG")
    panel:SetBackdrop({ bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background",
        edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border", tile = true, tileSize = 32, edgeSize = 32,
        insets = { left = 11, right = 12, top = 12, bottom = 11 } })
    panel:EnableMouse(true); panel:SetMovable(true); panel:SetClampedToScreen(true)
    panel:RegisterForDrag("LeftButton")
    panel:SetScript("OnDragStart", panel.StartMoving)
    panel:SetScript("OnDragStop", panel.StopMovingOrSizing)
    panel:Hide()
    tinsert(UISpecialFrames, "WaystoneHDPanel")
    local title = panel:CreateFontString(nil, "ARTWORK", "GameFontNormalLarge")
    title:SetPoint("TOP", 0, -16); title:SetText("Waystone HD")
    local close = CreateFrame("Button", nil, panel, "UIPanelCloseButton")
    close:SetPoint("TOPRIGHT", -6, -6)
    for i, d in ipairs(PAGEDEFS) do
        local page = NewPage(d[1], d[2], panel, d[3])
        local b = CreateFrame("Button", "WaystoneHDTab" .. i, panel, "UIPanelButtonTemplate")
        b:SetWidth(148); b:SetHeight(28)
        b:SetPoint("TOPLEFT", 16, -48 - (i - 1) * 32)
        b:SetText(d[2])
        b:SetScript("OnClick", function() Show(d[1]) end)
        page.button = b
        table.insert(pages, page)
    end
    local wait = 0
    panel:SetScript("OnUpdate", function(self, elapsed)
        wait = wait - elapsed
        if wait > 0 then return end
        wait = 0.5
        if current and not openList then current:Refresh() end
    end)
    panel:SetScript("OnHide", function() if openList then openList:Hide() end end)
end

local function Open(key)
    if not panel then BuildPanel() end
    if not panel:IsShown() then panel:Show() end
    Show(key or (current and current.key) or "accueil")
end

SLASH_WAYSTONEHD1 = "/hd"
SlashCmdList["WAYSTONEHD"] = function()
    if not panel then BuildPanel() end
    if panel:IsShown() then panel:Hide() else Open() end
end
SLASH_WAYSTONEHDLV1 = "/hdlumen"
SlashCmdList["WAYSTONEHDLV"] = function() Open("brouillard") end
SLASH_WAYSTONEHDLAMP1 = "/hdlampes"
SlashCmdList["WAYSTONEHDLAMP"] = function() Open("lampes") end

-- Au chargement : remet le mode FSR coherent avec les cases sauvegardees (et le vent M4 coupe).
local login = CreateFrame("Frame")
login:RegisterEvent("PLAYER_LOGIN")
login:SetScript("OnEvent", function() ApplyFsrMode() end)

