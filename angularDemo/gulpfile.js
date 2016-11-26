/**
 * 自动化构建
 * 
 * author：glasstea
 * create time:2016-10-27
 */
var gulp = require("gulp");
var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var less = require('gulp-less');
var concat = require('gulp-concat');
// var connect = require('gulp-connect');
var webserver = require('gulp-webserver');
// 拷贝基础库
gulp.task("copy:libs", function () {
    console.log('正在拷贝库和框架...')
    gulp.src([
        './node_modules/angular/**/*.*',
        './node_modules/jquery/dist/**/*.*',
        './node_modules/bootstrap/dist/**/*.*',
        './node_modules/angular-ui-router/release/**/*.*',
        './node_modules/angular-ui-bootstrap/dist/**/*.*',

    ], { base: 'node_modules' })
        .pipe(gulp.dest('./app/libs'))
        .pipe(gulp.dest('./dist/libs'))
})

// 拷贝资源
gulp.task('copy:res', ['combine:styles'], function () {
    console.log('正在拷贝资源...')
    gulp.src([
        './app/res/**/*.*',
        '!./app/res/styles/**/*.*'
    ], { base: 'app' })
        .pipe(gulp.dest('./dist'))
    gulp.src([
        './app/index.html'
    ])
        .pipe(gulp.dest('./dist'))
})

// 编译CSS
gulp.task('compile:styles', function () {
    console.log('正在编译less文件到css文件...')
    return gulp.src('./app/res/styles/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./app/res/styles/css'));
})

// 合并、拷贝CSS
gulp.task('combine:styles', ['compile:styles'], function () {
    console.log('正在合并拷贝css文件...')
    gulp.src('./app/res/styles/css/site.css')
        .pipe(gulp.dest('./dist/res/styles'));
    gulp.src([
        './app/res/styles/**/*.css',
        '!./app/res/styles/site.css'
    ])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist/res/styles'))
})

// browserify
gulp.task("browserify", ['copy:libs', 'copy:res'], function () {
    console.log('正在打包JavaScript...')
    var b = browserify({
        entries: "./app/entry.js",
        debug: true
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist"));
});
gulp.task('watch',function(){
    gulp.watch([
        './app/**/*.*',
        '!./app/res/styles/css/**/*.*',
        '!./app/libs/**/*.*',
    ],['browserify'])    
})
gulp.task('default', ['watch','browserify'], function () {
    // connect.server({
    //     port:33335,
    //     livereload: true,
    //     root:'dist'
    // });
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            proxies: [
                {
                    source: '/abc',
                    target: 'http://www.baidu.com',
                    options: { headers: { 'ABC_HEADER': 'abc' } }
                }
            ]
        }))
})