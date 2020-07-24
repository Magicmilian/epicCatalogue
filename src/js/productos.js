//Con export default podemos utilizar esta clase desde otros archivos
export default class Productos{
    constructor(codigo, nombre, categoria, descripcion, imagen,iframeurl){
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.iframeurl = iframeurl;
        this.publicado = false;
        this.destacado = false;
    }
}