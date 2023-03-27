function comenzar(){

    let elem_origen=document.getElementById("imagen");

    elem_origen.addEventListener("dragend", function() {alert("comenzo el evento");}, false);

}


window.addEventListener("load", comenzar, false);