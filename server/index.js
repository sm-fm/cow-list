var express = require('express');
var app = express();
var port = 3000;

//ROUTE HANDLING
app.get('/api/cows', (req, res, next) => {

});

app.post('/api/cows', (req, res, next) => {

});


//SERVER CREATION
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
