<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HomePage;
use Illuminate\Http\Request;

class HomePageController extends Controller
{
    public function index()
    {
        $homePage = HomePage::where('is_active', true)->first();
        
        if (!$homePage) {
            return response()->json(['data' => null], 404);
        }

        return response()->json([
            'data' => [
                'hero_title' => $homePage->hero_title,
                'hero_subtitle' => $homePage->hero_subtitle,
                'hero_image' => $homePage->hero_image ? asset('storage/' . $homePage->hero_image) : null,
                'about_section_content' => $homePage->about_section_content,
                'about_section_image' => $homePage->about_section_image ? asset('storage/' . $homePage->about_section_image) : null,
            ]
        ]);
    }
}

