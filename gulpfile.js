var gulp = require('gulp');
var concat = require('gulp-concat');
var angularTemplates = require('gulp-angular-templates');
var templateCache = require('gulp-angular-templatecache');
var runSequence = require('gulp-run-sequence');
var del=require('del');
var scripts=[
    'app/script/main.js',
    'app/script/directives/*.js'
];
gulp.task('scripts', function() {
    // 将你的默认的任务代码放在这
    return gulp.src(scripts)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('template',function(){
    return gulp.src('app/templates/*.html')
        .pipe(templateCache({
            module:'fast.template',
            root:'templates'
        }))
        .pipe(concat('template.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('merge',function(){
    return gulp.src('build/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('clean',function(cb){
   del(['build/*'],cb);
});
gulp.task('default',function(cb){
    runSequence('clean','template','scripts','merge',cb);
});