const {parallel, series} = require('gulp')
const styles = require('./styles')
const watch = require('./watch')

const build = parallel(styles)
const defaultTask = series(build, watch)

module.exports = {
  build,
  styles,
  default: defaultTask,
}
