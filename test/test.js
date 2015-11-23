var assert = require("assert");
var ResLoader = require('../js/ResLoader');

describe('ResLoader', function() {
  describe('load by require', function () {
    it('should not null', function () {
      assert.notEqual(null,ResLoader);
    });
  });
});

describe("ResLoader",function(){
  var loader = new ResLoader();
  beforeEach("renew the ResLoader",function(){
    loader = new ResLoader();
  });  
  describe('#loadImg', function () {
    it('should exist', function () {
        assert.ok(loader.loadImg);
    });
  });
  describe('#loadImg', function () {
    it('with null resource path, should return null', function () {
        var img = loader.loadImg();
        console.dir(img);
        img.then(function(d){
          assert.ok(d.length == 0);
        });
    });
    
    it('with valid resource path, should return img obj, type should be Promise', function () {
        var path = "./imgs/img.jpg";
        loader.init(path);
        var img = loader.loadImg();
        assert.ok(img);
        img.then(function(d){
          assert.ok(d.src);
        });
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
});


