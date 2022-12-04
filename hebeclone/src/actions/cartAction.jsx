import axios from "axios"

export  const getcart=()=>async (dispatch)=>{
   try{
    let data=await axios.get("http://localhost:8080/cart")
    console.log(data.data)
   return  dispatch({
    type:"GETCART",
    payload:data.data
      
      
    })
   }catch(e){
    console.log(e)
   }
}
export const HandleQuantiy=({id,quantity})=>async (dispatch)=>{
    try{
        let data=await axios.patch(`http://localhost:8080/cart/${id}`,{quantity})
        let arr=await axios.get("http://localhost:8080/cart")
        return  dispatch({
            type:"GETCART",
            payload:arr.data
              
              
            })
    }catch(e){

    }
}