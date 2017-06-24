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
 * @apiGroup Plantilla Documentacion
 * @apiDescription Aqui se explica que hace el recurso
 * con varias lineas?
 * o no?
 * 
 * @apiExample Ejemplo de Uso:
 * http://quehaypahacer.nabu.com.co/index.php/api/plantilla/{TIPO:parametro_get}
 * 
 * @apiParam {string} Parametro Parametro (POST|PUT|DELECT) en la peticion
 * 
 * @apiSuccessExample Ejemplo de Exito:
 *      HTTP/1.1 200 OK
 *      {
 *          "mensaje":"Esto es el ejemplo de todo OK"
 *      }
 * 
 * @apiError Error_1 con codigo <code>4xx</code> y una corta explicacion.
 * @apiError Error_2 con codigo <code>4xx</code> y una explicacion.
 */

/**
 * @api {GET} /api/usuarios?token=AquiVaElToken
 * @apiName quehaypahacerctg
 * @apiGroup Obtener Todos los usuarios
 * @apiDescription Optener Todos los usuarios registrados, usando el token para saber que es un
 * usuario logeado, y autorizado para acceder a ese recurso
 *
 * @apiExample Ejemplo de Uso:
 * http://quehaypahacer.nabu.com.co/index.php/api/usuarios?token=uuhghhs$%kskds.$fdfdffdfd
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
 * @apiError TokenInvalido Error colcoando el codigo<code>403</code>.indicando 
 * que el token no es valido
 * @apiError InternalError Error interno con codigo <code>500</code>
 *
 */

/**
 * @api {POST} /api/usuarios
 * @apiName quehaypahacerctg
 * @apiGroup Registro de usuario
 * @apiDescription Por donde entran toda las peticiones para obtener un usuario en la API, no necesita Token
 *
 * @apiExample Ejemplo de Uso:
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
 * @apiError InternalError Error Interno con codigo <code>500</code>
 * @apiError ErrorDeParametros Usualmente relacionado por ingresar datos de una 
 * persona ya registrada tiene codigo <code>501</code>
 *
 */

Route::resource("/usuarios","UsuariosController");

/**
 * @api {PUT} /api/usuarios/{Numero:id}?token=AquiVaElToken
 * @apiName quehaypahacerctg
 * @apiGroup Actualizar usuario
 * @apiDescription Ingresas la ID de la persona que quieres modificar y el token 
 * que te valide como usuario logeado
 *
 * @apiExample Ejemplo de Uso:
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
 * @apiError UsuarioNoEncontrado El usuario que desea modificar no existe <code>404</code>
 * @apiError UsuarioNoActualizado El usuario que desea modificar no es modificable <code>501</code>
 * @apiError InternalError error con codigo <code>500</code>
 * @apiError TokenInvalido El token suministrado no es valido <code>403</code>.
 *
 */

/**
 * @api {get} /api/usuarios/{Numero:id}?token=AquiVaElToken
 * @apiName quehaypahacerctg
 * @apiGroup Obtener un usuario
 * @apiDescription Se ingresa la id del usuario que deseamos obtener, y el token
 * que nos valide como usuario logrado
 *
 * @apiExample Ejemplo de Uso:
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
 * @apiError UsuarioNoEncontrado Codigo <code>404</code> no se encontro el usuario
 * @apiError TokenNoValido El token suministrado no es valido <code>403</code>
 * @apiError InternalError error con codigo <code>500</code>
 * 
 */

/**
 * @api {DELETE} /api/usuarios/{Numero:id}?token=AquiVaElToken 
 * @apiName quehaypahacerctg
 * @apiGroup Eliminar a un usuario
 * @apiDescription Manda la id del usuario que deseamos eliminar del sistema
 * y el token que nos valida como usuario logeado
 *
 * @apiExample Ejemplo de Uso:
 * http://quehaypahacer.nabu.com.co/index.php/api/usuarios/357?token=ddffef&fsfdsf/ffdsf
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "Usuario Eliminado"
 *      }
 *
 * @apiError InternalError Error interno<code>500</code>.
 * @apiError UsuarioNoEncontrado El usuario a eliminar no fue encontrado <code>404</code>.
 * @apiError TokenInvalido El token suministrado no es valido <code>403</code>.
 * @apiError ErrorDeParametros Los datos suministrados no sn validos y generaron un error<code>501</code>.
 *
 */

/**
 * @api {POST} /api/login 
 * @apiName quehaypahacerctg
 * @apiGroup Login de aplicacion
 * @apiDescription Por donde se debe autenticar el usuario, y obtener su token 
 * de session
 *
 * @apiExample Ejemplo de Uso:
 * http://quehaypahacer.nabu.com.co/index.php/api/login
 *
 * @apiParam {String} user usuario resgistrado en sistema
 * @apiParam {String} pass constraseña del usuario
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
 * @apiError InternalError Error interno <code>500</code>.
 * @apiError LoginInvalido Cuando las credenciales no son validas ocurre este error<code>403</code>.
 *
 */

Route::post("login","UsuariosController@login");

//Route::group(['middleware' => 'tokenValido'], function () {
    //Route::resource("persona","PersonaController");
//});