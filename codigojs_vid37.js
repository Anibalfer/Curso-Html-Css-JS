let y=50;
let estado=0;
let ciclo=0;
let altu=0;
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
        lienzo.arc(500,y,40,0,Math.PI*2,false);
        lienzo.fill();
        y+=5;
        } 

        if(y==850){
            estado=1;
        }

        if(y>=300 && estado==1){
        lienzo.clearRect(0,0,1200,900);
        lienzo.beginPath();
        lienzo.arc(500,y,40,0,Math.PI*2,false);
        lienzo.fill();
        y-=5
        }

        if(y==300 && ciclo<3){        
        estado=0;
        ciclo+=1
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