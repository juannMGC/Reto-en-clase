// Esperar a que el documento esté cargado
document.addEventListener("DOMContentLoaded", function() {

    // Función para mostrar alerta con nombre en mayúsculas al perder el foco
    document.getElementById("name").addEventListener("blur", function() {
        mostrarAlert(this.value.toUpperCase());
    });

    // Función para activar el botón Enviar después de ingresar el Apellido
    document.getElementById("apellidos").addEventListener("input", function() {
        activarBoton();
    });

    // Función para mostrar/ocultar checkbox al seleccionar Sí/No
    var importanceYes = document.getElementById("importance_si");
    var checkboxContainer = document.getElementById("checkboxContainer");

    importanceYes.addEventListener("change", function() {
        if (this.checked) {
            checkboxContainer.style.display = "block";
        }
    });

    document.getElementById("importance_no").addEventListener("change", function() {
        if (this.checked) {
            checkboxContainer.style.display = "none";
        }
    });

    // Función para exigir que se agregue "@" al campo de Email
    document.getElementById("email").addEventListener("input", function() {
        validarEmail();
    });

    // Función para verificar si las contraseñas coinciden y resaltar campos
    var passwordInput = document.getElementById("pwd");
    var confirmPasswordInput = document.getElementById("confirmPwd");

    passwordInput.addEventListener("input", function() {
        validarContraseñas();
    });

    confirmPasswordInput.addEventListener("input", function() {
        validarContraseñas();
    });

});

// Función para mostrar alerta con nombre en mayúsculas sostenida
function mostrarAlert(nombre) {
    alert(nombre);
}

// Función para activar el botón Enviar después de ingresar el Apellido
function activarBoton() {
    var apellidosInput = document.getElementById("apellidos");
    var submitButton = document.getElementById("submitButton");

    if (apellidosInput.value.trim() !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Función para exigir que se agregue "@" al campo de Email
function validarEmail() {
    var emailInput = document.getElementById("email");
    var submitButton = document.getElementById("submitButton");

    if (emailInput.value.includes("@")) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Función para verificar si las contraseñas coinciden y resaltar campos
function validarContraseñas() {
    var passwordInput = document.getElementById("pwd");
    var confirmPasswordInput = document.getElementById("confirmPwd");

    if (passwordInput.value === confirmPasswordInput.value) {
        passwordInput.style.borderColor = "green";
        confirmPasswordInput.style.borderColor = "green";
    } else {
        passwordInput.style.borderColor = "red";
        confirmPasswordInput.style.borderColor = "red";
    }
}
