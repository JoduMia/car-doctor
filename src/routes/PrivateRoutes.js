import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider'

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    
    if(loading){
      return <h1 className='text-blue-600 text-center'>Loading....</h1>
    }
  if(user){
    return children;
  }
  return <Navigate to={'/login'} state={{from: location}} replace />
}

export default PrivateRoutes