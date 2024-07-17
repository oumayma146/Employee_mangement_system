<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class RoleSeeder extends Seeder
{
    public function run()
    {
        // Create roles
        $admin = Role::create(['name' => 'admin']);
        $employee = Role::create(['name' => 'employee']);

        // Create permissions
        Permission::create(['name' => 'upload files']);
        Permission::create(['name' => 'delete files']);
        Permission::create(['name' => 'create folders']);
        Permission::create(['name' => 'delete folders']);
        Permission::create(['name' => 'view files']);
        Permission::create(['name' => 'view folders']);

        // Assign permissions to roles
        $admin->givePermissionTo(Permission::all());
        $employee->givePermissionTo(['upload files', 'create folders', 'view files', 'view folders']);
    }
}
