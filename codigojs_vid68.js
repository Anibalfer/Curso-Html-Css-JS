function iniciar(){
    let boton=document.getElementById("boton");
    boton.addEventListener("click", enviar, false);
    window.addEventListener("message", recibir, false);
    recepcion=document.getElementById("zonarecepcion");

}

function enviar(){
    let mensaje=document.getElementById("mensaje").value;
    let iframe=document.getElementById("iframe");
    iframe.contentWindow.postMessage(mensaje, "https://tarne.co");
    
}


function recibir(e){
    recepcion.innerHTML+=e.data;
}


window.addEventListener("load", iniciar, false);