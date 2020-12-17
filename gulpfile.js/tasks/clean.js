const gulp = require('gulp');
const projectPath = require('../lib/projectPath.js')
const del = require('del')

const src = projectPath + '/src/*.html';
const dest = projectPath + '/dist/';

gulp.task('clean', (done) => {
  del.sync('dist/**/*', {force: true});
  done();
})
