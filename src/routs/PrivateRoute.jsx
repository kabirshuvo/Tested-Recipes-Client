import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user)
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>

    
};

export default PrivateRoute;