function comenzar(){
    let boton=document.getElementById("grabar");
    boton.addEventListener("click", itemNuevo, false);
     
}

function itemNuevo() {
    let clave=document.getElementById("clave").value;
    let valor=document.getElementById("valor").value;
    sessionStorage.setItem(clave, valor);
    //sessionStorage[clave]=valor; //creado como array
    leerMostrar(clave);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
}

function leerMostrar(clave){
    let zonadatos=document.getElementById("zonadatos");
    zonadatos.innerHTML=`<div><button onclick="eliminarTodo()">Eliminar Todo</button><div>`;
    //let elvalor=sessionStorage[clave]; //creado como un array
    //zonadatos.innerHTML="";
    for (i=0;i<sessionStorage.length;i++){
        let clave=sessionStorage.key(i);
        let elvalor=sessionStorage.getItem(clave);
        zonadatos.innerHTML+=`<div>Clave: ` + clave + `--` + `Valor: ` + elvalor; + "</div>";
        zonadatos.innerHTML+=`<div><button onclick="eliminarItem(\`` + clave + `\`)">Eliminar</button></div>`;
        }
}

function eliminarTodo(){
    if(confirm("Estás Seguro?")){
        sessionStorage.clear();
        leerMostrar();
    }
}

function eliminarItem(clave){
    if(confirm("Estás Seguro?")){
        sessionStorage.removeItem(clave);
        leerMostrar();
    }
}
window.addEventListener("load",comenzar,false);