var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function () {
    return gulp.src('./markup/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./markup/css'));
});

gulp.task('watch', function () {
    gulp.watch('./markup/scss/**/*.scss', ['build']);
});
