const gulp = require('gulp');
const {series} = gulp;
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const projectPath = require('../lib/projectPath.js');

const src = projectPath + '/src/scss/**/*.scss';
const dest = projectPath + '/dist/css';

console.log('projectPath = ', projectPath);

function buildSass(done){

  gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(dest))

  done();
}

gulp.task('build-sass', buildSass)
module.exports = buildSass