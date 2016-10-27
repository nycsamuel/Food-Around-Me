const oauthSignature    = require('oauth-signature');
const request           = require('request');
const qs                = require('querystring');
const n                 = require('nonce')();
const _                 = require('lodash');
const fetch             = require('node-fetch');
const URL               = 'https://api.yelp.com/v2/search';

/**
  * This is from
  *
  * https://arian.io/how-to-use-yelps-api-with-node/
  *
  * I used this tutorial to do oauth for yelp api
*/
function search(req, res, next) {
  // values from form post method
  const userQuery = req.body.search;

  const reqParams = {
    location                : 'New+York',
    limit                   : 5,

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

  params.oauth_signature = signature; // add to params for api call
  // console.log('params *****', params);

  const paramsURL = qs.stringify(params);

  const API_URL = `${URL}?${paramsURL}`;

  /*
  request(API_URL, (error, response, body) => {
    // console.log('error ***', error);
    // console.log('response ***', response);
    // console.log('body *********************', body);

    if (error) return next(error);

    // convert body => JSON
    const reqBody = body.toString();

    res.results = JSON.parse(reqBody);
    return next();
  });
  */

  fetch(API_URL)
    .then(urlResult => urlResult.json())
    .then(jsonResult => {
      res.results = jsonResult;
      next();
    })
    .catch(err => {
      res.err = err;
      next();
    });
}


module.exports = {
  search,
};
