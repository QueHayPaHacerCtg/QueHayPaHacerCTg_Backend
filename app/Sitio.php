<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sitio extends Model {

    //
    public $validacion = [
        "nombre" => array("required","max:190"),
        "descripcion" => "max:5000",
        "latitud" => "max:190",
        "longitud" => "max:190"
    ];
    
    public static function getAll(){
        return Sitio::select(
                "nombre",
                "descripcion",
                "latitud",
                "longitud",
                "id"
                )->get();
    }   
}
