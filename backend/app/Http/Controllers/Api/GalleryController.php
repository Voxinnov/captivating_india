<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GalleryCategory;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $categories = GalleryCategory::with('images')
            ->orderBy('order')
            ->get()
            ->map(function ($category) {
                return [
                    'slug' => $category->slug,
                    'title' => $category->title,
                    'coverImage' => $category->cover_image ? asset('storage/' . $category->cover_image) : null,
                    'images' => $category->images->map(function ($image) {
                        return asset('storage/' . $image->image_path);
                    })->toArray(),
                ];
            });

        return response()->json(['data' => $categories]);
    }

    public function show($slug)
    {
        $category = GalleryCategory::where('slug', $slug)
            ->with('images')
            ->first();

        if (!$category) {
            return response()->json(['message' => 'Gallery category not found'], 404);
        }

        return response()->json([
            'data' => [
                'slug' => $category->slug,
                'title' => $category->title,
                'coverImage' => $category->cover_image ? asset('storage/' . $category->cover_image) : null,
                'images' => $category->images->map(function ($image) {
                    return asset('storage/' . $image->image_path);
                })->toArray(),
            ]
        ]);
    }
}

