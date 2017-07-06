<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModificandoTablaResevaParaColocarlaCorrectamente extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //eliminando llave foranea de categoria
        //add: cantidad_personas, 
        Schema::table('reservas', function (Blueprint $table) {
            //eliminacion
            $table->dropForeign(["categorias_id"]);
            $table->dropColumn(['categorias_id']);
            //adicion
            $table->integer("cantidadPersonas");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('reservas', function (Blueprint $table) {
            //
            $table->integer('categorias_id')->unsigned();
            $table->foreign('categorias_id')
                ->references('id')->on('categorias')
                ->onDelete('cascade');
            
            $table->dropColumn(['cantidadPersonas']);
        });
    }
}
