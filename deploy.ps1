# deploy.ps1
# Run this script every time you want to deploy to cPanel
# Usage: .\deploy.ps1

Write-Host "🔨 Building static site..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Deploy aborted." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build success! Deploying to GitHub deploy branch..." -ForegroundColor Green

# Save current branch name
$currentBranch = git rev-parse --abbrev-ref HEAD

# Copy out/ to a temp location
$tempDir = "$env:TEMP\porto-deploy-$(Get-Date -Format 'yyyyMMddHHmmss')"
Copy-Item -Recurse ".\out" $tempDir

# Switch to deploy branch (create if not exists)
git checkout deploy 2>$null
if ($LASTEXITCODE -ne 0) {
    git checkout --orphan deploy
    git rm -rf . | Out-Null
}

# Clear deploy branch contents
Get-ChildItem -Exclude ".git" | Remove-Item -Recurse -Force

# Copy built files in
Copy-Item -Recurse "$tempDir\out\*" "."

# Add .htaccess for cPanel (handle SPA routing)
@"
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
"@ | Set-Content ".htaccess"

# Commit and push
git add -A
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin deploy --force

# Return to original branch
git checkout $currentBranch

# Cleanup temp
Remove-Item -Recurse -Force $tempDir

Write-Host ""
Write-Host "🚀 Deployed! Now go to cPanel Git Version Control and click 'Update from Remote'." -ForegroundColor Green
Write-Host "   URL: https://porto.hello-inv.com" -ForegroundColor Blue
