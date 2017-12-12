
$(document).ready(function () {

    var map = L.map('mapid').setView([42.4396, 25.6366], 16);
    var osmLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    });

    var googleSatLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);

    var mapboxLayer = L.tileLayer('https://{s}.tiles.mapbox.com/styles/v1/openstreetmap/cj8gojt0i1eau2rnn7q4mdgu7/tiles/256/{z}/{x}/{y}?access_token={access_token}', {
        subdomains: ['a', 'b', 'c', 'd'],
        access_token: 'pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJhNVlHd29ZIn0.ti6wATGDWOmCnCYen-Ip7Q'
    });

    var tileServerUrl = 'http://' + window.location.hostname + '/tiles'

    var layerBedechka = L.tileLayer(tileServerUrl + '/StaraZagora/2017_12_10_Bedechka/{z}/{x}/{-y}.png', {
        maxZoom: 23
    }).addTo(map);

    var layerZagorka = L.tileLayer(tileServerUrl + '/StaraZagora/2017_12_10_Zagorka/{z}/{x}/{-y}.png', {
        maxZoom: 23
    }).addTo(map);

    var layerKaufland1 = L.tileLayer(tileServerUrl + '/StaraZagora/2017_12_10_Kaufland_1/{z}/{x}/{-y}.png', {
        maxZoom: 23
    }).addTo(map);

    var layerKaufland2 = L.tileLayer(tileServerUrl + '/StaraZagora/2017_12_10_Kaufland_2/{z}/{x}/{-y}.png', {
        maxZoom: 23
    }).addTo(map);

    L.control.scale().addTo(map);
    L.control.layers({
        'OpenStreetMap': osmLayer,
        'Google': googleSatLayer,
        'Mapbox': mapboxLayer
    }, {
        'Загорка' : layerZagorka,
        'Бедечка' : layerBedechka,
        'Кауфланд юг' : layerKaufland1,
        'Кауфланд север' : layerKaufland2,
    }).addTo(map);

    var hash = new L.Hash(map);

});
