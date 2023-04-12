function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    zonaprogreso=document.getElementById("zonaprogreso");
    let boton=document.getElementById("boton");
    boton.addEventListener("click", enviaDatos, false);


}


function enviaDatos(){
    elNombre=document.getElementById("elnombre").value;
    elApellido=document.getElementById("elapellido").value;
    let datos=new FormData();
    datos.append("nombre", elNombre);
    datos.append("apellido", elApellido);
    let url="procesar.php";
    let solicitud=new XMLHttpRequest();
    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("POST", url, true);
    solicitud.send(datos);
}

function mostrar(e){
    zonadatos.innerHTML=e.target.responseText;
}




window.addEventListener("load", comenzar, false);