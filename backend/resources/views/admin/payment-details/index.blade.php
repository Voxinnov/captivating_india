@extends('layouts.admin')

@section('title', 'Payment Details')

@section('content')
<div x-data="{ showModal: {{ $errors->any() ? 'true' : 'false' }} }">
    <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Payment Details</h2>
        <button @click="showModal = true" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            <i class="fas fa-plus mr-2"></i> Add Record
        </button>
    </div>

    <!-- Modal Backdrop -->
    <div x-show="showModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="showModal = false"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showModal" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold text-gray-900" id="modal-title">New Payment Record</h3>
                        <button @click="showModal = false" class="text-gray-400 hover:text-gray-500">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <form action="{{ route('admin.payment-details.store') }}" method="POST">
                        @csrf
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2">Date</label>
                                <input type="date" name="date" class="w-full border rounded p-2 text-sm" required value="{{ old('date', date('Y-m-d')) }}">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input type="text" name="name" class="w-full border rounded p-2 text-sm" placeholder="Customer Name" required value="{{ old('name') }}">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2">Transaction No</label>
                                <input type="text" name="transaction_no" class="w-full border rounded p-2 text-sm" placeholder="ORDER123..." required value="{{ old('transaction_no') }}">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-bold mb-2">Amount</label>
                                <input type="number" step="0.01" name="amount" class="w-full border rounded p-2 text-sm" placeholder="0.00" required value="{{ old('amount') }}">
                            </div>
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea name="description" class="w-full border rounded p-2 text-sm h-24" placeholder="Trip details...">{{ old('description') }}</textarea>
                        </div>

                        <div class="flex justify-end gap-3 mt-6">
                            <button type="button" @click="showModal = false" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded transition">
                                Cancel
                            </button>
                            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow transition">
                                Save Record
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

<div class="bg-white rounded-xl shadow-md overflow-hidden">
    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                    <th class="p-4 font-semibold text-gray-700">#</th>
                    <th class="p-4 font-semibold text-gray-700">Date</th>
                    <th class="p-4 font-semibold text-gray-700">Name</th>
                    <th class="p-4 font-semibold text-gray-700">Transc No</th>
                    <th class="p-4 font-semibold text-gray-700">Amount</th>
                    <th class="p-4 font-semibold text-gray-700">Description</th>
                    <th class="p-4 font-semibold text-gray-700">Actions</th>
                </tr>
            </thead>
            <tbody>
                @forelse($payments as $payment)
                    <tr class="border-b border-gray-100 hover:bg-gray-50 transition duration-150">
                        <td class="p-4 text-gray-600">{{ $loop->iteration }}</td>
                        <td class="p-4 text-gray-600">{{ $payment->date }}</td>
                        <td class="p-4 text-gray-800 font-medium">{{ $payment->name }}</td>
                        <td class="p-4 text-gray-600">{{ $payment->transaction_no }}</td>
                        <td class="p-4 text-gray-600">₹{{ number_format($payment->amount, 2) }}</td>
                        <td class="p-4 text-gray-600">{{ $payment->description }}</td>
                        <td class="p-4">
                            <form action="{{ route('admin.payment-details.destroy', $payment->id) }}" method="POST" onsubmit="return confirm('Are you sure?')">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-800">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="7" class="p-8 text-center text-gray-500 italic">No payment records found.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="p-4 border-t border-gray-100">
        {{ $payments->links() }}
    </div>
</div>
</div>
@endsection
