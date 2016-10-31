const { MongoClient, ObjectID }      = require('mongodb');
const dbConnection                   = 'mongodb://localhost:27017/yelpUsers';

function getFav(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('favorites')
      .find({ userId: {$eq: req.session.userId} })
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        res.fav = data;
        // console.log('res.fav *** ', res.fav);
        db.close();
        return next();
      });

    return false;
  });
  return false;
}

function saveFav(req, res, next) {
  const insertObj = {};
  for (let key in req.body) {
    insertObj[key] = req.body[key];
  }
  insertObj.favorite.userId = req.session.userId;


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

    db.collection('favorites')
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
