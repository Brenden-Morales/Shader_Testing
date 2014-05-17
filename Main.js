var keyboard = new BJM.keyboard();
var mouse = new BJM.mouse();

// custom global variables
var mesh;

// SCENE
var scene = new THREE.Scene();
// CAMERA
var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
var cameraHolder = new THREE.Object3D();
var camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
cameraHolder.add(camera);
scene.add(camera);
camera.position.set(0,150,400);
camera.lookAt(new THREE.Vector3(0,0,0));
// RENDERER
var renderer = new THREE.WebGLRenderer(
    {
        antialias:true,
        canvas:document.getElementById("mainCanvas")
    }
);
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

var RTSCamera = new BJM.RTSCamera({
    viewAngle : VIEW_ANGLE,
    aspect : ASPECT,
    near : NEAR,
    far : FAR,
    scene : scene,
    keyboard : keyboard,
    mouse : mouse
});
RTSCamera.cameraHolder.position.set(0,150,400);
RTSCamera.lookAt(0,0,0);

var light = new THREE.PointLight(0xffffff);
light.position.set(100,250,100);
scene.add(light);

var geometry = new THREE.SphereGeometry( 30, 32, 16 );
var material = new THREE.MeshLambertMaterial( { color: 0x000088 } );
mesh = new THREE.Mesh( geometry, material );
mesh.position.set(0,0,0);
scene.add(mesh);

var mainPlain = new THREE.PlaneGeometry(100,100,100,100);
var mat = new THREE.MeshBasicMaterial({
    color : 0xffff00,
    side : THREE.DoubleSide
});
var pl = new THREE.Mesh(mainPlain,mat);
var matrix = new THREE.Matrix4();
matrix.makeRotationX(1.57079633);
pl.applyMatrix(matrix);
scene.add(pl);

animate();

function animate()
{
    "use strict";
    RTSCamera.init();
    window.requestAnimationFrame( animate );
    render();
}

function render()
{
    "use strict";
    RTSCamera.tick();
    renderer.render( scene, RTSCamera.getCamera() );
}