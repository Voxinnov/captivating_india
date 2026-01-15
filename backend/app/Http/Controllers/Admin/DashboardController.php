<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use App\Models\Hotel;
use App\Models\Activity;
use App\Models\Testimonial;
use App\Models\Destination;
use App\Models\Page;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'tours' => Tour::count(),
            'hotels' => Hotel::count(),
            'activities' => Activity::count(),
            'testimonials' => Testimonial::count(),
            'destinations' => Destination::count(),
            'pages' => Page::count(),
        ];

        return view('admin.dashboard', compact('stats'));
    }
}

