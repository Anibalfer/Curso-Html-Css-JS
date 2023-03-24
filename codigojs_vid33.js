function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    //Creación de texto
    lienzo.font="bold 20px arial";
    lienzo.fillText("Hola Mundo", 50, 20);

    //Metodo de traslación de coordenadas
    lienzo.translate(100,100);
    lienzo.fillText("Hola Mundo trasladado", 50, 20);

    //Método de rotación
    lienzo.rotate(Math.PI*0.25);
    lienzo.fillText("Hola Mundo rotado", 50, 20);

    //Metodo de escala
    lienzo.scale(3,3);
    lienzo.fillText("Hola Mundo rotado y escalado", 50, 20);
}

window.addEventListener("load",comenzar,false);