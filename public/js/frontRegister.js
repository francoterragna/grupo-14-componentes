// Validaciones del Register 

window.addEventListener('load',function(){


    let formulario = document.querySelector('form')
    formulario.addEventListener('submit', function(e){
//  e.preventDefault();

let errores = [];

let campoNombre = document.querySelector('.input_name');
console.log(campoNombre.value);
if(campoNombre.value =="") {
    // alert('El campo tiene que estar completo')
    errores.push('El campo tiene que estar completo');
}
else if(campoNombre.value.length < 3) {
    // alert('El campo debe tener al menos 3 carácteres')
    errores.push('El campo de nombre debe tener al menos 3 caracteres');
}

if(errores.length > 0) {
e.preventDefault();

let ulErrores = document.querySelector('.text-danger ul');
for(let i = 0 ; i < errores.length; i++) {
ulErrores.inner.HTML = '<li>' + errores[i] + '</li>'
}
}
    })
})
