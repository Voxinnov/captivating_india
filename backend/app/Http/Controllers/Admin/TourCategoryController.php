<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TourCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TourCategoryController extends Controller
{
    public function index()
    {
        $categories = TourCategory::withCount('tours')->orderBy('order')->latest()->paginate(20);
        return view('admin.tour-categories.index', compact('categories'));
    }

    public function create()
    {
        return redirect()->route('admin.tour-categories.index');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:tour_categories,slug',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        if (empty($validated['slug'])) {
            $baseSlug = Str::slug($validated['title']);
            $slug = $baseSlug;
            $count = 1;
            while (TourCategory::where('slug', $slug)->exists()) {
                $slug = "{$baseSlug}-{$count}";
                $count++;
            }
            $validated['slug'] = $slug;
        }

        $validated['order'] = $validated['order'] ?? 0;

        TourCategory::create($validated);

        return redirect()->route('admin.tour-categories.index')->with('success', 'Tour category created successfully.');
    }

    public function edit(TourCategory $tourCategory)
    {
        return view('admin.tour-categories.edit', compact('tourCategory'));
    }

    public function update(Request $request, TourCategory $tourCategory)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:tour_categories,slug,' . $tourCategory->id,
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        $validated['order'] = $validated['order'] ?? 0;

        $tourCategory->update($validated);

        return redirect()->route('admin.tour-categories.index')->with('success', 'Tour category updated successfully.');
    }

    public function destroy(TourCategory $tourCategory)
    {
        $tourCategory->delete();
        return redirect()->route('admin.tour-categories.index')->with('success', 'Tour category deleted successfully.');
    }
}
