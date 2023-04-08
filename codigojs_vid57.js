function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    let boton=document.getElementById("boton");
    boton.addEventListener("click", crear, false);

    navigator.storage.persist(5*1024*1024, acceso);
    
}

function acceso(){
    window.RequestFileSystem(PERSISTENT, 5*1024*1024, crearSis, errores);

}

function crearSis(sistema){
    escpacio=sistema.root;
    let ruta="";
    mostrar();
}

function crear(){
    let nombre_archivo=document.getElementById("entrada").value;
    if(nombre_archivo!=""){
        nombre_archivo=ruta+nombre_archivo;
        escpacio.getFile(nombre_archivo, {create:true, exclusive:false}, mostrar, errores);

    }

}


function mostrar(){
    document.getElementById("entrada").value="";
    zonadatos.innerHTML="";

    escpacio.getDirectory(ruta, null, leerdir, errores);

}

function leerdir(dir){
    lector=dir.createReader();
    leer();
}

function leer(){
    lector.readEntries(function(archivos){
        if(archivos.length){
            listar(archivos);
        }
    }, errores);
}

function listar(archivos){
    for(let i=0; i<archivos.length; i++){
        if(archivos[i].isFile){
            zonadatos.innerHTML+=archivos[i].name+"<br>";
        } else if(archivos[i].isDirectory){
            zonadatos.innerHTML+="<span class='directorio'>" + archivos[i].name + "</span><br>";
        }
    }
}

function errores(e){
    alert("Ups.. hay un error" + e.code);
}
window.addEventListener("load", comenzar, false);