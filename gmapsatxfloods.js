var map;

$(document).ready(function() {
    $('input[type=radio][name=status]').change(function() {
      var selectedStatus = this.value;
      map.data.setStyle(function(feature) {
        var visible = selectedStatus === 'all' || selectedStatus === feature.getProperty('status');

        if(visible) {
          if (feature.getProperty('status') == 'on') {
            return onStyle;
          };
          if (feature.getProperty('status') == 'off') {
            return offStyle;
          };
        };
        
        return /** @type {google.maps.Data.StyleOptions} */({
          visible: visible
        });
      });
    });
});

var off_icon_symbol;
var on_icon_symbol;
var marker_shape;
var onStyle;
var offStyle;

function initMap() {
  off_icon_symbol = { 
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: 0.8,
    strokeColor: '#fff',
    strokeOpacity: 0.5,
    strokeWeight: 0.2,
    scale: 10,
  };
  on_icon_symbol = { 
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'green',
    fillOpacity: 0.8,
    strokeColor: '#fff',
    strokeOpacity: 0.5,
    strokeWeight: 0.2,
    scale: 10,
  };
  marker_shape = {coords: [0,0,10], type: "circle"}
  onStyle = ({
    shape: marker_shape,
    icon: on_icon_symbol,
  });
  offStyle = ({
    shape: marker_shape,
    icon: off_icon_symbol,
  });

  map = new google.maps.Map(document.getElementById('googlemap'), {
    zoom: 13,
    center: {lat: 30.264792, lng: -97.747214},
  });
  map.data.loadGeoJson("https://briaguya.github.io/leafletatxfloods/crossings.json");
  map.data.setStyle(function(feature) {    
    if (feature.getProperty('status') == 'on') {
      return onStyle;
    };
    if (feature.getProperty('status') == 'off') {
      return offStyle;
    };
    return /** @type {google.maps.Data.StyleOptions} */({
      visible: false,
    });
  });
}