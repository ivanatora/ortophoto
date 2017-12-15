
$(document).ready(function () {

    var map = L.map('mapid').setView([centerLat, centerLon], centerZoom);
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

    L.control.scale().addTo(map);
    var hash = new L.Hash(map);

    if (layers == 'StaraZagora') {
        var layerSzBedechka = L.tileLayer(tileServerUrl + '/2017_12_10_Bedechka/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerSzZagorka = L.tileLayer(tileServerUrl + '/2017_12_10_Zagorka/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerSzKaufland1 = L.tileLayer(tileServerUrl + '/2017_12_10_Kaufland_1/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerSzKaufland2 = L.tileLayer(tileServerUrl + '/2017_12_10_Kaufland_2/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        L.control.layers({
            'OpenStreetMap': osmLayer,
            'Google': googleSatLayer,
            'Mapbox': mapboxLayer
        }, {
            'Загорка': layerSzZagorka,
            'Бедечка': layerSzBedechka,
            'Кауфланд юг': layerSzKaufland1,
            'Кауфланд север': layerSzKaufland2,
        }).addTo(map);
    } else if (layers == 'Plovdiv') {
        var layerPlovdivBilla = L.tileLayer(tileServerUrl + '/2017_11_26_Billa_Grobishte/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivBazilika = L.tileLayer(tileServerUrl + '/2017_12_02_Bazilika/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivCentral = L.tileLayer(tileServerUrl + '/2017_12_02_Central_Square_fixed/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivMarica1 = L.tileLayer(tileServerUrl + '/2017_12_12_Marica_1/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivMarica2 = L.tileLayer(tileServerUrl + '/2017_12_12_Marica_2/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivDondukov = L.tileLayer(tileServerUrl + '/2017_12_13_Dondukov_Garden/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivCenter1 = L.tileLayer(tileServerUrl + '/2017_12_14_Plovdiv_Central_1/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivCenter2 = L.tileLayer(tileServerUrl + '/2017_12_14_Plovdiv_Central_2/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        var layerPlovdivOldTown = L.tileLayer(tileServerUrl + '/2017_12_15_Plovdiv_Old_Town/{z}/{x}/{-y}.png', {
            maxZoom: 23
        }).addTo(map);

        L.control.layers({
            'OpenStreetMap': osmLayer,
            'Google': googleSatLayer,
            'Mapbox': mapboxLayer
        }, {
            'Била 1': layerPlovdivBilla,
            'Базилика': layerPlovdivBazilika,
            'Централна поща': layerPlovdivCentral,
            'Марица 1': layerPlovdivMarica1,
            'Марица 2': layerPlovdivMarica2,
            'Дондуков парк': layerPlovdivDondukov,
            'Център 1': layerPlovdivCenter1,
            'Център 2': layerPlovdivCenter2,
            'Стар Град': layerPlovdivOldTown,
        }).addTo(map);
    }

});
