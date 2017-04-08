var mymap = L.map('mapid').setView([30.264792,-97.747214], 13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapbox.mapbox-streets-v7',
    accessToken: 'pk.eyJ1IjoiYnJpYWd1eWEiLCJhIjoiY2oxOHNueHkwMDd4ZDJxb2RseG44a2t4ZyJ9.foLBigmM6PnyXE9nLipZRA'
}).addTo(mymap);