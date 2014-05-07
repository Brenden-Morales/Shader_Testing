/**
 * Created by brenden on 5/4/2014.
 */
if(BJM === undefined){
    var BJM = {};
}

BJM.keyboard = function(){
    "use strict";
    var self = this instanceof BJM.keyboard ? this : Object.create(BJM.keyboard.prototype);
    var keys = {};

    var keydown = function(e){
        if(keys[String.fromCharCode(e.keyCode).toLowerCase()] === undefined){
            keys[String.fromCharCode(e.keyCode).toLowerCase()] = {};
        }
        keys[String.fromCharCode(e.keyCode).toLowerCase()].down = true;
    };

    var keyup = function(e){
        if(keys[String.fromCharCode(e.keyCode).toLowerCase()] === undefined){
            keys[String.fromCharCode(e.keyCode).toLowerCase()] = {};
        }
        keys[String.fromCharCode(e.keyCode).toLowerCase()].down = false;
    };

    self.get = function(char){
        if(keys[char] !== undefined){
            if(keys[char].down){
                return true;
            }
        }
        return false;
    };

    window.onkeydown = keydown.bind(this);
    window.onkeyup = keyup.bind(this);
    return self;
};