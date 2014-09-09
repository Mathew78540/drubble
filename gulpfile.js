var  gulp       = require('gulp')
    ,minifyCSS  = require('gulp-minify-css')
    ,concat     = require('gulp-concat')
    ,ngAnnotate = require('gulp-ng-annotate')
    ,ngConcat   = require('gulp-ngconcat')
    ,uglify     = require('gulp-uglify')
;

gulp.task('default', ['css', 'script-lib', 'script-app']);

/*
 Task (Concat / MinifyCss) the CSS files
*/
gulp.task('css', function(){
    gulp.src(['public/css/bootstrap.css', 'public/css/style.css'])
        .pipe(minifyCSS())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/css'));
});

/*
 Task (Concat / Uglify) the Lib files
*/
gulp.task('script-lib', function(){
   gulp.src([
       'public/js/lib/angular.min.js',
       'public/js/lib/angular-route.js',
       'public/js/lib/angular-translate.js',
       'public/js/lib/angular-translate-loader-url.js',
       'public/js/lib/jquery.min.js',
       'public/js/lib/bootstrap.min.js'
       ].reverse())
       .pipe(ngAnnotate())
       .pipe(uglify({mangle: false}))
       .pipe(ngConcat('lib.js'))
       .pipe(gulp.dest('public/js'));
});

/*
 Task (Concat / Uglify) the APP files
*/
gulp.task('script-app', function(){
   gulp.src([
       'public/js/app/app.js',
       'public/js/app/controllers.js',
       'public/js/app/directives.js',
       'public/js/app/services.js'
       ].reverse())
       .pipe(ngAnnotate())
       .pipe(uglify({mangle: false}))
       .pipe(ngConcat('app.js'))
       .pipe(gulp.dest('public/js'));
});

/*
 Task listen when you change file and execute the task
*/
gulp.task('watch', function() {
    gulp.watch(['public/css/bootstrap.css', 'public/css/style.css'], ['css']);
    gulp.watch('public/js/app/**/*.js', ['script-app']);
    gulp.watch('public/js/lib/**/*.js', ['script-lib']);
});