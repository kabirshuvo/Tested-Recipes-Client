import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user)
    if(loading){
        return <Spinner animation="border" variant="success" />
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>

    
};

export default PrivateRoute;