-- FSR controls for WoW 3.3.5a (/hd, bouton "FSR / fluidite"). Loaded AFTER WaystoneHD.lua.
-- 2 nov 2026 : panneau complet. Le FSR tourne par le chemin teste et valide en jeu (hdFSRTest 2) :
-- des que la mise a l'echelle ou la generation d'images est cochee, hdFSRTest passe a 2 ; les deux decochees -> 0.
-- M4 (vent) reste toujours coupe : il fait sautiller les feuillages (systeme de vent jamais demarre).
-- 2 nov 2026 : case DLSS (hdDLSS, NVIDIA RTX). DLSS remplace le FSR pour la mise a l'echelle (memes entrees) ;
-- les deux cases s'excluent ; la generation d'images reste celle du FSR. Case grisee si l'exe n'a pas DLSS.
local window, checks = nil, {}
local names = { [0] = "Native AA (anti-crenelage, pas de gain de FPS)", [1] = "Qualite", [2] = "Equilibre", [3] = "Performance" }
local dlssNames = { [0] = "DLAA (anti-crenelage NVIDIA, pas de gain de FPS)", [1] = "Qualite", [2] = "Equilibre", [3] = "Performance" }
local reading = false
local function Read(name)
    local ok, value = pcall(GetCVar, name)
    if ok then return value end
end
local function Set(name, value) pcall(SetCVar, name, tostring(value)) end
local function On(name) return (tonumber(Read(name) or "0") or 0) ~= 0 end
local function ApplyMode()
    if Read("hdFSRWindMotion") and On("hdFSRWindMotion") then Set("hdFSRWindMotion", 0) end
    local want = (On("hdFSR") or On("hdFSRFrameGeneration") or (Read("hdDLSS") and On("hdDLSS"))) and 2 or 0
    if Read("hdFSRTest") and (tonumber(Read("hdFSRTest")) or 0) ~= want then Set("hdFSRTest", want) end
end
local function Refresh()
    if not window then return end
    reading = true
    for _, c in ipairs(checks) do
        local value = Read(c.cvar)
        c:SetChecked(tonumber(value or "0") ~= 0)
        if value then c:Enable(); c.label:SetTextColor(1, 0.82, 0) else c:Disable(); c.label:SetTextColor(0.5, 0.5, 0.5) end
    end
    -- a slider being dragged keeps the player's value: its CVar is only written on release
    if not window.quality.dragging then window.quality:SetValue(tonumber(Read("hdFSRQuality")) or 1) end
    if not window.sharpness.dragging then window.sharpness:SetValue(tonumber(Read("hdFSRSharpness")) or 0.2) end
    if Read("hdDLSSSharpness") then
        window.dlssSharpness:Show()
        if not window.dlssSharpness.dragging then window.dlssSharpness:SetValue(tonumber(Read("hdDLSSSharpness")) or 1) end
    else window.dlssSharpness:Hide() end
    local upscaler = (Read("hdDLSS") and On("hdDLSS")) and ("DLSS : " .. (Read("hdDLSSInfo") or "?"))
        or ("Mise a l'echelle : " .. (Read("hdFSRInfo") or "indisponible dans cette version"))
    window.state:SetText(upscaler
        .. "\nImages generees : " .. (Read("hdFSRFrameGenerationInfo") or "indisponible dans cette version"))
    reading = false
end
local function Build()
    window = CreateFrame("Frame", "WaystoneHDFsrPanel", UIParent)
    window:Hide()
    window:SetWidth(530); window:SetHeight(510); window:SetPoint("CENTER")
    window:SetFrameStrata("FULLSCREEN_DIALOG")
    window:SetBackdrop({ bgFile = "Interface\\DialogFrame\\UI-DialogBox-Background",
        edgeFile = "Interface\\DialogFrame\\UI-DialogBox-Border", tile = true, tileSize = 32, edgeSize = 32,
        insets = { left = 11, right = 12, top = 12, bottom = 11 } })
    window:EnableMouse(true); window:SetMovable(true); window:SetClampedToScreen(true)
    window:RegisterForDrag("LeftButton"); window:SetScript("OnDragStart", window.StartMoving)
    window:SetScript("OnDragStop", window.StopMovingOrSizing)
    local title = window:CreateFontString(nil, "ARTWORK", "GameFontNormalLarge")
    title:SetPoint("TOP", 0, -18); title:SetText("Waystone HD - FSR 3.1")
    local close = CreateFrame("Button", nil, window, "UIPanelCloseButton"); close:SetPoint("TOPRIGHT", -6, -6)
    local function Check(name, cvar, text, y)
        local c = CreateFrame("CheckButton", name, window, "UICheckButtonTemplate")
        c:SetWidth(26); c:SetHeight(26); c:SetPoint("TOPLEFT", 22, y)
        c.label = _G[name .. "Text"]; c.label:SetText(text); c.cvar = cvar
        c:SetScript("OnClick", function(self)
            if reading then return end
            Set(self.cvar, self:GetChecked() and 1 or 0)
            -- FSR et DLSS s'excluent : cocher l'un decoche l'autre
            if self:GetChecked() and self.other and Read(self.other) then Set(self.other, 0) end
            ApplyMode(); Refresh()
        end)
        table.insert(checks, c); return c
    end
    Check("WaystoneFsrUpscale",    "hdFSR",                "Mise a l'echelle FSR (plus de FPS en Qualite/Equilibre/Performance)", -47).other = "hdDLSS"
    Check("WaystoneFsrDlss",       "hdDLSS",               "Mise a l'echelle DLSS (NVIDIA RTX, a la place du FSR)", -73).other = "hdFSR"
    Check("WaystoneFsrGeneration", "hdFSRFrameGeneration", "Generation d'images (FG, environ x2 images affichees)", -102)
    Check("WaystoneFsrObjects",    "hdFSRObjectMotion",    "Mouvement des objets (contre les trainees)", -136)
    Check("WaystoneFsrRigid",      "hdFSRRigidMotion",     "  Objets rigides", -162)
    Check("WaystoneFsrSkeletal",   "hdFSRSkeletalMotion",  "  Personnages et creatures", -188)
    Check("WaystoneFsrMasks",      "hdFSRReactiveMasks",   "Masques des transparences (eau, effets ; FSR seulement)", -222)
    Check("WaystoneFsrDebug",      "hdFSRDebugCheck",      "Controle AMD (messages dans le journal, coute des FPS)", -256)
    local function Slider(name, cvar, y, lo, hi, step, label)
        local s = CreateFrame("Slider", name, window, "OptionsSliderTemplate")
        s:SetWidth(320); s:SetPoint("TOPLEFT", 34, y); s:SetMinMaxValues(lo, hi); s:SetValueStep(step)
        _G[name .. "Low"]:SetText(""); _G[name .. "High"]:SetText("")
        s:SetScript("OnValueChanged", function(self, v)
            local value = math.floor(v / step + 0.5) * step
            _G[name .. "Text"]:SetText(label(value))
        end)
        s:SetScript("OnMouseDown", function(self) self.dragging = true end)
        s:SetScript("OnMouseUp", function(self)
            self.dragging = nil
            if not reading then Set(cvar, math.floor(self:GetValue() / step + 0.5) * step) end
        end)
        return s
    end
    window.quality = Slider("WaystoneFsrQuality", "hdFSRQuality", -311, 0, 3, 1,
        function(v) return "Profil : " .. (((Read("hdDLSS") and On("hdDLSS")) and dlssNames or names)[v] or "Qualite") end)
    window.sharpness = Slider("WaystoneFsrSharpness", "hdFSRSharpness", -356, 0, 1, 0.05,
        function(v) return string.format("Nettete FSR : %.2f (0 = aucune, 1 = maximum)", v) end)
    window.dlssSharpness = Slider("WaystoneDlssSharpness", "hdDLSSSharpness", -401, 0, 2, 0.05,
        function(v) return string.format("Nettete DLSS : %.2f (1 = comme le maximum FSR, jusqu'a 2 = renforcee)", v) end)
    local state = window:CreateFontString(nil, "ARTWORK", "GameFontHighlightSmall")
    state:SetPoint("BOTTOMLEFT", 25, 24); state:SetWidth(480); state:SetJustifyH("LEFT")
    window.state = state
    local elapsed = 0
    window:SetScript("OnUpdate", function(self, dt) elapsed = elapsed + dt; if elapsed >= 0.5 then elapsed = 0; Refresh() end end)
    window:SetScript("OnShow", Refresh)
    tinsert(UISpecialFrames, "WaystoneHDFsrPanel")
end
function WaystoneHD_AttachFsrControls(panel, y)
    if panel.fsrButton then return end
    local button = CreateFrame("Button", nil, panel, "UIPanelButtonTemplate")
    button:SetWidth(150); button:SetHeight(22); button:SetPoint("TOPLEFT", 315, y - 7)
    button:SetText("FSR / fluidite")
    button:SetScript("OnClick", function()
        if not window then Build(); window:Show()
        elseif window:IsShown() then window:Hide() else window:Show() end
    end)
    panel:HookScript("OnHide", function() if window then window:Hide() end end)
    panel.fsrButton = button
end
-- Au chargement : remet le mode coherent avec les cases sauvegardees (et M4 coupe).
local login = CreateFrame("Frame")
login:RegisterEvent("PLAYER_LOGIN")
login:SetScript("OnEvent", function() ApplyMode() end)
