@extends('layouts.admin')

@section('title', 'Edit Page')

@section('content')
<div>
    <h1 class="text-3xl font-bold mb-8">Edit Page</h1>

    <form action="{{ route('admin.pages.update', $page) }}" method="POST" class="bg-white p-6 rounded-lg shadow">
        @csrf
        @method('PUT')

        <div class="mb-4">
            <label for="title" class="block text-gray-700 font-bold mb-2">Title *</label>
            <input type="text" id="title" name="title" value="{{ old('title', $page->title) }}" required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mb-4">
            <label for="slug" class="block text-gray-700 font-bold mb-2">Slug *</label>
            <input type="text" id="slug" name="slug" value="{{ old('slug', $page->slug) }}" required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mb-4">
            <label for="content" class="block text-gray-700 font-bold mb-2">Content</label>
            <textarea id="content" name="content" rows="10"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">{{ old('content', $page->content) }}</textarea>
        </div>

        <div class="mb-4">
            <label for="meta_title" class="block text-gray-700 font-bold mb-2">Meta Title</label>
            <input type="text" id="meta_title" name="meta_title" value="{{ old('meta_title', $page->meta_title) }}"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mb-4">
            <label for="meta_description" class="block text-gray-700 font-bold mb-2">Meta Description</label>
            <textarea id="meta_description" name="meta_description" rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">{{ old('meta_description', $page->meta_description) }}</textarea>
        </div>

        <div class="mb-4">
            <label class="flex items-center">
                <input type="checkbox" name="is_published" value="1" {{ old('is_published', $page->is_published) ? 'checked' : '' }} class="mr-2">
                <span class="text-gray-700">Published</span>
            </label>
        </div>

        <div class="mb-4">
            <label for="order" class="block text-gray-700 font-bold mb-2">Order</label>
            <input type="number" id="order" name="order" value="{{ old('order', $page->order) }}"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="flex gap-4">
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Update Page</button>
            <a href="{{ route('admin.pages.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded">Cancel</a>
        </div>
    </form>
</div>
@endsection

