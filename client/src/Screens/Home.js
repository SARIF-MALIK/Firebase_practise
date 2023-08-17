import React from 'react'

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
    <Navbar/>

    <div className='body'>
        
    </div>

    <h1>Hello, React Bootstrap!</h1>
    <button variant="primary">Click me</button>
    <button onClick={putData}>putData</button>
    </div>
  )
}
