/* google map api doesn't work when script is ran after DOM load */
console.log('mapscript loaded!');

let map;
function initMap() {
  // General Assembly
  const ga = {
    lat         : 40.7400615564274,
    lng         : -73.98996520048968,
  };

  // initialize map to default => GA
  map = new google.maps.Map(document.getElementById('map'), {
    center      : ga,
    zoom        : 17,
  });
  const infoWindow = new google.maps.InfoWindow({map: map});

  // if browser supports geolocation and user gives permission
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat     : position.coords.latitude,
        lng     : position.coords.longitude,
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('you are here');
      map.setCenter(pos);
      const marker = new google.maps.Marker({
        position    : pos,
        map         : map,
      });
    }, () => {
      console.log('geolocation failed...');
    });
  } // if
} // initMap


$(document).ready(() => {
  console.log('after dom load');
});
