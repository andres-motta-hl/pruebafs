<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            'name' => 'Ficción'
        ]);
        DB::table('categories')->insert([
            'name' => 'Psicología'
        ]);
        DB::table('categories')->insert([
            'name' => 'Novelas'
        ]);
        DB::table('categories')->insert([
            'name' => 'Infantiles'
        ]);
        DB::table('categories')->insert([
            'name' => 'Literatura'
        ]);
        DB::table('categories')->insert([
            'name' => 'Educación'
        ]);
        DB::table('categories')->insert([
            'name' => 'Auto ayuda'
        ]);
        DB::table('categories')->insert([
            'name' => 'Geografía'
        ]);
        DB::table('categories')->insert([
            'name' => 'Ciencia'
        ]);
    }
}
