var fs = require('fs');
var cp = require('child_process');

var slug = require('slug');
var moment = require('moment');

var fileParser = require('../middleware/fileParser');

var posts = require('./posts');

module.exports = function(app) {
  app.get('/posts', posts.index);

  app.post('/posts', fileParser, posts.new);

  app.get('/posts/:title', posts.show);
};