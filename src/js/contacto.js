import "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import "../css/style.css";

function requerido(input) {

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

function revisarEmail(input) {

    let expresion = /\w+@\w+\.[a-z]/;

    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}


function revisarConsulta(consulta) {
    if (consulta.value.length >= 10) {
        consulta.className = "form-control is-valid";
        return true;
    } else {
        consulta.className = "form-control is-invalid";
        return false;
    }
}

/// validar email

function revisarEmail(input) {
    // juandami1982@gmail.com para validar
    let expresion = /\w+@\w+\.[a-z]/;

    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}


function revisarConsulta(consulta) {
    if (consulta.value.length >= 10) {
        consulta.className = "form-control is-valid";
        return true;
    } else {
        consulta.className = "form-control is-invalid";
        return false;
    }
}


// boton enviar

function validarGeneral(event) {
    event.preventDefault();
    console.log('Desde la funcion validar general' + event);
    if (requerido(document.getElementById('nombre')) &&
        revisarEmail(document.getElementById('email')) &&
        
        revisarConsulta(document.getElementById('consulta')) &&
        revisarTerminos()) {
        enviarEmail();
        alert("El formulario esta listo para ser enviado");
    } else {
        document.getElementById('msjEnvio').className = 'alert alert-danger my-3';
        document.getElementById('msjEnvio').innerText = 'ocurrio un error';
    }
}

function enviarEmail() {
    let template_params = {
        from_name: document.getElementById('nombre').value,
        to_name: "juan damichici",
        message_html: `email: ${document.getElementById
                ('email').value} - ${document.getElementById('consulta').value}`
    };

    let service_id = "default_service";
    let template_id = "template_iT1uMq0N";
    emailjs.send(service_id, template_id, template_params).then(function (response) {
        // esto se ejecuta si se envio correctamente el mail
        console.log(response);
        document.getElementById('msjEnvio').className = 'alert alert-primary my-3';
        document.getElementById('msjEnvio').innerText = 'su consulta fue enviada.';

    }, function (error) {
        console.log("error", error);
        document.getElementById('msjEnvio').className = 'alert alert-danger my-3';
        document.getElementById('msjEnvio').innerText = 'A ocurrido un error en el envio.';

    }
    );
}
