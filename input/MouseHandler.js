/**
 * Created by brenden on 5/5/2014.
 */
if(BJM === undefined){
    var BJM = {};
}

BJM.mouse = function() {
    "use strict";
    var self = this instanceof BJM.mouse ? this : Object.create(BJM.mouse.prototype);
    self.x = 0;
    self.y = 0;
    var buttons = [];

    var mouseMove = function(e){
        this.x = e.x;
        this.y = e.y;
    };

    var mouseDown = function(e){
        buttons[e.button] = true;
    };
    var mouseUp = function(e){
        buttons[e.button] = false;
    };

    document.body.onmousemove = mouseMove.bind(this);
    document.body.onmousedown = mouseDown.bind(this);
}