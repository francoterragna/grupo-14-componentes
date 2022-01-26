window.addEventListener('load', function (){
    let labelNombre = document.querySelector('.nombre-producto');
    let precioSubTotal = document.querySelector('.precio-producto');
    let inputCantidad = document.querySelector('.input-producto');
    let botonSumar = document.querySelector('.boton-sumar');
    let botonRestar = document.querySelector('.boton-restar');
    let sinProductos = document.querySelector('.sin-productos');
    let precioTotal = document.querySelector('.precio-total');
    let imagenProducto = document.querySelector('.imagen-producto-carrito');
    let productosCarritoJSON = sessionStorage.getItem('producto');
    let productosCarritoArray = JSON.parse(productosCarritoJSON);
    console.log(productosCarritoArray);
    console.log(sessionStorage.getItem('producto'));

    // productosCarritoArray.map(producto => {

    // })

    console.log(productosCarritoArray[0].cantidad);
    console.log(productosCarritoArray[0].precio);


    // for(let i=0; i< productosCarritoArray.length; i++){

        botonSumar.addEventListener('click', function(){
            inputCantidad.value++;
            precioSubTotal.innerHTML = (productosCarritoArray[productosCarritoArray.length - 1].precio) * inputCantidad.value;
            precioTotal.innerHTML = (productosCarritoArray[productosCarritoArray.length - 1].precio) * inputCantidad.value;
            console.log(inputCantidad.value);
        });

        botonRestar.addEventListener('click', function(){
            if (inputCantidad.value == 0 || inputCantidad.value == null){
                console.log('No podés restar');
            }else{
                inputCantidad.value--;
                precioSubTotal.innerHTML = (productosCarritoArray[productosCarritoArray.length - 1].precio) * inputCantidad.value;
                precioTotal.innerHTML = (productosCarritoArray[productosCarritoArray.length - 1].precio) * inputCantidad.value;
                console.log(inputCantidad.value);
            }
        })
            console.log(productosCarritoArray[productosCarritoArray.length - 1].imagen)
        if(!sessionStorage.getItem('producto')){
            alert('no hay productos');
        }else{
            sinProductos.innerHTML = '';
            labelNombre.innerHTML = productosCarritoArray[productosCarritoArray.length - 1].nombre;
            inputCantidad.value = productosCarritoArray[productosCarritoArray.length - 1].cantidad;
            precioSubTotal.innerHTML = (productosCarritoArray[productosCarritoArray.length - 1].precio) * inputCantidad.value;
            precioTotal.innerHTML = (productosCarritoArray[productosCarritoArray.length - 1].precio) * inputCantidad.value
            imagenProducto.innerHTML = `<img src=${productosCarritoArray[productosCarritoArray.length - 1].imagen} alt="hola" class='fotito-carrito'>`
        }
    // }
})