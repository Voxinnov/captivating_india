<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SiteSettingController extends Controller
{
    public function index()
    {
        $settings = SiteSetting::orderBy('key')->get();
        return view('admin.settings.index', compact('settings'));
    }

    public function update(Request $request)
    {
        $settings = $request->except(['_token', '_method']);

        foreach ($settings as $key => $value) {
            // Handle file uploads
            if ($request->hasFile($key)) {
                $setting = SiteSetting::where('key', $key)->first();
                if ($setting && $setting->value) {
                    Storage::disk('public')->delete($setting->value);
                }
                $value = $request->file($key)->store('settings', 'public');
                SiteSetting::setValue($key, $value, 'image');
                continue;
            }

            // Skip file fields if no new file was uploaded
            if ($key === 'site_logo' || str_contains($key, 'logo') || str_contains($key, 'image')) {
                continue;
            }

            SiteSetting::setValue($key, $value, 'text');
        }

        return redirect()->route('admin.settings.index')->with('success', 'Settings updated successfully.');
    }
}

