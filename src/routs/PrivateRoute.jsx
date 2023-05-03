import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {/* Your component content here */}
        </div>
    );
};

export default PrivateRoute;