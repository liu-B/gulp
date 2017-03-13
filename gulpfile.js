var gulp = require("gulp"),
    scss = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    watch = require("gulp-watch"),
    reload = browserSync.reload;

function scssfn() {
    return gulp.src("./scss/*.scss")
        .pipe(scss({ outputStyle: 'compact' }).on('error', scss.logError)) //outputStyle:nested, expanded, compact, compressed;css压缩的模式
        .pipe(gulp.dest("./css"))
        .pipe(reload({ stream: true }));
}
gulp.task('server', ['scss'], function() {
    browserSync.init({
        server: { index: "index.html" }
    });
    watch('./scss', function() {
        scssfn()
    });
    watch('./*.html', reload)
});
gulp.task("scss", function() {
    scssfn()
});

gulp.task('default', ['server']);
