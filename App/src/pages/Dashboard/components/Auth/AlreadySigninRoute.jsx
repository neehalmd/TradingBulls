import React from 'react'
import useAuth from '../../../../Hooks/useAuth'
import { Navigate } from 'react-router-dom'

const AlreadySigninRoute = ({children}) => {
    const {token} = useAuth()
    
    
  return <>{
    !token ? children : <Navigate to="/"/> 
 }</>
}

export default AlreadySigninRoute