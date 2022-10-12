var express = require('express');
var app = express();
var port = 3000;
var db = require('./db/index');
var controllers = require('./controllers/cows');
var morgan = require('morgan');
var bp = require('body-parser');

//MIDDLEWARE
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTE HANDLING
app.get('/api/cows', controllers.get);

app.post('/api/cows', controllers.post);

//SERVER CREATION
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
