
function tipoFlor(){
    alert("FLOR BELLA");
}

function daTipoFlor(){
    let imagen=document.getElementsByTagName("img")[0];
    imagen.addEventListener("mouseover",crece,false);
    imagen.addEventListener("mouseout",mengua,false);
    imagen.addEventListener("click",tipoFlor,false);
}

function crece(){
    let imagen=document.getElementsByTagName("img")[0];
    imagen.height=225;
    imagen.width=225;
}

function mengua(){
    let imagen=document.getElementsByTagName("img")[0];
    imagen.height=200;
    imagen.width=200;
}
window.onload=daTipoFlor;