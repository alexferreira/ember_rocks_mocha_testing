//import resolver from './helpers/resolver';

//document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');
describe("test", function() {
  it("should pass", function(done){
    [1,2,3].indexOf(5).should.equal(-1);
    [1,2,3].indexOf(0).should.equal(-1);
    done();
  });
});
