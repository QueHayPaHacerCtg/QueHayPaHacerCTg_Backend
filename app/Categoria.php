<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public $validacion = [
        "nombre" => array("required","max:190"),
        "descripcion" => "max:5000"
        
    ];
    
    public static function getAll(){
        return Categoria::select(
                "nombre",
                "descripcion",
                "id"
                )->get();
    }  
}
