const urlApi = "https://pokeapi.co/api/v2/pokemon/"
const urlApi2 = "https://pokeapi.co/api/v2/pokemon-species/"
const allPokemons = []
const nombres = []
let agregados = []
let pokeTipos = ""
let imagenes = document.getElementById("img")
let idContent = ""
let current_page = 1;
let obj_per_page = 6;

class Pokemon {
    constructor(name, img, idHtml) {
        this._name = name,
            this._img = img
        this._idHtml = idHtml
    }
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
    get img() {
        return this._img
    }
    set img(img) {
        this._img = img
    }
    get idHtml() {
        return this._idHtml
    }
    set idHtml(idHtml) {
        this._idHtml = idHtml
    }
}
const pokemono2 = async (name) => { // buscar el pokemono en la api
    let pokemon = urlApi + name
    let datosPokemon = await fetch(pokemon)
        .then(respuesta => respuesta.json())
        .then(final => {
            allPokemons.push(final);
            nombres.push(final.name)
        })
        .catch((error) => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pokemon no encontrado!'
        }))
}
const cargarImg = () => {
    ramdonArray(allPokemons)
    allPokemons.forEach((img, index) => {
        setTimeout(() => {
            imagenes.style.visibility = "visible"
            imagenes.setAttribute("src", img.sprites.other.home.front_default)
            document.getElementById("cabecera").addEventListener("mouseenter", function (event) {
                //event.setAttribute("border","2pt " + "solid " + buscarColor(img.types[0].type.name)) 
            })
            document.getElementById("titulo-id").innerHTML = `#${img.id}`
            document.getElementById("titulo-name").innerHTML = img.name.toLocaleUpperCase()
            document.getElementById("titulo-name").style.color = buscarColor(img.types[0].type.name)
            document.getElementById("titulo-tipo1").innerHTML = img.types[0].type.name.toLocaleUpperCase()
            document.getElementById("titulo-tipo1").style.backgroundColor = buscarColor(img.types[0].type.name)
            if (img.types[1]) {
                document.getElementById("tipo-tipo").innerHTML = "Tipos"
                document.getElementById("titulo-tipo2").classList.add("tipo")
                document.getElementById("titulo-tipo2").innerHTML = img.types[1].type.name.toLocaleUpperCase()
                document.getElementById("titulo-tipo2").style.backgroundColor = buscarColor(img.types[1].type.name)
            } else {
                document.getElementById("tipo-tipo").innerHTML = "Tipo"
                document.getElementById("titulo-tipo2").classList.remove("tipo")
                document.getElementById("titulo-tipo2").style.backgroundColor = ""
                document.getElementById("titulo-tipo2").innerHTML = ""
            }
            
        }, index * 5000)
    })
}
const cargarTodos = () => {
    for (let i = 1; i < 898; i++) {
        pokemono2(i);
    }
    setTimeout(cargarImg, 1000)
    datoAlmacenados()  
}
//favoritos
const verAlert = () => { //para ingresear el name del pokemono
    (async () => {
        const {
            value: text
        } = await Swal.fire({
            title: 'Agregar Pokemon',
            input: 'text',
            inputPlaceholder: 'Ingresa el name del Pokemon'
        })
        console.log(urlApi + text)
        if (text) { //valido si no es vacio 
            pokemono(text, true, "container")
        } else {
            Swal.fire("Ingresa el name de un Pokemon")
        }
    })()
}
const pokemono = async (name, alertBolean, contenedor) => { // buscar el pokemono en la api
    let pokemon = urlApi + name.toLowerCase()
    let datosPokemon = await fetch(pokemon)
        .then(respuesta => respuesta.json())
        .then(final => agregarPokemon(final, alertBolean, contenedor))
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Pokemon no encontrado!'
            }), console.log(error)
        })
}
const agregarPokemon = (datosPokemon, alertBolean, contenedor) => { // agrega el pokemono

    const nombreP = datosPokemon.name.charAt(0).toUpperCase() + datosPokemon.name.slice(1); //capitalize
    let tipos = ""
    if (datosPokemon.types[1]) {
        tipos = `${datosPokemon.types[0].type.name} -<span style="color:${buscarColor(datosPokemon.types[1].type.name)}"> ${datosPokemon.types[1].type.name}</span>`
    } else tipos = datosPokemon.types[0].type.name
    let seccion = document.getElementById(contenedor)
    const article = document.createElement("article")
    article.id = datosPokemon.id
    article.classList.add("elementos")
    article.style.backgroundColor = buscarColor(datosPokemon.types[0].type.name) // por el idHtml busca el color asignado
    article.style.color = article.style.backgroundColor
    article.innerHTML = `<strong class="borrar"  onClick="borrarPokemon(${datosPokemon.id})"><i class="fa-solid fa-xmark"></i></strong>
                            <img src="${datosPokemon.sprites.other.home.front_default}" alt="pokemon">
                            <p class="texto">${nombreP}</p>
                            <p class="tipo">${tipos.toLocaleUpperCase()}</p>`
    article.addEventListener("mouseover", cambiarTipo = (art) => { //cambia el backgroundColor si hay dos tipos cuando se hace hover
        if (datosPokemon.types[1]) {
            article.style.backgroundColor = buscarColor(datosPokemon.types[1].type.name)
        }
    })
    article.addEventListener("mouseout", cambiarTipo = (art) => { //vuelve al backgroundColor tipo 0
        if (datosPokemon.types[1]) {
            article.style.backgroundColor = buscarColor(datosPokemon.types[0].type.name)
        }
    })
    seccion.appendChild(article)

    if (contenedor == "container") {
        agregados.push(datosPokemon)
        console.log(datosPokemon, "······························$$$$$$$$$$$$$$$$$$$$")
        console.log(contenedor)
    } else console.log("NOCONTAINER")

    if (alertBolean) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Pokemon Agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }
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
const colorSegunTipo = (tipos) => { //asigna un color al azar a cada idHtml
    for (let idHtml of tipos) {
        switch (idHtml.name) {
            case "water":
                idHtml.color = " #30e4dc"
                break
            case "electric":
                idHtml.color = "#DAD332"
                break
            case "plant":
                idHtml.color = "#539748"
                break
            case "normal":
                idHtml.color = "#635A53"
                break
            case "fire":
                idHtml.color = " #fc3c0c"
                break
            default:
                idHtml.color = getRandomColor()
        }
    }
    pokeTipos = tipos
}
const buscarColor = (tipoNombre) => { // busca el color segun el idHtml recibido
    let color = ""
    for (let idHtml of pokeTipos) {
        if (idHtml.name == tipoNombre) {
            color = idHtml.color
            break
        }
    }
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
            agregados.forEach((element, index) => {
                if (element.idHtml == id) {
                    agregados.splice(index, 1)
                    console.log(index, id, element.idHtml)
                }
            })
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
const alertStorage = () => { //para ingresear el name usuario
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
document.addEventListener("visibilitychange", function () { // controla cuando se sale de la pagina 
    if (document.visibilityState != 'visible') {
        localStorage.setItem("favoritos", JSON.stringify(agregados))
    }
});
const cargarFavoritos = () => {
    console.log(JSON.parse(localStorage.getItem("favoritos")))
    const favoritos = JSON.parse(localStorage.getItem("favoritos"))
    if (favoritos.length > 0) {
       favoritos.forEach((element) => {
            pokemono(element.name, false, "container")
        })

       /*change(1 ,favoritos,"container")
        paraElNextPrev = favoritos
        idContent = "container"*/
    }
}
const ramdonArray = array => array.sort(() => Math.random() - 0.5); //para desordenar un arreglo
autocomplete(document.getElementById("marcas"), nombres);
console.log(nombres);
//Paginado
let paraElNextPrev
let verTodos = () => {
    change(1, allPokemons, "TableList")
    paraElNextPrev = allPokemons
    idContent = "TableList"
}
function totNumPages(arreglo) {
    if (arreglo.length) {
        return Math.trunc(arreglo.length / obj_per_page);
    }
}

function prevPage() {
    if (current_page > 1) {
        current_page--;
        change(current_page, paraElNextPrev, idContent);
    }
}
function nextPage() {
    if (current_page < totNumPages(paraElNextPrev)) {
        current_page++;
        change(current_page, paraElNextPrev, idContent);
    }
}

function change(page, arreglo, idContenedor) {
    if (idContenedor == "TableList") {
        var btn_next = document.getElementById("btn_next");
        var btn_prev = document.getElementById("btn_prev");
        var page_span = document.getElementById("page")
        var listing_table = document.getElementById(idContenedor);
        listing_table.innerHTML = "";
    } else {
        var btn_next = document.getElementById("btn_next2");
        var btn_prev = document.getElementById("btn_prev2");
        var page_span = document.getElementById("page2")
    }
    if (page < 1) page = 1;
    if (page > totNumPages(arreglo)) page = totNumPages(arreglo);
    for (let i = (page - 1) * obj_per_page; i < (page * obj_per_page); i++) {
        agregarPokemon(arreglo[i], false, idContenedor)
    }
    page_span.innerHTML = `${page} of ${totNumPages(arreglo)}`;
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }
    if (page == totNumPages(arreglo)) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}


//Auto complete
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}