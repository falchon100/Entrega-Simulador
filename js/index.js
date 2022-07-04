/*     alert('Hola vamos a  registrarte');
    let usuario = prompt('Elige el nombre de usuario');
    let contraseña = prompt('Elige una contraseña');
    

    alert('Genial ahora vamos a ingresar');

let usuarioIngresado = prompt('usuario');
let contraseñIngresada = prompt('contraseña');

while (usuario!== usuarioIngresado || contraseña !== contraseñIngresada) { 
    usuarioIngresado = prompt('Ha ingresado un usuario o contraseña no valida. Ingresa el usuario')
    contraseñIngresada = prompt('ingrese contraseña')
}

alert('Has ingresado correctamente')
    
 */

/* const valor1 = function(){
    return prompt('ingrese usuarioo')
}

const valor2 = function(){
    return prompt('ingrese contraseñaa')
}

valor1()
valor2() */

alert('Bienvenido vamos a registrarte')
let valor1 = prompt('1. ingrese su usuario')
let valor2 =prompt ('2. ingrese su contraseña')


function logear(valor1,valor2){
let usuario = prompt('usuario');
let contraseña = prompt("contraseña");

    while (valor1 !== usuario || valor2 !== contraseña){
    usuario = prompt('Ha ingresado un usuario o contraseña no valida . Ingresa el usuario');
    contraseña =prompt('ingresa una contraseña');
}
alert('has ingresado correctamente')
}

logear(valor1,valor2)


