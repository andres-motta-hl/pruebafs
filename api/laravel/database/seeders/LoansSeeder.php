<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LoansSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('loans')->insert([
            'id' => 1,
            'user_id' => 1, // ID del usuario
            'book_id' => 3, // ID del libro 
            'loan_date' => now(),
            'status' => 'prestado', // Estado del préstamo
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('loans')->insert([
            'id' => 2,
            'user_id' => 2, 
            'book_id' => 6, 
            'loan_date' => now(),
            'status' => 'prestado', 
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('loans')->insert([
            'id' => 3,
            'user_id' => 3, 
            'book_id' => 7, 
            'loan_date' => now(),
            'status' => 'prestado',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('loans')->insert([
            'id' => 4,
            'user_id' => 4,
            'book_id' => 11, 
            'loan_date' => now(),
            'status' => 'prestado', 
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('loans')->insert([
            'id' => 5,
            'user_id' => 4, 
            'book_id' => 11, 
            'loan_date' =>  now(),
            'status' => 'devuelto', 
            'return_date' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
