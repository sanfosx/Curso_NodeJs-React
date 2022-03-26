class Producto {

    static contadorProducto = 0

    constructor(descripcion, precio){
        this._idProducto = ++Producto.contadorProducto
        this._descripcion = descripcion
        this._precio = precio
    }

    get idProducto (){
        return this._idProducto
    }

    get descripcion(){
        return this._descripcion
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio
    }

    set descripcion(descripcion){
        this._descripcion = descripcion
    }
}