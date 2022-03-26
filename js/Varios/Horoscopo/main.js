const forma = document.getElementById("forma")
let fenac = forma["fenac"]

function animalSegunNumero() {
    let anio = parseInt(fenac.value)
    console.log(anio)

    if (anio > 1899 && anio < 2023) {
        let animal = animalChino(anio % 12)
        console.log(animal)
        document.getElementById("queSoy").innerHTML = `<h1> Definitivamente eres ${animal[0]}!!! :) </h1>
        <img src=${animal[1]} alt=${animal[0]} >`

        document.getElementById("forma").innerHTML.value = ""
    } else alert("Ingresa un año que vaya entre 1900 y 2022")
}


function animalChino(anio) {

    switch (anio) {
        case 0:
            return ["Mono", "img/mono.jpg"];
        case 1:
            return ["Gallo", "img/gallo.jpg"];
        case 2:
            return ["Perro", "img/perro.jpg"];
        case 3:
            return ["Cerdo", "img/cerdo.jpg"];
        case 4:
            return ["Rata", "img/rata.jpg"];
        case 5:
            return ["Buey", "img/buey.jpg"];
        case 6:
            return ["Tigre", "img/tigre.jpg"];
        case 7:
            return ["Conejo", "img/conejo.jpg"];
        case 8:
            return ["Dragon", "img/dragon.jpg"];
        case 9:
            return ["Serpiente", "img/serpiente.jpg"];
        case 10:
            return ["Caballo", "img/caballo.jpg"];
        case 11:
            return ["Cabra", "img/cabra.jpg"];

        default:
            return ["ups..", ""];
    }
}