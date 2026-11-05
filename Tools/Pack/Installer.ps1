# Installs the HD client into a World of Warcraft 3.3.5a (12340) client.
# Run Installer.bat instead of this file; it handles the PowerShell execution policy.
$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$pack = Join-Path $here "client"

function Fail($msg) {
    Write-Host ""
    Write-Host "ERROR: $msg" -ForegroundColor Red
    exit 1
}

function Warn($msg) {
    Write-Host "WARNING: $msg" -ForegroundColor Yellow
}

if (-not (Test-Path (Join-Path $pack "WowClient64.exe"))) {
    Fail "The pack's 'client' folder was not found. Extract the entire package before running the installer."
}

# 1) Find the WoW client: the package folder, its parent, or a folder selected by the player.
#    Un client est un dossier qui contient Data\common.MPQ (Wow.exe n'est pas obligatoire).
function Test-Client($folder) { $folder -and (Test-Path (Join-Path $folder "Data\common.MPQ")) }
$wow = $null
foreach ($candidate in @($here, (Split-Path -Parent $here))) {
    if (Test-Client $candidate) { $wow = $candidate; break }
}
if (-not $wow) {
    Add-Type -AssemblyName System.Windows.Forms
    $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
    $dialog.Description = "Select your WoW 3.3.5a client folder (the one containing the Data folder)"
    if ($dialog.ShowDialog() -ne [System.Windows.Forms.DialogResult]::OK) { Fail "No folder was selected." }
    $wow = $dialog.SelectedPath
}
if (-not (Test-Client $wow)) { Fail "Data\common.MPQ was not found in $wow; this folder does not contain a complete WoW client." }
Write-Host "WoW client: $wow"

# 2) Check build 12340, Vulkan driver, and Visual C++ runtime.
$wowExe = Join-Path $wow "Wow.exe"
if (Test-Path $wowExe) {
    $version = (Get-Item $wowExe).VersionInfo
    if (($version.FileVersion -replace '[^0-9]', '') -notmatch '12340$') {
        Warn "Wow.exe is not version 3.3.5a (12340) (found version: $($version.FileVersion)). The HD client may not work."
    }
}
$data = Join-Path $wow "Data"
if (-not (Test-Path (Join-Path $env:WINDIR "System32\vulkan-1.dll"))) {
    Warn "Vulkan is not installed. Update your graphics driver (NVIDIA, AMD, or Intel), then run the installer again."
}
$vc = Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\VisualStudio\14.0\VC\Runtimes\x64" -ErrorAction SilentlyContinue
if (-not $vc -or $vc.Installed -ne 1) {
    Write-Host "Installing the Microsoft Visual C++ (x64) runtime..."
    $redist = Join-Path $env:TEMP "vc_redist.x64.exe"
    Invoke-WebRequest -UseBasicParsing "https://aka.ms/vs/17/release/vc_redist.x64.exe" -OutFile $redist
    Start-Process -Wait $redist -ArgumentList "/install", "/passive", "/norestart"
}

# 3) Copy the package files into the client.
Write-Host "Copying HD files..."
Get-ChildItem $pack | ForEach-Object { Copy-Item -Recurse -Force $_.FullName $wow }

# 4) Write the HD settings to WTF\Config.wtf (the player's other settings are kept).
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

# 5) Server address (optional).
$realm = Read-Host "Server address (leave blank to keep the address already configured in your client)"
if ($realm) {
    Set-CVar "realmList" $realm
    Get-ChildItem $data -Directory | Where-Object { Test-Path (Join-Path $_.FullName "realmlist.wtf") } | ForEach-Object {
        # Many clients mark realmlist.wtf as read-only; clear that flag before writing.
        $file = Join-Path $_.FullName "realmlist.wtf"
        try {
            Set-ItemProperty $file -Name IsReadOnly -Value $false
            Set-Content -Encoding ASCII $file "set realmlist $realm"
        } catch {
            Warn "Could not edit $file. Open it and add: set realmlist $realm"
        }
    }
}
Set-Content -Encoding ASCII $config $lines

# 6) Create a desktop shortcut.
$shell = New-Object -ComObject WScript.Shell
$link = $shell.CreateShortcut((Join-Path ([Environment]::GetFolderPath("Desktop")) "WoW HD.lnk"))
$link.TargetPath = Join-Path $wow "WowClient64.exe"
$link.WorkingDirectory = $wow
$link.Save()

Write-Host ""
Write-Host "Installation complete. Launch the game using the 'WoW HD' desktop shortcut." -ForegroundColor Green
