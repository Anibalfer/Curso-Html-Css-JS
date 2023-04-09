function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    let boton=document.getElementById("boton");
    boton.addEventListener("click", leer, false);

}


function leer(){
    let url="Texto.txt";
    let solicitud=new XMLHttpRequest();
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("GET", url, true);
    solicitud.send(null);
}

function mostrar(e){
    zonadatos.innerHTML=e.target.responseText;
}




window.addEventListener("load", comenzar, false);