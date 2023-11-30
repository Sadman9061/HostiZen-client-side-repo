import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


import Swal from "sweetalert2";
const PrivateRoute = ({children}) => {
        const {user,loading} = useContext(AuthContext);
        const location = useLocation();
        console.log(location);
    if(loading){
        return <div className="flex justify-center items-center h-[100vh]"><span className="loading loading-spinner loading-lg"></span></div>; 
    }
    if(user){
        return children;
    }
    Swal.fire({
        title: 'Oopps!',
        text: ' Please Login First',
        icon: 'error',
        confirmButtonText: 'Got it!'
    })
    return <Navigate state={location.pathname} to='/login'></Navigate>;

};

export default PrivateRoute;