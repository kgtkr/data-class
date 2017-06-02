var gulp = require('gulp');
var babel = require('gulp-babel');
var espower = require('gulp-espower');

gulp.task('copy:ts', function () {
  return gulp.src(['ts/*.d.ts', 'ts/**/*.d.ts'])
    .pipe(gulp.dest('dist/src'));
});

gulp.task('build:src', function () {
  return gulp.src(['src/*.js', 'src/**/*.js'])
    .pipe(babel({
      presets: ['es2017'],
      plugins: ["transform-object-rest-spread"]
    }))
    .pipe(gulp.dest('dist/src'));
});

gulp.task('build:test', function () {
  return gulp.src(['test/*.js', 'test/**/*.js'])
    .pipe(espower())
    .pipe(gulp.dest('dist/test'));
});

gulp.task('build', ['build:src', 'copy:ts', 'build:test']);