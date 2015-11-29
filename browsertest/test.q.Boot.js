QUnit.test( "A test in single js file", function( assert ) {
  var value = "hello";
  assert.equal( value, "hello", "We expect this work" );
});

require(["cp/Boot"],function(Boot){
  QUnit.test( "A test in single js file with require", function( assert ) {
    var b = new Boot();
    assert.equal(b.boot(), "We expect this work" );
  });
});
