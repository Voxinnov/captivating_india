<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::with(['place', 'destination'])->orderBy('order')
            ->get()
            ->map(function ($activity) {
                return [
                    'id' => $activity->id,
                    'title' => $activity->title,
                    'slug' => $activity->slug,
                    'theme' => $activity->destination ? $activity->destination->title : ($activity->place && $activity->place->destination ? $activity->place->destination->title : null),
                    'location' => $activity->place ? $activity->place->title : null,
                    'description' => $activity->description,
                    'longDescription' => $activity->long_description,
                    'image' => $activity->image_url,
                ];
            });

        return response()->json(['data' => $activities]);
    }

    public function show($slug)
    {
        $activity = Activity::where('slug', $slug)->first();

        if (!$activity) {
            return response()->json(['message' => 'Activity not found'], 404);
        }

        return response()->json([
            'data' => [
                'id' => $activity->id,
                'title' => $activity->title,
                'slug' => $activity->slug,
                'theme' => $activity->destination ? $activity->destination->title : ($activity->place && $activity->place->destination ? $activity->place->destination->title : null),
                'location' => $activity->place ? $activity->place->title : null,
                'description' => $activity->description,
                'longDescription' => $activity->long_description,
                'image' => $activity->image_url,
            ]
        ]);
    }
}

