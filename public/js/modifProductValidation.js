window.addEventListener('load', () => {
    let formulario = document.querySelector('form');
    let nombreProducto = document.querySelector('.nombre-producto');
    let descripcionProducto = document.querySelector('.descripcion-producto');
    let campoImagen = document.querySelector('.file-select');
    let precio = document.querySelector('.precio');

    //CAMPO DE FORMULARIO
    formulario.addEventListener('submit', function(e){
        let errores = [];
        let ulErrores = document.querySelector('.errores-form');
        let tituloErrores = document.querySelector('titulo-errores');
        ulErrores.innerHTML = '';
        if(campoNombre.value == '') {
            errores.push('El campo de nombre tiene que estar completo');
        }
        if(campoNombre.value.length < 3) {
            errores.push('El nombre debe tener al menos 3 letras');
        }
        if(campoApellido.value == ''){
            errores.push('El campo de apellido tiene que estar completo');
        }
        if(campoApellido.value.length < 3){
           errores.push('El apellido debe tener al menos 3 letras');
        }
        if(campoEmail.value == ''){
            errores.push('El campo de email no puede estar vacío');
        }
        if(!campoEmail.value.includes('@')){
            errores.push('El email tiene que tener un formato válido')
        }

       let extensionesValidas = ['.jpg', '.jpeg', '.gif', '.png'];
       if(campoImagen.value){
           let contador2 = 0;
           extensionesValidas.map(extension => {
               if(campoImagen.value.includes(extension)){
                   console.log('aca no es');
               }
               else{
                   contador2 ++;
               }
               if(contador2 == 3){
                   console.log('todo bien')
               }
               else if(contador2 == 4){
                   errores.push('Las extensiones de imagen permitidas son .jpg, .jpeg, .png, .gif')
               }
           })
       }
       if(errores.length > 0) {
           e.preventDefault();
            
           alert('Hay errores en el formulario');
           //  console.log(errores)
           errores.map(error => {ulErrores.innerHTML += '<li>' + error + '</li>'})
           tituloErrores.innerHTML = 'ERRORES DEL FORMULARIO';
       }
   })

    //CAMPO DE NOMBRE
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

     //CAMPO DE DESCRIPCIÓN DE PRODUCTO
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

     //CAMPO DE PRECIO
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