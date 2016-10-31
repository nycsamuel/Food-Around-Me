/**
  * This code is from General Assembly
  * https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes
*/

const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/yelpUsers';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
