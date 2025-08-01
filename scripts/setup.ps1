#!/usr/bin/env pwsh
<#$
.SYNOPSIS
    Initializes a local Quartz environment.
#>

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js is not installed. Please install Node 22+ and rerun."
    exit 1
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "npm is not installed. Please install npm 10.9.2+ and rerun."
    exit 1
}

$versionString = node -v
$nodeVersion = [version]$versionString.TrimStart('v')
if ($nodeVersion.Major -lt 22) {
    Write-Error "Node.js 22+ required. Found $versionString"
    exit 1
}

npm install
npx quartz create
