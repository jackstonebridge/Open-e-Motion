var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    rucksack = require('gulp-rucksack'),
    paths = {
      stylusCore: ['styl/main.styl'],
      stylusDir: ['styl/*.styl', 'styl/**/*.styl']
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

gulp.task('default', function(){
  gulp.watch(paths.stylusDir, ['stylus'])
});
