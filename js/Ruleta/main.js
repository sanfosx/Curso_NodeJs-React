const inputNombre= document.getElementById("idNombre")

const listaParticipantes = document.getElementById("participantes")

const cantParticipantes=[]

const agregarParticipante = () => {

    const nombreParticipante = inputNombre.value

    let itemDeLista = document.createElement("li")
    
    itemDeLista.innerHTML = nombreParticipante

    itemDeLista = listaParticipantes.appendChild(itemDeLista).value

    //cantParticipantes=listaParticipantes.appendChild(itemDeLista).value

    console.log(itemDeLista)
}

const seleccionarGanador = () =>{

    let azar = Math.floor((Math.random) * itemDeLista.len)
}