/* google map api doesn't work when script is ran after DOM load */
  console.log('mapscript loaded!');

  let map;
  function initMap() {
    // initialize map to default => GA
    const ga = {
      lat         : 40.7400615564274,
      lng         : -73.98996520048968,
    };
    map = new google.maps.Map(document.getElementById('map'), {
      center      : ga,
      zoom        : 18,
    });
    // markers
    const marker = new google.maps.Marker({
      position    : ga,
      map         : map,
    });
  }
