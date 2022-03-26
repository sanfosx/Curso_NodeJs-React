class DispositvoEntrada{

    constructor (tipoEntrada, marca){

        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }

    get marca(){
        return this._marca
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    set marca(marca){
        this._marca = marca
    }
    
}

class Teclado extends DispositvoEntrada{

    static contadorTeclado = 0

    constructor(entrada, marca){

        super(entrada,marca)
        this._idTeclado = ++Teclado.contadorTeclado
    }

    get idTeclado(){
        return this._idTeclado
    }

    toString(){

        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

let teclado1 = new Teclado ("USB","Logitech")
let teclado2 = new Teclado ("wireless","Dell")

console.log(teclado1.toString())
console.log(teclado2.toString())