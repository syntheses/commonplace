var fs = require('fs');

var formidable = require('formidable');
var slug = require('slug');

var jekyllPath = require('../config.json').jekyllPath || '.';
var imagePath = jekyllPath + '/images/';

fs.exists(imagePath, function (exists) {
  if (!exists) {
    fs.mkdir(imagePath, function(err) {
      if (err)
        console.log(err);
    });
  }
});

module.exports = function(req, res, next) {
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

};