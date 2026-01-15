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
                    'image' => $destination->image ? asset('storage/' . $destination->image) : null,
                    'long_description' => $destination->long_description,
                ];
            });

        return response()->json(['data' => $destinations]);
    }

    public function show($slug)
    {
        $destination = Destination::where('slug', $slug)->first();

        if (!$destination) {
            return response()->json(['message' => 'Destination not found'], 404);
        }

        return response()->json([
            'data' => [
                'id' => $destination->id,
                'title' => $destination->title,
                'slug' => $destination->slug,
                'description' => $destination->description,
                'image' => $destination->image ? asset('storage/' . $destination->image) : null,
                'long_description' => $destination->long_description,
            ]
        ]);
    }
}

