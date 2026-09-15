@extends('layouts.admin')

@section('title', 'Site Settings')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Site Settings</h1>

    <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow">
        @csrf
        @method('PUT')

        <h2 class="text-xl font-bold mb-4">General</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Site Name</label>
            <input type="text" name="site_name" value="{{ $settings->firstWhere('key', 'site_name')?->value }}" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Site Logo</label>
            @if($settings->firstWhere('key', 'site_logo')?->value)
                <img src="{{ asset('storage/' . $settings->firstWhere('key', 'site_logo')->value) }}" class="mb-2 h-20">
            @endif
            <input type="file" name="site_logo" accept="image/*" class="w-full px-3 py-2 border rounded">
        </div>

        <h2 class="text-xl font-bold mb-4 mt-8">Contact Information</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Email</label>
            <input type="email" name="contact_email" value="{{ $settings->firstWhere('key', 'contact_email')?->value }}" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Phone</label>
            <input type="text" name="contact_phone" value="{{ $settings->firstWhere('key', 'contact_phone')?->value }}" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Address</label>
            <textarea name="contact_address" rows="3" class="w-full px-3 py-2 border rounded">{{ $settings->firstWhere('key', 'contact_address')?->value }}</textarea>
        </div>

        <h2 class="text-xl font-bold mb-4 mt-8">Social Media</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Facebook URL</label>
            <input type="text" name="facebook_url" value="{{ $settings->firstWhere('key', 'facebook_url')?->value }}" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">Instagram URL</label>
            <input type="text" name="instagram_url" value="{{ $settings->firstWhere('key', 'instagram_url')?->value }}" class="w-full px-3 py-2 border rounded">
        </div>

        <div class="mb-4">
            <label class="block font-bold mb-2">YouTube URL</label>
            <input type="text" name="youtube_url" value="{{ $settings->firstWhere('key', 'youtube_url')?->value }}" class="w-full px-3 py-2 border rounded">
        </div>

        <h2 class="text-xl font-bold mb-4 mt-8">Footer</h2>
        <div class="mb-4">
            <label class="block font-bold mb-2">Footer Text</label>
            <textarea name="footer_text" rows="2" class="w-full px-3 py-2 border rounded">{{ $settings->firstWhere('key', 'footer_text')?->value }}</textarea>
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Update Settings</button>
    </form>
</div>
@endsection

