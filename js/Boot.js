define(["cp/CanvasManager"],function(CanvasManager){
    var b = function(){
        this.boot = function(){
        console.log("boot");
        var can = new CanvasManager();
	      can.canvas("body","mycanvas2");
        };
    };
    
    return b;
});
