Param(
    [switch]$NoBuild, # Do not build the Docker container before running
    [switch]$Stop,
    [switch]$HttpsEnabled,
    [int]$WebPort, # The port to be exposed
    [string]$WebsiteEndpoint, # The base path, e.g. /MyService
    [switch]$AdfsAuthEnabled # Use ADFS
)

$octopusScriptsRepoPath = "$Env:OCTOPUS_SCRIPTS_REPO_PATH"

if ($octopusScriptsRepoPath -eq "") {
    Write-Host "You need to set an Environment Variable called OCTOPUS_SCRIPTS_REPO_PATH which points at your local repository (e.g. 'C:\Source\OctopusScripts')." -ForegroundColor Red
    exit
}

. "$octopusScriptsRepoPath\LocalBuildScripts\CommonFeatures.ps1"

& "$PSScriptRoot\ConfigManager.ps1" `
    -HttpsEnabled:$HttpsEnabled.IsPresent `
    -WebPort $WebPort `
    -WebsiteEndpoint "$WebsiteEndpoint" `
    -AdfsAuthEnabled:$AdfsAuthEnabled.IsPresent `
    -DockerMode

$ContainerName = "questionsetweb"
#$NetworkName = "dockernet"
#$Subnet = "10.0.10.7/24"

# Copy .npmrc from profile to current directory
Copy-Item "~/.npmrc" "$PSScriptRoot/" -Force

$envMap = New-Object 'System.Collections.Generic.SortedDictionary[[string],[string]]'

$envLines = (Get-Content "$PSScriptRoot\.env" -Raw).Split("`n")
foreach ($line in $envLines) {
    $line = $line.Trim()
    $i = $line.IndexOf("=")
    if ($i -gt 0) {
        $envMap[$line.Substring(0, $i)] = $line.Substring($i + 1)
    }
}

$envMap["NODEJS_CONFIG_ENVIRONMENT"] = "Octopus"
$envMap["RELEASE_VERSION"] = "0.0.1"
$envMap["SERVE_STATIC_CONTENT"] = "true" # Override .env file
$envMap["PORT_APPLICATION"] = $envMap["SERVER_PORT"]
$envMap["PORT_EXPOSED"] = $envMap["PORT"]

& "$octopusScriptsRepoPath/LocalBuildScripts/RunDockerLocally.ps1" `
    -ContainerName $ContainerName `
    -EnvVarsMap $envMap `
    -NetworkName $NetworkName `
    -NetworkSubnet $Subnet `
    -NoBuild:$NoBuild.IsPresent `
    -Stop:$Stop.IsPresent `
    -UseAzureImage:$UseAzureImage.IsPresent `
    -NoBuildCache:$true
