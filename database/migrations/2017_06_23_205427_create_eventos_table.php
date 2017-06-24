<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventos', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string("nombre");
            $table->text("descripcion")->nullable();
            $table->date("fecha");
            $table->enum("estado",["abierto","cerrado"])->default("abierto");
            $table->string("cover")->nullable();
            
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
        Schema::dropIfExists('eventos');
    }
}
