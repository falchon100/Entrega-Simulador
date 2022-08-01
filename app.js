import {productos} from "./js/stock.js"

const abrirCarrito =document.getElementById("abrirCarrito");
const modalCarrito =document.getElementById("modalCarrito");
const botonVaciar = document.getElementById("vaciar-carrito")
const contenidoModal =document.getElementById("contenidoModal");
const precioTotal = document.getElementById('precioTotal')
let carrito = []




let menu = document.getElementById("menu")
const mostrarProductos = (productos) =>{
productos.forEach((producto)=>{
const div = document.createElement('div')
div.innerHTML += `<div class="card " style="width: 18rem;">
                    <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Descripción:  ${producto.descripcion}</p>
                        <p class="card-text">Precio:$ ${producto.precio}</p>
                        <button class="btn btn-danger" id="boton${producto.id}">Comprar</button>
                    </div>
                </div>`
                menu.appendChild(div)

const boton = document.getElementById(`boton${producto.id}`)
boton.addEventListener('click',()=>{
    agregarAlCarrito(producto.id)
    Toastify({
        text: `Se agrego ${producto.nombre} +$${producto.precio}`,
        className: "degrade",
        style: {
        background: "linear-gradient(to right, #664343, #926657)",
        }
    }).showToast();

})
})
}
mostrarProductos(productos)
const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod)=> prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) =>{
    console.log(prodId);
    const item = carrito.find((prod) =>prod.id === prodId)
    const indice =carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}


const actualizarCarrito = () => {
    contenidoModal.innerHTML =""

    carrito.forEach((prod)=>{
        const div = document.createElement('div')
        div.className = ("modalCarrito__items")
        div.innerHTML =`
        <img class="px-1" src="${prod.img} " alt="" width="40px" height="40px">
        <p class="px-2"> <b>${prod.nombre}</b></p>
        <p class="px-2"><b>Precio: ${prod.precio}</b></p
        <p class="px-2"><b>Cantidad: <span id ="cantidad" class="px-2">${prod.cantidad}</b> </span></p>
        <button id="id${prod.id}" class ="boton-eliminar"><i class="fas fa-trash-alt"> </i></button>`
    
        contenidoModal.appendChild(div)
        let botonid = document.getElementById(`id${prod.id}`)
        botonid.addEventListener('click',()=> eliminarDelCarrito(prod.id))
    })
    precioTotal.innerHTML =carrito.reduce((acc,prod)=>acc+prod.precio,0)
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
registronone.classList.toggle("d-none")
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

/* mostrarProductos(productos) */
}
else{
    Swal.fire({
        icon: 'error',
        title: 'Algo anduvo mal',
        text: 'El usuario o contraseña ingresado no es valido',

    })
}


}



abrirCarrito.addEventListener("click",aparecer3)
function aparecer3(){
modalCarrito.classList.toggle("d-none"); 
}



let ulheader2 = document.getElementById('ulheader2')
let hamburgesa = document.getElementById('hamburgesa')
hamburgesa.addEventListener('click',aparecerr)

function aparecerr(){
    ulheader2.classList.toggle("d-none")
}

botonVaciar.addEventListener('click',()=> {
    carrito.length = 0
    actualizarCarrito()
})