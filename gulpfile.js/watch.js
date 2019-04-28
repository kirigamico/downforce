const styles = require('./styles')
const {watch} = require('gulp')

function watchTask() {
  const watchOptions = {usePolling: true}
  watch('src/**/*.scss', watchOptions, styles)
}

module.exports = watchTask
