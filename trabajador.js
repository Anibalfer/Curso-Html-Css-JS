addEventListener("message", mensaje_recibido, false);

function mensaje_recibido(e){
    let respuesta="El texto escrito es " + e.data;
    postMessage(respuesta);
    
}


