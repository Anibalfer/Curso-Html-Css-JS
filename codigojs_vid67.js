function iniciar(){
    let boton=document.getElementById("boton");
    boton.addEventListener("click", enviar, false);
}

function enviar(){
    let mensaje=document.getElementById("mensaje").value;
    let iframe=document.getElementById("iframe");
    iframe.contentWindow.postMessage(mensaje, "*");
}


window.addEventListener("load", iniciar, false);