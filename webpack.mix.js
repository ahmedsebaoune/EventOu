const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .react()
    .extract(['react'])
    // .sass('resources/scss/app.css', 'public/css')
    .postCss('resources/css/app.css', 'public/css')
    .copy('resources/app/assets/fonts', 'public/app/assets/fonts')
    .copy('resources/app/assets/img', 'public/app/assets/img')
    .copy('resources/app/assets/images', 'public/app/assets/images')
    .copy('resources/app/assets/js', 'public/app/assets/js')
    .copy('resources/app/assets/video', 'public/app/assets/video')
    .webpackConfig(require('./webpack.config'))

if (mix.inProduction()) {
    mix.version();
}
