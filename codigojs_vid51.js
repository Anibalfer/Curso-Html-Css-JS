function iniciar(){
    zonadatos=document.getElementById("zonadatos");
    boton=document.getElementById("grabar");
    boton.addEventListener("click", agragarObjeto, false);
    let solicitud=indexedDB.open("mibase");
    solicitud.onsuccess=function(e){bd=e.target.result;}

    solicitud.onupgradeneeded=function(e){bd=e.target.result; bd.createObjectStore("gente", {keyPath: "clave"});}

}


function agragarObjeto(){
    let clave=document.getElementById("clave").value;
    let titulo=document.getElementById("texto").value;
    let fecha=document.getElementById("fecha").value;
    let transaccion=bd.transaction(["gente"], "readwrite");
    let almacen=transaccion.objectStore("gente");
    let agregar=almacen.add({clave: clave, titulo: titulo, fecha: fecha});
    agregar.addEventListener("success", mostrar, false);

    document.getElementById("clave").value="";
    document.getElementById("texto").value="";
    document.getElementById("fecha").value="";
}

function mostrar(){
    zonadatos.innerHTML="";
    let transaccion=bd.transaction(["gente"], "readonly");
    let almacen=transaccion.objectStore("gente");
    let cursor=almacen.openCursor();
    cursor.addEventListener("success", mostrarDatos, false);
}

function mostrarDatos(e){
    let cursor=e.target.result;
    if(cursor){
        zonadatos.innerHTML+="<div>" + cursor.value.clave + " - " + cursor.value.titulo + " - " + cursor.value.fecha + "<div>";
        cursor.continue();
    }
}
window.addEventListener("load", iniciar, false);