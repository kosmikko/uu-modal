var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');

gulp.task('stylus', function () {
  gulp.src('./src/uu-modal.styl')
    .pipe(stylus({use: ['nib']}))
    .pipe(gulp.dest('./'));
});

gulp.task('js', function() {
  gulp.src('src/uu-modal.js')
    .pipe(browserify({
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('demo', function() {
  gulp.src('demo/demo.js')
    .pipe(browserify({
    }))
    .pipe(gulp.dest('./demo/build'))
});

gulp.task('watch', function(){
  gulp.watch('src/*.styl', ['stylus']);
  gulp.watch('src/*.js' , ['js', 'demo']);
  gulp.watch('demo/*.js' , ['demo']);
});