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
                $imageUrl = null;
                if ($tour->image) {
                    if (str_starts_with($tour->image, 'images/')) {
                        $imageUrl = asset($tour->image);
                    } else {
                        $imageUrl = asset('storage/' . $tour->image);
                    }
                }

                $mapImageUrl = null;
                if ($tour->map_image) {
                    if (str_starts_with($tour->map_image, 'images/')) {
                        $mapImageUrl = asset($tour->map_image);
                    } else {
                        $mapImageUrl = asset('storage/' . $tour->map_image);
                    }
                }

                $itineraryPdfUrl = null;
                if ($tour->itinerary_pdf) {
                    if (str_starts_with($tour->itinerary_pdf, 'http://') || str_starts_with($tour->itinerary_pdf, 'https://')) {
                        $itineraryPdfUrl = $tour->itinerary_pdf;
                    } else {
                        $itineraryPdfUrl = asset('storage/' . $tour->itinerary_pdf);
                    }
                }

                return [
                    'id' => $tour->id,
                    'title' => $tour->title,
                    'slug' => $tour->slug,
                    'region' => $tour->region,
                    'description' => $tour->description,
                    'image' => $imageUrl,
                    'map_image' => $mapImageUrl,
                    'overview' => $tour->overview,
                    'itinerary_type' => $tour->itinerary_type ?? 'text',
                    'itinerary_pdf' => $itineraryPdfUrl,
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

        $imageUrl = null;
        if ($tour->image) {
            if (str_starts_with($tour->image, 'images/')) {
                $imageUrl = asset($tour->image);
            } else {
                $imageUrl = asset('storage/' . $tour->image);
            }
        }

        $mapImageUrl = null;
        if ($tour->map_image) {
            if (str_starts_with($tour->map_image, 'images/')) {
                $mapImageUrl = asset($tour->map_image);
            } else {
                $mapImageUrl = asset('storage/' . $tour->map_image);
            }
        }

        $itineraryPdfUrl = null;
        if ($tour->itinerary_pdf) {
            if (str_starts_with($tour->itinerary_pdf, 'http://') || str_starts_with($tour->itinerary_pdf, 'https://')) {
                $itineraryPdfUrl = $tour->itinerary_pdf;
            } else {
                $itineraryPdfUrl = asset('storage/' . $tour->itinerary_pdf);
            }
        }

        return response()->json([
            'data' => [
                'id' => $tour->id,
                'title' => $tour->title,
                'slug' => $tour->slug,
                'region' => $tour->region,
                'description' => $tour->description,
                'image' => $imageUrl,
                'map_image' => $mapImageUrl,
                'overview' => $tour->overview,
                'itinerary_type' => $tour->itinerary_type ?? 'text',
                'itinerary_pdf' => $itineraryPdfUrl,
                'itinerary' => $tour->itinerary,
                'highlights' => $tour->highlights,
            ]
        ]);
    }
}

