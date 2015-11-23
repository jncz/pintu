define([],function(){
    var f = function(){
        this.sx = 0;
        this.sy = 0;
        this.w = 100;
        this.h = 100;
        this.dim = function(sx,sy,w,h){
            this.sx = sx;
            this.sy = sy;
            this.w = w;
            this.h = h;
        };
        
        this.canvas = function(domId){
            var d = $(domId);
        };
    };
    
    return f;
});
