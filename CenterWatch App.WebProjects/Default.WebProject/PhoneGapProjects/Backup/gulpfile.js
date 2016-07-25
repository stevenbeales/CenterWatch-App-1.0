'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var phonegapBuild = require('gulp-phonegap-build');
var RELEASE = './';
var SCRIPT = './javascript/'

gulp.task('phonegap-build', function () {
    gulp.src('**/*')
        .pipe(phonegapBuild({
          "isRepository": "false",
          "appId": "2160937",
          "user": {
            "email": "stevenbeales@gmail.com",
            "password": "Welcome!1"
          },
          "keys": {
              ios: { "password": "etienne" }
          }
        }));
});

gulp.task('css', function() {
  gulp.src(['*.css'])
     .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false}))
    .pipe(cleanCSS())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(RELEASE));
});


gulp.task('js', function() {
  gulp.src(['*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(RELEASE));

  gulp.src(['./javascript/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(concat('a5main.js'))
    .pipe(gulp.dest(SCRIPT));
});

gulp.task('watch', function() {
   gulp.watch('*.js', function() {
     gulp.run('js');
   });
 });

gulp.task('default', ['js', 'css']);