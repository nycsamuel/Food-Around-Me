const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('google/map', {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  });
});

module.exports = router;
