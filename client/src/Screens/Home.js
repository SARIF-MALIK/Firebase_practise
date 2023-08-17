import React from 'react'
import { Button} from 'react-bootstrap';
import Navbar from '../Components/Navbar';

import {getDatabase, ref, set} from "firebase/database"
const db = getDatabase(); 

export default function Home() {
  const putData = ()=>{
    set(ref(db, 'user/sam'), {
      username : 'sam12345',
      email : 'sam123@gmail.com',
      profile_pic : 'image23.jpg'
       })
  }
  return (
    <div>
    {/* <Navbar/> */}

    <div className='body'>
        
    </div>

    <h1>Hello, React Bootstrap!</h1>
    <Button variant="primary">Click me</Button>
    <button onClick={putData}>putData</button>
    </div>
  )
}
