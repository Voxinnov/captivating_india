<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class HotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::with('place')->orderBy('order')->latest()->paginate(20);
        return view('admin.hotels.index', compact('hotels'));
    }


    public function create()
    {
        $places = \App\Models\Place::all();
        return view('admin.hotels.create', compact('places'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:hotels,slug',
            'place_id' => 'required|exists:places,id',
            'description' => 'required|string',
            'image' => 'required|image|max:2048',
            'long_description' => 'nullable|string',
            'opinion' => 'nullable|string',
            'flag' => 'nullable|string',
            'map' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
            'images.*' => 'image|max:2048',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $validated['image'] = $request->file('image')->store('hotels', 'public');

        $hotel = Hotel::create($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('hotels/gallery', 'public');
                $hotel->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.hotels.index')->with('success', 'Hotel created successfully.');
    }

    public function edit(Hotel $hotel)
    {
        $hotel->load('images');
        $places = \App\Models\Place::all();
        return view('admin.hotels.edit', compact('hotel', 'places'));
    }

    public function update(Request $request, Hotel $hotel)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:hotels,slug,' . $hotel->id,
            'place_id' => 'required|exists:places,id',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'long_description' => 'nullable|string',
            'opinion' => 'nullable|string',
            'flag' => 'nullable|string',
            'map' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
            'images.*' => 'image|max:2048',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        if ($request->hasFile('image')) {
            if ($hotel->image) {
                Storage::disk('public')->delete($hotel->image);
            }
            $validated['image'] = $request->file('image')->store('hotels', 'public');
        }

        $hotel->update($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('hotels/gallery', 'public');
                $hotel->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.hotels.index')->with('success', 'Hotel updated successfully.');
    }

    public function destroy(Hotel $hotel)
    {
        if ($hotel->image) {
            Storage::disk('public')->delete($hotel->image);
        }
        $hotel->delete();
        return redirect()->route('admin.hotels.index')->with('success', 'Hotel deleted successfully.');
    }

    public function deleteImage(Image $image)
    {
        if ($image->image_path) {
            Storage::disk('public')->delete($image->image_path);
        }
        $image->delete();
        return back()->with('success', 'Gallery image deleted successfully.');
    }
}

