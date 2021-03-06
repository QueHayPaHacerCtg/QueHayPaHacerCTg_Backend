define({ "api": [
  {
    "type": "GET",
    "url": "/api/categoria",
    "title": "Obtener todas las categorias",
    "group": "Categorias",
    "description": "<p>Listado de todas las categorias registradas</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/categoria",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la categoria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "     HTTP/1.1 200 OK\n [     \n     {\n         descripcion:\"Plazuela\",\n        \tnombre:\"Sao\",\n         id:1\n     }\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/categoria"
      }
    ],
    "filename": "routes/api.php",
    "groupTitle": "Categorias",
    "name": "GetApiCategoria",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/api/categoria/{integer:id}",
    "title": "Obtener una categoria",
    "group": "Categorias",
    "description": "<p>Cuando se pasa una ID, se muestra ademas de sus datos la fecha de creacion y su ultima modificacion</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/categoria/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>fecha de creacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "Updated_at",
            "description": "<p>fecha de su ultima actualizacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "sitios",
            "description": "<p>Listado de sitios asociados a la categoria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "     HTTP/1.1 200 OK\n         {\n \t\t\t\t\"categoria\": {\n \t\t\t\t      \"id\": 1,\n \t\t\t\t      \"created_at\": \"2017-08-30 18:25:24\",\n \t\t\t\t      \"updated_at\": \"2017-08-30 18:25:24\",\n \t\t\t\t      \"nombre\": \"Vida Nocturna\",\n \t\t\t\t      \"descripcion\": \"\"\n \t\t\t\t  },\n \t\t\t\t  \"sitios\": [\n \t\t\t\t      {\n \t\t\t\t          \"id\": 1,\n \t\t\t\t          \"created_at\": \"2017-08-30 18:31:56\",\n \t\t\t\t          \"updated_at\": \"2017-08-30 18:31:56\",\n \t\t\t\t          \"nombre\": \"casa tilson\",\n \t\t\t\t          \"descripcion\": \"casa\",\n \t\t\t\t          \"latitud\": \"1111\",\n           \t\t\t\t\"longitud\": \"2222\"\n \t\t\t\t      }\n \t\t\t\t  ]\n\t\t\t\t}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/categoria/1"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sitio no existe.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Categorias",
    "name": "GetApiCategoriaIntegerId"
  },
  {
    "type": "POST",
    "url": "/api/categoria",
    "title": "Guardar Categoria",
    "group": "Categorias",
    "description": "<p>Se crea una categoria para el listado. Para esto es necesario mandar token Y validar que tenga permisos. Por ahora cualquiera puede hacerlo, pero a futuro eso.</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/categoria",
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
            "description": "<p>maxlength:190 required <em>not null</em></p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "descripcion",
            "description": "<p>maxlength:5000 <em>opcional</em></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción de la categoria</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>fecha de creacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "Updated_at",
            "description": "<p>fecha de su ultima actualizacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    id:1,\n    nombre:\"Nombre\",\n    descripcion:\"descripcion\",\n    created_at:\"2017-06-27 20:00:00\",\n    updated_at:\"2017-06-27 20:00:00\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/categoria"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Validación fallida</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>No se registro</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Categorias",
    "name": "PostApiCategoria"
  },
  {
    "type": "DELETE",
    "url": "/api/evento/{Number:ID}?token=$58c78c78c78d6cd67cd79",
    "title": "Eliminar un evento",
    "group": "Eventos",
    "description": "<p>Cuando se quiera eliminar un evento se manda la id y el token del usuario para poder eliminarlo</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/evento/1?token=$7df7d7df78df78df78df78df",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "mensaje",
            "description": "<p>Mensaje de la aplicación</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    \"mensaje\":\"El evento se eliminó con éxito.\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/evento/1?token=$7df7d7df78df78df78df78df"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Codigo1",
            "description": "<p>Descripcion <code>4xx</code> y una corta explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Codigo2",
            "description": "<p>Descripcion <code>4xx</code> y una explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Eventos",
    "name": "DeleteApiEventoNumberIdToken58c78c78c78d6cd67cd79"
  },
  {
    "type": "GET",
    "url": "/api/evento?token=$678687697698ghbb7687h87877g",
    "title": "Listar Todos los eventos",
    "group": "Eventos",
    "description": "<p>Listado de todos los eventos</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/evento?token=$678687697698ghbb7687h87877g",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>Array de eventos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n[\n       {\n           \"id\": 2,\n           \"created_at\": \"2017-07-11 04:02:13\",\n           \"updated_at\": \"2017-07-11 04:02:13\",\n           \"nombre\": \"1\",\n           \"descripcion\": \"2\",\n           \"estado\": \"abierto\",\n           \"cover\": \"3\",\n           \"sitios_id\": 1,\n           \"categorias_id\": 2,\n           \"fecha_hora_inicio\": \"1990-11-10 17:15:00\",\n           \"fecha_hora_final\": \"1990-11-10 22:00:00\",\n           \"tipo\": \"4\"\n       }\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/evento?token=$678687697698ghbb7687h87877g"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Token no valido.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Eventos",
    "name": "GetApiEventoToken678687697698ghbb7687h87877g"
  },
  {
    "type": "POST",
    "url": "/api/evento?token=$/%GBBIBI%&T&/G/&/%F/",
    "title": "Creación de un evento",
    "group": "Eventos",
    "description": "<p>Cuando se desea crear un evento</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/evento?token=$hbiknjo_uuijniubijn",
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
            "description": "<p><strong>MaxLength:190</strong> | <strong>Reqired</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p><strong>MaxLength:5000</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cover",
            "description": "<p><strong>MaxLength:190</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p><strong>MaxLength:190</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "fecha_hora_inicio",
            "description": "<p><strong>Required</strong> | <em>formar('YYYY-mm-dd HH:ii:ss')</em></p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "fecha_hora_final",
            "description": "<p><strong>Required</strong> | <em>formar('YYYY-mm-dd HH:ii:ss')</em></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sitio_id",
            "description": "<p><strong>Required</strong> | <strong>Unique</strong> | <strong>Foreing_key</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categoria_id",
            "description": "<p><strong>Required</strong> | <strong>Unique</strong> | <strong>Foreing_key</strong></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "mensaje",
            "description": "<p>Mensaje de exito o error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    \"mensaje\":\"Se agrego el evento de forma exitosa\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/evento?token=$hbiknjo_uuijniubijn"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Token no valido</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Error en las validaciones.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>Error de DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "504",
            "description": "<p>No se guardo el evento por error interno</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Eventos",
    "name": "PostApiEventoTokenGbbibiTGF"
  },
  {
    "type": "Method",
    "url": "/api/plantilla/",
    "title": "Plantilla para la documentación",
    "group": "Plantilla",
    "description": "<p>Aquí se explica que hace el recurso con varias lineas</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/plantilla/{Tipo:parametro_get}",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tipo",
            "optional": false,
            "field": "nombre",
            "description": "<p>descripcion</p>"
          }
        ]
      },
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
            "field": "Codigo1",
            "description": "<p>Descripcion <code>4xx</code> y una corta explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Codigo2",
            "description": "<p>Descripcion <code>4xx</code> y una explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Plantilla",
    "name": "MethodApiPlantilla"
  },
  {
    "type": "Method",
    "url": "/api/plantilla/",
    "title": "Plantilla para la documentación",
    "group": "Plantilla",
    "description": "<p>Aquí se explica que hace el recurso con varias lineas</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/plantilla/{Tipo:parametro_get}",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tipo",
            "optional": false,
            "field": "nombre",
            "description": "<p>descripcion</p>"
          }
        ]
      },
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
            "field": "Codigo1",
            "description": "<p>Descripcion <code>4xx</code> y una corta explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Codigo2",
            "description": "<p>Descripcion <code>4xx</code> y una explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Plantilla",
    "name": "MethodApiPlantilla"
  },
  {
    "type": "Method",
    "url": "/api/plantilla/",
    "title": "Plantilla para la documentación",
    "group": "Plantilla",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Tipo",
            "optional": false,
            "field": "nombre",
            "description": "<p>descripcion</p>"
          }
        ]
      },
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
            "field": "Codigo1",
            "description": "<p>Descripcion <code>4xx</code> y una corta explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Codigo2",
            "description": "<p>Descripcion <code>4xx</code> y una explicación.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Plantilla",
    "name": "MethodApiPlantilla"
  },
  {
    "type": "POST",
    "url": "/api/reservar?token={Token_de_session}",
    "title": "Reserva de un sitio",
    "group": "Reservas",
    "description": "<p>Cuando un usuario desea reservar, debe tener seleccionado el sitio y su id, y mandarlo junto a su token de session, mandando datos como cantidad de personas, y la fecha de la reserva.</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/reservar?token=3322nj2n43i2432n4ko23n",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numbre",
            "optional": false,
            "field": "sitio_id",
            "description": "<p><strong>Required</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cantidadPersonas",
            "description": "<p><strong>Default = 1</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fecha",
            "description": "<p><strong>Required</strong> | <strong>formato(&quot;YYYY-MM-DD&quot;)</strong></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "numeroDeReserva",
            "description": "<p>numero de la reserva.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    \"numeroDeReserva\":28878\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/reservar?token=3322nj2n43i2432n4ko23n"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Token no válido.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sitio no existe.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "420",
            "description": "<p>Fecha menor a la actual</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Reservas",
    "name": "PostApiReservarTokenToken_de_session"
  },
  {
    "type": "GET",
    "url": "/api/sitio",
    "title": "Obtener todos los sitios",
    "group": "Sitios",
    "description": "<p>Listado de todos los sitios registrados</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/sitio",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Latitud del sitio, para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "ID",
            "description": "<p>id del sitio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "     HTTP/1.1 200 OK\n [     \n     {\n         descripcion:\"Plazuela\",\n         latitud:\"78678967\",\n         longitud:\"6453686\",\n         nombre:\"Sao\",\n         id:1\n     }\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/sitio"
      }
    ],
    "filename": "routes/api.php",
    "groupTitle": "Sitios",
    "name": "GetApiSitio",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/api/sitio",
    "title": "Obtener todos los sitios",
    "group": "Sitios",
    "description": "<p>Listado de todos los sitios registrados</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/sitio",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Latitud del sitio, para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "ID",
            "description": "<p>id del sitio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "     HTTP/1.1 200 OK\n [     \n     {\n         descripcion:\"Plazuela\",\n         latitud:\"78678967\",\n         longitud:\"6453686\",\n         nombre:\"Sao\",\n         id:1\n     }\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/api/sitio"
      }
    ],
    "filename": "routes/historial.php",
    "groupTitle": "Sitios",
    "name": "GetApiSitio",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/api/sitio",
    "title": "Obtener todos los sitios",
    "group": "Sitios",
    "description": "<p>Listado de todos los sitios registrados</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/sitio",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Latitud del sitio, para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "ID",
            "description": "<p>id del sitio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "     HTTP/1.1 200 OK\n [     \n     {\n         descripcion:\"Plazuela\",\n         latitud:\"78678967\",\n         longitud:\"6453686\",\n         nombre:\"Sao\",\n         id:1\n     }\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/index.php/api/sitio"
      }
    ],
    "filename": "routes/historial.php",
    "groupTitle": "Sitios",
    "name": "GetApiSitio",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/api/sitio/{integer:id}",
    "title": "Obtener un sitio",
    "group": "Sitios",
    "description": "<p>Cuando se pasa una ID, se muestra ademas de sus datos la fecha de creacion y su ultima modificacion</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/sitio/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Latitud del sitio, para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "ID",
            "description": "<p>id del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creacion <em>format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de su ultima actualización <em>format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n    {\n        descripcion:\"Plazuela\",\n        latitud:null,\n        longitud:null,\n        nombre:\"Sao\",\n        id:1,\n        updated_at:\"2017-06-30 00:07:35\",\n        created_at:\"2017-06-30 00:07:35\"\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/sitio/1"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sitio no existe.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Sitios",
    "name": "GetApiSitioIntegerId"
  },
  {
    "type": "GET",
    "url": "/api/sitio/{integer:id}",
    "title": "Obtener un sitio",
    "group": "Sitios",
    "description": "<p>Cuando se pasa una ID, se muestra ademas de sus datos la fecha de creacion y su ultima modificacion</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/sitio/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Latitud del sitio, para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "ID",
            "description": "<p>id del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creacion <em>format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de su ultima actualización <em>format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n    {\n        descripcion:\"Plazuela\",\n        latitud:null,\n        longitud:null,\n        nombre:\"Sao\",\n        id:1,\n        updated_at:\"2017-06-30 00:07:35\",\n        created_at:\"2017-06-30 00:07:35\"\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/api/sitio/1"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sitio no existe.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Sitios",
    "name": "GetApiSitioIntegerId"
  },
  {
    "type": "GET",
    "url": "/api/sitio/{integer:id}",
    "title": "Obtener un sitio",
    "group": "Sitios",
    "description": "<p>Cuando se pasa una ID, se muestra ademas de sus datos la fecha de creacion y su ultima modificacion</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/sitio/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>Latitud del sitio, para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio para google maps</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "ID",
            "description": "<p>id del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>Fecha de creacion <em>format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Fecha de su ultima actualización <em>format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n    {\n        descripcion:\"Plazuela\",\n        latitud:null,\n        longitud:null,\n        nombre:\"Sao\",\n        id:1,\n        updated_at:\"2017-06-30 00:07:35\",\n        created_at:\"2017-06-30 00:07:35\"\n    }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/index.php/api/sitio/1"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sitio no existe.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>Usualmente para cuando es error de Base de datos, de duplicado, requerido, violacion de llave foranea</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Sitios",
    "name": "GetApiSitioIntegerId"
  },
  {
    "type": "POST",
    "url": "/api/sitio",
    "title": "Guardar Sitio",
    "group": "Sitios",
    "description": "<p>Se crea un sitio para el listado. Para esto es necesario mandar token Y validar que tenga permisos. Por ahora cualquiera puede hacerlo, pero a futuro eso.</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/sitio",
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
            "description": "<p>maxlength:190 required <em>not null</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id_categoria",
            "description": "<p>maxlength:10 required <em>not null</em></p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "descripcion",
            "description": "<p>maxlength:5000 <em>opcional</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>maxlength:190 <em>opcional</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>maxlength:190 <em>opcional</em></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>latitud del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>fecha de creacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "Updated_at",
            "description": "<p>fecha de su ultima actualizacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    id:1,\n    nombre:\"Nombre\",\n    descripcion:\"descripcion\",\n    longitud:\"123546\",\n    latitud:\"426456\",\n    created_at:\"2017-06-27 20:00:00\",\n    updated_at:\"2017-06-27 20:00:00\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/sitio"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Validación fallida</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>No se registro</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Sitios",
    "name": "PostApiSitio"
  },
  {
    "type": "POST",
    "url": "/api/sitio",
    "title": "Guardar Sitio",
    "group": "Sitios",
    "description": "<p>Se crea un sitio para el listado. Para esto es necesario mandar token Y validar que tenga permisos. Por ahora cualquiera puede hacerlo, pero a futuro eso.</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/sitio",
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
            "description": "<p>maxlength:190 required <em>not null</em></p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "descripcion",
            "description": "<p>maxlength:5000 <em>opcional</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>maxlength:190 <em>opcional</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>maxlength:190 <em>opcional</em></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>latitud del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>fecha de creacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "Updated_at",
            "description": "<p>fecha de su ultima actualizacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    id:1,\n    nombre:\"Nombre\",\n    descripcion:\"descripcion\",\n    longitud:\"123546\",\n    latitud:\"426456\",\n    created_at:\"2017-06-27 20:00:00\",\n    updated_at:\"2017-06-27 20:00:00\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/api/sitio"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Validación fallida</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>No se registro</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Sitios",
    "name": "PostApiSitio"
  },
  {
    "type": "POST",
    "url": "/api/sitio",
    "title": "Guardar Sitio",
    "group": "Sitios",
    "description": "<p>Se crea un sitio para el listado. Para esto es necesario mandar token Y validar que tenga permisos. Por ahora cualquiera puede hacerlo, pero a futuro eso.</p>",
    "version": "0.1.0",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/index.php/api/sitio",
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
            "description": "<p>maxlength:190 required <em>not null</em></p>"
          },
          {
            "group": "Parameter",
            "type": "text",
            "optional": false,
            "field": "descripcion",
            "description": "<p>maxlength:5000 <em>opcional</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>maxlength:190 <em>opcional</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>maxlength:190 <em>opcional</em></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "descripcion",
            "description": "<p>Descripción del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>Longitud del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>latitud del sitio</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "created_at",
            "description": "<p>fecha de creacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "Updated_at",
            "description": "<p>fecha de su ultima actualizacion <em>format(&quot;YYYY-MM-dd HH:ii:ss&quot;)</em></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de Éxito:",
          "content": "HTTP/1.1 200 OK\n{\n    id:1,\n    nombre:\"Nombre\",\n    descripcion:\"descripcion\",\n    longitud:\"123546\",\n    latitud:\"426456\",\n    created_at:\"2017-06-27 20:00:00\",\n    updated_at:\"2017-06-27 20:00:00\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/index.php/api/sitio"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Validación fallida</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>No se registro</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Sitios",
    "name": "PostApiSitio"
  },
  {
    "type": "DELETE",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Eliminar a un usuario",
    "group": "Usuarios",
    "description": "<p>Manda la id del usuario que deseamos eliminar del sistema y el token que nos válida como usuario logeado</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/usuarios/357?token=ddffef&fsfdsf/ffdsf",
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
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/usuarios/1?token={token}"
      }
    ],
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
    "groupTitle": "Usuarios",
    "name": "DeleteApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "DELETE",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Eliminar a un usuario",
    "group": "Usuarios",
    "description": "<p>Manda la id del usuario que deseamos eliminar del sistema y el token que nos válida como usuario logeado</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/usuarios/357?token=ddffef&fsfdsf/ffdsf",
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
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "DeleteApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "DELETE",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Eliminar a un usuario",
    "group": "Usuarios",
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
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "DeleteApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "GET",
    "url": "/api/usuarios",
    "title": "Obtener todos los usuarios regustrados",
    "group": "Usuarios",
    "description": "<p>Optener Todos los usuarios registrados, usando el token para saber que es un usuario logeado, y autorizado para acceder a ese recurso</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/usuarios",
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
        "url": "https://quehaypahacer.nabu.com.co/api/usuarios"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno.</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Usuarios",
    "name": "GetApiUsuarios"
  },
  {
    "type": "GET",
    "url": "/api/usuarios",
    "title": "Obtener todos los usuarios regustrados",
    "group": "Usuarios",
    "description": "<p>Optener Todos los usuarios registrados, usando el token para saber que es un usuario logeado, y autorizado para acceder a ese recurso</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/usuarios",
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
        "url": "http://quehaypahacer.nabu.com.co/api/usuarios"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "GetApiUsuarios"
  },
  {
    "type": "GET",
    "url": "/api/usuarios",
    "title": "Obtener todos los usuarios regustrados",
    "group": "Usuarios",
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
            "field": "500",
            "description": "<p>Error interno.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "GetApiUsuarios"
  },
  {
    "type": "get",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Obtener un usuario",
    "group": "Usuarios",
    "description": "<p>Se ingresa la id del usuario que deseamos obtener, y el token que nos valide como usuario logrado</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/usuarios/854?token=ddffef&fsfdsf/ffdsf",
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
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/usuarios/1?token={token}"
      }
    ],
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
    "groupTitle": "Usuarios",
    "name": "GetApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "get",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Obtener un usuario",
    "group": "Usuarios",
    "description": "<p>Se ingresa la id del usuario que deseamos obtener, y el token que nos valide como usuario logrado</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/usuarios/854?token=ddffef&fsfdsf/ffdsf",
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
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "GetApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "get",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Obtener un usuario",
    "group": "Usuarios",
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
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "GetApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "Login de aplicacion",
    "group": "Usuarios",
    "description": "<p>login del usuario para obtener su token de sesión. Al momento</p>",
    "version": "0.1.4",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/login",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>UsuarioID si fue registrado por FaceBook <strong>Solo se coloca si se registro por red Social</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipoAutenticacion",
            "description": "<p>&quot;FB&quot;=FaceBook ; &quot;IG&quot; <strong>Solo se coloca si se registro por red Social</strong></p>"
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
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tipoAutenticacion",
            "description": "<p>&quot;FB&quot;, &quot;IG&quot;, &quot;TW&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"token\":\"tokenDeSession\",\n \"id\":1,\n \"created_at\":\"2017-06-14 00:00:00\",\n \"updated_at\":\"2017-06-23 00:00:00\",\n \"user\":\"LuisPlata\",\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\",\n \"tipoAutenticacion\": \"FB\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/login"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Usuario no encontrado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Contraseña invalida.</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Usuarios",
    "name": "PostApiLogin"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "Login de aplicacion",
    "group": "Usuarios",
    "description": "<p>login del usuario para obtener su token de sesión. Al momento</p>",
    "version": "0.1.3",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/login",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>UsuarioID si fue registrado por FaceBook <strong>Solo se coloca si se registro por red Social</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipoAutenticacion",
            "description": "<p>&quot;FB&quot;=FaceBook ; &quot;IG&quot; <strong>Solo se coloca si se registro por red Social</strong></p>"
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
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/login"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Usuario no encontrado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Contraseña invalida.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PostApiLogin"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "Login de aplicacion",
    "group": "Usuarios",
    "description": "<p>login del usuario para obtener su token de sesión</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/login",
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
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/login"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Usuario no encontrado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Contraseña invalida.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PostApiLogin"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "Login de aplicacion",
    "group": "Usuarios",
    "description": "<p>login del usuario para obtener su token de sesión</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/login",
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
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/api/login"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Usuario no encontrado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Contraseña invalida.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PostApiLogin"
  },
  {
    "type": "POST",
    "url": "/api/login",
    "title": "Login de aplicacion",
    "group": "Usuarios",
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
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/index.php/api/login"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Usuario no encontrado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Contraseña invalida.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PostApiLogin"
  },
  {
    "type": "POST",
    "url": "/api/usuarios",
    "title": "Registro de usuario",
    "group": "Usuarios",
    "description": "<p>Ruta para registrar un usuario en sistema para posteriormente hacer login y optener un token</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/usuarios",
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
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": "<p>MaxLength:50 <strong>Unique</strong> <strong>Required</strong></p>"
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
            "description": "<p>permitidos: &quot;Hombre&quot;, &quot;Mujer&quot; <strong>Required</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "telefono",
            "description": "<p>MaxLength:50</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": "<p>MaxLength:50</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>MaxLength:190 <strong>Unique</strong> <strong>Required</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>MaxLength:100</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pass",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "foto",
            "description": "<p>MaxLength:190 Foto para usarla de perfil</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userID",
            "description": "<p>MaxLength:190 ID de la red social en la que se logeo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipoAutenticacion",
            "description": "<p>&quot;FB&quot;=FaceBook, &quot;IG&quot;=Instagram, &quot;TW&quot;=Twiter, &quot;&quot;=Normal</p>"
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
            "description": "<p>Format(&quot;YYYY-MM-DD HH:ii:ss&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "foto",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tipoAutenticacions",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n \"id\":1,\n \"created_at\":\"2017-06-14 00:00:00\",\n \"updated_at\":\"2017-06-23 00:00:00\",\n \"nombre\":\"Luis Enrique\",\n \"apellido\":\"Plata Osorio\",\n \"cedula\":\"1143346134\",\n \"fecha_nacimiento\":\"1990-11-10\",\n \"sexo\":\"Hombre\",\n \"telefono\":\"56510386\",\n \"movil\":\"3015086264\",\n \"email\":\"www.luisplata@gmail.com\",\n \"foto\":\"https://servidor.com/fotoDePerfil\",\n \"tipoAutenticacion\":\"FB\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/usuarios"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error Interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>ErrorDeParametros Usualmente relacionado por ingresar datos de una persona ya registrada</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>No guardo el registro.</p>"
          }
        ]
      }
    },
    "filename": "routes/api.php",
    "groupTitle": "Usuarios",
    "name": "PostApiUsuarios"
  },
  {
    "type": "POST",
    "url": "/api/usuarios",
    "title": "Registro de usuario",
    "group": "Usuarios",
    "description": "<p>Ruta para registrar un usuario en sistema para posteriormente hacer login y optener un token</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/usuarios",
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
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": "<p>MaxLength:50 <strong>Unique</strong></p>"
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
            "description": "<p>MaxLength:50</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": "<p>MaxLength:50 <strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>MaxLength:190 <strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>MaxLength:100 <strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pass",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>MaxLength:190 Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>MaxLength:190 Opcional</p>"
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
    "sampleRequest": [
      {
        "url": "http://quehaypahacer.nabu.com.co/api/usuarios"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Error Interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>ErrorDeParametros Usualmente relacionado por ingresar datos de una persona ya registrada</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>No guardo el registro.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PostApiUsuarios"
  },
  {
    "type": "POST",
    "url": "/api/usuarios",
    "title": "Registro de usuario",
    "group": "Usuarios",
    "description": "<p>Ruta para registrar un usuario en sistema para posteriormente hacer login y optener un token</p>",
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
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "apellido",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cedula",
            "description": "<p>MaxLength:50 <strong>Unique</strong></p>"
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
            "description": "<p>MaxLength:50</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movil",
            "description": "<p>MaxLength:50 <strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>MaxLength:190 <strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>MaxLength:100 <strong>Unique</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pass",
            "description": "<p>MaxLength:190</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "longitud",
            "description": "<p>MaxLength:190 Opcional</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "latitud",
            "description": "<p>MaxLength:190 Opcional</p>"
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
            "field": "500",
            "description": "<p>Error Interno.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "501",
            "description": "<p>ErrorDeParametros Usualmente relacionado por ingresar datos de una persona ya registrada</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>No guardo el registro.</p>"
          }
        ]
      }
    },
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PostApiUsuarios"
  },
  {
    "type": "PUT",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Actualizacion de usuario",
    "group": "Usuarios",
    "description": "<p>Ingresas la ID de la persona que quieres modificar y el token que te valide como usuario logeado</p>",
    "version": "0.1.2",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "https://quehaypahacer.nabu.com.co/api/usuarios/144?token=bcabjciasjbcioahbcu546%&fdff",
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
    "sampleRequest": [
      {
        "url": "https://quehaypahacer.nabu.com.co/api/usuarios/1?token={token}"
      }
    ],
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
    "groupTitle": "Usuarios",
    "name": "PutApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "PUT",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Actualizacion de usuario",
    "group": "Usuarios",
    "description": "<p>Ingresas la ID de la persona que quieres modificar y el token que te valide como usuario logeado</p>",
    "version": "0.1.1",
    "examples": [
      {
        "title": "Ejemplo de Uso:",
        "content": "http://quehaypahacer.nabu.com.co/api/usuarios/144?token=bcabjciasjbcioahbcu546%&fdff",
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
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PutApiUsuariosNumeroIdTokenAquivaeltoken"
  },
  {
    "type": "PUT",
    "url": "/api/usuarios/{Numero:id}?token=AquiVaElToken",
    "title": "Actualizacion de usuario",
    "group": "Usuarios",
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
    "filename": "routes/historial.php",
    "groupTitle": "Usuarios",
    "name": "PutApiUsuariosNumeroIdTokenAquivaeltoken"
  }
] });
