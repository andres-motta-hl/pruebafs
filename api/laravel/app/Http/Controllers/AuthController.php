<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
use \stdClass;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'client',
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'data' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function login(Request $request){
        if (!Auth::attempt($request->only('email', 'password'))) {
            // Verifica si el correo electrónico es incorrecto
            $userWithEmail = User::where('email', $request['email'])->first();
            if (!$userWithEmail) {
                return response()->json([
                    'message' => 'Correo electrónico incorrecto. Verifica tu dirección de correo.',
                    'dataError' => 'email'
                ], 401);
            }
    
            // Verifica si la contraseña es incorrecta
            if (!Hash::check($request['password'], $userWithEmail->password)) {
                return response()->json([
                    'message' => 'Contraseña incorrecta. Verifica tu contraseña.',
                    'dataError' => 'password'
                ], 401);
            }
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'data' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
    public function logout(){
        auth()->user()->tokens()->delete();

        return [
            'message' => 'You have successfuly logged out and the token was successfully delete'
        ];
    }

    public function userdata(Request $request)
    {
        // Obtén el usuario autenticado
        $user = $request->user();

        // Realiza las operaciones necesarias con los datos del usuario
        // Por ejemplo, puedes devolver los datos del usuario como una respuesta JSON
        return response()->json(['data' => $user]);
    }

}
