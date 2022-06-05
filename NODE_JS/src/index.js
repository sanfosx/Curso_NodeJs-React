import UserService from "./services/userService.js";

const userPersistenceMock = {
    /**
     * 
     * @param {import(`./services/UserService`).UserSearchCriteria} request 
     */
    exists: (request) => {

    }
}
const userService = new UserService();

try {
    userService.addUser({name:"", email:"",password:""})
} catch (e) {

   console.log(e.messaje)
}