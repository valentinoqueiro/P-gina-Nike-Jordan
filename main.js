let cruz = document.getElementById('cruz-carrito');
let carritoDeCompras = document.querySelector('.carrito-de-compras'); 
let carrito = document.querySelector('#carrito');

carrito.addEventListener('click', function(){
    carritoDeCompras.style.transform = 'translateX(0)'
})
cruz.addEventListener('click', function(){
    carritoDeCompras.style.transform = 'translateX(30rem)'
})

let productos = document.querySelectorAll('.articulo');
productos.forEach(function(producto){
    producto.addEventListener('click',function(){
        backgroundImage = window.getComputedStyle(this).backgroundImage;
        let imagen = backgroundImage.slice(5, -2);
        console.log(imagen)
        let h3 = this.querySelector('.info-producto h3');
            console.log(h3)  
             window.location.href = 'mostrador.html'
    })
})