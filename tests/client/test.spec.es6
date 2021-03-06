import {Calculator} from './calculator.js';
import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import App from "rocks/app";

import StartApp from './helpers/start-app.js';

describe('Calculator', function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it('should add', function () {
    (calculator.add(2, 2)).should.equal(4);
  });

  it('should subtract', function () {
    (calculator.subtract(2, 1)).should.equal(1);
  });
});

describe('Vendor Resource', function () {
  it('should load up Ember framework', function(){
    Ember.should.be.an('object');
    Ember.VERSION.should.equal('1.7.0');
  });

  it('should load up Ember Data framework', function(){
    DS.Store.should.be.a('function');
    DS.Store.extend.should.be.a('function');
  });

  it('should load up Ember Data framework', function(){
    Resolver.should.be.a('function');
    Resolver.create.should.be.a('function');
  });
});

describe('Application', function () {
  it('should load up ember-rocks application', function(){
    (typeof App.create).should.be.exist;
    (App.create).should.be.an('function');
  });

  it('should load up custom mocha-adaptor', function(){
    //Ember.Test.adapter = Ember.Test.MochaAdapter.create();
    MochaAdapter.should.be.an('function');
    MochaAdapter.create.should.be.an('function');
  });
});

/*
describe('App Test', function () {
  var TestApp;

  beforeEach(function () {
    TestApp = StartApp();
    visit('/');
  });

  // afterEach(function() {
  //   TestApp.reset();
  //   // Ember.run(TestApp, TestApp.destroy);
  // });

  it('should have a page title', function(){
    find('h1 a').text().should.equal('Ember Rocks');
  });
});
*/
