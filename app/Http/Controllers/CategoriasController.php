<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Categoria;
use App\Categorias_sitios;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //listado de categorias
        return response()->json(Categoria::getAll());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        abort(423,"Opcion no habilitada");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Registro de categorias
        try {
            $categoria = new Categoria();
            $categoria->nombre = $request->nombre;
            $categoria->descripcion = $request->descripcion;
            
            
            if($this->validate($request, $categoria->validacion)){
                return response()->json("Validación fallida",401);
            }
            if($categoria->save()){
                return response()->json($categoria);
            }else{
                return response()->json("No se pudo registrar",501);
            }
        } catch (Exception $ex) {
            //Probar esta excepcion
            return response()->json("Error interno",500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //obtener una categoria especifica
        if(!$id){
            return response()->json("No enviaste una ID",403);
        }
        $categoria = Categoria::find($id);
        $sitios_cat = Categorias_sitios::getSitiosDeCategoria($id);
        
        if(!is_object($categoria)){
            return response()->json("Categoria no existe",404);
        }
        $res = array("categoria" => $categoria , "sitios" => $sitios_cat);
        return response()->json($res);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        abort(423,"Opcion no habilitada");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        abort(423,"Opcion no habilitada");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        abort(423,"Opcion no habilitada");
    }
}
