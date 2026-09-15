<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VirtualTour;
use Illuminate\Http\Request;

class VirtualTourController extends Controller
{
    public function index()
    {
        $tours = VirtualTour::all();
        return view('admin.virtual-tours.index', compact('tours'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'link' => 'required|url',
            'description' => 'nullable|string',
            'type' => 'required|string',
            'status' => 'required|string',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('virtual-tours', 'public');
        }

        VirtualTour::create($validated);

        return redirect()->back()->with('success', 'Virtual tour added successfully.');
    }

    public function destroy(VirtualTour $virtualTour)
    {
        $virtualTour->delete();
        return redirect()->back()->with('success', 'Tour deleted successfully.');
    }
}
