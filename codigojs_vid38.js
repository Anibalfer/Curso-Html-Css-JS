let y=200;
let estado=0;
let altu=y;
let hor=0;

function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    window.addEventListener("mousemove",animacion,false);
   
   
}

function animacion(e){

lienzo.clearRect(0,0,1200,900);
let xRaton=e.clientX;
let yRaton=e.clientY;
let xCentro=550;
let ycentro=325;

let angulo=Math.atan2(xRaton-xCentro,yRaton-ycentro);
let x=xCentro+Math.round(Math.sin(angulo)*10);
let y=ycentro+Math.round(Math.cos(angulo)*10);

lienzo.beginPath();
lienzo.arc(xCentro,ycentro,20,0,Math.PI*2,false);

lienzo.moveTo(620,325);
lienzo.arc(600,ycentro,20,0,Math.PI*2,false);
lienzo.stroke();

lienzo.beginPath();
lienzo.arc(x,y,10,0,Math.PI*2,false);

lienzo.moveTo(x,y);
lienzo.arc(x+50,y,10,0,Math.PI*2,false);
lienzo.fill();
   
}


window.addEventListener("load",comenzar,false);