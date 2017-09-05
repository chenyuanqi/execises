<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel5.5-repository</title>

        <style src="{{ mix('css/app.css') }}"></style>
        <script src="{{ mix('js/app.js') }}"></script>
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
    </body>
</html>
