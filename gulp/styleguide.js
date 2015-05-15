var gulp = require('gulp');
var styledocco = require('gulp-styledocco');
var replace = require('gulp-replace');

gulp.task('styledocco', function() {
	gulp.src('build/**/*.scss')
		.pipe(styledocco({
			out: 'docs',
			name: 'LEADPAGES STYLE GUIDE',
			'no-minify': true,
			preprocessor: '~/scss/sass',
			include: ['css/style.css', 'js/functions.js']
		}));
});

gulp.task('replace', function() {
    gulp.src('bourbon/app/assets/stylesheets/**/*.scss')
        .pipe(replace(/\/\/.*/g, ''))
        .pipe(gulp.dest('build'));
})

gulp.task('build', ['replace','styledocco']);
