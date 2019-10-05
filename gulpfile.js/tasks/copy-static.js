const gulp = require('gulp');
const projectPath = require('../lib/projectPath.js')

const src = projectPath + '/src/assets/**/*';
const dest = projectPath + '/dist/assets/';

function copyStatic(done){

  gulp.src(src)
    .pipe(gulp.dest(dest));
  
  done()
}

gulp.task('copy-static', copyStatic)
module.exports = copyStatic