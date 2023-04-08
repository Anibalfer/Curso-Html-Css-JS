//declaracion de variables
let Mivideo, reproducir, barra, progres, maximo;
maximo=600;


//funcion para iniciar las variables y seguir los eventos
function comenzar(){
Mivideo=document.getElementById("Mivideo");
barra=document.getElementById("barra");
progres=document.getElementById("progres");
reproducir=document.getElementById("reproducir");

//Escuchando el evento de reproduccion
reproducir.addEventListener("click",clicando,false);

barra.addEventListener("click",adelantando,false);

}

function clicando(){

    if((Mivideo.paused==false) && (Mivideo.ended==false)) {
        Mivideo.pause();
        reproducir.innerHTML="Play";
        

    } else {

        Mivideo.play();
        reproducir.innerHTML="Pause";
        bucle=setInterval(estado,500);
    }
}

function estado(){
    if (Mivideo.ended==false) {
        let total=parseInt(Mivideo.currentTime*maximo/Mivideo.duration);
        progres.style.width=total+"px";
    }

}

function adelantando(posicion){
    if ((Mivideo.paused==false) && (Mivideo.ended==false)){;
    let ratonX=posicion.pageX-barra.offsetLeft;
    let nuevoTiempo=ratonX*Mivideo.duration/maximo;
    Mivideo.currentTime=nuevoTiempo;
    progres.style.width=ratonX+"px";
    }
}
window.addEventListener("load",comenzar,false);

