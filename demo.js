var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, mydb) {
  if (err) throw err;
  console.log("Database created!");
  mydb.close();
});