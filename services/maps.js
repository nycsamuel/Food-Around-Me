const fetch           = require('node-fetch');

function setMarkers(req, res, next) {
  // console.log('yelp results *****', res.yelpResults.businesses);

  // array of results
  const businesses = res.yelpResults.businesses;
  // get latitude & longitude of each businesses
  const latlngArray = [];
  businesses.forEach(business => {
    let lat     = business.location.coordinate.latitude;
    let lng     = business.location.coordinate.longitude;
    let latlng  = `${lat},${lng}`;
    latlngArray.push(latlng);
  });

  console.log('latlng ***', latlngArray);

  next();
}

module.exports = {
  setMarkers,
};
