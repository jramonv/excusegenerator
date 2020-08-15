window.onload= function(){

let title = document.querySelector(".title");
console.log("holaaa");
let newtext = "";   
let aleatorio = Math.floor(Math.random()*4);
title.innerHTML = getnewExcuse(aleatorio);

// inner html modificar dentor de la pagina//



};


let razon = [ "es que", "no porque", "pero", "yo se"]
let accion = ["es", "será", "hacen", "yo digo", "yo se"];
let Quien =["Mi Hermano", "Mi vecino", "Mi perro", "Mi Abuelita"];
let objeto = ["la loteria", "el auto", "la casa", "la tv"];



function getnewExcuse(aleatorio){
let blabla = Quien[aleatorio];
let blabla2 = objeto[aleatorio];
let newtext = "";

newtext = "Mi escusa es:" + razon[aleatorio] + " " + accion[aleatorio] +" " + Quien[aleatorio] + " " + objeto[aleatorio];

return newtext;

}

