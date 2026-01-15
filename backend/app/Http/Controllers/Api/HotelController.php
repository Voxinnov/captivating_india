<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::orderBy('order')
            ->get()
            ->map(function ($hotel) {
                return [
                    'id' => $hotel->id,
                    'name' => $hotel->name,
                    'slug' => $hotel->slug,
                    'location' => $hotel->location,
                    'description' => $hotel->description,
                    'image' => $hotel->image ? asset('storage/' . $hotel->image) : null,
                    'longDescription' => $hotel->long_description,
                    'opinion' => $hotel->opinion,
                ];
            });

        return response()->json(['data' => $hotels]);
    }

    public function show($slug)
    {
        $hotel = Hotel::where('slug', $slug)->first();

        if (!$hotel) {
            return response()->json(['message' => 'Hotel not found'], 404);
        }

        return response()->json([
            'data' => [
                'id' => $hotel->id,
                'name' => $hotel->name,
                'slug' => $hotel->slug,
                'location' => $hotel->location,
                'description' => $hotel->description,
                'image' => $hotel->image ? asset('storage/' . $hotel->image) : null,
                'longDescription' => $hotel->long_description,
                'opinion' => $hotel->opinion,
            ]
        ]);
    }
}

