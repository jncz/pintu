var assert = require(["../bower_components/chai/chai"]);
var ResLoader = require(['../js/ResLoader']);
describe('ResLoader', function() {
  describe('load by require', function () {
    it('should not null', function () {
      console.log(assert);
      assert.not(ResLoader,"not null");
      
    });
  });
});
