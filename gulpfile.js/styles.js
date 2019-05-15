const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const gulpif = require('gulp-if')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const sourcemaps = require('gulp-sourcemaps')
const {argv} = require('yargs')
const {dest, src} = require('gulp')

const {plumbing} = require('./utils')

function styles() {
  return src(['src/**/*.scss'])
    .pipe(plumbing())
    .pipe(sassGlob())
    .pipe(gulpif(!argv.prod, sourcemaps.init()))
    .pipe(sass({
      includePaths: ['node_modules'],
    }))
    .pipe(autoprefixer({
      browsers: '> 0.5%, last 2 versions, Firefox ESR, not dead',
      grid: 'no-autoplace',
    }))
    .pipe(gulpif(argv.prod, csso()))
    .pipe(gulpif(!argv.prod, sourcemaps.write()))
    .pipe(dest('dist/'))
}

module.exports = styles
