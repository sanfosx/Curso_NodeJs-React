class Empleado extends Persona {

    static contadorEmpleados

    constructor(sueldo){

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

    