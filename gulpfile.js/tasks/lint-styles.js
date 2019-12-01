/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const lint = require('gulp-stylelint');
const log = require('node-pretty-log');

gulp.task('lint-styles', (done) => {
  gulp
    .src('src/scss/**/*.scss')
    .pipe(lint({
      failAfterErtor: true,
      reporters: [
        { formatter: 'string', console: true },
      ],
    }))
    .on('error', (err) => {
      log('error', err.message);
      this.emit('end');
    })
    .on('end', done);
});

gulp.task('lint-styles--fix', (done) => {
  gulp
    .src('src/scss/**/*.scss')
    .pipe(lint({
      fix: true,
      failAfterErtor: true,
      reporters: [
        { formatter: 'string', console: true },
      ],
    }))
    .on('error', (err) => {
      log('error', err.message);
      this.emit('end');
    })
    .pipe(gulp.dest('src/scss'))
    .on('end', done);
});
