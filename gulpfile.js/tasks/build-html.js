const gulp = require('gulp');
const connect = require('gulp-connect');

const projectPath = require('../lib/projectPath.js')

const src = projectPath + '/src/*.html';
const dest = projectPath + '/dist/';

gulp.task('build-html', (done) => {

  gulp.src(src)
  .pipe(gulp.dest(dest))
  .pipe(connect.reload())

  done()
})
