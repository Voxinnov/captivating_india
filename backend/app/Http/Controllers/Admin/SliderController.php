<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::orderBy('order')->get();
        return view('admin.sliders.index', compact('sliders'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
            'mobile_image' => 'nullable|image|max:2048',
        ]);

        $path = $request->file('image')->store('sliders', 'public');
        $mobile_path = null;
        if ($request->hasFile('mobile_image')) {
            $mobile_path = $request->file('mobile_image')->store('sliders', 'public');
        }

        Slider::create([
            'title' => $request->title,
            'image' => $path,
            'mobile_image' => $mobile_path,
            'caption' => $request->caption,
            'order' => $request->order ?? 0,
        ]);

        return redirect()->back()->with('success', 'Slider image added successfully.');
    }

    public function update(Request $request, Slider $slider)
    {
        $request->validate([
            'image' => 'nullable|image|max:2048',
            'mobile_image' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('sliders', 'public');
            $slider->image = $path;
        }

        if ($request->hasFile('mobile_image')) {
            $mobile_path = $request->file('mobile_image')->store('sliders', 'public');
            $slider->mobile_image = $mobile_path;
        }

        $slider->title = $request->title;
        $slider->caption = $request->caption;
        $slider->order = $request->order ?? 0;
        $slider->save();

        return redirect()->back()->with('success', 'Slider updated successfully.');
    }

    public function destroy(Slider $slider)
    {
        $slider->delete();
        return redirect()->back()->with('success', 'Slider deleted successfully.');
    }
}
