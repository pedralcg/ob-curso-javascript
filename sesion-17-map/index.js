// Initialize and add the map
let map, marker;
let isMarkerLoaded = false //New flag

async function initMap() {
  // The location of Uluru
const posicion = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
    mapId: "DEMO_MAP_ID",
});

//   // The marker, positioned at Uluru
// marker = new AdvancedMarkerElement({
//     map: map,
//     position: posicion,
//     title: "Uluru",
// });

  // Código cambiado con el deel Bootcamp
marker = new google.maps.Marker({
    map: map,
    position: posicion,
    title: "Posición inicial",
});


  // Obtener la geolocalización
  // marker.setPosition({lat, lng})
geoposiciona()
}

function geoposiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = {timeout: 600}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
    map.setZoom(9)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}

initMap();