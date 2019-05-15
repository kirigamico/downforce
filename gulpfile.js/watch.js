const {parallel, watch} = require('gulp')

const docs = require('./docs')
const styles = require('./styles')

function watchTask() {
  const watchOptions = {usePolling: true}
  watch('src/**/*.scss', watchOptions, parallel(styles, docs))
}

module.exports = watchTask
