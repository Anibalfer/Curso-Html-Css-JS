function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    lienzo.beginPath();
    lienzo.moveTo(100,200);
    lienzo.lineTo(200,200);
    lienzo.lineTo(150,100);
    lienzo.lineTo(100,200);
    lienzo.clip();

    lienzo.beginPath();
    for(i=0;i<250;i+=5){
        lienzo.moveTo(0,i);
        lienzo.lineTo(500,i);
    }

    lienzo.stroke();
}


window.addEventListener("load",comenzar,false);