// Sidebar Logic
var menuToggle = document.getElementById('menu-toggle');
var sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function() {
  // Toggle collapsed class on sidebar
  sidebar.classList.toggle('collapsed');
});

// Planet Navigation
var planetList = document.getElementById('planet-list');

planetList.addEventListener('click', function(event) {
  // Find planet mesh from solarSystemObjects array
  var planetName = event.target.textContent;
  var planetMesh = planetInfo.find(function(planet) {
    return planet.name === planetName;
  });

  // If mesh found, focus camera on planet
  if (planetMesh) {
    focusOnPlanet(planetMesh.mesh);
  }
});

// Placeholder Content
var futureContent = document.getElementById('future-content');
futureContent.innerHTML = '<p style="font-size: 14px; color: #666;">Educational modules coming soon...</p>';