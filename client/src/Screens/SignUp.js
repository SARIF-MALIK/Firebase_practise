import {React, useState} from 'react'

import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/Fireauth'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [cred, setCred] = useState({email:"", password:""}); 
    const navigate = useNavigate(); 
    const handleInput = (e)=>{
        setCred({...cred, [e.target.name]:e.target.value}); 
        console.log(cred); 
    } 

    const handleSubmit = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, cred.email, cred.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user); 
            // ...
            navigate('/login'); 
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })       
    }

    return (
        <div className='container m-5'>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={cred.email} onChange={handleInput} name='email'/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={cred.password} onChange={handleInput} name='password'/>
                <label for="floatingPassword">Password</label>
            </div>
            <div className= 'd-flex'>
            <button className='mt-3 p-3' style={{ width: '100%'}} onClick={handleSubmit}>Submit</button>
            <button className='mt-3 mx-2 p-2' style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={()=>navigate('/login')}>Already Registered</button>
            </div>
        </div>
    )
}
