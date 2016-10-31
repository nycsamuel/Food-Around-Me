const router  = require('express').Router();
// const fav   = require('../models/fav');
// const speech  = require('../services/speech');

// router.get('/', (req, res) => {
//   // console.log(res.results.businesses);
//   res.render('yelp/index', {
//     results:   res.results || [],
//     fav: res.fav || [],
//   });
// });

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
