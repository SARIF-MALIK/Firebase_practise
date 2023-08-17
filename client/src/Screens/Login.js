import {React, useState} from 'react'
import { Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/Firebase'
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [cred, setCred] = useState({email:"", password:""}); 
    const navigate = useNavigate(); 
    const handleInput = (e)=>{
        setCred({...cred, [e.target.name]:e.target.value}); 
    } 

    const handleSubmit = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, cred.email, cred.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user); 
            localStorage.setItem("token", user.accessToken); 
            navigate('/'); 
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            window.alert('wrong credentials');  
            // ..
          })       
    }
  return (
    <div className='container m-5 w-6'>
    <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={cred.email} onChange={handleInput} name='email'/>
        <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={cred.password} onChange={handleInput} name='password'/>
        <label for="floatingPassword">Password</label>
    </div>
    <div className= 'd-flex'>
    <Button className='mt-3 p-3' style={{ width: '100%'}} onClick={handleSubmit}>Submit</Button>
    </div>
    <div className='d-flex'>
    <Button className='mt-3 mx-2 p-2' style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={()=>navigate('/newuser')}>New User</Button>
    <Link to='/reset' className='mt-4'>forgot password</Link>
    </div>
</div>
  )
}
