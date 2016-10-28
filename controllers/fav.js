const router  = require('express').Router();
// const yelp    = require('../services/yelp');
const users   = require('../models/users');


router.post('/', users.saveFav, (req, res) => {
  res.redirect('/');
});

module.exports = router;
