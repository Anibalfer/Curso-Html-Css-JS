let y=200;
let estado=0;
let altu=y;
let hor=0;

function comenzar(){
    let elemento=document.getElementById("lienzo");
    lienzo=elemento.getContext("2d");

    lienzo.beginPath();
   
    setInterval(animacion,10);
}

function animacion(){

        if((y<850 && estado==0)){
        lienzo.clearRect(0,0,1200,900);
        lienzo.beginPath();
        lienzo.arc(100+hor,y,40,0,Math.PI*2,false);
        lienzo.fill();
        y+=5;
        hor+=1;
        } 

        if(y==850){
            altu+=50;
            estado=1;
        }

        if(y>=altu && estado==1){
        lienzo.clearRect(0,0,1200,900);
        lienzo.beginPath();
        lienzo.arc(100+hor,y,40,0,Math.PI*2,false);
        lienzo.fill();
        y-=5
        hor+=1;
        }

        if(y==altu){        
        estado=0;
        
        }

       /*  if(y<300 && estado==0){
            lienzo.clearRect(0,0,1200,900);
            lienzo.beginPath();
            lienzo.arc(500,y,40,0,Math.PI*2,false);
            lienzo.fill();
            y+=5;
            } */
       
        

   
}


window.addEventListener("load",comenzar,false);