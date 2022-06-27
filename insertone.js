var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, mydb) {
  if (err) throw err;
  var dbo = mydb.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  var myobj = req.body.address;
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    mydb.close();
  });
});