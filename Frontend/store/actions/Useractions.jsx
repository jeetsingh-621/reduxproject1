import { toast } from "react-toastify";
import axios from "../../src/api/AxiosConfig";
import { loaduser, removeuser } from "../reducers/Userslice";
import { useNavigate } from "react-router-dom";


export const asyncdeleteuser =(id)=>async(dispatch,getsate)=>{
    try {
         
              await axios.delete("/users/"+id);
              dispatch(asynclogoutuser())


    } catch (error) {
        // console.log(error);
    }
    
}
export const asyncupdateuser=(id,user)=>async (dispatch,getsate)=>{
    try {
        const {data} = await axios.patch(`/users/${id}`,user);
        localStorage.setItem("user",JSON.stringify(data))
        // dispatch(asynccurrentuser());
        dispatch(loaduser(data));


    } catch (error) {
        console.log(error);
         toast.error(error.response?.data?.message || "updation failed!");
    }

}
export const asynccurrentuser =()=>async(dispatch,getsate)=>{
    try {
         
      const user =  JSON.parse( localStorage.getItem("user"));

      if(user){
         dispatch(loaduser(user));

        }
      else console.log("user not logged in!")

    } catch (error) {
        console.log(error);
        toast.error(error);
    }
    
}

export const asynclogoutuser =()=>async(dispatch,getsate)=>{
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
        if (data.length > 0) {
            localStorage.setItem("user", JSON.stringify(data[0]));
            dispatch(loaduser(data[0])); // ✅ Now Redux gets updated immediately
            // toast.success("Login successful"); // Optional
        } else {
            toast.error("Invalid credentials");
        }

    } catch (error) {
            toast.error("Login failed!");
        console.log(error);
    }
    
}

export const asyncregisteruser=(user)=>async (dispatch,getsate)=>{
    try {
        const res = await axios.post("/users",user);
        // console.log(res);
        toast.success("User registered successfully!");


    } catch (error) {
        console.log(error);
         toast.error(error.response?.data?.message || "Registration failed!");
    }

}