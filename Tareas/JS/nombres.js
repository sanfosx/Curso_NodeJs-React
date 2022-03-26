//let nombres = ["Santiago", "Juan", "Martin","Lucia","daniel", "Dario"]
let nombres = ["ivo", "Estefania", "Jesus", "Juan", "Guillermo", "Dario"]
const nombresSalida = (nombres) => {
    let salida =[]
    nombres.forEach(element => {
        if (element.length < 9 && element.length > 3) {
            if (element.indexOf("n") < 0) {
                salida.push(element)
                //console.log(salida)
            }
        }
    });
    return salida
}
salida = nombresSalida(nombres)
console.log(salida)