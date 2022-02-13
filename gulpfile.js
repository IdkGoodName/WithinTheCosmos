const minimist = require("minimist");
const through = require("through2");
const stylus = require("stylus");
const gulp = require("gulp");
const path = require("path");

gulp.task("default", () => {
    const { s, m } = minimist(process.argv.slice(2));
    const schemePath = path.join(__dirname, "./src/schemes", s) + ".styl";

    // Compiles all SASS files to CSS
    return gulp
        .src(`./src/modules/${m || "*"}.styl`)
        .pipe(styl(schemePath))
        .pipe(gulp.dest(`./use/${s}`, { overwrite: true }));
});

function styl(schemePath) {
    return through.obj((file, encoding, callback) => {
        stylus(file.contents.toString(), { filename: file.path, compress: true })
            .import(schemePath)
            .render((err, css) => {
                if (err) callback(err.toString());

                file.path = file.path.replace(/[.]styl$/, ".css");
                file.contents = Buffer.from(css);
                callback(null, file);
            });
    });
}
