<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use Illuminate\Http\Request;

class TourController extends Controller
{
    private function resolveImageUrl(string $path): string
    {
        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return $path;
        }
        $base = rtrim(config('app.url'), '/');
        if (str_starts_with($path, 'images/')) {
            return $base . '/' . $path;
        }
        return $base . '/storage/' . $path;
    }

    public function index()
    {
        $tours = Tour::with(['category', 'images', 'places.destination'])->orderBy('order')
            ->get()
            ->map(function ($tour) {
                $imageUrl = $tour->image ? $this->resolveImageUrl($tour->image) : null;
                $mapImageUrl = $tour->map_image ? $this->resolveImageUrl($tour->map_image) : null;
                $itineraryPdfUrl = $tour->itinerary_pdf ? $this->resolveImageUrl($tour->itinerary_pdf) : null;

                $gallery = $tour->images->map(fn($img) => $this->resolveImageUrl($img->image_path))->values()->all();

                $places = $tour->places->map(function ($place) {
                    return [
                        'id' => $place->id,
                        'title' => $place->title,
                        'slug' => $place->slug,
                        'description' => $place->description,
                        'image' => $place->image ? $this->resolveImageUrl($place->image) : null,
                        'destination' => $place->destination ? [
                            'id' => $place->destination->id,
                            'title' => $place->destination->title,
                            'slug' => $place->destination->slug,
                        ] : null,
                    ];
                })->values()->all();

                return [
                    'id' => $tour->id,
                    'title' => $tour->title,
                    'slug' => $tour->slug,
                    'category' => $tour->category ? [
                        'id' => $tour->category->id,
                        'title' => $tour->category->title,
                        'slug' => $tour->category->slug,
                    ] : null,
                    'region' => $tour->region,
                    'description' => $tour->description,
                    'image' => $imageUrl,
                    'map_image' => $mapImageUrl,
                    'overview' => $tour->overview,
                    'itinerary_type' => $tour->itinerary_type ?? 'text',
                    'itinerary_pdf' => $itineraryPdfUrl,
                    'itinerary' => $tour->itinerary,
                    'highlights' => $tour->highlights,
                    'gallery' => $gallery,
                    'places' => $places,
                ];
            });

        return response()->json(['data' => $tours]);
    }

    public function show($slug)
    {
        $tour = Tour::with(['category', 'images', 'places.destination'])->where('slug', $slug)->first();

        if (!$tour) {
            return response()->json(['message' => 'Tour not found'], 404);
        }

        $imageUrl = $tour->image ? $this->resolveImageUrl($tour->image) : null;
        $mapImageUrl = $tour->map_image ? $this->resolveImageUrl($tour->map_image) : null;
        $itineraryPdfUrl = $tour->itinerary_pdf ? $this->resolveImageUrl($tour->itinerary_pdf) : null;

        $gallery = $tour->images->map(fn($img) => $this->resolveImageUrl($img->image_path))->values()->all();

        $places = $tour->places->map(function ($place) {
            return [
                'id' => $place->id,
                'title' => $place->title,
                'slug' => $place->slug,
                'description' => $place->description,
                'image' => $place->image ? $this->resolveImageUrl($place->image) : null,
                'destination' => $place->destination ? [
                    'id' => $place->destination->id,
                    'title' => $place->destination->title,
                    'slug' => $place->destination->slug,
                ] : null,
            ];
        })->values()->all();

        return response()->json([
            'data' => [
                'id' => $tour->id,
                'title' => $tour->title,
                'slug' => $tour->slug,
                'category' => $tour->category ? [
                    'id' => $tour->category->id,
                    'title' => $tour->category->title,
                    'slug' => $tour->category->slug,
                ] : null,
                'region' => $tour->region,
                'description' => $tour->description,
                'image' => $imageUrl,
                'map_image' => $mapImageUrl,
                'overview' => $tour->overview,
                'itinerary_type' => $tour->itinerary_type ?? 'text',
                'itinerary_pdf' => $itineraryPdfUrl,
                'itinerary' => $tour->itinerary,
                'highlights' => $tour->highlights,
                'gallery' => $gallery,
                'places' => $places,
            ]
        ]);
    }
}

