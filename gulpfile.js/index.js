const gulp = require('gulp')
const {series, parallel} = gulp;
const requireDir = require('require-dir');

requireDir('./tasks')

module.exports = {
  default: series('clean', 'build-html')
}