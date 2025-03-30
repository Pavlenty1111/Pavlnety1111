import gulp from "gulp";
<<<<<<< HEAD
import del from "del";
import include from "gulp-file-include";
import formatHtml from "gulp-format-html";
=======

import del from "del";
import include from "gulp-file-include";
import formatHtml from "gulp-format-html";

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
import less from "gulp-less";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import minify from "gulp-csso";
import rename from "gulp-rename";
<<<<<<< HEAD
import terser from "gulp-terser";
=======

import terser from "gulp-terser";

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
import imagemin from "gulp-imagemin";
import imagemin_gifsicle from "imagemin-gifsicle";
import imagemin_mozjpeg from "imagemin-mozjpeg";
import imagemin_optipng from "imagemin-optipng";
<<<<<<< HEAD
import svgmin from "gulp-svgmin";
import svgstore from "gulp-svgstore";
import server from "browser-sync";
=======

import svgmin from "gulp-svgmin";
import svgstore from "gulp-svgstore";

import server from "browser-sync";

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
const resources = {
  html: "src/html/**/*.html",
  jsDev: "src/scripts/dev/**/*.js",
  jsVendor: "src/scripts/vendor/**/*.js",
  images: "src/assets/images/**/*.{png,jpg,jpeg,webp,gif,svg}",
  less: "src/styles/**/*.less",
  svgSprite: "src/assets/svg-sprite/*.svg",
  static: [
    "src/assets/icons/**/*.*",
    "src/assets/favicons/**/*.*",
    "src/assets/fonts/**/*.{woff,woff2}",
<<<<<<< HEAD
    // "src/assets/video/**/*.{mp4,webm}",
    // "src/assets/audio/**/*.{mp3,ogg,wav,aac}",
    // "src/json/**/*.json",
    // "src/php/**/*.php"
  ]
};
// Gulp Tasks:
function clean() {
  return del("dist");
}
=======
    "src/assets/video/**/*.{mp4,webm}",
    "src/assets/audio/**/*.{mp3,ogg,wav,aac}",
    "src/json/**/*.json",
    "src/php/**/*.php"
  ]
};

// Gulp Tasks:

function clean() {
  return del("dist");
}

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
function includeHtml() {
  return gulp
    .src("src/html/*.html")
    .pipe(plumber())
    .pipe(
      include({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(formatHtml())
    .pipe(gulp.dest("dist"));
}
<<<<<<< HEAD
=======

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
function style() {
  return gulp
    .src("src/styles/styles.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(
      postcss([
        autoprefixer({ overrideBrowserslist: ["last 4 version"] }),
        sortMediaQueries({
          sort: "desktop-first"
        })
      ])
    )
    .pipe(gulp.dest("dist/styles"))
    .pipe(minify())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("dist/styles"));
}
<<<<<<< HEAD
=======

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
function js() {
  return gulp
    .src("src/scripts/dev/*.js")
    .pipe(plumber())
    .pipe(
      include({
        prefix: "//@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest("dist/scripts"))
    .pipe(terser())
    .pipe(
      rename(function (path) {
        path.basename += ".min";
      })
    )
    .pipe(gulp.dest("dist/scripts"));
}
<<<<<<< HEAD
=======

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
function jsCopy() {
  return gulp
    .src(resources.jsVendor)
    .pipe(plumber())
    .pipe(gulp.dest("dist/scripts"));
}
<<<<<<< HEAD
function copy() {
  return gulp
    .src(resources.static, {
      base: "src",
      encoding: false
=======

function copy() {
  return gulp
    .src(resources.static, {
      base: "src"
>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
    })
    .pipe(gulp.dest("dist/"));
}

function images() {
<<<<<<< HEAD
  encoding: false;
  return gulp
  
=======
  return gulp
>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
    .src(resources.images)
    .pipe(
      imagemin([
        imagemin_gifsicle({ interlaced: true }),
        imagemin_mozjpeg({ quality: 100, progressive: true }),
        imagemin_optipng({ optimizationLevel: 3 })
<<<<<<< HEAD
        
      ])
      
    )
    .pipe(gulp.dest("dist/assets/images"));
}
=======
      ])
    )
    .pipe(gulp.dest("dist/assets/images"));
}

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
function svgSprite() {
  return gulp
    .src(resources.svgSprite)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(
      svgstore({
        inlineSvg: true
      })
    )
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("dist/assets/icons"));
}
<<<<<<< HEAD
=======

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
const build = gulp.series(
  clean,
  copy,
  includeHtml,
  style,
  js,
  jsCopy,
  images,
  svgSprite
);
<<<<<<< HEAD
=======

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
function reloadServer(done) {
  server.reload();
  done();
}
<<<<<<< HEAD
=======

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
function serve() {
  server.init({
    server: "dist"
  });
  gulp.watch(resources.html, gulp.series(includeHtml, reloadServer));
  gulp.watch(resources.less, gulp.series(style, reloadServer));
  gulp.watch(resources.jsDev, gulp.series(js, reloadServer));
  gulp.watch(resources.jsVendor, gulp.series(jsCopy, reloadServer));
  gulp.watch(resources.static, { delay: 500 }, gulp.series(copy, reloadServer));
  gulp.watch(resources.images, { delay: 500 }, gulp.series(images, reloadServer));
  gulp.watch(resources.svgSprite, gulp.series(svgSprite, reloadServer));
}
<<<<<<< HEAD
=======

>>>>>>> 05cdf026e219cc6d5702d9254f6c7d6e486eaabb
const start = gulp.series(build, serve);
export {
  clean,
  copy,
  includeHtml,
  style,
  js,
  jsCopy,
  images,
  svgSprite,
  build,
  serve,
  start
};