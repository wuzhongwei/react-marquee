const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const size = require('gulp-filesize');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const DIR = {
  sass: path.resolve(__dirname, '../../components/**/*.scss'),
  buildSrc: path.resolve(__dirname, '../../components/**/index.scss'),
  lib: path.resolve(__dirname, '../../lib'),
  dist: path.resolve(__dirname, '../../dist'),
};

gulp.task('copySass', () => {
  return gulp.src(DIR.sass)
    .pipe(gulp.dest(DIR.lib));
});

gulp.task('dist', () => {
  return gulp.src(DIR.buildSrc)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({
      browsers: [
        'last 3 versions',
        'ie >= 9',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 6',
        'opera >= 12.1',
        'ios >= 6',
        'android >= 4.4',
        'bb >= 10',
        'and_uc 9.9',
      ],
    }))
    .pipe(concat('iybcs.css'))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename('iybcs.css.map'))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))

    .pipe(cssnano())
    .pipe(concat('iybcs.min.css'))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename('iybcs.min.css.map'))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist));
});

gulp.task('default', ['copySass']);
