<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ThemeSyncSeeder extends Seeder
{
    public function run(): void
    {
        $themes = [
            [
                'title' => 'Kerala',
                'slug' => 'kerala',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
                'description' => 'Explore the serene backwaters, lush tea gardens, and vibrant culture of God\'s Own Country.',
                'long_description' => "Kerala, often referred to as \"God's Own Country,\" is a tropical paradise known for its palm-fringed backwaters, misty hill stations, and rich cultural heritage.\nExperience the tranquility of a houseboat stay in Alleppey, the aromatic tea plantations of Munnar, and the traditional Kathakali performances in Kochi.\nKerala offers a perfect blend of relaxation and adventure, making it an ideal destination for families, honeymooners, and solo travelers alike.",
                'highlights' => [
                    'Backwater Houseboat Cruises',
                    'Munnar Tea Plantations',
                    'Ayurvedic Wellness Retreats',
                    'Wayanad Wildlife Sanctuaries'
                ]
            ],
            [
                'title' => 'South India',
                'slug' => 'south-india',
                'image' => 'images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
                'description' => 'A journey through ancient temples, spicy cuisines, and breathtaking coastal landscapes.',
                'long_description' => "South India is a land of architectural wonders, where towering temples and ancient ruins tell stories of bygone eras.\nFrom the majestic temples of Madurai and Thanjavur to the serene beaches of Goa and Pondicherry, this region offers a diverse range of experiences.\nDelight in the traditional flavors of South Indian cuisine, witness vibrant festivals, and explore the unique cultural identity of the southern states.",
                'highlights' => [
                    'Ancient Temple Architecture',
                    'Vibrant Coastal Culture',
                    'Unique Dravidian Heritage',
                    'World-renowned Spice Markets'
                ]
            ],
            [
                'title' => 'Odisha',
                'slug' => 'odisha',
                'image' => 'images/odishatribaltourkeralatravelagent-8565.jpg',
                'description' => 'Discover the hidden tribal heritage and magnificent architecture of India\'s best kept secret.',
                'long_description' => "Odisha, formerly known as Orissa, is a treasure trove of ancient traditions and natural beauty.\nHome to the iconic Sun Temple at Konark and the sacred Jagannath Temple in Puri, Odisha is a spiritual and architectural marvel.\nExplore the unique tribal villages of the interior, where age-old customs and crafts are still vibrantly alive.\nWith its pristine coastline and diverse wildlife, Odisha is truly India's best kept secret.",
                'highlights' => [
                    'Konark Sun Temple',
                    'Puri Jagannath Temple',
                    'Bhubaneswar - The Temple City',
                    'Unique Tribal Heritage'
                ]
            ],
            [
                'title' => 'North India',
                'slug' => 'north-india',
                'image' => 'images/11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
                'description' => 'The cultural heartland of India, home to the majestic Himalayas and the iconic Taj Mahal.',
                'long_description' => "North India is a land of contrasts, where the bustling streets of Delhi meet the serenity of the Himalayas.\nWitness the timeless beauty of the Taj Mahal in Agra, the royal splendor of Jaipur's palaces, and the spiritual energy of the Ganges in Varanasi.\nFrom the snow-capped peaks of Ladakh to the lush valleys of Kashmir, North India offers some of the most dramatic landscapes in the subcontinent.",
                'highlights' => [
                    'Taj Mahal, Agra',
                    'Royal Palaces of Rajasthan',
                    'Himalayan Treks & Views',
                    'Spiritual Energy in Varanasi'
                ]
            ],
            [
                'title' => 'Textile Tourism',
                'slug' => 'textile-tourism',
                'image' => 'images/rithu-dmc-about-4572.jpg',
                'description' => 'Immerse yourself in India\'s rich weaving traditions and vibrant fabric arts.',
                'long_description' => "India's textile heritage is as diverse as its culture, with each region boasting its own unique weaving and dyeing techniques.\nOur Textile Tourism journeys take you into the heart of artisanal communities, where you can witness the creation of intricate handloom fabrics, blocks, and silks.\nFrom the Pashmina of Kashmir to the Ikat of Odisha and the Silk Saree weaving of Kanchipuram, these tours offer a deep dive into the craftsmanship that defines Indian textiles.",
                'highlights' => [
                    'Handloom Weaving Workshops',
                    'Block Printing Experiences',
                    'Traditional Dyeing Techniques',
                    'Artisanal Village Visits'
                ]
            ],
            [
                'title' => 'Village Tourism',
                'slug' => 'village-tourism',
                'image' => 'images/rithu-dmc-about-3709.jpg',
                'description' => 'Experience the authentic rural life and warm hospitality of Indian villages.',
                'long_description' => "Village Tourism offers an escape from the hectic pace of modern life and an opportunity to connect with the roots of Indian culture.\nStay in authentic village homes, participate in agricultural activities, and learn traditional crafts from local artisans.\nThese journeys are designed to be sustainable and rewarding, supporting local communities while providing travelers with a truly unique and meaningful perspective on India.",
                'highlights' => [
                    'Homestay Experiences',
                    'Rural Craft Workshops',
                    'Sustainable Tourism Practices',
                    'Authentic Cultural Immersion'
                ]
            ],
        ];

        foreach ($themes as $index => $themeData) {
            Destination::updateOrCreate(
                ['slug' => $themeData['slug']],
                [
                    'title' => $themeData['title'],
                    'image' => $themeData['image'],
                    'description' => $themeData['description'],
                    'long_description' => $themeData['long_description'],
                    'highlights' => $themeData['highlights'],
                    'is_featured' => true,
                    'order' => $index,
                ]
            );
        }
    }
}
