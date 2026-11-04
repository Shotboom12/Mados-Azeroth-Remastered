-- Waystone HD : lumiere par zone et par heure (3 nov 2026).
-- Tu regles la lumiere a ton gout dans une zone a une heure, tu cliques "Garder ici a cette heure" (ou /hdheure).
-- Le jeu retient le point (zone, heure, valeurs). Ensuite, dans cette zone, les valeurs suivent l'heure :
-- entre deux points elles glissent doucement de l'un a l'autre ; avec un seul point, la valeur reste fixe.
-- Dans une zone sans point, les valeurs d'avant reviennent. Tout est garde dans WaystoneHDHeures (SavedVariables).

local SUIVIS = { "hdLvCfg_SunScatter", "hdLvCfg_ViewLight", "hdLvCfg_AntiGlare", "hdLvCfg_ShaftGlare" }
local NOMS = { hdLvCfg_SunScatter = "soleil dans la brume", hdLvCfg_ViewLight = "angle", hdLvCfg_AntiGlare = "anti-eblouissement", hdLvCfg_ShaftGlare = "eclat des rayons" }

local function Read(name) local ok, v = pcall(GetCVar, name); if ok then return v end end
local function Has(name) return Read(name) ~= nil end
local function Say(text) if DEFAULT_CHAT_FRAME then DEFAULT_CHAT_FRAME:AddMessage("|cffffd200Waystone HD|r : " .. text) end end

local function Zone()
    local z = GetRealZoneText and GetRealZoneText() or nil
    if not z or z == "" then z = GetZoneText and GetZoneText() or "?" end
    return z
end

-- heure du jeu en heures (19.5 = 19 h 30) ; si l'heure est forcee par le curseur hdTime, c'est elle qui compte
local function Heure()
    local forced = tonumber(Read("hdTime") or "")
    if forced and forced >= 0 then return forced % 24 end
    local h, m = 12, 0
    if GetGameTime then h, m = GetGameTime() end
    return (h + m / 60) % 24
end

local function HeureTexte(h)
    local hh = math.floor(h); local mm = math.floor((h - hh) * 60 + 0.5)
    if mm == 60 then hh = (hh + 1) % 24; mm = 0 end
    return string.format("%d h %02d", hh, mm)
end

local function Base()
    if type(WaystoneHDHeures) ~= "table" then WaystoneHDHeures = {} end
    return WaystoneHDHeures
end

-- valeur a l'heure t a partir des points (tries par heure), en tournant autour de minuit
local function Valeur(points, name, t)
    local list = {}
    for _, p in ipairs(points) do if p.v and p.v[name] then list[#list + 1] = p end end
    if #list == 0 then return nil end
    if #list == 1 then return list[1].v[name] end
    table.sort(list, function(a, b) return a.h < b.h end)
    local prev, next = list[#list], list[1]
    for i = 1, #list do
        if list[i].h <= t then prev = list[i]; next = list[i + 1] or list[1] end
    end
    if t < list[1].h then prev = list[#list]; next = list[1] end
    local span = (next.h - prev.h) % 24
    if span == 0 then return prev.v[name] end
    local u = ((t - prev.h) % 24) / span
    u = u * u * (3 - 2 * u)   -- depart et arrivee en douceur, pas de cassure au passage d'un point
    return prev.v[name] + (next.v[name] - prev.v[name]) * u
end

local avant = {}   -- valeurs d'avant l'automatique, remises en sortant d'une zone reglee
local pose = {}    -- derniere valeur posee par l'automatique
local pause = {}
local function _() end   -- reglage change a la main (/console) : l'automatique le laisse tranquille jusqu'a "Garder"
-- Jamais de saut : la valeur posee glisse vers la cible (moitie du chemin en ~3 s), en entrant ou en sortant
-- d'une zone, apres "Garder" ou "Effacer". Entre deux points, la cible elle-meme suit l'heure en douceur.
local DEMI_VIE = 3.0
local function Glisser(name, cur, target, dt)
    local k = 1 - 0.5 ^ (dt / DEMI_VIE)
    local x = cur + (target - cur) * k
    if math.abs(target - x) < 0.002 then x = target end
    return x
end
local function Appliquer(dt)
    dt = dt or 0.5
    local points = Base()[Zone()]
    local t = Heure()
    for _, name in ipairs(SUIVIS) do
        if Has(name) then
            local cur = tonumber(Read(name) or "")
            if pose[name] and cur and math.abs(cur - pose[name]) > 0.0015 then pause[name] = true end
            local v = points and Valeur(points, name, t)
            local target
            if v and not pause[name] then
                if avant[name] == nil then avant[name] = cur end
                target = v
            elseif not v and avant[name] ~= nil and not pause[name] then
                target = avant[name]
            end
            if target and cur then
                local x = Glisser(name, cur, target, dt)
                if math.abs(x - cur) > 0.00001 then pcall(SetCVar, name, string.format("%.4f", x)) end
                pose[name] = tonumber(Read(name) or "") or x
                if not v and x == target then avant[name] = nil; pose[name] = nil end
            elseif not v then
                avant[name] = nil; pose[name] = nil; pause[name] = nil
            end
        end
    end
end

function WaystoneHD_HeuresGarder()
    local zone, h = Zone(), Heure()
    local pts = Base()[zone] or {}
    local v, n = {}, 0
    for _, name in ipairs(SUIVIS) do
        local x = tonumber(Read(name) or "")
        if x then v[name] = x; n = n + 1 end
    end
    if n == 0 then Say("aucun reglage de lumiere Lumenveil trouve dans ce jeu."); return end
    -- un point a moins de 15 minutes est remplace
    for i = #pts, 1, -1 do
        local d = math.abs(pts[i].h - h); d = math.min(d, 24 - d)
        if d < 0.25 then table.remove(pts, i) end
    end
    pts[#pts + 1] = { h = h, v = v }
    table.sort(pts, function(a, b) return a.h < b.h end)
    Base()[zone] = pts
    pause = {}
    for k, x in pairs(v) do pose[k] = x end
    Say(string.format("garde pour %s a %s (soleil dans la brume %.2f). %d point(s) dans cette zone.", zone, HeureTexte(h), v.hdLvCfg_SunScatter or -1, #pts))
end

function WaystoneHD_HeuresEffacer()
    local zone = Zone()
    Base()[zone] = nil
    pause = {}   -- les valeurs d'avant reviennent en glissant (Appliquer)
    Say("points effaces pour " .. zone .. ".")
end

function WaystoneHD_HeuresTexte()
    local zone, h = Zone(), Heure()
    local pts = Base()[zone]
    local s = zone .. ", " .. HeureTexte(h) .. " : "
    if not pts or #pts == 0 then return s .. "aucun point (reglages normaux)." end
    local parts = {}
    for _, p in ipairs(pts) do parts[#parts + 1] = HeureTexte(p.h) .. " = " .. string.format("%.2f", p.v.hdLvCfg_SunScatter or -1) end
    if pause.hdLvCfg_SunScatter then return s .. #pts .. " point(s) [" .. table.concat(parts, ", ") .. "], EN PAUSE : tu l'as change a la main, clique Garder pour retenir ta valeur" end
    local now = Valeur(pts, "hdLvCfg_SunScatter", h)
    return s .. #pts .. " point(s) [" .. table.concat(parts, ", ") .. "], soleil dans la brume maintenant " .. (now and string.format("%.2f", now) or "-")
end

SLASH_WAYSTONEHDHEURE1 = "/hdheure"
SlashCmdList.WAYSTONEHDHEURE = function(msg)
    msg = (msg or ""):lower()
    if msg == "efface" or msg == "effacer" then WaystoneHD_HeuresEffacer()
    elseif msg == "liste" then Say(WaystoneHD_HeuresTexte())
    elseif msg == "" or msg == "garde" or msg == "garder" then WaystoneHD_HeuresGarder()
    else Say(WaystoneHD_HeuresTexte()) end
end

local f = CreateFrame("Frame")
local acc = 0
f:SetScript("OnUpdate", function(_, dt) acc = acc + (dt or 0); if acc >= 0.25 then Appliquer(acc); acc = 0 end end)
WaystoneHD_HeuresAppliquer = Appliquer
