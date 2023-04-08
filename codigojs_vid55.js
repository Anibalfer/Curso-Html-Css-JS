function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    let archivos=document.getElementById("archivos");
    archivos.addEventListener("change", procesar, false);

}

function procesar(e){
    let archivos=e.target.files;
    zonadatos.innerHTML="";
    let miArchivo=archivos[0];
    
    if(!miArchivo.type.match(/image/)){
        alert("Selecciona una imagen, por favor");
    } else {
        zonadatos.innerHTML+="Nombre del archivo:  " + miArchivo.name + "<br>";
        zonadatos.innerHTML+="Tamaño del archivo:  " + Math.round(miArchivo.size/1024) + " kb <br>";
        let lector=new FileReader();
        lector.readAsDataURL(miArchivo);
        lector.addEventListener("load", mostrar_web, false);
    }
   
}

function mostrar_web(e){
    let resultado=e.target.result;
    zonadatos.innerHTML+="<img src='" + resultado + "'width='80%'>"; 
}


window.addEventListener("load", comenzar, false);