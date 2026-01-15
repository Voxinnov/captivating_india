<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tour;
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
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:tours,slug',
            'region' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|max:2048',
            'overview' => 'nullable|string',
            'itinerary' => 'nullable|array',
            'itinerary.*' => 'string',
            'highlights' => 'nullable|array',
            'highlights.*' => 'string',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $validated['image'] = $request->file('image')->store('tours', 'public');

        Tour::create($validated);

        return redirect()->route('admin.tours.index')->with('success', 'Tour created successfully.');
    }

    public function edit(Tour $tour)
    {
        return view('admin.tours.edit', compact('tour'));
    }

    public function update(Request $request, Tour $tour)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:tours,slug,' . $tour->id,
            'region' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'overview' => 'nullable|string',
            'itinerary' => 'nullable|array',
            'itinerary.*' => 'string',
            'highlights' => 'nullable|array',
            'highlights.*' => 'string',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ]);

        if ($request->hasFile('image')) {
            if ($tour->image) {
                Storage::disk('public')->delete($tour->image);
            }
            $validated['image'] = $request->file('image')->store('tours', 'public');
        }

        $tour->update($validated);

        return redirect()->route('admin.tours.index')->with('success', 'Tour updated successfully.');
    }

    public function destroy(Tour $tour)
    {
        if ($tour->image) {
            Storage::disk('public')->delete($tour->image);
        }
        $tour->delete();
        return redirect()->route('admin.tours.index')->with('success', 'Tour deleted successfully.');
    }
}

