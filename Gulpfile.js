var gulp = require('gulp');

var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');

var paths = {
  lessOutput: './less/style.less',
  less: './less/**/*.less'
};

gulp.task('less', function () {
  gulp.src(paths.lessOutput)
    .pipe(less())
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['less']);
