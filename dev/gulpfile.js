var gulp = require('gulp');

var concat = require('gulp-concat');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
// var path = require('path'); // в упор не помню что это..
var csso = require('gulp-csso');
var coffee = require('gulp-coffee');
var rename = require('gulp-rename');

gulp.task('less', function () {
  console.log('---------- Компиляция LESS');
  gulp.src('less/application.less')
    .pipe(less())
	.pipe(rename("main.css"))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('css/'))
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('css/'));
});


gulp.task('watch', function () {
  gulp.watch('less/**/*.less', [less]);
});
