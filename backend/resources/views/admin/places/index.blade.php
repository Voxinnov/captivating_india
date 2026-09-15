@extends('layouts.admin')

@section('title', 'Places')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Places</h2>
        <a href="{{ route('admin.places.create') }}" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-plus mr-2"></i> Add Place
        </a>
    </div>

    @if(session('success'))
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
            <p>{{ session('success') }}</p>
        </div>
    @endif

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 border-b">
                    <th class="p-4 font-semibold text-gray-700">Image</th>
                    <th class="p-4 font-semibold text-gray-700">Title</th>
                    <th class="p-4 font-semibold text-gray-700">Theme</th>
                    <th class="p-4 font-semibold text-gray-700">Status</th>
                    <th class="p-4 font-semibold text-gray-700">Order</th>
                    <th class="p-4 font-semibold text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($places as $place)
                    <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">
                            @if($place->image)
                                <img src="{{ $place->image_url }}" class="w-16 h-10 object-cover rounded">
                            @else
                                <span class="text-gray-400">No Image</span>
                            @endif
                        </td>
                        <td class="p-4 font-medium">{{ $place->title }}</td>
                        <td class="p-4">{{ $place->destination->title }}</td>
                        <td class="p-4">
                            @if($place->status)
                                <span class="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">Publish</span>
                            @else
                                <span class="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded">Draft</span>
                            @endif
                        </td>
                        <td class="p-4">{{ $place->order }}</td>
                        <td class="p-4">
                            <div class="flex gap-3">
                                <a href="{{ route('admin.places.edit', $place->id) }}" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></a>
                                <form action="{{ route('admin.places.destroy', $place->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="6" class="p-8 text-center text-gray-500">No places found.</td></tr>
                @endforelse
            </tbody>
        </table>
        
        <div class="p-4">
            {{ $places->links() }}
        </div>
    </div>
</div>
@endsection
