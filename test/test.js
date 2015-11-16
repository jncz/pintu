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


