function comenzar(){
    let boton=document.getElementById("boton");
    boton.addEventListener("click", enviar, false);
    trabajador= new SharedWorker("trabajador2.js");
    trabajador.port.addEventListener("message", recibido, false);
    trabajador.port.start();
}


function enviar(){
    let nombre=document.getElementById("nombre").value;
    trabajador.port.postMessage(nombre);

}

function recibido(e){
    alert(e.data);
}
window.addEventListener("load", comenzar, false);