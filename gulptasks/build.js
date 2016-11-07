var gulp = require('gulp'),
del=require('del'),
imagemin=require('gulp-imagemin'),
usemin=require('gulp-usemin'),
cssnano=require('gulp-cssnano'),
uglify=require('gulp-uglify'),
rev=require('gulp-rev'),
ngAnnotate = require('gulp-ng-annotate'),
browserSync=require('browser-sync').create();

gulp.task('usemin',['deleteDistFolder'],function(){
   return gulp.src('./client/index.html')
              .pipe(usemin({
                css:[function(){return rev()},function(){return cssnano( {discardComments: {removeAll: true}} )}],
                js:[function(){return rev()},function(){return ngAnnotate()},function(){return uglify()}]
              }))
              .pipe(gulp.dest('./client/dist'))
});

gulp.task('deleteDistFolder', function() {
  return del("./client/dist");
});

gulp.task('copyOtherFiles', ['deleteDistFolder'], function() {
  return gulp.src(['./client/app/data/**/*'])
        .pipe(gulp.dest("./client/dist/app/data"));
});

gulp.task('copyTemplates', ['deleteDistFolder'], function() {
  return gulp.src(['./client/app/templates/*'])
        .pipe(gulp.dest("./client/dist/app/templates"));
});


gulp.task('compressImages', ['deleteDistFolder'], function() {
  return gulp.src(['./client/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./client/dist/assets/images"));
});

gulp.task('build',['compressImages','deleteDistFolder','copyOtherFiles','usemin','copyTemplates']);

gulp.task('previewDist',function() {
  browserSync.init({
     server:{
       baseDir:'./client/dist'
     }
  });
});
