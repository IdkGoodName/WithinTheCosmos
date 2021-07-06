const gulp = require('gulp')
const argv = require('yargs').argv
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))

gulp.task('default', async cb => {
    const platform = argv.platform ?? argv.p ?? 'guilded'
    // Compiles all SASS files to CSS
    gulp.src(['./base.sass', `./src/${platform}/**/*.sass`])
        .pipe(concat(`${platform}.sass`))
        .pipe(sass({ indentedSyntax: false, outputStyle: 'compressed' }))
        .pipe(gulp.dest(`./use`))
})