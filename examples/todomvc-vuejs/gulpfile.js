'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var app = require('./server');
var vinylfs = require('vinyl-fs');

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
	return vinylfs.src([
		'site-assets/favicon.ico'
	], {
		dots: true,
		base: './',
		followSymlinks: false,
	})
	.pipe(vinylfs.dest('dist'))
	.pipe($.size({title: 'copy'}));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
	var assets = $.useref.assets({searchPath: '{.tmp,.}'});

	return gulp.src('index.html')
		.pipe(assets)
		.pipe(assets.restore())
		.pipe($.useref())
		// Output Files
		.pipe(gulp.dest('dist'))
		// Running vulcanize over the written output
		// because it requires access to the written
		// CSS and JS.
		.pipe($.vulcanize({ dest: 'dist', strip: true }))
		.pipe($.size({title: 'html'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
	runSequence(['copy'], ['html'], cb);
});

gulp.task('serve', function (cb) {
	app.listen(8080, cb);
});

gulp.task('test-server', function (cb) {
	app.listen(8080, cb);
});
