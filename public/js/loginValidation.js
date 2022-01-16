// VALIDACIONES DEL LOGIN

window.addEventListener('load',function(){

let formulario = document.querySelector('.form-login');
let email = document.querySelector('.email-login');
let password = document.querySelector('.pass-login');
let errorPass = document.querySelector('.error-pass');
let errorEmail = document.querySelector('.error-email');


// email.addEventListener('blur', function(){
    
//  errorEmail.innerHTML = 'Ingresa tu Email';
      
//       })
email.addEventListener('keyup',function(){
        if(email.value.length >= 1){
        email.style.borderColor = '#1ed12d'
        errorEmail.innerHTML = '';
        }
        else{
                email.style.borderColor = 'red'
                errorEmail.innerHTML = 'Ingresa tu Email';
        }
    })

//     password.addEventListener('blur', function(){
    
//         errorEmail.innerHTML = 'Ingresa tu Contraseña';
             
//              })
       password.addEventListener('keyup',function(){
               if(password.value.length >= 1){
               password.style.borderColor = '#1ed12d'
               errorPass.innerHTML = '';
               }
               else{
                       password.style.borderColor = 'red'
                       errorPass.innerHTML = 'Ingresa tu Contraseña';
               }
           })

// password.addEventListener('blur', function(){
    
//         errorPass.innerHTML = 'Ingresa tu Contraseña';
      
// })
//   password.addEventListener('change',function(){
//                 errorPass.innerHTML = '';
           
          
//   })
    
})






