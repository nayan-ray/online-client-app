import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthenContex";
import Loader from "../components/loader/Loader";

const ProtectedRoutes = ({children}) => {
    const {student, loading} = useContext(AuthContext)
   if(loading){
    return <Loader />
   }

    if(!student){
        return <Navigate to={'/login'} replace={true} />
    }
  return children;
}

export default ProtectedRoutes