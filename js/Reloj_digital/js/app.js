console.log("RELOJ DIGITAL...")

const mostrarReloj = () =>{

    let fecha = new Date()
    let hora = formatoHora(fecha.getHours())
    let minutos = formatoHora(fecha.getMinutes())
    let segundos = formatoHora(fecha.getSeconds())

    document.getElementById("hora").innerHTML = `${hora}h:${minutos}m:${segundos}s`

    const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]
    const dias =["Dom","Lun","Mar","Mie","Jue","Vie","Sab"]

    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate()
    let mesActual = meses[fecha.getMonth()]
    let año = fecha.getFullYear()
    let fechaTexto = `${diaSemana} ${dia}-${mesActual}-${año}`
    document.getElementById("fecha").innerHTML = fechaTexto

    document.getElementById("contenedor").classList.toggle("animar")
}

const formatoHora = (hora) =>{
    if(hora <10){
        hora = "0"+ hora
    }
    return hora
}


setInterval(mostrarReloj, 1000)