/*
function tipoFlor(){
    alert("FLOR BELLA");
}

function daTipoFlor(){
    let imagen=document.getElementsByTagName("img")[0];
    imagen.addEventListener("mouseover",crece,false);
    imagen.addEventListener("mouseout",mengua,false);
    imagen.addEventListener("click",tipoFlor,false);
}

function crece(){
    let imagen=document.getElementsByTagName("img")[0];
    imagen.height=225;
    imagen.width=225;
}

function mengua(){
    let imagen=document.getElementsByTagName("img")[0];
    imagen.height=200;
    imagen.width=200;
}
window.onload=daTipoFlor;
*/

var imagenes = document.getElementsByTagName("img");

window.onload = function(){

  for (var i = 0; i < imagenes.length; i++) {
		
   imagenes[i].addEventListener("click",rutaImg,false);
   imagenes[i].addEventListener("mouseover",crece,false);
   imagenes[i].addEventListener("mouseout",mengua,false);
  }

}

function rutaImg(){   //muestra la ruta de la imagen
   alert(this.src);
}

function crece(){
   this.width = 225;
   this.height = 225;
}

function  mengua(){
   this.width = 200;
   this.height = 200;
}