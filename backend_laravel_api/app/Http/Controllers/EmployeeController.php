<?php

// app/Http/Controllers/EmployeeController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = User::role('employee')->get();
        return response()->json($employees);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required'
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        $user->assignRole($validated['role']);
        DB::table('user_has_roles')->insert([
            'user_id' => $user->id,
            'role_id' => $roleId,
        ]);
        return response()->json($user);
    }

    public function show(User $employee)
    {
        return response()->json($employee);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|email|max:255',
            
        ]);
    
        $user = User::findOrFail($id);
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->roles()->sync([$validated['role']]); 
    
        $user->save();
    
        return response()->json($user);
    }

    public function destroy(User $employee)
    {
        $employee->delete();
        return response()->json(['message' => 'Employee deleted successfully.']);
    }
}
