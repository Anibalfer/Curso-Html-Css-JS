function comenzar(){
    let boton=document.getElementById("grabar");
    boton.addEventListener("click", itemNuevo, false);
     
}

function itemNuevo() {
    let clave=document.getElementById("clave").value;
    let valor=document.getElementById("valor").value;
    sessionStorage.setItem(clave, valor);
    leerMostrar(clave);
}

function leerMostrar(clave){
    let zonadatos=document.getElementById("zonadatos");
    let elvalor=sessionStorage.getItem(clave);
    zonadatos.innerHTML="<div>Clave: " + clave + "--" + "Valor: " + elvalor; + "</div>";

}

window.addEventListener("load",comenzar,false);