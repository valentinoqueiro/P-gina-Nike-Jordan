let productos = document.querySelectorAll('.articulo');

productos.forEach(function(producto){
    producto.addEventListener('click',function(){
        console.log(this)
    })
})
console.log('hola');

let navbar = document.querySelector('header');

window.addEventListener('scroll',()=>{
    if(scrollY == 0){
        navbar.style.background = 'transparent'
        navbar.style.color = 'rgb(225,225,225)'
    }
});