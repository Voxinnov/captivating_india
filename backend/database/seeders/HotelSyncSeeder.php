<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hotel;
use App\Models\Place;
use App\Models\Destination;
use Illuminate\Support\Str;

class HotelSyncSeeder extends Seeder
{
    public function run(): void
    {
        $hotels = [
            [
                'name' => 'Brunton Boatyard',
                'slug' => 'brunton-boatyard-fort-cochin',
                'location' => 'Fort Cochin',
                'description' => 'An elegant colonial-style hotel situated at the mouth of the Cochin harbour. All rooms have distinguished décor and a magnificent view of the sea and harbour.',
                'longDescription' => 'An elegant colonial-style hotel situated at the mouth of the Cochin harbour, Brunton Boatyard offers distinguished décor and a magnificent view of the sea and harbour from every room. There is an outdoor swimming pool, an Ayurvedic centre for basic treatments and massages, cooking sessions for guests, a library, DVDs available on request and Wi‑Fi in the lobby. In‑room amenities include minibar, TV, air‑conditioning and Ayurvedic products from the in‑house boutique.',
                'opinion' => 'Perhaps one of the best located properties in Cochin and the only hotel that has sea views from all its rooms. A little pricey, but well worth paying the extra if you are looking for that special touch. Great cuisine, friendly staff and a wonderful ambience. The ferry next door can be noisy but rooms have sound‑proof windows.',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
            ],
            [
                'name' => 'Old Harbour Hotel',
                'slug' => 'old-harbour-hotel-fort-cochin',
                'location' => 'Fort Cochin',
                'description' => 'A restored property in the old quarters of Fort Cochin and a short walk from the Chinese Fishing...',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
            ],
            [
                'name' => 'Malabar House',
                'slug' => 'malabar-house-fort-cochin',
                'location' => 'Fort Cochin',
                'description' => 'A boutique heritage property located in the old quarters, a short walk from the Chinese nets and...',
                'image' => 'images/29-05-2021-12-37-36-Mararikulam---1.jpg',
            ],
            [
                'name' => 'The Claridges Hotel',
                'slug' => 'the-claridges-hotel-new-delhi',
                'location' => 'New Delhi',
                'description' => 'The Claridges, New Delhi, is a distinguished blend of classic charm and contemporary luxury...',
                'image' => 'images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
            ],
            [
                'name' => 'Vivanta by Taj Malabar',
                'slug' => 'vivanta-by-taj-malabar-kochi',
                'location' => 'Kochi',
                'description' => 'A deluxe modern property on the waterfront, having a excellent spa rated as one of the best in...',
                'image' => 'images/11-08-2025-11-31-05-Taj lake palace.jpg',
            ],
            [
                'name' => 'Casino Hotel',
                'slug' => 'casino-hotel-willingdon-island',
                'location' => 'Wellingdon Island',
                'description' => "A standard grade hotel is one of the oldest in Wellingdon island and is the flagship property of...",
                'image' => 'images/13-08-2025-16-55-26-Taj Fateh Prakash.jpg',
            ],
            [
                'name' => 'Taj Gateway Hotel',
                'slug' => 'taj-gateway-hotel-ernakulam',
                'location' => 'Ernakulam',
                'description' => "Taj Gateway Hotel conveniently located on downtown Marine Drive, Ernakulam's busiest...",
                'image' => 'images/11-08-2025-11-31-44-Oberoi udaivilas 3.jpg',
            ],
            [
                'name' => 'Poovath Heritage',
                'slug' => 'poovath-heritage-kerala',
                'location' => 'Kerala',
                'description' => 'A renovated Dutch Palace from the colonial era, offers 10 tastefully furnished rooms. The breezy...',
                'image' => 'images/07-08-2025-11-35-29-Amet Haveli 1.jpg',
            ],
            [
                'name' => 'The Trident',
                'slug' => 'the-trident-willingdon-island',
                'location' => 'Willingdon Island',
                'description' => "Located on Willingdon Island 20 minutes from the city's business district and within easy...",
                'image' => 'images/07-08-2025-11-35-29-Amet Haveli 2.jpg',
            ],
            [
                'name' => 'Courtyard By Marriott Kochi Airport',
                'slug' => 'courtyard-by-marriott-kochi-airport',
                'location' => 'Kochi',
                'description' => 'A 5 star property of the Courtyard chain of hotels, located very close to the Cochin international...',
                'image' => 'images/07-08-2025-11-35-10-Amet Haveli 3.jpg',
            ],
            [
                'name' => 'Fort House',
                'slug' => 'fort-house-kochi',
                'location' => 'Kochi',
                'description' => 'A family run property on the Kochi waterfront. Though the rooms are standard grade they are...',
                'image' => 'images/rithu-dmc-about-1430.jpg',
            ],
            [
                'name' => 'Imperial Hotel',
                'slug' => 'imperial-hotel-new-delhi',
                'location' => 'New Delhi',
                'description' => 'An iconic and the most distinguished address situated in the heart of the capital, Hotel Imperial...',
                'image' => 'images/rithu-dmc-about-2004.jpg',
            ],
            [
                'name' => 'The Killians Boutique Hotel',
                'slug' => 'the-killians-boutique-hotel-fort-kochi',
                'location' => 'Fort Kochi',
                'description' => 'Minutes from the famous Chinese Fishing nets and St. Francis Church of Fort Kochi this hotel is...',
                'image' => 'images/rithu-dmc-about-3709.jpg',
            ],
            [
                'name' => 'Eighth Bastion',
                'slug' => 'eighth-bastion-fort-kochi',
                'location' => 'Fort Kochi',
                'description' => 'An elegantly curated mixture of taste and style, this property that has recently opened in Fort...',
                'image' => 'images/rithu-dmc-about-4572.jpg',
            ],
            [
                'name' => 'Tea Bungalow',
                'slug' => 'tea-bungalow-fort-kochi',
                'location' => 'Fort Kochi',
                'description' => 'Tea Bungalow is a small and exclusive luxury heritage boutique resort that is located in Fort...',
                'image' => 'images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
            ],
            [
                'name' => 'The Leela Kovalam',
                'slug' => 'the-leela-kovalam',
                'location' => 'Kovalam',
                'description' => 'The Leela Kovalam is a large resort spread over a cliff overlooking the sea. Rooms at The Leela...',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
            ],
            [
                'name' => 'Vivanta by Taj-Kovalam',
                'slug' => 'vivanta-by-taj-kovalam',
                'location' => 'Kovalam',
                'description' => 'Nestling amidst picturesque surroundings, this hotel overlooks the Arabian sea, featuring 59...',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
            ],
            [
                'name' => 'Tranquil Resorts',
                'slug' => 'tranquil-resorts-wayanad',
                'location' => 'Wayanad',
                'description' => 'Away from the frenzied world of traffic, tension and tantrums, a mesmerizing space called tranquil...',
                'image' => 'images/29-05-2021-12-37-36-Mararikulam---1.jpg',
            ],
            [
                'name' => 'Vythiri Resort',
                'slug' => 'vythiri-resort-wayanad',
                'location' => 'Wayanad',
                'description' => "Vythiri Resort is built in a rainforest with a waterfalls in it's midst. Tastefully...",
                'image' => 'images/odishatribaltourkeralatravelagent-8565.jpg',
            ],
            [
                'name' => 'Periyar Forest Bungalow',
                'slug' => 'periyar-forest-bungalow-periyar',
                'location' => 'Periyar',
                'description' => 'The only private estate stay deep inside the Periyar Tiger reserve The Periyar Forest Bungalow is...',
                'image' => 'images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
            ],
        ];

        // Ensure a default destination exists
        $destination = Destination::firstOrCreate(
            ['slug' => 'south-india'],
            [
                'title' => 'South India',
                'description' => 'The beautiful southern region of India.',
                'image' => 'images/hero-bg.jpg',
            ]
        );

        foreach ($hotels as $h) {
            // Find or create place
            $place = Place::firstOrCreate(
                ['title' => $h['location']],
                [
                    'slug' => Str::slug($h['location']),
                    'destination_id' => $destination->id,
                ]
            );

            // Create hotel
            Hotel::updateOrCreate(
                ['slug' => $h['slug']],
                [
                    'title' => $h['name'],
                    'place_id' => $place->id,
                    'description' => $h['description'],
                    'long_description' => $h['longDescription'] ?? null,
                    'opinion' => $h['opinion'] ?? null,
                    'image' => $h['image'],
                    'is_featured' => true,
                    'order' => 0
                ]
            );
        }
    }
}
