//DECLARACION DE OBJETOS Y VARIABLES
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");

//DECLARACION DE FUNCIONES
function eventoClick(){
  alert("Has presionado el botón");

}
//ASIGNACIÓN DE EVENTOS
//los manejadores de eventos semanticos se ejecutan a la carga del documento
window.onload = function(){
  boton.onclick= eventoClick;
}
