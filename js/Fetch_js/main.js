//const urlApi = "https://shibe.online/api/shibes?count=[1]&urls=true&httpsUrls=true"

const fotoPerro = document.querySelector("#fotoPerro")
const boton = document.querySelector("#cambiarImg")

const traerFoto = async () => {

    let fotoObtenida = await fetch(urlApi, {}).then(respuesta => respuesta.json()).then(final => final).catch((error) => console.log(error))

    fotoPerro.src = fotoObtenida
}


boton.addEventListener("click", traerFoto)