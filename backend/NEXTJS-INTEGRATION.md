# Next.js Frontend Integration Guide

This guide explains how to connect your Next.js frontend to the Laravel CMS backend.

## API Base URL

Set your API base URL in your Next.js environment variables:

```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## Fetching Data in Next.js

### Example: Fetching Tours

Create a utility function for API calls:

```typescript
// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function fetchTours() {
  const res = await fetch(`${API_BASE_URL}/tours`);
  const data = await res.json();
  return data.data;
}

export async function fetchTour(slug: string) {
  const res = await fetch(`${API_BASE_URL}/tours/${slug}`);
  const data = await res.json();
  return data.data;
}
```

### Update Your Components

Replace hardcoded data with API calls:

```typescript
// app/tours/page.tsx
import { fetchTours } from '@/lib/api';

export default async function ToursPage() {
  const tours = await fetchTours();
  
  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.title}</h2>
          <p>{tour.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## API Endpoints Reference

### Home Page
```typescript
const homePage = await fetch(`${API_BASE_URL}/home-page`).then(r => r.json());
```

### Pages
```typescript
// List all pages
const pages = await fetch(`${API_BASE_URL}/pages`).then(r => r.json());

// Get specific page
const page = await fetch(`${API_BASE_URL}/pages/about`).then(r => r.json());
```

### Testimonials
```typescript
const testimonials = await fetch(`${API_BASE_URL}/testimonials`).then(r => r.json());
const featured = await fetch(`${API_BASE_URL}/testimonials/featured`).then(r => r.json());
```

### Destinations
```typescript
const destinations = await fetch(`${API_BASE_URL}/destinations`).then(r => r.json());
const destination = await fetch(`${API_BASE_URL}/destinations/kerala`).then(r => r.json());
```

### Tours
```typescript
const tours = await fetch(`${API_BASE_URL}/tours`).then(r => r.json());
const tour = await fetch(`${API_BASE_URL}/tours/textile-traditions-cultural-exploration`).then(r => r.json());
```

### Hotels
```typescript
const hotels = await fetch(`${API_BASE_URL}/hotels`).then(r => r.json());
const hotel = await fetch(`${API_BASE_URL}/hotels/brunton-boatyard-fort-cochin`).then(r => r.json());
```

### Activities
```typescript
const activities = await fetch(`${API_BASE_URL}/activities`).then(r => r.json());
const activity = await fetch(`${API_BASE_URL}/activities/backwater-village-experience`).then(r => r.json());
```

### Gallery
```typescript
const gallery = await fetch(`${API_BASE_URL}/gallery`).then(r => r.json());
const category = await fetch(`${API_BASE_URL}/gallery/highlights-of-south-india`).then(r => r.json());
```

### Site Settings
```typescript
const settings = await fetch(`${API_BASE_URL}/settings`).then(r => r.json());
// Access: settings.data.site_logo, settings.data.contact_email, etc.
```

## Type Definitions

Create TypeScript types matching the API responses:

```typescript
// types/api.ts
export type Tour = {
  id: number;
  title: string;
  slug: string;
  region: string;
  description: string;
  image: string | null;
  overview: string | null;
  itinerary: string[] | null;
  highlights: string[] | null;
};

export type Hotel = {
  id: number;
  name: string;
  slug: string;
  location: string;
  description: string;
  image: string | null;
  longDescription: string | null;
  opinion: string | null;
};

export type Activity = {
  id: number;
  title: string;
  slug: string;
  destination: string;
  description: string;
  longDescription: string | null;
  image: string | null;
};

export type Testimonial = {
  id: number;
  name: string;
  location: string | null;
  text: string;
  trip: string | null;
  rating: number;
};

export type Destination = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
  long_description: string | null;
};

export type GalleryCategory = {
  slug: string;
  title: string;
  coverImage: string | null;
  images: string[];
};
```

## Migration Strategy

### Step 1: Create API Utility Functions

```typescript
// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function getTours(): Promise<Tour[]> {
  const res = await fetch(`${API_BASE_URL}/tours`, { cache: 'no-store' });
  const data = await res.json();
  return data.data;
}

export async function getTour(slug: string): Promise<Tour> {
  const res = await fetch(`${API_BASE_URL}/tours/${slug}`, { cache: 'no-store' });
  const data = await res.json();
  return data.data;
}

// Similar functions for hotels, activities, etc.
```

### Step 2: Update Page Components

Replace static imports with API calls:

**Before:**
```typescript
import { TOURS } from '@/lib/tours';
```

**After:**
```typescript
import { getTours } from '@/lib/api';

export default async function ToursPage() {
  const tours = await getTours();
  // Use tours...
}
```

### Step 3: Handle Loading and Error States

```typescript
export default async function ToursPage() {
  try {
    const tours = await getTours();
    return <ToursList tours={tours} />;
  } catch (error) {
    return <Error message="Failed to load tours" />;
  }
}
```

## CORS Configuration

If your Next.js app runs on a different domain, update Laravel CORS settings:

```php
// config/cors.php (if exists)
'paths' => ['api/*'],
'allowed_origins' => ['http://localhost:3000'],
'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE'],
'allowed_headers' => ['Content-Type', 'Authorization'],
```

## Image URLs

All image URLs from the API are absolute URLs:
```
http://localhost:8000/storage/tours/image.jpg
```

Make sure your Laravel backend is accessible from your Next.js app.

## Production Deployment

1. Update `NEXT_PUBLIC_API_URL` to your production API URL
2. Ensure CORS is configured for your production domain
3. Use environment variables for different environments

```env
# Production
NEXT_PUBLIC_API_URL=https://api.captivatingindia.co.uk/api/v1

# Development
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## Error Handling

Implement proper error handling:

```typescript
async function fetchWithErrorHandling<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
```

## Caching Strategy

For better performance, consider caching API responses:

```typescript
// With Next.js revalidation
export const revalidate = 3600; // Revalidate every hour

// Or use React Query / SWR for client-side caching
```

## Testing

Test API integration:

```typescript
// __tests__/api.test.ts
import { getTours } from '@/lib/api';

describe('API Integration', () => {
  it('should fetch tours', async () => {
    const tours = await getTours();
    expect(tours).toBeInstanceOf(Array);
    expect(tours[0]).toHaveProperty('title');
  });
});
```

