<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/guest.js') }}" defer></script>
    @inertiaHead
  </head>
  <body>
      {{-- to rename the app id and connect it with the guest.js --}}
    <div id="guest" data-page="{{ json_encode($page) }}"></div>
  </body>
</html>
