var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

app = express();

app.use(bodyParser());

app.use(express.static('./public'))

app.get('/', function(req, res) {
  res.send('public/index.html')
});

app.get('/posts', function(req, res) {})

app.get('/posts/:title', function(req, res) {})

app.listen(3000);
