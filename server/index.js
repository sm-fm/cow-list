var express = require('express');
var app = express();
var port = 3000;
var db = require('./db/index');
var controllers = require('./controllers/cows');
var morgan = require('morgan');
var bp = require('body-parser');
var cors = require('cors');

//MIDDLEWARE
// app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bp());


//ROUTE HANDLING
app.get('/api/cows', controllers.get);

app.post('/api/cows', controllers.post);

//SERVER CREATION
app.listen(port, () => {
  console.log(`Cow app listening on port ${port}`)
});
