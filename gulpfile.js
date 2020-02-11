const { src, dest, series, parallel } = require('gulp');

function indexStyle(cb) {
  return src('projects/epsilon-blueprint/src/styles.scss')
    .pipe(dest('dist/epsilon-blueprint/'));
}

function styles(cb) {
  return src('projects/epsilon-blueprint/src/styles/*.scss')
    .pipe(dest('dist/epsilon-blueprint/styles/'));
}

exports.copyScss = series(styles, indexStyle);