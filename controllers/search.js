const router  = require('express').Router();
const yelp    = require('../services/yelp');
// const users   = require('../models/users');

// router.get('/', users.getFav, (req, res) => {
//   res.render('index', {
//     fav: res.results || [],
//     results: res.results || [],
//   });
// });

router.post('/', yelp.search, (req, res) => {
  res.render('yelp/index', {
    results:   res.results.businesses || [],
    fav: res.fav || [],
  });
});

module.exports = router;
