-- Waystone HD: one panel to play with the HD graphics settings live (/hd).
-- Every control just sets the console variable, so the result is the same as typing the command.

local ADDON = "WaystoneHD"

-- on/off switches
local TOGGLES = {
    { cvar = "hdForever", label = "Lumieres Forever" },
    { cvar = "hdFog", label = "Brouillard Forever" },
    { cvar = "hdBloom", label = "Halo (bloom)" },
    { cvar = "hdRays", label = "Rayons du soleil" },
    { cvar = "hdGrade", label = "Etalonnage Forever" },
    { cvar = "hdSunPath", label = "Soleil comme Forever" },
    { cvar = "hdFogShadow", label = "Rayons dans la brume" },
    { cvar = "hdShadowSun", label = "Ombres longues" },
    { cvar = "hdWater", label = "Eau Forever" },              -- HD: 1 = Forever PBR water, 0 = Blizzard
    { cvar = "hdWmoLight", label = "Batiments Forever" },     -- HD: 1 = Forever lighting in buildings, 0 = Blizzard
    { cvar = "hdGrassLight", label = "Herbe Forever" },       -- HD: 1 = Forever lighting on the grass, 0 = Blizzard
    { cvar = "hdWaterReflect", label = "Reflets de l'eau" },  -- HD: 1 = the world mirrored on the water, 0 = sky only
}

-- sliders: default = Forever's value (the "Forever" button puts these back)
local SLIDERS = {
    { cvar = "hdTime", label = "Heure (-1 = heure reelle)", min = -1, max = 24, step = 0.05, default = -1 },
    { cvar = "hdForeverLight", label = "Lumiere Forever sur le decor (1 Forever, 0 WotLK)", min = 0, max = 1, step = 0.05, default = 1 },
    { cvar = "hdTerrainLight", label = "Sol (1 Forever, 0 WotLK, 2 test, 3 soleil seul)", min = 0, max = 3, step = 1, default = 1 },
    { cvar = "hdLightAmbient", label = "Sol : force de l'ambiance (ombres)", min = 0, max = 1.5, step = 0.05, default = 1 },
    { cvar = "hdFogDensity", label = "Brouillard : densite", min = 0, max = 3, step = 0.05, default = 1 },
    { cvar = "hdFogSun", label = "Brouillard : couleur du soleil", min = 0, max = 3, step = 0.05, default = 1 },
    { cvar = "hdFogAmbient", label = "Brouillard : couleur de base", min = 0, max = 5, step = 0.05, default = 1 },
    { cvar = "hdBloomStrength", label = "Halo : force", min = 0, max = 3, step = 0.05, default = 1 },
    { cvar = "hdBloomThreshold", label = "Halo : seuil", min = 0, max = 1, step = 0.01, default = 0.7 },
    { cvar = "hdRaysStrength", label = "Rayons : force", min = 0, max = 3, step = 0.05, default = 1 },
    { cvar = "hdGradeStrength", label = "Etalonnage : force", min = 0, max = 2, step = 0.05, default = 1 },
    { cvar = "hdWaterBody", label = "Eau : couleur propre (1 Forever)", min = 0, max = 3, step = 0.05, default = 1 },
    { cvar = "hdWaterDebug", label = "Eau : vue test (0 normal, 1 prof., 3 reflets, 4 ecume, 7 fond)", min = 0, max = 7, step = 1, default = 0 }, -- HD: views 6, 7
    { cvar = "hdFogDebug", label = "Vue test (0 normal, 3 brume seule, 4 ombres)", min = 0, max = 4, step = 1, default = 0 },
}

-- HD: distance and grass. Applied when the mouse lets go of the slider (a grass change rebuilds the grass
-- buffers, so it is not sent at every step of the drag). The "Forever" button leaves these alone.
local WORLD = {
    { cvar = "farclip", label = "Distance de vue", min = 200, max = 2500, step = 25, default = 1277 },
    { cvar = "groundEffectDist", label = "Herbe : distance (140 WotLK, jusqu'a 280)", min = 0, max = 280, step = 10, default = 140 },
    { cvar = "groundEffectDensity", label = "Herbe : densite (64 avant, 128 conseille)", min = 16, max = 256, step = 8, default = 128 },
    { cvar = "hdGrassBuffers", label = "Herbe : tampons (0 = WotLK)", min = 0, max = 4096, step = 128, default = 1536 },
    { cvar = "hdGrassPack", label = "Herbe : tampons a la bonne taille (0 non, 1 oui)", min = 0, max = 1, step = 1, default = 1 },
    { cvar = "hdGrassFillBudget", label = "Herbe : remplissages par image (0 = sans limite)", min = 0, max = 200, step = 5, default = 60 },
    { cvar = "hdGrassKeep", label = "Herbe : garder hors ecran (images, 0 = WotLK)", min = 0, max = 2000, step = 20, default = 600 },
}

local WIDTH = 680          -- HD: wide panel, two columns of sliders, four of switches
local COLUMN = 330         -- distance between the two slider columns
local ROW = 44             -- height of one slider row

local panel, controls, updating = nil, {}, false

local function Num(cvar, fallback)
    return tonumber(GetCVar(cvar) or "") or fallback
end

local function Round(v, step)
    return math.floor(v / step + 0.5) * step
end

-- a console variable this client does not have (an older build) is left alone instead of raising an error
local function Set(cvar, value)
    pcall(SetCVar, cvar, value)
end

local function ShowValue(s)
    local v = s.slider:GetValue()
    if s.def.cvar == "hdTime" and v < 0 then
        s.value:SetText("reelle")
    elseif s.def.cvar == "hdTime" then
        local h = math.floor(v)
        s.value:SetText(string.format("%d:%02d", h, math.floor((v - h) * 60 + 0.5)))
    elseif s.def.step >= 1 then
        s.value:SetText(string.format("%d", v))
    else
        s.value:SetText(string.format("%.2f", v))
    end
end

-- read every console variable back into the controls (after a reset, or if a command changed one)
local function Refresh()
    updating = true
    for _, c in ipairs(controls) do
        if c.check then
            c.check:SetChecked(Num(c.def.cvar, 0) ~= 0)
        else
            c.slider:SetValue(Num(c.def.cvar, c.def.default))
            ShowValue(c)
        end
    end
    panel.force:SetText(tostring(Num("hdForeverForce", 0)))
    updating = false
end

-- one slider at column col (0 or 1), top at y; onRelease = send the value only when the mouse lets go
local function AddSlider(index, def, col, y, onRelease)
    local name = "WaystoneHDSlider" .. index
    local slider = CreateFrame("Slider", name, panel, "OptionsSliderTemplate")
    slider:SetWidth(250)
    slider:SetPoint("TOPLEFT", 24 + col * COLUMN, y)
    slider:SetMinMaxValues(def.min, def.max)
    slider:SetValueStep(def.step)
    _G[name .. "Text"]:SetText(def.label)
    _G[name .. "Low"]:SetText(def.min)
    _G[name .. "High"]:SetText(def.max)
    local value = panel:CreateFontString(nil, "ARTWORK", "GameFontHighlightSmall")
    value:SetPoint("LEFT", slider, "RIGHT", 8, 0)
    local s = { def = def, slider = slider, value = value }
    local function Send()
        local v = Round(slider:GetValue(), def.step)
        if def.cvar == "hdTime" and v < 0 then v = -1 end
        Set(def.cvar, tostring(v))
    end
    slider:SetScript("OnValueChanged", function(self, v)
        ShowValue(s)
        if not updating and not onRelease then Send() end
    end)
    if onRelease then
        slider:SetScript("OnMouseUp", function() if not updating then Send() end end)
    end
    table.insert(controls, s)
end

local function Build()
    local toggleRows = math.ceil(#TOGGLES / 4)
    local sliderRows = math.ceil(#SLIDERS / 2)
    local worldRows = math.ceil(#WORLD / 2)

    panel = CreateFrame("Frame", "WaystoneHDPanel", UIParent)
    panel:SetWidth(WIDTH)
    panel:SetHeight(250 + toggleRows * 26 + (sliderRows + worldRows) * ROW) -- HD: +40 for the water status
    panel:SetPoint("CENTER")
    panel:SetFrameStrata("DIALOG")
    panel:SetBackdrop({
        bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background",
        edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border",
        tile = true, tileSize = 32, edgeSize = 32,
        insets = { left = 11, right = 12, top = 12, bottom = 11 },
    })
    panel:EnableMouse(true)
    panel:SetMovable(true)
    panel:SetClampedToScreen(true)
    panel:RegisterForDrag("LeftButton")
    panel:SetScript("OnDragStart", panel.StartMoving)
    panel:SetScript("OnDragStop", panel.StopMovingOrSizing)
    panel:Hide()
    tinsert(UISpecialFrames, "WaystoneHDPanel") -- Escape closes it

    local title = panel:CreateFontString(nil, "ARTWORK", "GameFontNormalLarge")
    title:SetPoint("TOP", 0, -18)
    title:SetText("Waystone HD")

    local close = CreateFrame("Button", nil, panel, "UIPanelCloseButton")
    close:SetPoint("TOPRIGHT", -6, -6)

    local y = -44
    for i, def in ipairs(TOGGLES) do
        local check = CreateFrame("CheckButton", "WaystoneHDCheck" .. i, panel, "UICheckButtonTemplate")
        check:SetWidth(24)
        check:SetHeight(24)
        -- four columns
        local col = (i - 1) % 4
        check:SetPoint("TOPLEFT", 20 + col * 162, y - math.floor((i - 1) / 4) * 26)
        _G[check:GetName() .. "Text"]:SetText(def.label)
        check:SetScript("OnClick", function(self)
            Set(def.cvar, self:GetChecked() and "1" or "0")
        end)
        table.insert(controls, { def = def, check = check })
    end
    y = y - toggleRows * 26 - 16

    -- two columns: left column first, then the right one
    for i, def in ipairs(SLIDERS) do
        local col = i > sliderRows and 1 or 0
        local row = col == 0 and i - 1 or i - 1 - sliderRows
        AddSlider(i, def, col, y - row * ROW, false)
    end
    y = y - sliderRows * ROW

    local world = panel:CreateFontString(nil, "ARTWORK", "GameFontNormal")
    world:SetPoint("TOPLEFT", 24, y + 4)
    world:SetText("Distance et herbe (applique quand tu laches le curseur)")
    y = y - 22
    for i, def in ipairs(WORLD) do
        local col = i > worldRows and 1 or 0
        local row = col == 0 and i - 1 or i - 1 - worldRows
        AddSlider(#SLIDERS + i, def, col, y - row * ROW, true)
    end
    y = y - worldRows * ROW

    -- Forever setting forced everywhere (0 = by place), e.g. 7624 for the Amani Pass test
    local label = panel:CreateFontString(nil, "ARTWORK", "GameFontNormalSmall")
    label:SetPoint("TOPLEFT", 24, y + 6)
    label:SetText("Reglage Forever force (0 = selon l'endroit)")
    local force = CreateFrame("EditBox", "WaystoneHDForce", panel, "InputBoxTemplate")
    force:SetWidth(70)
    force:SetHeight(20)
    force:SetPoint("TOPLEFT", 30, y - 8)
    force:SetAutoFocus(false)
    force:SetNumeric(true)
    force:SetScript("OnEnterPressed", function(self)
        Set("hdForeverForce", tostring(tonumber(self:GetText()) or 0))
        self:ClearFocus()
    end)
    force:SetScript("OnEscapePressed", function(self) self:ClearFocus() Refresh() end)
    panel.force = force

    -- puts every slider back to Forever's values, real time, setting by place, test views off
    local reset = CreateFrame("Button", nil, panel, "UIPanelButtonTemplate")
    reset:SetWidth(120)
    reset:SetHeight(22)
    reset:SetPoint("TOPLEFT", 180, y - 7)
    reset:SetText("Valeurs Forever")
    reset:SetScript("OnClick", function()
        for _, def in ipairs(SLIDERS) do Set(def.cvar, tostring(def.default)) end
        Set("hdForeverForce", "0")
        Set("hdGradeDebug", "0")
        Set("hdBloomDebug", "0")
        Set("hdWmoLight", "1") -- HD: Forever lighting in buildings
        Set("hdWater", "1")    -- HD: Forever water
        Set("hdGrassLight", "1")   -- HD: Forever lighting on the grass
        Set("hdWaterReflect", "1") -- HD: water reflections
        Refresh()
    end)

    -- what hdFog is drawing right now (Forever setting, time, layers), and the ground shaders' state
    local info = panel:CreateFontString(nil, "ARTWORK", "GameFontHighlightSmall")
    info:SetPoint("BOTTOMLEFT", 20, 16)
    info:SetPoint("BOTTOMRIGHT", -20, 16)
    info:SetJustifyH("LEFT")
    local wait = 0
    panel:SetScript("OnUpdate", function(self, elapsed)
        wait = wait - elapsed
        if wait > 0 then return end
        wait = 0.5
        info:SetText((GetCVar("hdFogInfo") or "") .. "\nSol : " .. (GetCVar("hdTerrainInfo") or "")
            .. "\nEau : " .. (GetCVar("hdWaterInfo") or "")) -- HD: hdWater status
    end)
    panel:SetScript("OnShow", Refresh)
end

SLASH_WAYSTONEHD1 = "/hd"
SlashCmdList["WAYSTONEHD"] = function()
    if not panel then Build() end
    if panel:IsShown() then panel:Hide() else panel:Show() end
end
