import React from 'react'
import '../App.css'
import Signup from './Signup'
import { useState } from 'react'
import Login from './Login';
function HomePage() {
  const [logic,setLogic] = useState(true);
  return (
    <div id = 'main'>
    {logic ? <Signup setLogic = {setLogic}/> : <Login setLogic = {setLogic}/>}
      
    </div>
  )
}

export default HomePage
