import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../css/style.css";
import Swal from "sweetalert2";

window.login = function (event) {
  event.preventDefault();
  let user = document.getElementById("user").value();
  let password = document.getElementById("password").value();
  // Usuarios: (Para agregar uno nuevo se puede agregar un nuevo if manteniendo el contenido del centro.)
  if (user == "ADMIN" && password == "ADMIN") {
    console.log("Login Correcto.");
    location.href = "admin.html";
  }
  if (user == "ROLLING" && password == "CODE2020") {
    console.log("Login Correcto.");
    location.href = "admin.html";
  }
  //Modifica pagina en caso de usuario incorrecto:
  else {
    let invalidUser = document.getElementById("user");
    let invalidPassword = document.getElementById("password");
    let invalidImagen1 = document.getElementById("imgLogin1");
    let invalidImagen2 = document.getElementById("imgLogin2");
    invalidUser.className = "form-control is-invalid";
    invalidPassword.className = "form-control is-invalid";
    invalidImagen1.className = "fondoLogin1-invalid";
    invalidImagen2.className = "fondoLogin2-invalid";
  }
};

window.recuperarContraseña = function (event) {
  event.preventDefault();
  let input = document.getElementById("recuperar");
  let expresion = /\w+@+\w+\.[a-z]/;
  if (input.value != "" && expresion.test(input.value)) {
    let template_params = {
      to_name: "Administrador",
      from_name: document.getElementById("recuperar").value,
    };

    let service_id = "default_service";
    let template_id = "recupero";
    emailjs.send(service_id, template_id, template_params).then(
      function (response) {
        console.log(response);
        Swal.fire(
          "¡Correcto!",
          "Un administrador se comunicara por medio del mail informado para ayudar a recuperar tu contraseña.",
          "info"
        ).then(function () {
          location.reload();
        });
      },
      function (error) {
        input.className = "form-control w-100 is-invalid";
        document.getElementById("feedback").innerText =
          "Ocurrio un error intente mas tarde.";
      }
    );
  } else {
    input.className = "form-control w-100 is-invalid";
    document.getElementById("feedback").innerText =
      "Debe ingresar un email valido.";
  }
};
