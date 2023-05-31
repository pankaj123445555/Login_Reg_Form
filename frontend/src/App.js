import './App.css'

import Login from './Component/Login';
import Signup from './Component/Signup';
import HomePage from './Component/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userdetails from './Component/Userdetails';

function App() {
  return (
    <BrowserRouter>
      
    <div className="App">
    <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/users" element={<Userdetails/>}/>
    </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
