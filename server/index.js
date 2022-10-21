var express = require('express');
var app = express();
var port = 3000;
var db = require('./db/index');
var controllers = require('./controllers/cows');
var bp = require('body-parser');

//MIDDLEWARE
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bp());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.send(200);
  }
  else {
  //move on
    next();
  }
});

//ROUTE HANDLING
app.get('/api/cows', controllers.get);

app.post('/api/cows', controllers.post);

//SERVER CREATION
app.listen(port, () => {
  console.log(`Cow app listening on port ${port}`)
});
