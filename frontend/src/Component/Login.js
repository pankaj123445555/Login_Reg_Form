import React from 'react'

import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(props) {
   const {setLogic}  = props
  const [name ,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [dob,setDob] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async() => {
   
    try {
      const response = await axios.post('http://localhost:5000/api/register', { name,email,password,dob });
       console.log('pankaj',response);
       localStorage.setItem("userInfo", JSON.stringify(response.data));
       navigate('/users');
    } catch (error) {
      console.error(error);
    }
  }
    return (
      <div id="sign-up">
         <div id='upper-div'>
         <button id='login-comp-btn' onClick={()=> setLogic(true)}>LOGIN</button>
         </div>
         <div id='form1'>
          <div className='login-pass'>
          <div className='input-field'>
           <input type='text' placeholder='email' name='username' onChange={(e)=> setEmail(e.target.value)}/>
           <input type='password' placeholder='Password' name='password' onChange={(e)=> setPassword(e.target.value)}/>
           <input type='text' placeholder='name' name='name' onChange={(e)=> setName(e.target.value)}/>
           <input type='date' placeholder='dob' name='dob' onChange={(e)=> setDob(e.target.value)}/>
           <button id='sign-up-btn' onClick={()=> handleSubmit()}>SIGN-UP</button>
          </div>
          </div>
         </div>
      </div>
    )
  
}

export default Login
