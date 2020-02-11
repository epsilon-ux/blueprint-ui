const { src, dest, watch, series, parallel } = require('gulp');

const copyStylesFolder = cb => {
  return src('projects/epsilon-blueprint/src/styles/*.scss')
    .pipe(dest('dist/epsilon-blueprint/styles/'));
}

const copyStyles = cb => {
  return src('projects/epsilon-blueprint/src/styles.scss')
    .pipe(dest('dist/epsilon-blueprint/'));
}

exports.copyScss = parallel(copyStylesFolder, copyStyles);

exports.watchScss = () => {
  watch(
    'projects/epsilon-blueprint/src/styles/*.scss',
    { ignoreInitial: false },
    cb => copyStylesFolder(cb)
  );
  
  watch(
    'projects/epsilon-blueprint/src/styles.scss',
    { ignoreInitial: false },
    cb => copyStyles(cb)
  );
};
