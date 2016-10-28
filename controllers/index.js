const router  = require('express').Router();
const users   = require('../models/users');

// router.get('/', (req, res) => {
//   // console.log(res.results.businesses);
//   res.render('index', {
//     results:   res.results || [],
//   });
// });

router.get('/', users.getFav, (req, res) => {
  console.log('res.fav ***', res.fav);
  res.render('index', {
    results: res.results || [],
    fav: res.fav || [],
  });
});

module.exports = router;
