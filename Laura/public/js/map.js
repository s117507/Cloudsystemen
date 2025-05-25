var map = L.map('map').setView([51.218152399491906, 4.40363019612159], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var artspire = L.marker([51.218152399491906, 4.40363019612159]).addTo(map);
artspire.bindPopup("ArtSpire").openPopup();

