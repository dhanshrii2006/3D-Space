// Orbit Controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.zoomSpeed = 0.5;
controls.rotateSpeed = 0.5;
controls.panSpeed = 0.5;
controls.enableZoom = true;
controls.enableRotate = true;
controls.enablePan = true;

// Touch config
controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN
};

// Camera Focus Animation
function focusOnPlanet(planetMesh) {
  // Calculate camera position near the planet
  var cameraPosition = new THREE.Vector3();
  cameraPosition.copy(planetMesh.position);
  cameraPosition.z += 10; // offset behind
  cameraPosition.y += 5; // offset above

  // Tween camera position
  var cameraTween = new TWEEN.Tween(camera.position)
    .to(cameraPosition, 1500)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .start();

  // Tween controls target
  var controlsTargetTween = new TWEEN.Tween(controls.target)
    .to(planetMesh.position, 1500)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .start();
}

// Integration
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  TWEEN.update();
  renderer.render(scene, camera);
}