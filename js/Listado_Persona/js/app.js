console.log("js app")

const personas = [
    new Persona("Juan","Perez"),
    new Persona("Pedro","Waldo")
];

function mostrarPersonas(){
    console.log("Mostrar Personas")
    let texto = ""

    for(let persona of personas){
        console.log(persona.toString())

        texto += `<li> ${persona.idPersona} ${persona.nombre} ${persona.apellido} </li>`
    }
    document.getElementById("personas").innerHTML = texto

}

function agregarPersona(){

    const forma = document.getElementById("forma")
    //const forma = document.forms(`forma`)
    const nombre = forma["nombre"]
    const apellido = forma["apellido"]

    if(nombre.value !="" && apellido.value!=""){
        const persona = new Persona(nombre.value, apellido.value)
    console.log(persona.toString())
    personas.push(persona)
    mostrarPersonas()
    }else{
        alert("Ingrese un nombre y un apelldio")
    }
    
}