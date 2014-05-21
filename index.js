var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var cp = require('child_process');

var Handlebars = require('handlebars');
var moment = require('moment');
var slug = require('slug');

var config = require('./config.json')

var jekyllPath = config.jekyllPath || '.';

var postsPath = jekyllPath + '/_posts/';

templates = {};

fs.readFile('output/text-post-output.hbs', function(err, data) {
  templates.text = Handlebars.compile(data.toString());
});

fs.readFile('./output/link-post-output.hbs', function(err, data) {
  templates.link = Handlebars.compile(data.toString());
});

fs.readFile('./output/video-post-output.hbs', function(err, data) {
  templates.video = Handlebars.compile(data.toString());
});

fs.readFile('./output/quote-post-output.hbs', function(err, data) {
  templates.quote = Handlebars.compile(data.toString());
});
fs.readFile('./output/image-post-output.hbs', function(err, data) {
  templates.image = Handlebars.compile(data.toString());
});

app = express();

app.use(bodyParser());

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.send('public/index.html');
});

app.get('/posts', function(req, res) {})

app.post('/posts', function(req, res) {

  req.body.date = new Date();
  var post = templates[req.body.type](req.body);

  fs.writeFile(postsPath + moment(new Date()).format('YYYY-MM-DD') + '-' + slug(req.body.title) + '.md', post, function(err) {
    if (err)
      console.log(err);
    else {
      cp.exec('jekyll build', {cwd: jekyllPath}, function(error, stdout, stderr) {
        res.send({posted: true});
      })
    }
  });

});

app.get('/posts/:title', function(req, res) {});

app.listen(3000);
