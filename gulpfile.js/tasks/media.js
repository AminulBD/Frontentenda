var config 		= require('../config')
var browserSync = require('browser-sync')
var changed 	= require('gulp-changed')
var imagemin 	= require('gulp-imagemin')
var gulpif 		= require('gulp-if')
var gulp 		= require('gulp')
var path 		= require('path')

var paths = {
	src: path.join(config.root.src, config.tasks.media.src, '/**'),
	dest: path.join(config.root.dest, config.tasks.media.dest)
}

var staticTask = function() {
	return gulp.src(paths.src)
		.pipe(changed(paths.dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream())
}

gulp.task('media', staticTask)
module.exports = staticTask
