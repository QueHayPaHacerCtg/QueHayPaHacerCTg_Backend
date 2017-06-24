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
 * @api {Method} /api/plantilla/
 * @apiName quehaypahacerctg
 * @apiGroup Template Documentation
 * @apiDescription Here it is explained that the resource
 * With several lines
 * 
 * @apiExample Example of Use:
 * http://quehaypahacer.nabu.com.co/index.php/api/plantilla/{type:parameter_get}
 * 
 * @apiParam {string} Parameter Parameter (POST | PUT | DELETE) in the request
 * 
 * @apiSuccessExample Example of Success:
 *      HTTP/1.1 200 OK
 *      {
 *          "message":"This is the example of everything OK"
 *      }
 * 
 * @apiError Error_1 With code <code>4xx</code> And a short explanation.
 * @apiError Error_2 With code <code>4xx</code> And an explanation.
 */

/**
 * @api {GET} /api/usuarios?token=AquiVaElToken
 * @apiName quehaypahacerctg
 * @apiGroup Get All Users
 * @apiDescription Get All registered users, using the token to know that it is 
 * a logged in user, and authorized to access that resource
 *
 * @apiExample Example of Use:
 * http://quehaypahacer.nabu.com.co/index.php/api/usuarios?token=uuhghhs$%kskds.$fdfdffdfd
 * 
 * @apiParam {string} Token Session Token
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
 * @apiError InvalidToken The ºcode <code>403</code>. Indicating that the token is invalid
 * @apiError InternalError Internal code error <code>500</code>
 *
 */

/**
 * @api {POST} /api/usuarios
 * @apiName quehaypahacerctg
 * @apiGroup User Registration
 * @apiDescription Where all the requests to get a user in the API enter, 
 * does not need Token
 *
 * @apiExample Example of Use:
 * http://quehaypahacer.nabu.com.co/index.php/api/usuarios
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
 * @apiError InternalError Internal Error with Code <code>500</code>
 * @apiError ParameterError Usually related by entering data from a 
 * Person already registered, has code <code>501</code>.
 *
 */

Route::resource("/usuarios","UsuariosController");

/**
 * @api {PUT} /api/usuarios/{Numero:id}?token=AquiVaElToken
 * @apiName quehaypahacerctg
 * @apiGroup Update User
 * @apiDescription Enter the ID of the person you want to modify and the token 
 * that validates you as a logged in user
 *
 * @apiExample Example of Use:
 * http://quehaypahacer.nabu.com.co/index.php/api/usuarios/144?token=bcabjciasjbcioahbcu546%&fdff
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
 * @apiError UserNotFound The user you want to modify does not exist <code>404</code>
 * @apiError UserNotUpdated The user you want to modify is not modifiable <code>501</code>
 * @apiError InternalError Error with code <code>500</code>
 * @apiError InvalidToken The token supplied is not valid <code>403</code>.
 *
 */

/**
 * @api {get} /api/usuarios/{Numero:id}?token=AquiVaElToken
 * @apiName quehaypahacerctg
 * @apiGroup Get a user
 * @apiDescription Enter the id of the user that we want to get, and the token
 * That validates us as accomplished user
 *
 * @apiExample Example of Use:
 * http://quehaypahacer.nabu.com.co/index.php/api/usuarios/854?token=ddffef&fsfdsf/ffdsf
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
 * @apiError UserNotFound Code <code>404</code> User not found.
 * @apiError InvalidToken The token supplied is not valid <code>403</code>
 * @apiError InternalError Error with code <code>500</code>.
 * 
 */

/**
 * @api {DELETE} /api/usuarios/{Numero:id}?token=AquiVaElToken 
 * @apiName quehaypahacerctg
 * @apiGroup Delete a user
 * @apiDescription Receive the user id to be deleted from the system and the 
 * authenticated user token
 *
 * @apiExample Example of Use:
 * http://quehaypahacer.nabu.com.co/index.php/api/usuarios/357?token=ddffef&fsfdsf/ffdsf
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "Usuario Eliminado"
 *      }
 *
 * @apiError InternalError Error interno<code>500</code>.
 * @apiError UserNotFound User to delete was not found <code>404</code>.
 * @apiError InvalidToken The token supplied is not valid <code>403</code>.
 * @apiError ParameterError The data provided is not valid and generates an error <code>501</code>.
 *
 */

/**
 * @api {POST} /api/login 
 * @apiName quehaypahacerctg
 * @apiGroup Application Login
 * @apiDescription Resource to authenticate the user, and get your session token
 *
 * @apiExample Example of Use:
 * http://quehaypahacer.nabu.com.co/index.php/api/login
 *
 * @apiParam {String} user User registered in system
 * @apiParam {String} pass User password
 *
 * @apiSuccess {String} Token Session token
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
 * @apiError InternalError Internal Error <code>500</code>.
 * @apiError LoginInvalid When the credentials are invalid this error occurs <code>403</code>.
 *
 */

Route::post("login","UsuariosController@login");

//Route::group(['middleware' => 'tokenValido'], function () {
    //Route::resource("persona","PersonaController");
//});