/* google map api doesn't work when script is ran after DOM load */
console.log('mapscript loaded!');

let map;
function initMap() {
  // General Assembly
  const ga = {
    lat         : 40.7400615564274,
    lng         : -73.98996520048968,
  };

  // get latlng of businesses from hidden input
  const latlng_1      = $('#result-1').attr('value');
  const latlng_2      = $('#result-2').attr('value');
  const latlng_3      = $('#result-3').attr('value');

  // get results' info
  const latlng_1_name = $('#result-1-name').attr('value');
  const latlng_1_addr = $('#result-1-addr').attr('value');
  const latlng_2_name = $('#result-2-name').attr('value');
  const latlng_2_addr = $('#result-2-addr').attr('value');
  const latlng_3_name = $('#result-3-name').attr('value');
  const latlng_3_addr = $('#result-3-addr').attr('value');

  // turn results' info to div for infoWindow
  const content1 = `<div><h3>${latlng_1_name}</h3><p>${latlng_1_addr}</p></div>`;
  const content2 = `<div><h3>${latlng_2_name}</h3><p>${latlng_2_addr}</p></div>`;
  const content3 = `<div><h3>${latlng_3_name}</h3><p>${latlng_3_addr}</p></div>`;

  // convert latlng string into latlng obj
  const latlng_1_obj = {
    lat         : parseFloat(latlng_1.split(',')[0]),
    lng         : parseFloat(latlng_1.split(',')[1]),
  };
  const latlng_2_obj = {
    lat         : parseFloat(latlng_2.split(',')[0]),
    lng         : parseFloat(latlng_2.split(',')[1]),
  };
  const latlng_3_obj = {
    lat         : parseFloat(latlng_3.split(',')[0]),
    lng         : parseFloat(latlng_3.split(',')[1]),
  };

  // console.log('latlng123 *** ', latlng_1, latlng_2, latlng_3);

  // initialize map to default => GA
  map = new google.maps.Map(document.getElementById('map'), {
    center      : ga,
    zoom        : 12,
  });

  // info window of the results
  const infoWindow = new google.maps.InfoWindow({map: map});
  const infoWindow1 = new google.maps.InfoWindow({map: map});
  const infoWindow2 = new google.maps.InfoWindow({map: map});
  const infoWindow3 = new google.maps.InfoWindow({map: map});

  // const image = 'https://cdn2.iconfinder.com/data/icons/places-4/100/food_place_marker_location_restaurant_eat_fork_knife-512.png';

  // if browser supports geolocation and user gives permission
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat     : position.coords.latitude,
        lng     : position.coords.longitude,
      };

      // center on the user's position
      // infoWindow.setPosition(pos);
      // infoWindow.setContent('<h2>You are here</h2>');
      map.setCenter(pos);
      const currLocationMarker = new google.maps.Marker({
        position      : pos,
        map           : map,
        // label         : 'You',
      });

      // set marker for result
      const latlng_1_marker = new google.maps.Marker({
        position      : latlng_1_obj,
        map           : map,
        label         : '1',
        // icon          : image,
      });
      latlng_1_marker.addListener('click', () => {
        map.setZoom(15);
        map.setCenter(latlng_1_marker.getPosition());
        infoWindow1.setPosition(latlng_1_obj);
        infoWindow1.setContent(content1);
      });

      // set marker for result
      const latlng_2_marker = new google.maps.Marker({
        position      : latlng_2_obj,
        map           : map,
        label         : '2',
      });
      latlng_2_marker.addListener('click', () => {
        map.setZoom(15);
        map.setCenter(latlng_2_marker.getPosition());
        infoWindow2.setPosition(latlng_2_obj);
        infoWindow2.setContent(content2);
      });

      // set marker for result
      const latlng_3_marker = new google.maps.Marker({
        position      : latlng_3_obj,
        map           : map,
        label         : '3',
      });
      latlng_3_marker.addListener('click', () => {
        map.setZoom(15);
        map.setCenter(latlng_3_marker.getPosition());
        infoWindow3.setPosition(latlng_3_obj);
        infoWindow3.setContent(content3);
      });

      // when map is clicked
      google.maps.event.addDomListener(map, 'click', () => {
        map.setZoom(12);
      });

      // set polyline to yelp results
      // const pathToResult1 = [pos, latlng_1_obj];
      // const pathToResult2 = [pos, latlng_2_obj];
      // const pathToResult3 = [pos, latlng_3_obj];
      const flightPath = [
        pos,
        latlng_1_obj,
        pos,
        latlng_2_obj,
        pos,
        latlng_3_obj
      ];

      // draw polyline to the businesses
      const pathDraw = new google.maps.Polyline({
        path            : flightPath,
        geodesic        : true,
        strokeColor     : '#FF0000',
        strokeOpacity   : 1.0,
        strokeWeight    : 2,
      });
      pathDraw.setMap(map);
    }, () => {
      console.log('geolocation failed...');
    });
  } // if
} // initMap


// $(document).ready(() => {
//   console.log('after dom load');
// });
