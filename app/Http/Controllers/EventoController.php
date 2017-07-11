<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class EventoController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        /*
         * Valida el token
         * lista todos los eventos
         */
        //return response()->json("Opción no habilitada", 423);
        if (!User::validarToken($request->token)) {
            return response()->json("Token no valido", 403);
        }
        return \App\Evento::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
        return response()->json("Opción no habilitada", 423);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //return response()->json($request);
        $evento = new \App\Evento();
        //validamos el token
        if (!User::validarToken($request->token)) {
            return response()->json("Token no valido", 403);
        }
        //validamos los datos que vienen
        //aun falta
        $this->validate($request, $evento->validacion);

        //
        //verificamos si existe la categoria con el sitio, si no la creamos
        if (!\App\Categorias_sitios::existeCategoria_sitio($request->categoria_id, $request->sitio_id)) {
            //creamos la categoria_sitio
            try {
                \App\Categorias_sitios::crear($request->categoria_id, $request->sitio_id);
            } catch (\Exception $ex) {
                //No se guardo la categoria_sitio, pero seguimos en la ejecucion
            }
        }
        //insertamos los datos

        $evento->nombre = $request->nombre;
        $evento->descripcion = $request->descripcion;
        $evento->cover = $request->cover;
        $evento->sitios_id = $request->sitio_id;
        $evento->categorias_id = $request->categoria_id;
        $evento->tipo = $request->tipo;
        $evento->fecha_hora_inicio = $request->fecha_hora_inicio;
        $evento->fecha_hora_final = $request->fecha_hora_final;
        try {
            if ($evento->save()) {
                return response()->json($evento);
            } else {
                return response()->json("No se guardo el evento", 504);
            }
        } catch (\Exception $ex) {
            return response()->json(":/ Error " . $ex->getMessage(), 502);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
        return response()->json("Opción no habilitada", 423);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
        return response()->json("Opción no habilitada", 423);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id) {
        //
        if (!User::validarToken($request->token)) {
            return response()->json("Token no valido", 403);
        }
        if(\App\Evento::destroy($id)){
            return response()->json("Eliminado correctamente");
        }else{
            return response()->json("el evento no existe",404);
        }
        
    }

}
