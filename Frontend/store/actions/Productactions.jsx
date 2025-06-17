
import { toast } from "react-toastify";
import axios from "../../src/api/AxiosConfig";
import { loadproduct } from "../reducers/Productslice";


export const asyncloadproducts = ()=>async(dispatch,getstate)=>{
    try {
        const {data} =await axios.get("/products");
        dispatch(loadproduct(data));
    } catch (error) {
        // console.log(error);
        toast.error(error);
    }
}
export const asynccreateproduct =(product)=>async(dispatch,getsate)=>{
    try {
         
              await axios.post("/products",product);
              dispatch(asyncloadproducts(product))


    } catch (error) {
        console.log(error);
    }
    
}
export const asyncupdateproduct =(id,product)=>async(dispatch,getsate)=>{
    try {
         
              await axios.patch("/products/"+id,product);
              dispatch(asyncloadproducts(product))


    } catch (error) {
        console.log(error);
    }
    
}
export const asyncdeleteproduct =(id)=>async(dispatch,getsate)=>{
    try {
         
              await axios.delete("/products/"+id);
              dispatch(asyncloadproducts())


    } catch (error) {
        console.log(error);
    }
    
}