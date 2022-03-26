const costo_total = montos => {
    let total = 0
    montos.forEach(element => {
        total += element
    });
    return total
}

const costo_total_y_envio = (montos, provincia) => {
    total = costo_total(montos)
    let costo
    if (provincia == "Cordoba" || total >= 20000 || montos.length >= 19) {
        costo = 0
    }
    else if (provincia == "Santa Fe" || provincia == "Buenos Aires" || provincia == "San Luis") {
        costo = 300
        if (montos.length > 3) {
            diferencia = montos.length - 3
            costo += diferencia * 150
        }
    }
    else {
        costo = 600
        if (montos.length > 3) {
            diferencia = montos.length - 3
            costo += diferencia * 300
        }
    }

    total += costo
    return total
}

let provincia = "Cordoba"
let montos = [1, 2, 3, 4]

console.log(costo_total_y_envio(montos, provincia))
