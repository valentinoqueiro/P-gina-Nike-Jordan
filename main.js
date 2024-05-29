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


import {zapatillas} from "./zapatillas.js";
export let todasLasZapatillas = Object.values(zapatillas).flat();
export let productos = document.querySelectorAll('.articulo');

let zapatillaActual = '';

   //       Funcion para guaradar zapatilla seleccionada en Local Storage
export let zapatillaLocalStorage = (producto)=>{
 producto.addEventListener('click',function(){
            let imagenDeFondo = backgroundImage(this);
            compararZapatilla(imagenDeFondo);
            localStorage.setItem('urlZapatilla', zapatillaActual);
            window.location.href = 'mostrador.html'; 
        });
};

productos.forEach(function(producto){
      zapatillaLocalStorage(producto);
  }); 

    let backgroundImage = function(e){
       // return window.getComputedStyle(e).backgroundImage.slice(5, -2);
        let  imagen =  e.querySelector('img').src;
        return imagen
    };
    
    let compararZapatilla = function(e){
        let todasLasZapatillas = Object.values(zapatillas).flat();
        todasLasZapatillas.forEach(function(zapatilla){
            if(zapatilla.imagen == e){
                zapatillaActual =  zapatilla.imagen
                
            };
    });
};

