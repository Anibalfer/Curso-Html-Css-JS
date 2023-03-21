var edad;
var cuadro_usuario;
var elemento;

function comenzar() {
    edad=document.getElementById("miedad");
    edad.addEventListener("change",cambia_rango,false);
    document.datos_usuario.addEventListener("invalid",validar,true);
    document.getElementById("Enviar").addEventListener("click",enviar,false);
    document.datos_usuario.addEventListener("input",tiempoReal,false);
}

function cambia_rango(){
    var salida=document.getElementById("rango");
    var calculo=edad.value-30;
    if(calculo<30){
        calculo=0;
        edad.value=30;
    }

    salida.innerHTML=calculo+" a "+edad.value;
}


function validar(e){
    var elemento=e.target;
    elemento.style.background="#FFDDDD";
}
/*Aca se diferencia con respecto a la practica anterior; se da uso a una nueva
propiedad de valicadion*/
function enviar(){
    var cuadro_usuario=document.getElementById("usuario");
    var correcto=document.datos_usuario.checkValidity();
    if(correcto) {
        document.datos_usuario.submit();
        
        } else if(cuadro_usuario.ValidityState.valueMissing || cuadro_usuario.ValidityState.patternMimatch){
        alert("El campo usuario debe completarse");
    }
}

function tiempoReal(er){
    var elemento=er.target;
    if(elemento.Validity.valid) {
        elemento.style.background="#FFFFFF";
    } else {
        elemento.style.background="#FF0000";
    }
}
 
window.addEventListener("load",comenzar,false);