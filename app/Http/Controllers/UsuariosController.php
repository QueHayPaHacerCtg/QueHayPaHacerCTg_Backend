<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //optener los usuarios
        if(!User::validarToken($request->token)){
            //no tiene un token valido lo mandamos a la mierda
            return response()->json("Token no valido, vuelve a iniciar sesion para obtener uno nuevo",403);
        }
        return response()->json(User::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //deshabilitado
        return response()->json('opción no autorizada', 423);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Creacion del usuario
        $usuario = User::crearUsuario($request);
        if($usuario){
            return response()->json($usuario);
        }else{
            return response()->json("Usuario no creado, verifique los datos",500);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        //
        if(!User::validarToken($request->token)){
            //no tiene un token valido lo mandamos a la mierda
            return response()->json("Token no valido, vuelve a iniciar sesion para obtener uno nuevo",403);
        }
        return response()->json(User::find($id));
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
        return response()->json('opción no autorizada', 423);
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
        $usuario = User::find($id);   
        if($usuario->actualizar($request)){
            return response()->json($usuario);
        }else{
            return response()->json("Usuario no actualizado, verifique los datos",500);
        }
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
        if(User::destroy($id)){
            return response()->json("Usuario Eliminado con exito");
        }else{
            return response()->json("Error al eliminar el usuario, verifique la id",500);
        }
    }
    
    public function login(Request $request) {
        $respuesta = User::autenticar($request->user,$request->pass);
        if($respuesta){
            //Login correcto
            return response()->json($respuesta);
        }else{
            //error de autenticar
            return response()->json("Error de autenticacion",403);
        }
    }
}
