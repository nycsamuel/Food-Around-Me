const router  = require('express').Router();
// const yelp    = require('../services/yelp');
const users   = require('../models/users');

router.get('/', users.getFav, (req, res) => {
  res.render('yelp/index', {
    results: res.results || [],
    fav: res.fav || [],
  });
});

router.post('/', users.saveFav, (req, res) => {
  res.redirect('/favorites');
});

router.delete('/:id', users.deleteFav, (req, res) => {
  res.redirect('/favorites');
});

module.exports = router;
