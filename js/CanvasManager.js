define([],function(){
    var f = function(){
        this.dimProp = {"w":100,"h":100};
        this.curCanvas = null;
        this.dim = function(w,h){
            this.dimProp = {"w":w,"h":h};
            apply(this.dimProp,this.curCanvas);
        };
        
        var nodeExist = function(/**String|JQ obj**/ node){
          return $(node).length > 0;
        };
        var createCanvasElement = function(canvasId){
            var c = $("<canvas></canvas>");
            c.attr("id",canvasId);
            return c;
        };
        var apply = function(prop,canvas){
            canvas.attr("width",prop.w);
            canvas.attr("height",prop.h);
        };
        this.canvas = function(/**String|JQ obj**/ parent,/**String*/ canvasId){
            var d = $(parent);
            canvasId = canvasId || "canvas_default";
            if(nodeExist(d)){
              var canvas = createCanvasElement(canvasId);
              d.append(canvas);
              this.curCanvas = canvas;
              apply(this.dimProp,this.curCanvas);
              return canvas;
            }
            return null;
        };
        this.getCanvas = function(/**String*/ id){
            return $(id);
        };
        
    };
    
    return f;
});
