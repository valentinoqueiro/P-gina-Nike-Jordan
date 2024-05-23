//          Carrito De Compras  
let cruz = document.getElementById('cruz-carrito');
let carritoDeCompras = document.querySelector('.carrito-de-compras'); 
let carrito = document.querySelector('#carrito');

export let abrirCarrito = carrito.addEventListener('click', function(){
        carritoDeCompras.style.transform = 'translateX(0)';
        cruz.style.display = 'flex';
    })
 export let cerrarCarrito = cruz.addEventListener('click', function(){
        carritoDeCompras.style.transform = 'translateX(30rem)';
        cruz.style.display = 'none';
    }) 




//!          Redireccion a página de mostrador
//!                        arreglar

import {zapatillas} from "./zapatillas.js";
let productos = document.querySelectorAll('.articulo');
let zapatillaActual = ''

    productos.forEach(function(producto){
        producto.addEventListener('click',function(){
            let imagenDeFondo = backgroundImage(this);
            compararZapatilla(imagenDeFondo);
            window.location.href = 'mostrador.html';  
            zapatillaActual;
        });
    });   
    let backgroundImage = function(e){
        return window.getComputedStyle(e).backgroundImage.slice(5, -2);
    }
    
    let compararZapatilla = function(e){
        let todasLasZapatillas = Object.values(zapatillas).flat();
        todasLasZapatillas.forEach(function(zapatilla){
            if(zapatilla.imagen == e){
                zapatillaActual =  zapatilla.imagen
            };
    });
};


