import React from 'react'
import Navbar from '../Components/Navbar';
import {getDatabase, ref, set} from "firebase/database"

import { collection, addDoc } from "firebase/firestore"; 
import { db_Firestore } from '../config/Firebase';

const db = getDatabase(); 

export default function Home() {
  // const putData = ()=>{
  //   set(ref(db, 'user/sam'), {
  //     username : 'sam12345',
  //     email : 'sam123@gmail.com',
  //     profile_pic : 'image23.jpg'
  //      })
  // }



  const docRef = async()=> await addDoc(collection(db_Firestore, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  }).then(console.log("Document written with ID: ", docRef.id));


  return (
    <div>
    <Navbar/>

    <div className='body'>
        
    </div>

    <h1>Hello, React Bootstrap!</h1>
    <button variant="primary">Click me</button>
    {/* <button onClick={putData}>putData</button> */}
    <button onClick={docRef}>putData</button>
    </div>
  )
}
