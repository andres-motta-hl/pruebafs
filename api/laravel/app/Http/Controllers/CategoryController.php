<?php

namespace App\Http\Controllers;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategoryName($id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['error' => 'Categoría no encontrada'], 404);
        }
        return response()->json(['name' => $category->name]);
    }
}
