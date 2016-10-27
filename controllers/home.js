const router  = require('express').Router();
const yelp    = require('../services/yelp');

router.get('/', yelp.search, (req, res) => {
  // console.log(res.results.businesses);
  res.render('home', {
    results:   res.results.businesses,
  });
});

module.exports = router;
