
function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    let degradado=lienzo.createLinearGradient(0,150,500,150);
    degradado.addColorStop(0,"#f80a0a");
    degradado.addColorStop(1,"#09fe03");

    lienzo.fillStyle=degradado;
    lienzo.fillRect(0,0,500,300);
    

}



window.addEventListener("load",comenzar,false);