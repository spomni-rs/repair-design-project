const gulp = require('gulp')
const {series, parallel} = gulp;
const requireDir = require('require-dir');

const tasks = requireDir('./tasks')

const build = series(
  'clean',
  'copy-static',
  'build-html',
  'build-sass'
);

const watch = () => {
  gulp.watch('src/**/*', series('build'))
}

module.exports = {
  default: series(build, watch),
  build,
  watch
}