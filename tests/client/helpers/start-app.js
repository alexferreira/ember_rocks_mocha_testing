/* global require */
var Resolver = require('ember-resolver')['default'];
var resolver = Resolver.create();
console.log('resolver: ', resolver);



// var Router = require('rocks/router')['default'];
// var Application = require('rocks/app')['default'];
// var Ember = require('ember');

// console.log('Application: ', Application);

// console.log('typeof require: ', typeof require);
// console.log('Ember: ', typeof Ember.Application);

// Ember.Application.extend({
//     LOG_ACTIVE_GENERATION: false,
//     LOG_VIEW_LOOKUPS: false,
//     LOG_MODULE_RESOLVER: false,
//     LOG_TRANSITIONS: false,
//     LOG_TRANSITIONS_INTERNAL: false,
//     modulePrefix: 'rocks',
//     Resolver: Resolver
//   });

//loadInitializers(App, 'rocks');

//modules.export = function startApp(attrs) {
// console.log('Application: ', Application);
// console.log('Router: ', Router);
// console.log('Resolver: ', Resolver);
// console.log('Ember.Version: ', Ember.Version);
//   var App;

//   var attributes = Ember.merge({
//     // useful Test defaults
//     rootElement: '#ember-testing',
//     LOG_ACTIVE_GENERATION:false,
//     LOG_VIEW_LOOKUPS: false
//   }, attrs); // but you can override;

//   Router.reopen({
//     location: 'none'
//   });

//   Ember.run(function(){
//     App = Application.create(attributes);
//     App.setupForTesting();
//     App.injectTestHelpers();
//   });

//   App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

//   return App;
//};
