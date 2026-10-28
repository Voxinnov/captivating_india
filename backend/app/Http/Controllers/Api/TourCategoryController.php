<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TourCategory;

class TourCategoryController extends Controller
{
    public function index()
    {
        $categories = TourCategory::withCount('tours')
            ->orderBy('order')
            ->get()
            ->map(function ($cat) {
                return [
                    'id' => $cat->id,
                    'title' => $cat->title,
                    'slug' => $cat->slug,
                    'description' => $cat->description,
                    'tours_count' => $cat->tours_count,
                ];
            });

        return response()->json(['data' => $categories]);
    }
}
