<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ColocandoUniqueElNombreDelSitio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sitios', function (Blueprint $table) {
            //
            $table->string("nombre")->unique()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sitios', function (Blueprint $table) {
            //
            $table->dropUnique('sitios_nombre_unique');
            //$table->string("nombre")->change();
        });
    }
}
