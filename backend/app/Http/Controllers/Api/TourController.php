<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function index()
    {
        $tours = Tour::orderBy('order')
            ->get()
            ->map(function ($tour) {
                return [
                    'id' => $tour->id,
                    'title' => $tour->title,
                    'slug' => $tour->slug,
                    'region' => $tour->region,
                    'description' => $tour->description,
                    'image' => $tour->image ? asset('storage/' . $tour->image) : null,
                    'overview' => $tour->overview,
                    'itinerary' => $tour->itinerary,
                    'highlights' => $tour->highlights,
                ];
            });

        return response()->json(['data' => $tours]);
    }

    public function show($slug)
    {
        $tour = Tour::where('slug', $slug)->first();

        if (!$tour) {
            return response()->json(['message' => 'Tour not found'], 404);
        }

        return response()->json([
            'data' => [
                'id' => $tour->id,
                'title' => $tour->title,
                'slug' => $tour->slug,
                'region' => $tour->region,
                'description' => $tour->description,
                'image' => $tour->image ? asset('storage/' . $tour->image) : null,
                'overview' => $tour->overview,
                'itinerary' => $tour->itinerary,
                'highlights' => $tour->highlights,
            ]
        ]);
    }
}

