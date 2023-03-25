function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

     /*Uso del metodo de superposicion
    lienzo.fillStyle="#880000";
    lienzo.fillRect(400,250,300,100);

    lienzo.globalCompositeOperation="screen";
    
    lienzo.fillStyle="#aaaaff";
    lienzo.font="bold 80px verdana";
    lienzo.textAlign="center";
    lienzo.textBaseline="middle";
    lienzo.fillText("Hola Mundo", 550, 300);*/

    //USO DE PROPIEDAD drawImage
    let imagen=new Image();
    imagen.src="https://tarne.co/wp-content/uploads/2022/11/@Fd2X@HoSi1478.jpg";
    imagen.addEventListener("load",function(){lienzo.drawImage(imagen,50,10,600,600,0,0,200,200)},false);


    
}

window.addEventListener("load",comenzar,false);