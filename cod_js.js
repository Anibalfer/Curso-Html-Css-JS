window.onload=ejecuta;

function ejecuta() {
    //USO DE LOS QUERY SELECTOR Importante: al primer elemento que el selector consiga alli aplica
    //document.querySelector(".importa").onclick=saludo;

    //En la proxima linea apuntamos a un elemento pero con uso de id de etiqueta
    //document.querySelector("#principal p:last-child").onclick=saludo;

    //El siguiente fragmento crea un bucle para que aplique la funcion a cada elemento de un bloque de lineas de una misma etiqueta
    /*for(let i=0;i<4;i++) {
        document.querySelectorAll("#principal p")[i].onclick=saludo;
    }*/

    //El siguiente fragmento cuenta la longitud del arreglo, es decir la cantidad de elementos que coinciden y lo utiliza para aplicarle la función en este caso de mensaje alerta
    let contElem=document.querySelectorAll("#principal p, span");
    for(let i=0;i<contElem.length;i++) {
        contElem[i].onclick=saludo;
    }



    //En el proximo codigo podemos ver la ejecución de la funcion usando los getElement
    /*for(let i=0;i<2;i++) {
        document.getElementsByClassName("importa") [i].onclick=saludo; //tambien se puede utilizar getElementById de la misma forma
    }*/ 
    //la sigueinte linea selecciona el elemento por un id colocado en html
   // document.getElementById("importa") .onclick=saludo;
}

function saludo() {
    alert("Hey esto es ejecucion de JS");
}


