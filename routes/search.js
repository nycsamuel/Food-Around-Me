const router              = require('express').Router();
const yelp                = require('../services/yelp');
const { authenticate }    = require('../lib/auth');


router.post('/', authenticate, yelp.search, yelp.getLatLng, (req, res) => {
  // console.log('results *** ', res.yelpResults.businesses);
  res.render('google/map', {
    results               : res.yelpResults.businesses || [],
    fav                   : res.favorites || [],
    GOOGLE_MAP_API_KEY    : process.env.GOOGLE_MAP_API_KEY,
    latlngArray           : res.latlng || [],
    user                  : res.user,
  });
});

module.exports = router;
