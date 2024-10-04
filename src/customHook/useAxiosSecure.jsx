import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true
})
const useAxiosSecure = () => {
const{logOut}=useAuth()
const navigate=useNavigate()

// intercetor

// response interceptor
axiosSecure.interceptors.response.use(
    res=>{
        // console.log('response app a aser agei ami thamay dekteci ki ase ar vitor',res)
    return res
},
 async error=>{
 console.log('error from axios interceptor',error.response);
 if(error.response.status===401 || error.response.status===403){
  await  logOut()
  navigate('/logIn')
 }
 return Promise.reject(error)
}
)

// requset interceptor
// axios.interceptors.request

    return axiosSecure 
};

export default useAxiosSecure;