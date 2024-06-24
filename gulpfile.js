import gulp from 'gulp'
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

const SASS = 'sass';
const CSS = 'css';

const sassOptions = {
  includePaths: ['./node_modules/breakpoint-sass/stylesheets']
};

// Tasks.
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

gulp.task('watch', () => gulp.watch(SASS + '/**/*.scss', gulp.series(gulp.series('sass'))));

gulp.task('default', gulp.series('build', 'watch'));
