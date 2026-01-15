# API Examples

## Example API Responses

### Get All Tours

**Request:**
```bash
curl http://localhost:8000/api/v1/tours
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
      "itinerary": [
        "Day 1 – Bangalore: Arrive Bangalore...",
        "Day 2 – Bangalore – Mysore: Drive to Mysore..."
      ],
      "highlights": [
        "Interact with master weavers in family‑run looms.",
        "Visit temples whose architecture inspires saree patterns."
      ]
    }
  ]
}
```

### Get Single Tour

**Request:**
```bash
curl http://localhost:8000/api/v1/tours/textile-traditions-cultural-exploration
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "title": "Textile traditions & a cultural exploration",
    "slug": "textile-traditions-cultural-exploration",
    "region": "Tamil Nadu, Karnataka & Kerala",
    "description": "A popular journey combining textile traditions...",
    "image": "http://localhost:8000/storage/tours/image.jpg",
    "overview": "South India, with its rich history...",
    "itinerary": ["Day 1...", "Day 2..."],
    "highlights": ["Interact with master weavers...", "Visit temples..."]
  }
}
```

### Get All Hotels

**Request:**
```bash
curl http://localhost:8000/api/v1/hotels
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Brunton Boatyard",
      "slug": "brunton-boatyard-fort-cochin",
      "location": "Fort Cochin",
      "description": "An elegant colonial-style hotel...",
      "image": "http://localhost:8000/storage/hotels/image.jpg",
      "longDescription": "An elegant colonial-style hotel...",
      "opinion": "Perhaps one of the best located properties..."
    }
  ]
}
```

### Get Testimonials

**Request:**
```bash
curl http://localhost:8000/api/v1/testimonials
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Sarah & James",
      "location": "London, UK",
      "text": "Our Kerala houseboat cruise...",
      "trip": "Highlights of Kerala & South India",
      "rating": 5
    }
  ]
}
```

### Get Gallery Categories

**Request:**
```bash
curl http://localhost:8000/api/v1/gallery
```

**Response:**
```json
{
  "data": [
    {
      "slug": "highlights-of-south-india",
      "title": "Highlights of South India",
      "coverImage": "http://localhost:8000/storage/gallery/cover.jpg",
      "images": [
        "http://localhost:8000/storage/gallery/image1.jpg",
        "http://localhost:8000/storage/gallery/image2.jpg"
      ]
    }
  ]
}
```

### Get Site Settings

**Request:**
```bash
curl http://localhost:8000/api/v1/settings
```

**Response:**
```json
{
  "data": {
    "site_logo": "http://localhost:8000/storage/settings/logo.png",
    "site_name": "Captivating India",
    "contact_email": "info@captivatingindia.co.uk",
    "contact_phone": "+91 484 2664107",
    "contact_address": "20/3 B, P.A Ulahan Road, Maradu P.O, Cochin - 682304",
    "facebook_url": "#",
    "instagram_url": "#",
    "youtube_url": "#",
    "footer_text": "© 2025 Captivating India all Rights Reserved || Developed by VOXINNOV"
  }
}
```

## JavaScript/Fetch Examples

### Fetch Tours in JavaScript

```javascript
async function fetchTours() {
  const response = await fetch('http://localhost:8000/api/v1/tours');
  const data = await response.json();
  return data.data;
}

// Usage
const tours = await fetchTours();
console.log(tours);
```

### Fetch Single Tour

```javascript
async function fetchTour(slug) {
  const response = await fetch(`http://localhost:8000/api/v1/tours/${slug}`);
  const data = await response.json();
  return data.data;
}

// Usage
const tour = await fetchTour('textile-traditions-cultural-exploration');
console.log(tour);
```

### Fetch with Error Handling

```javascript
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
```

## Next.js Example

```typescript
// lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function getTours() {
  const res = await fetch(`${API_BASE}/tours`, { cache: 'no-store' });
  const data = await res.json();
  return data.data;
}

// app/tours/page.tsx
import { getTours } from '@/lib/api';

export default async function ToursPage() {
  const tours = await getTours();
  
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

