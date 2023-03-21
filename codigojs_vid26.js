function comenzar(){

let elemento=document.getElementById("lienzo");

lienzo=elemento.getContext("2d");
lienzo.globalAlpha=0.5;
lienzo.fillStyle="#11ccdd";
lienzo.fillRect(110,110,100,100);
lienzo.strokeStyle="#ffd020";
lienzo.strokeRect(100,100,120,120);
lienzo.clearRect(120,120,80,80);


}

window.addEventListener("load",comenzar,false);