const { MongoClient } = require("mongodb");

let dbConnection;
let uri =
  "mongodb+srv://" +
  process.env.MONGODB_ATLAS_USERNAME +
  ":" +
  process.env.MONGODB_ATLAS_PASSWORD +
  "@cluster0.6v2dmg1.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri, {
      useNewUrlParser: true,
    })
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
