# PowerShell script to update .env.local from MySQL to PostgreSQL
# Run this script to update your environment configuration

Write-Host "=== Updating .env.local to PostgreSQL ===" -ForegroundColor Cyan

$envFile = ".env.local"

if (-not (Test-Path $envFile)) {
    Write-Host "❌ .env.local file not found!" -ForegroundColor Red
    Write-Host "Creating from template..." -ForegroundColor Yellow
    
    # Create .env.local from template
    @"
# Payload CMS Configuration
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_API_URL=http://localhost:3000/api
PAYLOAD_SECRET=y708G9BZdxzftaoES5Cw634INUrlcQDA

# PostgreSQL Database Connection
# IMPORTANT: Payload CMS does NOT support MySQL - PostgreSQL is REQUIRED
# Format: postgresql://username:password@host:port/database
# 
# Replace 'your-postgres-password' with your actual PostgreSQL password
# PostgreSQL must be installed and running on localhost:5432
# Database 'captivatingindia' will be created automatically by Payload
DATABASE_URL=postgresql://postgres:your-postgres-password@localhost:5432/captivatingindia
"@ | Out-File -FilePath $envFile -Encoding utf8
    
    Write-Host "✅ Created .env.local file" -ForegroundColor Green
} else {
    Write-Host "📝 Updating existing .env.local file..." -ForegroundColor Yellow
    
    # Read current content
    $content = Get-Content $envFile -Raw
    
    # Remove old MySQL DATABASE_URI line
    $content = $content -replace "(?m)^DATABASE_URI=.*$", ""
    
    # Remove old MySQL comments
    $content = $content -replace "(?m)^# MySQL Database Connection.*$", ""
    $content = $content -replace "(?m)^# Format: mysql://.*$", ""
    
    # Add PostgreSQL configuration if DATABASE_URL doesn't exist
    if ($content -notmatch "DATABASE_URL=") {
        $postgresConfig = @"

# PostgreSQL Database Connection
# IMPORTANT: Payload CMS does NOT support MySQL - PostgreSQL is REQUIRED
# Format: postgresql://username:password@host:port/database
# 
# Replace 'your-postgres-password' with your actual PostgreSQL password
# PostgreSQL must be installed and running on localhost:5432
# Database 'captivatingindia' will be created automatically by Payload
DATABASE_URL=postgresql://postgres:your-postgres-password@localhost:5432/captivatingindia
"@
        $content += $postgresConfig
    }
    
    # Write updated content
    $content | Out-File -FilePath $envFile -Encoding utf8 -NoNewline
    
    Write-Host "✅ Updated .env.local file" -ForegroundColor Green
}

Write-Host ""
Write-Host "⚠️  IMPORTANT NEXT STEPS:" -ForegroundColor Yellow
Write-Host "1. Install PostgreSQL if not already installed" -ForegroundColor White
Write-Host "2. Set a password for the 'postgres' user" -ForegroundColor White
Write-Host "3. Update DATABASE_URL in .env.local with your actual PostgreSQL password" -ForegroundColor White
Write-Host "4. Ensure PostgreSQL service is running" -ForegroundColor White
Write-Host "5. Restart your Next.js dev server (pnpm dev)" -ForegroundColor White
Write-Host ""
Write-Host "See POSTGRESQL-INSTALLATION-GUIDE.md for detailed instructions" -ForegroundColor Cyan

