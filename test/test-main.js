
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/public/javascripts',

    paths: {
        jquery: 'bower_components/jquery/jquery',
        underscore: 'bower_components/underscore/underscore',
        backbone: 'bower_components/backbone/backbone'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: "Backbone"
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    plugins: [
            'karma-requirejs',
            'karma-junit-reporter',
            'karma-jasmine',
            'karma-html2js-preprocessor',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-coffee-preprocessor'
    ],

    // start test run, once Require.js is done
    callback: window.__karma__.start
});