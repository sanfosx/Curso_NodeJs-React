console.log("persona js")

class Persona {

    static contPersonas = 0

    constructor(nombre, apellido){
        this._idPersona = ++Persona.contPersonas
        this._apellido = apellido
        this._nombre = nombre
    }

    get idPersona(){
        return this._idPersona
    }

    get apellido(){
        return this._apellido
    }

    get nombre(){
        return this._nombre
    }

    set apellido(apellido){
        this._apellido = apellido
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    toString(){
        return `Id: ${this._idPersona} Nombre: ${this._nombre} Apellido: ${this._apellido}`
    }
}