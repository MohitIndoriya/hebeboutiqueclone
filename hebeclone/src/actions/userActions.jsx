import axios from "axios"
export const Signin=(creds)=>async (dispatch)=>{
    dispatch({type:"LODING"})
    try{
        let res=await axios.get(`http://localhost:8080/users?email=${creds.email}&password=${creds.password}`)
        if(res.data.length>0){
            alert("Login Succesfull")
            return dispatch({type:"LOGIN",paylode:res.data[0].firstName})
          
        }else{
            alert("user not exist")
        }
    }catch(e){
        console.log(e.message)
    }
}

export const Logout =()=>(dispatch)=>{
   return  dispatch({type:"LOGOUT"})
}