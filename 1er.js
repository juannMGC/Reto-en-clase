document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');
    const submitButton = document.getElementById('submit-button');
    const importanceRadioYes = document.getElementById('importance_si');
    const checkboxContainer = document.getElementById('checkbox-container');
    const emailInput = document.getElementById('email');
    const pwdInput = document.getElementById('pwd');
    const confirmPwdInput = document.getElementById('confirm-pwd');

    nameInput.addEventListener('blur', function () {
        alert("Nombre en mayúscula sostenida: " + nameInput.value.toUpperCase());
    });

    lastNameInput.addEventListener('input', function () {
        submitButton.disabled = false;
    });

    importanceRadioYes.addEventListener('change', function () {
        if (importanceRadioYes.checked) {
            checkboxContainer.style.display = 'block';
        } else {
            checkboxContainer.style.display = 'none';
        }
    });

    emailInput.addEventListener('blur', function () {
        if (!emailInput.value.includes('@')) {
            alert('El campo de email debe contener "@"');
        }
    });

    confirmPwdInput.addEventListener('input', function () {
        if (pwdInput.value === confirmPwdInput.value) {
            pwdInput.style.borderColor = 'green';
            confirmPwdInput.style.borderColor = 'green';
        } else {
            pwdInput.style.borderColor = 'red';
            confirmPwdInput.style.borderColor = 'red';
        }
    });
});
