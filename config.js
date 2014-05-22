var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(express.static('./public'));

  app.use(bodyParser());
};