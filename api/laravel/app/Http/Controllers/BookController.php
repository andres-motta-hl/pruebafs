<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $book = Book::all();
        return $book;
    }

    public function show(Book $book)
    {
        return response()->json($book);
    }

    public function update(Request $request, Book $book)
    {
        $book->fill($request->only(['title','author','rating','stock','description']));
        $book->save();

        return response()->json($book);
    }

    public function getCategoryName($id)
    {
        $category = Category::find($id);
        return response()->json(['name' => $category->name]);
    }

}
