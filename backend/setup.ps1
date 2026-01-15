# Laravel CMS Backend Setup Script for Windows

Write-Host "Setting up Laravel CMS Backend..." -ForegroundColor Green

# Check if composer is installed
if (-not (Get-Command composer -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Composer is not installed. Please install Composer first." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "`n1. Installing PHP dependencies..." -ForegroundColor Yellow
composer install

# Copy .env file if it doesn't exist
if (-not (Test-Path .env)) {
    Write-Host "`n2. Creating .env file..." -ForegroundColor Yellow
    Copy-Item .env.example .env
    Write-Host "   Please edit .env file and configure your database settings!" -ForegroundColor Cyan
} else {
    Write-Host "`n2. .env file already exists, skipping..." -ForegroundColor Yellow
}

# Generate application key
Write-Host "`n3. Generating application key..." -ForegroundColor Yellow
php artisan key:generate

Write-Host "`n4. Next steps:" -ForegroundColor Green
Write-Host "   - Edit .env file and set your MySQL database credentials" -ForegroundColor Cyan
Write-Host "   - Create database: CREATE DATABASE captivating_india_cms;" -ForegroundColor Cyan
Write-Host "   - Run: php artisan migrate" -ForegroundColor Cyan
Write-Host "   - Run: php artisan db:seed" -ForegroundColor Cyan
Write-Host "   - Run: php artisan storage:link" -ForegroundColor Cyan
Write-Host "   - Run: php artisan serve" -ForegroundColor Cyan
Write-Host "   - Visit: http://localhost:8000/admin" -ForegroundColor Cyan

Write-Host "`nSetup complete! Follow the steps above to finish configuration." -ForegroundColor Green

