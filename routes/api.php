<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get("/",function(){
    return redirect(url("documentacion/index.html"));   
});

/**
 * @api {GET} /api/usuarios?token=AquiVaElToken Optener Todos los usuarios registrados
 * @apiName quehaypahacerctg
 * @apiGroup Consultas
 *
 * @apiParam {string} Token Token de la session
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *      "id":1,
 *      "created_at":"2017-06-14 00:00:00",
 *      "updated_at":"2017-06-23 00:00:00",
 *      "user":"LuisPlata",
 *      "nombre":"Luis Enrique",
 *      "apellido":"Plata Osorio",
 *      "cedula":"1143346134",
 *      "fecha_nacimiento":"1990-11-10",
 *      "sexo":"Hombre",
 *      "telefono":"56510386",
 *      "movil":"3015086264",
 *      "email":"www.luisplata@gmail.com"
 *      }
 *     ]
 *
 * @apiError Error interno con el código <code>500</code>.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Error
 *     {
 *      "mensaje de error"
 *     }
 */

/**
 * @api {POST} /api/usuarios Registro de Usuario
 * @apiName quehaypahacerctg
 * @apiGroup Registro
 *
 * @apiParam {string} nombre
 * @apiParam {string} apellido
 * @apiParam {string} cedula
 * @apiParam {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiParam {string} sexo permitidos: "Hombre", "Mujer"
 * @apiParam {string} telefono
 * @apiParam {string} movil
 * @apiParam {string} email
 * @apiParam {string} nombre
 * @apiParam {string} user 
 * @apiParam {string} pass 
 * @apiParam {string} longitud Opcional
 * @apiParam {string} latitud Opcional
 * 
 * @apiSuccess {Number} ID
 * @apiSuccess {string} nombre
 * @apiSuccess {string} apellido
 * @apiSuccess {string} cedula
 * @apiSuccess {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiSuccess {string} sexo permitidos: "Hombre", "Mujer"
 * @apiSuccess {string} telefono
 * @apiSuccess {string} movil
 * @apiSuccess {string} email
 * @apiSuccess {DateTime} Created_at Format("YYYY-MM-DD HH:ii:ss")
 * @apiSuccess {DateTime} Updated_at
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      "id":1,
 *      "created_at":"2017-06-14 00:00:00",
 *      "updated_at":"2017-06-23 00:00:00",
 *      "user":"LuisPlata",
 *      "nombre":"Luis Enrique",
 *      "apellido":"Plata Osorio",
 *      "cedula":"1143346134",
 *      "fecha_nacimiento":"1990-11-10",
 *      "sexo":"Hombre",
 *      "telefono":"56510386",
 *      "movil":"3015086264",
 *      "email":"www.luisplata@gmail.com"
 *      }
 *
 * @apiError Error Interno, algun dato no es correcto o falta un dato
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Error
 *     {
 *      "No creo el usuario"
 *     }
 */

Route::resource("/usuarios","UsuariosController");

/**
 * @api {PUT} /api/usuarios/{id}?token=AquiVaElToken Actualizacion de usuarios
 * @apiName quehaypahacerctg
 * @apiGroup Actualizaciones
 *
 * @apiParam {Number} Token Token de la session
 * @apiParam {Number} ID del usuario a modificar
 * @apiParam {string} nombre
 * @apiParam {string} apellido
 * @apiParam {string} cedula
 * @apiParam {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiParam {string} sexo permitidos: "Hombre", "Mujer"
 * @apiParam {string} telefono
 * @apiParam {string} movil
 * @apiParam {string} email
 * @apiParam {string} nombre
 * @apiParam {string} user Opcional
 * @apiParam {string} password Opcional
 * @apiParam {string} longitud Opcional
 * @apiParam {string} latitud Opcional
 *
 * 
 * @apiSuccess {Number} ID
 * @apiSuccess {string} nombre
 * @apiSuccess {string} apellido
 * @apiSuccess {string} cedula
 * @apiSuccess {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiSuccess {string} sexo permitidos: "Hombre", "Mujer"
 * @apiSuccess {string} telefono
 * @apiSuccess {string} movil
 * @apiSuccess {string} email
 * @apiSuccess {string} nombre
 * @apiSuccess {string} user Opcional
 * @apiSuccess {string} password Opcional
 * @apiSuccess {string} longitud Opcional
 * @apiSuccess {string} latitud Opcional
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "id":1,
 *      "created_at":"2017-06-14 00:00:00",
 *      "updated_at":"2017-06-23 00:00:00",
 *      "user":"LuisPlata",
 *      "nombre":"Luis Enrique",
 *      "apellido":"Plata Osorio",
 *      "cedula":"1143346134",
 *      "fecha_nacimiento":"1990-11-10",
 *      "sexo":"Hombre",
 *      "telefono":"56510386",
 *      "movil":"3015086264",
 *      "email":"www.luisplata@gmail.com"
 *      }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 User Not Found
 *     {
 *       "UserNotFound"
 *     }
 */

/**
 * @api {get} /usuarios/{id}?token=AquiVaElToken Obtener un usuario especifico
 * @apiName quehaypahacerctg
 * @apiGroup Consulta
 *
 * @apiParam {String} Token Token de session
 * @apiParam {Number} ID del usuario
 *
 * @apiSuccess {Number} ID
 * @apiSuccess {string} nombre
 * @apiSuccess {string} apellido
 * @apiSuccess {string} cedula
 * @apiSuccess {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiSuccess {string} sexo permitidos: "Hombre", "Mujer"
 * @apiSuccess {string} telefono
 * @apiSuccess {string} movil
 * @apiSuccess {string} email
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "id":1,
 *      "created_at":"2017-06-14 00:00:00",
 *      "updated_at":"2017-06-23 00:00:00",
 *      "user":"LuisPlata",
 *      "nombre":"Luis Enrique",
 *      "apellido":"Plata Osorio",
 *      "cedula":"1143346134",
 *      "fecha_nacimiento":"1990-11-10",
 *      "sexo":"Hombre",
 *      "telefono":"56510386",
 *      "movil":"3015086264",
 *      "email":"www.luisplata@gmail.com"
 *      }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {DELETE} /api/usuarios/{id}?token=AquiVaElToken Eliminar a un usuario
 * @apiName quehaypahacerctg
 * @apiGroup Eliminaciones
 *
 * @apiParam {string} Token Token de la session
 * @apiParam {Number} ID ID del usuario
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "Usuario Eliminado"
 *      }
 *
 * @apiError Error interno <code>500</code>.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Error
 *     {
 *      "No se elimino el usuario, verifique los datos"
 *     }
 */

/**
 * @api {POST} /api/login Login de aplicacion
 * @apiName quehaypahacerctg
 * @apiGroup Autenticacion
 *
 * @apiParam {String} user
 * @apiParam {String} pass
 *
 * @apiSuccess {String} Token token de la session
 * @apiSuccess {Integer} id
 * @apiSuccess {string} nombre
 * @apiSuccess {string} apellido
 * @apiSuccess {string} cedula
 * @apiSuccess {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiSuccess {string} sexo permitidos: "Hombre", "Mujer"
 * @apiSuccess {string} telefono
 * @apiSuccess {string} movil
 * @apiSuccess {string} email
 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "token":"tokenDeSession",
 *      "id":1,
 *      "created_at":"2017-06-14 00:00:00",
 *      "updated_at":"2017-06-23 00:00:00",
 *      "user":"LuisPlata",
 *      "nombre":"Luis Enrique",
 *      "apellido":"Plata Osorio",
 *      "cedula":"1143346134",
 *      "fecha_nacimiento":"1990-11-10",
 *      "sexo":"Hombre",
 *      "telefono":"56510386",
 *      "movil":"3015086264",
 *      "email":"www.luisplata@gmail.com"
 *      }
 *
 * @apiError Error de Autenticacion
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 403 Acceso denegado
 *     {
 *       "Error de autenticacion"
 *     }
 */

Route::post("login","UsuariosController@login");

//Route::group(['middleware' => 'tokenValido'], function () {
    //Route::resource("persona","PersonaController");
//});