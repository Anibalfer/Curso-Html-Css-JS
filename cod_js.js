window.onload=ejecuta;

function ejecuta() {
    for(let i=0;i<2;i++) {
        document.getElementsByClassName("importa") [i].onclick=saludo;
    }
    
   // document.getElementById("importa") .onclick=saludo;//
}

function saludo() {
    alert("Hey esto es ejecucion de JS");
}


