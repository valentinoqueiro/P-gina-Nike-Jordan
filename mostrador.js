let imagenActual = document.getElementById('imagenActual');
let zapatillaColores = document.querySelectorAll('.zapatillas-color');
let logo = document.querySelector('.logo');

logo.addEventListener('click', function(){
    window.location.href = 'index.html';  
})

import { abrirCarrito, cerrarCarrito } from "./main.js";

import { zapatillas } from "./zapatillas.js";

    let todasLasZapatillas = Object.values(zapatillas).flat();
abrirCarrito;
cerrarCarrito;

zapatillaColores.forEach(function(zapatillaColor){
    zapatillaColor.addEventListener('click', function(){
        sacarBorde()
        zapatillaColor.style.border = 'solid 1px #000'
    })
})

todasLasZapatillas.forEach(function(zapatilla){
    if(zapatilla.imagen == imagenActual.src){
        imagenActual.src = zapatilla.imagen;

    }
})
let sacarBorde = function(){
    
    zapatillaColores.forEach(function(opcion){
       opcion.style.border = 'none'
   })
}