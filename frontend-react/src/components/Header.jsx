import React,{useContext} from 'react'
import Button from './Button'
import { Link ,navigate} from 'react-router-dom'
import { Authcontext } from './AuthProvider'

const Header = () => {
    const {isLoggedIn,setIsLoggedIn}=useContext(Authcontext)

    const handleLogout=()=>{
     localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')

     setIsLoggedIn(false)
     console.log('logged out')
     navigate('/login')

    }
  return (
    <>
<nav className='navbar container pt-3 pb-3 align-items-start'>
    <Link className='navbar-brand text-light'to="/">StocK Analysis portal</Link>
    <div>
        {isLoggedIn ? (
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        )
        :(<>
        <Button text="Login" class="btn-outline-info" url="/login"/>
        &nbsp;
        <Button text="Register" class="btn-info" url="/register"/>  
        </>
        )}
        
    </div>
</nav>

    </>
  )
}

export default Header