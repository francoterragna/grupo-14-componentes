window.addEventListener('load', function (){
    console.log(sessionStorage.getItem('producto'));
    let array = sessionStorage.getItem('producto');
    array = JSON.parse(array);
    console.log(array.nombre);

})