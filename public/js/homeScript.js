// DOM loaded
$(document).ready(() => {
  console.log('script loaded!');
  // check if browser supports geolocation
  if ('getlocation' in navigator) {
    navigator.geolocation.getCurrentPosition(pos => {
      const currentLat = pos.coords.latitude;
      const currentLng = pos.coords.longitude;

      // make ajax request to send current geolocation to node
      $.post('/search', {
        lat   : currentLat,
        lng   : currentLng,
      });
    });
  } else {
    console.log('geolocation not available');
  }





});
