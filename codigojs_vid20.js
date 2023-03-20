//declaracion de variables
let miaudio, play, barra, progres, maximo;
maximo=600;

//funcion para iniciar las variables y seguir los eventos
function comenzar(){
miaudio=document.getElementById("miaudio");
barra=document.getElementById("barra");
progres=document.getElementById("progres");
play=document.getElementById("play");

//Escuchando el evento de reproduccion
play.addEventListener("click",clicando,false);

barra.addEventListener("click",adelantando,false);

}

function clicando(){

    if((miaudio.paused==false) && (miaudio.ended==false)) {
        miaudio.pause();
        play.innerHTML="Play";
        

    } else {

        miaudio.play();
        play.innerHTML="Pause";
        bucle=setInterval(estado,500);
    }
}

function estado(){
    if (miaudio.ended==false) {
        let total=parseInt(miaudio.currentTime*maximo/miaudio.duration);
        progres.style.width=total+"px";
    }

}

function adelantando(posicion){
    if ((miaudio.paused==false) && (miaudio.ended==false)){;
    let ratonX=posicion.pageX-barra.offsetLeft;
    let nuevoTiempo=ratonX*miaudio.duration/maximo;
    miaudio.currentTime=nuevoTiempo;
    progres.style.width=ratonX+"px";
    }
}
window.addEventListener("load",comenzar,false);

