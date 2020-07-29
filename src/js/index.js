import "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import "../css/style.css";

// DESTACADO
destacar();
function destacar() {
    let productoLS = JSON.parse(localStorage.getItem("productoKey"));
    for (let i in productoLS) {
        if (productoLS[i].publicado == true && productoLS[i].destacado == true) {

            document.getElementById("destacado").innerHTML = `<div class="row">
    <div class="col-lg-8 p-0">
        <section class="carrusel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/${productoLS[i].imagen2}" class="d-block w-100" alt="${productoLS[i].nombre}">
                    </div>
                    <div class="carousel-item">
                        <img src="img/${productoLS[i].imagen3}" class="d-block w-100" alt="${productoLS[i].nombre}">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                    data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                    data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
    </div>
    <div class="col-lg-4 my-auto">
        <h1 class="display-5 text-light mt-2 w-100">${productoLS[i].nombre}</h1>
        <p class="lead w-100">${productoLS[i].descripcion}</p>
        <p>${productoLS[i].categoria}</p>
        <a class="btn btn-primary btn-md mx-4 mb-4 lead" href="#" role="button" id="${productoLS[i].codigo}>VER MAS</a>
    </div>
</div>`
        }
    }
};

// CATEGORIA
categArcade();
function categArcade() {
    let productoLS = JSON.parse(localStorage.getItem("productoKey"));
    let arcadeJS = document.getElementById("ARCADE");
    for (let i in productoLS) {
        if (productoLS[i].publicado == true && productoLS[i].categoria == "Arcade, supervivencia y aventuras") {
            let htmlCateg = `<div class="col-6 col-md-2">
            <div class="card" style="width:100%">
                <img src="img/${productoLS[i].imagen1}" class="card-img-top" alt="" style="width:100%">
                <div class="card-body">
                    <a class="text-light" href="#" id="${productoLS[i].codigo}>
                        <h5 class="card-title">${productoLS[i].nombre}</h5>
                    </a>
                </div>
            </div>
        </div> `
            arcadeJS.innerHTML += htmlCateg;
        }
    }
};

categAccion();
function categAccion() {
    let productoLS = JSON.parse(localStorage.getItem("productoKey"));
    let accionJS = document.getElementById("ACCION");
    for (let i in productoLS) {
        if (productoLS[i].publicado == true && productoLS[i].categoria == "Acción, supervivencia y guerra") {
            let htmlCateg = `<div class="col-6 col-md-2">
            <div class="card" style="width:100%">
                <img src="img/${productoLS[i].imagen1}" class="card-img-top" alt="" style="width:100%">
                <div class="card-body">
                    <a class="text-light" href="#" id="${productoLS[i].codigo}">
                        <h5 class="card-title">${productoLS[i].nombre}</h5>
                    </a>
                </div>
            </div>
        </div> `
            accionJS.innerHTML += htmlCateg;
        }
    }
};

categSimulacion();
function categSimulacion() {
    let productoLS = JSON.parse(localStorage.getItem("productoKey"));
    let simulacionJS = document.getElementById("SIMULACION");
    for (let i in productoLS) {
        if (productoLS[i].publicado == true && productoLS[i].categoria == "Simulación") {
            let htmlCateg = `<div class="col-6 col-md-2">
            <div class="card" style="width:100%">
                <img src="img/${productoLS[i].imagen1}" class="card-img-top" alt="" style="width:100%">
                <div class="card-body p-0 mt-1">
                    <a class="text-light" href="#" id="${productoLS[i].codigo}>
                        <h5 class="card-title p-0">${productoLS[i].nombre}</h5>
                    </a>
                </div>
            </div>
        </div> `
            simulacionJS.innerHTML += htmlCateg;
        }
    }
};
// PROXIMAMENTE
categProximamente();
function categProximamente() {
    let productoLS = JSON.parse(localStorage.getItem("productoKey"));
    let proximamenteJS = document.getElementsByClassName("PROXIMAMENTE");
    for (let i in productoLS) {
        if (productoLS[i].publicado == true && productoLS[i].categoria == "Proximamente") {
            let htmlCateg = `   <div class="col-md-6">
            <img src="img/${productoLS[i].imagen1}" class="img-fluid d-block w-100 mt-3" alt="">
            <a class="text-light" href="#" id="${productoLS[i].codigo}>
                <h5 class="card-title mt-2">${productoLS[i].nombre}</h5>
            </a>
        </div>`
            proximamenteJS.innerHTML += htmlCateg;
        }
    }
};

