const ingresos = [
    new Ingreso("Salario", 10000),
    new Ingreso("venta", 15000)
]

const egresos = [
    new Egreso("Luz", 1000),
    new Egreso("Agua", 1500)
]

let cargarApp = () => {
    cargarCabecero()
    cargarIngresos()
    cargarEgresos()
}

let totalIngresos = () => {
    let totalIngreso = 0
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor
    }
    return totalIngreso
}

let totalEgresos = () => {
    let totalEgreso = 0
    for (let egreso of egresos) {
        totalEgreso += egreso.valor
    }
    return totalEgreso
}
let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos() / totalIngresos()

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto)
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos())
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos())
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso)
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimunFractionDigits: 2
    })
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString("en-US", {
        style: "percent",
        minimunFractionDigits: 2
    })
}

const cargarIngresos = () => {
    let ingresosHTML = ""
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresosHTML(ingreso)
    }

    document.getElementById("lista-ingresos").innerHTML = ingresosHTML
}

const crearIngresosHTML = (ingreso) => {
    let ingresosHTML = ` <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">
        ${ingreso.descripcion}
    </div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn" onclick= "eliminarIngreso(${ingreso.idIngreso})">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return ingresosHTML

}

const cargarEgresos = () => {
    let egresosHTML = ""

    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso)
    }

    document.getElementById("lista-egresos").innerHTML = egresosHTML
}

const crearEgresoHTML = (egreso) => {
    let egresosHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">
        ${egreso.descripcion}
    </div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn" onclick= "eliminarEgreso(${egreso.idEgreso})">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return egresosHTML
}

const eliminarIngreso = (idIngreso) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.idIngreso === idIngreso)
    ingresos.splice(indiceEliminar,1)
    cargarCabecero()
    cargarIngresos()
}

const eliminarEgreso = (idEgreso) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.idEgreso === idEgreso)
    egresos.splice(indiceEliminar,1)
    cargarCabecero()
    cargarEgresos()
}

let agregarDato = () =>{
    let forma = document.forms["forma"]
    let tipo = forma["tipo"]
    let descripcion = forma["descripcion"]
    let valor = forma["valor"]

    if(descripcion.value !=="" && valor !== ""){
        if(tipo.value === "Ingreso"){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)))
            cargarCabecero()
            cargarIngresos()

        }else if(tipo.value ==="Egreso"){
            egresos.push(new Egreso(descripcion.value, +valor.value))
            cargarCabecero()
            cargarEgresos()
        }
    }
}
