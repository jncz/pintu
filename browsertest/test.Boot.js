  var assert = chai.assert;
  describe('Boot', function() {
  
    describe('#boot', function () {
      
      require(["cp/Boot"],function(Boot){
        var boot = new Boot();
        
        it('should return a Promise obj', function () {
          console.log(boot);
          assert.ok(boot.boot());
        });
      });
      
    });
    




  });  

