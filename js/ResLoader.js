var ResLoader = function(){
    var resPath = [];
    var createImgObj = function(){
      var imgs = [];
      for(var i=0;i<resPath.length;i++){
        var path = resPath[i];
        var img = new Image();
        img.src = path;
        imgs.push(img);    
      }
      return imgs;
    };
    this.loadImg = function(){
      return new Promise(function(resolve,reject){
        var imgs = createImgObj();
        return resolve(imgs);
      });
    };
    this.init = function(path){
      if(path instanceof Array){
        resPath = path;
      }else{
        resPath = [path];
      }
    };
};

module.exports = ResLoader;
