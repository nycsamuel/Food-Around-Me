// DOM loaded
$(document).ready(() => {
  let map;
  const gMap = $('#map');

  function initMap() {
    // initialize map to default => GA
    const ga = {
      lat         : 40.7400615564274,
      lng         : -73.98996520048968,
    };
    map = new google.maps.Map(gMap, {
      center      : ga,
      zoom        : 12,
    });
    // markers
    const marker = new google.maps.Marker({
      position    : ga,
      map         : map,
    });
  }
  
});
