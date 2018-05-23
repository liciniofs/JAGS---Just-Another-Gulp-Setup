var gulp     = require('gulp'),
  sass       = require('gulp-sass'),
  browserify = require('browserify'),
  inject     = require('gulp-inject'),
  wiredep    = require('wiredep').stream,
  source     = require('vinyl-source-stream'),
  del        = require('del'),
  watch      = require('gulp-watch');

gulp.task("default", () => {

  gulp.watch('src/js/**/*.js', ['js']);  
  gulp.watch('src/scss/**/*.scss', ['sass']);

});

gulp.task('clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('sass', function () {
  return gulp.src('src/scss/styles.scss')
    .pipe(wiredep())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function () {

  return browserify("src/js/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});

// gulp.task('watch', function () {
//   // Endless stream mode
//   return watch('src/scss/**/*.scss', {
//       ignoreInitial: false
//     })
//     .pipe(wiredep())
//     .pipe(sass())
//     .pipe(gulp.dest('dist'))
// });