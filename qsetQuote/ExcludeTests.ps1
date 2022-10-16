Param(
    [string]$ExceptName,
    [switch]$Undo
)

$testExtn = ".test.ts"
$excludedExtn = ".test-excluded.ts"
$filter = "*$testExtn"

if ($Undo.IsPresent) {
    $filter = "*$excludedExtn"
}

Get-ChildItem -Path $PSScriptRoot -Exclude node_modules -Directory | ForEach-Object {
    $childDir = $_.FullName
    Get-ChildItem -Path $childDir -Recurse -File -Filter $filter | ForEach-Object {
        $fullPath = $_.FullName;
        $isExcept = $false
        if ($_.Name.Replace($testExtn, "") -eq $ExceptName) {
            $isExcept = $true
        }

        if (-Not $Undo.IsPresent) {
            if (-Not $isExcept) {
                Move-Item $fullPath $fullPath.Replace($testExtn, $excludedExtn)
            }
        }
        else {
            Move-Item $fullPath $fullPath.Replace($excludedExtn, $testExtn)
        }
    }
}
