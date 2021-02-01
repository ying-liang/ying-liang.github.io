const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
function htmlMin () {
    return gulp
        .src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./"));
}
const image = require("gulp-image");
function imgMin() {
    return gulp
        .src("./src/img/*")
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
        .pipe(gulp.dest("./img"));
}
const cleanCSS = require("gulp-clean-css");
function cssMin () {
    return gulp
        .src("./src/css/*.css")
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(gulp.dest("./css"));
}
/*gulp imgMin*/ exports.imgMin = imgMin;
/*gulp cssMin*/ exports.cssMin = cssMin;
/*gulp htmlMin*/ exports.htmlMin = htmlMin;
/*default gulp task example*/
//gulp.task("imgMin", imgMin);
//gulp.task("default", gulp.series("imgMin"));


