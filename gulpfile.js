/**
 * http://usejsdoc.org/
 */
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	htmlmin = require('gulp-htmlmin'),
	cssmin = require('gulp-minify-css'),
	jsmin = require('gulp-uglify'),
	webserver = require('gulp-webserver'),
	fs = require('fs'),
	url = require('url');

//压缩html

//压缩css
gulp.task('yscss', function(){
	gulp.src('./*.css').pipe(cssmin()).pipe(gulp.dest('dist/static/css'))
})
//压缩js
gulp.task('yscss', function(){
	gulp.src('./*.js').pipe(jsmin()).pipe(gulp.dest('dist/static/js'))
})
	
gulp.task('webserver', function(){
	gulp.src('.').pipe(webserver({
		port : 8080,
		host : 'localhost',
		middleware : function(req, res, next){
			var obj = url.parse(req.url);
			res.setHeader('Access-Control-Allow-Origin', '*');
			console.log(req.url)
			if(obj.pathname === '/'){
				res.end(fs.readFileSync('./index.html'))
			}else if(obj.pathname === '/getdata'){
				res.end(JSON.stringify(json))
			}else{
				next()
			}
		}
	}))
})

var json = [
	{
		
	}



]
