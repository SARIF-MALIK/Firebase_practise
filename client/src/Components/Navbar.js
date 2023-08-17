import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import {auth} from '../config/Firebase'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  console.log( (localStorage.getItem("token")))
  const navigate = useNavigate(); 
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      localStorage.removeItem('token');
      navigate('/login')
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="container-fluid">
      <Link className="navbar-brand fs-1 fst-italic" to="/">RTTM</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li> 
          
        </ul>
        
        <div className='d-flex'> 
            
            {
              !(localStorage.getItem("token"))?
            <div>
            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-success mx-1" to="/newuser">Signup</Link>
            </div>
            : <Button className="btn bg-white text-success mx-1" onClick={handleSignOut}>SignOut</Button>
            }
        </div>
      </div>
    </div>
  </nav></div>
  )
}
