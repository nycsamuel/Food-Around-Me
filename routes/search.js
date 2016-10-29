const router  = require('express').Router();
const yelp    = require('../services/yelp');
const fav   = require('../models/fav');

// router.get('/', fav.getFav, (req, res) => {
//   res.render('index', {
//     fav: res.results || [],
//     results: res.results || [],
//   });
// });

router.post('/', yelp.search, fav.getFav, (req, res) => {
  res.render('yelp/index', {
    results:   res.results.businesses || [],
    fav: res.fav || [],
  });
});

module.exports = router;
