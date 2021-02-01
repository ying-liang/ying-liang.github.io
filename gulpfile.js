const gulp = require('gulp');
const { src, series, parallel, dest, watch } = require('gulp');
const html = require('gulp-htmlmin');
const image = require('gulp-image');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
function htmlMin () {
    return gulp
        .src('src/*.html')
        .pipe(html({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'));
}
function imgMin() {
    return gulp
        .src('./src/img/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./img'));
}
function cssMin () {
    return gulp
        .src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css'));
}
function jsMin(){
  return gulp.src('./src/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./js'));
}
exports.htmlMin = htmlMin;
exports.cssMin = cssMin;
exports.jsMin = jsMin;
exports.imgMin = imgMin;
exports.default = series(htmlMin, cssMin, jsMin, imgMin);