const oauthSignature    = require('oauth-signature');
const qs                = require('querystring');
const n                 = require('nonce')();
const _                 = require('lodash');
const fetch             = require('node-fetch');
const URL               = 'https://api.yelp.com/v2/search';
const request           = require('request');

/**
  * This is from
  *
  * https://arian.io/how-to-use-yelps-api-with-node/
  *
  * I used this tutorial to do oauth for yelp api
*/
function search(req, res, next) {
  // request('http://localhost:3000', (error, response, body) => {
  //   if (!error && response.statusCode === 200) {
  //     console.log('body *** ', body);
  //   }
  // });

  // values from form post method

  console.log('***HIT**');
  console.log(req.body.speech);
  let userQuery;
  if(req.body.speech) {
    userQuery = {
      term                    : req.body.speech,
      location                : req.body.location,
    }
  } else {
    userQuery = {
      term                    : req.body.term,
      location                : req.body.location,
    }
  }
  console.log('userQuery *** ', userQuery);

  const reqParams = {
    location                : 'New+York',
    limit                   : 5,
    // ll                      : '40.7398476,-73.99020680000001',

    oauth_consumer_key      : process.env.CONSUMER_KEY,
    oauth_token             : process.env.TOKEN,
    oauth_nonce             : n(),
    oauth_timestamp         : n().toString().substr(0, 10),
    oauth_signature_method  : 'HMAC-SHA1',
    oauth_version           : '1.0',
  };

  // const params = Object.assign(userQuery, reqParams);
  const params = _.assign(userQuery, reqParams);

  const CONSUMER_SECRET_KEY = process.env.CONSUMER_SECRET_KEY;
  const TOKEN_SECRET = process.env.TOKEN_SECRET;

  const signature = oauthSignature.generate(
    'GET', // HTTP method
    URL,
    params,
    CONSUMER_SECRET_KEY,
    TOKEN_SECRET,
    { encodeSignature: false }
  );

  // add to params for api call
  params.oauth_signature = signature;
  // console.log('params *****', params);

  // stringify an object into a query string, sorting the keys
  // i.e., turn objects into strings to be used as query strings
  const paramsURL = qs.stringify(params);
  console.log('paramsURL *** ', paramsURL);

  const API_URL = `${URL}?${paramsURL}`;

  fetch(API_URL)
    .then(urlResult => urlResult.json())
    .then(jsonResult => {
      res.results = jsonResult;
      next();
    })
    .catch(err => {
      res.err = err;
      next(err);
    });
}


module.exports = {
  search,
};
