<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin',
            'email' => 'admin@captivatingindia.co.uk',
            'password' => Hash::make('password'),
            'is_admin' => true,
        ]);

        // Seed site settings
        \App\Models\SiteSetting::create([
            'key' => 'site_logo',
            'value' => null,
            'type' => 'image',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'site_name',
            'value' => 'Captivating India',
            'type' => 'text',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'footer_text',
            'value' => '© 2025 Captivating India all Rights Reserved || Developed by VOXINNOV',
            'type' => 'text',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'contact_email',
            'value' => 'info@captivatingindia.co.uk',
            'type' => 'text',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'contact_phone',
            'value' => '+91 484 2664107',
            'type' => 'text',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'contact_address',
            'value' => '20/3 B, P.A Ulahan Road, Maradu P.O, Cochin - 682304',
            'type' => 'text',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'facebook_url',
            'value' => '#',
            'type' => 'text',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'instagram_url',
            'value' => '#',
            'type' => 'text',
        ]);

        \App\Models\SiteSetting::create([
            'key' => 'youtube_url',
            'value' => '#',
            'type' => 'text',
        ]);
    }
}

