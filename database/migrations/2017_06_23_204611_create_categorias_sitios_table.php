<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriasSitiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorias_sitios', function (Blueprint $table) {
            $table->timestamps();
            $table->integer("categorias_id");
            $table->integer("sitios_id");
            $table->time("hora_inicio")->nullable();
            $table->time("hora_fin")->nullable();
            $table->primary(["categorias_id","sitios_id"]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categorias_sitios');
    }
}
