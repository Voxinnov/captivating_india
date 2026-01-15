# Captivating India CMS Backend

Laravel-based CMS backend for the Captivating India Next.js website.

## Features

- **Admin Panel**: Blade-based admin interface for content management
- **REST API**: JSON API endpoints for Next.js frontend
- **Authentication**: Secure admin login with token-based API auth
- **Content Management**: Full CRUD operations for all content types
- **Image Upload**: File storage for images in `storage/app/public`
- **MySQL Database**: All data stored in MySQL

## Installation

### Prerequisites

- PHP 8.2+
- Composer
- MySQL 5.7+
- Node.js (for asset compilation, optional)

### Setup Steps

1. **Install Dependencies**
   ```bash
   cd backend
   composer install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Configure Database**
   Edit `.env` file:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=captivating_india_cms
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```

4. **Run Migrations**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

5. **Create Storage Link**
   ```bash
   php artisan storage:link
   ```

6. **Start Server**
   ```bash
   php artisan serve
   ```

   Admin panel will be available at: `http://localhost:8000/admin`

## Default Admin Credentials

- **Email**: admin@captivatingindia.co.uk
- **Password**: password

**⚠️ Change these credentials immediately after first login!**

## API Endpoints

All API endpoints are prefixed with `/api/v1/`

### Public Endpoints (No Authentication)

#### Home Page
- `GET /api/v1/home-page` - Get home page content

#### Pages
- `GET /api/v1/pages` - List all published pages
- `GET /api/v1/pages/{slug}` - Get page by slug

#### Testimonials
- `GET /api/v1/testimonials` - List all testimonials
- `GET /api/v1/testimonials/featured` - Get featured testimonials

#### Destinations
- `GET /api/v1/destinations` - List all destinations
- `GET /api/v1/destinations/{slug}` - Get destination by slug

#### Tours
- `GET /api/v1/tours` - List all tours
- `GET /api/v1/tours/{slug}` - Get tour by slug

#### Hotels
- `GET /api/v1/hotels` - List all hotels
- `GET /api/v1/hotels/{slug}` - Get hotel by slug

#### Activities
- `GET /api/v1/activities` - List all activities
- `GET /api/v1/activities/{slug}` - Get activity by slug

#### Gallery
- `GET /api/v1/gallery` - List all gallery categories
- `GET /api/v1/gallery/{slug}` - Get gallery category by slug

#### Site Settings
- `GET /api/v1/settings` - Get all site settings

## API Response Format

All API responses follow this structure:

```json
{
  "data": {
    // Response data here
  }
}
```

### Example: Get Tours

**Request:**
```
GET /api/v1/tours
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Textile traditions & a cultural exploration",
      "slug": "textile-traditions-cultural-exploration",
      "region": "Tamil Nadu, Karnataka & Kerala",
      "description": "A popular journey combining textile traditions...",
      "image": "http://localhost:8000/storage/tours/image.jpg",
      "overview": "South India, with its rich history...",
      "itinerary": ["Day 1 – Bangalore: Arrive...", "Day 2 – Bangalore – Mysore..."],
      "highlights": ["Interact with master weavers...", "Visit temples..."]
    }
  ]
}
```

## Admin Panel Routes

All admin routes are prefixed with `/admin` and require authentication:

- `/admin/login` - Admin login page
- `/admin/dashboard` - Dashboard
- `/admin/home-page` - Edit home page
- `/admin/pages` - Manage pages
- `/admin/testimonials` - Manage testimonials
- `/admin/destinations` - Manage destinations
- `/admin/tours` - Manage tours
- `/admin/hotels` - Manage hotels
- `/admin/activities` - Manage activities
- `/admin/gallery` - Manage gallery
- `/admin/settings` - Site settings

## Database Schema

### Tables

- `users` - Admin users
- `home_page` - Home page content
- `pages` - Dynamic pages (about, services, etc.)
- `testimonials` - Customer testimonials
- `destinations` - Travel destinations
- `tours` - Tour packages
- `hotels` - Hotel listings
- `activities` - Activity listings
- `gallery_categories` - Gallery categories
- `gallery_images` - Gallery images
- `site_settings` - Site-wide settings

All tables include `timestamps` and most have `soft_deletes` enabled.

## Security Features

- **CSRF Protection**: Enabled for all web routes
- **Rate Limiting**: API routes are rate-limited
- **Password Hashing**: Bcrypt password hashing
- **Admin Middleware**: Protects admin routes
- **Token Authentication**: Sanctum for API authentication (if needed)

## File Storage

Uploaded images are stored in `storage/app/public/` and accessible via:
- Admin: `storage/{category}/{filename}`
- API: `http://localhost:8000/storage/{category}/{filename}`

## Next.js Integration

See `NEXTJS-INTEGRATION.md` for detailed instructions on connecting the Next.js frontend.

## Development

### Running Tests
```bash
php artisan test
```

### Clearing Cache
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

### Creating New Admin User
```bash
php artisan tinker
```
Then:
```php
\App\Models\User::create([
    'name' => 'Admin Name',
    'email' => 'admin@example.com',
    'password' => Hash::make('password'),
    'is_admin' => true,
]);
```

## License

MIT

