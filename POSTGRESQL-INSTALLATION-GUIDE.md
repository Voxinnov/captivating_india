# PostgreSQL Installation Guide for Windows

## Quick Installation Options

### Option 1: Download PostgreSQL Installer (Recommended)

1. **Download PostgreSQL:**
   - Visit: https://www.postgresql.org/download/windows/
   - Click "Download the installer"
   - Download PostgreSQL 16 or 15 (latest stable version)

2. **Run the Installer:**
   - Run the downloaded `.exe` file
   - Follow the installation wizard
   - **Important:** When prompted for password, set a password for the `postgres` user
     - **DO NOT leave it empty** - Payload requires a non-empty password
     - Remember this password - you'll need it for `DATABASE_URL`

3. **Default Settings:**
   - Port: `5432` (keep default)
   - Username: `postgres` (default)
   - Installation directory: Keep default

4. **Complete Installation:**
   - Finish the installation
   - PostgreSQL service will start automatically

### Option 2: Install via Chocolatey (Requires Admin)

If you have administrator access, open PowerShell **as Administrator** and run:

```powershell
choco install postgresql --params '/Password:YOUR_PASSWORD_HERE' -y
```

Replace `YOUR_PASSWORD_HERE` with your desired PostgreSQL password.

### Option 3: Use PostgreSQL Portable (No Installation)

1. Download PostgreSQL portable version
2. Extract and run from any folder
3. Configure manually

## After Installation

### 1. Verify PostgreSQL is Running

Open PowerShell and check if PostgreSQL service is running:

```powershell
Get-Service -Name postgresql*
```

Or check in Services:
- Press `Win + R`, type `services.msc`
- Look for "postgresql" service
- Ensure it's "Running"

### 2. Create the Database

Open PowerShell and run:

```powershell
# Set PostgreSQL bin path (adjust version number if different)
$env:Path += ";C:\Program Files\PostgreSQL\16\bin"

# Connect to PostgreSQL (replace 'yourpassword' with your actual password)
psql -U postgres -h localhost

# In psql prompt, create the database:
CREATE DATABASE captivatingindia;

# Exit psql
\q
```

**Alternative:** Use pgAdmin (GUI tool installed with PostgreSQL):
1. Open pgAdmin from Start Menu
2. Connect to PostgreSQL server (use your password)
3. Right-click "Databases" → "Create" → "Database"
4. Name: `captivatingindia`
5. Click "Save"

### 3. Update Your .env.local File

Create or update `.env.local` in your project root:

```env
# Payload CMS Configuration
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_API_URL=http://localhost:3000/api
PAYLOAD_SECRET=change-this-to-a-random-secret-key-in-production

# PostgreSQL Database Connection
# Replace 'YOUR_POSTGRES_PASSWORD' with the password you set during installation
DATABASE_URL=postgresql://postgres:YOUR_POSTGRES_PASSWORD@localhost:5432/captivatingindia
```

### 4. Test the Connection

Start your development server:

```bash
pnpm dev
```

You should see:
- ✅ No database connection errors
- ✅ Payload CMS starts successfully
- ✅ Tables are auto-created in PostgreSQL

### 5. Access Admin Panel

Navigate to: http://localhost:3000/admin

## Troubleshooting

### "psql: command not found"
- Add PostgreSQL bin to PATH:
  ```powershell
  $env:Path += ";C:\Program Files\PostgreSQL\16\bin"
  ```
- Or use full path: `"C:\Program Files\PostgreSQL\16\bin\psql.exe"`

### "Connection refused" or "Can't connect"
- Ensure PostgreSQL service is running
- Check port 5432 is not blocked by firewall
- Verify password in `DATABASE_URL` is correct

### "Database does not exist"
- Create the database manually (see step 2 above)
- Or let Payload create it (may require superuser permissions)

### "Password authentication failed"
- Double-check the password in `DATABASE_URL`
- Try resetting PostgreSQL password:
  ```powershell
  # Edit pg_hba.conf to allow password-less access temporarily
  # Then reset password in psql
  ```

## Quick Reference

**Default PostgreSQL Settings:**
- Host: `localhost`
- Port: `5432`
- Username: `postgres`
- Database: `captivatingindia` (create this)
- Password: **Set during installation** (required, cannot be empty)

**Connection String Format:**
```
postgresql://username:password@host:port/database
```

**Example:**
```
postgresql://postgres:mypassword@localhost:5432/captivatingindia
```

## Next Steps

Once PostgreSQL is installed and configured:

1. ✅ PostgreSQL installed and running
2. ✅ Database `captivatingindia` created
3. ✅ `.env.local` file created with correct `DATABASE_URL`
4. ✅ Run `pnpm dev` to start Payload CMS
5. ✅ Access admin panel at http://localhost:3000/admin

