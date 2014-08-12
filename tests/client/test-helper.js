/*global define, describe, it*/

//document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

define(['chai', 'ember/resolver'], function(Chai, Resolver) {
  Chai.should();

  var resolver = Resolver.create();

//   resolver.namespace = {
//     modulePrefix: 'TEST'
//   };

  describe('name', function() {
    it('should be a string', function(done) {
      var foo = 'matt ma';
      foo.should.be.a('String');
      foo.should.not.be.an('Array');
      done();
    });

    it("should pass", function(done){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
      resolver.should.be.an('object');
      done();
    });
  });
});
