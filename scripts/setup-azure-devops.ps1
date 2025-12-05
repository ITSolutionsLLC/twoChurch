# Azure DevOps CLI Setup and Verification Script
# twoChurch Project

Write-Host "=== Azure DevOps CLI Setup ===" -ForegroundColor Cyan
Write-Host ""

# Set Azure CLI path
$azPath = "C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd"

# Check if Azure CLI is installed
if (Test-Path $azPath) {
    Write-Host "✓ Azure CLI is installed" -ForegroundColor Green
} else {
    Write-Host "✗ Azure CLI not found. Installing..." -ForegroundColor Yellow
    winget install Microsoft.AzureCLI
    Write-Host "Please restart your terminal after installation" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "=== Setup Steps ===" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Create Personal Access Token (PAT)" -ForegroundColor Yellow
Write-Host "  1. Go to: https://dev.azure.com/ITSolutionsLLC/_usersSettings/tokens" -ForegroundColor White
Write-Host "  2. Click 'New Token'" -ForegroundColor White
Write-Host "  3. Name: 'twoChurch CLI'" -ForegroundColor White
Write-Host "  4. Organization: ITSolutionsLLC" -ForegroundColor White
Write-Host "  5. Scopes: Full access (or Code: Read & Write, Build: Read & Execute)" -ForegroundColor White
Write-Host "  6. Click 'Create'" -ForegroundColor White
Write-Host "  7. Copy the token (you won't see it again!)" -ForegroundColor Red
Write-Host ""

$response = Read-Host "Have you created the PAT? (y/n)"

if ($response -ne 'y') {
    Write-Host "Please create a PAT first, then run this script again." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Step 2: Login to Azure DevOps" -ForegroundColor Yellow
Write-Host ""

# Configure defaults
& $azPath devops configure --defaults organization=https://dev.azure.com/ITSolutionsLLC project=twoChurch

Write-Host "Enter your PAT token when prompted:" -ForegroundColor Cyan
& $azPath devops login --organization https://dev.azure.com/ITSolutionsLLC

Write-Host ""
Write-Host "Step 3: Verify Connection" -ForegroundColor Yellow
Write-Host ""

# List projects
Write-Host "Projects in organization:" -ForegroundColor Cyan
& $azPath devops project list --organization https://dev.azure.com/ITSolutionsLLC --output table

Write-Host ""
Write-Host "Step 4: Check Pipelines" -ForegroundColor Yellow
Write-Host ""

# List pipelines
Write-Host "Existing pipelines:" -ForegroundColor Cyan
& $azPath pipelines list --organization https://dev.azure.com/ITSolutionsLLC --project twoChurch --output table

Write-Host ""
Write-Host "Step 5: Check Service Connections" -ForegroundColor Yellow
Write-Host ""

# List service connections
Write-Host "Service connections (GitHub):" -ForegroundColor Cyan
& $azPath devops service-endpoint list --organization https://dev.azure.com/ITSolutionsLLC --project twoChurch --output table

Write-Host ""
Write-Host "=== Setup Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "  - If no pipelines found: Create pipelines using Azure DevOps portal" -ForegroundColor White
Write-Host "  - If no service connections: Connect GitHub repository" -ForegroundColor White
Write-Host "  - Refer to: docs/AZURE_DEVOPS_QUICKSTART.md" -ForegroundColor White
Write-Host ""
