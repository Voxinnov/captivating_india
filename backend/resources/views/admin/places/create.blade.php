@extends('layouts.admin')

@section('title', 'Add Place')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Place</h2>
        <a href="{{ route('admin.places.index') }}" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-arrow-left mr-2"></i> Back
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div class="p-6 border-b border-gray-200 bg-gray-50">
            <h3 class="text-lg font-semibold text-gray-700">Add New Place</h3>
        </div>
        
        <form action="{{ route('admin.places.store') }}" method="POST" enctype="multipart/form-data" class="p-6">
            @csrf

            <!-- Place (Title) -->
            <div class="mb-6">
                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Place</label>
                <input type="text" name="title" id="title" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Place Name" required value="{{ old('title') }}">
                @error('title') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Type (Destination) -->
            <div class="mb-6 w-1/4">
                <label for="destination_id" class="block text-gray-700 text-sm font-bold mb-2">Type</label>
                <select name="destination_id" id="destination_id" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">--Select--</option>
                    @foreach($destinations as $destination)
                        <option value="{{ $destination->id }}" {{ old('destination_id') == $destination->id ? 'selected' : '' }}>{{ $destination->title }}</option>
                    @endforeach
                </select>
                @error('destination_id') <p class="text-red-500 text-xs mt-1">{{ $message }}</p> @enderror
            </div>

            <!-- Description -->
            <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea name="description" id="description" class="summernote">{{ old('description') }}</textarea>
            </div>

            <!-- Map -->
            <div class="mb-6">
                <label for="map" class="block text-gray-700 text-sm font-bold mb-2">Map</label>
                <input type="text" name="map" id="map" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value="{{ old('map') }}">
            </div>

            <!-- Images -->
            <div class="mb-6">
                <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image</label>
                <div class="border border-gray-300 rounded-md p-2 bg-gray-50">
                    <input type="file" name="image" id="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                </div>
            </div>

            <div class="mb-6">
                <label for="images" class="block text-gray-700 text-sm font-bold mb-2">Gallery Images</label>
                <div class="border border-gray-300 rounded-md p-2 bg-gray-50">
                    <input type="file" name="images[]" id="images" multiple class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition">
                </div>
            </div>

            <!-- Status & Buttons -->
            <div class="flex items-center justify-between mt-8 border-t pt-6">
                <div class="w-1/4">
                    <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status</label>
                    <select name="status" id="status" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="1" selected>Publish</option>
                        <option value="0">Draft</option>
                    </select>
                </div>
                
                <div>
                    <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition duration-200 w-full md:w-auto">
                        Submit
                    </button>
                </div>
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
