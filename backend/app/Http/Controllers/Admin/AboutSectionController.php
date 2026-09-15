<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutSection;
use Illuminate\Http\Request;

class AboutSectionController extends Controller
{
    public function edit($key)
    {
        $section = AboutSection::where('section_key', $key)->firstOrCreate([
            'section_key' => $key
        ], [
            'title' => ucwords(str_replace('-', ' ', $key)),
            'status' => 'publish'
        ]);

        return view('admin.about-sections.edit', compact('section', 'key'));
    }

    public function update(Request $request, $key)
    {
        $section = AboutSection::where('section_key', $key)->firstOrFail();
        
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'meta_tags' => 'nullable|string',
            'status' => 'required|in:publish,draft',
        ]);

        $section->update($request->all());

        return redirect()->back()->with('success', 'Section updated successfully.');
    }
}
