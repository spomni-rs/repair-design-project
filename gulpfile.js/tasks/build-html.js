const gulp = require('gulp');
const projectPath = require('../lib/projectPath.js')

const src = projectPath + '/src/*.html';
const dest = projectPath + '/dist/';

function buildHtml(done){

  gulp.src(src)
    .pipe(gulp.dest(dest));
  
  done()
}

gulp.task('build-html', buildHtml)
module.exports = buildHtml