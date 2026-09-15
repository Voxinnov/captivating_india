<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::with('place')->orderBy('order')
            ->get()
            ->map(function ($hotel) {
                return [
                    'id' => $hotel->id,
                    'name' => $hotel->title,
                    'slug' => $hotel->slug,
                    'location' => $hotel->place ? $hotel->place->title : 'Unknown',
                    'description' => $hotel->description,
                    'image' => $hotel->image ? (str_starts_with($hotel->image, 'images/') ? '/' . $hotel->image : asset('storage/' . $hotel->image)) : null,
                    'longDescription' => $hotel->long_description,
                    'opinion' => $hotel->opinion,
                ];
            });

        return response()->json(['data' => $hotels]);
    }

    public function show($slug)
    {
        $hotel = Hotel::with(['place', 'images'])->where('slug', $slug)->first();

        if (!$hotel) {
            return response()->json(['message' => 'Hotel not found'], 404);
        }

        $galleryImages = $hotel->images->map(function ($img) {
            return str_starts_with($img->image_path, 'images/')
                ? '/' . $img->image_path
                : asset('storage/' . $img->image_path);
        })->values()->all();

        return response()->json([
            'data' => [
                'id' => $hotel->id,
                'name' => $hotel->title,
                'slug' => $hotel->slug,
                'location' => $hotel->place ? $hotel->place->title : 'Unknown',
                'description' => $hotel->description,
                'image' => $hotel->image ? (str_starts_with($hotel->image, 'images/') ? '/' . $hotel->image : asset('storage/' . $hotel->image)) : null,
                'longDescription' => $hotel->long_description,
                'opinion' => $hotel->opinion,
                'gallery' => $galleryImages,
            ]
        ]);
    }
}

