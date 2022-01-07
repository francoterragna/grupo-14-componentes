// Validaciones del Register 

window.addEventListener('load',function(){

     let formulario = document.querySelector('form');
     let campoNombre = document.querySelector('.input_name');
     let campoApellido = document.querySelector('.input_lastName')


     let errores = [];
     formulario.addEventListener('submit', function(e){
        
         if(campoNombre.value == '') {
             errores.push('El campo de nombre tiene que estar completo');
         }
         if(campoNombre.value.length < 3) {
             errores.push('El campo de nombre debe tener al menos 3 caracteres');
         }
         if(campoApellido.value == ''){
             errores.push('El campo de apellido tiene que estar completo')
         }

         let ulErrores = document.querySelector('.error-name');
         if(errores.length > 0) {
         e.preventDefault();
         
         alert('Hay errores en el formulario');
         console.log(errores)
                 errores.map(error => {ulErrores.innerHTML += '<li>' + error + '</li>'})
            }
            
     })
})
