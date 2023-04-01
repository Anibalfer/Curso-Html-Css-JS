function comenzar(){
    let miboton=document.getElementById("ubicame");
    miboton.addEventListener("click", obtener, false);

}

function obtener() {
    let parametros={enableHigAccuracy:true, timeout:10000, maximumAge:60000};
    navigator.geolocation.getCurrentPosition(mostrar_ubicacion, gest_error, parametros);
    /*La proxima linea crea un seguimiento pidiendo la ubicación cada tanto tiempo que se designa en la linea superior
    navigator.geolocation.watchPosition(mostrar_ubicacion, gest_error, parametros);*/

}

function mostrar_ubicacion(posicion) {
    let ubica=document.getElementById("ubicacion");
    /* let posicionamiento="";
    posicionamiento+="Latitud: " + posicion.coords.latitude + "<br>";
    posicionamiento+="Longitud: " + posicion.coords.longitude + "<br>";
    posicionamiento+=":Precision: " + posicion.coords.accuracy + "<br>"; */
    let mimapa=`http://maps.google.com/maps/api/staticmap?center=${posicion.coords.latitude},${posicion.coords.longitude},&zoom=12&size=400x400&sensor=false&markers=${posicion.coords.latitude},${posicion.coords.longitude}`;
    
    ubicacion.innerHTML="<img src=`" + mimapa + "`>";
}

function gest_error(error){
  //  alert("Ha habido un error" + "  " + error.code + "  " + error.message); 
  if(error.code==1){
    alert("Debes permitir la ubicación en tu navegador");
  }
}

window.addEventListener("load", comenzar, false);