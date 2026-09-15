<?php

namespace Database\Seeders;

use App\Models\Activity;
use App\Models\Destination;
use App\Models\Place;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ActivitySyncSeeder extends Seeder
{
    public function run(): void
    {
        $activities = [
            [
                'title' => 'Backwater Village Experience',
                'slug' => 'backwater-village-experience',
                'place' => 'Kumarakom',
                'theme' => 'Kerala',
                'description' => 'Glide through narrow canals on a country boat, stopping at small villages to see coir making, toddy tapping and traditional fishing, with a simple home‑cooked lunch.',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
            ],
            [
                'title' => 'Guided Nature Walks & Plantation Trails',
                'slug' => 'guided-nature-walks-plantation-trails',
                'place' => 'Thekkady',
                'theme' => 'Kerala',
                'description' => 'Explore spice plantations, tea estates and forested slopes with an experienced naturalist who explains the flora, birdlife and small wildlife of the region.',
                'image' => 'images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
            ],
            [
                'title' => 'Cooking Demonstrations & Market Visits',
                'slug' => 'cooking-demonstrations-market-visits',
                'place' => 'Fort Kochi',
                'theme' => 'Kerala',
                'description' => 'Visit a local market with your host to buy fresh ingredients, followed by a relaxed cooking demonstration and shared meal in a family kitchen or boutique homestay.',
                'image' => 'images/29-05-2021-12-37-36-Mararikulam---1.jpg',
            ],
            [
                'title' => 'Cultural Performances & Storytelling',
                'slug' => 'cultural-performances-storytelling',
                'place' => 'Fort Kochi',
                'theme' => 'Kerala',
                'description' => 'Enjoy traditional dance, music or martial arts demonstrations in an intimate venue, often with a short introduction to the history, costumes and symbolism involved.',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-9085.jpg',
            ],
            [
                'title' => 'Soft Adventure & Day Hikes',
                'slug' => 'soft-adventure-day-hikes',
                'place' => 'Wayanad',
                'theme' => 'Kerala',
                'description' => 'Gentle treks, village‑to‑village walks and viewpoints that suit most fitness levels, accompanied by experienced local guides with a focus on safety and scenery.',
                'image' => 'images/rithu-dmc-about-3709.jpg',
            ],
            [
                'title' => 'Wildlife Safaris & Boat Cruises',
                'slug' => 'wildlife-safaris-boat-cruises',
                'place' => 'Periyar',
                'theme' => 'Kerala',
                'description' => 'Early‑morning or late‑afternoon safaris in selected reserves, combining jeep drives and, where possible, boat cruises with a strong emphasis on responsible tourism.',
                'image' => 'images/odishatribaltourkeralatravelagent-8565.jpg',
            ],
        ];

        foreach ($activities as $data) {
            $theme = Destination::where('title', $data['theme'])->first();
            
            if (!$theme) {
                // If theme not found, skip or create a default one
                continue;
            }

            $place = Place::firstOrCreate(
                ['slug' => Str::slug($data['place'])],
                [
                    'title' => $data['place'],
                    'destination_id' => $theme->id
                ]
            );

            Activity::updateOrCreate(
                ['slug' => $data['slug']],
                [
                    'title' => $data['title'],
                    'place_id' => $place->id,
                    'destination_id' => $theme->id,
                    'description' => $data['description'],
                    'image' => $data['image'],
                ]
            );
        }
    }
}
