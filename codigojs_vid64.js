function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    zonaprogreso=document.getElementById("zonaprogreso");
    let boton=document.getElementById("boton");
    boton.addEventListener("click", leer, false);


}


function leer(){
    let url="video/ABC.mp3";
    let solicitud=new XMLHttpRequest();
    solicitud.addEventListener("loadstart", com_barra, false);
    solicitud.addEventListener("progress", est_barra, false);
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("GET", url, true);
    solicitud.send(null);
}

function com_barra(){
    zonadatos.innerHTML="<progress value='0' max='100'></progress>";

}

function est_barra(e){
    let porcent=parseInt(e.loaded/e.total*100);
    let barraProgres=zonadatos.querySelector("progress");
    barraProgres.value=porcent;
    zonaprogreso.innerHTML=porcent + " %";
}

function mostrar(e){
    zonadatos.innerHTML="Archivo cargado !!!";
}




window.addEventListener("load", comenzar, false);