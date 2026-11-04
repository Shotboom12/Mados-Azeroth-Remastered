# Fabrique le pack joueur (zip a mettre dans une Release GitHub) a partir du dossier de jeu.
# A lancer depuis la racine de wowdecomp-main, apres avoir compile et copie WowClient64.exe.
$ErrorActionPreference = "Stop"
$root = (Get-Location).Path
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Test-Path (Join-Path $root "WowClient64.exe"))) { throw "WowClient64.exe introuvable : lance ce script depuis la racine de wowdecomp-main." }

$name = "WoW-HD-" + (Get-Date -Format "yyyy-MM-dd")
$out = Join-Path (Split-Path -Parent $root) "pack-joueur"
$stage = Join-Path $out $name
$client = Join-Path $stage "client"
if (Test-Path $stage) { Remove-Item -Recurse -Force $stage }
New-Item -ItemType Directory -Force $client | Out-Null

function Copy-Into($relative) {
    $source = Join-Path $root $relative
    if (-not (Test-Path $source)) { Write-Host "  absent, saute : $relative"; return }
    $target = Join-Path $client $relative
    New-Item -ItemType Directory -Force (Split-Path -Parent $target) | Out-Null
    Copy-Item -Recurse -Force $source $target
    Write-Host "  $relative"
}

Write-Host "Copie des fichiers du client :"
Copy-Into "WowClient64.exe"
Copy-Into "XvidDecoder.dll"
Copy-Into "Vulkan\shaders"
Copy-Into "Vulkan\optim-cata"
Copy-Into "CataWater"
Copy-Into "Interface\AddOns\WaystoneHD"
Get-ChildItem (Join-Path $root "forever_data") -Filter "hd_forever_*.txt" | ForEach-Object { Copy-Into ("forever_data\" + $_.Name) }
Copy-Into "forever_data\grading"
# L'eau Cata a besoin de ce patch : il passe l'eau en ProcWater (LiquidType.dbc) et apporte ses textures.
$patch = Join-Path $root "data\patch-w.mpq"
if (Test-Path $patch) {
    New-Item -ItemType Directory -Force (Join-Path $client "Data") | Out-Null
    Copy-Item -Force $patch (Join-Path $client "Data\patch-w.mpq")
    Write-Host "  Data\patch-w.mpq"
} else { Write-Host "  absent, saute : data\patch-w.mpq (l'eau restera celle de 3.3.5)" }

# Vulkan.cfg des joueurs : sans couche de validation (elle demande le Vulkan SDK) ni compteurs.
@(
    "# HD: settings of the Vulkan device (gxApi vulkan). KEY=value, '#' starts a comment.",
    "# 1 = validation layer (needs the Vulkan SDK). Keep 0 to play.",
    "WXL_VK_VALIDATION=0",
    "# 1 = per-frame counters in Logs\Vulkan.log.",
    "WXL_VK_STATS=0"
) | Set-Content -Encoding ASCII (Join-Path $client "Vulkan\Vulkan.cfg")

foreach ($f in "Installer.bat", "Installer.ps1", "Reglages-HD.txt", "LISEZMOI.txt") {
    Copy-Item -Force (Join-Path $here $f) $stage
}

$zip = Join-Path $out ($name + ".zip")
if (Test-Path $zip) { Remove-Item -Force $zip }
Write-Host "Compression (quelques minutes)..."
# Compress-Archive (PowerShell 5.1) ecrit des \ dans les noms du zip, que Linux et macOS lisent comme des noms de fichiers
# plats. On cree donc le zip nous-memes, avec des / (Windows lit les deux).
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$file = [System.IO.File]::Open($zip, [System.IO.FileMode]::Create)
$archive = New-Object System.IO.Compression.ZipArchive($file, [System.IO.Compression.ZipArchiveMode]::Create)
$prefix = $stage.TrimEnd("\") + "\"
foreach ($item in Get-ChildItem -Recurse -File $stage) {
    $entry = $item.FullName.Substring($prefix.Length).Replace("\", "/")
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $item.FullName, $entry, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
}
$archive.Dispose()
$file.Dispose()
Write-Host ("Pack pret : " + $zip + " (" + [math]::Round((Get-Item $zip).Length / 1MB) + " Mo)") -ForegroundColor Green
