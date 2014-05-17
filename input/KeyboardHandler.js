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
        if(e.keyCode === 17){
            if(this.keys.control === undefined){
                this.keys.control = {};
            }
            this.keys.control.down = true;
        }
        if(this.keys[String.fromCharCode(e.keyCode).toLowerCase()] === undefined){
            this.keys[String.fromCharCode(e.keyCode).toLowerCase()] = {};
        }
        this.keys[String.fromCharCode(e.keyCode).toLowerCase()].down = true;
    };

    var keyup = function(e){
        if(e.keyCode === 17) {
            this.keys.control.down = false;
        }
        else{
            this.keys[String.fromCharCode(e.keyCode).toLowerCase()].down = false;
        }
//
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
};

BJM.keyboard.prototype.down = function(key){
    "use strict";
    if(this.keys[key] !== undefined && this.keys[key].down){
        return this.keys[key].down;
    }
    return false;
}