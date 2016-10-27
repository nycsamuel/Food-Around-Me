const { MongoClient, ObjectID }      = require('mongodb');
const dbConnection                   = 'mongodb://localhost:27017/yelpUsers';

function getFav(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .find({})
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        res.results = data;
        db.close();
        return next();
      });

    return next();
  });
  return false;
}

function saveFav(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .insert(req.body.favorite, (insertErr, result) => {
        if (insertErr) return next(insertErr);

        res.saved = result;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

function deleteFav(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.connect('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
        if(removeErr) return next(removeErr);

        res.removed = doc;
        db.close();
        return next();
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
