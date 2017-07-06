<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class User extends Model {

    protected $table = "usuarios";
    //datos ocultos
    protected $hidden = ['pass', "longitud", "latitud", "userID", "user"];

    public static function getAll() {
        return User::select(
                                "nombre", "apellido", "cedula", "fecha_nacimiento", "sexo", "telefono", "movil", "email", "id"
                        )
                        ->get();
    }

    public static function getByToken($token) {
        $token = str_replace("\\", "", $token);
        $usuario = User::where("token", $token)->first();
        if (is_object($usuario)) {
            //Es porque es valido
            return $usuario;
        } else {
            //no es un token valido
            return FALSE;
        }
    }
    
    public static function validarToken($token) {
        $token = str_replace("\\", "", $token);
        $usuario = User::where("token", $token)->first();

        if (is_object($usuario)) {
            //Es porque es valido
            return TRUE;
        } else {
            //no es un token valido
            return FALSE;
        }
    }

    public static function autenticar($user, $pass) {
        try {
            $usuario = User::where("user", $user)->first();
            if (!is_object($usuario)) {
                abort(404, "usuario no existe");
            }
            if (Hash::check($pass, $usuario->pass)) {
                //actualizamos la session_key y se la mandamos
                $usuario->token = Hash::make(date("YMD") . $usuario->id);
                $usuario->save();
                return $usuario->token;
            } else {
                abort(403, "Contraseña no valida");
            }
        } catch (Exception $e) {
            //dd($e);
            return FALSE;
            ;
        }
    }

    public static function autenticarFB($userID) {
        try {
            $usuario = User::where("userID", $userID)->first();
            if (!is_object($usuario)) {
                abort(404, "usuario no existe");
            }
            $usuario->token = Hash::make(date("YMD") . $usuario->id);
            $usuario->save();
            return $usuario->token;
        } catch (Exception $e) {
            //dd($e);
            return FALSE;
        }
    }

    /**
     * Creacion del usuario en la DB
     * @param type $request
     */
    public static function crearUsuario($request) {
        
    }

    public function actualizar($request) {
        try {
            //Ya esta el dato cargado, pero verificamos que sea asi.
            if (!is_object($this)) {
                throw new \Exceptions("No es un objeto, no se cargo para hacer la actualizacion");
            }
            //actualizamos los datos
            $this->user = $request->user;
            $this->pass = $request->pass;
            $this->longitud = $request->longitud;
            $this->latitud = $request->latitud;
            $this->nombre = $request->nombre;
            $this->apellido = $request->apellido;
            $this->cedula = $request->cedula;
            $this->fecha_nacimiento = $request->fecha_nacimiento;
            $this->sexo = $request->sexo;
            $this->telefono = $request->telefono;
            $this->movil = $request->movil;
            $this->email = $request->email;
            if ($this->save()) {
                return TRUE;
            } else {
                throw new \Exception("no se actualizo el usuario");
            }
        } catch (\Exception $e) {
            //hacer el manejo de las excepciones
            return FALSE;
        }
    }

}
