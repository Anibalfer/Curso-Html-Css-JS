function iniciar(){
    window.addEventListener("message", receptor, false);

}

function receptor(e){
    let zonamensajes=document.getElementById("zonamensajes");
    zonamensajes.innerHTML+="Mensaje desde: " + e.origin + "<br>";
    zonamensajes.innerHTML+="Mensaje: " + e.data + "<br>";
}

window.addEventListener("load", iniciar, false);