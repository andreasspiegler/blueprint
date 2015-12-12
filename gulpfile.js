var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') 
    notify = require('gulp-notify') 

var config = {
     sassPath: './work/src/scss',
    bootstrapPath: './node_modules/bootstrap-sass'
}

gulp.task('css', function() { 
    return gulp.src(config.sassPath + '/style.scss')
         .pipe(sass({
             style: 'compressed',
             loadPath: [
                 './src/scss',
                 config.bootstrapPath + '/assets/stylesheets',
             ]
         }) 
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))) 
        .pipe(gulp.dest('./public/css')); 
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

  gulp.task('default', ['css']);
