import "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import "../css/style.css";

window.requiereNombre = function (input) {
    if (input.value != "") {
        input.className = "form-control is-valid"
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}

window.requiereApellido = function (input) {
    if (input.value != "") {
        input.className = " form-control is-valid"
        return true;
    } else {
        input.className = " form-control is-invalid"
        return false;
    }
}

window.requiereMail = function (input) {
    let expresionRegular = /\w+@\w+\.[a-z]/;

    if (input.value != "" && expresionRegular.test(input.value)) {
        input.className = "form-control is-valid"
        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}


window.requierePass = function (input) {
    if (input.value.length >= 8) {
        input.className = "form-control is-valid"

        return true;
    } else {
        input.className = "form-control is-invalid"
        return false;
    }
}

window.requiereNumero = function (input) {
    if (input.value != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

window.requiereCondiciones = function (input) {
    if (input.checked) {
        input.className = "form-check-input is-valid";
        return true;
    } else {
        input.className = "form-check-input is-invalid";
        return false;
    }
}

window.formularioRegistro = function (e) {
    e.preventDefault();
    if (requiereNombre(document.getElementById('nombreRegistro')) &&
        requiereApellido(document.getElementById('apellidoRegistro'))&&
        requiereMail(document.getElementById('mailRegistro'))&&
        requierePass(document.getElementById('passRegistro'))&&
        requiereNumero(document.getElementById('telefonoRegistro'))&&
        requiereCondiciones(document.getElementById('checkboxRegistro'))
    ) {
        console.log("desde la funcion validar general");
    }else{
        requiereNombre(document.getElementById('nombreRegistro'));
        requiereApellido(document.getElementById('apellidoRegistro'));
        requiereMail(document.getElementById('mailRegistro'));
        requierePass(document.getElementById('passRegistro'));
        requiereNumero(document.getElementById('telefonoRegistro'));
        requiereCondiciones(document.getElementById('checkboxRegistro'));
        alert("Debes completar todos los campos requeridos antes de poder registrarte!");
    }
}
