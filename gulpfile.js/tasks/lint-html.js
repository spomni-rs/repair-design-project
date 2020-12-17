/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const lint = require('gulp-htmlhint');
const log = require('node-pretty-log');

gulp.task('lint-html', (done) => {
  gulp
    .src('src/**/*.html')
    .pipe(lint('config/.htmlhintrc'))
    .pipe(lint.failAfterError())
    .on('error', (err) => {
      log('error', err.message);
    })
    .on('finish', () => {
      done();
    });
});
