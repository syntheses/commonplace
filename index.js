var express = require('express');

var bodyParser = require('body-parser');
var formidable = require('formidable');

var fs = require('fs');
var cp = require('child_process');

var Handlebars = require('handlebars');
var moment = require('moment');
var slug = require('slug');

var config = require('./config.json');

var jekyllPath = config.jekyllPath || '.';

var postsPath = jekyllPath + '/_posts/';
var imagePath = jekyllPath + '/images/';

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

app.use(express.static('./public'));

app.use(bodyParser());

function fileParser(req, res, next) {
  var form = new formidable.IncomingForm();

  if (req.body.type)
    next();

  form.parse(req, function(err, fields, files) {

    req.files = files;
    req.body = fields;

    req.body.img = slug(req.files.image.name);

    fs.rename(req.files.image.path, imagePath + req.body.img, function(err) {
      next();
    });
  });

}

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

app.listen(3000);
