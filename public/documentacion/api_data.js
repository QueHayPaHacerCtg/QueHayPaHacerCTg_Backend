define({ "api": [
  {
    "type": "PUT",
    "url": "/api/usuarios/{id}?token=AquiVaElToken",
    "title": "Actualizacion de usuarios",
    "name": "quehaypahacerctg",
    "group": "Actualizaciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de la session</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>del usuario a modificar</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>format(&quot;YYYY-MM-DD&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>permitidos: &quot;Hombre&quot;, &quot;Mujer&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Opcional</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>format(&quot;YYYY-MM-DD&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>permitidos: &quot;Hombre&quot;, &quot;Mujer&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Opcional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\":1,\n \"created_at\":\"2017-06-14 00:00:00\",\n \"updated_at\":\"2017-06-23 00:00:00\",\n \"user\":\"LuisPlata\",\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 User Not Found\n{\n  \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Actualizaciones"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "Login de aplicacion",
    "name": "quehaypahacerctg",
    "group": "Autenticacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>token de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>format(&quot;YYYY-MM-DD&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>permitidos: &quot;Hombre&quot;, &quot;Mujer&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"token\":\"tokenDeSession\",\n \"id\":1,\n \"created_at\":\"2017-06-14 00:00:00\",\n \"updated_at\":\"2017-06-23 00:00:00\",\n \"user\":\"LuisPlata\",\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>de Autenticacion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Acceso denegado\n{\n  \"Error de autenticacion\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Autenticacion"
  },
  {
    "type": "get",
    "url": "/usuarios/{id}?token=AquiVaElToken",
    "title": "Obtener un usuario especifico",
    "name": "quehaypahacerctg",
    "group": "Consulta",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de session</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>format(&quot;YYYY-MM-DD&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>permitidos: &quot;Hombre&quot;, &quot;Mujer&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"id\":1,\n \"created_at\":\"2017-06-14 00:00:00\",\n \"updated_at\":\"2017-06-23 00:00:00\",\n \"user\":\"LuisPlata\",\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Consulta"
  },
  {
    "type": "GET",
    "url": "/api/usuarios?token=AquiVaElToken",
    "title": "Optener Todos los usuarios registrados",
    "name": "quehaypahacerctg",
    "group": "Consultas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de la session</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n \"id\":1,\n \"created_at\":\"2017-06-14 00:00:00\",\n \"updated_at\":\"2017-06-23 00:00:00\",\n \"user\":\"LuisPlata\",\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>interno con el código <code>500</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n \"mensaje de error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Consultas"
  },
  {
    "type": "DELETE",
    "url": "/api/usuarios/{id}?token=AquiVaElToken",
    "title": "Eliminar a un usuario",
    "name": "quehaypahacerctg",
    "group": "Eliminaciones",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token de la session</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"Usuario Eliminado\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>interno <code>500</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n \"No se elimino el usuario, verifique los datos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Eliminaciones"
  },
  {
    "type": "POST",
    "url": "/api/usuarios",
    "title": "Registro de Usuario",
    "name": "quehaypahacerctg",
    "group": "Registro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>format(&quot;YYYY-MM-DD&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>permitidos: &quot;Hombre&quot;, &quot;Mujer&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pass",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Opcional</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "fecha_nacimiento",
            "description": "<p>format(&quot;YYYY-MM-DD&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "sexo",
            "description": "<p>permitidos: &quot;Hombre&quot;, &quot;Mujer&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "Created_at",
            "description": "<p>Format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "Updated_at",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"id\":1,\n \"created_at\":\"2017-06-14 00:00:00\",\n \"updated_at\":\"2017-06-23 00:00:00\",\n \"user\":\"LuisPlata\",\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>Interno, algun dato no es correcto o falta un dato</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n \"No creo el usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Registro"
  }
] });
