import "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import "../css/style.css";

window.requerido = function(input) {

    if (input.value != "") {
        //   el input tiene texto
        input.className = "form-control is-valid";
        return true;
    } else {
        // el input este vacio
        input.className = "form-control is-invalid";
        return false;
    }
}

// // validar email

window.revisarEmail = function (input) {

    let expresion = /\w+@\w+\.[a-z]/;

    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}


window.revisarConsulta = function (consulta) {
    if (consulta.value.length >= 10) {
        consulta.className = "form-control is-valid";
        return true;
    } else {
        consulta.className = "form-control is-invalid";
        return false;
    }
}

// boton enviar

window.validarGeneral = function (event) {
    event.preventDefault();
    console.log('Desde la funcion validar general');
    if (requerido(document.getElementById('nombre')) &&
        revisarEmail(document.getElementById('email')) &&
        revisarConsulta(document.getElementById('consulta'))) {
        enviarEmail();
    } else {
        document.getElementById('msjEnvio').className = 'alert alert-danger my-3';
        document.getElementById('msjEnvio').innerText = 'Debe completar todos los campos';
    }
}

window.enviarEmail = function () {
    let template_params = {
        from_name: document.getElementById('nombre').value,
        to_name: "Juan Damichici",
        message_html: `email: ${document.getElementById
                ('email').value} - ${document.getElementById('consulta').value}`
    };
    let service_id = "default_service";
    let template_id = "template_iT1uMq0N";
    emailjs.send(service_id, template_id, template_params).then(function (response) {
        console.log(response);
        document.getElementById('msjEnvio').className = 'alert alert-primary my-3';
        document.getElementById('msjEnvio').innerText = 'Su consulta fue enviada.';
    }, function (error) {
        console.log("error", error);
        document.getElementById('msjEnvio').className = 'alert alert-danger my-3';
        document.getElementById('msjEnvio').innerText = 'A ocurrido un error en el envio.';
    }
    );
}
