<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        Log::info('Registration data: ', $request->all());
        $request->authenticate();

       // $request->session()->regenerate();

       
        $user = Auth::user();
        
     
        $token = $user->createToken('auth_token')->plainTextToken;

       
        return response()->json([
            'user' => $user,
            'roles' => $user->getRoleNames(), 
          'permissions' => $user->getAllPermissions()->pluck('name'),
            'token' => $token,
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
