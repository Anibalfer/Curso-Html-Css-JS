
function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    let degradado=lienzo.createRadialGradient(250,150,5,250,150,360);
    degradado.addColorStop(0,"#f80a0a");
    degradado.addColorStop(1,"#09fe03");

    lienzo.fillStyle=degradado;
    lienzo.fillRect(0,0,500,300);
    

}



window.addEventListener("load",comenzar,false);