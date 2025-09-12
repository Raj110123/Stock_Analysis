import React ,{useState,useContext,createContext}from 'react'
const Authcontext=createContext();


const AuthProvider=({children})=>{
        const[isLoggedIn,setIsLoggedIn]=useState(!!localStorage.getItem('accessToken'))
    
  return (
    <Authcontext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
        </Authcontext.Provider>
  )
}

export default AuthProvider
export {Authcontext};