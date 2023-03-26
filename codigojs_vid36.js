function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    let imagen=new Image();

    imagen.src="https://tarne.co/wp-content/uploads/2022/11/@Fd2X@HoSi1478.jpg";
    imagen.addEventListener("load",manipularimagen,false);

}

function manipularimagen(e){
    imagen=e.target;
    lienzo.drawImage(imagen,0,0);

    let info_imagen=lienzo.getImageData(0,0,145,145);

    let posicion;
    let x;
    let y;
    for(x=0;x<=145;x++){
        for(y=0;y<=145;y++){
            posicion=(info_imagen.width*4*y)+(x*4);
            info_imagen.data[posicion]=255-info_imagen.data[posicion];
            info_imagen.data[posicion+1]=255-info_imagen.data[posicion+1];
            info_imagen.data[posicion+2]=255-info_imagen.data[posicion+2];
        
        }
    }
    lienzo.putImageData(info_imagen,0,0);
}

window.addEventListener("load",comenzar,false);