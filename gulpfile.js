const { src, dest, watch, series, parallel } = require('gulp');

exports.copyScss = () => {
  watch('projects/epsilon-blueprint/src/styles/*.scss', {ignoreInitial: false}, cb => {
    return src('projects/epsilon-blueprint/src/styles/*.scss')
      .pipe(dest('dist/epsilon-blueprint/styles/'));
  });
  
  watch('projects/epsilon-blueprint/src/styles.scss', {ignoreInitial: false}, cb => {
    return src('projects/epsilon-blueprint/src/styles.scss')
      .pipe(dest('dist/epsilon-blueprint/'));
  });
};
