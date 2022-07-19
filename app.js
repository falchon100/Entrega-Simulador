import {productos} from "./js/stock.js"

let row = document.getElementById("row");

const mostrarProductos = (productos) =>{
/*     const contenedorProductos = document.getElementById("producto-contenedor"); */

for (const producto of productos){
 /*    let contenido = document.createElement("div"); */
    row.innerHTML += `<div class="col-12 col-md-6 col-lg-4"> <div class="card mx-auto mt-3 mb-3" style="width: 18rem;">
    <img src="${producto.img} " class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre} </h5>
    <p class="card-text">${producto.descripcion} </p>
    <p class="card-text">$${producto.precio} </p>
    <a href="#" class="btn btn-danger" >Agregar a Carrito</a>
    </div>
</div></div>`
/* row.append(contenido) */
}






/*     productos.forEach( producto => {
        const div = document.createElement(`div`)
        div.className=`card d-inline-block`
        div.innerHTML +=`
        <div class="row"> 
                <div class="col-12 col-lg-4 text-center" style="width: 18rem;">
                        <div class="card-body"> 
                        <img src="${producto.img} " class="card-img-top" alt="...">
                        <h5 class="card-title">${producto.nombre} </h5>
                        <p class="card-text">${producto.descripcion} .</p>
                        <p class="card-text">$${producto.precio} </p>
                        <a href="#" class="btn btn-danger id=button${producto.id} ">Agregar a Carrito</a>
                    </div>
                </div>
        </div> `

        contenedorProductos.appendChild(div)
    }) */
}

let registro = document.getElementById("registro");
let login = document.getElementById("login");
let registronone =document.getElementById("registronone");
let loginnone =document.getElementById("loginnone");


registro.addEventListener("click",aparecer)
function aparecer(){
registronone.classList.remove("d-none")
}

login.addEventListener("click",aparecer2)
function aparecer2(){
loginnone.classList.remove("d-none")
}


mostrarProductos(productos)


