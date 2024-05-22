<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['title','author','rating','stock','description'];

    // Un libro puede tener muchos préstamos
    public function loans()
    {
        return $this->hasMany(Loan::class);
    }
}