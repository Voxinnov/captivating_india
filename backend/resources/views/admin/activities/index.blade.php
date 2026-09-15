@extends('layouts.admin')

@section('title', 'Activities')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Activities</h1>
        <a href="{{ route('admin.activities.create') }}" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-plus mr-2"></i> Add New
        </a>
    </div>

    @if(session('success'))
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
            <p>{{ session('success') }}</p>
        </div>
    @endif

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 text-left">
            <thead class="bg-gray-50 border-b">
                <tr>
                    <th class="px-6 py-4 font-semibold text-gray-700">Image</th>
                    <th class="px-6 py-4 font-semibold text-gray-700">Title</th>
                    <th class="px-6 py-4 font-semibold text-gray-700">Theme</th>
                    <th class="px-6 py-4 font-semibold text-gray-700">Place</th>
                    <th class="px-6 py-4 font-semibold text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                @forelse($activities as $activity)
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            @if($activity->image)
                                <img src="{{ $activity->image_url }}" class="w-16 h-10 object-cover rounded">
                            @else
                                <span class="text-gray-400">No Image</span>
                            @endif
                        </td>
                        <td class="px-6 py-4 font-medium">{{ $activity->title }}</td>
                        <td class="px-6 py-4 text-sm text-gray-600">{{ $activity->destination ? $activity->destination->title : 'N/A' }}</td>
                        <td class="px-6 py-4">{{ $activity->place ? $activity->place->title : 'N/A' }}</td>
                        <td class="px-6 py-4">
                            <div class="flex gap-3">
                                <a href="{{ route('admin.activities.edit', $activity->id) }}" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></a>
                                <form action="{{ route('admin.activities.destroy', $activity->id) }}" method="POST" class="inline" onsubmit="return confirm('Are you sure?')">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="5" class="px-6 py-8 text-center text-gray-500">No activities found</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4">{{ $activities->links() }}</div>
</div>
@endsection

