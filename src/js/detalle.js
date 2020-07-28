import "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import "../css/style.css";

//TEST
detallesJuego(1);

window.dibujarDetalles = function(){
    // let codigoJuego = JSON.parse(localStorage.getItem("codigoKey"));
    // detallesJuego(codigoJuego);

}

function detallesJuego(codigo){
    let productosLS = JSON.parse(localStorage.getItem("productoKey"));
    let sliderDetalles = document.getElementById("sliderDetalles");
    let sectionDetalles = document.getElementById("sectionDetalles");
    let juegoFiltrado = productosLS.filter(function (producto) {
        return producto.codigo == codigo;
    });
    //Cambiamos el title
    document.title = juegoFiltrado[0].nombre;
    //Dibujamos el slider
    let sliderHTML = `
    <div class="carousel-item active sliderImg">
        <img src="img/${juegoFiltrado[0].imagen2}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item sliderImg">
        <img src="img/${juegoFiltrado[0].imagen3}" class="d-block w-100" alt="...">
    </div>`
    sliderDetalles.innerHTML += sliderHTML;

    //Preguntamos si el campo iframeurl esta vacio o no
    if(juegoFiltrado[0].iframeurl != ""){
        //Si el campo no esta vacio, dibujamos la seccion con el iframe
        let detallesHTML = `<div class="row">
        <!--iframe-Juego Detalles-->
        <div class="col-12 col-lg-8 mt-4 p-4 text-center iframeDisplay">
            <iframe class="" width="100%" height="" src="${juegoFiltrado[0].iframeurl}"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <div class="col-12 col-lg-4 p-4 mt-4">
            <!--Detalles-->
            <h1 class="text-light">${juegoFiltrado[0].nombre}</h1>
            <h3 class="text-light">${juegoFiltrado[0].categoria}</h3>
            <p class="descripcionDetalles">${juegoFiltrado[0].descripcion}</p>
        </div>
    </div>`;
        sectionDetalles.innerHTML += detallesHTML;
    }else{
        //Si el campo esta vacio, dibujamos la seccion sin el iframe
        let detallesHTML = ` <div class="my-4">
        <h1 class="text-light">${juegoFiltrado[0].nombre}</h1>
        <h3 class="text-light">${juegoFiltrado[0].categoria}</h3>
        <p>${juegoFiltrado[0].descripcion}</p>
    </div>`;
    sectionDetalles.innerHTML += detallesHTML;
    }
}