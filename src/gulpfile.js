const gulp = require("gulp");
const webpack = require("webpack-stream");
const config  = require("./webpack.config.js")
const less = require("gulp-less");

gulp.task("webpack", done => {
    gulp.src("./js/**/*.js")
        .pipe(webpack(config))
        .pipe(gulp.dest("../www/js"))
    return done();
});

gulp.task("less", done => {
    gulp.src("./less/*less")
        .pipe(less())
        .pipe(gulp.dest("../www/css"));
    return done();     
});

gulp.task("default", gulp.parallel("webpack","less"));
