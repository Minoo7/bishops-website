$(document).ready(function() {
    $('#myModal1').click(function() {
        $('#myModal').reveal();
        google.maps.event.trigger(map, 'resize');
    });
});

function clickres() {
    $('#myModal').reveal();
    google.maps.event.trigger(map, 'resize');
}

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(39.739318, -89.266507),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);
}
