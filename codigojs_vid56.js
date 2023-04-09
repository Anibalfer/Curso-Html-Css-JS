let escpacio;
let nombreArchivo;
function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    let boton=document.getElementById("boton");
    boton.addEventListener("click", crear, false);

    navigator.storage.persist(5*1024*1024, acceso);
    
}

function acceso(){
    window.requestFileSystem(window.PERSISTENT, 5*1024*1024, crearSis, errores);

}

function crearSis(sistema){
    escpacio=sistema.root;
    
}

function crear(){
    
    let nombreArchivo=document.getElementById("entrada").value;
    if(nombreArchivo!=""){
        escpacio.getDirectory(nombreArchivo, {create:true, exclusive:false}, mostrar, errores);
        
    }
}

function mostrar(entrada){
    document.getElementByIdç("entrada").value="";
    zonadatos.innerHTML="Exito en la creación de espacio y archivo <br>";
    zonadatos.innerHTML+="Naombre:  " + entrada.name + "<br>";
    zonadatos.innerHTML+="Ruta:  " + entrada.fullpatch + "<br>";

}

function errores(e){
    SpeechRecognitionAlternative("Ha avido un error " + e.code);
}

window.addEventListener("load", comenzar, false);