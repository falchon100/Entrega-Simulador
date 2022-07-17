import {productos} from "./js/stock.js"

const mostrarProductos = (productos) =>{
    const contenedorProductos = document.getElementById("producto-contenedor");

    productos.forEach( producto => {
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
/* 
        const boton = documet.getElementById(`boton${producto.id} `)

        boton.addEventlistener('click',()=>{

        }) */
    })
}

mostrarProductos(productos)