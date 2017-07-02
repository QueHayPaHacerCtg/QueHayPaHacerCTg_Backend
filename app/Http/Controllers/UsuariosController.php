<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        //optener los usuarios
        /*
          if (!User::validarToken($request->token)) {
          //no tiene un token valido lo mandamos a la mierda
          return response()->json("Token no valido, vuelve a iniciar sesion para obtener uno nuevo", 403);
          }
         */
        Log:info("Piden todos los usuarios");
        return response()->json(User::getAll());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //deshabilitado
        return response()->json('opción no autorizada', 423);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //Creacion del usuario

        $usuario = new User();
        $usuario->user = $request->user;
        $usuario->pass = Hash::make($request->pass);
        $usuario->longitud = $request->longitud;
        $usuario->latitud = $request->latitud;
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellido;
        $usuario->cedula = $request->cedula;
        $usuario->fecha_nacimiento = $request->fecha_nacimiento;
        $usuario->sexo = $request->sexo;
        $usuario->telefono = $request->telefono;
        $usuario->movil = $request->movil;
        $usuario->email = $request->email;
        $usuario->tipoAutenticacion = $request->tipoAutenticacion;
        $usuario->userID = $request->userID;
        $usuario->foto = $request->foto;
        //lo creamos
        if ($usuario->save()) {
            return response()->json($usuario);
        } else {
            return response()->json("No se creo el usuario correctamente", 502);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id) {
        //
        //return response()->json($request);
        if (!User::validarToken($request->token)) {
            //no tiene un token valido lo mandamos a la mierda
            return response()->json("Token no valido, vuelve a iniciar sesion para obtener uno nuevo", 403);
        }
        $usuario = User::find($id);
        if (!is_object($usuario)) {
            return response()->json("Usuario no encontrado", 404);
        }
        return response()->json($usuario);
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
        $usuario = User::find($id);
        if (!is_object($usuario)) {
            return response()->json("Usuario no encontrado", 404);
        }
        if (!User::validarToken($request->token)) {
            //no tiene un token valido lo mandamos a la mierda
            return response()->json("Token no valido, vuelve a iniciar sesion para obtener uno nuevo", 403);
        }
        if ($usuario->actualizar($request)) {
            return response()->json($usuario);
        } else {
            return response()->json("Usuario no actualizado, verifique los datos", 501);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id) {
        //
        if (!User::validarToken($request->token)) {
            //no tiene un token valido lo mandamos a la mierda
            return response()->json("Token no valido, vuelve a iniciar sesion para obtener uno nuevo", 403);
        }
        $user = User::find($id);
        if (!is_object($user)) {
            return response()->json("Usuario no encontrado", 404);
        }
        if (User::destroy($id)) {
            return response()->json("Usuario Eliminado con exito");
        } else {
            return response()->json("Error al eliminar el usuario, verifique la id", 501);
        }
    }

    public function login(Request $request) {
        
        switch ($request->tipoAutenticacion){
            case "FB":
                $respuesta = User::autenticarFB($request->userID);
                break;
            default :
                $respuesta = User::autenticar($request->user, $request->pass);
                break;
        }
        
        if ($respuesta) {
            //Login correcto
            return response()->json($respuesta);
        } else {
            //error de autenticar
            return response()->json("Error de autenticacion", 403);
        }
    }

}
