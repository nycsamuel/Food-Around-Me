const router          = require('express').Router();
const speech          = require('../services/speech');

router.post('/', speech.sendSpeech,(req, res) => {
  res.render('index', {
    msg: res.txt,
  });
});

module.exports = router;
