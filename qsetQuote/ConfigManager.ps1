Param(
    [switch]$HttpsEnabled, # Expose a secure site?
    [int]$WebPort, # The port to be exposed
    [string]$WebsiteEndpoint, # The base path, e.g. /MyService
    [switch]$AdfsAuthEnabled,
    [switch]$DockerMode, # Running in Docker
    [switch]$RunNpmStart,
    [switch]$KubernetesMode
)

$octopusScriptsRepoPath = "$Env:OCTOPUS_SCRIPTS_REPO_PATH"

if ($octopusScriptsRepoPath -eq "") {
    Write-Host "You need to set an Environment Variable called OCTOPUS_SCRIPTS_REPO_PATH which points at your local repository (e.g. 'C:\Source\OctopusScripts')." -ForegroundColor Red
    Exit
}

. "$octopusScriptsRepoPath/LocalBuildScripts/ConfigManagerCommon.ps1"
if (!$?) {
    Exit
}

$WebsiteEndpoint = $WebsiteEndpoint.TrimEnd('/') + "/"

$varMap = @{
    "httpsEnabled"           = $HttpsEnabled.IsPresent
    "webPort"                = $WebPort
    "websiteEndpoint"        = $WebsiteEndpoint
    "adfsAuthEnabled"        = $AdfsAuthEnabled.IsPresent
    "dockerMode"             = $DockerMode.IsPresent
    "runNpmStart"            = $RunNpmStart.IsPresent
    "kubernetesMode"         = $KubernetesMode.IsPresent
    "basePath"               = $PSScriptRoot
    "adfsIssuerThumbprint"   = "228F6C960AC11A9C5DA85AFD3D5F6D49E27A86E3"
    "serviceApiUrl"          = "https://cloudservices-dev.avantiagroup.co.uk/customerportalservice/api"
    "databaseCollectionName" = "CommonTable"
    "databaseEndpoint"       = "https://customerdev-cosmos.documents.azure.com:443/"
    "databaseKey"            = "RVeVcofyAvfwS3crHwbg4LaZ7cmCKZdmI6MYr8hV2lwDp3We2HtHldSYu4FsWoClO2nRqFx9yBRsawcQXCh2TQ=="
    "databaseName"           = "CustomerPortalDev"
}

Function ModifyEnvFile([Hashtable]$vs) {
    $envFile = "{{basePath}}/.env"
    $httpsString = "false"
    if ($vs["scheme"] -eq "https") {
        $httpsString = "true"
    }

    $useFilePersistence = "false"
    $developerModeEnabled = "false"
    if (!$vs["dockerMode"] -and !$vs["kubernetesMode"]) {
        $useFilePersistence = "true"
        $developerModeEnabled = "true"
    }

    $content = @"
PORT={{webPort}}
HTTPS=$httpsString
USE_SECURE_SERVER={{secureServerValue}}
WEBSITE_ENDPOINT={{websiteEndpoint}}
SCHEME_AND_HOST={{schemeAndHost}}
SERVER_PORT={{serverPort}}
FEATURE_TOGGLE_SERVICE_URI={{featureToggleServiceUri}}
FEATURE_TOGGLE_EXCEPTION_VALIDITY_WINDOW={{featureToggleExceptionValidityWindow}}
QUOTE_AND_BUY_SERVICE_URI=https://quote-staging.homeprotect.co.uk/api/
ADFS_AUTH_ENABLED={{isAdfsEnabled}}
ADFS_ISSUER_URI={{adfsIssuerUri}}
ADFS_ISSUER_THUMBPRINT={{adfsIssuerThumbprint}}
SERVE_STATIC_CONTENT={{serveStaticContent}}
ENVIRONMENT={{environment}}
USE_FILE_PERSISTENCE=$useFilePersistence
DATABASE_ENDPOINT={{databaseEndpoint}}
DATABASE_KEY={{databaseKey}}
DATABASE_NAME={{databaseName}}
DATABASE_COLLECTION_NAME={{databaseCollectionName}}
ADDRESS_LOOKUP_SERVICE_URI=https://quote-staging.homeprotect.co.uk/api/Questions
OPTIMISATION_ENABLED=true
GTM_ENABLED=true
HOME_PROTECT_HOMEPAGE_ENABLED=true
DD_APPLICATION_ID=0554b446-b12d-496d-8f17-d8a3780bc772
DD_CLIENT_TOKEN=pub39f12a277235769599c2c429bbf21098
DD_RUM_ENABLED=false
DD_TRACE_ENABLED=false
HOTJAR_ENABLED=false
HOTJAR_ID=0
HOTJAR_TRACKING_CODE=0
DEBUG_FLAGS=TimeTaken,Configuration
DEVELOPER_MODE_ENABLED=$developerModeEnabled
"@.Trim()
    WriteFile $envFile $content $vs
}

SetupVariableState $varMap
Write-Host "$($MyInvocation.MyCommand.Name) has started" -ForegroundColor Green
ModifyEnvFile $varMap
ModifyPackageJsonFile $varMap
ModifyDockerFile $varMap
ModifyDraftFile $varMap
Write-Host "$($MyInvocation.MyCommand.Name) has finished" -ForegroundColor Green

if ($varMap["runNpmStart"] -and -not $varMap["dockerMode"]) {
    npm start
}
