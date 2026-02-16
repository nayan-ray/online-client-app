import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthenContex';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {
   const {student} = useContext(AuthContext)
    if(student){
        return <Navigate to={'/dashboard'} replace={true} />
    }
  return children;
}

export default PublicRoutes