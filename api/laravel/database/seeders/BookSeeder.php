<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('books')->insert([
            'title' => 'Hábitos Atómicos',
            'author' => 'James Clear',
            'genre' => 'Auto ayuda',
            'language' => 'Español', 
            'status' => 'Disponible',
            'copies_available' => 5,
            'rating' => 4.8,
        ]);
    }
}
