var fs = require('fs');
var cp = require('child_process');

var slug = require('slug');
var moment = require('moment');

var fileParser = require('../middleware/fileParser');

var config = require('../config.json');
var jekyllPath = config.jekyllPath || '.';

var postsPath = jekyllPath + '/_posts/';

var templates = require('../output')();


module.exports = function(app) {
  app.get('/posts', function(req, res) {
    console.log('posts');
  })

  app.post('/posts', fileParser, function(req, res) {

    req.body.date = new Date();
    var post = templates[req.body.type](req.body);

    fs.writeFile(postsPath + moment(new Date()).format('YYYY-MM-DD') + '-' + slug(req.body.title) + '.md', post, function(err) {
      if (err)
        console.log(err);
      else {
        console.log('post made')
        cp.exec('jekyll build', {cwd: jekyllPath}, function(error, stdout, stderr) {
          res.send({posted: true});
        });
      }
    });

  });

  app.get('/posts/:title', function(req, res) {});
};