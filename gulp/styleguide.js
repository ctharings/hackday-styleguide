'use strict';

module.exports = function(gulp) {

    var gulp = require('gulp');
    var styledocco = require('gulp-styledocco');
    var sass = require('gulp-sass');

    // Initialize the Gulp Help plugin
    gulp = require('gulp-help')(gulp, {
        hideEmpty: true,
        hideDepsMessage: true
    });

    gulp.task('styledocco', 'Create styledocco assets.', function () {
        gulp.src('./css/**/*.css')
            .pipe(styledocco({
                out: 'docs',
                //preprocessor: 'scss --compass',
                name: 'LEADPAGES STYLE GUIDE'
            }));
    });

    gulp.task('sass', 'Create CSS files from Sass sources.', function () {
        gulp.src('./scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });

    gulp.task('sass:watch', function () {
        gulp.watch('./scss/**/*.scss', ['sass']);
    });

    gulp.task('build', 'Compile Sass and styledocco in one step.', ['sass', 'styledocco']);

    // Set the default task to display the help menu
    gulp.task('default', ['help']);

    return gulp;

}
