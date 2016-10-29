const oauthSignature    = require('oauth-signature');
const qs                = require('querystring');
const n                 = require('nonce')();
const _                 = require('lodash');
const fetch             = require('node-fetch');
const URL               = 'https://api.yelp.com/v2/search';
// const request           = require('request');

/**
  * This is from
  *
  * https://arian.io/how-to-use-yelps-api-with-node/
  *
  * I used this tutorial to do oauth for yelp api
*/
function search(req, res, next) {
  // get geolocation from ajax call
  const currentLat  = req.params.lat;
  const currentLng  = req.params.lng;
  const latlng = `${currentLat},${currentLng}`;


  // values from form post method
  const userQuery = {
    term                    : req.body.term,
    location                : req.body.location,
    cll                     : latlng,
    // cll                     : req.body.cll,
  };
  console.log('userQuery *** ', userQuery);

  const reqParams = {
    location                : 'New+York',
    limit                   : 5,
    sorting                 : 1, // sorts by distance
    cll                      : '40.7398476,-73.99020680000001',

    oauth_consumer_key      : process.env.CONSUMER_KEY,
    oauth_token             : process.env.TOKEN,
    oauth_nonce             : n(),
    oauth_timestamp         : n().toString().substr(0, 10),
    oauth_signature_method  : 'HMAC-SHA1',
    oauth_version           : '1.0',
  };

  /* the order of parameters matter as the next param will overwrite if the key already exists */
  // const params = Object.assign(userQuery, reqParams);
  const params = _.assign(reqParams, userQuery);

  const CONSUMER_SECRET_KEY = process.env.CONSUMER_SECRET_KEY;
  const TOKEN_SECRET = process.env.TOKEN_SECRET;

  // create signature with oauth generate function
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

  // new url for yelp api call
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
