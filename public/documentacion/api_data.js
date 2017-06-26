define({ "api": [
  {
    "type": "PUT",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Actualizacion_de_usuario",
    "description": "<p>Ingresas la ID de la persona que quieres modificar y el token que te valide como usuario logeado</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/usuarios/144?token=bcabjciasjbcioahbcu546%&fdff",
        "type": "json"
      }
    ],
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
            "field": "UsuarioNoEncontrado",
            "description": "<p>El usuario que desea modificar no existe <code>404</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioNoActualizado",
            "description": "<p>El usuario que desea modificar no es modificable <code>501</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>error con código <code>500</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalido",
            "description": "<p>El token suministrado no es valido <code>403</code>.</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Actualizacion_de_usuario"
  },
  {
    "type": "DELETE",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Eliminar_a_un_usuario",
    "description": "<p>Manda la id del usuario que deseamos eliminar del sistema y el token que nos válida como usuario logeado</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/usuarios/357?token=ddffef&fsfdsf/ffdsf",
        "type": "json"
      }
    ],
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
            "field": "InternalError",
            "description": "<p>Error interno<code>500</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsuarioNoEncontrado",
            "description": "<p>El usuario a eliminar no fue encontrado <code>404</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalido",
            "description": "<p>El token suministrado no es válido <code>403</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorDeParametros",
            "description": "<p>Los datos suministrados no sn válidos y generarón un error<code>501</code>.</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Eliminar_a_un_usuario"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Login_de_aplicacion",
    "description": "<p>login del usuario para obtener su token de sesión</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/login",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>usuario resgistrado en sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>constraseña del usuario</p>"
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
            "description": "<p>token de la sesión</p>"
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
            "field": "InternalError",
            "description": "<p>Error interno <code>500</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginInvalido",
            "description": "<p>Cuando las credenciales no son validas ocurre este error<code>403</code>.</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Login_de_aplicacion"
  },
  {
    "type": "GET",
    "url": "/api/usuarios",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Obtener_Todos_los_usuarios",
    "description": "<p>Optener Todos los usuarios registrados, usando el token para saber que es un usuario logeado, y autorizado para acceder a ese recurso</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/usuarios",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\",\n \"id\":1\n }\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/index.php/api/usuarios"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Error interno con código <code>500</code></p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Obtener_Todos_los_usuarios"
  },
  {
    "type": "get",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Obtener_un_usuario",
    "description": "<p>Se ingresa la id del usuario que deseamos obtener, y el token que nos valide como usuario logrado</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/usuarios/854?token=ddffef&fsfdsf/ffdsf",
        "type": "json"
      }
    ],
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
            "field": "UsuarioNoEncontrado",
            "description": "<p>Código <code>404</code> no encontró el usuario</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenNoValido",
            "description": "<p>El token suministrado no es valido <code>403</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>error con código <code>500</code></p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Obtener_un_usuario"
  },
  {
    "type": "Method",
    "url": "/api/plantilla/",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Plantilla_Documentacion",
    "description": "<p>Aquí se explica que hace el recurso con varias lineas</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/plantilla/{Tipo:parametro_get}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Parametro",
            "description": "<p>Parametro (POST|PUT|DELECT) en la petición.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    \"mensaje\":\"Esto es el ejemplo de todo OK\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "EjemploSoloParaBusquedas"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error_1",
            "description": "<p>con código <code>4xx</code> y una corta explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error_2",
            "description": "<p>con código <code>4xx</code> y una explicación.</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Plantilla_Documentacion"
  },
  {
    "type": "POST",
    "url": "/api/usuarios",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Registro_de_usuario",
    "description": "<p>Ruta para registrar un usuario en sistema para posteriormente hacer login para optener un token</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/usuarios",
        "type": "json"
      }
    ],
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
            "description": "<p><strong>Unique</strong></p>"
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
            "description": "<p><strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p><strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p><strong>Unique</strong></p>"
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
            "field": "InternalError",
            "description": "<p>Error Interno con código <code>500</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorDeParametros",
            "description": "<p>Usualmente relacionado por ingresar datos de una persona ya registrada tiene código <code>501</code></p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Registro_de_usuario"
  }
] });
