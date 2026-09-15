@extends('layouts.admin')

@section('title', 'View Message')

@section('content')
<div class="mb-6">
    <a href="{{ route('admin.contact-messages.index') }}" class="text-blue-600 hover:underline"><i class="fas fa-arrow-left mr-2"></i> Back to Messages</a>
</div>

<div class="bg-white rounded-xl shadow-md p-8 max-w-4xl">
    <div class="border-b pb-4 mb-4">
        <h2 class="text-2xl font-bold text-gray-800">{{ $contactMessage->subject }}</h2>
        <p class="text-gray-500">From: {{ $contactMessage->name }} ({{ $contactMessage->email }}) on {{ $contactMessage->created_at->format('M d, Y H:i') }}</p>
    </div>
    
    <div class="prose max-w-none text-gray-700">
        <p class="whitespace-pre-wrap">{{ $contactMessage->message }}</p>
    </div>

    @if($contactMessage->phone)
        <div class="mt-8 pt-4 border-t text-sm text-gray-500">
            Phone: {{ $contactMessage->phone }}
        </div>
    @endif
</div>
@endsection
