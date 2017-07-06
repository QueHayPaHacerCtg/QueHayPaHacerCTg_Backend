<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReservaController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        //
        return response()->json('opción no autorizada', 423);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
        return response()->json('opción no autorizada', 423);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
        return response()->json('opción no autorizada', 423);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
        return response()->json('opción no autorizada', 423);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
        return response()->json('opción no autorizada', 423);
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
        return response()->json('opción no autorizada', 423);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
        return response()->json('opción no autorizada', 423);
    }

    public function reservar(Request $request) {
        //return response()->json($request);
        //return response()->json('opción no autorizada', 423);
        //Validamos el token
        try {
            if (!\App\User::validarToken($request->token)) {
                return response()->json('Token no valido', 403);
            }
            $reserva = new \App\Reserva();

            $usuario = \App\User::getByToken($request->token);

            $reserva->usuarios_id = $usuario->id;

            if ($request->fecha < date("Y-m-d")) {
                return response()->json("La fecha de la reserva ya paso", 420);
            }

            $reserva->fecha = $request->fecha;

            if ($request->cantidadPersonas == null || $request->cantidadPersonas == 0) {
                $reserva->cantidadPersonas = 1;
            } else {
                $reserva->cantidadPersonas = $request->cantidadPersonas;
            }

            $reserva->sitios_id = $request->sitio_id;

            if (!$reserva->save()) {
                throw new \Exception("No Guardo");
            }
            return response()->json(array("numeroDeReserva" => $reserva->id));
        } catch (\Exception $e) {
            return response()->json($e->getPrevious(), 501);
        }
    }

}
