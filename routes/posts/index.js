var fs = require('fs');
var cp = require('child_process');

var moment = require('moment');
var slug = require('slug');

var cwd = process.cwd();

var templates = require(cwd + '/output')();

var config = require(cwd + '/config.json');
var jekyllPath = config.jekyllPath || '.';
var postsPath = jekyllPath + '/_posts/';


var makeTitle = function(title, date) {
  return postsPath + moment(date).format('YYYY-MM-DD') + '-' + slug(title) + '.md';
};

module.exports = {
  index: function(req, res) {},

  show: function(req, res) {},

  new: function(req, res) {

    var date = new Date();

    req.body.date = moment(date).format('YYYY-MM-DD HH:MM');
    var post = templates[req.body.type](req.body);

    fs.writeFile(makeTitle(req.body.title, date), post, function(err) {
      if (err)
        res.send({error: err});
      else {
        console.log('post made. building...');
        cp.exec('jekyll build', {cwd: jekyllPath}, function(error, stdout, stderr) {
          if (stderr || error) {
            res.send({
              error: stdout
            });
          }
          console.log('built.');
          res.send({posted: true});
        });
      }
    });

  }
};