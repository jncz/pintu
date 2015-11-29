
require(["cp/CanvasManager"],function(CanvasManager){
QUnit.module("CanvasManager",{
  beforeEach: function() {
    $("#testArea").html("");
  },
  afterEach: function() {
    $("#testArea").html("");
  }
});
  QUnit.test( "#canvas", function( assert ) {
    var cm = new CanvasManager();
    assert.ok(!$("canvas_manager").length,"canvas element does not exist before attach to dom");
    var c = cm.canvas("#testArea");
    cm.dim(500,500);
    assert.ok(!!c.length,"canvas element exist after attach to dom");
    assert.ok(c.attr("id") === "canvas_default","canvas element exist with default id");
  });
  
  QUnit.test( "#canvas with 2 paramters", function( assert ) {
    var cm = new CanvasManager();
    var c = cm.canvas("#testArea","myid");
    assert.ok(c.attr("id") === "myid","canvas element exist with id");
  });
});

