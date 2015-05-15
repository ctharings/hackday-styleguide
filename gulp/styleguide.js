'use strict';

var gulp = require('gulp');
var styledocco = require('gulp-styledocco');
var sass = require('gulp-sass');

gulp.task('styledocco', function() {
	gulp.src('./css/**/*.css')
		.pipe(styledocco({
			out: 'docs',
			name: 'LEADPAGES STYLE GUIDE'
		}));
});

gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});


gulp.task('build', ['sass','styledocco']);
