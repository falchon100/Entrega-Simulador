
alert('Bienvenido vamos a registrarte')
function registroUsuario(){
    
    return prompt('ingrese el nombre de usuario para poder registrarlo');
}

function registroContraseña(){
    return prompt('ingrese su contraseña para poder registrarla');
}


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
    alert('has ingresado correctamente')
    }
    
    logear(usuarioRegistrado,contraseñaRegistrada)




