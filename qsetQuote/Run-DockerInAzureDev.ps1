Param(
    [ValidateSet("development", "poc")]
    [string]$DraftProfile = "development",

    [switch]$Stop
)

$Pod = "homeprotecttweb"
$octopusScriptsRepoPath = "$Env:OCTOPUS_SCRIPTS_REPO_PATH"

if ($octopusScriptsRepoPath -eq "") {
    Write-Host "You need to set an Environment Variable called OCTOPUS_SCRIPTS_REPO_PATH which points at your local repository (e.g. 'C:\Source\OctopusScripts')." -ForegroundColor Red
    exit
}

& "$octopusScriptsRepoPath\LocalBuildScripts\RunDockerInAzureUsingDraft.ps1" `
    -Pod $Pod `
    -DraftProfile $DraftProfile `
    -Stop:$Stop.IsPresent `
    -AcrEnv "dev"
