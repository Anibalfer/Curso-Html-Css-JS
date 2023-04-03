function comenzar(){
    let boton=document.getElementById("grabar");
    boton.addEventListener("click", itemNuevo, false);
     
}

function itemNuevo() {
    let clave=document.getElementById("clave").value;
    let valor=document.getElementById("valor").value;
    localStorage.setItem(clave, valor);
    //localStorage[clave]=valor; //creado como array
    leerMostrar(clave);
    document.getElementById("clave").value="";
    document.getElementById("valor").value="";
}

function leerMostrar(clave){
    let zonadatos=document.getElementById("zonadatos");
    zonadatos.innerHTML=`<div><button onclick="eliminarTodo()">Eliminar Todo</button><div>`;
    //let elvalor=localStorage[clave]; //creado como un array
    //zonadatos.innerHTML="";
    for (i=0;i<localStorage.length;i++){
        let clave=localStorage.key(i);
        let elvalor=localStorage.getItem(clave);
        zonadatos.innerHTML+=`<div>Clave: ` + clave + `--` + `Valor: ` + elvalor; + "</div>";
        zonadatos.innerHTML+=`<div><button onclick="eliminarItem(\`` + clave + `\`)">Eliminar</button></div>`;
        }
}

function eliminarTodo(){
    if(confirm("Estás Seguro?")){
        localStorage.clear();
        leerMostrar();
    }
}

function eliminarItem(clave){
    if(confirm("Estás Seguro?")){
        localStorage.removeItem(clave);
        leerMostrar();
    }
}
window.addEventListener("load",comenzar,false);