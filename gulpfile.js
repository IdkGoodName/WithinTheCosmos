const sass = require("gulp-sass")(require("node-sass"));
const gulp = require("gulp");
const path = require("path");
const fs = require("fs");

gulp.task("default", async cb => {
    const schemePath = path.join("./src/schemes", "AbsoluteNihility") + ".sass";

    // Compiles all SASS files to CSS
    gulp.src(`./src/modules/*.sass`)
        .pipe(
            sass({
                indentedSyntax: true,
                outputStyle: "compressed",
                importer: (url, prev) => {
                    console.log("A", url, prev);
                    return { file: url };
                }
            })
        )
        .pipe(gulp.dest(`./use`));
});
