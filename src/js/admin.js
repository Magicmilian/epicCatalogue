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
                for (let i in listaProductos) {
                    if ((listaProductos[i]).codigo != codigo) {
                        listaProductos[i].destacado = false;
                    }
                }
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
        <td class="tablaNombre">${productosLS[i].nombre}</td>
        <td class="tablaCategoria">${productosLS[i].categoria}</td>
        <td class="tablaDescripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox">
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button onclick="eliminarProducto(${productosLS[i].codigo})" class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button onclick="abrirModificarProducto(${productosLS[i].codigo})"><i class="far fa-edit fa-1x"></i></button>
            <button onclick="destacador(${productosLS[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`
            tablaprod.innerHTML += codigoHTML;
        }
        else if (productosLS[i].publicado == true && productosLS[i].destacado == false) {
            codigoHTML = `<tr>
        <td scope="row">${productosLS[i].codigo}</th>
        <td class="tablaNombre">${productosLS[i].nombre}</td>
        <td class="tablaCategoria">${productosLS[i].categoria}</td>
        <td class="tablaDescripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox" checked>
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button onclick="eliminarProducto(${productosLS[i].codigo})" class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button onclick="abrirModificarProducto(${productosLS[i].codigo})"><i class="far fa-edit fa-1x"></i></button>
            <button onclick="destacador(${productosLS[i].codigo})"><i class="far fa-star fa-1x"></i></button>
        </td>
    </tr>`
            tablaprod.innerHTML += codigoHTML;
        }
        else if (productosLS[i].publicado == false && productosLS[i].destacado == true) {
            codigoHTML = `<tr>
        <td scope="row">${productosLS[i].codigo}</th>
        <td class="tablaNombre">${productosLS[i].nombre}</td>
        <td class="tablaCategoria">${productosLS[i].categoria}</td>
        <td class="tablaDescripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox">
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button onclick="eliminarProducto(${productosLS[i].codigo})" class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button onclick="abrirModificarProducto(${productosLS[i].codigo})"><i class="far fa-edit fa-1x"></i></button>
            <button onclick="destacador(${productosLS[i].codigo})"><i class="fas fa-star fa-1x"></i></button>
        </td>
    </tr>`
            tablaprod.innerHTML += codigoHTML;
        }
        else if (productosLS[i].publicado == true && productosLS[i].destacado == true) {
            codigoHTML = `<tr>
        <td scope="row">${productosLS[i].codigo}</th>
        <td class="tablaNombre">${productosLS[i].nombre}</td>
        <td class="tablaCategoria">${productosLS[i].categoria}</td>
        <td class="tablaDescripcion">${productosLS[i].descripcion}</td>
        <td>
            <label class="checkContainer">
                <input id="${productosLS[i].codigo}" onchange="publicador(this.id)" type="checkbox" checked>
                <span class="checkmark"></span>
            </label>
        </td>
        <td class="opciones">
            <button onclick="eliminarProducto(${productosLS[i].codigo})" class="btnSizeCustom"><i class="far fa-trash-alt fa-1x"></i></button>
            <button onclick="abrirModificarProducto(${productosLS[i].codigo})"><i class="far fa-edit fa-1x"></i></button>
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
    let imagen1 = document.getElementById("imagen1");
    let imagen2 = document.getElementById("imagen2");
    let imagen3 = document.getElementById("imagen3");
    let iframeurl = document.getElementById("iframeurl");
    let formProducto = document.getElementById("formProducto");
    document.getElementById("codigo").removeAttribute("disabled");
    formProducto.reset();
    codigo.className = "form-control";
    nombre.className = "form-control";
    categoria.className = "form-control";
    descripcion.className = "form-control";
    imagen1.className = "form-control";
    imagen2.className = "form-control";
    imagen3.className = "form-control";
    iframeurl.className = "form-control";
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
    let imagen1 = document.getElementById("imagen1");
    let imagen2 = document.getElementById("imagen2");
    let imagen3 = document.getElementById("imagen3");
    let iframeurl = document.getElementById("iframeurl");

    //Valido el formulario de manera general
    if (validarCodigo(codigo) && campoRequerido(nombre) && campoRequerido(categoria) && campoRequerido(descripcion) && campoRequerido(imagen1) && campoRequerido(imagen2) && campoRequerido(imagen3) && validarUrl(iframeurl)) {
        //Creamos un objeto nuevo con los valores que trajimos de los inputs del formulario
        let producto = new Producto(codigo.value, nombre.value, categoria.value, descripcion.value, imagen1.value, imagen2.value, imagen3.value, iframeurl.value);
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
        campoRequerido(imagen1);
        campoRequerido(imagen2);
        campoRequerido(imagen3);
        validarUrl(iframeurl);
        document.getElementById("validacionGeneral").className = "is-invalid";
    }
}

//FUNCIONALIDAD PARA ABRIR EL MODAL CON LOS DATOS CARGADOS
window.abrirModificarProducto = function (codigo) {
    //Buscar en el arreglo el objeto que tiene el codigo recibido por parametro
    let objetoEncontrado = listaProductos.find(function (producto) {
        return producto.codigo == codigo;
    })
    //Asignar al modal formulario los valores del objeto encontrado
    document.getElementById("codigo").value = objetoEncontrado.codigo;
    document.getElementById("codigo").setAttribute("disabled", "");
    document.getElementById("nombre").value = objetoEncontrado.nombre;
    document.getElementById("categoria").value = objetoEncontrado.categoria;
    document.getElementById("descripcion").value = objetoEncontrado.descripcion;
    document.getElementById("imagen1").value = objetoEncontrado.imagen1;
    document.getElementById("imagen2").value = objetoEncontrado.imagen2;
    document.getElementById("imagen3").value = objetoEncontrado.imagen3;
    document.getElementById("iframeurl").value = objetoEncontrado.iframeurl;
    //Mostrar la ventana modal
    let ventanaModal = document.getElementById("modalProducto");
    $(ventanaModal).modal("show");
    productoExistente = true;
}

//FUNCIONALIDAD BOTON ENVIAR - PRODUCTO MODIFICADO
window.guardarProductoModificado = function () {
    //Traigo los valores del formulario y los defino como variables
    let codigo = document.getElementById("codigo");
    let nombre = document.getElementById("nombre");
    let categoria = document.getElementById("categoria");
    let descripcion = document.getElementById("descripcion");
    let imagen1 = document.getElementById("imagen1");
    let imagen2 = document.getElementById("imagen2");
    let imagen3 = document.getElementById("imagen3");
    let iframeurl = document.getElementById("iframeurl");
    //Valido el formulario de manera general
    if (campoRequerido(nombre) && campoRequerido(categoria) && campoRequerido(descripcion) && campoRequerido(imagen1) && campoRequerido(imagen2) && campoRequerido(imagen3) && validarUrl(iframeurl)) {
        //Buscar el producto que estaba modificando en el arreglo y actualizar los valores
        for (let i in listaProductos) {
            if (listaProductos[i].codigo == codigo.value) {
                listaProductos[i].nombre = nombre.value;
                listaProductos[i].categoria = categoria.value;
                listaProductos[i].descripcion = descripcion.value;
                listaProductos[i].imagen1 = imagen1.value;
                listaProductos[i].imagen2 = imagen2.value;
                listaProductos[i].imagen3 = imagen3.value;
                listaProductos[i].iframeurl = iframeurl.value;
            }
        }         
        //Actualizar local Storage y dibujamos la tabla
        localStorage.setItem("productoKey", JSON.stringify(listaProductos));
        leerDatos();
        limpiarForm();
        let ventanaModal = document.getElementById("modalProducto");
        $(ventanaModal).modal("hide");
    } else {
        campoRequerido(nombre);
        campoRequerido(categoria);
        campoRequerido(descripcion);
        campoRequerido(imagen1);
        campoRequerido(imagen2);
        campoRequerido(imagen3);
        validarUrl(iframeurl);
        document.getElementById("validacionGeneral").className = "is-invalid";
    }
}

//FUNCIONALIDAD BOTON ELIMINAR
window.eliminarProducto = function (codigo) {
    let productosFiltrados = listaProductos.filter(function (producto) {
        return producto.codigo != codigo;
    });
    localStorage.setItem("productoKey", JSON.stringify(productosFiltrados));
    listaProductos = productosFiltrados;
    leerDatos();
}

//FUNCIONALIDAD PARA SORTEAR LA TABLA
window.sortTable = function (n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tablaProdAll");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
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
