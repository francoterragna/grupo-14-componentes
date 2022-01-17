window.addEventListener('load',function(){

let formulario = document.querySelector('form');

let nombreProducto = document.querySelector('.nameProduct');
let errorNombreProducto = document.querySelector('.error-nameProduct');

let descripcion = document.querySelector('.descripcion-producto');
let errorDescripcion = document.querySelector('.errorDescripcion');

let precio = document.querySelector('.precioProducto');
let errorPrecio = document.querySelector('.errorPrecioProducto');

let talles = document.querySelector('.tallesProducto');
let errorTalles = document.querySelector('.errorTallesProducto');

let stock = document.querySelector('.stockProducto');
let errorStock = document.querySelector('.errorStockProducto');


formulario.addEventListener('submit',function(){
    alert('si')
})
nombreProducto.addEventListener('blur',function(){
    
    if(nombreProducto.value.length <= 0){
        errorNombreProducto.innerHTML = 'El nombre no puede estar vacío y debe contener al menos 5 caracteres'
    }else if(nombreProducto.value.length <= 4){
        errorNombreProducto.innerHTML = 'El nombre debe contener al menos 5 caracteres'
    }
    else(errorNombreProducto.innerHTML = '')
})

nombreProducto.addEventListener('keyup',function(){
    if(nombreProducto.value.length <= 4){
        errorNombreProducto.innerHTML = 'El nombre debe contener al menos 5 caracteres'
    }
    else(errorNombreProducto.innerHTML = '')
})
// CAMPO DESCRIPCIÓN
descripcion.addEventListener('blur',function(){
    
    if(descripcion.value.length <= 0){
        errorDescripcion.innerHTML = 'La descripción no puede estar vacía y debe contener al menos 20 caracteres'
    }else if(descripcion.value.length <= 19){
        errorDescripcion.innerHTML = 'La descripción debe contener al menos 20 caracteres'
    }
    else(errorDescripcion.innerHTML = '')
})
descripcion.addEventListener('keyup',function(){
    if(descripcion.value.length <= 19){
        errorDescripcion.innerHTML = 'La descripción debe contener al menos 20 caracteres'
    }
    else(errorDescripcion.innerHTML = '')
})
// Campo Talles
talles.addEventListener('change',function(){

    if(talles.checked){
        errorTalles.innerHTML = ''
    }
    else{
        errorTalles.innerHTML = 'Debes seleccionar al menos 1 talle'
    }

    
})


// CAMPO PRECIO 
precio.addEventListener('blur',function(){
    if(precio.value < 0){
        errorPrecio.innerHTML = 'El precio no puede ser negativo'
    }else if(precio.value == ''){
        errorPrecio.innerHTML = 'Debes ponerle un precio al producto'
    }
    else(
        errorPrecio.innerHTML = ''
    )
})
precio.addEventListener('change',function(){
    if(precio.value < 0){
        errorPrecio.innerHTML = 'El precio no puede ser negativo'
    }else if(precio.value == 0){
        errorPrecio.innerHTML = 'Debes ponerle un precio al producto'
    }
    else if(precio.value > 0){
        errorPrecio.innerHTML = ''
    }
})
stock.addEventListener('change',function(){
    if(stock.value < 0){
        errorStock.innerHTML = 'El stock no puede ser negativo'
    }else if(stock.value == 0){
        errorStock.innerHTML = 'Debes ponerle un stock al producto'
    }
    else if(stock.value > 0){
        errorStock.innerHTML = ''
    }
})


})