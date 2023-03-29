

let elem_origen;

let elem_destino;

function comenzar(){

    elem_origen=document.getElementById("imagen");

    elem_origen.addEventListener("dragstart", drag_ini, false);

    elem_destino=document.getElementById("zonadestino");
    
    elem_destino.addEventListener("dragenter", function(e){e.preventDefault();}, false);
    
    elem_destino.addEventListener("dragover",function(e){e.preventDefault();},false);

    elem_destino.addEventListener("drop",soltado,false);

    elem_origen.addEventListener("dragend", terminado, false);

    elem_destino.addEventListener("dragenter", entrando, false);

    elem_destino.addEventListener("dragleave", fuera,false);
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

function terminado(e){
    let elemento=e.target;
    elemento.style.visibility="hidden";
}

function entrando(e) {
    e.preventDefault();
    elem_destino.style.background="rgba(8,252,25,0.4)";
}

function fuera(e) {
    e.preventDefault();
    elem_destino.style.background="#ffffff";
}
window.addEventListener("load", comenzar, false);