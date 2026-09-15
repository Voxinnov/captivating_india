<?php

namespace Database\Seeders;

use App\Models\Tour;
use Illuminate\Database\Seeder;

class TourMigrationSeeder extends Seeder
{
    public function run()
    {
        $tours = [
            [
                'title' => 'Textile traditions & a cultural exploration',
                'slug' => 'textile-traditions-cultural-exploration',
                'region' => 'Tamil Nadu, Karnataka & Kerala',
                'description' => 'A popular journey combining textile traditions, temple architecture and everyday life across three southern states, with time in Bangalore, Mysore, Chennai, Pondicherry, Kumbakonam, Madurai, Munnar, the backwaters and Cochin.',
                'image' => 'images/rithu-dmc-about-2004.jpg',
                'overview' => "South India, with its rich history, diverse traditions and vibrant artisan communities, offers a unique and immersive journey for travellers interested in textiles and cultural heritage. This tour is not just a showcase of exquisite fabrics and intricate weaving techniques, but also a deep dive into living traditions, temple architecture, cuisine and the daily life of communities in Tamil Nadu, Karnataka and Kerala.\n\nIt is a popular journey for guests who would like a complete experience across three states. You not only see the textile methods practised in each region but also experience how diverse they are in their way of life, culture and cuisine. Do get in touch for more details or to have a customised trip arranged to suit your specific interests.",
                'itinerary' => [
                    'Day 1 – Bangalore: Arrive Bangalore and transfer to your hotel. Depending on arrival time, visit Tharangini, a textile unit producing printed fabric using natural dyes.',
                    'Day 2 – Bangalore – Mysore: Drive to Mysore visiting a Channapatna toy-making unit and the government silk cocoon market en route. Evening walk through Devaraja fruit and vegetable market.',
                    'Day 3 – Mysore: Visit a village on the outskirts of Mysore to experience the full process of the silk industry, followed by Somnathpur temple and the city palace with a stop at the silk factory.',
                    'Day 4 – Mysore – train – Chennai: Morning at a local farmers’ market before boarding the Shatabdi Express to Chennai. Overnight at a centrally located first-class hotel.',
                    'Day 5 – Chennai: Visit Kalakshetra and its textile unit, then DakshinChitra, a living heritage centre showcasing the lifestyle, architecture and crafts of South India.',
                    'Day 6 – Chennai – Mahabalipuram – Pondicherry: Drive to Pondicherry via the Pallava temples at Mahabalipuram, among the earliest granite temples in India.',
                    'Day 7 – Pondicherry: A guided “Day in Auroville” to understand the community’s eco‑friendly practices, green industries and alternate living philosophy.',
                    'Day 8 – Pondicherry: Walking tour of the French and Tamil quarters with visits to an embroidery centre and weaving initiatives that support local women.',
                    'Day 9 – Pondicherry – Kumbakonam: Drive to Kumbakonam via Gangaikondacholapuram temple. Stay in a rural property ideal for exploring village life.',
                    'Day 10 – Kumbakonam: Explore weaving villages where communities continue age‑old silk weaving methods, along with bronze casting units and Tanjore painting workshops.',
                    'Day 11 – Kumbakonam – Chettinad – Madurai: Drive to Madurai via Tanjore temple and the heritage mansions of Chettinad.',
                    'Day 12 – Madurai: Discover lesser‑known sights, a clay idol‑making village, Vedic school, flower market and heritage walk including the Meenakshi Temple complex.',
                    'Day 13 – Madurai – Munnar: Drive to Munnar, followed by a plantation tour and walk in the estate.',
                    'Day 14 – Munnar: Visit Srishti, a charitable textile and paper unit using organic dyes and recycled materials, and a tea estate to see tea production.',
                    'Day 15 – Munnar – Alleppey: Drive to Alleppey and board a private riceboat for an overnight backwater cruise.',
                    'Day 16 – Alleppey – Cochin: Disembark and continue to Cochin. Afternoon tuk‑tuk tour of Fort Cochin and Mattancherry, including Dutch Palace and synagogue.',
                    'Day 17 – Cochin: Excursion to Chendamangalam and Cherai to visit weaving villages and enjoy time by the seaside.',
                    'Day 18 – Departure: Transfer to the airport for your onward flight.',
                ],
                'highlights' => [
                    'Interact with master weavers in family‑run looms.',
                    'Visit temples whose architecture inspires saree patterns.',
                    'Visit artisan villages, handloom units and tile‑making workshops.',
                    'Tour Chettinad mansions showcasing Art Deco and colonial fusion design.',
                    'Explore the Brihadeeswarar Temple (UNESCO World Heritage Site) and other Chola temples.',
                    'Discover Tanjore painting workshops and traditional bronze casting.',
                    'Learn about indigo dyeing, block printing and the use of natural fabrics.',
                    'Experience a blend of French colonial culture and Tamil craft traditions in Pondicherry.',
                    'Participate in cooking classes featuring regional cuisine such as Chettinad or Tamil Brahmin dishes.',
                    'Visit heritage towns, bustling local markets and grand mansions.',
                    'Follow the production of silk from cocoon to yarn and see how Mysore silk is made.',
                ],
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Sacred Plants, Tea & Hill Country Trails',
                'slug' => 'sacred-plants-tea-hill-country',
                'region' => 'Western Ghats',
                'description' => 'Explore tea estates, spice gardens and sacred groves in the Western Ghats, with gentle walks, plantation stays and opportunities to meet planters and naturalists.',
                'image' => 'images/29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Backwaters, Coast & Craft Villages',
                'slug' => 'backwaters-coast-craft-villages',
                'region' => 'Kerala',
                'description' => 'Slow travel through Kerala’s backwaters and coastline, staying in heritage homes and boutique retreats while visiting coir, woodcarving and handloom weaving communities.',
                'image' => 'images/rithudmc-keralabackwaters-kumarakom-2808.jpg',
                'is_featured' => true,
                'order' => 3,
            ],
        ];

        foreach ($tours as $tourData) {
            Tour::updateOrCreate(['slug' => $tourData['slug']], $tourData);
        }
    }
}
