const gulp = require('gulp');

const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');

const projectPath = require('../lib/projectPath.js');

const src = projectPath + '/src/scss/**/*.scss';
const dest = projectPath + '/dist/css';

gulp.task('build-sass', (done) => {

  gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload())

  done();
})
