fav router  = require('express').Router();
const fav   = require('../models/fav');

router.get('/', (req, res) => {
  // console.log(res.results.businesses);
  res.render('yelp/index', {
    results:   res.results || [],
    fav: res.fav || [],
  });
});

// router.get('/', fav.getFav, (req, res) => {
//   res.render('index', {
//     results: res.results || [],
//     fav: res.fav || [],
//   });
// });

module.exports = router;
