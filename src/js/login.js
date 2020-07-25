import "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import "../css/style.css";

window.login = function () {
    event.preventDefault();
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    user = user.toUpperCase();
    password = password.toUpperCase();
    // Usuarios: (Para agregar uno nuevo se puede agregar un nuevo if manteniendo el contenido del centro.)
    if(user == 'ADMIN' && password == 'ADMIN'){
        console.log("Login Correcto.");
        location.href = "./src/admin.html";
    }
    if(user == 'ROLLING' && password == 'CODE2020'){
        console.log("Login Correcto.");
        location.href = "./src/admin.html";
    }
    //Modifica pagina en caso de usuario incorrecto:
    else{
        let invalidUser = document.getElementById('user');
        let invalidPassword = document.getElementById('password');
        let invalidImagen1 = document.getElementById('imgLogin1');
        let invalidImagen2 = document.getElementById('imgLogin2');
        invalidUser.className = "form-control is-invalid";
        invalidPassword.className = "form-control is-invalid";
        invalidImagen1.className = "fondoLogin1-invalid";
        invalidImagen2.className = "fondoLogin2-invalid";
    }
}