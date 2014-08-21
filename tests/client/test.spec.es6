import {Calculator} from './calculator.js';
import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';

import Application from "rocks/app";
var App = Application['default'];
//var Application = require('rocks/app')['default'];

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
    Ember.VERSION.should.equal('1.6.1');
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
  // beforeEach(function () {
  //   Ember.run(function(){

  //   })
  // });

  it('should load up ember-rocks application', function(){
    (typeof Application.create).should.be.exist;
    (App.create).should.be.an('function');
  });
});
