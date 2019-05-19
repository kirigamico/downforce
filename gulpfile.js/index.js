const {parallel, series} = require('gulp')

const serve = require('./serve')
const styles = require('./styles')
const watch = require('./watch')

const build = parallel(styles)
const defaultTask = series(build, serve, watch)

module.exports = {
  build,
  styles,
  default: defaultTask,
}
