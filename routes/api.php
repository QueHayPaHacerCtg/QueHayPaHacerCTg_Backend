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
Route::get("/", function() {
    return redirect(url("documentacion/index.html"));
});
/**
 * @apiDefine db
 * @apiError 501 Usualmente para cuando es error de Base de datos, de duplicado, 
 * requerido, violacion de llave foranea
 */
/**
 * @api {Method} /api/plantilla/ Plantilla para la documentación
 * @apiGroup Plantilla
 * @apiDescription Aquí se explica que hace el recurso
 * con varias lineas
 * @apiVersion 0.1.2
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/plantilla/{Tipo:parametro_get}
 * 
 * @apiParam {string} Parametro Parametro (POST|PUT|DELECT) en la petición.
 * 
 * @apiSuccess {Tipo} nombre descripcion
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *      {
 *          "mensaje":"Esto es el ejemplo de todo OK"
 *      }
 * 
 * @apiSampleRequest EjemploSoloParaBusquedas
 * 
 * @apiError Codigo1 Descripcion <code>4xx</code> y una corta explicación.
 * @apiError Codigo2 Descripcion <code>4xx</code> y una explicación.
 * 
 * @apiUse db
 */
/**
 * @api {GET} /api/usuarios Obtener todos los usuarios regustrados
 * @apiGroup Usuarios
 * @apiDescription Optener Todos los usuarios registrados, usando el token para saber que es un
 * usuario logeado, y autorizado para acceder a ese recurso
 * @apiVersion 0.1.2
 *
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/usuarios
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *      "nombre":"Luis Enrique",
 *      "apellido":"Plata Osorio",
 *      "cedula":"1143346134",
 *      "fecha_nacimiento":"1990-11-10",
 *      "sexo":"Hombre",
 *      "telefono":"56510386",
 *      "movil":"3015086264",
 *      "email":"www.luisplata@gmail.com",
 *      "id":1
 *      }
 *     ]
 *
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/usuarios
 * 
 * @apiError 500 Error interno.
 *
 */
/**
 * @api {POST} /api/usuarios Registro de usuario
 * @apiGroup Usuarios
 * @apiDescription Ruta para registrar un usuario en sistema para posteriormente hacer
 * login y optener un token
 * @apiVersion 0.1.2
 *
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/usuarios
 * 
 * @apiParam {string} nombre MaxLength:190
 * @apiParam {string} apellido MaxLength:190
 * @apiParam {string} cedula MaxLength:50 **Unique** **Required**
 * @apiParam {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiParam {string} sexo permitidos: "Hombre", "Mujer" **Required**
 * @apiParam {string} telefono MaxLength:50
 * @apiParam {string} movil MaxLength:50
 * @apiParam {string} email MaxLength:190 **Unique** **Required**
 * @apiParam {string} user MaxLength:100
 * @apiParam {string} pass MaxLength:190
 * @apiParam {string} longitud MaxLength:190
 * @apiParam {string} latitud MaxLength:190
 * @apiParam {string} latitud MaxLength:190
 * @apiParam {string} foto MaxLength:190 Foto para usarla de perfil
 * @apiParam {string} userID MaxLength:190 ID de la red social en la que se logeo
 * @apiParam {string} tipoAutenticacion "FB"=FaceBook, "IG"=Instagram, "TW"=Twiter, ""=Normal
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
 * @apiSuccess {DateTime} Updated_at Format("YYYY-MM-DD HH:ii:ss")
 * @apiSuccess {string} foto 
 * @apiSuccess {string} tipoAutenticacions
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      "id":1,
 *      "created_at":"2017-06-14 00:00:00",
 *      "updated_at":"2017-06-23 00:00:00",
 *      "nombre":"Luis Enrique",
 *      "apellido":"Plata Osorio",
 *      "cedula":"1143346134",
 *      "fecha_nacimiento":"1990-11-10",
 *      "sexo":"Hombre",
 *      "telefono":"56510386",
 *      "movil":"3015086264",
 *      "email":"www.luisplata@gmail.com",
 *      "foto":"https://servidor.com/fotoDePerfil",
 *      "tipoAutenticacion":"FB"
 *      }
 *
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/usuarios
 * 
 * @apiError 500 Error Interno.
 * @apiError 501 ErrorDeParametros Usualmente relacionado por ingresar datos de una 
 * persona ya registrada
 * @apiError 502 No guardo el registro.
 *
 */
Route::resource("/usuarios", "UsuariosController");

/**
 * @api {PUT} /api/usuarios/{Numero:id}?token=AquiVaElToken Actualizacion de usuario
 * @apiGroup Usuarios
 * @apiDescription Ingresas la ID de la persona que quieres modificar y el token 
 * que te valide como usuario logeado
 * @apiVersion 0.1.2
 *
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/usuarios/144?token=bcabjciasjbcioahbcu546%&fdff
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
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/usuarios/1?token={token}
 *
 * @apiError UsuarioNoEncontrado El usuario que desea modificar no existe <code>404</code>
 * @apiError UsuarioNoActualizado El usuario que desea modificar no es modificable <code>501</code>
 * @apiError InternalError error con código <code>500</code>
 * @apiError TokenInvalido El token suministrado no es valido <code>403</code>.
 *
 */
/**
 * @api {get} /api/usuarios/{Numero:id}?token=AquiVaElToken Obtener un usuario
 * @apiGroup Usuarios
 * @apiDescription Se ingresa la id del usuario que deseamos obtener, y el token
 * que nos valide como usuario logrado
 * @apiVersion 0.1.2
 *
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/usuarios/854?token=ddffef&fsfdsf/ffdsf
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
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/usuarios/1?token={token}
 * 
 * @apiError UsuarioNoEncontrado Código <code>404</code> no encontró el usuario
 * @apiError TokenNoValido El token suministrado no es valido <code>403</code>
 * @apiError InternalError error con código <code>500</code>
 * 
 */
/**
 * @api {DELETE} /api/usuarios/{Numero:id}?token=AquiVaElToken Eliminar a un usuario
 * @apiGroup Usuarios
 * @apiDescription Manda la id del usuario que deseamos eliminar del sistema
 * y el token que nos válida como usuario logeado
 * @apiVersion 0.1.2
 *
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/usuarios/357?token=ddffef&fsfdsf/ffdsf
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *          "Usuario Eliminado"
 *      }
 *
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/usuarios/1?token={token}
 * 
 * @apiError InternalError Error interno<code>500</code>.
 * @apiError UsuarioNoEncontrado El usuario a eliminar no fue encontrado <code>404</code>.
 * @apiError TokenInvalido El token suministrado no es válido <code>403</code>.
 * @apiError ErrorDeParametros Los datos suministrados no sn válidos y generarón un error<code>501</code>.
 *
 */
/**
 * @api {POST} /api/login Login de aplicacion
 * @apiGroup Usuarios
 * @apiDescription login del usuario para obtener su token de sesión. Al momento 
 * @apiVersion 0.1.4
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/login
 *
 * @apiParam {String} user usuario resgistrado en sistema
 * @apiParam {String} pass constraseña del usuario
 * @apiParam {String} userID UsuarioID si fue registrado por FaceBook **Solo se coloca si se registro por red Social**
 * @apiParam {String} tipoAutenticacion "FB"=FaceBook ; "IG" **Solo se coloca si se registro por red Social**
 *
 * @apiSuccess {String} Token token de la sesión
 * @apiSuccess {Integer} id
 * @apiSuccess {string} nombre
 * @apiSuccess {string} apellido
 * @apiSuccess {string} cedula
 * @apiSuccess {date} fecha_nacimiento format("YYYY-MM-DD")
 * @apiSuccess {string} sexo permitidos: "Hombre", "Mujer"
 * @apiSuccess {string} telefono
 * @apiSuccess {string} movil
 * @apiSuccess {string} email
 * @apiSuccess {string} tipoAutenticacion "FB", "IG", "TW"

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
 *      "email":"www.luisplata@gmail.com",
 *      "tipoAutenticacion": "FB"
 *      }
 *
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/login
 * 
 * @apiError 500 Error interno.
 * @apiError 404 Usuario no encontrado.
 * @apiError 403 Contraseña invalida.
 *
 */
Route::post("login", "UsuariosController@login");

/**
 * @api {POST} /api/sitio Guardar Sitio
 * @apiGroup Sitios
 * @apiDescription Se crea un sitio para el listado. Para esto es necesario mandar token
 * Y validar que tenga permisos. Por ahora cualquiera puede hacerlo, pero a futuro eso.
 * @apiVersion 0.1.2
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/sitio
 * 
 * @apiParam {string} nombre maxlength:190 required *not null*
  * @apiParam {string} id_categoria maxlength:10 required *not null*
 * @apiParam {text} descripcion maxlength:5000 *opcional*
 * @apiParam {string} latitud maxlength:190 *opcional*
 * @apiParam {string} longitud maxlength:190 *opcional*
 * 
 * @apiSuccess {integer} id Id del sitio
 * @apiSuccess {string} nombre nombre del sitio
 * @apiSuccess {string} descripcion Descripción del sitio
 * @apiSuccess {string} longitud Longitud del sitio
 * @apiSuccess {string} latitud latitud del sitio
 * @apiSuccess {DateTime} created_at fecha de creacion _format("YYYY-MM-dd HH:ii:ss")_
 * @apiSuccess {DateTime} Updated_at fecha de su ultima actualizacion _format("YYYY-MM-dd HH:ii:ss")_
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *      {
 *          id:1,
 *          nombre:"Nombre",
 *          descripcion:"descripcion",
 *          longitud:"123546",
 *          latitud:"426456",
 *          created_at:"2017-06-27 20:00:00",
 *          updated_at:"2017-06-27 20:00:00"
 *      }
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/sitio
 * 
 * @apiError 401 Validación fallida
 * @apiError 500 Error interno
 * @apiError 501 No se registro
 * 
 */
/**
 * @api {GET} /api/sitio Obtener todos los sitios
 * @apiGroup Sitios
 * @apiDescription Listado de todos los sitios registrados
 * @apiVersion 0.1.2
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/sitio
 * 
 * @apiSuccess {string} nombre nombre del sitio
 * @apiSuccess {string} descripcion Descripción del sitio
 * @apiSuccess {string} latitud Latitud del sitio, para google maps
 * @apiSuccess {string} longitud Longitud del sitio para google maps
 * @apiSuccess {integer} ID id del sitio
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *  [     
 *      {
 *          descripcion:"Plazuela",
 *          latitud:"78678967",
 *          longitud:"6453686",
 *          nombre:"Sao",
 *          id:1
 *      }
 * ]
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/sitio
 *  
 * @apiUse db
 */
/**
 * @api {GET} /api/sitio/{integer:id} Obtener un sitio
 * @apiGroup Sitios
 * @apiDescription Cuando se pasa una ID, se muestra ademas de sus datos la fecha de creacion y
 * su ultima modificacion
 * @apiVersion 0.1.2
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/sitio/1
 * 
 * @apiSuccess {string} nombre nombre del sitio
 * @apiSuccess {string} descripcion Descripción del sitio
 * @apiSuccess {string} latitud Latitud del sitio, para google maps
 * @apiSuccess {string} longitud Longitud del sitio para google maps
 * @apiSuccess {integer} ID id del sitio
 * @apiSuccess {DateTime} created_at Fecha de creacion *format("YYYY-MM-DD HH:ii:ss")*
 * @apiSuccess {DateTime} updated_at Fecha de su ultima actualización *format("YYYY-MM-DD HH:ii:ss")*
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *          {
 *              descripcion:"Plazuela",
 *              latitud:null,
 *              longitud:null,
 *              nombre:"Sao",
 *              id:1,
 *              updated_at:"2017-06-30 00:07:35",
 *              created_at:"2017-06-30 00:07:35"
 *          }
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/sitio/1
 * 
 * @apiError 404 Sitio no existe.
 * 
 * @apiUse db
 */
Route::resource("sitio", "SitioController");
//Route::group(['middleware' => 'tokenValido'], function () {
//Route::resource("persona","PersonaController");
//});
/**
 * @api {POST} /api/reservar?token={Token_de_session} Reserva de un sitio
 * @apiGroup Reservas
 * @apiDescription Cuando un usuario desea reservar, debe tener seleccionado el
 * sitio y su id, y mandarlo junto a su token de session, mandando datos como
 * cantidad de personas, y la fecha de la reserva.
 * @apiVersion 0.1.0
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/reservar?token=3322nj2n43i2432n4ko23n
 * 
 * @apiParam {Numbre} sitio_id **Required**
 * @apiParam {Number} cantidadPersonas **Default = 1**
 * @apiParam {Date} fecha **Required** | **formato("YYYY-MM-DD")**
 * 
 * @apiSuccess {string} numeroDeReserva numero de la reserva.
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *      {
 *          "numeroDeReserva":28878
 *      }
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/reservar?token=3322nj2n43i2432n4ko23n
 * 
 * @apiError 403 Token no válido.
 * @apiError 404 Sitio no existe.
 * @apiError 420 Fecha menor a la actual
 * 
 * @apiUse db
 */
Route::post("reservar", "ReservaController@reservar");
/**
 * @api {POST} /api/evento?token=$/%GBBIBI%&T&/G/&/%F/ Creación de un evento
 * @apiGroup Eventos
 * @apiDescription Cuando se desea crear un evento
 * @apiVersion 0.1.0
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/evento?token=$hbiknjo_uuijniubijn
 * 
 * @apiParam {string} nombre **MaxLength:190** | **Reqired**
 * @apiParam {string} descripcion **MaxLength:5000**
 * @apiParam {string} cover **MaxLength:190**
 * @apiParam {string} tipo **MaxLength:190**
 * @apiParam {dateTime} fecha_hora_inicio **Required** | _formar('YYYY-mm-dd HH:ii:ss')_
 * @apiParam {dateTime} fecha_hora_final **Required** | _formar('YYYY-mm-dd HH:ii:ss')_
 * @apiParam {Number} sitio_id **Required** | **Unique** | **Foreing_key**
 * @apiParam {Number} categoria_id **Required** | **Unique** | **Foreing_key**
 * 
 * 
 * @apiSuccess {string} mensaje Mensaje de exito o error
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *      {
 *          "mensaje":"Se agrego el evento de forma exitosa"
 *      }
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/evento?token=$hbiknjo_uuijniubijn
 * 
 * @apiError 403 Token no valido
 * @apiError 422 Error en las validaciones.
 * @apiError 502 Error de DB
 * @apiError 504 No se guardo el evento por error interno
 * 
 * @apiUse db
 */
/**
 * @api {GET} /api/evento?token=$678687697698ghbb7687h87877g Listar Todos los eventos
 * @apiGroup Eventos
 * @apiDescription Listado de todos los eventos
 * @apiVersion 0.1.0
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/evento?token=$678687697698ghbb7687h87877g 
 * 
 * @apiSuccess {Array} Array Array de eventos
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *      [
            {
                "id": 2,
                "created_at": "2017-07-11 04:02:13",
                "updated_at": "2017-07-11 04:02:13",
                "nombre": "1",
                "descripcion": "2",
                "estado": "abierto",
                "cover": "3",
                "sitios_id": 1,
                "categorias_id": 2,
                "fecha_hora_inicio": "1990-11-10 17:15:00",
                "fecha_hora_final": "1990-11-10 22:00:00",
                "tipo": "4"
            }
 *      ]
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/evento?token=$678687697698ghbb7687h87877g
 * 
 * @apiError 403 Token no valido.
 * 
 * @apiUse db
 */
/**
 * @api {DELETE} /api/evento/{Number:ID}?token=$58c78c78c78d6cd67cd79 Eliminar un evento
 * @apiGroup Eventos
 * @apiDescription Cuando se quiera eliminar un evento se manda la id y el token
 * del usuario para poder eliminarlo
 * @apiVersion 0.1.0
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/evento/1?token=$7df7d7df78df78df78df78df
 * 
 * @apiSuccess {string} mensaje Mensaje de la aplicación
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *      {
 *          "mensaje":"El evento se eliminó con éxito."
 *      }
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/evento/1?token=$7df7d7df78df78df78df78df
 * 
 * @apiError Codigo1 Descripcion <code>4xx</code> y una corta explicación.
 * @apiError Codigo2 Descripcion <code>4xx</code> y una explicación.
 * 
 * @apiUse db
 */
Route::resource("evento", "EventoController");



/**
 * @api {POST} /api/categoria Guardar Categoria
 * @apiGroup Categorias
 * @apiDescription Se crea una categoria para el listado. Para esto es necesario mandar token
 * Y validar que tenga permisos. Por ahora cualquiera puede hacerlo, pero a futuro eso.
 * @apiVersion 0.1.0
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/categoria
 * 
 * @apiParam {string} nombre maxlength:190 required *not null*
 * @apiParam {text} descripcion maxlength:5000 *opcional*
 * 
 * @apiSuccess {integer} id Id de la categoria
 * @apiSuccess {string} nombre nombre de la categoria
 * @apiSuccess {string} descripcion Descripción de la categoria
 * @apiSuccess {DateTime} created_at fecha de creacion _format("YYYY-MM-dd HH:ii:ss")_
 * @apiSuccess {DateTime} Updated_at fecha de su ultima actualizacion _format("YYYY-MM-dd HH:ii:ss")_
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *      {
 *          id:1,
 *          nombre:"Nombre",
 *          descripcion:"descripcion",
 *          created_at:"2017-06-27 20:00:00",
 *          updated_at:"2017-06-27 20:00:00"
 *      }
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/categoria
 * 
 * @apiError 401 Validación fallida
 * @apiError 500 Error interno
 * @apiError 501 No se registro
 * 
 */
/**
 * @api {GET} /api/categoria Obtener todas las categorias
  * @apiGroup Categorias
 * @apiDescription Listado de todas las categorias registradas
 * @apiVersion 0.1.0
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/categoria
 * 
 * @apiSuccess {string} nombre nombre de la categoria
 * @apiSuccess {string} descripcion Descripción de la categoria
 * @apiSuccess {integer} id Id de la categoria
 * 
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *  [     
 *      {
 *          descripcion:"Plazuela",
 *         	nombre:"Sao",
 *          id:1
 *      }
 * ]
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/categoria
 *  
 * @apiUse db
 */
/**
 * @api {GET} /api/categoria/{integer:id} Obtener una categoria
  * @apiGroup Categorias
 * @apiDescription Cuando se pasa una ID, se muestra ademas de sus datos la fecha de creacion y
 * su ultima modificacion
 * @apiVersion 0.1.1
 * 
 * @apiExample Ejemplo de Uso:
 * https://quehaypahacer.nabu.com.co/api/categoria/1
 * 
 * @apiSuccess {integer} id Id de la categoria
 * @apiSuccess {string} nombre nombre de la categoria
 * @apiSuccess {string} descripcion Descripción de la categoria
 * @apiSuccess {DateTime} created_at fecha de creacion _format("YYYY-MM-dd HH:ii:ss")_
 * @apiSuccess {DateTime} Updated_at fecha de su ultima actualizacion _format("YYYY-MM-dd HH:ii:ss")_
 * @apiSuccess {string[]} sitios Listado de sitios asociados a la categoria
 *
 * @apiSuccessExample Ejemplo de Éxito:
 *      HTTP/1.1 200 OK
 *          {
*  				"categoria": {
*  				      "id": 1,
*  				      "created_at": "2017-08-30 18:25:24",
*  				      "updated_at": "2017-08-30 18:25:24",
*  				      "nombre": "Vida Nocturna",
*  				      "descripcion": ""
*  				  },
*  				  "sitios": [
*  				      {
*  				          "id": 1,
*  				          "created_at": "2017-08-30 18:31:56",
*  				          "updated_at": "2017-08-30 18:31:56",
*  				          "nombre": "casa tilson",
*  				          "descripcion": "casa",
*  				          "latitud": "1111",
*            				"longitud": "2222"
*  				      }
*  				  ]
*				}
 * 
 * @apiSampleRequest https://quehaypahacer.nabu.com.co/api/categoria/1
 * 
 * @apiError 404 Sitio no existe.
 * 
 * @apiUse db
 */
Route::resource("categoria", "CategoriasController");
