// Validaciones del Register 

// const path = require ('path');

window.addEventListener('load',function(){

     let formulario = document.querySelector('form');
     let campoNombre = document.querySelector('.input_name');
     let campoApellido = document.querySelector('.input_lastName');
     let campoEmail = document.querySelector('.input_email');
     let campoImagen = document.querySelector('.input-image');
     let campoPassword = document.querySelector('.input-password');
     let campoConfirmPassword = document.querySelector('.confirm-password');

     

    //EVENTOS DEL FORMULARIO
    formulario.addEventListener('submit', function(e){
         let errores = [];
         let ulErrores = document.querySelector('.errores-form');
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
                let contador = 0;
                let contador2 = 0;
            extensionesValidas.map(extension => {
                if(campoImagen.value.includes(extension)){
                    contador ++;
                }
                else{
                    contador2 ++;
                }
                if(contador == 1 && contador2 == 3){
                    console.log('todo bien')
                }
                else if(contador == 0 && contador2 == 4){
                    errores.push('Las extensiones de imagen permitidas son .jpg, .jpeg, .png, .gif')
                }
            })
        }
         if(errores.length > 0) {
             e.preventDefault();
             
             alert('Hay errores en el formulario');
            //  console.log(errores)
             errores.map(error => {ulErrores.innerHTML += '<li>' + error + '</li>'})
            }
     })

     //CAMPO DE NOMBRE
     campoNombre.addEventListener('keyup', function(){
         let ulErrorNombre = document.querySelector('.error-nombre')
         if (campoNombre.value.length < 3){
             campoNombre.style.borderColor = 'red';
            ulErrorNombre.innerHTML = 'El nombre debe tener al menos 3 caracteres';
         }
         else{
             ulErrorNombre.innerHTML = '';
             campoNombre.style.borderColor = 'green';
         }
     })

     //CAMPO DE APELLIDO
     campoApellido.addEventListener('keyup', function(){
       let ulErrorApellido = document.querySelector('.error-apellido')
        if (campoApellido.value.length < 3){
            campoApellido.style.borderColor = 'red';
           ulErrorApellido.innerHTML = 'El apellido debe tener al menos 3 caracteres';
        }
        else{
            ulErrorApellido.innerHTML = '';
            campoApellido.style.borderColor = 'green';
        }
    })

    //CAMPO CONTRASEÑA
    campoPassword.addEventListener('keyup', function(){
        let ulErrorPassword = document.querySelector('.error-password')
        if (campoPassword.value.length < 8 || campoPassword.value.length >20){
            campoPassword.style.borderColor = 'red';
           ulErrorPassword.innerHTML = 'La contraseña debe tener entre 8 y 20 caracteres';
        }
        else if(campoPassword.value == '12345678'){
            campoPassword.style.borderColor = 'red';
           ulErrorPassword.innerHTML = 'Esforzate mas con la contraseña dale ;)';
        }
        else{
            ulErrorPassword.innerHTML = '';
            campoPassword.style.borderColor = 'green';
        }
    })

    //CAMPO CONFIRM PASSWORD
    campoConfirmPassword.addEventListener('keyup', function(){
        let ulErrorConfirmPassword = document.querySelector('.error-confirmPass')
        if (campoPassword.value != campoConfirmPassword.value){
            campoConfirmPassword.style.borderColor = 'red';
            ulErrorConfirmPassword.innerHTML = 'Las contraseñas deben ser iguales';
        }
        else{
            ulErrorConfirmPassword.innerHTML = '';
            campoConfirmPassword.style.borderColor = 'green';
        }
    })
})
