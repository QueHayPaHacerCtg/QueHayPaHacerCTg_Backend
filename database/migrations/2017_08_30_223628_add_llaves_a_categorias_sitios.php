<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLlavesACategoriasSitios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Añadiendo llaves foraneas en categorias_id y sitios_id
        Schema::table('categorias_sitios', function (Blueprint $table) {
            $table->integer('categorias_id')->unsigned()->change();   
            $table->foreign('categorias_id')->references('id')->on('categorias')->onDelete('cascade');
            $table->integer('sitios_id')->unsigned()->change(); 
            $table->foreign('sitios_id')->references('id')->on('sitios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categorias_sitios', function (Blueprint $table) {  
            $table->dropForeign(["categorias_id"]);
            $table->dropForeign(["sitios_id"]);
        });
    }
}
