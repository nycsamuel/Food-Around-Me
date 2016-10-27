const router  = require('express').Router();
const yelp    = require('../services/yelp');


router.post('/', yelp.search, (req, res) => {
  res.render('index', {
    results:   res.results.businesses || [],
  });
});

module.exports = router;
