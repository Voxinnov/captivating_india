<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    public function index()
    {
        $destinations = Destination::orderBy('order')
            ->get()
            ->map(function ($destination) {
                return [
                    'id' => $destination->id,
                    'title' => $destination->title,
                    'slug' => $destination->slug,
                    'description' => $destination->description,
                    'image' => $destination->image_url,
                    'long_description' => $destination->long_description,
                    'highlights' => $destination->highlights,
                ];
            });

        return response()->json(['data' => $destinations]);
    }

    public function show($slug)
    {
        $destination = Destination::with(['activities.place', 'places.activities', 'images'])->where('slug', $slug)->first();

        if (!$destination) {
            return response()->json(['message' => 'Destination not found'], 404);
        }

        return response()->json([
            'data' => [
                'id' => $destination->id,
                'title' => $destination->title,
                'slug' => $destination->slug,
                'description' => $destination->description,
                'image' => $destination->image_url,
                'gallery' => $destination->images->map(fn($img) => [
                    'id' => $img->id,
                    'url' => str_starts_with($img->image_path, 'images/') ? asset($img->image_path) : asset('storage/' . $img->image_path),
                ]),
                'long_description' => $destination->long_description,
                'highlights' => $destination->highlights,
                'places' => $destination->places->map(fn($p) => [
                    'id'               => $p->id,
                    'title'            => $p->title,
                    'slug'             => $p->slug,
                    'description'      => $p->description,
                    'image'            => $p->image_url,
                    'activities_count' => $p->activities->count(),
                ]),
                'activities' => $destination->activities->map(fn($a) => [
                    'id' => $a->id,
                    'title' => $a->title,
                    'slug' => $a->slug,
                    'place_id' => $a->place_id,
                    'location' => $a->place ? $a->place->title : null,
                    'description' => $a->description,
                    'image' => $a->image_url,
                ]),
            ]
        ]);
    }
}

