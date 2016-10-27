const router  = require('express').Router();

router.get('/', (req, res) => {
  // console.log(res.results.businesses);
  res.render('home', {
    results:   res.results || [],
  });
});

module.exports = router;
