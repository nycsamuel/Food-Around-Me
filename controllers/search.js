const router  = require('express').Router();
const yelp    = require('../services/yelp');


router.post('/', yelp.search, (req, res) => {
  res.render('home', {
    results:   res.results.businesses || [],
  });
});

module.exports = router;
