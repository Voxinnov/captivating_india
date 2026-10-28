<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Place;
use Illuminate\Http\Request;

class PlaceController extends Controller
{
    public function index()
    {
        $places = Place::with(['destination', 'images'])
            ->where('status', 1)
            ->orderBy('order')
            ->get()
            ->map(function ($place) {
                return [
                    'id'          => $place->id,
                    'title'       => $place->title,
                    'slug'        => $place->slug,
                    'description' => $place->description,
                    'image'       => $place->image_url,
                    'map'         => $place->map,
                    'destination' => $place->destination ? [
                        'id'    => $place->destination->id,
                        'title' => $place->destination->title,
                        'slug'  => $place->destination->slug,
                    ] : null,
                ];
            });

        return response()->json(['data' => $places]);
    }

    public function show($slug)
    {
        $place = Place::with(['destination', 'activities', 'images'])->where('slug', $slug)->first();

        if (!$place) {
            return response()->json(['message' => 'Place not found'], 404);
        }

        return response()->json([
            'data' => [
                'id'          => $place->id,
                'title'       => $place->title,
                'slug'        => $place->slug,
                'description' => $place->description,
                'image'       => $place->image_url,
                'map'         => $place->map,
                'gallery'     => $place->images->map(fn($img) => [
                    'id'  => $img->id,
                    'url' => str_starts_with($img->image_path, 'images/') ? asset($img->image_path) : asset('storage/' . $img->image_path),
                ]),
                'destination' => $place->destination ? [
                    'id'    => $place->destination->id,
                    'title' => $place->destination->title,
                    'slug'  => $place->destination->slug,
                ] : null,
                'activities'  => $place->activities->sortBy('order')->map(fn($a) => [
                    'id'          => $a->id,
                    'title'       => $a->title,
                    'slug'        => $a->slug,
                    'description' => $a->description,
                    'image'       => $a->image_url,
                ])->values(),
            ],
        ]);
    }
}
