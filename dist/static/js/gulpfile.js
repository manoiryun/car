var gulp=require("gulp"),connect=require("gulp-connect"),htmlmin=require("gulp-htmlmin"),cssmin=require("gulp-minify-css"),jsmin=require("gulp-uglify"),webserver=require("gulp-webserver"),fs=require("fs"),url=require("url");gulp.task("yshtml",function(){gulp.src("./index.html").pipe(htmlmin({})).pipe(gulp.dest("html"))}),gulp.task("yscss",function(){gulp.src("./*.css").pipe(cssmin()).pipe(gulp.dest("dist/static/css"))}),gulp.task("ysjs",function(){gulp.src("./*.js").pipe(jsmin()).pipe(gulp.dest("dist/static/js"))}),gulp.task("webserver",function(){gulp.src(".").pipe(webserver({port:8080,host:"localhost",middleware:function(e,s,r){var l=url.parse(e.url);s.setHeader("Access-Control-Allow-Origin","*"),console.log(e.url),"/"===l.pathname?s.end(fs.readFileSync("./index.html")):"/getdata"===l.pathname?s.end(JSON.stringify(json)):r()}}))}),gulp.task("default",["yshtml","yscss","ysjs","webserver"]);var json=[{code:"1"}];