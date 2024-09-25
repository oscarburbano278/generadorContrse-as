//let cantidad = 9;
let ingresoNum = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let contrasena = document.getElementById('contrasena')



const cadenaContrasena = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt (ingresoNum.value)
    //console.log(numeroDigitado);
    
    if (numeroDigitado < 8) {
        alert('la cantidad debe ser mayor o igual 8');
        
    }else{
        let password = '';
        for (let i = 0; i < numeroDigitado; i++) {
            let numAleatorio = cadenaContrasena [Math.floor(Math.random() * cadenaContrasena.length)];

            //console.log(numAleatorio);

            password += numAleatorio
            
        }
        contrasena.value = password;
    }    
}

function validarInput() {
    // Obtén el valor del input
    const contraGenerada = document.getElementById('contrasena').value;
    console.log(contraGenerada);
    // Expresión regular para validar:
    // Al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // Valida si el valor cumple con la expresión regular
    if (regex.test(contraGenerada)) {
       alert('contraseña segura')
    } else {
        alert('contraseña NO segura ')
    }
}


function limpiar() {
    document.getElementById('contrasena').value = '';
}








