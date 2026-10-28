<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::with(['place', 'destination'])->orderBy('order')->latest()->paginate(20);
        return view('admin.activities.index', compact('activities'));
    }


    public function create()
    {
        $places = \App\Models\Place::all();
        $destinations = \App\Models\Destination::all();
        return view('admin.activities.create', compact('places', 'destinations'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:activities,slug',
            'destination_id' => 'required|exists:destinations,id',
            'place_id' => 'required|exists:places,id',
            'description' => 'required|string',
            'long_description' => 'nullable|string',
            'image' => 'required|image|max:2048',
            'is_featured' => 'boolean',
            'order' => 'integer',
            'images.*' => 'image|max:2048',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $validated['image'] = $request->file('image')->store('activities', 'public');

        $activity = Activity::create($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('activities/gallery', 'public');
                $activity->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.activities.index')->with('success', 'Activity created successfully.');
    }

    public function edit(Activity $activity)
    {
        $places = \App\Models\Place::all();
        $destinations = \App\Models\Destination::all();
        $activity->load('images');
        return view('admin.activities.edit', compact('activity', 'places', 'destinations'));
    }

    public function update(Request $request, Activity $activity)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:activities,slug,' . $activity->id,
            'destination_id' => 'required|exists:destinations,id',
            'place_id' => 'required|exists:places,id',
            'description' => 'required|string',
            'long_description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'is_featured' => 'boolean',
            'order' => 'integer',
            'images.*' => 'image|max:2048',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        if ($request->hasFile('image')) {
            if ($activity->image) {
                Storage::disk('public')->delete($activity->image);
            }
            $validated['image'] = $request->file('image')->store('activities', 'public');
        }

        $activity->update($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('activities/gallery', 'public');
                $activity->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.activities.index')->with('success', 'Activity updated successfully.');
    }

    public function destroy(Activity $activity)
    {
        if ($activity->image) {
            Storage::disk('public')->delete($activity->image);
        }
        foreach ($activity->images as $image) {
            if ($image->image_path) {
                Storage::disk('public')->delete($image->image_path);
            }
            $image->delete();
        }
        $activity->delete();
        return redirect()->route('admin.activities.index')->with('success', 'Activity deleted successfully.');
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

