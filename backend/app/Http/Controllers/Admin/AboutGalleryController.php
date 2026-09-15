<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SectionGallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AboutGalleryController extends Controller
{
    public function index($key)
    {
        $galleries = SectionGallery::where('section_key', $key)->orderBy('order_no')->paginate(20);
        $title = ucwords(str_replace('-', ' ', $key));
        return view('admin.about-galleries.index', compact('galleries', 'key', 'title'));
    }

    public function create($key)
    {
        $title = ucwords(str_replace('-', ' ', $key));
        return view('admin.about-galleries.create', compact('key', 'title'));
    }

    public function store(Request $request, $key)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'order_no' => 'nullable|integer',
            'status' => 'required|in:publish,draft',
        ]);

        $path = $request->file('image')->store('about-galleries', 'public');

        SectionGallery::create([
            'section_key' => $key,
            'title' => $request->title,
            'image_path' => $path,
            'order_no' => $request->order_no ?? 0,
            'status' => $request->status,
        ]);

        return redirect()->route('admin.about-galleries.index', $key)->with('success', 'Image added successfully.');
    }

    public function edit(SectionGallery $aboutGallery)
    {
        $gallery = $aboutGallery;
        $key = $gallery->section_key;
        $title = ucwords(str_replace('-', ' ', $key));
        return view('admin.about-galleries.edit', compact('gallery', 'key', 'title'));
    }

    public function update(Request $request, SectionGallery $aboutGallery)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'order_no' => 'nullable|integer',
            'status' => 'required|in:publish,draft',
        ]);

        $data = $request->only(['title', 'order_no', 'status']);

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete($aboutGallery->image_path);
            $data['image_path'] = $request->file('image')->store('about-galleries', 'public');
        }

        $aboutGallery->update($data);

        return redirect()->route('admin.about-galleries.index', $aboutGallery->section_key)->with('success', 'Image updated successfully.');
    }

    public function destroy(SectionGallery $aboutGallery)
    {
        Storage::disk('public')->delete($aboutGallery->image_path);
        $key = $aboutGallery->section_key;
        $aboutGallery->delete();

        return redirect()->route('admin.about-galleries.index', $key)->with('success', 'Image deleted successfully.');
    }
}
