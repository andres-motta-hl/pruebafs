<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'id' => 1,
            'name' => 'Juan Manuel',
            'email' => 'juan@gmail.com',
            'password' => Hash::make('Prueba123'),
            'role' => 'admin',
        ]);
        User::create([
            'id' => 2,
            'name' => 'Maria Fernanda',
            'email' => 'maria@gmail.com',
            'password' => Hash::make('Prueba123'),
            'role' => 'admin',
        ]);
        User::create([
            'id' => 3,
            'name' => 'Carlos Arturo',
            'email' => 'carlos@gmail.com',
            'password' => Hash::make('Prueba123'),
            'role' => 'client',
        ]);
        User::create([
            'id' => 4,
            'name' => 'Milton Felipe',
            'email' => 'milton@gmail.com',
            'password' => Hash::make('Prueba123'),
            'role' => 'client',
        ]);
        User::create([
            'id' => 5,
            'name' => 'Jenifer Fernanda',
            'email' => 'jenifer@gmail.com',
            'password' => Hash::make('Prueba123'),
            'role' => 'client',
        ]);
    }
}
