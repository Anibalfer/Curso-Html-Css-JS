function comenzar(){

    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    
    lienzo.shadowColor="rgba(0,0,0,0.5)";
    lienzo.shadowOffsetX=5;
    lienzo.shadowOffsetY=5;
    lienzo.shadowBlur=6;
    lienzo.font="bold 48px verdana";
    lienzo.textAlign="start";
    lienzo.textBaseline="top";
    lienzo.fillText("Hola alumnos", 100, 100);

    /* lienzo.moveTo(100,100);
    lienzo.lineTo(200,100);
    lienzo.stroke(); */
    //dibujamos un rectangulo alrededor
    let dimensiones=lienzo.measureText("Hola alumnos");
    lienzo.strokeRect(100,100,dimensiones.width+10,60);
    

    

}


window.addEventListener("load",comenzar,false);