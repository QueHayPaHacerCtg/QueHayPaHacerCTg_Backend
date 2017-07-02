<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            Pruebas
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script>
$(document).ready(function () {

})
function login(user, pass) {
    $.ajax({
        method: "POST",
        url: "http://localhost:8000/api/login",
        data: {
            user: user,
            pass: pass
        }
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}

function loginFB(userID) {
    $.ajax({
        method: "POST",
        url: "http://localhost:8000/api/login",
        data: {
            userID: userID,
            tipoAutenticacion: "FB"
        }
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}

function registroDeUsuarios(nombre, apellido, cedula, email) {
    var marca = Date.now();
    $.ajax({
        method: "POST",
        url: "http://localhost:8000/api/usuarios",
        data: {
            nombre: nombre,
            apellido: apellido,
            cedula: cedula,
            fecha_nacimiento: "1990-11-10",
            sexo: "Hombre",
            telefono: "11" + marca,
            movil: "11" + marca,
            email: email,
            user: email,
            pass: cedula,
        }
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}

function registroDeUsuariosFB(nombre, cedula, userID, tipoAutenticacion, email) {
    $.ajax({
        method: "POST",
        url: "http://localhost:8000/api/usuarios",
        data: {
            nombre: nombre,
            cedula: cedula,
            fecha_nacimiento: "1990-11-10",
            sexo: "Hombre",
            email: email,
            userID: userID,
            foto: "foto",
            tipoAutenticacion: tipoAutenticacion
        }
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}

function registrarSitio(token, nombre, descripcion) {
    //logeamos y obtenemos token
    var token = token;
    $.ajax({
        method: "POST",
        url: "http://localhost:8000/api/sitio?token=" + token,
        data: {
            nombre: nombre,
            descripcion: descripcion
        }
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}
function sitios() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8000/api/sitio"
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}
function sitio(id) {
    $.ajax({
        method: "GET",
        url: "http://localhost:8000/api/sitio/" + id
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}

function obtenerUnUsuario(id, token) {
    $.ajax({
        method: "GET",
        url: "http://localhost:8000/api/usuarios/" + id + "?token=" + token
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}
        </script>
    </body>
</html>
