import {
    registroform,
    loginform
} from "./js/registro.js";


//esta variable la uso para cambiar el formato del numero para cuando hay un valor mayor a 1000 para que aparesca el punto
const separador = (numb) => {
    let str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
};

// Selecciono los id para poder utilizarlos
const abrirCarrito = document.getElementById("abrirCarrito");
const modalCarrito = document.getElementById("modalCarrito");
const botonVaciar = document.getElementById("vaciar-carrito");
const contenidoModal = document.getElementById("contenidoModal");
const precioTotal = document.getElementById("precioTotal");
const confirmarcompra = document.getElementById("confirmar-compra");
const ulheader = document.getElementById("ulheader")

let menu = document.getElementById("menu");
//inicializo un array vacio para poder acumular los productos
let carrito = [];

// creo un array vacio para luego ir pusheando el json de data.json
let productos = [];
const miLocalStorage = window.localStorage;
const cargar = async () => {
    const response = await fetch("./data.json");
    const items = await response.json();
    items.forEach((item) => {
        productos.push(item);
    });
};

export const agruparAsync = async () => {
    await cargar();
    mostrarProductos(productos);
};
/* agruparAsync(); */
//creo una funcion para traerme todos los datos del array y formar el html con todas las cards
const mostrarProductos = (productos) => {
    productos.forEach((producto) => {
        const div = document.createElement("div");
        div.innerHTML += `<div class="card " style="width: 18rem;">
                    <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">Precio:$ ${producto.precio}</p>
                        <button class="btn btn-danger" id="boton${producto.id}">Comprar</button>
                    </div>
                </div>`;
        menu.appendChild(div);
        //selecciono un boton al cual le agregue un id para que se pueda identificar el que el usuario clickeo
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            //alerta para cada vez que se agrega un item al carrito
            Toastify({
                text: `Se agrego ${producto.nombre} +$${producto.precio}`,
                className: "degrade",
                style: {
                    background: "linear-gradient(to right, #664343, #926657)",
                },
            }).showToast();
        });
    });
};
mostrarProductos(productos);
// la funcion identifica si ya hay un articulo con ese id en el producto, si es asi le suma la cantidad  y luego actualiza carrito
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some((prod) => prod.id === prodId);
    if (existe) {
        const prod = carrito.map((prod) => {
            if (prod.id === prodId) {
                prod.cantidad++;
            }
        });
        //si no existe establece que la cantidad va a ser igual a 1 y luego actualiza el carrito
    } else {
        const item = productos.find((prod) => prod.id === prodId);
        if (item) {
            const prod = productos.map((prod) => {
                if (prod.id === prodId) {
                    prod.cantidad = 1;
                }
            });
        }
        carrito.push(item);
    }
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
};

// creo una funcion que a travez de localizar el id encontramos el indice de ese producto y con el splice se borra el ultimo que agrego
const eliminarDelCarrito = (prodId) => {
    console.log(prodId);
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
};

//creo una funcion para poder recorrer el carrito e ir actualizando todo lo que se va a ver el modal
const actualizarCarrito = () => {
    contenidoModal.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "modalCarrito__items";
        div.innerHTML = `
        <img class="px-1" src="${prod.img} " alt="" width="40px" height="40px">
        <p class="px-2"> <b>${prod.nombre}</b></p>
        <p class="px-2"><b>Precio: ${prod.precio}</b></p
        <p class="px-2"><b>Cantidad: <span id ="cantidad" class="px-2">${prod.cantidad}</b> </span></p>
        <button id="id${prod.id}" class ="boton-eliminar"><i class="fas fa-trash-alt"> </i></button>`;

        contenidoModal.appendChild(div);
        let botonid = document.getElementById(`id${prod.id}`);
        botonid.addEventListener("click", () => eliminarDelCarrito(prod.id));
    });
    // utilizo el reduce para poder ver en el carrito todos los valores y sumarlos y tambien lo multiplico por la cantidad ya que si
    // el usuario apretaba el mismo articulo no me lo sumaba
    precioTotal.innerHTML = separador(
        carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    );
    console.log(carrito);
    const contadorCarrito = document.getElementById("contadorCarrito");
    contadorCarrito.innerText = carrito.length;
};

// ME LLAMO LOS BOTONES PARA LUEGO PODER ABRIR Y CERRAR EL MENU DE REGISTRO Y LOGIN
let registro = document.getElementById("registro");
let login = document.getElementById("login");
let registronone = document.getElementById("registronone");
let loginnone = document.getElementById("loginnone");

registro.addEventListener("click", aparecer);

function aparecer() {
    registronone.classList.toggle("d-none");
    loginnone.classList.add("d-none");
}
login.addEventListener("click", aparecer2);

function aparecer2() {
    loginnone.classList.toggle("d-none");
    registronone.classList.add("d-none");
}

// ME TRAIGO EL FORMULARIO Y LUEGO AL HACER SUBMIT EJECUTO
// LA FUNCION REGISTROFORM QUE TOMA EL VALUE Y LO GUARDA EN EL SESSION

let formregistro = document.getElementById("formRegistro");
formregistro.addEventListener("submit", registroform);

// ME TRAIGO EL FORMULARIO LOGIN Y LUEGO DEL SUBMIT COMPARO LOS DATOS INGRESADOS EN EL SESSIONSTORE
// CON LOS TARGET INGRESADOS EN EL FORMULARIO LOGIN
let formlogin = document.getElementById("formLogin");
formlogin.addEventListener("submit", loginform);

abrirCarrito.addEventListener("click", aparecer3);

function aparecer3() {
    modalCarrito.classList.toggle("d-none");
}

let hamburgesa = document.getElementById("hamburgesa");
hamburgesa.addEventListener("click", () => {
    ulheader.classList.toggle('mover')
});


botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
    localStorage.clear();
});

function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
}

export function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem("carrito") !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem("carrito"));
        actualizarCarrito();
    }
}

confirmarcompra.addEventListener("click", () => {
    let sumita = separador(carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0))
    Swal.fire({
        title: 'Confirmamos tu pedido!',
        text: `el importe a abonar es de $${sumita}`,
        imageUrl: "./img/cafe3.jpg",
        imageWidth: 400,
        imageHeight: 320,
        imageAlt: 'Custom image',
    })
    carrito = [];
    actualizarCarrito()
})