# Installe le client HD dans un client World of Warcraft 3.3.5a (12340).
# Lance Installer.bat plutot que ce fichier : il passe la politique d'execution de PowerShell.
$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$pack = Join-Path $here "client"

function Fail($msg) {
    Write-Host ""
    Write-Host "ERREUR : $msg" -ForegroundColor Red
    exit 1
}

function Warn($msg) {
    Write-Host "ATTENTION : $msg" -ForegroundColor Yellow
}

if (-not (Test-Path (Join-Path $pack "WowClient64.exe"))) {
    Fail "le dossier 'client' du pack est introuvable. Dezippe tout le pack avant de lancer l'installeur."
}

# 1) Trouver le client WoW : le dossier du pack, son parent, ou celui que le joueur choisit.
#    Un client est un dossier qui contient Data\common.MPQ (Wow.exe n'est pas obligatoire).
function Test-Client($folder) { $folder -and (Test-Path (Join-Path $folder "Data\common.MPQ")) }
$wow = $null
foreach ($candidate in @($here, (Split-Path -Parent $here))) {
    if (Test-Client $candidate) { $wow = $candidate; break }
}
if (-not $wow) {
    Add-Type -AssemblyName System.Windows.Forms
    $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
    $dialog.Description = "Choisis le dossier de ton client WoW 3.3.5a (celui qui contient le dossier Data)"
    if ($dialog.ShowDialog() -ne [System.Windows.Forms.DialogResult]::OK) { Fail "aucun dossier choisi." }
    $wow = $dialog.SelectedPath
}
if (-not (Test-Client $wow)) { Fail "Data\common.MPQ est introuvable dans $wow : ce dossier ne contient pas un client WoW complet." }
Write-Host "Client WoW : $wow"

# 2) Verifications : version 12340, pilote Vulkan, runtime Visual C++.
$wowExe = Join-Path $wow "Wow.exe"
if (Test-Path $wowExe) {
    $version = (Get-Item $wowExe).VersionInfo
    if (($version.FileVersion -replace '[^0-9]', '') -notmatch '12340$') {
        Warn "Wow.exe n'est pas la version 3.3.5a (12340) (version trouvee : $($version.FileVersion)). Le client HD risque de ne pas marcher."
    }
}
$data = Join-Path $wow "Data"
if (-not (Test-Path (Join-Path $env:WINDIR "System32\vulkan-1.dll"))) {
    Warn "Vulkan n'est pas installe. Mets a jour le pilote de ta carte graphique (NVIDIA, AMD ou Intel), puis relance l'installeur."
}
$vc = Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\VisualStudio\14.0\VC\Runtimes\x64" -ErrorAction SilentlyContinue
if (-not $vc -or $vc.Installed -ne 1) {
    Write-Host "Installation du runtime Microsoft Visual C++ (x64)..."
    $redist = Join-Path $env:TEMP "vc_redist.x64.exe"
    Invoke-WebRequest -UseBasicParsing "https://aka.ms/vs/17/release/vc_redist.x64.exe" -OutFile $redist
    Start-Process -Wait $redist -ArgumentList "/install", "/passive", "/norestart"
}

# 3) Copier les fichiers du pack dans le client.
Write-Host "Copie des fichiers HD..."
Get-ChildItem $pack | ForEach-Object { Copy-Item -Recurse -Force $_.FullName $wow }

# 4) Ecrire les reglages HD dans WTF\Config.wtf (les autres reglages du joueur sont gardes).
$wtf = Join-Path $wow "WTF"
New-Item -ItemType Directory -Force $wtf | Out-Null
$config = Join-Path $wtf "Config.wtf"
$lines = New-Object System.Collections.Generic.List[string]
if (Test-Path $config) { Get-Content $config | ForEach-Object { $lines.Add($_) } }
function Set-CVar($name, $value) {
    $line = "SET $name `"$value`""
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match "^SET\s+$([regex]::Escape($name))\s") { $lines[$i] = $line; return }
    }
    $lines.Add($line)
}
Get-Content (Join-Path $here "Reglages-HD.txt") | ForEach-Object {
    if ($_ -match '^SET\s+(\S+)\s+"(.*)"') { Set-CVar $Matches[1] $Matches[2] }
}

# 5) Adresse du serveur (optionnel).
$realm = Read-Host "Adresse du serveur (laisse vide pour garder celle de ton client)"
if ($realm) {
    Set-CVar "realmList" $realm
    Get-ChildItem $data -Directory | Where-Object { Test-Path (Join-Path $_.FullName "realmlist.wtf") } | ForEach-Object {
        # Beaucoup de clients mettent realmlist.wtf en lecture seule : on enleve ce verrou avant d'ecrire.
        $file = Join-Path $_.FullName "realmlist.wtf"
        try {
            Set-ItemProperty $file -Name IsReadOnly -Value $false
            Set-Content -Encoding ASCII $file "set realmlist $realm"
        } catch {
            Warn "impossible de modifier $file. Ouvre-le et ecris dedans : set realmlist $realm"
        }
    }
}
Set-Content -Encoding ASCII $config $lines

# 6) Raccourci sur le bureau.
$shell = New-Object -ComObject WScript.Shell
$link = $shell.CreateShortcut((Join-Path ([Environment]::GetFolderPath("Desktop")) "WoW HD.lnk"))
$link.TargetPath = Join-Path $wow "WowClient64.exe"
$link.WorkingDirectory = $wow
$link.Save()

Write-Host ""
Write-Host "Installation terminee. Lance le jeu avec le raccourci 'WoW HD' sur ton bureau." -ForegroundColor Green
