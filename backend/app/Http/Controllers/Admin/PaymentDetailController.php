<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PaymentDetail;
use Illuminate\Http\Request;

class PaymentDetailController extends Controller
{
    public function index()
    {
        $payments = PaymentDetail::orderBy('date', 'desc')->paginate(20);
        return view('admin.payment-details.index', compact('payments'));
    }

    public function create()
    {
        return view('admin.payment-details.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'date' => 'required|date',
            'name' => 'required|string',
            'transaction_no' => 'required|string|unique:payment_details',
            'amount' => 'required|numeric',
        ]);

        PaymentDetail::create($request->all());

        return redirect()->route('admin.payment-details.index')->with('success', 'Payment recorded successfully.');
    }
}
