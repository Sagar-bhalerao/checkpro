import axios from 'axios';
import { toast } from 'react-toastify';


export const BaseURl = 'http://192.168.179.23:5172';
export const GetLocations = async () => {
  try {
    const response = await axios.get(`${BaseURl}/locations`);
    return response.data;
  } catch (error:any) {
   toast.error(error.response.data.message);
  }
};

export const Register = async(data: any)=>{
    try {
        const response = await axios.post(`${BaseURl}/registration`,data);
        if (response.status === 201) {
            toast.success(response.data.message);          
            return response.status
        }

    } catch (error:any) {
        toast.error(error.response.data.message)
        
    }
}


//login
export const Login = async(data: any)=>{
    try {
        const response = await axios.post(`${BaseURl}/login`,data);
        if (response.status === 200) {
            toast.success(response.data.message);            
       
        }
        return {status:response.status,data:response.data}

    } catch (error:any) {
        toast.error(error.response.data.message)
        
    }
}


