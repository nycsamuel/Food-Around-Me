const router  = require('express').Router();

router.get('/', (req, res) => {
  // console.log(res.results.businesses);
  res.render('index', {
    results:   res.results || [],
  });
});

module.exports = router;
