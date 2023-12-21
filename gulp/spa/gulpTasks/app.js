const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(cb){
    return cb()
}

function appCss(cb){
    return cb()
}

function appJS(cb){
    return cb()
}

function appIMG(cb){
    return cb()
}

module.exports = {
    appHtml,
    appCss,
    appJS,
    appIMG
}