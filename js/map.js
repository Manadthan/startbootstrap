$(function () {
    var mymap = L.map('mapid').setView([43.56, 1.48], 11);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibWFuYWR0aGFuIiwiYSI6ImNrZ3o3MmozajBsZTcyeW52dXQxMmc5ajIifQ.V-QbOqrIPNCtdztUBKEoAA'
    }).addTo(mymap);
    var marker = L.marker([43.499324, 1.578366]).addTo(mymap).bindPopup('Diag-Déchets<br>Belberaud').openPopup();
});
