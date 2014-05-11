// standard global variables
var container, scene, camera, renderer, controls, stats;
//var keyboard = new KeyboardState();
var clock = new THREE.Clock();

// custom global variables
var mesh;

init();
animate();

// FUNCTIONS
function init()
{
    "use strict";
    // SCENE
    scene = new THREE.Scene();
    // CAMERA
    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    scene.add(camera);
    camera.position.set(0,150,400);
    camera.lookAt(scene.position);
    // RENDERER
    renderer = new THREE.WebGLRenderer( {antialias:true,canvas:document.getElementById("mainCanvas")} );
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    var light = new THREE.PointLight(0xffffff);
    light.position.set(100,250,100);
    scene.add(light);

    var geometry = new THREE.SphereGeometry( 30, 32, 16 );
    var material = new THREE.MeshLambertMaterial( { color: 0x000088 } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(0,40,0);
    scene.add(mesh);

}

function animate()
{
    "use strict";
    window.requestAnimationFrame( animate );
    render();
    update();
}

function update()
{
}

function render()
{
    "use strict";
    renderer.render( scene, camera );
}