import {productos} from "./js/stock.js"
//Modifico un div para crear el contenido de los stock que importo de stock.js

let menu = document.getElementById("menu");

const mostrarProductos = (productos) =>{
for (const producto of productos){
    menu.innerHTML += `<div class="col-12 col-md-6 col-lg-4"> <div class="card mx-auto mt-3 mb-3" style="width: 18rem;">
    <img src="${producto.img} " class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre} </h5>
    <p class="card-text">${producto.descripcion} </p>
    <p class="card-text">$${producto.precio} </p>
    <a href="#" class="btn btn-danger" id=boton${producto.id} >Agregar a Carrito</a>
    </div>
</div></div>`
const boton = document.getElementById(`boton${producto.id}`)
boton.addEventListener("click", ()=>{ 

})

}
}
// ME LLAMO LOS BOTONES PARA LUEGO PODER ABRIR Y CERRAR EL MENU DE REGISTRO Y LOGIN 
let registro = document.getElementById("registro");
let login = document.getElementById("login");
let registronone =document.getElementById("registronone");
let loginnone =document.getElementById("loginnone");


registro.addEventListener("click",aparecer)
function aparecer(){
registronone.classList.toggle("d-none")
loginnone.classList.add("d-none")
}
login.addEventListener("click",aparecer2)
function aparecer2(){
loginnone.classList.toggle("d-none")
registronone.classList.add("d-none")
}


// ME TRAIGO EL FORMULARIO Y LUEGO AL HACER SUBMIT EJECUTO 
// LA FUNCION REGISTROFORM QUE TOMA EL VALUE Y LO GUARDA EN EL SESSION

let formregistro = document.getElementById('formRegistro');
    formregistro.addEventListener('submit',registroform);

function registroform(e){
e.preventDefault(e);
let formulario =e.target;
console.log(formulario.children[2].value);
sessionStorage.setItem("email",formulario.children[2].value)
console.log(formulario.children[4].value);
sessionStorage.setItem("clave",formulario.children[4].value)
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Te has registrado correctamente',
    showConfirmButton: false,
    timer: 1500
})
}
// ME TRAIGO EL FORMULARIO LOGIN Y LUEGO DEL SUBMIT COMPARO LOS DATOS INGRESADOS EN EL SESSIONSTORE
// CON LOS TARGET INGRESADOS EN EL FORMULARIO LOGIN 
let formlogin= document.getElementById('formLogin');
formlogin .addEventListener('submit',loginform);

function loginform(e){
    let formulario= e.target;
e.preventDefault(e);
if (((sessionStorage.getItem("email") == formulario.children[2].value)) && ((sessionStorage.getItem("clave") == formulario.children[4].value))) {
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Ha ingresado correctamente, ahora puede hacer su pedido',
    showConfirmButton: false,
    timer: 1500
})
loginnone.classList.toggle("d-none")

mostrarProductos(productos)
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Algo anduvo mal',
        text: 'El usuario o contraseña ingresado no es valido',

    })
}


}

let abrirCarrito =document.getElementById("abrirCarrito");
let modalCarrito =document.getElementById("modalCarrito");

abrirCarrito.addEventListener("click",aparecer3)
function aparecer3(){
modalCarrito.classList.toggle("opacity-100"); 
}


