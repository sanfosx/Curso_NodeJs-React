class DispositvoEntrada {

    constructor(tipoEntrada, marca) {

        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get tipoEntrada() {
        return this._tipoEntrada
    }

    get marca() {
        return this._marca
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada
    }

    set marca(marca) {
        this._marca = marca
    }

}

class Raton extends DispositvoEntrada {

    static contadorRatones = 0

    constructor(tipoEntrada, marca) {

        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones


    }

    get idRaton() {

        return this._idRaton
    }

    toString() {

        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`

    }

}

class Teclado extends DispositvoEntrada {

    static contadorTeclado = 0

    constructor(entrada, marca) {

        super(entrada, marca)
        this._idTeclado = ++Teclado.contadorTeclado
    }

    get idTeclado() {
        return this._idTeclado
    }

    toString() {

        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

class Monitor {

    static contadorMonitores = 0

    constructor(marca, tamaño) {

        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor() {

        return this._idMonitor
    }

    get marca() {
        return this._marca
    }

    get tamaño() {
        return this._tamaño
    }

    set marca(marca) {
        this._marca = marca
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño
    }

    toString() {

        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`
    }

}

class Computadora {

    static contadorComputadoras = 0

    constructor(nombre, monitor, raton, teclado) {

        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._raton = raton
        this._teclado = teclado
    }

    get idComputadora() {
        return this._idComputadora
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado} `
    }
}

class Orden {

    static contadorOrdenes = 0

    constructor() {

        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }

    get idOrden() {
        return this._idOrden
    }

    agregarComputadoras(Computadora) {

        this._computadoras.push(Computadora)
    }

    mostrarOrden() {

        let computadorasOrden = ""

        for (let computadora of this._computadoras) {

            computadorasOrden += `\n ${computadora}`
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }

}

let raton1 = new Raton("USB", "HP")
console.log(raton1.toString())
let raton2 = new Raton("Bluetooth", "Dell")
console.log(raton2.toString())

let teclado1 = new Teclado("USB", "Logitech")
let teclado2 = new Teclado("wireless", "Dell")

console.log(teclado1.toString())
console.log(teclado2.toString())

let monitor1 = new Monitor("lg", "grande")
let monitor2 = new Monitor("lenovo", "mediano")

console.log(monitor1.toString())
console.log(monitor2.toString())

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1)
let computadora2 = new Computadora("Dell", monitor2, raton2, teclado2)

console.log(computadora1.toString())
console.log(computadora2.toString())

let orden1 = new Orden()
orden1.agregarComputadoras(computadora1)
orden1.agregarComputadoras(computadora2)
orden1.agregarComputadoras(computadora1)
orden1.mostrarOrden()

let orden2 = new Orden()
orden2.agregarComputadoras(computadora1)
orden2.agregarComputadoras(computadora2)
orden2.mostrarOrden()