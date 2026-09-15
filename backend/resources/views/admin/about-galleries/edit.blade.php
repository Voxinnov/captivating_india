@extends('layouts.admin')

@section('title', 'Edit - ' . $title)

@section('content')
<div class="max-w-2xl">
    <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Edit</h2>
    </div>

    <div class="bg-white rounded shadow-sm border overflow-hidden">
        <div class="p-4 bg-gray-50 border-b">
            <h3 class="font-semibold text-gray-700">Edit Records</h3>
        </div>
        <div class="p-6">
            <form action="{{ route('admin.about-galleries.update', $gallery->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input type="text" name="title" value="{{ old('title', $gallery->title) }}" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Title">
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Photo</label>
                    @if($gallery->image_path)
                        <div class="mb-2">
                            <img src="{{ asset('storage/' . $gallery->image_path) }}" class="w-32 h-20 object-cover rounded shadow-sm border">
                        </div>
                    @endif
                    <div class="flex items-center gap-2">
                        <input type="file" name="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300">
                    </div>
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Status</label>
                    <div class="w-32">
                        <select name="status" class="w-full border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                            <option value="publish" {{ $gallery->status == 'publish' ? 'selected' : '' }}>Publish</option>
                            <option value="draft" {{ $gallery->status == 'draft' ? 'selected' : '' }}>Draft</option>
                        </select>
                    </div>
                </div>
                
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Order No</label>
                    <input type="number" name="order_no" value="{{ old('order_no', $gallery->order_no) }}" class="w-32 border rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                </div>

                <div class="flex">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-12 rounded shadow-sm transition duration-200">
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
