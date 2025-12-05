# Create Azure DevOps Pipelines Script
# This script creates the three pipelines for twoChurch

param(
    [Parameter(Mandatory=$true)]
    [string]$PAT
)

$azPath = "C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd"
$org = "https://dev.azure.com/ITSolutionsLLC"
$project = "twoChurch"

Write-Host "=== Creating Azure DevOps Pipelines ===" -ForegroundColor Cyan
Write-Host ""

# Login with PAT
$env:AZURE_DEVOPS_EXT_PAT = $PAT

# Configure defaults
& $azPath devops configure --defaults organization=$org project=$project

Write-Host "Step 1: Creating Main Pipeline..." -ForegroundColor Yellow
try {
    & $azPath pipelines create `
        --name "twoChurch-Main" `
        --description "Main orchestration pipeline for twoChurch" `
        --repository "https://github.com/ITSolutionsLLC/twoChurch" `
        --repository-type github `
        --branch main `
        --yml-path azure-pipelines.yml `
        --organization $org `
        --project $project
    Write-Host "✓ Main pipeline created" -ForegroundColor Green
} catch {
    Write-Host "✗ Failed to create main pipeline: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "Step 2: Creating Web Pipeline..." -ForegroundColor Yellow
try {
    & $azPath pipelines create `
        --name "twoChurch-Web" `
        --description "Web application (Next.js) pipeline" `
        --repository "https://github.com/ITSolutionsLLC/twoChurch" `
        --repository-type github `
        --branch main `
        --yml-path azure-pipelines-web.yml `
        --organization $org `
        --project $project
    Write-Host "✓ Web pipeline created" -ForegroundColor Green
} catch {
    Write-Host "✗ Failed to create web pipeline: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "Step 3: Creating Mobile Pipeline..." -ForegroundColor Yellow
try {
    & $azPath pipelines create `
        --name "twoChurch-Mobile" `
        --description "Mobile application (React Native/Expo) pipeline" `
        --repository "https://github.com/ITSolutionsLLC/twoChurch" `
        --repository-type github `
        --branch main `
        --yml-path azure-pipelines-mobile.yml `
        --organization $org `
        --project $project
    Write-Host "✓ Mobile pipeline created" -ForegroundColor Green
} catch {
    Write-Host "✗ Failed to create mobile pipeline: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== Pipeline Creation Complete ===" -ForegroundColor Green
Write-Host ""

# List created pipelines
Write-Host "Current pipelines:" -ForegroundColor Cyan
& $azPath pipelines list --organization $org --project $project --output table

Write-Host ""
Write-Host "View pipelines at: $org/$project/_build" -ForegroundColor White
