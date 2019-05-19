const {watch} = require('gulp')

const styles = require('./styles')

function watchTask() {
  const watchOptions = {usePolling: true}
  watch('src/**/*.scss', watchOptions, styles)
}

module.exports = watchTask
