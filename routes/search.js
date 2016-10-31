const router  = require('express').Router();
const yelp    = require('../services/yelp');
// const fav     = require('../models/fav');
// const gmap    = require('../services/maps');

// router.get('/', fav.getFav, (req, res) => {
//   res.render('index', {
//     fav: res.results || [],
//     results: res.results || [],
//   });
// });

// router.post('/', yelp.search, fav.getFav, (req, res) => {
//   res.render('yelp/index', {
//     results:   res.yelpResults.businesses || [],
//     fav: res.fav || [],
//     GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
//   });
// });


// router.post('/', yelp.search, gmap.setMarkers, (req, res) => {
//   res.render('yelp/index', {
//     results               : res.yelpResults.businesses || [],
//     fav                   : res.fav || [],
//     GOOGLE_MAP_API_KEY    : process.env.GOOGLE_MAP_API_KEY,
//     markers               : res.latlng || [],
//   });
// });


router.post('/', yelp.search, yelp.getLatLng, (req, res) => {
  // console.log('results *** ', res.yelpResults.businesses);
  res.render('google/map', {
    results               : res.yelpResults.businesses || [],
    fav                   : res.fav || [],
    GOOGLE_MAP_API_KEY    : process.env.GOOGLE_MAP_API_KEY,
    latlngArray           : res.latlng || [],
  });
});

module.exports = router;
