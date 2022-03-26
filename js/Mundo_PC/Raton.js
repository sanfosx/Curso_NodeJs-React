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

class Raton extends DispositvoEntrada {

    static contadorRatones = 0

    constructor(tipoEntrada, marca){

        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones


    }

    get idRaton(){

        return this._idRaton
    }

    toString(){

        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`

    }

}

let raton1= new Raton("USB", "HP")
console.log(raton1.toString())
let raton2 = new Raton("Bluetooth","Dell")
console.log(raton2.toString())