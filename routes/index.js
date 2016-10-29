const router  = require('express').Router();
// const fav   = require('../models/fav');
// const speech  = require('../services/speech');

router.get('/', (req, res) => {
  // console.log(res.results.businesses);
  res.render('yelp/index', {
    results:   res.results || [],
    fav: res.fav || [],
  });
});

module.exports = router;
