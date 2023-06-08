import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Screens/SignUp';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/newuser' element={<SignUp/>}/>
      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
