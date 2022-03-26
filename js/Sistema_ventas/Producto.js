class Producto {

    static contadorProductos = 0

    constructor (nombre, precio){

        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }

    get idProducto(){
        return this._idProducto
    }

    get nombre(){
        return this._nombre
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio = precio
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    toString(){
        return `${this._idProducto} 
                ${this._nombre} 
                ${this._precio}`
    }

}

let producto1 = new Producto("yerba",1000)
let producto2 = new Producto("Arroz", 95)
console.log(producto1.toString())
console.log(producto2.toString())




