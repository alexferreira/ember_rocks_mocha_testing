import {Calculator} from './calculator.js';
import Ember from 'ember';

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

  it('should load up Ember framework', function(){
    Ember.should.be.an('object');
    Ember.VERSION.should.equal('1.6.1');
  });
});
