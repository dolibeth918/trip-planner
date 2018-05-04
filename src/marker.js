//this is where we make our marker builder function
const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
  activity: 'http://i.imgur.com/WbMOfMl.png'
};

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
const buildMarker = function(type, coords) {
  // step 1 create dom element
  console.log('creating our marker');
  const domEl = document.createElement('div');
  domEl.style.width = '32px';
  domEl.style.height = '39px';
  let urlType = iconURLs[type];
  domEl.style.backgroundImage = `url(${urlType})`;
  //create a marker instance w that element, add coords and return that marker instance
  return new mapboxgl.Marker(domEl).setLngLat(coords);
};

module.exports = buildMarker;
