const router  = require('express').Router();
// const yelp    = require('../services/yelp');
const fav   = require('../models/fav');

router.get('/', fav.getFav, (req, res) => {
  res.render('yelp/index', {
    results: res.results || [],
    fav: res.favorites || [],
  });
});

router.post('/', fav.saveFav, (req, res) => {
  res.redirect('/favorites');
});

router.delete('/:id', fav.deleteFav, (req, res) => {
  res.redirect('/favorites');
});

module.exports = router;
