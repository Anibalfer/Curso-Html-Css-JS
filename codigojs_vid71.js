function comenzar(){
    zonadatos=document.getElementById("zonadatos");
    URL=document.getElementById("url");
    URL.addEventListener("click", cambiarurl, false);
}

function cambiarurl(){
    zonadatos.innerHTML="Estas en la página 2";
    window.history.pushState(null, null, "pagina2.html");
}



window.addEventListener("load", comenzar, false);