/**
 * Created by brenden on 5/5/2014.
 */
if(BJM === undefined){
    var BJM = {};
}

BJM.mouse = function() {
    "use strict";
    var self = this instanceof BJM.mouse ? this : Object.create(BJM.mouse.prototype);
    var x = 0;
    var oldX = 0;
    var y = 0;
    var oldY = 0;
    var buttons = [];

    var mouseMove = function(e){
        x = e.x;
        y = e.y;
    };
    var mouseDown = function(e){
        buttons[e.button] = true;
    };
    var mouseUp = function(e){
        buttons[e.button] = false;
    };

    self.getMousePosition = function(){
        oldX = x;
        oldY = y;
        return {"x":x, "y":y};
    };

    self.getOldMousePosition = function(){
        return {"x":oldX,"y":oldY};
    };

    document.body.onmousemove = mouseMove.bind(this);
    document.body.onmousedown = mouseDown.bind(this);
    document.body.onmouseup = mouseUp.bind(this);
};