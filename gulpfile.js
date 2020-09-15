/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

const { src, dest, watch, series, parallel } = require('gulp');

const copyScssFolder = cb => {
  return src('projects/epsilon-blueprint/src/styles/*.scss')
    .pipe(dest('dist/epsilon-blueprint/styles/'));
};

const copyCUIFolder = cb => {
  return src('projects/epsilon-blueprint/src/styles/cui-overrides/*.scss')
    .pipe(dest('dist/epsilon-blueprint/styles/cui-overrides'));
};

const copyScss = cb => {
  return src('projects/epsilon-blueprint/src/styles.scss')
    .pipe(dest('dist/epsilon-blueprint/'));
};

const watchStyles = () => {
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

exports.copyModels = cb => {
  return src('projects/epsilon-blueprint/src/models/*.ts')
    .pipe(dest('dist/epsilon-blueprint/models/'));
};

const watchModels = () => {
  watch(
    'projects/epsilon-blueprint/src/models/*.ts',
    { ignoreInitial: false },
    cb => this.copyModels(cb)
  );
};

exports.copyStyles = parallel(copyScssFolder, copyCUIFolder, copyScss);
exports.watch = parallel(watchModels, watchStyles);