<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomePage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomePageController extends Controller
{
    public function edit()
    {
        $homePage = HomePage::first() ?? new HomePage();
        return view('admin.home-page.edit', compact('homePage'));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'hero_title' => 'nullable|string|max:255',
            'hero_subtitle' => 'nullable|string',
            'hero_image' => 'nullable|image|max:2048',
            'about_section_content' => 'nullable|string',
            'about_section_image' => 'nullable|image|max:2048',
            'is_active' => 'boolean',
        ]);

        $homePage = HomePage::firstOrNew();

        if ($request->hasFile('hero_image')) {
            if ($homePage->hero_image) {
                Storage::disk('public')->delete($homePage->hero_image);
            }
            $validated['hero_image'] = $request->file('hero_image')->store('home-page', 'public');
        }

        if ($request->hasFile('about_section_image')) {
            if ($homePage->about_section_image) {
                Storage::disk('public')->delete($homePage->about_section_image);
            }
            $validated['about_section_image'] = $request->file('about_section_image')->store('home-page', 'public');
        }

        $homePage->fill($validated);
        $homePage->save();

        return redirect()->route('admin.home-page.edit')->with('success', 'Home page updated successfully.');
    }
}

