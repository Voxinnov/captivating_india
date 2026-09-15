@extends('layouts.admin')

@section('title', 'Edit Activity')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Edit Activity: {{ $activity->title }}</h2>
        <a href="{{ route('admin.activities.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-arrow-left mr-2"></i> Back
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <form action="{{ route('admin.activities.update', $activity->id) }}" method="POST" enctype="multipart/form-data" class="p-6">
            @csrf
            @method('PUT')
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <!-- Title -->
                <div>
                    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title *</label>
                    <input type="text" name="title" id="title" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required value="{{ old('title', $activity->title) }}">
                    @error('title') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
                </div>

                <!-- Theme (Destination) -->
                <div>
                    <label for="destination_id" class="block text-gray-700 text-sm font-bold mb-2">Theme *</label>
                    <select name="destination_id" id="destination_id" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        <option value="">--Select Theme--</option>
                        @foreach($destinations as $destination)
                            <option value="{{ $destination->id }}" {{ old('destination_id', $activity->destination_id) == $destination->id ? 'selected' : '' }}>{{ $destination->title }}</option>
                        @endforeach
                    </select>
                    @error('destination_id') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
                </div>

                <!-- Place -->
                <div>
                    <label for="place_id" class="block text-gray-700 text-sm font-bold mb-2">Place *</label>
                    <select name="place_id" id="place_id" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                        <option value="">--Select Place--</option>
                        @foreach($places as $place)
                            <option value="{{ $place->id }}" {{ old('place_id', $activity->place_id) == $place->id ? 'selected' : '' }}>{{ $place->title }}</option>
                        @endforeach
                    </select>
                    @error('place_id') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
                </div>
            </div>

            <!-- Short Description -->
            <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Short Description *</label>
                <textarea name="description" id="description" rows="4" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>{{ old('description', $activity->description) }}</textarea>
                @error('description') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Long Description -->
            <div class="mb-6">
                <label for="long_description" class="block text-gray-700 text-sm font-bold mb-2">Long Description</label>
                <textarea name="long_description" id="long_description" class="summernote">{{ old('long_description', $activity->long_description) }}</textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <!-- Image -->
                <div>
                    <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Featured Image</label>
                    @if($activity->image)
                        <div class="mb-2">
                            <img src="{{ $activity->image_url }}" alt="Current Image" class="h-20 w-auto rounded border">
                        </div>
                    @endif
                    <input type="file" name="image" id="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                    <p class="text-xs text-gray-500 mt-1 pl-1">Browse... {{ $activity->image ? 'Change file' : 'No files selected' }}.</p>
                    @error('image') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
                </div>

                <!-- Order -->
                <div>
                    <label for="order" class="block text-gray-700 text-sm font-bold mb-2">Order</label>
                    <input type="number" name="order" id="order" value="{{ old('order', $activity->order) }}" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end mt-8 border-t pt-6">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition duration-200">
                    Update
                </button>
            </div>
        </form>
    </div>
</div>

<script>
    $(document).ready(function() {
        $('.summernote').summernote({
            height: 300,
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ]
        });
    });
</script>
@endsection
