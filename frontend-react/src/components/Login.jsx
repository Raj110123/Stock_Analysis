import React,{ useContext, useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from './AuthProvider'


const Login = () => {
     const [username,setUsername]=useState('')
          const [loading,setLoading]=useState(false)
        const [password,setPassword]=useState('')
const navigate=useNavigate()
const [error,setError]=useState('')
const {isLoggedIn,setIsLoggedIn}=useContext(Authcontext)
 const handlelogin=async(e)=>{
e.preventDefault();
const userData={username,password}
console.log("userData=>",userData)

try{
const response=await axios.post("http://127.0.0.1:8000/api/v1/token/",userData)
localStorage.setItem('accessToken',response.data.access)
localStorage.setItem('refreshToken',response.data.refresh)

console.log('Login Successful');
navigate('/')
setIsLoggedIn(true)
}catch(error){
  console.error('Invalid Credentials')
  setError('Invalid Credentials')
}


 }       
  return (
<>
<div className='container' justify-content-center>
    <div className='row justify-content-center'>
        <div className='col-md-6 bg-light-dark p-5 rounded'>
<h3 className='text-light text-center'>Login To Our Portal</h3>
<form onSubmit={handlelogin}>
    <div className='mb-3'>
<input type="text" className='form-control ' placeholder='enter username' value={username} onChange={(e) => setUsername(e.target.value)}/>
    </div>
 
  <div className='mb-5'> 
      <input type="password" className='form-control ' placeholder='set password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

</div>
{error&&<div className='text-danger'>{error}</div>}
{loading ? (
      <button type='submit' className='btn btn-info d-block mx-auto'><FontAwesomeIcon icon={faSpinner} spin/>Logging in...</button>
 
):(   <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
)}



</form>

        </div>
    </div>
</div>
</>  )
}

export default Login