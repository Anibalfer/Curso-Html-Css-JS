function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    //lienzo.save(); //esta instruccion guarga el estado del canvas
    //lienzo.restore(); //esta instruccion reescribe el estado del lienzo tal como se guardo
   lienzo.transform(3,0,0,1,0,0);
    
    lienzo.font="bold 20px arial";
    lienzo.fillText("Hola Mundo", 50, 50);

    lienzo.setTransform(1,0,0,10,0,0);
    lienzo.font="bold 20px arial";
    lienzo.fillText("Hola Mundo", 50, 50);

   
}

window.addEventListener("load",comenzar,false);