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
});
