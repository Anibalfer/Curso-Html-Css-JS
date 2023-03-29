let elem_destino;


function comenzar(){
    let imagenes=document.querySelectorAll("#cajaimagenes img");
    for (let i=0;i<imagenes.length;i++){
        imagenes[i].addEventListener("dragstart", drag_ini, false);
        if(i!=1){
        imagenes[i].addEventListener("dragend", termina, false);
        }
    }
    elem_destino=document.getElementById("zonadestino");
    elem_destino.addEventListener("dragenter", entrando, false);
    elem_destino.addEventListener("dragover", function(e){e.preventDefault();}, false);
    elem_destino.addEventListener("drop", soltado, false);
    elem_destino.addEventListener("dragleave", fuera, false);
    

}

function drag_ini(e) {
    let elemento=e.target;
    e.dataTransfer.setData("Text", elemento.getAttribute("id"));

}

function entrando(e){
    e.preventDefault();
    let id=e.dataTransfer.getData("Text");
    if(id!="imagen2"){
        elem_destino.style.background="rgba(8,252,25,0.4)"; 
       
    } else {

        elem_destino.style.background="#fa0d29";
        
    }
    
}

function soltado(e){
    e.preventDefault();
    let id=e.dataTransfer.getData("Text");
    if(id!="imagen2"){
    let src=document.getElementById(id).src;
    elem_destino.innerHTML=`<img src=${src}>`;
    } else {
        elem_destino.innerHTML="Imagen no admitida";
        elem_destino.style.background="#fa0d29";
    }
    

    
}



function fuera(e){
    e.preventDefault();
    elem_destino.style.background="#ffffff";
}

function termina(e){
    let elemento=e.target;
    elemento.style.visibility="hidden";
}
window.addEventListener("load", comenzar, false);