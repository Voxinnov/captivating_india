<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::orderBy('order')
            ->get(['id', 'name', 'location', 'text', 'trip', 'rating']);

        return response()->json(['data' => $testimonials]);
    }

    public function featured()
    {
        $testimonials = Testimonial::where('is_featured', true)
            ->orderBy('order')
            ->get(['id', 'name', 'location', 'text', 'trip', 'rating']);

        return response()->json(['data' => $testimonials]);
    }
}

