const browserSync = require('browser-sync')
const styles = require('./styles')
const {watch} = require('gulp')

const bs = browserSync.get('BrowserSync')

function reload(done) {
  bs.reload()
  done()
}

function watchTask() {
  const watchOptions = {usePolling: true}
  watch('src/**/*.scss', watchOptions, styles)
  watch('index.html', watchOptions, reload)
}

module.exports = watchTask
