<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Styles -->
        <link rel="shortcut icon" href="{{ asset('/favicon.png') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/admin.js') }}" defer></script>
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <div id="admin" data-page="{{ json_encode($page) }}"></div>
        <div id="portals"/>
    </body>
</html>
