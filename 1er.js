document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementsByName('name')[1]; // Obtener el segundo input con name 'name'
    const submitButton = document.querySelector('input[type="submit"]');
    const importanceYesRadio = document.getElementById('importance_si');
    const checkboxContainer = document.getElementById('checkbox-container');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('pwd');
    const confirmPasswordInput = document.getElementsByName('pwd')[1]; // Obtener el segundo input con name 'pwd'

    // Validación al perder el foco del campo nombre
    nameInput.addEventListener('blur', function () {
        alert("EN MAYUSCULA SOSTENIDA");
    });

    // Activar el botón Enviar al ingresar el apellido
    lastNameInput.addEventListener('input', function () {
        submitButton.disabled = false;
    });

    // Mostrar u ocultar checkboxes según la selección de Sí/No
    importanceYesRadio.addEventListener('change', function () {
        if (importanceYesRadio.checked) {
            checkboxContainer.style.display = 'block';
        } else {
            checkboxContainer.style.display = 'none';
        }
    });

    // Validar que el campo de email contenga el símbolo @
    emailInput.addEventListener('input', function () {
        if (!emailInput.value.includes('@')) {
            alert('El campo de email debe contener "@"');
        }
    });

    // Validar la igualdad de contraseñas al perder el foco del campo confirmar contraseña
    confirmPasswordInput.addEventListener('blur', function () {
        if (passwordInput.value === confirmPasswordInput.value) {
            // Contraseñas iguales, resaltar con verde
            passwordInput.style.border = '2px solid green';
            confirmPasswordInput.style.border = '2px solid green';
        } else {
            // Contraseñas diferentes, resaltar con rojo
            passwordInput.style.border = '2px solid red';
            confirmPasswordInput.style.border = '2px solid red';
        }
    });
});
