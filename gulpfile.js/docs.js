const {src} = require('gulp')

const sassdoc = require('sassdoc')

function docs() {
  return src('src/**/*.scss')
    .pipe(sassdoc())
}

module.exports = docs
