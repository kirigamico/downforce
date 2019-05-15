const sassdoc = require('sassdoc')

function docs() {
  return src('src/')
    .pipe(sassdoc())
}

module.exports = docs
