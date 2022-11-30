import { legacy_createStore } from "redux";

let intial={
    users: [{
        id:"",
    firstName: '',
        lastName: '',
        email: '',
        password: ''
      }],
      loggedInuser:null,
    
}
export const reducer=(store=intial,action)=>{
    switch (action.type){
        case "REGISTER":
            return {
          
            ...store,
            users :[...store.users,action.payload]
          
 
        }
        case "LOGIN":
            return{
                ...store,
                users: action.payload
            }

        
        default :
        return store;
        
    }

}