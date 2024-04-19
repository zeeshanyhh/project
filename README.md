<!DOCTYPE html>
<html>
<head>
  <title>Kenya Map with Points</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
  <script src="script.js"></script>
</head>
<body>

<div id="map"></div>
<button id="mapSwitch" class="button">Switch to Street Map View</button>
<div id="schoolsToggleContainer">
  <input type="checkbox" id="toggleSchools" class="toggle-checkbox" />
  <label for="toggleSchools" class="toggle-label"></label>
  <div id="toggleLabel" class="toggle-description">Show/Hide Microforest</div>
</div>
<div id="summaryStats" class="hidden">
  <h4><i class="fas fa-tree"></i> Microforest Summary</h4>
  <p><i class="fas fa-seedling"></i> Estimated Total Trees: 17,033</p>
  <p><i class="fas fa-chart-line"></i> Average Trees per School: ~233</p>
  <p><i class="fas fa-balance-scale-right"></i> Median Trees per School: 250</p>
  <p><i class="fas fa-school"></i> Total Schools: 73</p>
</div>


</body>
</html>
