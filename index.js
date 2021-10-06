
let terCon = prompt("Si acepta terminos y condiciones ingrese Si "); {

   if (terCon == "Si"||terCon =="si"||terCon =="SI") {
        console.log("Terminos aceptados");
    }
    
    else {
        console.log("Terminos cancelados");
    }
}



function validarUsuario( usuario ){
    let usuarioRegistrado = "pepe";
    
    if( usuario == usuarioRegistrado ){
        return true;
    }
    else{
        console.log("Usuario incorrecto");
        return false;
    }
}

function valirdarPass( pass ){
    let passsRegistrado = "123";

    if( pass == passsRegistrado ){
        return true;
    }
    else{
        console.log("Contreseña incorrecta");
        return false;
    }
}

function login( usuario , pass){
    
    if( usuario == true && pass == true){
        return true;
        
    }
}

let usuario = prompt("Ingrese su usuario en minúscula");
let pass = prompt("Ingrese su contraseña");

if( login( validarUsuario( usuario ) , valirdarPass(pass))){
    console.log("Bienvenido/a al sitema");
}
