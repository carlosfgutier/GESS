var gulp = require('gulp');
var sass = require('gulp-sass'); //To compile SASS to CSS
var browserSync = require('browser-sync').create(); //To reload browerser
var useref = require('gulp-useref'); //To optimize CSS and JS files

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: ['views', 'public']
		}
	});
});

gulp.task('sass', function() {
	return gulp.src('public/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.reload({
			stream:true
		}));
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('public/scss/**/*.scss', ['sass']);
	gulp.watch('views/*.html', browserSync.reload);
	gulp.watch('public/js/**/*.js', browserSync.reload);
});

gulp.task('useref', function() {
	return gulp.src('views/*.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});

