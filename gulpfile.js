var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var cssnano = require('gulp-cssnano');
var zip = require('gulp-zip');

gulp.task('sass', function() {
  return gulp.src('lib/scss/style.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(prefix("last 2 version", "> 2%"))
    .pipe(gulp.dest('lib/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('lib/css'));
});


gulp.task('minjs', function() {
  return gulp.src('lib/js/script.js')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('lib/js'));
});

gulp.task('default', ['sass','minjs']);

gulp.task('watch', function () {
  gulp.watch('lib/scss/**/*.scss', ['sass']);
 // gulp.watch('lib/js/script.js', ['minjs']);
});

/*gulp.task('zip', function() {
  return gulp.src(['../wp_angular/**', '!./node_modules/**'])
      .pipe(zip('wp_angular.zip'))
      .pipe(gulp.dest('../'));
})*/
