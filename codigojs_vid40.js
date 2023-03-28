

let elem_origen;

let elem_destino;

function comenzar(){

    elem_origen=document.getElementById("imagen");

    elem_origen.addEventListener("dragstart", drag_ini, false);

    elem_destino=document.getElementById("zonadestino");
    
    elem_destino.addEventListener("dragenter", function(e){e.preventDefault();}, false);
    
    elem_destino.addEventListener("dragover",function(e){e.preventDefault();},false);

    elem_destino.addEventListener("drop",soltado,false);
}


function drag_ini(e){
    let codigo="<img src=" + elem_origen.getAttribute("src") +">";
    e.dataTransfer.setData("Text", codigo);
}

function soltado(e){
    //let imagenFin = document.getElementById("imagenFin");
    e.preventDefault();
    elem_destino.innerHTML=e.dataTransfer.getData("text");
    //imagenFin.src = e.dataTransfer.getData("Text");
    
}

window.addEventListener("load", comenzar, false);