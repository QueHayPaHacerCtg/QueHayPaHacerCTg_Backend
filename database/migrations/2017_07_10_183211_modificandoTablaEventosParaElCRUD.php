<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModificandoTablaEventosParaElCRUD extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('eventos', function (Blueprint $table) {
            //
            $table->dropColumn("fecha");
            $table->dateTime("fecha_hora_inicio");
            $table->dateTime("fecha_hora_final");
            $table->string("tipo")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('eventos', function (Blueprint $table) {
            //
            $table->dropColumn(["fecha_hora_inicio","fecha_hora_final","tipo"]);
            $table->date("fecha");
        });
    }
}
