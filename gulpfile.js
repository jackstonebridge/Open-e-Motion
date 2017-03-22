var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rucksack = require('gulp-rucksack'),
    uglify = require('gulp-uglify'),
    obfuscate = require('gulp-obfuscate'),
    //swPrecache = require('sw-precache'),
    paths = {
      stylusCore: ['styl/main.styl'],
      stylusDir: ['styl/*.styl', 'styl/**/*.styl'],
      jadeDir: ['jade/*.jade', 'jade/**/*.jade'],
      jsDir: ['js/dev/app.js', 'js/dev/app.directives.js']
    };

gulp.task('stylus', function() {
  gulp.src(paths.stylusCore)
    .pipe(plumber())
    .pipe(stylus({
      compress: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('jade', function() {
  gulp.src(paths.jadeDir)
    .pipe(jade({
      pretty: false
    }))
    .pipe(gulp.dest('html'))
});

gulp.task('js', function () {
  gulp.src(paths.jsDir)
    //.pipe(uglify())
    .pipe(obfuscate({
      replaceMethod: obfuscate.ZALGO
    }))
    .pipe(gulp.dest('js'));
});

gulp.task('default', function(){
  gulp.watch(paths.stylusDir, ['stylus']);
  gulp.watch(paths.jadeDir, ['jade']);
  gulp.watch(paths.jsDir, ['js']);
});
