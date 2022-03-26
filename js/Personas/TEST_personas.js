class Persona {

    static contadorPersona = 0

    constructor(nombre, apellido, edad) {

        this._nombre = nombre,
        this._apellido = apellido
        this._edad = edad
        this._idPersona = ++Persona.contadorPersona
        this._id= ++Empleado.contadorEmpleados
    }

    get idPersona() {
        return this._idPersona
    }

    get nombre() {
        return this._nombre
    }

    get apellido(){
        return this._apellido
    }

    get edad(){
        return this._edad
    }

    set nombre(nombre) {
        this._nombre = nombre
    }

    set apellido(apellido) {
        this._apellido = apellido
    }

    set edad(edad) {
        this._edad = edad
    }

    toString() {
        return `
                    ${this._idPersona} 
                    ${this._nombre} 
                    ${this._apellido} 
                    ${this._edad}`;
    }



}

class Empleado extends Persona {

    static contadorEmpleados= 0

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado= ++Empleado.contadorEmpleados
        this._sueldo= sueldo
    }

    get idEmpleado(){
        return this_idEmpleado
    }

    get sueldo(){

        return this._sueldo
    }

    set sueldo(sueldo){

        this._sueldo= sueldo
    }

    toString(){

        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`;

    }

    }

    class Cliente extends Persona{

        static contadorClientes= 0;
    
        constructor (nombre, apellido, edad, fechaRegistro){
            super(nombre, apellido, edad)
            this._idCliente = ++Cliente.contadorClientes
            this._fechaRegistro = fechaRegistro
        }
    
    
        get idCliente(){
            return this._idCliente
        }
    
        get fechaRegistro(){
            return this._fechaRegistro
        }
    
        set fechaRegistro(fechaRegistro){
    
            this._fechaRegistro = fechaRegistro
        }
    
        toString(){
    
            return `${super.toString()} 
                    ${this._idCliente} 
                    ${this._fechaRegistro}`
    
        }
    
    }

    //Prueba de las clases
    let persona1 = new Persona("lalo", "Perez", 25)
    let persona2 = new Persona("gato", "Perezi", 25)
    console.log(persona1.toString())
    console.log(persona2.toString())

    let empleado1 = new Empleado("lalo", "Perez", 25,145000)
    let empleado2 = new Empleado("juanit", "Perezi", 25, 5000)
    console.log(empleado1.toString())
    console.log(empleado2.toString())

    let cliente1 = new Cliente("raul", "Perez", 25, new Date())
    let cliente2 = new Cliente("mario", "Perezi", 25, new Date())
    console.log(cliente1.toString())
    console.log(cliente2.toString())