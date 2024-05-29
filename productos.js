let logo = document.querySelector('.logo')
import { abrirCarrito, cerrarCarrito } from "./main.js";

abrirCarrito;
cerrarCarrito;
    logo.addEventListener('click', function(){
    window.location.href = 'index.html';  
});
    
import { zapatillaLocalStorage } from "./main.js";
import { productos } from "./main.js";

zapatillaLocalStorage(productos);
