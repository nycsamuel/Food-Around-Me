const fetch       = require('node-fetch');

const TOKEN_URL = 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken';
const URL = 'https://speech.platform.bing.com/recognize';
const KEY = process.env.SPEECH_RECOG_KEY;

function sendSpeech(req, res, next) {
  const tokenParams = {
    method    : 'POST',

    headers   : {
      'Ocp-Apim-Subscription-Key'     : KEY,
    },
  };

  // get token which expires in 10 mins
  fetch(TOKEN_URL, tokenParams)
    .then(result => result.text())
    .then(txt => {
      const token = txt;
      const speechParams = {
        method    : 'POST',

        qs        : {
          'version'           : '3.0',
          'requestid'         : 'b2c95ede-97eb-4c88-81e4-80f32d6aee54',
          'appID'             : 'D4D52672-91D7-4C74-8AD8-42B1D98141A5',
          'format'            : 'json',
          'locale'            : 'en-US',
          'device.os'         : 'Ubuntu OS',
          'scenarios'         : 'ulm',
          'instanceid'        : 'b2c95ede-97eb-4c88-81e4-80f32d6aee5',
        }.

        body      : wavData,

        headers   : {
          'Authorization'     : `Bearer ${token}`,
          'Content-Type'      : 'audio/wav',
          'Content-Length'    : wavData.length
        },
      };

      fetch()
        .then()
        .then()
        .catch();
    });



    // .then(r => r.json())
    // .then(result => {
    //   console.log(result);
    //   res.results = result;
    //   next();
    // })
    // .catch(err => {
    //   res.error = err;
    //   next();
    // });
  // res.token = TOKEN;

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
