@extends('layouts.admin')

@section('title', 'Contact Messages')

@section('content')
<div class="mb-6">
    <h2 class="text-2xl font-bold text-gray-800">Contact Messages</h2>
</div>

<div class="bg-white rounded-xl shadow-md overflow-hidden">
    <table class="w-full text-left border-collapse">
        <thead>
            <tr class="bg-gray-50 border-b">
                <th class="p-4 font-semibold text-gray-700">Name</th>
                <th class="p-4 font-semibold text-gray-700">Email</th>
                <th class="p-4 font-semibold text-gray-700">Subject</th>
                <th class="p-4 font-semibold text-gray-700">Date</th>
                <th class="p-4 font-semibold text-gray-700">Status</th>
                <th class="p-4 font-semibold text-gray-700">Actions</th>
            </tr>
        </thead>
        <tbody>
            @forelse($messages as $msg)
                <tr class="border-b hover:bg-gray-50 {{ !$msg->is_read ? 'bg-blue-50' : '' }}">
                    <td class="p-4 font-medium">{{ $msg->name }}</td>
                    <td class="p-4">{{ $msg->email }}</td>
                    <td class="p-4">{{ $msg->subject }}</td>
                    <td class="p-4 text-sm text-gray-500">{{ $msg->created_at->format('Y-m-d H:i') }}</td>
                    <td class="p-4">
                        @if(!$msg->is_read)
                            <span class="px-2 py-1 text-xs font-bold bg-blue-100 text-blue-700 rounded-full">New</span>
                        @else
                            <span class="text-xs text-gray-400">Read</span>
                        @endif
                    </td>
                    <td class="p-4">
                        <div class="flex gap-3">
                            <a href="{{ route('admin.contact-messages.show', $msg->id) }}" class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></a>
                            <form action="{{ route('admin.contact-messages.destroy', $msg->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                            </form>
                        </div>
                    </td>
                </tr>
            @empty
                <tr><td colspan="6" class="p-8 text-center text-gray-500">No messages found.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
