const fetch       = require('node-fetch');

const TOKEN_URL = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken';
const URL = 'https://speech.platform.bing.com/recognize';
const KEY = process.env.SPEECH_RECOG_KEY;

function sendSpeech(req, res, next) {
  const tokenParams = {
    method    : 'POST',

    headers   : {
      'Ocp-Apim-Subscription-Key'    : KEY,
    },
  };

  // get token which expires in 10 mins
  const TOKEN = fetch(TOKEN_URL, tokenParams).then(result => {

    console.log('token ***', result);
  });
  // res.token = TOKEN;
  next();

  // const queryParams = {
  //   method: 'POST',
  //   headers {
  //     'request_id': '',
  //     'appID': 'D4D52672-91D7-4C74-8AD8-42B1D98141A5',
  //     'format': 'json',
  //     'locale': 'en-US',
  //     'device.os': 'chrome',
  //     'scenarios': 'ulm',
  //     'instanceid': '1234567890',
  //   },
  // };
  //
  // fetch()
  //   .then(urlResult => urlResult.json())
  //   .then(jsonResult => {
  //     res.speechResult = jsonResult;
  //     console.log(jsonResult);
  //     next();
  //   })
  //   .catch(err => {
  //     res.err = err;
  //     next(err);
  //   });
}

module.exports = {
  sendSpeech,
};
