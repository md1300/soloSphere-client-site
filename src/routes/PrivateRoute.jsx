import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading}=useContext(AuthContext)
    
    if(loading)return <p>loading ....................</p>
    if(user)return children

    return <Navigate to='/logIn' state={location.pathname} replace:true  /> 
};

export default PrivateRoute;