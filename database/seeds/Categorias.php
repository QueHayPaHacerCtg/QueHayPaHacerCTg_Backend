<?php

use Illuminate\Database\Seeder;

class Categorias extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $categoria = new App\Categoria();
        $categoria->id = 1;
        $categoria->nombre = "Vida Nocturna";
        $categoria->descripcion = "";
        $categoria->save();
        
        $categoria = new App\Categoria();
        $categoria->id = 2;
        $categoria->nombre = "Restaurantes";
        $categoria->descripcion = "";
        $categoria->save();
        
        $categoria = new App\Categoria();
        $categoria->id = 3;
        $categoria->nombre = "Shopping";
        $categoria->descripcion = "";
        $categoria->save();
        
        $categoria = new App\Categoria();
        $categoria->id = 4;
        $categoria->nombre = "Planes Culturales";
        $categoria->descripcion = "";
        $categoria->save();
        
        $categoria = new App\Categoria();
        $categoria->id = 5;
        $categoria->nombre = "Populares";
        $categoria->descripcion = "";
        $categoria->save();
    }
}
