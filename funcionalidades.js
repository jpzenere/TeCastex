const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");
const errorEmail = document.getElementById("errorEmail");
const errorMensaje = document.getElementById("errorMensaje");
const form = document.getElementById("form");

function validarNombre() {
    let nombre = document.getElementById("nombre").value;
    let nombreElement = document.getElementById("nombre")

    if(nombre.length == 0 || !nombre.match(/^[A-Za-z]/)) {
        errorNombre.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        errorNombre.style.color="red" 
        nombreElement.style.border="solid red 2px";
        return false
    } else {
        errorNombre.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        errorNombre.style.color="mediumseagreen";
        nombreElement.style.border="solid mediumseagreen 2px";
        return true
        }
}

function validarApellido() {
    let apellido = document.getElementById("apellido").value;
    let apellidoElement = document.getElementById("apellido")

    if(apellido.length == 0 || !apellido.match(/^[A-Za-z]/)) {
        errorApellido.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        errorApellido.style.color="red";
        apellidoElement.style.border="solid red 2px";
        return false
    } else {  
        errorApellido.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        errorApellido.style.color="mediumseagreen";
        apellidoElement.style.border="solid mediumseagreen 2px";
        return true
        }
}

function validarEmail() {
    let email = document.getElementById("email").value;
    let emailElement = document.getElementById("email")

    if(email.length == 0 || !email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
        errorEmail.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        errorEmail.style.color="red" 
        emailElement.style.border="solid red 2px";
        return false
    } else {  
        errorEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        errorEmail.style.color="mediumseagreen";
        emailElement.style.border="solid mediumseagreen 2px";
        return true
        }
}

function validarMensaje() {
    let mensaje = document.getElementById("mensaje").value;
    let mensajeElement = document.getElementById("mensaje");
    let requerido = 30;
    let maximo = 500;
    let quedan = requerido - mensaje.length;
    let sobran = mensaje.length - maximo;

    if(quedan > 0) {
        errorMensaje.innerHTML = `Faltan ${quedan} caracteres para completar el mensaje.`;
        errorMensaje.style.color="red";
        mensajeElement.style.border="solid red 2px";
        errorMensaje.style.border="none";
        return false

    } else if(sobran > 0) {
        errorMensaje.innerHTML = `Se ha exedido por ${sobran} caracteres.`;
        errorMensaje.style.color="red";
        mensajeElement.style.border="solid red 2px";
        errorMensaje.style.backgroundColor= "white";
        errorMensaje.style.border="solid red 1px";
        return false

    } else {  
        errorMensaje.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        errorMensaje.style.color="mediumseagreen";
        mensajeElement.style.border="solid mediumseagreen 2px";
        errorMensaje.style.border="none";
        errorMensaje.style.background= "none";
        return true
        }
}

form.addEventListener("submit", (e) => {
        e.preventDefault()

    let esNombreTrue = validarNombre();
    let esApellidoTrue = validarApellido();
    let esEmailTrue = validarEmail();
    let esMensajeTrue = validarMensaje();

    let esFormValid = esNombreTrue && 
    esApellidoTrue && 
    esEmailTrue && 
    esMensajeTrue;

    if(esFormValid) {
        form.submit()
    }

})
