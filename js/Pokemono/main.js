const urlApi = "https://pokeapi.co/api/v2/pokemon/"
let idPokemon = 0
let agregados = []
let pokeTipos = ""

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
           pokemono(text)
        } else {
            Swal.fire("Ingresa el nombre de un Pokemon")
        }
    })()
}

const pokemono = async (nombre) => { // buscar el pokemono en la api
    let pokemon = urlApi + nombre.toLowerCase()
    let datosPokemon = await fetch(pokemon)
        .then(respuesta => respuesta.json())
        .then(final => agregarPokemon(final))
        .catch((error) => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pokemon no encontrado!'
        }))
}

const agregarPokemon = (datosPokemon) => { // agrega el pokemono

    if (agregados.indexOf(datosPokemon.name) < 0) {

        let tipos=""
        if(datosPokemon.types[1]){
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
                            <img src="${datosPokemon.sprites.front_default}" alt="pokemon">
                            <p class="texto">${datosPokemon.name}</p>
                            <p class="tipo">${tipos.toLocaleUpperCase()}</p>`
        seccion.appendChild(article)
        agregados.push(datosPokemon.name)
        idPokemon++
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Pokemon Agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }else Swal.fire({
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
            borrarArticle.remove()
            delete agregados[(id - 1)]
            console.log(agregados, id)
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

buscarTipo() // busca la cantidad de tipos para asignarle un ramdon color