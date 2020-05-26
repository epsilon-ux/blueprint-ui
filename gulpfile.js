const { src, dest, watch, series, parallel } = require('gulp');

const copyScssFolder = cb => {
  return src('projects/epsilon-blueprint/src/styles/*.scss')
    .pipe(dest('dist/epsilon-blueprint/styles/'));
}

const copyCUIFolder = cb => {
  return src('projects/epsilon-blueprint/src/styles/cui-overrides/*.scss')
    .pipe(dest('dist/epsilon-blueprint/styles/cui-overrides'));
}

const copyScss = cb => {
  return src('projects/epsilon-blueprint/src/styles.scss')
    .pipe(dest('dist/epsilon-blueprint/'));
}

exports.copyStyles = parallel(copyScssFolder, copyCUIFolder, copyScss);

exports.watchStyles = () => {
  watch(
    'projects/epsilon-blueprint/src/styles/*.scss',
    { ignoreInitial: false },
    cb => copyScssFolder(cb)
  );
  
  watch(
    'projects/epsilon-blueprint/src/styles/cui-overrides/*.scss',
    { ignoreInitial: false },
    cb => copyCUIFolder(cb)
  );
  
  watch(
    'projects/epsilon-blueprint/src/styles.scss',
    { ignoreInitial: false },
    cb => copyScss(cb)
  );
};
