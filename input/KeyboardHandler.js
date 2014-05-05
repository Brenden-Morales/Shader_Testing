/**
 * Created by brenden on 5/4/2014.
 */
if(BJM === undefined){
    var BJM = {};
}

BJM.keyboard = function(){
    "use strict";
    var self = this instanceof BJM.keyboard ? this : Object.create(BJM.keyboard.prototype);
    self.keys = {};

    var keydown = function(e){
        console.log(e);
        console.log(String.fromCharCode(e.keyCode).toLowerCase());
        if(this.keys[String.fromCharCode(e.keyCode).toLowerCase()] === undefined){
            this.keys[String.fromCharCode(e.keyCode).toLowerCase()] = {};
        }
        this.keys[String.fromCharCode(e.keyCode)].down = true;
    };

    var keyup = function(e){
        console.log(e);
        console.log(String.fromCharCode(e.keyCode).toLowerCase());
        if(this.keys[String.fromCharCode(e.keyCode).toLowerCase()] === undefined){
            this.keys[String.fromCharCode(e.keyCode).toLowerCase()] = {};
        }
        this.keys[String.fromCharCode(e.keyCode)].down = false;
    };

    self.get = function(char){
        if(this.keys[char] !== undefined){
            if(this.keys[char].down){
                return true;
            }
        }
        return false;
    };

    window.onkeydown = keydown.bind(this);
    window.onkeyup = keyup.bind(this);
    return self;
}