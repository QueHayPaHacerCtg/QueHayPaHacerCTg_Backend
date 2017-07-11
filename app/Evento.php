<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model {

    //
    public $validacion = array(
        'nombre' => 'required|max:190',
        'descripcion' => 'max:5000',
        'cover' => 'max:190',
        'sitio_id' => 'required',
        'categoria_id' => 'required',
        'tipo' => 'max:190',
        "fecha_hora_inicio" => "date_format:Y-m-d H:i:s|required",
        "fecha_hora_final" => "date_format:Y-m-d H:i:s|required"
    );

}
