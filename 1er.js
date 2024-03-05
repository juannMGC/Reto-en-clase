function convertir() {
    let nombre = document.getElementById('nombre').value;
    let nombre_mayus = nombre.toUpperCase();
    alert(nombre_mayus);
}

function actboton() {
    let boton = document.getElementById('boton');
    boton.disabled = false;
}

function registro() {
    let registro = document.getElementById('radio1');
    let div_registro = document.getElementById('si_registro');

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

