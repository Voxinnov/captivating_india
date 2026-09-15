<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AboutSection;
use Illuminate\Http\Request;

class AboutSectionController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key', 'about');
        
        $section = AboutSection::where('section_key', $key)->first();

        if (!$section) {
            return response()->json(['message' => 'Section not found'], 404);
        }

        return response()->json([
            'title' => $section->title,
            'description' => $section->description,
            'meta_tags' => $section->meta_tags,
        ]);
    }
}
