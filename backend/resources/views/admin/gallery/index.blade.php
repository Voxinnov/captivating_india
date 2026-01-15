@extends('layouts.admin')

@section('title', 'Gallery')

@section('content')
<div>
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Gallery Categories</h1>
        <a href="{{ route('admin.gallery.create') }}" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <i class="fas fa-plus mr-2"></i>Add New
        </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @forelse($categories as $category)
            <div class="bg-white rounded-lg shadow overflow-hidden">
                @if($category->cover_image)
                    <img src="{{ asset('storage/' . $category->cover_image) }}" alt="{{ $category->title }}" class="w-full h-48 object-cover">
                @endif
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">{{ $category->title }}</h3>
                    <p class="text-sm text-gray-500 mb-4">{{ $category->images->count() }} images</p>
                    <div class="flex gap-2">
                        <a href="{{ route('admin.gallery.edit', $category) }}" class="text-blue-600 hover:text-blue-900 text-sm">Edit</a>
                        <form action="{{ route('admin.gallery.destroy', $category) }}" method="POST" class="inline" onsubmit="return confirm('Are you sure?')">
                            @csrf @method('DELETE')
                            <button type="submit" class="text-red-600 hover:text-red-900 text-sm">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        @empty
            <div class="col-span-full text-center text-gray-500 py-8">No gallery categories found</div>
        @endforelse
    </div>
    <div class="mt-4">{{ $categories->links() }}</div>
</div>
@endsection

