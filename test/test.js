var assert = require("assert");
define = require('node-requirejs-define');

define.config({
  baseUrl: __dirname,
  paths: {
    'cp': '../js'
  }
});

var ResLoader = require('../js/ResLoader');
describe('ResLoader', function() {
  describe('load by require', function () {
    it('should not null', function () {
      assert.notEqual(null,ResLoader);
    });
  });
});

describe("ResLoad Instance",function(){
  var loader = new ResLoader();
  beforeEach("renew the ResLoader",function(){
    loader = new ResLoader();
  });  
  describe('loadImg method', function () {
    it('should exist', function () {
        assert.ok(loader.loadImg);
    });
  });
  describe('loadImg return ImageRes', function () {
    it('should exist', function () {
        var img = loader.loadImg();
        assert.ok();
    });
  });
});

var CanvasManager = require('../js/CanvasManager');
describe("CanvasManager",function(){
  var m = new CanvasManager();
  beforeEach("renew the CanvasManager",function(){
    m = new CanvasManager();
  });
  
  describe("#dim",function(){
    it("not called, default value should be used",function(){
      assert.ok(m.sx === 0);
      assert.ok(m.sy === 0);
      assert.ok(m.w === 100);
      assert.ok(m.h === 100);
    });
    
    it("should set dimension correctly",function(){
      m.dim(8,10,20,30);
      assert.ok(m.sx === 8);
      assert.ok(m.sy === 10);
      assert.ok(m.w === 20);
      assert.ok(m.h === 30);
    });
  });
  
  describe("#canvas",function(){
    var domId = "test";
    m.canvas(domId);
  });
});
