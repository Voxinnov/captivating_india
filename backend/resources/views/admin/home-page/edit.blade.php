@extends('layouts.admin')

@section('title', 'Edit Home Page')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Edit Home Page</h1>

    <form action="{{ route('admin.home-page.update') }}" method="POST" enctype="multipart/form-data" class="bg-white p-6 rounded-lg shadow">
        @csrf
        @method('PUT')

        <h2 class="text-xl font-bold mb-4">Hero Section</h2>
        <div class="mb-4">
            <label for="hero_title" class="block text-gray-700 font-bold mb-2">Hero Title</label>
            <input type="text" id="hero_title" name="hero_title" value="{{ old('hero_title', $homePage->hero_title) }}"
                class="w-full px-3 py-2 border border-gray-300 rounded-md">
        </div>

        <div class="mb-4">
            <label for="hero_subtitle" class="block text-gray-700 font-bold mb-2">Hero Subtitle</label>
            <textarea id="hero_subtitle" name="hero_subtitle" rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md">{{ old('hero_subtitle', $homePage->hero_subtitle) }}</textarea>
        </div>

        <div class="mb-4">
            <label for="hero_image" class="block text-gray-700 font-bold mb-2">Hero Image</label>
            @if($homePage->hero_image)
                <img src="{{ asset('storage/' . $homePage->hero_image) }}" alt="Hero" class="mb-2 h-32">
            @endif
            <input type="file" id="hero_image" name="hero_image" accept="image/*"
                class="w-full px-3 py-2 border border-gray-300 rounded-md">
        </div>

        <h2 class="text-xl font-bold mb-4 mt-8">About Section</h2>
        <div class="mb-4">
            <label for="about_section_content" class="block text-gray-700 font-bold mb-2">About Content</label>
            <textarea id="about_section_content" name="about_section_content" rows="5"
                class="w-full px-3 py-2 border border-gray-300 rounded-md">{{ old('about_section_content', $homePage->about_section_content) }}</textarea>
        </div>

        <div class="mb-4">
            <label for="about_section_image" class="block text-gray-700 font-bold mb-2">About Image</label>
            @if($homePage->about_section_image)
                <img src="{{ asset('storage/' . $homePage->about_section_image) }}" alt="About" class="mb-2 h-32">
            @endif
            <input type="file" id="about_section_image" name="about_section_image" accept="image/*"
                class="w-full px-3 py-2 border border-gray-300 rounded-md">
        </div>

        <div class="mb-4">
            <label class="flex items-center">
                <input type="checkbox" name="is_active" value="1" {{ old('is_active', $homePage->is_active) ? 'checked' : '' }} class="mr-2">
                <span class="text-gray-700">Active</span>
            </label>
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Update Home Page</button>
    </form>
</div>

<script>
    $(document).ready(function() {
        $('#about_section_content').summernote({
            placeholder: 'Type here...',
            tabsize: 2,
            height: 300,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ]
        });
    });
</script>
@endsection

