// Celestial Objects
var scene = scene; // access scene from scene.js

// Load textures
var textures = {};
var planets = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
planets.forEach(function(planet) {
  var texture = new THREE.TextureLoader().load('./assets/textures/' + planet + '.jpg');
  textures[planet] = texture;
});

// Planet Setup
var planetInfo = [
  { name: 'sun', radius: 10, orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0, angle: 0 },
  { name: 'mercury', radius: 1, orbitRadius: 20, orbitSpeed: 0.01, rotationSpeed: 0.05, angle: 0 },
  { name: 'venus', radius: 2, orbitRadius: 30, orbitSpeed: 0.005, rotationSpeed: 0.03, angle: 0 },
  { name: 'earth', radius: 1, orbitRadius: 40, orbitSpeed: 0.003, rotationSpeed: 0.02, angle: 0 },
  { name: 'mars', radius: 0.5, orbitRadius: 50, orbitSpeed: 0.002, rotationSpeed: 0.01, angle: 0 },
  { name: 'jupiter', radius: 5, orbitRadius: 60, orbitSpeed: 0.001, rotationSpeed: 0.005, angle: 0 },
  { name: 'saturn', radius: 4, orbitRadius: 70, orbitSpeed: 0.0008, rotationSpeed: 0.003, angle: 0 },
  { name: 'uranus', radius: 3, orbitRadius: 80, orbitSpeed: 0.0006, rotationSpeed: 0.002, angle: 0 },
  { name: 'neptune', radius: 2, orbitRadius: 90, orbitSpeed: 0.0004, rotationSpeed: 0.001, angle: 0 }
];

planetInfo.forEach(function(planet) {
  // Create mesh
  var geometry = new THREE.SphereGeometry(planet.radius, 32, 32);
  var material = new THREE.MeshBasicMaterial({ map: textures[planet.name] });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  // Add self-rotation
  mesh.rotation.y += planet.rotationSpeed;

  // Store planet info
  planet.mesh = mesh;
});

// Orbits
planetInfo.forEach(function(planet) {
  // Create orbit ring
  var orbitGeometry = new THREE.RingGeometry(planet.orbitRadius, planet.orbitRadius + 0.1, 64);
  var orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  var orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
  orbit.position.set(0, 0, 0);
  scene.add(orbit);
});

// Revolution Logic
function updateSolarSystem() {
  planetInfo.forEach(function(planet) {
    // Update orbit position
    planet.angle += planet.orbitSpeed;
    planet.mesh.position.x = planet.orbitRadius * Math.cos(planet.angle);
    planet.mesh.position.z = planet.orbitRadius * Math.sin(planet.angle);

    // Update rotation
    planet.mesh.rotation.y += planet.rotationSpeed;
  });
}

// Animation Integration
function animate() {
  requestAnimationFrame(animate);
  updateSolarSystem();
  renderer.render(scene, camera);
}