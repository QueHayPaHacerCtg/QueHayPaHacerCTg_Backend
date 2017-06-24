<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservas', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->date("fecha");
            $table->enum("checkin",["Si","No"])->default("No");
            
            $table->integer("usuarios_id")->unsigned();
            $table->foreign('usuarios_id')
                ->references('id')->on('usuarios')
                ->onDelete('cascade');
            
            $table->integer("sitios_id")->unsigned();
            $table->foreign('sitios_id')
                ->references('id')->on('sitios')
                ->onDelete('cascade');
            
            $table->integer("categorias_id")->unsigned();
            $table->foreign('categorias_id')
                ->references('id')->on('categorias')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservas');
    }
}
