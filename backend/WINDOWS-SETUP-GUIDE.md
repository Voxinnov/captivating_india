# Complete Windows Setup Guide for Laravel CMS

## Prerequisites Installation

You need to install:
1. **PHP 8.2+**
2. **Composer**
3. **MySQL**

---

## Option 1: XAMPP (Easiest - Includes PHP + MySQL)

### Step 1: Install XAMPP
1. Download XAMPP: https://www.apachefriends.org/download.html
2. Run the installer
3. Install to `C:\xampp` (default)
4. During installation, select:
   - ✅ Apache
   - ✅ MySQL
   - ✅ PHP

### Step 2: Add PHP to PATH
1. Open PowerShell as Administrator
2. Run:
   ```powershell
   [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\xampp\php", "User")
   ```
3. Close and reopen PowerShell
4. Verify: `php --version`

### Step 3: Install Composer
1. Download: https://getcomposer.org/Composer-Setup.exe
2. Run the installer
3. It will detect PHP automatically
4. Restart PowerShell
5. Verify: `composer --version`

### Step 4: Start MySQL
1. Open XAMPP Control Panel
2. Start MySQL service
3. MySQL will run on port 3306

---

## Option 2: Manual PHP Installation

### Step 1: Install PHP
1. Download PHP: https://windows.php.net/download/
   - Choose "VS16 x64 Non Thread Safe" ZIP
   - Extract to `C:\php`
2. Add to PATH:
   ```powershell
   [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\php", "User")
   ```
3. Configure PHP:
   - Copy `C:\php\php.ini-development` to `C:\php\php.ini`
   - Edit `php.ini` and uncomment:
     ```ini
     extension=mysqli
     extension=pdo_mysql
     extension=mbstring
     extension=openssl
     extension=fileinfo
     ```
4. Restart PowerShell
5. Verify: `php --version`

### Step 2: Install MySQL
1. Download MySQL: https://dev.mysql.com/downloads/installer/
2. Run installer
3. Choose "Developer Default" or "Server only"
4. Set root password (remember it!)

### Step 3: Install Composer
1. Download: https://getcomposer.org/Composer-Setup.exe
2. Run installer
3. Restart PowerShell
4. Verify: `composer --version`

---

## Quick Verification

After installation, verify everything works:

```powershell
# Check PHP
php --version
# Should show PHP 8.2.x or higher

# Check Composer
composer --version
# Should show Composer version

# Check MySQL (if using XAMPP, start MySQL first)
mysql --version
# Or check in XAMPP Control Panel
```

---

## After Installation: Setup Laravel

Once PHP and Composer are installed:

```powershell
# Navigate to backend
cd D:\VOXINNOV` PVTLTD\captivatingindia\backend

# Install dependencies
composer install

# Copy environment file
Copy-Item .env.example .env

# Generate key
php artisan key:generate

# Edit .env file - set database credentials
notepad .env
# Update:
# DB_DATABASE=captivating_india_cms
# DB_USERNAME=root
# DB_PASSWORD=your_mysql_password

# Create database in MySQL
# Open MySQL command line or phpMyAdmin
# CREATE DATABASE captivating_india_cms;

# Run migrations
php artisan migrate

# Seed database
php artisan db:seed

# Create storage link
php artisan storage:link

# Start server
php artisan serve
```

Then visit: **http://localhost:8000/admin**

---

## Troubleshooting

### PHP not found after adding to PATH
- Close and reopen PowerShell
- Check: `$env:PATH` should include PHP path
- Restart computer if needed

### Composer not found
- Make sure PHP is in PATH first
- Restart PowerShell
- Reinstall Composer if needed

### MySQL connection error
- Make sure MySQL service is running
- Check credentials in `.env`
- Verify database exists

### Extension errors
- Edit `php.ini` and uncomment required extensions
- Restart PHP/Apache if using XAMPP

