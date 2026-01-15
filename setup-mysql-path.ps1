# PowerShell script to help set up MySQL on Windows
# This script helps you find MySQL or install it

Write-Host "=== MySQL Setup Helper ===" -ForegroundColor Cyan
Write-Host ""

# Check if MySQL is already in PATH
$mysqlInPath = Get-Command mysql -ErrorAction SilentlyContinue
if ($mysqlInPath) {
    Write-Host "✅ MySQL is already in your PATH!" -ForegroundColor Green
    Write-Host "Location: $($mysqlInPath.Source)" -ForegroundColor Green
    exit 0
}

Write-Host "❌ MySQL command not found in PATH" -ForegroundColor Yellow
Write-Host ""

# Search for MySQL in common locations
Write-Host "Searching for MySQL installation..." -ForegroundColor Cyan

$possiblePaths = @(
    "C:\Program Files\MySQL\MySQL Server *\bin\mysql.exe",
    "C:\Program Files (x86)\MySQL\MySQL Server *\bin\mysql.exe",
    "C:\xampp\mysql\bin\mysql.exe",
    "C:\wamp64\bin\mysql\*\bin\mysql.exe",
    "C:\mysql\bin\mysql.exe"
)

$foundMysql = $null
foreach ($path in $possiblePaths) {
    $matches = Get-ChildItem -Path $path -ErrorAction SilentlyContinue
    if ($matches) {
        $foundMysql = $matches[0].FullName
        Write-Host "✅ Found MySQL at: $foundMysql" -ForegroundColor Green
        break
    }
}

if ($foundMysql) {
    Write-Host ""
    Write-Host "To add MySQL to your PATH, you can:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Option 1: Add temporarily for this session:" -ForegroundColor Cyan
    $mysqlDir = Split-Path $foundMysql -Parent
    Write-Host "  `$env:PATH += `";$mysqlDir`"" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 2: Add permanently (requires admin):" -ForegroundColor Cyan
    Write-Host "  [Environment]::SetEnvironmentVariable('Path', `$env:Path + `";$mysqlDir`", 'User')" -ForegroundColor White
    Write-Host ""
    Write-Host "Would you like to add it temporarily now? (Y/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq 'Y' -or $response -eq 'y') {
        $env:PATH += ";$mysqlDir"
        Write-Host "✅ MySQL added to PATH for this session!" -ForegroundColor Green
        Write-Host "You can now use: mysql -h localhost -u root" -ForegroundColor Green
    }
} else {
    Write-Host "❌ MySQL not found in common locations" -ForegroundColor Red
    Write-Host ""
    Write-Host "You have the following options:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. Install MySQL Server:" -ForegroundColor Cyan
    Write-Host "   Download from: https://dev.mysql.com/downloads/mysql/" -ForegroundColor White
    Write-Host "   Or use Chocolatey: choco install mysql" -ForegroundColor White
    Write-Host ""
    Write-Host "2. Use XAMPP (includes MySQL):" -ForegroundColor Cyan
    Write-Host "   Download from: https://www.apachefriends.org/" -ForegroundColor White
    Write-Host ""
    Write-Host "3. Use Docker (if you have Docker installed):" -ForegroundColor Cyan
    Write-Host "   docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:latest" -ForegroundColor White
    Write-Host ""
    Write-Host "4. Use Node.js script instead (no MySQL CLI needed):" -ForegroundColor Cyan
    Write-Host "   node check-database.js" -ForegroundColor White
    Write-Host "   Or create database using: node create-database.js" -ForegroundColor White
}

