# Installation Guide

## Quick Start

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Copy environment file**
   ```bash
   cp .env.example .env
   ```

4. **Generate application key**
   ```bash
   php artisan key:generate
   ```

5. **Configure database in `.env`**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=captivating_india_cms
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```

6. **Create database**
   ```sql
   CREATE DATABASE captivating_india_cms;
   ```

7. **Run migrations**
   ```bash
   php artisan migrate
   ```

8. **Seed database (creates admin user)**
   ```bash
   php artisan db:seed
   ```

9. **Create storage link**
   ```bash
   php artisan storage:link
   ```

10. **Start development server**
    ```bash
    php artisan serve
    ```

## Default Credentials

- **URL**: http://localhost:8000/admin
- **Email**: admin@captivatingindia.co.uk
- **Password**: password

⚠️ **Change these credentials immediately after first login!**

## Troubleshooting

### Permission Issues (Linux/Mac)
```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### Storage Link Issues
```bash
php artisan storage:link
# If that fails, manually create:
# ln -s ../storage/app/public public/storage
```

### Database Connection Issues
- Verify MySQL is running
- Check credentials in `.env`
- Ensure database exists

### Composer Issues
```bash
composer clear-cache
composer install --no-interaction
```

## Production Deployment

1. Set `APP_ENV=production` in `.env`
2. Set `APP_DEBUG=false` in `.env`
3. Run `php artisan config:cache`
4. Run `php artisan route:cache`
5. Run `php artisan view:cache`
6. Set proper file permissions
7. Configure web server (Apache/Nginx)
8. Set up SSL certificate
9. Configure CORS for your domain

