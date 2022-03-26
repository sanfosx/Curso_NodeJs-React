class Monitor {
    
    static contadorMonitores = 0

    constructor (marca, tamaño){

        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor(){

        return this._idMonitor
    }

    get marca(){
        return this._marca
    }

    get tamaño(){
        return this._tamaño
    }

    set marca(marca){
        this._marca = marca
    }

    set tamaño(tamaño){
        this._tamaño = tamaño
    }

    toString(){

        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`
    }

}

let monitor1 = new Monitor("lg", "grande")
let monitor2 = new Monitor("lenovo", "mediano")

console.log(monitor1.toString())
console.log(monitor2.toString())