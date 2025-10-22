// Scene Initialization
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer(document.getElementById('solar-canvas'));

// Lighting
// Add ambient light with low intensity
scene.add(new THREE.AmbientLight(0x333333, 0.3));

// Add bright white point light at the Sun's position (origin)
var sunLight = new THREE.PointLight(0xffffff, 1, 1000);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

// Renderer Config
renderer.antialias = true;
renderer.pixelRatio = window.devicePixelRatio;
renderer.physicallyCorrectLights = true;
renderer.setClearColor(0x000000);

// Camera Setup
// Position the camera to an initial view
camera.position.set(0, 50, 150);

// Resize Handling
window.onresize = function() {
  // Update camera aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
};
