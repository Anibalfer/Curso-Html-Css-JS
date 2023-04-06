function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    let archivos=document.getElementById("archivos");
    archivos.addEventListener("change", procesar, false);

}

function procesar(e){
    let archivos=e.target.files;
    let miArchivo=archivos[0];
    let lector=new FileReader();
    lector.readAsText(miArchivo, "iso 8859-1");
    lector.addEventListener("load", mostrar_web, false);
    
}

function mostrar_web(e){
    let resultado=e.target.result;
    zonadatos.innerHTML=resultado;
}


window.addEventListener("load", comenzar, false);