var gulp = require('gulp');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var es6ify = require('es6ify');

var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');

var paths = {
  lessOutput: './less/style.less',
  less: './less/**/*.less',
  appJs: './js/app.js',
  js: './js/**/*.js'
};

gulp.task('less', function () {
  gulp.src(paths.lessOutput)
    .pipe(less())
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('browserify', function() {
  var bundleStream = browserify()
    .add(es6ify.runtime)
    .transform(reactify)
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
    .require(require.resolve(paths.appJs), { entry: true })
    .bundle();

  bundleStream
    .pipe(source(paths.appJs))
    .pipe(gulp.dest('public'));
})

gulp.task('watch', function() {
  gulp.watch(paths.js, ['browserify']);
});

gulp.task('default', ['less']);
