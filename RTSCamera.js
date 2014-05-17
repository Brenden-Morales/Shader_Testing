/**
 * Created by brenden on 5/10/2014.
 */
if(BJM === undefined){
    var BJM = {};
}

BJM.RTSCamera = function(configObject){
    "use strict";
    var self = this instanceof BJM.RTSCamera ? this : Object.create(BJM.RTSCamera.prototype);

    self.clock = new THREE.Clock();

    self.cameraHolder = new THREE.Object3D();
    self.camera = new THREE.PerspectiveCamera(configObject.viewAngle, configObject.aspect, configObject.near, configObject.far);
    self.cameraHolder.add(this.camera);
    configObject.scene.add(this.cameraHolder);
    self.keyboard = configObject.keyboard;
    self.previousTime = Date.now();

    return self;
};

BJM.RTSCamera.prototype.init = function(){
    "use strict";
    this.clock.start();
    this.clock.getDelta();
};

BJM.RTSCamera.prototype.getCamera = function(){
    "use strict";
    return this.camera;
};

BJM.RTSCamera.prototype.lookAt = function(x,y,z){
    "use strict";
    this.camera.lookAt(new THREE.Vector3(x,y,z));
};

BJM.RTSCamera.prototype.tick = function(){
    "use strict";
    var time = Date.now() - this.previousTime;
    this.previousTime = Date.now();
    if(this.keyboard.down("w")){
        this.cameraHolder.translateZ(-time);
    }
    if(this.keyboard.down("s")){
        this.cameraHolder.translateZ(time);
    }
    if(this.keyboard.down("q")){
        this.cameraHolder.rotateY(time / 1000);
    }
    if(this.keyboard.down("e")){
        this.cameraHolder.rotateY(-time / 1000);
    }
    if(this.keyboard.down("a")){
        this.cameraHolder.translateX(-time);
    }
    if(this.keyboard.down("d")){
        this.cameraHolder.translateX(time);
    }
    if(this.keyboard.down(" ")){
        this.cameraHolder.translateY(time);
    }
    if(this.keyboard.down("control")){
        this.cameraHolder.translateY(-time);
    }
};