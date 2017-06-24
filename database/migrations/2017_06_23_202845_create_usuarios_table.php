<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string("user",100)->unique();
            $table->string("pass");
            $table->text("token")->nullable();
            $table->string("longitud")->nullable();
            $table->string("latitud")->nullable();
            $table->string("nombre")->nullable();
            $table->string("apellido")->nullable();
            $table->string("cedula",50)->unique();
            $table->date("fecha_nacimiento")->nullable();
            $table->enum("sexo",["Hombre","Mujer"])->default("Hombre");
            $table->string("telefono",50)->nullable();
            $table->string("movil",50)->nullable()->unique();
            $table->string("email")->unique();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
