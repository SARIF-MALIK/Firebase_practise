import React from 'react'
import { Button} from 'react-bootstrap';
import Navbar from '../Components/Navbar';
export default function Home() {
  return (
    <div>
    <Navbar/>
    <h1>Hello, React Bootstrap!</h1>
    <Button variant="primary">Click me</Button>
    </div>
  )
}
