<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GalleryCategory;
use App\Models\GalleryImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class GalleryController extends Controller
{
    public function index()
    {
        $categories = GalleryCategory::with('images')->orderBy('order')->latest()->paginate(20);
        return view('admin.gallery.index', compact('categories'));
    }

    public function create()
    {
        return view('admin.gallery.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:gallery_categories,slug',
            'cover_image' => 'required|image|max:2048',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        $validated['cover_image'] = $request->file('cover_image')->store('gallery', 'public');

        $category = GalleryCategory::create($validated);

        // Handle multiple images
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $image) {
                GalleryImage::create([
                    'gallery_category_id' => $category->id,
                    'image_path' => $image->store('gallery', 'public'),
                    'alt_text' => $request->input("alt_texts.{$index}"),
                    'order' => $index,
                ]);
            }
        }

        return redirect()->route('admin.gallery.index')->with('success', 'Gallery category created successfully.');
    }

    public function edit(GalleryCategory $gallery)
    {
        $gallery->load('images');
        return view('admin.gallery.edit', compact('gallery'));
    }

    public function update(Request $request, GalleryCategory $gallery)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:gallery_categories,slug,' . $gallery->id,
            'cover_image' => 'nullable|image|max:2048',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ]);

        if ($request->hasFile('cover_image')) {
            if ($gallery->cover_image) {
                Storage::disk('public')->delete($gallery->cover_image);
            }
            $validated['cover_image'] = $request->file('cover_image')->store('gallery', 'public');
        }

        $gallery->update($validated);

        // Handle new images
        if ($request->hasFile('new_images')) {
            $startOrder = $gallery->images()->max('order') ?? -1;
            foreach ($request->file('new_images') as $index => $image) {
                GalleryImage::create([
                    'gallery_category_id' => $gallery->id,
                    'image_path' => $image->store('gallery', 'public'),
                    'alt_text' => $request->input("new_alt_texts.{$index}"),
                    'order' => $startOrder + $index + 1,
                ]);
            }
        }

        return redirect()->route('admin.gallery.index')->with('success', 'Gallery category updated successfully.');
    }

    public function destroy(GalleryCategory $gallery)
    {
        if ($gallery->cover_image) {
            Storage::disk('public')->delete($gallery->cover_image);
        }
        
        foreach ($gallery->images as $image) {
            Storage::disk('public')->delete($image->image_path);
        }

        $gallery->delete();
        return redirect()->route('admin.gallery.index')->with('success', 'Gallery category deleted successfully.');
    }

    public function showImages()
    {
        $images = GalleryImage::with('category')->latest()->paginate(30);
        $categories = GalleryCategory::orderBy('title')->get();
        return view('admin.gallery.images', compact('images', 'categories'));
    }

    public function storeImage(Request $request)
    {
        $request->validate([
            'gallery_category_id' => 'required|exists:gallery_categories,id',
            'image' => 'required|image|max:2048',
        ]);

        GalleryImage::create([
            'gallery_category_id' => $request->gallery_category_id,
            'image_path' => $request->file('image')->store('gallery', 'public'),
            'alt_text' => $request->alt_text,
            'order' => 0,
        ]);

        return back()->with('success', 'Image added successfully.');
    }

    public function deleteImage(GalleryImage $image)
    {
        Storage::disk('public')->delete($image->image_path);
        $image->delete();
        return back()->with('success', 'Image deleted successfully.');
    }
}

