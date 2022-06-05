const idImg = document.getElementById("img")
const nombre = document.getElementById("name")
const comment = document.getElementById("comment")
const comentarios = []

const addComment = () => {
    if (nombre.value != "" && comment.value != "") {
        const comentario = new Comentario(idImg.value ? idImg.value : "./default.jpg", nombre.value, comment.value)
        comentarios.push(comentario)
        viewComments(comentario)
    } else alert("Ingrese un Nombre y un Comentario")
}

const viewComments = (comentario) => {
    const nuevoArticle = document.createElement("article")
    nuevoArticle.innerHTML = `<img src="${comentario.idImg}" alt="${comentario.nombre}">
    <div class="text">
    <strong>Comentario de ${comentario.nombre}:</strong>
    <p>${comentario.comentario}</p></div>`
    document.getElementById("comments-section").appendChild(nuevoArticle)
    document.getElementById("count").innerHTML = Comentario.cantidadComentarios
}

let contaComent = 1
const crearComentario = () => {
    const nuevoArticle = document.createElement("article")
    nuevoArticle.innerHTML = `<img src="${document.getElementById("img").value ? document.getElementById("img").value:`./default.jpg`}" alt="${document.getElementById("name").value}" width="100%" height="100%">
    <div class="text">
    <strong>Comentario de ${document.getElementById("name").value}:</strong>
    <p>${document.getElementById("comment").value}</p></div>`
    document.getElementById("comments-section").appendChild(nuevoArticle)
    document.getElementById("count").innerHTML = ++contaComent
}
