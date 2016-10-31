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
  // const currentLat  = req.params.lat;
  // const currentLng  = req.params.lng;
  // const latlng = `${currentLat},${currentLng}`;

  // values from form post method
  console.log('speech *** ', req.body.speech);
  let userQuery;
  if (req.body.speech) {
    userQuery = {
      term                    : req.body.speech,
      // location                : req.body.location,
      // cll                     : latlng,
      // cll                     : req.body.cll,
    };
  }
  console.log('userQuery *** ', userQuery);

  // when there is no input in location input
  // const userQueryLocation = userQuery.location.trim();
  // if (userQueryLocation === '') {
  //   console.log('this is when location is empty');
  //   delete userQuery.location;
  // }

  const reqParams = {
    location                : 'New+York',
    limit                   : 3,
    sorting                 : 1, // sorts by distance
    // cll                      : '40.7398476,-73.99020680000001',
    // cll                     : latlng,

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
  console.log('API_URL ***', API_URL);

  fetch(API_URL)
    .then(urlResult => urlResult.json())
    .then(jsonResult => {
      res.yelpResults = jsonResult;
      next();
    })
    .catch(err => {
      res.err = err;
      next(err);
    });
}

function getLatLng(req, res, next) {
  // console.log('yelp results *****', res.yelpResults.businesses);

  // array of results
  const businesses = res.yelpResults.businesses;
  // get latitude & longitude of each businesses
  const latlngArray = [];
  businesses.forEach(business => {
    let lat     = business.location.coordinate.latitude;
    let lng     = business.location.coordinate.longitude;
    let latlng  = `${lat},${lng}`;
    latlngArray.push(latlng);
  });

  console.log('latlng ***', latlngArray);
  res.latlng = latlngArray;
  next();
}

module.exports = {
  search,
  getLatLng,
};
