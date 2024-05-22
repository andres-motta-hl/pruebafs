<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Loan;
use App\Models\User;

class LoanController extends Controller
{
    // Obtener todos los préstamos de un usuario con un ID específico
    public function userLoans($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        // Obtener los préstamos del usuario
        $loans = $user->loans; // o Loan::where('user_id', $userId)->get();

        return response()->json($loans);
    }
    public function addLoan(Request $request){
        $loan = new Loan();
        $loan->user_id = $request->user_id;
        $loan->book_id = $request->book_id;
        $loan->loan_date = $request->loan_date;
        $loan->status = $request->status;
        
        $loan-> save();
    }

    public function updateLoan(Request $request, $book_id, $user_id)
    {
        $loan = Loan::where('book_id', $book_id)->where('user_id', $user_id)->firstOrFail();

        // Actualiza los campos del préstamo
        $loan->fill($request->only(['loan_date','return_date', 'status']));
        $loan->save();

        return response()->json($loan);
    }
}
