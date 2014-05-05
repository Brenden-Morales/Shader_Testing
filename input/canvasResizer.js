/**
 * Created by brenden on 5/4/2014.
 */

window.onload = function(){
    "use strict";
    var canvas = document.getElementById("mainCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

window.onresize = function(){
    "use strict";
    var canvas = document.getElementById("mainCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}