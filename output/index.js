var fs = require('fs');
var Handlebars = require('handlebars');

module.exports = function() {

  var templates = {};

  fs.readFile('output/hbs/text-post-output.hbs', function(err, data) {
    templates.text = Handlebars.compile(data.toString());
  });

  fs.readFile('output/hbs/link-post-output.hbs', function(err, data) {
    templates.link = Handlebars.compile(data.toString());
  });

  fs.readFile('output/hbs/video-post-output.hbs', function(err, data) {
    templates.video = Handlebars.compile(data.toString());
  });

  fs.readFile('output/hbs/quote-post-output.hbs', function(err, data) {
    templates.quote = Handlebars.compile(data.toString());
  });
  fs.readFile('output/hbs/image-post-output.hbs', function(err, data) {
    templates.image = Handlebars.compile(data.toString());
  });

  return templates;
};