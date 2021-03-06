<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sitio;
use App\Categorias_sitios;


class SitioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //listado de sitios
        return response()->json(Sitio::getAll());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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

        
        //Registro de sitios
        try {
            $sitio = new Sitio();
            $sitio->nombre = $request->nombre;
            $sitio->descripcion = $request->descripcion;
            $sitio->latitud = $request->latitud;
            $sitio->longitud = $request->longitud;

            


            
            if($this->validate($request, $sitio->validacion)){
                return response()->json("Validación fallida",401);
            }
            if($sitio->save()){

                

                if(Categorias_sitios::crear($request->id_categoria, $sitio->id)){
                    return response()->json($sitio);
                }else{
                    $sitio->delete();
                    return response()->json("No se pudo registrar",501);
                }
                
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
    public function show($id = FALSE)
    {
        //obtener un sitio en especifico
        if(!$id){
            return response()->json("No enviaste una ID",403);
        }
        $sitio = Sitio::find($id);
        if(!is_object($sitio)){
            return response()->json("Sitio no existe",404);
        }
        return response()->json($sitio);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
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
        //
        abort(423,"Opcion no habilitada");
    }
}
