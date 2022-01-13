window.addEventListener('load', () => {
    let form = document.querySelector('form');
    let nombreProducto = document.querySelector('.nombre-producto');
    let descripcionProducto = document.querySelector('.descripcion-producto');
    let imagenes = document.querySelector('.file-select');
    let precio = document.querySelector('.precio');

    nombreProducto.addEventListener('keyup', function(){
        let ulErrorNombre = document.querySelector('.error-nombre')
        if (nombreProducto.value.length < 3){
            nombreProducto.style.borderWidth = 'medium';
            nombreProducto.style.borderColor = 'red';
            ulErrorNombre.innerHTML = '<li> El nombre debe tener al menos 3 caracteres </li>';
        }
        else{
            ulErrorNombre.innerHTML = '';
            nombreProducto.style.borderWidth = 'thin';
            nombreProducto.style.borderColor = 'green';
        }
     })

     descripcionProducto.addEventListener('keyup', function(){
        let ulErrorDescripcion = document.querySelector('.error-descripcion')
        if (descripcionProducto.value.length < 20){
            descripcionProducto.style.borderWidth = 'medium';
            descripcionProducto.style.borderColor = 'red';
            ulErrorDescripcion.innerHTML = '<li> La descripción debe tener al menos 20 caracteres </li>';
        }
        else{
            ulErrorDescripcion.innerHTML = '';
            descripcionProducto.style.borderWidth = 'thin';
            descripcionProducto.style.borderColor = 'green';
        }
     })

     precio.addEventListener('keyup', function(){
        let ulErrorPrecio = document.querySelector('.error-precio')
        if (precio.value.length < 1){
            precio.style.borderWidth = 'medium';
            precio.style.borderColor = 'red';
            ulErrorPrecio.innerHTML = '<li> El precio no puede estar vacío </li>';
        }
        else{
            ulErrorPrecio.innerHTML = '';
            precio.style.borderWidth = 'thin';
            precio.style.borderColor = 'green';
        }
     })
})