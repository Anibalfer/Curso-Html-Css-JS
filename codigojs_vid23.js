function comenzar() {
    let nombre=document.getElementById("nombre");
    let apellido=document.getElementById("apellido");
    nombre.addEventListener("input",validar,false);
    apellido.addEventListener("input",validar,false);
    validar();
}

function validar(){
    if(nombre.value=="" || apellido.value==""){
        nombre.setCustomValidity("Debes rellenar ambos campos");
        nombre.style.background="#ffdddd";
        apellido.style.background="#ffdddd";
    } else {
        nombre.setCustomValidity("");
        nombre.style.background="#ffffff";
        apellido.style.background="#ffffff";
    }
}

window.addEventListener("load",comenzar,false);
