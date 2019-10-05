const gulp = require('gulp');
const projectPath = require('../lib/projectPath.js')
const del = require('del')

const src = projectPath + '/src/*.html';
const dest = projectPath + '/dist/';

function clean(done){

  del.sync(`${projectPath}/dist/*`, {force: true})
  
  done()
}

gulp.task('clean', clean)
module.exports = clean