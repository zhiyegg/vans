var gulp = require('gulp');


// gulp.task("copy-index",function () {
//     gulp.src('*.html')
//         .pipe(gulp.dest('D:\\phpStudy\\WWW\\myvans'));
// });
gulp.task("copy-index",function () {
    gulp.src('html/*.html')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\myvans\\html'));
});

gulp.task('copy-images',function(){
    gulp.src('img/*.{jpg,png,tmp,gif}')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\myvans\\img'));
});

gulp.task('copy-js',function(){
    gulp.src('js/*.js')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\myvans\\js'));
});

gulp.task('copy-css',function(){
    gulp.src('css/*.css')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\myvans\\css'));
});
gulp.task('copy-php',function(){
    gulp.src('php/*.php')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\myvans\\php'));
});


gulp.task("watchall",function(){
    //监视index.html文件是否有变化，如果有变化，就执行任务：copy-index
    gulp.watch("html/*.html",["copy-index"]);
    gulp.watch('img/*.{jpg,png,tmp,gif}',["copy-images"]);
    gulp.watch('js/*.js',["copy-js"]);
    gulp.watch('css/*.css',["copy-css"]);
    gulp.watch('php/*.php',["copy-php"]);

});
