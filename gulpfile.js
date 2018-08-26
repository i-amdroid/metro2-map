var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

var SASS = 'sass';
var CSS = 'css';
var IMG = 'img';

var sassOptions = {
  includePaths: ['./node_modules/breakpoint-sass/stylesheets']
};

var autoprefixerOptions = {
  browsers: ['> 1%']
};

// tasks

gulp.task('sass', function () {
  return gulp.src(SASS + '/**/*.scss')
    .pipe(sass.sync(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(CSS));
});

gulp.task('imagemin', function() {
  gulp.src(IMG + '/src/*')
    .pipe(imagemin())
    .pipe(gulp.dest(IMG));
});

gulp.task('build', ['sass', 'imagemin']);

gulp.task('watch', function () {
  watch(SASS + '/**/*.scss', batch(function (events, done) {
    gulp.start('build', done);
  }));
});

gulp.task('default', ['build', 'watch']);
