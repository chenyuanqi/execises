<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDemosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demos', function (Blueprint $table){
            $table->increments('id');
            $table->string('email', 60)
                  ->unique()
                  ->comment('电子邮件');
            $table->string('name', 255)
                  ->comment('用户名');
            $table->string('phone', 20)
                  ->comment('联系电话');
            $table->string('address', 255)
                  ->comment('家庭住址');
            $table->text('description')
                  ->comment('背景描述');
            $table->boolean('is_activate')
                  ->comment('是否激活，默认 0 为不激活，1 为激活');
            $table->unsignedInteger('yearly_salary')
                  ->comment('年薪/百万');
            $table->string('operator', 255)
                  ->comment('操作人');
            $table->date('birthday')
                  ->comment('出生日期');
            $table->timestamp('deleted_at')
                  ->comment('删除时间');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demos');
    }
}
