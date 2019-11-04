var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var SASS = 'sass';
var CSS = 'css';

var sassOptions = {
  includePaths: ['./node_modules/breakpoint-sass/stylesheets']
};

// tasks

gulp.task('sass', done => {
  gulp.src(SASS + '/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({}))
    .pipe(sourcemaps.write('../css'))
    .pipe(gulp.dest(CSS));
  done();
});

gulp.task('build', gulp.series('sass'));

gulp.task('watch', function () {
  return gulp.watch(SASS + '/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('build', 'watch'));

