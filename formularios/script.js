const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function mostrarMensajeError(mensaje) {
    parrafo.innerHTML = mensaje;
}

function validarNombre() {
    if (nombre.value.trim().length < 3) {
        mostrarMensajeError("El nombre debe contener más de 2 caracteres.");
        return false;
    }
    return true;
}

function validarFormulario() {
    parrafo.innerHTML = "";

    const nombreValido = validarNombre();

    return nombreValido;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    if (validarFormulario()) {
        form.submit();
    }
});

nombre.addEventListener("focus", () => {
    mostrarMensajeError(""); // Limpia el mensaje de error al enfocar el campo
});

nombre.addEventListener("blur", validarNombre); // Valida el nombre al perder el enfoque
