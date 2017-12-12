const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'focus',
//   database: 'rivermonitor'
// });

// connection.connect(function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

app.get('/',function(req,res){
  var indexHtml = fs.readFileSync('./index.html','UTF-8',function(err,result){
    if(err){
      console.error(err.message);
    }
  });
  res.send(indexHtml);
});

app.post('/data',function(req,res){
  var input = parseFloat(req.body.input),
      output = parseFloat(req.body.ouput);
})

app.listen(8080, function () {
  console.log('Example app listening on port  8080!\n');
});