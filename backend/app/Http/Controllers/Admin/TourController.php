<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TourController extends Controller
{
    public function index()
    {
        $tours = Tour::orderBy('order')->latest()->paginate(20);
        return view('admin.tours.index', compact('tours'));
    }


    public function create()
    {
        return view('admin.tours.create');
    }

    public function store(Request $request)
    {
        // Convert newline-separated strings to arrays
        if ($request->has('itinerary') && is_string($request->itinerary)) {
            $request->merge([
                'itinerary' => array_filter(array_map('trim', explode("\n", $request->itinerary)))
            ]);
        }
        if ($request->has('highlights') && is_string($request->highlights)) {
            $request->merge([
                'highlights' => array_filter(array_map('trim', explode("\n", $request->highlights)))
            ]);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:tours,slug',
            'image' => 'required|image|max:2048',
            'map_image' => 'nullable|image|max:2048',
            'overview' => 'nullable|string',
            'itinerary_type' => 'nullable|string|in:text,pdf',
            'itinerary_pdf' => 'nullable|file|mimes:pdf|max:10240',
            'itinerary' => 'nullable|array',
            'itinerary.*' => 'string',
            'highlights' => 'nullable|array',
            'highlights.*' => 'string',
            'more_info' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
            'images.*' => 'image|max:2048',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $validated['image'] = $request->file('image')->store('tours', 'public');

        if ($request->hasFile('map_image')) {
            $validated['map_image'] = $request->file('map_image')->store('tours/maps', 'public');
        }

        if ($request->hasFile('itinerary_pdf')) {
            $validated['itinerary_pdf'] = $request->file('itinerary_pdf')->store('tours/pdfs', 'public');
        }

        $tour = Tour::create($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('tours/gallery', 'public');
                $tour->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.tours.index')->with('success', 'Tour created successfully.');
    }

    public function edit(Tour $tour)
    {
        $tour->load('images');
        return view('admin.tours.edit', compact('tour'));
    }

    public function update(Request $request, Tour $tour)
    {
        // Convert newline-separated strings to arrays
        if ($request->has('itinerary') && is_string($request->itinerary)) {
            $request->merge([
                'itinerary' => array_filter(array_map('trim', explode("\n", $request->itinerary)))
            ]);
        }
        if ($request->has('highlights') && is_string($request->highlights)) {
            $request->merge([
                'highlights' => array_filter(array_map('trim', explode("\n", $request->highlights)))
            ]);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:tours,slug,' . $tour->id,
            'image' => 'nullable|image|max:2048',
            'map_image' => 'nullable|image|max:2048',
            'overview' => 'nullable|string',
            'itinerary_type' => 'nullable|string|in:text,pdf',
            'itinerary_pdf' => 'nullable|file|mimes:pdf|max:10240',
            'itinerary' => 'nullable|array',
            'itinerary.*' => 'string',
            'highlights' => 'nullable|array',
            'highlights.*' => 'string',
            'more_info' => 'nullable|string',
            'is_featured' => 'boolean',
            'order' => 'integer',
            'images.*' => 'image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($tour->image) {
                Storage::disk('public')->delete($tour->image);
            }
            $validated['image'] = $request->file('image')->store('tours', 'public');
        }

        if ($request->hasFile('map_image')) {
            if ($tour->map_image) {
                Storage::disk('public')->delete($tour->map_image);
            }
            $validated['map_image'] = $request->file('map_image')->store('tours/maps', 'public');
        }

        if ($request->hasFile('itinerary_pdf')) {
            if ($tour->itinerary_pdf) {
                Storage::disk('public')->delete($tour->itinerary_pdf);
            }
            $validated['itinerary_pdf'] = $request->file('itinerary_pdf')->store('tours/pdfs', 'public');
        }

        $tour->update($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('tours/gallery', 'public');
                $tour->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.tours.index')->with('success', 'Tour updated successfully.');
    }

    public function destroy(Tour $tour)
    {
        if ($tour->image) {
            Storage::disk('public')->delete($tour->image);
        }
        if ($tour->map_image) {
            Storage::disk('public')->delete($tour->map_image);
        }
        if ($tour->itinerary_pdf) {
            Storage::disk('public')->delete($tour->itinerary_pdf);
        }
        $tour->delete();
        return redirect()->route('admin.tours.index')->with('success', 'Tour deleted successfully.');
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
