const browserSync = require('browser-sync')

const bs = browserSync.create('BrowserSync')

function serve(done) {
  bs.init({
    open: false,
    port: 3001,
    server: {
      baseDir: './',
      directory: false,
    },
    ui: false,
  })
  done()
}

module.exports = serve
