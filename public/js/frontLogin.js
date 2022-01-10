// VALIDACIONES DEL LOGIN

window.addEventListener('load',function(){

let formulario = document.querySelector('.form-login');
let email = document.querySelector('.email-login');
let password = document.querySelector('.pass-login');
let errorPass = document.querySelector('.error-pass');
let errorEmail = document.querySelector('.error-email');


email.addEventListener('blur', function(){
    
 errorEmail.innerHTML = 'Ingresa tu Email';
      
      })
// email.addEventListener('change',function(){
//         errorEmail.innerHTML = ''
//     })

password.addEventListener('blur', function(){
    
        errorPass.innerHTML = 'Ingresa tu Contraseña';
})
  
    
})






