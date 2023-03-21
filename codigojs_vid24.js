let edad;

function comenzar() {
    edad=document.getElementById("miedad");
    edad.addEventListener("change",cambia_rango,false);
    document.datos_usuario.addEventListener("invalid",validar,true);
    document.getElementById("Enviar").addEventListener("click",enviar,false);
    document.datos_usuario.addEventListener("input",tiempoReal,false);
}

function cambia_rango(){
    let salida=document.getElementById("rango");
    let calculo=edad.value-30;
    if(calculo<30){
        calculo=0;
        edad.value=30;
    }

    salida.innerHTML=calculo+" a "+edad.value;
}


function validar(e){
    let elemento=e.target;
    elemento.style.background="#FFDDDD";
}

function enviar(){
    let correcto=document.datos_usuario.checkValidity();
    if(correcto) {
        document.datos_usuario.submit();
    }
}

function tiempoReal(er){
    let elemento=er.target;
    if(elemento.Validity.valid) {
        elemento.style.background="#FFFFFF";
    } else {
        elemento.style.background="#FF0000";
    }
}
 
window.addEventListener("load",comenzar,false);