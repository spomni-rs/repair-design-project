const gulp = require('gulp')
const {series, parallel} = gulp;
const requireDir = require('require-dir');

requireDir('./tasks')

gulp.task('build', series(
  'clean',
  'copy-assets',
  'build-html',
  'build-sass'
))

gulp.task('watch', (done) => {
  gulp.watch('src/**/*', series('build'))
})

gulp.task('default', parallel(
  series(
    'build',
     'watch'
  ),
  'connect'
))