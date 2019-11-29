const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemap = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemap.init()) 
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemap.write('../maps'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function concatCSS() {
    return gulp.src('./css/**/*.css')
        .pipe(sourcemap.init({loadMaps: true, largeFile: true}))
        .pipe(uglifycss())
        .pipe(sourcemap.write('../maps'))
        .pipe(gulp.dest('./dist/css'));
}

function javascript() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function imgmin() {
    return gulp.src('./img/*')
    .pipe( imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe( gulp.dest('./dist/img'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    gulp.watch('./scss/**/*.scss').on('change', gulp.series([style,concatCSS,browserSync.reload]));
    gulp.watch('./js/**/*.js').on('change',gulp.series([javascript,browserSync.reload]));
    gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.concatCSS = concatCSS;
exports.javascript = javascript;
exports.imgmin = imgmin;