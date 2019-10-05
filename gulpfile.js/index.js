const gulp = require('gulp')
const {series, parallel} = gulp;
const requireDir = require('require-dir');

const tasks = requireDir('./tasks')

module.exports = {}