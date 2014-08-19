// Karma configuration
// Generated on Mon Aug 11 2014 17:10:35 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai', 'traceur'],


    // list of files / patterns to load in the browser
    files: [
      //{pattern: 'tests/client/**/*.js', included: false},
      {pattern: 'tests/client/**/*.es6', included: false},
      {pattern: 'tests/vendors/**/*.js', included: false},
      {pattern: 'client/app/**/*.js', included: false},
      {pattern: 'client/assets/vendors/**/*.js', included: false },

      // 'client/assets/vendors/jquery/dist/jquery.min.js',
      // 'client/assets/vendors/handlebars/handlebars.min.js',
      // 'client/assets/vendors/ember/ember.js',
      // 'client/assets/vendors/ember-data/ember-data.min.js',
      // 'client/assets/vendors/mocha-adapter.js',

      'client/assets/build/application.js',
      'client/assets/build/templates.js',
      'tests/client/karma-config.js',
      'tests/client/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/client/**/*.es6': ['traceur']
    },

    traceurPreprocessor: {
      options: {
        //sourceMap: true,
        modules: 'amd',
        annotations: true,
        types: true
      }
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR
    // || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-requirejs',
      'karma-traceur-preprocessor',
      //'karma-phantomjs-launcher'
      'karma-chrome-launcher'
    ]
  });
};
