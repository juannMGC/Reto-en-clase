function convertir() {
    let nombre = document.getElementById('nombre').value;
    let nombre_mayus = nombre.toUpperCase();
    alert("MAYUSCULA SOSTENIDA");
}

function actboton() {
    let boton = document.getElementById('boton');
    boton.disabled = false;
}

function registro() {
    let registro = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let div_registro = document.getElementById('si_registro');
    if (radio2.checked){
        radio2.checked = false;
    }
    if (registro.checked) {
        div_registro.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">Modalidad 1</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">Modalidad 2</label>
            </div>`;
    } else {
        div_registro.innerHTML = "";
    }
}

function registro2() {
    let registro2 = document.getElementById('radio2');
    let div_registro = document.getElementById('si_registro');
    let radio1 = document.getElementById('radio1');
    if (radio1.checked){
        radio1.checked = false;
    }
    if (registro2.checked) {
        div_registro.innerHTML = "";
    } else {
        div_registro.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">Modalidad 1</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">Modalidad 2</label>
            </div>`;
    }
}

function validar() {
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('password1');

    if (pass1.value != pass2.value) {
        pass1.style.borderColor = 'red';
        pass2.style.borderColor = 'red';
    } else {
        pass1.style.borderColor = 'green';
        pass2.style.borderColor = 'green';    
    }
}

function validarEmail(email) {
    let emailInput = document.getElementById('email');
    if (!email.includes('@')) {
        alert('El campo de email debe contener "@"');
        emailInput.value = "";  // Limpiar el campo en caso de error
    }
}

function enviarFormulario() {
    // Agrega aquí la lógica para enviar el formulario si todas las validaciones son exitosas.
    alert('Formulario enviado con éxito!');
}
