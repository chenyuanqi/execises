<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'v1'], function () {
    // demo route
    Route::group(['prefix' => 'demo'], function() {
        Route::get('', ['uses' => 'Api\DemoController@index']);
        Route::get('{id}', ['uses' => 'Api\DemoController@show']);
        Route::post('', ['uses' => 'Api\DemoController@store']);
        Route::put('{id}', ['uses' => 'Api\DemoController@update']);
        Route::delete('{id}', ['uses' => 'Api\DemoController@delete']);
    });

});

