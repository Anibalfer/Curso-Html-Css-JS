function comenzar(){
    let miboton=document.getElementById("ubicame");
    miboton.addEventListener("click", obtener, false);

}

function obtener() {
    navigator.geolocation.getCurrentPosition(mostrar_ubicacion);

}

function mostrar_ubicacion(posicion) {
    let ubica=document.getElementById("ubicacion");
    let posicionamiento="";
    posicionamiento+="Latitud: " + posicion.coords.latitude + "<br>";
    posicionamiento+="Longitud: " + posicion.coords.longitude + "<br>";
    posicionamiento+=":Precision: " + posicion.coords.accuracy + "<br>";
    ubicacion.innerHTML=posicionamiento;
}


window.addEventListener("load", comenzar, false);