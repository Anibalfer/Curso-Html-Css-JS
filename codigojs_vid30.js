function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    lienzo.beginPath();
    //lienzo.arc(100,100,90,0,Math.PI,false);
    lienzo.moveTo(250,50);   
    //lienzo.quadraticCurveTo(400,75,50,280);
    lienzo.bezierCurveTo(100,75,400,125,250,200);
    lienzo.stroke();

}

window.addEventListener("load",comenzar,false);