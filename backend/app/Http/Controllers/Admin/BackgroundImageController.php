<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BackgroundImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BackgroundImageController extends Controller
{
    protected $pages = [
        'Home', 'About', 'Activity', 'Destinations', 'Kerala', 'South India', 'North India', 'Odisha',
        'Hotels', 'Tours', 'Gallery', 'Virtual Tour', 'Places', 'Contact', 'Team', 'Services',
        'Why Travel with Us', 'Booking & Payment', 'Testimonial', 'General Info', 'Pages'
    ];

    public function index()
    {
        $existingImages = BackgroundImage::all()->keyBy('page');
        $pages = collect($this->pages)->map(function($pageName) use ($existingImages) {
            return (object) [
                'name' => $pageName,
                'image' => $existingImages->get($pageName)
            ];
        });
        
        return view('admin.background-images.index', compact('pages'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'page' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $backgroundImage = BackgroundImage::where('page', $request->page)->first();

        if ($backgroundImage && $backgroundImage->image_path) {
            Storage::disk('public')->delete($backgroundImage->image_path);
        }

        $path = $request->file('image')->store('backgrounds', 'public');

        BackgroundImage::updateOrCreate(
            ['page' => $request->page],
            ['image_path' => $path]
        );

        return redirect()->back()->with('success', 'Background image updated successfully.');
    }
}
