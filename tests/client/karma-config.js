var allTestFiles = [];
var TEST_REGEXP = /\.spec.js$/;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(file);
    console.log('allTestFiles: ', allTestFiles);
  }
});

requirejs.config({

  // Base URL relative to the test runner
  // Paths are relative to this
  baseUrl: '/base/client',

  paths: {
    'jquery'     : 'assets/vendors/jquery/dist/jquery.min',
    'handlebars': 'assets/vendors/handlebars/handlebars.min',
    'ember': 'assets/vendors/ember/ember',
    'ember-data' : 'assets/vendors/ember-data/ember-data.min',
    'adaptor': 'assets/vendors/mocha-adapter',
    'ember/load-initializers' : 'assets/vendors/ember-load-initializers/ember-load-initializers',
    'ember/resolver' : 'assets/vendors/ember-resolver/dist/ember-resolver'
    //'ember/resolver' : '../tests/vendors/resolver'
  },

  shim : {
    ember : {
      exports : 'Ember',
      deps : ['jquery', 'handlebars']
    },
    'ember/resolver' : {
      exports : 'Resolver',
      deps : ['ember']
    },
    'ember-data' : {
      exports : 'DS',
      deps : ['ember']
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },

  //dynamically load all test files
  deps: allTestFiles,

  // we have to kick of mocha, as it is asynchronous
  callback: window.__karma__.start
});
