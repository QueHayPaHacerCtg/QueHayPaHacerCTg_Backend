<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorias_sitios extends Model
{
    //
    protected $table="categorias_sitios";

    public static function existeCategoria_sitio($categoria, $sitio) {
        $categoria_ = Categorias_sitios::where("categorias_id",$categoria)
                ->where("sitios_id",$sitio)->first();
        if(is_object($categoria_)){
            return TRUE;
        }else{
            return FALSE;
        }
    }

    public static function crear($categoria_id, $sitio_id) {
        $categoria_sitio = new Categorias_sitios();
        $categoria_sitio->categorias_id = $categoria_id;
        $categoria_sitio->sitios_id = $sitio_id;
        if($categoria_sitio->save()){
            return TRUE;
        }else{
            throw new \Exception("No se guardo la categoria_sitio");
        }
    }

    public static function getSitiosDeCategoria($idcategoria){
        return Categorias_sitios::where(["categorias_id"=>$idcategoria])
                        ->join("sitios", "sitios.id", "=", "categorias_sitios.categorias_id")
                        ->select("sitios.*")
                        ->get();
    }  

}
