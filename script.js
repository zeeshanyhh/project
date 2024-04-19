var kenyaGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "KEN",
        "properties": { "name": "Kenya" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [40.993, -0.85829], [41.58513, -1.68325], [40.88477, -2.08255], [40.63785, -2.49979], [40.26304, -2.57309], [40.12119, -3.27768], [39.80006, -3.68116], [39.60489, -4.34653], [39.20222, -4.67677], [37.7669, -3.67712], [37.69869, -3.09699], [34.07262, -1.05982], [33.903711, -0.95], [33.893569, 0.109814], [34.18, 0.515], [34.6721, 1.17694], [35.03599, 1.90584], [34.59607, 3.05374], [34.47913, 3.5556], [34.005, 4.249885], [34.620196, 4.847123], [35.298007, 5.506], [35.817448, 5.338232], [35.817448, 4.776966], [36.159079, 4.447864], [36.855093, 4.447864], [38.120915, 3.598605], [38.43697, 3.58851], [38.67114, 3.61607], [38.89251, 3.50074], [39.559384, 3.42206], [39.85494, 3.83879], [40.76848, 4.25702], [41.1718, 3.91909], [41.855083, 3.918912], [40.98105, 2.78452], [40.993, -0.85829]
            ]
          ]
        }
      }
    ]
  };
  var TanzaniaGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "TNA",
        "properties": { "name": "Tanzania" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
            [33.903711,-0.95],[34.07262,-1.05982],[37.69869,-3.09699],[37.7669,-3.67712],[39.20222,-4.67677],[38.74054,-5.90895],[38.79977,-6.47566],[39.44,-6.84],[39.47,-7.1],[39.19469,-7.7039],[39.25203,-8.00781],[39.18652,-8.48551],[39.53574,-9.11237],[39.9496,-10.0984],[40.31659,-10.3171],[39.521,-10.89688],[38.427557,-11.285202],[37.82764,-11.26879],[37.47129,-11.56876],[36.775151,-11.594537],[36.514082,-11.720938],[35.312398,-11.439146],[34.559989,-11.52002],[34.28,-10.16],[33.940838,-9.693674],[33.73972,-9.41715],[32.759375,-9.230599],[32.191865,-8.930359],[31.556348,-8.762049],[31.157751,-8.594579],[30.74,-8.34],[30.2,-7.08],[29.62,-6.52],[29.419993,-5.939999],[29.519987,-5.419979],[29.339998,-4.499983],[29.753512,-4.452389],[30.11632,-4.09012],[30.50554,-3.56858],[30.75224,-3.35931],[30.74301,-3.03431],[30.52766,-2.80762],[30.46967,-2.41383],[30.758309,-2.28725],[30.816135,-1.698914],[30.419105,-1.134659],[30.76986,-1.01455],[31.86617,-1.02736],[33.903711,-0.95]
            ]
          ]
        }
      }
    ]
  };

  var UgandaGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": "UGA",
        "properties": { "name": "UGANDA" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
            [31.86617,-1.02736],[30.76986,-1.01455],[30.419105,-1.134659],[29.821519,-1.443322],[29.579466,-1.341313],[29.587838,-0.587406],[29.8195,-0.2053],[29.875779,0.59738],[30.086154,1.062313],[30.468508,1.583805],[30.85267,1.849396],[31.174149,2.204465],[30.77332,2.33989],[30.83385,3.50917],[31.24556,3.7819],[31.88145,3.55827],[32.68642,3.79232],[33.39,3.79],[34.005,4.249885],[34.47913,3.5556],[34.59607,3.05374],[35.03599,1.90584],[34.6721,1.17694],[34.18,0.515],[33.893569,0.109814],[33.903711,-0.95],[31.86617,-1.02736]
            ]
          ]
        }
      }
    ]
  };


  document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([-1.286389, 36.817223], 5);
    var schoolsLayer = L.layerGroup().addTo(map); // Add this line to create the layer group for schools

    var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=your_access_token', {
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    }).addTo(map); // Set satellite as default

    var streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    });

    var geojsonStyle = {
      color: 'blue',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.1
    };

    L.geoJSON(kenyaGeoJSON, {
style: geojsonStyle
}).addTo(map);
L.geoJSON(TanzaniaGeoJSON, {
style: geojsonStyle
}).addTo(map);
L.geoJSON(UgandaGeoJSON, {
style: geojsonStyle
}).addTo(map);

// Specific locations
    // Specific locations with descriptions
    var locations = [
    { "name": "Kinenge’ne Secondary", "coords": [-9.982988, 39.626193], "description": "It is located in Lindi MC District with 250 Trees." },
  { "name": "Lindi Secondary", "coords": [-9.979933, 39.704456], "description": "It is located in Lindi MC District with 250 Trees." },
  { "name": "Mchinga Secondary", "coords": [-9.7259939, 39.7119376], "description": "It is located in Lindi MC District with 250 Trees." },
  { "name": "Kitomanga Secondary", "coords": [-9.660118, 39.535454], "description": "It is located in Lindi MC District with 250 Trees." },
  { "name": "Mingoyo Secondary", "coords": [-10.119079, 39.608142], "description": "It is located in Lindi MC District with 250 Trees." },
  { "name": "Ngongo Secondary", "coords": [-10.040613, 39.627494], "description": "It is located in Lindi MC District with 250 Trees." },
  { "name": "Mahiwa Secondary", "coords": [-10.3437366, 39.2673644], "description": "It is located in Mtama with 250 Trees." },
  { "name": "Mtama Secondary", "coords": [-10.294519, 39.375826], "description": "It is located in Mtama with 250 Trees." },
  { "name": "Nyengedi Secondary", "coords": [-10.248112, 39.442879], "description": "It is located in Mtama with 250 Trees." },
  { "name": "Madangwa Secondary", "coords": [-10.211781, 39.869471], "description": "It is located in Mtama with 250 Trees." },
  { "name": "Kijichi Secondary", "coords": [-6.877509, 39.293128], "description": "It is located in Temeke MC District with 250 Trees." },
  { "name": "Toangoma Secondary", "coords": [-6.930914, 39.305652], "description": "It is located in Temeke MC District with 250 Trees." },
  { "name": "Mbande Secondary", "coords": [-6.979943, 39.212178], "description": "It is located in Temeke MC District with 250 Trees." },
  { "name": "Charambe Secondary", "coords": [-6.946194, 39.2468402], "description": "It is located in Temeke MC District with 250 Trees." },
  { "name": "Nzasa Secondary", "coords": [-6.923314, 39.259168], "description": "It is located in Temeke MC District with 250 Trees." },
  { "name": "AKES", "coords": [-6.799705, 39.279950], "description": "It is located in Upanga with 160 Trees." },
  { "name": "Jamat Khana", "coords": [-6.820212, 39.283932], "description": "It is located in Upanga with 130 Trees." },
  { "name": "AKFT Office", "coords": [-6.773724, 39.277202], "description": "It is located in Ostabay with 200 Trees." },
  { "name": "Buza Primary", "coords": [-6.891421, 39.230167], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Bwawani Primary", "coords": [-6.863462, 39.284598], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mtoni Kijichi Primary", "coords": [-6.872580, 39.281937], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Maendeleo Primary", "coords": [-6.903264, 39.288656], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Kibonde Maji Primary", "coords": [-6.918308, 39.283436], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Kizuiani Primary", "coords": [-6.911859, 39.275567], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mikwambe Primary", "coords": [-6.935485, 39.311245], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Upendo Primary", "coords": [-6.782358, 39.118074], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Saku Primary", "coords": [-6.928247, 39.227011], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Lumbanga Primary", "coords": [-6.930458, 39.243936], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Nzasa Primary", "coords": [-6.924943, 39.253433], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Karume Primary", "coords": [-6.806101, 39.249584], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mbande Primary", "coords": [-6.979943, 39.212178], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mbagala Kuu Primary", "coords": [-6.903264, 39.288656], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Kongowe Primary", "coords": [-6.792354, 39.208347], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Toangoma Primary", "coords": [-6.935485, 39.311245], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mbagala High School", "coords": [-6.903065, 39.266110], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Changanyikeni", "coords": [-6.918991, 39.3373936], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mikwambe Secondary", "coords": [-6.935485, 39.311245], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Miburani Secondary", "coords": [-6.859570, 39.265828], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Chamazi", "coords": [-6.935959, 39.229205], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Kingugi Secondary", "coords": [-6.912080, 39.253277], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Lumo Primary", "coords": [-6.8756253, 39.2222886], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Taifa Secondary", "coords": [-6.852944, 39.266792], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "UNICEF Office", "coords": [-6.777120, 39.274483], "description": "It is located in Ostabay with 160 Trees." },
  { "name": "Kibasila Primary", "coords": [-6.849872, 39.266091], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Temeke Primary", "coords": [-6.851542, 39.260662], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Uwanja wa Ndege Primary", "coords": [-6.8572097, 39.2371136], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Dovya Primary", "coords": [-6.874757, 39.251098], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Dovya Secondary", "coords": [-6.887709, 39.221419], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Kilamba Primary", "coords": [-6.924481, 39.257714], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Kingugi Primary", "coords": [-6.912080, 39.253277], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Kiburugwa Primary", "coords": [-6.912195, 39.253380], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Wailesi Secondary", "coords": [-6.866167, 39.270892], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Wailesi Primary", "coords": [-6.858456, 39.268666], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Diplomasia Secondary", "coords": [-6.854053, 39.284459], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Uamiaji Secondary", "coords": [-6.855309, 39.287720], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Relini Secondary", "coords": [-6.873434, 39.273808], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Keko Secondary", "coords": [-6.835064, 39.272229], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Keko Magurumbasi Primary", "coords": [-6.835015, 39.271940], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Twiga Primary", "coords": [-6.878372, 39.263643], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Tandika Secondary", "coords": [-6.866204, 39.2594805], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Azimio Secondary", "coords": [-6.839726, 39.260944], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Bahati Primary", "coords": [-6.851837, 39.260692], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Ndalala Secondary", "coords": [-6.853626, 39.261440], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Temeke Secondary", "coords": [-6.854751, 39.243999], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Sandali Primary", "coords": [-6.856136, 39.244690], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mgeninani Primary", "coords": [-6.892299, 39.308242], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Mbagala Secondary", "coords": [-6.903265, 39.267396], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Malela Secondary", "coords": [-6.929994, 39.305518], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Saku Secondary", "coords": [-6.926873, 39.227823], "description": "It is located in Temeke MC District with 200 Trees." },
  { "name": "Jamaat Khana Upanga 2", "coords": [-6.820212, 39.283932], "description": "It is located in Ilala with 200 Trees." },
  { "name": "Hemed Secondary", "coords": [-5.297790, 39.808066], "description": "It is located in Pujini - Pemba with 200 Trees." },
  { "name": "Mikindani Secondary", "coords": [-6.098563, 39.252617], "description": "It is located in Dole - Unguja with 200 Trees." }
    ];

    locations.forEach(function(location) {
    L.circleMarker(location.coords, {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1,
        radius: 4
    }).bindPopup(`<b>${location.name}</b><br>${location.description}`).addTo(schoolsLayer);
});

document.getElementById('toggleSchools').onclick = function() {
  if (map.hasLayer(schoolsLayer)) {
    map.removeLayer(schoolsLayer);
    this.textContent = 'Show Schools';
    this.style.background = '#f0f0f0'; // Change to Off state background
    this.style.color = '#000'; // Change to Off state text color
  } else {
    schoolsLayer.addTo(map);
    this.textContent = 'Hide Schools';
    this.style.background = '#4CAF50'; // Change to On state background
    this.style.color = '#fff'; // Change to On state text color
  }
};

document.getElementById('toggleSchools').onchange = function() {
  if (this.checked) {
    schoolsLayer.addTo(map);
    document.getElementById('summaryStats').classList.remove('hidden');
  } else {
    map.removeLayer(schoolsLayer);
    document.getElementById('summaryStats').classList.add('hidden');
  }
};


// Map switching logic
var currentMap = 'satellite';
document.getElementById('mapSwitch').onclick = function() {
  if (currentMap === 'satellite') {
    map.removeLayer(satellite);
    streetMap.addTo(map);
    currentMap = 'streetMap';
    this.textContent = 'Switch to Satellite View';
  } else {
    map.removeLayer(streetMap);
    satellite.addTo(map);
    currentMap = 'satellite';
    this.textContent = 'Switch to Street Map View';
  }
};
});

