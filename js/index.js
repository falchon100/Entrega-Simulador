// Genero una funcion para registrar Usuario y contraseña
alert('Bienvenido para realizar el pedido debera estar registrado')
function registroUsuario(){
    
    return prompt('REGISTRO: \n ingrese el nombre de usuario para poder registrarlo');
}

function registroContraseña(){
    return prompt('REGISTRO: \n ingrese su contraseña ');
}

// Aca utilizo las funciones 

let usuarioRegistrado = registroUsuario();
let contraseñaRegistrada = registroContraseña();

alert('Perfecto! se ha registrado correctamente')

function logear(usuarioRegistrado,contraseñaRegistrada){
    let usuario = prompt('Por favor ingresa tu usuario para poder ingresar');
    let contraseña = prompt("Por favor ingresa tu contraseña para poder ingresar");
    
    while (usuarioRegistrado !== usuario || contraseñaRegistrada !== contraseña){
    usuario = prompt('Ha ingresado un usuario o contraseña no valida . Ingresa el usuario');
    contraseña =prompt('ingresa una contraseña');
    }
    alert('has ingresado correctamente! \n Ahora si puede realizar el pedido')
    }
    
    logear(usuarioRegistrado,contraseñaRegistrada)


// Creo un array donde tengo todos los objetos del menu

    const producto = [
        { id: 1, articulo: "Cafe", precio: 200 },
        { id: 2, articulo: "Late", precio: 250 },
        { id: 3, articulo: "Submarino", precio: 300 },
        { id: 4, articulo: "Frapuchino", precio: 400 },
        { id: 5, articulo: "medialuna", precio: 200 },
        { id: 6, articulo: "Torta", precio: 250 },
        { id: 7, articulo: "Tostado", precio: 300 },
        ];
    
        //Declaro funcion mostrar menu para poder visualizar el menu cuando lo necesite

    function mostrarMenu(){
        alert (" ---------MENU-------- \n --------BEBIDAS--------\n 1)CAFE  $150 \n 2)  LATE $250 \n 3)SUBMARINO $250 \n 4)FRAPUCHINO $400 \n --------COMIDAS-------- \n 5)MEDIALUNA $100 \n 6)PORCION TORTA $300 \n 7) TOSTADO $250" )
    }

    mostrarMenu() 

// Aca armo el arrays vacios para luego llenarlo.

    let carrito = [];

    // Genero un while que se suspende una vez apretado el "0" y mientras va tomando el pedido y lo agrega al array carrito

let entrada ;
while (entrada !=0 ) {
    entrada = parseInt(prompt('Escoja los items que desea agregar \n 1)CAFE  $150 \n 2) LATE $250 \n 3) SUBMARINO $250 \n 4)FRAPUCHINO $400 \n 5)MEDIALUNA $100 \n 6)PORCION TORTA $300 \n 7) TOSTADO $250  \n    COLOQUE "0" PARA FINALIZAR"')) 
if (entrada === 1){
    carrito.push(producto[0])
    alert(`ha agregado cafe que cuesta $200`)
}else if (entrada ===2){
    carrito.push(producto[1])
    alert('Ha agregado un late que cuesta $250')
}else if (entrada ===3){
    carrito.push(producto[2])
    alert('Ha agregado un Submarino que cuesta $300')
}else if (entrada ===4){
    carrito.push(producto[3])
    alert('Ha agregado un Frapuchino que cuesta $400')
}else if (entrada ===5){  
    carrito.push(producto[4])
    alert('Ha agregado una Medialuna que cuesta $200')
}else if (entrada ===6){ 
    alert('Ha agregado una Torta que cuesta $250')
    carrito.push(producto[5]) 
}else if (entrada ===7){ 
    alert('Ha agregado un Tostado que cuesta $300')
    carrito.push(producto[6])     
}
}

//Utilizo el reduce para tomar el valor de los precios de listacarrito y luego los sumo 
let listaCarrito = carrito.map(elemento => elemento.articulo)
let total = carrito.reduce((acumulador,elemento) => acumulador + elemento.precio,0);
alert('los articulos que eligio fueron:')

//Genero un for para recorrer el arreglo y luego mostrarlo en alert a cada producto y pongo el index+1 para poder numerar cada listado ya que arranca del 0 
for (let index = 0; index < listaCarrito.length; index++) {
    const element = listaCarrito[index];
    alert(`${index+1}) ${element}`)
}
forma = parseInt( prompt(`Como quiere abonar? actualmente el monto es $${total} \n 1) Si abona en efectivo tendra un 20% de descuento \n 2) si abona con tarjeta un 10% \n 3) si abona con otra forma de pago`) )
if (forma ===  1){
    total = total *0.80 ;
    alert(`El monto total a pagar es : $${total} ya que eligio abonar con efectivo`)}
else if (forma === 2){
    total = total *0.90;
    alert(`El monto total a pagar es : $${total} ya que eligio abonar con tarjeta`)
}else {
    alert(`El monto a pagar es : $${total} ya que eligio abonar con otro medio de pago`)

} 

alert('si desea ver el detalle aprete enter y luego  F12')
console.log(carrito);



