import { useContext } from "react";
import React from 'react'
import { Authcontext } from "./components/AuthProvider";
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useContext(Authcontext)
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoute