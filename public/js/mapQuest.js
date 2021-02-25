function initMap() {
	L.mapquest.key = 'bH8Yxtk1MTt3mAYGY5qPtroLuJOpyP2F';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.8785, -117.2359],
	layers: L.mapquest.tileLayer('map'),
	zoom: 14,
	zoomControl: false
	});

	// add marker to map
	L.marker([32.8785, -117.2359]).addTo(map);
}