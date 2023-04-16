function comenzar(){
    trabajador=new SharedWorker("trabajador2.js");
    trabajador.port.addEventListener("message", recibido, false);
    trabajador.port.start();
}

function recibido(e){
    zonadatos=document.getElementById("zonadatos");
    zonadatos.innerHTML=e.data;
}

window.addEventListener("load", comenzar, false);