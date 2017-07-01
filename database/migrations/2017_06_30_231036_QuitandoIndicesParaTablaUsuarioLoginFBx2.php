<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class QuitandoIndicesParaTablaUsuarioLoginFBx2 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('usuarios', function (Blueprint $table) {
            //
            $table->dropUnique('usuarios_movil_unique');
            $table->dropUnique('usuarios_user_unique');
            $table->dropColumn(['pass',"user"]);
        });
        
        Schema::table('usuarios', function (Blueprint $table) {
            $table->string("pass")->nullable();
            $table->string("user")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('usuarios', function (Blueprint $table) {
            //
            $table->unique('movil');
            $table->unique('user');
        });
    }

}
