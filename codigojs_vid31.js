function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    //dibujando el rostro
    lienzo.arc(200,150,100,0,Math.PI*2,false);
    lienzo.stroke();

    //dibujando la sonrisa
    lienzo.lineWidth=10;
    lienzo.lineCap="round";
    lienzo.beginPath();
    lienzo.arc(200,170,60,0,Math.PI,false);
    lienzo.stroke();

    //dibujando la nariz
    lienzo.lineWidth=5;
    lienzo.lineJoin="miter";
    lienzo.miterLimit=9;
    lienzo.beginPath();
    lienzo.moveTo(195,135);
    lienzo.lineTo(215,155);
    lienzo.lineTo(195,155);
    lienzo.stroke();

    //dibujando los ojos
    lienzo.lineWidth=1;
    lienzo.beginPath();
    lienzo.arc(175,110,7,0,Math.PI*2,false);
    lienzo.arc(225,110,7,0,Math.PI*2,false);
    lienzo.fill();

    
    lienzo.beginPath();
    lienzo.arc(168,106,15,0,Math.PI*2,false);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.arc(232,106,15,0,Math.PI*2,false);
    lienzo.stroke();
}


window.addEventListener("load",comenzar,false);