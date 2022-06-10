<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" id ="meta_token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Styles -->
        {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}
        <link rel="shortcut icon" href="{{ asset('/favicon.png') }}">
        <link  rel="stylesheet" href="{{ asset('css/app.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="{{ mix('js/vendor.js') }}" defer></script>
        <script src="{{ mix('js/manifest.js') }}" defer></script>
        @inertiaHead

    </head>
    <body class="font-sans antialiased">
        @inertia
        <script src={{mix('app/assets/js/jquery.min.js')}}></script>
{{--        <script src={{mix('app/assets/js/plugins.js')}}></script>--}}
{{--        <script src={{mix('app/assets/js/scripts.js')}}></script>--}}
{{--        <script src={{mix('app/assets/js/dashboard.js')}}></script>--}}
    </body>
</html>

