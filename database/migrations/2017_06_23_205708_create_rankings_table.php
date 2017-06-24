<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRankingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rankings', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->datetime("fecha_hora");
            $table->integer("calificacion");
            
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
        Schema::dropIfExists('rankings');
    }
}
