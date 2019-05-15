const {parallel, series} = require('gulp')

const docs = require('./docs')
const styles = require('./styles')
const watch = require('./watch')

const build = parallel(styles, docs)
const defaultTask = series(build, watch)

module.exports = {
  build,
  docs,
  styles,
  default: defaultTask,
}
