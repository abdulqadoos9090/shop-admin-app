<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <link rel="stylesheet" href="{{asset('css/all.min.css')}}">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"/>

</head>
<body>
@routes
@inertia
<script src="{{asset('js/all.min.js')}}"></script>
<script src="{{ mix('/js/app.js') }}" defer></script>
</body>
</html>
