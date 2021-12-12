const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

gulp.task('default', async cb => {
    // Compiles all SASS files to CSS
    gulp.src(`./src/modules/*.sass`)
        .pipe(sass({ indentedSyntax: false, outputStyle: 'compressed' }))
        .pipe(gulp.dest(`./use`))
})