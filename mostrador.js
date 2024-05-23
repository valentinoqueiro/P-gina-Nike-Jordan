let imagenActual = document.getElementById('imagenActual');
let zapatillasColores = document.querySelectorAll('.zapatillas-color');
let logo = document.querySelector('.logo');
let h2 = document.getElementById('titulo-mostrador');

//        Logo redireccoón
logo.addEventListener('click', function(){
    window.location.href = 'index.html';  
});

//          Slider de carrito
import { abrirCarrito, cerrarCarrito } from "./main.js";
    abrirCarrito;
    cerrarCarrito;

//          zapatilla seleccionada
const zapatillaSeleccionada = localStorage.getItem('urlZapatilla');
    imagenActual.src = zapatillaSeleccionada;

import { todasLasZapatillas } from "./main.js";
import { categorias } from "./zapatillas.js";
import { zapatillas } from "./zapatillas.js";

//          Cambiar Opcopnes de colores
//let encontarCategoria = function(zapatilla){
//   categorias.forEach(function(key){
//       zapatillaCategoria = '';
//       if(zapatilla == '' && zapatillas[key].some(zapatillas => zapatilla.imagen == zapatilla)){
//       zapatillaCategoria = key;
//       }
//});
//return zapatillaCategoria;
//};
//console.log(encontarCategoria(zapatillaSeleccionada))

//          ingresar imagen de zapatilla seleccionada
zapatillasColores.forEach(function(zapatillaColor){
    if(zapatillaSeleccionada == zapatillaColor.src){
        zapatillaColor.style.border = 'solid 1px #000';
    }//      Cambiar zapatilla seleccionada 
    zapatillaColor.addEventListener('click', function(){
        sacarBorde();
        zapatillaColor.style.border = 'solid 1px #000';
        comparar(zapatillaColor);
    });
});

let comparar = function(e){
    todasLasZapatillas.forEach(function(zapatilla){
    if (zapatilla.imagen == e.src){
        imagenActual.src = zapatilla.imagen;
        h2.textContent = zapatilla.nombre;
    };
});
};

let sacarBorde = function(){
    
    zapatillasColores.forEach(function(opcion){
       opcion.style.border = 'none'
   })
}