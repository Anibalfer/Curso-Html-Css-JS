
function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    let boton=document.getElementById("archivos");
    boton.addEventListener("change", subir, false);

}

function subir(e){
    let archivos=e.target.files;
    let archivo=archivos[0];
    let url="procesar.php";
    let solicitud=new XMLHttpRequest();
    let subir=solicitud.upload;
    subir.addEventListener("loadstart", comienzaBarra, false);
    subir.addEventListener("progress", estadoBarra, false);
    subir.addEventListener("load", mostrar, false);
    solicitud.open("POST", url, true);
    let datos=new FormData();
    datos.append("archivo", archivo);
    solicitud.send(datos);

}

function comienzaBarra(){
    zonadatos.innerHTML="<progress value='0' max='100'></progress>";
}

function estadoBarra(e){
    let porcentaje=parseInt(e.loaded/e.total*100);
    let barrapreogr=zonadatos.querySelector("progress");
    barrapreogr.value=porcentaje;
    zonaprogreso.innerHTML=porcentaje + " %";
}

function mostrar(e){
    zonadatos.innerHTML="Subida Completa !!!";
}

window.addEventListener("load", comenzar, false);