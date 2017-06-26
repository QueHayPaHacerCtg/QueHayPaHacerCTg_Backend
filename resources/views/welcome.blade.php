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
            name: user,
            location: pass
        }
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}

function registroDeUsuarios() {
    var marca = Date.now();
    $.ajax({
        method: "POST",
        url: "http://localhost:8000/api/usuarios",
        data: {
            nombre: "John",
            apellido: "Boston",
            cedula: "11" + marca,
            fecha_nacimiento: "1990-11-10",
            sexo: "Hombre",
            telefono: "11" + marca,
            movil: "11" + marca,
            email: "11" + marca + "@prueba.com",
            user: marca,
            pass: marca,
        }
    }).done(function (msg) {
        console.log(msg);
    }).fail(function (msg) {
        console.log(msg);
    });
}
        </script>
    </body>
</html>
