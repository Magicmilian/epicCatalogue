import "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import $ from 'jquery';
import "../css/style.css";

//Importo la clase desde el archivo juegos.js
import Producto from "./productos.js";

let listaProductos = [];
let productoExistente = false;

leerDatos()

//LECTOR DE DATOS DE LS
function leerDatos() {
    if (localStorage.length > 0) {
        let productosLS = JSON.parse(localStorage.getItem("productoKey"));
        if (listaProductos.length == 0 && productosLS != null) {
            listaProductos = productosLS;
        }
        //Borramos las filas de la tabla
        borrarFilas();
        //Dibujamos nuevamente las filas de la tabla
        dibujarFilas(productosLS);
    }
}

//FUNCIONALIDAD BOTON PUBLICADO
window.publicador = function (id) {
    let checker = document.getElementById(`${id}`);
    if (checker.checked) {
        //Encontramos el producto en el arreglo de LS y modificamos el valor
        for (let i in listaProductos) {
            if (listaProductos[i].codigo == id) {
                listaProductos[i].publicado = true;
            }
        }
        //Actualizamos el arreglo de LS
        localStorage.setItem("productoKey", JSON.stringify(listaProductos));
    } else {
        //Encontramos el producto en el arreglo de LS y modificamos el valor
        for (let i in listaProductos) {
            if (listaProductos[i].codigo == id) {
                listaProductos[i].publicado = false;
            }
        }
        //Actualizamos el arreglo de LS
        localStorage.setItem("productoKey", JSON.stringify(listaProductos));
    }
}

//FUNCIONALIDAD BOTON DESTACADO
window.destacador = function (codigo) {
    //Encontramos el producto en el arreglo de LS y cambiamos el valor
    for (let i in listaProductos) {
        if (listaProductos[i].codigo == codigo) {
            if (listaProductos[i].destacado == false) {
                listaProductos[i].destacado = true;
                localStorage.setItem("productoKey", JSON.stringify(listaProductos));
            }
            else {
                listaProductos[i].destacado = false;
                localStorage.setItem("productoKey", JSON.stringify(listaProductos));
            }
        }
    }
    leerDatos();
}

//FUNCIONALIDAD PARA DIBUJAR FILAS
function dibujarFilas(productosLS) {
    let tablaprod = document.getElementById("tablaProductos")
    let codigoHTML = "";
    for (let i in productosLS) {
        if (productosLS[i].publicado == false && productosLS[i].destacado == false) {
            codigoHTML = `<tr>
        <td scope="row">${productosLS[i].codigo}</th>
        <td>${productosLS[i].nombre}</td>
        <td>${productosLS[i].categoria}</td>
        <td class="descripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox">
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button><i class="far fa-edit fa-1x"></i></button>
            <button onclick="destacador(${productosLS[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`
            tablaprod.innerHTML += codigoHTML;
        }
        else if (productosLS[i].publicado == true && productosLS[i].destacado == false) {
            codigoHTML = `<tr>
        <td scope="row">${productosLS[i].codigo}</th>
        <td>${productosLS[i].nombre}</td>
        <td>${productosLS[i].categoria}</td>
        <td class="descripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox" checked>
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button><i class="far fa-edit fa-1x"></i></button>
            <button onclick="destacador(${productosLS[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`
            tablaprod.innerHTML += codigoHTML;
        }
        else if (productosLS[i].publicado == false && productosLS[i].destacado == true) {
            codigoHTML = `<tr>
        <td scope="row">${productosLS[i].codigo}</th>
        <td>${productosLS[i].nombre}</td>
        <td>${productosLS[i].categoria}</td>
        <td class="descripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox">
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button><i class="far fa-edit fa-1x"></i></button>
            <button onclick="destacador(${productosLS[i].codigo})"><i class="fas fa-star fa-1x"></i></button>
        </td>
    </tr>`
            tablaprod.innerHTML += codigoHTML;
        }
        else if (productosLS[i].publicado == true && productosLS[i].destacado == true) {
            codigoHTML = `<tr>
        <td scope="row">${productosLS[i].codigo}</th>
        <td>${productosLS[i].nombre}</td>
        <td>${productosLS[i].categoria}</td>
        <td class="descripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox" checked>
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button><i class="far fa-edit fa-1x"></i></button>
            <button onclick="destacador(${productosLS[i].codigo})"><i class="fas fa-star fa-1x"></i></button>
        </td>
    </tr>`
            tablaprod.innerHTML += codigoHTML;
        }
    }
}

//FUNCIONALIDAD PARA BORRAR FILAS
function borrarFilas() {
    let tablaprod = document.getElementById("tablaProductos")
    if (tablaprod.children.length > 0) {
        while (tablaprod.firstChild) {
            tablaprod.removeChild(tablaprod.firstChild)
        }
    }
}

//FUNCIONALIDAD PARA LIMPIAR FORMULARIO
window.limpiarForm = function () {
    let codigo = document.getElementById("codigo");
    let nombre = document.getElementById("nombre");
    let categoria = document.getElementById("categoria");
    let descripcion = document.getElementById("descripcion");
    let imagen = document.getElementById("imagen");
    let iframeurl = document.getElementById("iframeurl");
    let formProducto = document.getElementById("formProducto");
    formProducto.reset();
    codigo.className = "form-control"
    nombre.className = "form-control"
    categoria.className = "form-control"
    descripcion.className = "form-control"
    imagen.className = "form-control"
    iframeurl.className = "form-control"
    productoExistente = false;
}

//FUNCIONALIDAD BOTON ENVIAR -CHOOSER
window.agregarModificar = function (event) {
    event.preventDefault();
    if (productoExistente == false) {
        agregarProducto();
    } else {
        guardarProductoModificado();
    }
}

//FUNCIONALIDAD BOTON ENVIAR - NUEVO PRODUCTO
function agregarProducto() {
    //Traigo los valores del formulario y los defino como variables
    let codigo = document.getElementById("codigo");
    let nombre = document.getElementById("nombre");
    let categoria = document.getElementById("categoria");
    let descripcion = document.getElementById("descripcion");
    let imagen = document.getElementById("imagen");
    let iframeurl = document.getElementById("iframeurl");

    //Valido el formulario de manera general
    if (validarCodigo(codigo) && campoRequerido(nombre) && campoRequerido(categoria) && campoRequerido(descripcion) && campoRequerido(imagen) && validarUrl(iframeurl)) {
        //Creamos un objeto nuevo con los valores que trajimos de los inputs del formulario
        let producto = new Producto(codigo.value, nombre.value, categoria.value, descripcion.value, imagen.value, iframeurl.value,);
        listaProductos.push(producto);
        localStorage.setItem("productoKey", JSON.stringify(listaProductos));
        leerDatos();
        limpiarForm();
        let ventanaModal = document.getElementById("modalProducto");
        $(ventanaModal).modal("hide");
    } else {
        validarCodigo(codigo);
        campoRequerido(nombre);
        campoRequerido(categoria);
        campoRequerido(descripcion);
        campoRequerido(imagen);
        document.getElementById("validacionGeneral").className = "is-invalid";
    }
}

//VALIDACION DE FORMULARIO
window.validarCodigo = function (codigo) {
    let productosLS = JSON.parse(localStorage.getItem("productoKey"));
    if (codigo.value != "" && !isNaN(codigo.value)) {
        if (localStorage.lenght == 0 || productosLS == null) {
            codigo.className = "form-control is-valid";
            return true;
        }
        else {
            for (let i in productosLS) {
                if (productosLS[i].codigo == codigo.value) {
                    alert("No pueden existir codigos duplicados. Escriba un codigo unico.");
                    codigo.className = "form-control is-invalid";
                    return false;
                }
            }
            codigo.className = "form-control is-valid";
            return true;
        }
    } else {
        codigo.className = "form-control is-invalid";
        return false;
    }
}

window.campoRequerido = function (input) {
    if (input.value != "") {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

window.validarUrl = function (urlIntroducida) {
    let expresion = /[(http(s)?:\/\/)]{7,8}[:\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (urlIntroducida.value != "") {
        if (expresion.test(urlIntroducida.value)) {
            urlIntroducida.className = "form-control is-valid";
            return true;
        } else {
            urlIntroducida.className = "form-control is-invalid";
            return false;
        }
    } else {
        urlIntroducida.className = "form-control"
        return true
    }
}
