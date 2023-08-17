import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login'                 


function App() {
  
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/newuser' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>

    </div>
    
    </Router>
  );
}

export default App;
