import * as uuid from  `uuid`

/**
 * @typedef {object} UserSearchCriteria
 * @property {string=} id
 * @property {string=} email
 * @typedef {object} UserPersistence
 * @property {function(UserSearchCriteria):boolean} exists - this function validate
 */
export default class UserService{

    /**
     * 
     * @param {UserPersistence} userPersistence 
     */
    constructor(userPersistence) {
        this.userPersistence = userPersistence
    }
    // se usa esto para q otro programador sepa como funciona
    /**
     * This function register a new user in the app
     * 
     * @param {object} request 
     * @param {string=} request.name // el igual significa que es opcional
     * @param {string=} request.email
     * @param {string=} request.password
     * 
     * @throws {Error} Ivalid user name
     * @throws {Error} Ivalid user email
     * @throws {Error} Ivalid user password
     */
    addUser(request) {
        this.checkAddUserRequest(request)

        const user = {
            id: uuid.v4(),
            name: request.name,
            email: request.email,
            password: request.password,
            createAt: new Date(),
            updateAt: new Date()
        }

        if(this.userPersistence.exists({email: user.email})){

            console.log("El usuario existe")
        }

        console.log(user)

    }

    /**@private */
    checkAddUserRequest(request){

        if(request?.name == ""){// informa un error si el usuario es vacio
            throw Error ("Invalid User Name")
        }
        if(request?.email == ""){// informa un error si el email es vacio
            throw Error ("Invalid User email")
        }
        if(request?.password == ""){// informa un error si el password es vacio
            throw Error ("Invalid User password")
        }
    }

}