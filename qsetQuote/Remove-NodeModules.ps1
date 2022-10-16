Param(
    [switch]$NoNpmInstall,
    [switch]$ClearCache
)

if ($ClearCache.IsPresent) {
    Write-Host "Clearing the npm cache"
    npm cache clean --force
}

$deleteList = @( "package-lock.json", ".npmrc", "node_modules")
foreach ($deleteItem in $deleteList) {
    $path = "$PSScriptRoot/$deleteItem"
    if (Test-Path $path) {
        Remove-Item $path -Recurse -Force
        if ($?) {
            Write-Host "Deleted $path"
        }
        else {
            Write-Host "Failed to delete $path" -ForegroundColor Red -BackgroundColor Black
        }
    }
    else {
        Write-Host "Could not find $path" -ForegroundColor Yellow -BackgroundColor Black
    }
}

if (-Not $NoNpmInstall.IsPresent) {
    Write-Host "Installing NPM packages..." -ForegroundColor Green
    npm install
}
