let productos = document.querySelectorAll('.articulo');

productos.forEach(function(producto){
    producto.addEventListener('click',function(){
        console.log(this)
    })
})
console.log('hola');