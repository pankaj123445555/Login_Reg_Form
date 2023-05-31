import { set } from 'mongoose';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const {setLogic} = props;
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async() => {
    console.log(email,password);
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email,password });
       console.log(response);
       localStorage.setItem("userInfo", JSON.stringify(response.data));
       navigate('/users');
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <div id="sign-up">
       <div id='sign-in'>
        <div id='text' onClick={()=> setLogic(false)}>
        <h2 id='text1'>SIGN UP</h2>
        </div>
       </div>
       <div id='form'>
        <div className='login-pass'>
        <div className='input-field'>
         <input type='text' placeholder='email' name='email' onChange={(e)=> setEmail(e.target.value)}/>
         <input type='password' placeholder='Password' name='password' onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className='login-button'>
        <button className='button' onClick={()=> handleSubmit()}>LOGIN</button>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Signup
