define({ "api": [
  {
    "type": "POST",
    "url": "/api/login",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Application_Login",
    "description": "<p>Resource to authenticate the user, and get your session token</p>",
    "examples": [
      {
        "title": "Example of Use:",
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
            "description": "<p>User registered in system</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User password</p>"
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
            "description": "<p>Session token</p>"
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
            "description": "<p>Internal Error <code>500</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LoginInvalid",
            "description": "<p>When the credentials are invalid this error occurs <code>403</code>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Application_Login"
  },
  {
    "type": "DELETE",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Delete_a_user",
    "description": "<p>Receive the user id to be deleted from the system and the authenticated user token</p>",
    "examples": [
      {
        "title": "Example of Use:",
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
            "field": "UserNotFound",
            "description": "<p>User to delete was not found <code>404</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token supplied is not valid <code>403</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterError",
            "description": "<p>The data provided is not valid and generates an error <code>501</code>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Delete_a_user"
  },
  {
    "type": "GET",
    "url": "/api/usuarios?token=AquiVaElToken",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Get_All_Users",
    "description": "<p>Get All registered users, using the token to know that it is a logged in user, and authorized to access that resource</p>",
    "examples": [
      {
        "title": "Example of Use:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/usuarios?token=uuhghhs$%kskds.$fdfdffdfd",
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
            "field": "Token",
            "description": "<p>Session Token</p>"
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
            "field": "InvalidToken",
            "description": "<p>The ºcode <code>403</code>. Indicating that the token is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Internal code error <code>500</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Get_All_Users"
  },
  {
    "type": "get",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Get_a_user",
    "description": "<p>Enter the id of the user that we want to get, and the token That validates us as accomplished user</p>",
    "examples": [
      {
        "title": "Example of Use:",
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
            "field": "UserNotFound",
            "description": "<p>Code <code>404</code> User not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token supplied is not valid <code>403</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Error with code <code>500</code>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Get_a_user"
  },
  {
    "type": "Method",
    "url": "/api/plantilla/",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Template_Documentation",
    "description": "<p>Here it is explained that the resource With several lines</p>",
    "examples": [
      {
        "title": "Example of Use:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/plantilla/{type:parameter_get}",
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
            "field": "Parameter",
            "description": "<p>Parameter (POST | PUT | DELETE) in the request</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example of Success:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"This is the example of everything OK\"\n}",
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
            "field": "Error_1",
            "description": "<p>With code <code>4xx</code> And a short explanation.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error_2",
            "description": "<p>With code <code>4xx</code> And an explanation.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Template_Documentation"
  },
  {
    "type": "PUT",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "Update_User",
    "description": "<p>Enter the ID of the person you want to modify and the token that validates you as a logged in user</p>",
    "examples": [
      {
        "title": "Example of Use:",
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
            "field": "UserNotFound",
            "description": "<p>The user you want to modify does not exist <code>404</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotUpdated",
            "description": "<p>The user you want to modify is not modifiable <code>501</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Error with code <code>500</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>The token supplied is not valid <code>403</code>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "Update_User"
  },
  {
    "type": "POST",
    "url": "/api/usuarios",
    "title": "",
    "name": "quehaypahacerctg",
    "group": "User_Registration",
    "description": "<p>Where all the requests to get a user in the API enter, does not need Token</p>",
    "examples": [
      {
        "title": "Example of Use:",
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
            "field": "InternalError",
            "description": "<p>Internal Error with Code <code>500</code></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterError",
            "description": "<p>Usually related by entering data from a Person already registered, has code <code>501</code>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.php",
    "groupTitle": "User_Registration"
  }
] });
