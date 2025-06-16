import { toast } from "react-toastify";
import axios from "../../src/api/AxiosConfig";
import { loaduser, removeuser } from "../reducers/Userslice";
import { useNavigate } from "react-router-dom";



export const asynccurrentuser =(user)=>async(dispatch,getsate)=>{
    try {
         
      const user =  JSON.parse( localStorage.getItem("user"));

      if(user){
         dispatch(loaduser(user));
        toast.success("User login successfully!");

        }
      else console.log("user not logged in!")

    } catch (error) {
        console.log(error);
        toast.error(error);
    }
    
}

export const asynclogoutuser =(user)=>async(dispatch,getsate)=>{
    try {
          
        localStorage.removeItem("user");
        dispatch(removeuser());
        console.log("user logged out!");
        toast.success("User logged out!");

    } catch (error) {
        console.log(error);
    }
    
}



export const asyncloginuser =(user)=>async(dispatch,getsate)=>{
    try {
          const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        // console.log(data[0]);
        localStorage.setItem("user",JSON.stringify(data[0]));

    } catch (error) {
        console.log(error);
    }
    
}

export const asyncregisteruser=(user)=>async (dispatch,getsate)=>{
    try {
        const res = await axios.post("/users",user);
        console.log(res);
        toast.success("User registered successfully!");


    } catch (error) {
        console.log(error);
         toast.error(error.response?.data?.message || "Registration failed!");
    }

}