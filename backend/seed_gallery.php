<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

$categories = [
  [
    'slug' => 'highlights-of-south-india',
    'title' => 'Highlights of South India',
    'coverImage' => '29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
    'images' => [
      '29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
      'rithudmc-keralabackwaters-kumarakom-2808.jpg',
      'rithudmc-keralabackwaters-kumarakom-9085.jpg',
      'rithu-dmc-about-1430.jpg',
    ],
  ],
  [
    'slug' => 'highlights-of-treks-and-camps',
    'title' => 'Highlights of Treks and Camps',
    'coverImage' => '29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
    'images' => [
      '29-05-2021-12-37-36-Meesapulimalai-trek.jpg',
      'rithu-dmc-about-3709.jpg',
      'rithu-dmc-about-4572.jpg',
    ],
  ],
  [
    'slug' => 'activities-in-south-india',
    'title' => 'Activities in South India',
    'coverImage' => '29-05-2021-12-37-36-Mararikulam---1.jpg',
    'images' => [
      '29-05-2021-12-37-36-Mararikulam---1.jpg',
      'odishatribaltourkeralatravelagent-8565.jpg',
      'rithu-dmc-about-3709.jpg',
    ],
  ],
  [
    'slug' => 'birds-of-south-india',
    'title' => 'Birds of South India',
    'coverImage' => 'rithudmc-keralabackwaters-kumarakom-2808.jpg',
    'images' => [
      'rithudmc-keralabackwaters-kumarakom-2808.jpg',
      'rithudmc-keralabackwaters-kumarakom-9085.jpg',
    ],
  ],
  [
    'slug' => 'periyar-forest-bungalow-pachakanam',
    'title' => 'Periyar Forest Bungalow @ Pachakanam',
    'coverImage' => '11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
    'images' => [
      '11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
      '13-08-2025-16-55-26-Taj Fateh Prakash.jpg',
    ],
  ],
  [
    'slug' => 'temples-of-south-india',
    'title' => 'Temples of South India',
    'coverImage' => '13-08-2025-16-55-26-Taj Fateh Prakash.jpg',
    'images' => [
      '13-08-2025-16-55-26-Taj Fateh Prakash.jpg',
      '11-08-2025-11-31-05-Taj lake palace.jpg',
    ],
  ],
  [
    'slug' => 'beaches-of-south-india',
    'title' => 'Beaches of South India',
    'coverImage' => '29-05-2021-12-37-36-Mararikulam---1.jpg',
    'images' => [
      '29-05-2021-12-37-36-Mararikulam---1.jpg',
      '11-08-2025-11-31-44-Oberoi udaivilas 3.jpg',
    ],
  ],
  [
    'slug' => 'streets-markets-and-people',
    'title' => 'Streets, Markets and People',
    'coverImage' => 'rithu-dmc-about-1430.jpg',
    'images' => [
      'rithu-dmc-about-1430.jpg',
      'rithu-dmc-about-2004.jpg',
      'rithu-dmc-about-3709.jpg',
    ],
  ],
  [
    'slug' => 'wildlife-in-south-india',
    'title' => 'Wildlife in South India',
    'coverImage' => 'odishatribaltourkeralatravelagent-8565.jpg',
    'images' => [
      'odishatribaltourkeralatravelagent-8565.jpg',
      '11-08-2025-11-15-33-Oberoi Udaivilas.jpg',
    ],
  ],
  [
    'slug' => 'highlights-of-kerala',
    'title' => 'Highlights of Kerala',
    'coverImage' => 'rithudmc-keralabackwaters-kumarakom-9085.jpg',
    'images' => [
      'rithudmc-keralabackwaters-kumarakom-9085.jpg',
      'rithudmc-keralabackwaters-kumarakom-2808.jpg',
      '29-05-2021-12-37-36-Mararikulam---1.jpg',
    ],
  ],
];

use Illuminate\Support\Facades\Schema;
Schema::disableForeignKeyConstraints();
DB::table('gallery_categories')->truncate();
DB::table('gallery_images')->truncate();
Schema::enableForeignKeyConstraints();

$sourceDir = '/var/www/captivationgindia.bvox.in/captivating_india/public/images';
$destDir = '/var/www/captivationgindia.bvox.in/captivating_india/backend/storage/app/public/gallery';

if (!file_exists($destDir)) {
    mkdir($destDir, 0755, true);
}

foreach ($categories as $index => $cat) {
    // Copy cover image
    $coverSource = $sourceDir . '/' . $cat['coverImage'];
    $coverDestPath = 'gallery/' . $cat['coverImage'];
    $coverDest = $destDir . '/' . $cat['coverImage'];
    if (file_exists($coverSource) && !file_exists($coverDest)) {
        copy($coverSource, $coverDest);
    }

    $catId = DB::table('gallery_categories')->insertGetId([
        'slug' => $cat['slug'],
        'title' => $cat['title'],
        'cover_image' => $coverDestPath,
        'order' => $index + 1,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    foreach ($cat['images'] as $imgIndex => $img) {
        $imgSource = $sourceDir . '/' . $img;
        $imgDestPath = 'gallery/' . $img;
        $imgDest = $destDir . '/' . $img;
        if (file_exists($imgSource) && !file_exists($imgDest)) {
            copy($imgSource, $imgDest);
        }

        DB::table('gallery_images')->insert([
            'gallery_category_id' => $catId,
            'image_path' => $imgDestPath,
            'order' => $imgIndex + 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}

echo "Database seeded and images copied successfully.\n";
