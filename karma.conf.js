// Karma configuration
// Generated on Mon Aug 11 2014 17:10:35 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      "client/assets/vendors/jquery/dist/jquery.min.js",
      "client/assets/vendors/handlebars/handlebars.min.js",
      "client/assets/vendors/ember/ember.js",
      "client/assets/vendors/almond.js",
      "client/assets/vendors/globalizer.js",
      "client/assets/vendors/mocha-adapter.js",
      "client/assets/build/application.js",
      "client/assets/build/templates.js",
      "tests/client/test-helper.js"
      //"tests/client/helpers/start-app.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
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


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
			'karma-mocha',
      'karma-chai',
			'karma-phantomjs-launcher'
		]
  });
};
