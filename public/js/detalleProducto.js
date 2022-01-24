window.addEventListener('load', function(){
    let XS = document.querySelector('.XS');
    let S = document.querySelector('.S');
    let M = document.querySelector('.M');
    let L = document.querySelector('.L');
    let XL = document.querySelector('.XL');
    let XXL = document.querySelector('.XXL');
    let cantidadVacia = document.querySelector('.cantidad-vacia');
    let botonSumar = document.querySelector('.sumar-restar-producto-mas');
    let botonRestar = document.querySelector('.sumar-restar-producto-menos');
    let botonAgregarAlCarrito = document.querySelector('.button-agregar-carrito');
    let titulo = document.querySelector('.titulo-producto');
    let precio = document.querySelector('.precio');
    let imagen = document.querySelector('.imagen-producto');
    let carrito = [];

    let inputCantidad = document.querySelector('.cantidad-productos-detalle');
    let botonComprar = document.querySelector('.button-comprar');
    let [contadorXS, contadorS, contadorM, contadorL, contadorXL, contadorXXL] = [0,0,0,0,0,0]
    
    XS.addEventListener('click', function() {
        if(contadorXS % 2 == 0){
            XS.style.backgroundColor = '#2163c5';
            XS.style.color = 'white';
            contadorXS ++;
        }else{
            XS.style.backgroundColor = 'white';
            XS.style.color = 'black';
            contadorXS ++;
        }
    })

    S.addEventListener('click', function() {
        if(contadorS % 2 == 0){
            S.style.backgroundColor = '#2163c5';
            S.style.color = 'white';
            contadorS ++;
        }else{
            S.style.backgroundColor = 'white';
            S.style.color = 'black';
            contadorS ++;
        }
    })
    M.addEventListener('click', function() {
        if(contadorM % 2 == 0){
            M.style.backgroundColor = '#2163c5';
            M.style.color = 'white';
            contadorM ++;
        }else{
            M.style.backgroundColor = 'white';
            M.style.color = 'black';
            contadorM ++;
        }
    })
    L.addEventListener('click', function() {
        if(contadorL % 2 == 0){
            L.style.backgroundColor = '#2163c5';
            L.style.color = 'white';
            contadorL ++;
        }else{
            L.style.backgroundColor = 'white';
            L.style.color = 'black';
            contadorL ++;
        }
    })
    XL.addEventListener('click', function() {
        if(contadorXL % 2 == 0){
            XL.style.backgroundColor = '#2163c5';
            XL.style.color = 'white';
            contadorXL ++;
        }else{
            XL.style.backgroundColor = 'white';
            XL.style.color = 'black';
            contadorXL ++;
        }
    })
    XXL.addEventListener('click', function() {
        if(contadorXXL % 2 == 0){
            XXL.style.backgroundColor = '#2163c5';
            XXL.style.color = 'white';
            contadorXXL ++;
        }else{
            XXL.style.backgroundColor = 'white';
            XXL.style.color = 'black';
            contadorXXL ++;
        }
    })

    botonComprar.addEventListener('click', function(){
        if(inputCantidad.value == 0 || inputCantidad.value == null){
            cantidadVacia.innerHTML = 'Campo obligatorio'
            cantidadVacia.style.color = 'red';
        }else{
            cantidadVacia.innerHTML = ''
        }
    });
    
    botonSumar.addEventListener('click', function(){
        inputCantidad.value++;
    });

    botonRestar.addEventListener('click', function(){
        if (inputCantidad.value == 0 || inputCantidad.value == null){
            console.log('No podés restar');
        }else{
            inputCantidad.value--;
        }
    })

    
    botonAgregarAlCarrito.addEventListener('click', agregarAlCarrito);

    function agregarAlCarrito(e){
        //Para ver cómo captura el elemento HTML
        const button = e.target;
        //
        let nombreProducto = titulo.innerHTML;
        let precioProducto = precio.innerHTML;
        let imagenProducto = imagen.src;

        const newItem = {
            nombre: nombreProducto,
            precio: precioProducto,
            imagen: imagenProducto,
            cantidad: inputCantidad.value
        }
        console.log(newItem);
        if(inputCantidad.value == 1){
            alert('Se sumó el producto al carrito de compras');
            inputCantidad.value = 0;
        }else if(inputCantidad.value > 1) {
            alert('Se sumaron los productos al carrito de compras');
            inputCantidad.value = 0;
        }else{
            alert('Debes ingresar un valor mayor a 0 en la cantidad');
        }
        addItemCarrito(newItem);
        
        console.log(sessionStorage.getItem('producto'))
    }

    function addItemCarrito(newItem){
        carrito.push(newItem);
        sessionStorage.setItem('producto', JSON.stringify(carrito));
        console.log(carrito);
    }

})