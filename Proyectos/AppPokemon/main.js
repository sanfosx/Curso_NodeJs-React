const urlApi2 = "https://pokeapi.co/api/v2/pokemon/"
const allPokemons = []
const urlApi = "https://pokeapi.co/api/v2/pokemon/"
let idPokemon = 0
let agregados = []
let pokeTipos = ""
let imagenes = document.getElementById("img")
console.log("id", idPokemon)
const pokemono2 = async (nombre) => { // buscar el pokemono en la api
    let pokemon = urlApi2 + nombre
    let datosPokemon = await fetch(pokemon)
        .then(respuesta => respuesta.json())
        .then(final => allPokemons.push(final.sprites.other.home.front_default))
        .catch((error) => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pokemon no encontrado!'
        }))
}

let cargarImg = () => {
    
    allPokemons.forEach((img, index) => {
        setTimeout(() => {
            imagenes.style.visibility = "visible"
            imagenes.setAttribute("src", img)
            console.log(img)
        }, index * 5000)
    })
}
const cargarTodos = () => {


    for (let i = 1; i < 20; i++) {

        pokemono2(i);
    }

    console.log(allPokemons)
    setTimeout(cargarImg, 3000)
    datoAlmacenados()

}

//favoritos
const verAlert = () => { //para ingresear el nombre del pokemono
    (async () => {
        const {
            value: text
        } = await Swal.fire({
            title: 'Agregar Pokemon',
            input: 'text',
            inputPlaceholder: 'Ingresa el nombre del Pokemon'
        })
        console.log(urlApi + text)
        if (text) { //valido si no es vacio 
            pokemono(text, true)
        } else {
            Swal.fire("Ingresa el nombre de un Pokemon")
        }
    })()
}

const pokemono = async (nombre, alertBolean) => { // buscar el pokemono en la api
    let pokemon = urlApi + nombre.toLowerCase()
    let datosPokemon = await fetch(pokemon)
        .then(respuesta => respuesta.json())
        .then(final => agregarPokemon(final, alertBolean))
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Pokemon no encontrado!'
            }), console.log(error)
        })
}

const agregarPokemon = (datosPokemon, alertBolean) => { // agrega el pokemono

    if (agregados.indexOf(datosPokemon.name) < 0) {

        let tipos = ""
        if (datosPokemon.types[1]) {
            tipos = datosPokemon.types[0].type.name + "/" + datosPokemon.types[1].type.name
            console.log(tipos)

        } else tipos = datosPokemon.types[0].type.name
        const seccion = document.getElementById("container")
        const article = document.createElement("article")
        article.id = idPokemon
        article.classList.add("elementos")
        article.style.backgroundColor = buscarColor(datosPokemon.types[0].type.name) // por el tipo busca el color asignado
        article.style.color = article.style.backgroundColor
        article.innerHTML = `<strong class="borrar" id="" onClick="borrarPokemon(${idPokemon})"><i class="fa-solid fa-xmark"></i></strong>
                            <img src="${datosPokemon.sprites.other.home.front_default}" alt="pokemon">
                            <p class="texto">${datosPokemon.name}</p>
                            <p class="tipo">${tipos.toLocaleUpperCase()}</p>`
        seccion.appendChild(article)
        idPokemon 
        agregados.push(datosPokemon.name)
        
        console.log(agregados, "push" +idPokemon)
        
        if (alertBolean) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Pokemon Agregado',
                showConfirmButton: false,
                timer: 1500
            })
            idPokemon++
        }
    } else Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Pokemon ya registrado!'
    })

}

const getRandomColor = () => { // genera un color al azar
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const buscarTipo = async () => { //busqueda de type
    let pokemon = "https://pokeapi.co/api/v2/type"
    let datosPokemon = await fetch(pokemon)
        .then(respuesta => respuesta.json())
        .then(final => colorSegunTipo(final.results))
        .catch((error) => Swal.fire("Algo ha fallado!!! :("))
}

const colorSegunTipo = (tipos) => { //asigna un color al azar a cada tipo
    for (let tipo of tipos) {
        switch (tipo.name) {
            case "water":
                tipo.color = "#4381A4"
                break
            case "electric":
                tipo.color = "#DAD332"
                break
            case "plant":
                tipo.color = "#539748"
                break
            case "normal":
                tipo.color = "#635A53"
                break
            default:
                tipo.color = getRandomColor()
        }
    }
    pokeTipos = tipos
    console.log(pokeTipos)
}

const buscarColor = (tipoNombre) => { // busca el color segun el tipo recibido
    let color = ""
    for (let tipo of pokeTipos) {

        if (tipo.name == tipoNombre) {
            color = tipo.color
            console.log("for", color)
            break
        }
    }
    console.log("ok", color)
    return color
}

const borrarPokemon = (id) => { // borra el elemnto pokemono
    Swal.fire({
        title: 'Estas seguro de Eliminar?',
        text: "Esto no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo eliminarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            let borrarArticle = document.getElementById(`${id}`)
            delete agregados[(id - 1)]
            //idPokemon--
            console.log(agregados, id, idPokemon)
            borrarArticle.remove()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Pokemon Eliminado',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
}


//LOCAL STORAGE

const alertStorage = () => { //para ingresear el nombre usuario
    (async () => {
        const {
            value: text
        } = await Swal.fire({
            title: 'Bienvenido Usuario Nuevo',
            input: 'text',
            inputPlaceholder: 'ingresa tu usuario'
        })

        if (text) { //valido si no es vacio 
            localStorage.setItem("usuario1", text)
            let saludar = document.getElementById("saludarUsuario")
            saludar.innerHTML = "Bienvenido!!! " + text.toUpperCase() + "  .Poke app, una simple pagina hecha con javascript, html y pokeAppi."
            console.log("hola " + localStorage.getItem("usuario1"))
            
        } else {
            alertStorage()
        }
    })()
}

const datoAlmacenados = () => {

    if (typeof (Storage) !== "undefined") {
        console.log("LocalStorage disponible")
        if (localStorage.usuario1 == undefined) {

            alertStorage()
            //cargarFavoritos()

        } else {
            let saludar = document.getElementById("saludarUsuario")
            saludar.innerHTML = "Bienvenido!!! " + localStorage.getItem("usuario1").toUpperCase() + "  .Poke app, una simple pagina hecha con javascript, html y pokeAppi."
            console.log("hola " + localStorage.getItem("usuario1"))
            cargarFavoritos()

        }

    } else {
        console.log("no soporta el navegador")

    }

}

const borrarStorage = () => {

    localStorage.clear()
    agregados = []
    document.getElementById("container").innerHTML = `<Button id="btn" onclick="verAlert()">+</Button>`
    alertStorage()

}
buscarTipo() // busca la cantidad de tipos para asignarle un ramdon color


document.addEventListener("visibilitychange", function () {// controla cuando se sale de la pagina 
    if (document.visibilityState != 'visible') {
    
        localStorage.setItem("favoritos", JSON.stringify(agregados))
    }
});

const cargarFavoritos = () => {

    console.log(JSON.parse(localStorage.getItem("favoritos")))

    const favoritos = JSON.parse(localStorage.getItem("favoritos"))
    if (favoritos.length > 0) {
        favoritos.forEach((element) => {
            pokemono(element, false)
            idPokemon = favoritos.length
        })
    }else idPokemon = 0
}