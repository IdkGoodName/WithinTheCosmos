const gulp = require('gulp')
const argv = require('yargs').argv
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))

gulp.task('default', async cb => {
    // Compiles all SASS files to CSS
    gulp.src(['./guilded/*.sass'])
        .pipe(concat('guilded.sass'))
        .pipe(sass({ indentedSyntax: false, outputStyle: 'compressed' }))
        .pipe(gulp.dest(`./use/${argv.path ?? 'dark'}`))
})