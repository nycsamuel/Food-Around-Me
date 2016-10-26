const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('heyyyy we in controllers/home');
});

module.exports = router;
