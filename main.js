$( document ).ready(function() {
  $('#submit').click(() => {
    let findInput = $('#find').val() || 'Peets';
    let nearInput = $('#near').val() || 'San Francisco, CA'
    mapCurrent(findInput, nearInput);
  });
});


// ************************************************
// Helper Function
// ************************************************

let map;
let service;
let infowindow;

function initMap() {
  const pyrmont = new google.maps.LatLng(37.7749295, -122.4194155);

  map = new google.maps.Map($('#map')[0], {
    center: pyrmont,
    zoom: 13
  });

};

function mapCurrent(findInput, nearInput) {
  getLatLng(nearInput, function(loc){
    console.log('--> loc: ', loc);
    const pyrmont = new google.maps.LatLng(loc.lat, loc.lng);

    map = new google.maps.Map($('#map')[0], {
      center: pyrmont,
      zoom: 13
    });

    const request = {
      location: pyrmont,
      radius: '2000',
      query: findInput
    };

    infowindow = new google.maps.InfoWindow();

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  });
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      let place = results[i];
      console.log('place: ', place);
      createMarker(results[i]);
    }
  }
};

function createMarker(place) {
  const placeLoc = place.geometry.location;

  const image = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };

  const marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    console.log(place);
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
};

function getLatLng(nearInput, callback) {
  $.getJSON( {
    url  : 'https://maps.googleapis.com/maps/api/geocode/json',
    data : {
      sensor  : false,
      address : nearInput
    },
    success : function( data, textStatus ) {
      callback(data.results[0].geometry.location);
    }
  });
};