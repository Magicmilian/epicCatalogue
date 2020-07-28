//Con export default podemos utilizar esta clase desde otros archivos
export default class Productos{
    constructor(codigo, nombre, categoria, descripcion, imagen1, imagen2, imagen3, iframeurl){
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.imagen3 = imagen3;
        this.iframeurl = iframeurl;
        this.publicado = false;
        this.destacado = false;
    }
}