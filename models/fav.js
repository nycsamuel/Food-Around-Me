const { ObjectID }      = require('mongodb');
const { getDB }         = require('../lib/dbConnect.js');

function getFav(req, res, next) {
  // find all favorites for your userId
  getDB().then((db) => {
    db.collection('favorites')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if(toArrErr) return next(toArrErr);
        res.favorites = data;
        console.log('favs *** ', res.favorites);
        db.close();
        next();
      });
    return false;
  });
  return false;
}

function saveFav(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {};

  // copying all of req.body into insertObj
  for(let key in req.body) {
    insertObj[key] = req.body[key];
  }

  // Adding userId to insertObj
  insertObj.favorite.userId = req.session.userId;

  getDB().then((db) => {
    db.collection('favorites')
      .insert(insertObj.favorite, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

function deleteFav(req, res, next) {
  getDB().then((db) => {
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

module.exports = {
  getFav,
  saveFav,
  deleteFav,
};
