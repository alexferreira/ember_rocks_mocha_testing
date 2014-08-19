/*global define, describe, it*/

//document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

// define(
//   ['chai', 'ember/resolver', 'ember', 'rocks/app'],
//   function(Chai, Resolver, Ember) {
//   Chai.should();

  // var resolver = Resolver.create(), App;

  // resolver.namespace = {
  //   modulePrefix: 'TEST'
  // };

  // var attributes = Ember.merge({
  //   // useful Test defaults
  //   rootElement: '#ember-testing',
  //   LOG_ACTIVE_GENERATION:false,
  //   LOG_VIEW_LOOKUPS: false
  // });

//   Router.reopen({
//     location: 'none'
//   });

//   Ember.run(function(){
//     App = Application.create(attributes);
//     App.setupForTesting();
//     App.injectTestHelpers();
//   });

//   App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

// define(['chai', 'ember/resolver'], function(Chai, Resolver) {
//   Chai.should();

//   var resolver = Resolver.create();

//   describe('name', function() {
//     it('should be a string', function(done) {
//       var foo = 'matt ma';
//       foo.should.be.a('String');
//       foo.should.not.be.an('Array');
//       done();
//     });

//     it("should pass", function(done){
//       [1,2,3].indexOf(5).should.equal(-1);
//       [1,2,3].indexOf(0).should.equal(-1);
//       resolver.should.be.an('object');
//       done();
//     });
//   });
// });

import {Calculator} from './calculator.js';

describe('Calculator', function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it('should add', function () {
    expect(calculator.add(2, 2)).toEqual(4);
  });

  it('should subtract', function () {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });
});
