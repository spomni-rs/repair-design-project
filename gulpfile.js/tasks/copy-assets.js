const gulp = require('gulp');
const connect = require('gulp-connect');

const projectPath = require('../lib/projectPath.js')

const src = projectPath + '/src/assets/**/*';
const dest = projectPath + '/dist/assets/';

gulp.task('copy-assets', (done) => {

  gulp.src(src)
    .pipe(gulp.dest(dest))
    .pipe(connect.reload())

  done()
})
