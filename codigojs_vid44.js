let soltar;
function comenzar(){
    soltar=document.getElementById("zonadestino");
    soltar.addEventListener("dragenter", function(e){e.preventDefault();},false);
    soltar.addEventListener("dragover", function(e){e.preventDefault();}, false);
    soltar.addEventListener("drop", soltado, false);

}

function soltado(e){
    e.preventDefault();
    let archivos=e.dataTransfer.files;
    let listado="";
    for (let f=0;f<archivos.length;f++){
        listado+="Archivo: " + archivos[f].name + "  Tamaño:  " + (archivos[f].size/1024).toFixed(2) + "  Fecha:  " + archivos[f].lastModifiedDate.toLocalDataString + "<br>";
    }

    soltar.innerHTML=listado;
}

window.addEventListener("load", comenzar, false);
