<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Place;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PlaceController extends Controller
{
    public function index()
    {
        $places = Place::with('destination')->orderBy('order')->paginate(20);
        $destinations = Destination::all();
        return view('admin.places.index', compact('places', 'destinations'));
    }

    public function create()
    {
        $destinations = Destination::all();
        return view('admin.places.create', compact('destinations'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'destination_id' => 'required|exists:destinations,id',
            'image' => 'nullable|image|max:2048',
            'map' => 'nullable|string',
            'description' => 'nullable|string',
            'status' => 'boolean',
            'images.*' => 'image|max:2048',
        ]);

        $data = $request->all();
        $data['slug'] = Str::slug($request->title);
        $data['status'] = $request->has('status') ? 1 : 0;

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('places', 'public');
        }

        $place = Place::create($data);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('places/gallery', 'public');
                $place->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.places.index')->with('success', 'Place created successfully.');
    }

    public function edit(Place $place)
    {
        $destinations = Destination::all();
        return view('admin.places.edit', compact('place', 'destinations'));
    }

    public function update(Request $request, Place $place)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'destination_id' => 'required|exists:destinations,id',
            'image' => 'nullable|image|max:2048',
            'map' => 'nullable|string',
            'description' => 'nullable|string',
            'status' => 'boolean',
            'images.*' => 'image|max:2048',
        ]);

        $data = $request->all();
        $data['slug'] = Str::slug($request->title);
        $data['status'] = $request->has('status') ? 1 : 0;

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('places', 'public');
        }

        $place->update($data);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('places/gallery', 'public');
                $place->images()->create(['image_path' => $path]);
            }
        }

        return redirect()->route('admin.places.index')->with('success', 'Place updated successfully.');
    }

    public function destroy(Place $place)
    {
        $place->delete();
        return redirect()->route('admin.places.index')->with('success', 'Place deleted successfully.');
    }
}
