var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, mydb) {
  if (err) throw err;
  var dbo =mydb.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71',phone:1234,salary:25000},
    { name: 'Peter', address: 'Lowstreet 4',phone:1243,salary:12000},
    { name: 'Amy', address: 'Apple st 652',phone:1342,salary:30000},
    { name: 'Hannah', address: 'Mountain 21',phone:1423,salary:14000},
    { name: 'Michael', address: 'Valley 345',phone:2134,salary:13000},
    { name: 'Sandy', address: 'Ocean blvd 2',phone:2314,salary:24800},
    { name: 'Betty', address: 'Green Grass 1',phone:2413,salary:34500},
    { name: 'Richard', address: 'Sky st 331',phone:2143,salary:14500},
    { name: 'Susan', address: 'One way 98',phone:3124,salary:15500},
    { name: 'Vicky', address: 'Yellow Garden 2',phone:3214,salary:7400},
    { name: 'Ben', address: 'Park Lane 38',phone:3412,salary:24000},
    { name: 'William', address: 'Central st 954',phone:1234,salary:23500},
    { name: 'Chuck', address: 'Main Road 989',phone:4321,salary:22500},
    { name: 'Viola', address: 'Sideway 1633',phone:4132,salary:25500}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    mydb.close();
  });
});