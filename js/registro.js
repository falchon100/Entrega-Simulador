import {
    cargarCarritoDeLocalStorage,
    agruparAsync
} from "../app.js"

//FUNCION QUE REGISTRA LOS DATOS INGRESADOS Y LOS GUARDA EN EL LOCALSTORAGE 
export function registroform(e) {
    e.preventDefault(e);
    let formulario = e.target;

    if ((!formulario.children[2].value) || (!formulario.children[4].value)) {
        Swal.fire({
            icon: 'error',
            title: 'Debe completar todos los campos!',
        })
    } else {
        localStorage.setItem("email", formulario.children[2].value)
        localStorage.setItem("clave", formulario.children[4].value)
        let formularioStorage = JSON.stringify(localStorage.getItem("email"))
        console.log(formularioStorage);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Te has registrado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
        registronone.classList.toggle("d-none")
    }
}


//FUNCION QUE TOMA LOS DATOS INGRESADOS EN EL REGISTROFORM() Y LOS COMPARA CON LOS INGRESADOS EN EL LOGIN PARA PODER INGRESAR Y TOMAR EL CARRITO COMO LO TENIA
export function loginform(e) {
    let formulario = e.target;
    e.preventDefault(e);
    if (((localStorage.getItem("email") == formulario.children[2].value)) && ((localStorage.getItem("clave") == formulario.children[4].value))) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ha ingresado correctamente, ahora puede hacer su pedido',
            showConfirmButton: false,
            timer: 1500
        })
        loginnone.classList.toggle("d-none")
        cargarCarritoDeLocalStorage()
        /*         mostrarProductos(productos) */
        agruparAsync()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Algo anduvo mal',
            text: 'El usuario o contraseña ingresado no es valido',

        })
    }
}