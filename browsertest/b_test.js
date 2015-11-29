var assert = chai.assert;
describe('Test Framework test', function() {
  describe('assert test', function () {
    it('should not null', function () {
      assert.isNotNull("");
    });
    it('should be null', function () {
      assert.isNull(null);
    });
    it('should be null', function () {
      assert.ok(!$("non_existed_dom_id").id);
    });
  });
});
