var http = require('http');
var moment = require('moment');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, mydb) {
    if (err) throw err;
    var dbo = mydb.db('mydb');
    const obj={}
    let startDate = new Date(new Date("2020-01-11").setUTCHours(0, 0, 0, 0))
    let endDate = new Date(new Date("2020-01-11").setUTCHours(23, 59, 59, 999))
    obj.Joining_Date = {
        $gte: moment.utc(startDate).toDate(),
        $lte: moment.utc(endDate).toDate()
    };
    dbo.collection("customers").find(obj).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        mydb.close();
    });
});


