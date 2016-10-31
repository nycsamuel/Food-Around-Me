const router  = require('express').Router();
const yelp    = require('../services/yelp');


router.post('/', yelp.search, yelp.getLatLng, (req, res) => {
  // console.log('results *** ', res.yelpResults.businesses);
  res.render('google/map', {
    results               : res.yelpResults.businesses || [],
    fav                   : res.favorites || [],
    GOOGLE_MAP_API_KEY    : process.env.GOOGLE_MAP_API_KEY,
    latlngArray           : res.latlng || [],
  });
});

module.exports = router;
