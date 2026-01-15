# Installing Composer on Windows

## Method 1: Using Composer-Setup.exe (Recommended)

1. **Download Composer Installer**
   - Visit: https://getcomposer.org/download/
   - Click "Composer-Setup.exe" to download

2. **Run the Installer**
   - Double-click `Composer-Setup.exe`
   - Follow the installation wizard
   - It will automatically:
     - Find your PHP installation
     - Add Composer to your PATH
     - Install Composer globally

3. **Verify Installation**
   - Close and reopen PowerShell
   - Run: `composer --version`
   - You should see the Composer version

## Method 2: Manual Installation

1. **Download Composer PHAR**
   - Visit: https://getcomposer.org/download/
   - Download `composer.phar`

2. **Move to a Permanent Location**
   ```powershell
   # Create a directory for Composer
   New-Item -ItemType Directory -Path "C:\ProgramData\Composer" -Force
   
   # Move composer.phar there
   Move-Item composer.phar C:\ProgramData\Composer\composer.phar
   ```

3. **Create a Batch File**
   Create `C:\ProgramData\Composer\composer.bat` with this content:
   ```batch
   @echo off
   php "%~dp0composer.phar" %*
   ```

4. **Add to PATH**
   - Press `Win + X` and select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Click "New" and add: `C:\ProgramData\Composer`
   - Click "OK" on all dialogs

5. **Restart PowerShell**
   - Close and reopen PowerShell
   - Run: `composer --version`

## Method 3: Using Chocolatey (If you have it)

```powershell
choco install composer
```

## After Installation

1. **Close and reopen PowerShell** (important!)
2. **Verify it works:**
   ```powershell
   composer --version
   ```
3. **Then proceed with Laravel setup:**
   ```powershell
   cd backend
   composer install
   ```

## Troubleshooting

### "PHP is not recognized"
- Install PHP first: https://windows.php.net/download/
- Or use XAMPP/WAMP which includes PHP

### "Composer still not found after installation"
- Restart PowerShell/Terminal
- Check PATH: `$env:PATH`
- Verify Composer location: `where.exe composer`

### "SSL certificate problem"
```powershell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

